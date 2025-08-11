import { useState, useEffect } from 'react'
import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import styled, { css } from 'styled-components'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { FaQuestionCircle, FaUser, FaCalendarAlt, FaEye, FaSearch, FaPen, FaLock, FaCheckCircle, FaClock } from 'react-icons/fa'
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
import { getQuestions } from '@/services/qnaService'
import { Button } from '@/components/common/Button'
import { Pagination } from '@/components/common/Pagination'
// import { Question } from '@/types/qna';
import { useAuth } from '@/contexts/AuthContext'

export function QnaPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div
   
   const [searchParams, setSearchParams] = useSearchParams()
   const { isLoggedIn } = useAuth()
   const navigate = useNavigate()
   const [questions, setQuestions] = useState([]) // 타입: Question[]
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page') || '1', 10))
   const [totalPages, setTotalPages] = useState(1)
   const [totalCount, setTotalCount] = useState(0)
   const [searchTerm, setSearchTerm] = useState('')
   
   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: listRef, inView: listInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   const questionsPerPage = 10

   useEffect(() => {
      const fetchQuestions = async (page) => {
         try {
            setLoading(true)
            setSearchParams({ page: page.toString() })
            const data = await getQuestions(page, questionsPerPage)
            setQuestions(data.questions)
            setTotalPages(data.totalPages)
            setTotalCount(data.totalCount)
            setCurrentPage(data.currentPage)
            setError(null)
         } catch (err) {
            console.error('Failed to fetch questions:', err)
            setError('Q&A 목록을 불러오는 중 오류가 발생했습니다.')
            setQuestions([])
            setTotalPages(1)
            setTotalCount(0)
         } finally {
            setLoading(false)
         }
      }

      fetchQuestions(currentPage)
   }, [currentPage, setSearchParams])

   const handlePageChange = (pageNumber) => {
      if (pageNumber > 0 && pageNumber <= totalPages) {
         setCurrentPage(pageNumber)
         window.scrollTo(0, 0)
      }
   }

   const getQuestionNumber = (index) => {
      return totalCount - (currentPage - 1) * questionsPerPage - index
   }
   
   const filteredQuestions = questions.filter(question => 
      question.title.toLowerCase().includes(searchTerm.toLowerCase())
   )

   const handleWriteClick = () => {
      if (!isLoggedIn) {
         alert('로그인이 필요합니다.')
         navigate('/login')
         return
      }
      navigate('/qna/write')
   }

   if (loading && questions.length === 0) {
      return (
         <PageWrapper>
            <LoadingContainer>
               <LoadingSkeleton />
               <LoadingText>로딩 중...</LoadingText>
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
                     <FaQuestionCircle />
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
            <HeroBackground radialGradient="radial-gradient(circle at 20% 80%, rgba(79, 172, 254, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)" />
            <HeroContainer>
               <motion.div
                  initial="hidden"
                  animate={heroInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaQuestionCircle /> Q&A
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     <GradientText>질문과 답변</GradientText>
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "궁금한 점이 있으시면 언제든지 질문해주세요"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     KHAMA에 대한 모든 궁금증을
                     <br />
                     자유롭게 질문하고 답변받아보세요
                  </HeroDescription>
               </motion.div>
               <HeroImageContainer as={motion.div} variants={slideInRight}>
                  <HeroImagePlaceholder>
                     <FaQuestionCircle size={80} />
                     <p>Q&A</p>
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
                     질문 목록
                  </SectionTitle>
                  <SectionSubtitle
                     as={motion.p}
                     initial="hidden"
                     animate={listInView ? "visible" : "hidden"}
                     variants={fadeInUp}
                  >
                     총 {totalCount}개의 질문이 등록되어 있습니다
                  </SectionSubtitle>
               </SectionHeader>

               <QnaActions
                  as={motion.div}
                  initial="hidden"
                  animate={listInView ? "visible" : "hidden"}
                  variants={fadeInUp}
               >
                  <SearchContainer>
                     <SearchWrapper>
                        <SearchIcon>
                           <FaSearch />
                        </SearchIcon>
                        <SearchInput
                           type="text"
                           placeholder="질문 제목을 검색하세요..."
                           value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value)}
                        />
                     </SearchWrapper>
                  </SearchContainer>
                  
                  {isLoggedIn && (
                     <WriteButton onClick={handleWriteClick}>
                        <FaPen /> 질문하기
                     </WriteButton>
                  )}
               </QnaActions>

               {loading && <LoadingOverlay>로딩 중...</LoadingOverlay>}

               <QnaGrid
                  as={motion.div}
                  initial="hidden"
                  animate={listInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  {filteredQuestions.length > 0 ? (
                     filteredQuestions.map((question, index) => (
                        <QnaCard
                           key={question.id}
                           as={motion.div}
                           variants={fadeInScale}
                           whileHover={{ scale: 1.02, y: -5 }}
                           transition={{ duration: 0.2 }}
                        >
                           <QnaImageContainer>
                              <QnaImage>
                                 <FaQuestionCircle size={40} />
                              </QnaImage>
                              <QnaBadge>
                                 #{getQuestionNumber(index)}
                              </QnaBadge>
                              {question.isPrivate && (
                                 <PrivateBadge>
                                    <FaLock size={12} />
                                 </PrivateBadge>
                              )}
                           </QnaImageContainer>
                           <QnaContent>
                              <QnaTitle to={`/qna/${question.id}`}>
                                 {question.title}
                              </QnaTitle>
                              <QnaMeta>
                                 <MetaItem>
                                    <FaUser size={12} />
                                    {question.authorName || '익명'}
                                 </MetaItem>
                                 <MetaItem>
                                    <FaCalendarAlt size={12} />
                                    {new Date(question.createdAt).toLocaleDateString()}
                                 </MetaItem>
                                 <MetaItem>
                                    <FaEye size={12} />
                                    {question.viewCount || 0}
                                 </MetaItem>
                              </QnaMeta>
                              <QnaStatus>
                                 <StatusBadge answered={question.isAnswered}>
                                    {question.isAnswered ? (
                                       <><FaCheckCircle size={12} /> 답변완료</>
                                    ) : (
                                       <><FaClock size={12} /> 답변대기</>
                                    )}
                                 </StatusBadge>
                              </QnaStatus>
                           </QnaContent>
                        </QnaCard>
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
                           {searchTerm ? `'${searchTerm}'에 대한 검색 결과가 없습니다.` : '등록된 질문이 없습니다.'}
                        </CardDescription>
                     </EmptyCard>
                  )}
               </QnaGrid>

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

// QnaPage 전용 스타일 컴포넌트
const LoadingContainer = styled.div`
   padding: 6rem 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 2rem;
`

const LoadingSkeleton = styled.div`
   width: 80px;
   height: 80px;
   border: 4px solid #f3f3f3;
   border-top: 4px solid #4facfe;
   border-radius: 50%;
   animation: spin 1s linear infinite;

   @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
   }
`

const LoadingText = styled.p`
   font-size: 1.2rem;
   font-weight: 600;
   color: #64748b;
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

const QnaActions = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 3rem;
   gap: 2rem;
   
   @media (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
   }
`

const SearchContainer = styled.div`
   flex: 1;
   max-width: 500px;
`

const SearchWrapper = styled.div`
   position: relative;
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
      border-color: #4facfe;
      box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.1);
   }

   &::placeholder {
      color: #94a3b8;
   }
`

const WriteButton = styled.button`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   padding: 1rem 2rem;
   background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
   color: white;
   border: none;
   border-radius: 50px;
   font-size: 1rem;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.3s ease;
   box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);
   
   &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(79, 172, 254, 0.4);
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

const QnaGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
   gap: 2rem;
   margin-bottom: 3rem;
   position: relative;

   @media (max-width: 768px) {
      grid-template-columns: 1fr;
   }
`

const QnaCard = styled(Card)`
   cursor: pointer;
   overflow: hidden;
   transition: all 0.3s ease;
   
   &:hover {
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
   }
`

const QnaImageContainer = styled.div`
   position: relative;
   height: 120px;
   background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
`

const QnaImage = styled.div`
   opacity: 0.8;
`

const QnaBadge = styled.div`
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

const PrivateBadge = styled.div`
   position: absolute;
   top: 1rem;
   left: 1rem;
   background: rgba(0, 0, 0, 0.3);
   backdrop-filter: blur(10px);
   padding: 0.5rem;
   border-radius: 50%;
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
`

const QnaContent = styled.div`
   padding: 1.5rem;
`

const QnaTitle = styled(Link)`
   display: block;
   font-size: 1.1rem;
   font-weight: 600;
   color: #1e293b;
   text-decoration: none;
   margin-bottom: 1rem;
   line-height: 1.4;
   
   &:hover {
      color: #4facfe;
   }
   
   /* 2줄 넘어가면 생략 */
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   overflow: hidden;
`

const QnaMeta = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
   font-size: 0.85rem;
   color: #64748b;
   margin-bottom: 1rem;

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

const QnaStatus = styled.div`
   display: flex;
   justify-content: flex-end;
`

const StatusBadge = styled.span`
   display: flex;
   align-items: center;
   gap: 0.25rem;
   padding: 0.5rem 1rem;
   border-radius: 20px;
   font-size: 0.8rem;
   font-weight: 600;
   color: white;

   ${(props) =>
      props.answered
         ? css`
              background: linear-gradient(135deg, #10b981 0%, #059669 100%);
           `
         : css`
              background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
           `}
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
