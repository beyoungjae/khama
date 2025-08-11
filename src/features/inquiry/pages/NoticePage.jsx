import { useState, useEffect } from 'react'
import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { Link, useSearchParams } from 'react-router-dom'
import { FaBell, FaCalendarAlt, FaEye, FaSearch, FaFileAlt, FaUser } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { getImageUrl } from '../../../utils/imageHelpers'
import {
  fadeInUp,
  fadeInScale,
  staggerContainer,
  slideInLeft,
  slideInRight,
  PageWrapper,
  Container,
  ModernHeroSection,
  HeroBackground,
  HeroContainer,
  HeroBadge,
  HeroTitle,
  GradientText,
  HeroSubtitle,
  HeroDescription,
  HeroImageContainer,
  HeroImagePlaceholder,
  Section,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  Grid,
  Card,
  CardIcon,
  CardContent,
  CardTitle,
  CardDescription
} from '../../../components/common/SharedStyles'
import { getNotices } from '@/services/noticeService'
import { Pagination } from '@/components/common/Pagination'
import styled from 'styled-components'

export function NoticePage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div
   
   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: listRef, inView: listInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   
   const [searchParams, setSearchParams] = useSearchParams()
   const [notices, setNotices] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page') || '1', 10))
   const [totalPages, setTotalPages] = useState(1)
   const [totalCount, setTotalCount] = useState(0)
   const [searchTerm, setSearchTerm] = useState('')

   const noticesPerPage = 10

   useEffect(() => {
      const fetchNotices = async (page) => {
         try {
            setLoading(true)
            setSearchParams({ page: page.toString() })
            const data = await getNotices(page, noticesPerPage)
            setNotices(data.notices)
            setTotalPages(data.totalPages)
            setTotalCount(data.totalCount)
            setCurrentPage(data.currentPage)
            setError(null)
         } catch (err) {
            console.error('Failed to fetch notices:', err)
            setError('공지사항을 불러오는 중 오류가 발생했습니다.')
            setNotices([])
            setTotalPages(1)
            setTotalCount(0)
         } finally {
            setLoading(false)
         }
      }

      fetchNotices(currentPage)
   }, [currentPage, setSearchParams])

   const handlePageChange = (pageNumber) => {
      if (pageNumber > 0 && pageNumber <= totalPages) {
         setCurrentPage(pageNumber)
         window.scrollTo(0, 0)
      }
   }

   const getNoticeNumber = (index) => {
      return totalCount - (currentPage - 1) * noticesPerPage - index
   }

   const filteredNotices = notices.filter(notice => 
      notice.title.toLowerCase().includes(searchTerm.toLowerCase())
   )

   if (loading && notices.length === 0) {
      return (
         <PageWrapper>
            <LoadingContainer>
               <LoadingSkeleton />
            </LoadingContainer>
         </PageWrapper>
      )
   }

   if (error) {
      return (
         <PageWrapper>
            <ErrorContainer>
               <ErrorCard>
                  <CardIcon $accent>
                     <FaBell />
                  </CardIcon>
                  <CardTitle>오류 발생</CardTitle>
                  <CardDescription>{error}</CardDescription>
               </ErrorCard>
            </ErrorContainer>
         </PageWrapper>
      )
   }

   return (
      <PageWrapper>
         <ModernHeroSection ref={heroRef} bgImage={getImageUrl('hero', 'contact.jpg')}>
            <HeroBackground radialGradient="radial-gradient(circle at 20% 80%, rgba(255, 107, 107, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)" />
            <HeroContainer>
               <motion.div
                  initial="hidden"
                  animate={heroInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaBell /> 공지사항
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     <GradientText>공지사항</GradientText> 안내
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "중요한 소식과 업데이트를 확인하세요"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     KHAMA의 최신 소식과 중요한 공지사항을
                     <br />
                     한눈에 확인할 수 있습니다
                  </HeroDescription>
               </motion.div>
               <HeroImageContainer as={motion.div} variants={slideInRight}>
                  <HeroImagePlaceholder>
                     <FaBell size={80} />
                     <p>공지사항</p>
                  </HeroImagePlaceholder>
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         <Container>
            <Section ref={listRef}>
               <SectionHeader>
                  <SectionTitle
                     as={motion.h2}
                     initial="hidden"
                     animate={listInView ? "visible" : "hidden"}
                     variants={fadeInUp}
                  >
                     공지사항 목록
                  </SectionTitle>
                  <SectionSubtitle
                     as={motion.p}
                     initial="hidden"
                     animate={listInView ? "visible" : "hidden"}
                     variants={fadeInUp}
                  >
                     총 {totalCount}개의 공지사항이 있습니다
                  </SectionSubtitle>
               </SectionHeader>

               <SearchContainer
                  as={motion.div}
                  initial="hidden"
                  animate={listInView ? "visible" : "hidden"}
                  variants={fadeInUp}
               >
                  <SearchWrapper>
                     <SearchIcon>
                        <FaSearch />
                     </SearchIcon>
                     <SearchInput
                        type="text"
                        placeholder="공지사항 제목을 검색하세요..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                     />
                  </SearchWrapper>
               </SearchContainer>

               {loading && <LoadingOverlay>로딩 중...</LoadingOverlay>}

               <NoticeGrid
                  as={motion.div}
                  initial="hidden"
                  animate={listInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  {filteredNotices.length > 0 ? (
                     filteredNotices.map((notice, index) => (
                        <NoticeCard
                           key={notice.id}
                           as={motion.div}
                           variants={fadeInScale}
                           whileHover={{ scale: 1.02, y: -5 }}
                           transition={{ duration: 0.2 }}
                        >
                           <NoticeImageContainer>
                              <NoticeImage>
                                 <FaFileAlt size={40} />
                              </NoticeImage>
                              <NoticeBadge>
                                 #{getNoticeNumber(index)}
                              </NoticeBadge>
                           </NoticeImageContainer>
                           <NoticeContent>
                              <NoticeTitle to={`/notice/${notice.id}`}>
                                 {notice.title}
                              </NoticeTitle>
                              <NoticeMeta>
                                 <MetaItem>
                                    <FaUser size={12} />
                                    {notice.author || '관리자'}
                                 </MetaItem>
                                 <MetaItem>
                                    <FaCalendarAlt size={12} />
                                    {new Date(notice.createdAt).toLocaleDateString()}
                                 </MetaItem>
                                 <MetaItem>
                                    <FaEye size={12} />
                                    {notice.viewCount || 0}
                                 </MetaItem>
                              </NoticeMeta>
                           </NoticeContent>
                        </NoticeCard>
                     ))
                  ) : (
                     <EmptyCard
                        as={motion.div}
                        variants={fadeInScale}
                     >
                        <CardIcon $accent>
                           <FaSearch />
                        </CardIcon>
                        <CardTitle>검색 결과 없음</CardTitle>
                        <CardDescription>
                           {searchTerm ? `'${searchTerm}'에 대한 검색 결과가 없습니다.` : '등록된 공지사항이 없습니다.'}
                        </CardDescription>
                     </EmptyCard>
                  )}
               </NoticeGrid>

               <PaginationWrapper
                  as={motion.div}
                  initial="hidden"
                  animate={listInView ? "visible" : "hidden"}
                  variants={fadeInUp}
               >
                  <Pagination 
                     currentPage={currentPage} 
                     totalPages={totalPages} 
                     onPageChange={handlePageChange} 
                  />
               </PaginationWrapper>
            </Section>
         </Container>
      </PageWrapper>
   )
}

// NoticePage 전용 스타일 컴포넌트
const LoadingContainer = styled.div`
   padding: 6rem 0;
   display: flex;
   justify-content: center;
   align-items: center;
`

const LoadingSkeleton = styled.div`
   width: 100px;
   height: 100px;
   border: 4px solid #f3f3f3;
   border-top: 4px solid #ff6b6b;
   border-radius: 50%;
   animation: spin 1s linear infinite;

   @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
   }
`

const ErrorContainer = styled.div`
   padding: 6rem 0;
   display: flex;
   justify-content: center;
   align-items: center;
`

const ErrorCard = styled(Card)`
   text-align: center;
   max-width: 400px;
`

const SearchContainer = styled.div`
   margin-bottom: 3rem;
   display: flex;
   justify-content: center;
   position: relative;
`

const SearchWrapper = styled.div`
   position: relative;
   max-width: 500px;
   width: 100%;
`

const SearchIcon = styled.div`
   position: absolute;
   left: 1rem;
   top: 50%;
   transform: translateY(-50%);
   color: #64748b;
   z-index: 2;
`

const SearchInput = styled.input`
   width: 100%;
   padding: 1rem 1rem 1rem 3rem;
   border: 2px solid #e2e8f0;
   border-radius: 50px;
   font-size: 1rem;
   transition: all 0.3s ease;
   outline: none;

   &:focus {
      border-color: #ff6b6b;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
   }

   &::placeholder {
      color: #94a3b8;
   }
`

const LoadingOverlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: rgba(255, 255, 255, 0.8);
   display: flex;
   justify-content: center;
   align-items: center;
   font-weight: 600;
   z-index: 10;
   border-radius: 20px;
`

const NoticeGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
   gap: 2rem;
   margin-bottom: 3rem;
   position: relative;

   @media (max-width: 768px) {
      grid-template-columns: 1fr;
   }
`

const NoticeCard = styled(Card)`
   cursor: pointer;
   overflow: hidden;
   transition: all 0.3s ease;
   
   &:hover {
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
   }
`

const NoticeImageContainer = styled.div`
   position: relative;
   height: 120px;
   background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
`

const NoticeImage = styled.div`
   opacity: 0.8;
`

const NoticeBadge = styled.div`
   position: absolute;
   top: 1rem;
   right: 1rem;
   background: rgba(255, 255, 255, 0.2);
   backdrop-filter: blur(10px);
   padding: 0.25rem 0.75rem;
   border-radius: 20px;
   font-size: 0.8rem;
   font-weight: 600;
   color: white;
   border: 1px solid rgba(255, 255, 255, 0.3);
`

const NoticeContent = styled.div`
   padding: 1.5rem;
`

const NoticeTitle = styled(Link)`
   display: block;
   font-size: 1.1rem;
   font-weight: 600;
   color: #1e293b;
   text-decoration: none;
   margin-bottom: 1rem;
   line-height: 1.4;
   
   &:hover {
      color: #ff6b6b;
   }
   
   /* 2줄 넘어가면 생략 */
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   overflow: hidden;
`

const NoticeMeta = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
   font-size: 0.85rem;
   color: #64748b;

   @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
   }
`

const MetaItem = styled.div`
   display: flex;
   align-items: center;
   gap: 0.25rem;

   svg {
      opacity: 0.7;
   }
`

const EmptyCard = styled(Card)`
   grid-column: 1 / -1;
   text-align: center;
   padding: 3rem;
`

const PaginationWrapper = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 2rem;
`