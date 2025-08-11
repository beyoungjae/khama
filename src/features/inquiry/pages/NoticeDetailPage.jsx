import { useState, useEffect } from 'react'
import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import styled from 'styled-components'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { FaBell, FaCalendarAlt, FaEye, FaArrowLeft, FaFileAlt, FaUser } from 'react-icons/fa'
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
  Card,
  CardIcon,
  CardContent,
  CardTitle,
  CardDescription
} from '../../../components/common/SharedStyles'
import { getNoticeById } from '@/services/noticeService'
import { Button } from '@/components/common/Button'
// import { Notice } from '@/types/notice';

export function NoticeDetailPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div
   
   const { id } = useParams() // URL 파라미터에서 id 가져오기
   const navigate = useNavigate()
   const [notice, setNotice] = useState(null) // 타입: Notice | null
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   
   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   useEffect(() => {
      const fetchNotice = async () => {
         if (!id) return
         try {
            setLoading(true)
            const data = await getNoticeById(id)
            setNotice(data)
            setError(null)
         } catch (err) {
            console.error(`Failed to fetch notice ${id}:`, err)
            setError('공지사항을 불러오는 중 오류가 발생했습니다.')
            setNotice(null)
         } finally {
            setLoading(false)
         }
      }

      fetchNotice()
   }, [id])

   if (loading) {
      return (
         <PageWrapper>
            <LoadingContainer>
               <LoadingSkeleton />
               <LoadingText>로딩 중...</LoadingText>
            </LoadingContainer>
         </PageWrapper>
      )
   }

   if (error || !notice) {
      return (
         <PageWrapper>
            <ErrorContainer>
               <ErrorCard>
                  <CardIcon $accent>
                     <FaBell />
                  </CardIcon>
                  <CardTitle>오류 발생</CardTitle>
                  <CardDescription>{error || '공지사항 정보를 찾을 수 없습니다.'}</CardDescription>
                  <BackButton onClick={() => navigate('/notice')}>
                     <FaArrowLeft /> 목록으로 돌아가기
                  </BackButton>
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
                     <FaFileAlt /> 공지사항
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     <GradientText>공지사항</GradientText> 상세보기
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "{notice?.title || '로딩 중...'}"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     KHAMA의 중요한 공지사항을
                     <br />
                     자세히 확인해보세요
                  </HeroDescription>
               </motion.div>
               <HeroImageContainer as={motion.div} variants={slideInRight}>
                  <HeroImagePlaceholder>
                     <FaFileAlt size={80} />
                     <p>공지사항 상세</p>
                  </HeroImagePlaceholder>
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         <Container>
            <Section ref={contentRef}>
               <NoticeDetailCard
                  as={motion.div}
                  initial="hidden"
                  animate={contentInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  <NoticeHeader as={motion.div} variants={fadeInUp}>
                     <NoticeTitle>{notice.title}</NoticeTitle>
                     <NoticeMetaWrapper>
                        <MetaItem>
                           <FaUser size={14} />
                           <span>{notice.author || '관리자'}</span>
                        </MetaItem>
                        <MetaItem>
                           <FaCalendarAlt size={14} />
                           <span>{new Date(notice.createdAt).toLocaleDateString()}</span>
                        </MetaItem>
                        <MetaItem>
                           <FaEye size={14} />
                           <span>{notice.viewCount || 0}회</span>
                        </MetaItem>
                     </NoticeMetaWrapper>
                  </NoticeHeader>
                  
                  <NoticeContent
                     as={motion.div}
                     variants={fadeInUp}
                     dangerouslySetInnerHTML={{ __html: notice.content.replace(/\n/g, '<br />') }}
                  />
                  
                  <NoticeActions as={motion.div} variants={fadeInUp}>
                     <BackButton onClick={() => navigate('/notice')}>
                        <FaArrowLeft /> 목록으로 돌아가기
                     </BackButton>
                  </NoticeActions>
               </NoticeDetailCard>
            </Section>
         </Container>
      </PageWrapper>
   )
}

// NoticeDetailPage 전용 스타일 컴포넌트
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
   border-top: 4px solid #ff6b6b;
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
   max-width: 500px;
   padding: 3rem;
`

const NoticeDetailCard = styled(Card)`
   max-width: 1000px;
   margin: 0 auto;
   padding: 0;
   overflow: hidden;
`

const NoticeHeader = styled.div`
   padding: 2.5rem;
   background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
   border-bottom: 1px solid #e2e8f0;
`

const NoticeTitle = styled.h1`
   font-size: 2rem;
   font-weight: 700;
   color: #1e293b;
   margin-bottom: 1.5rem;
   line-height: 1.4;
   
   @media (max-width: 768px) {
      font-size: 1.5rem;
   }
`

const NoticeMetaWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 2rem;
   flex-wrap: wrap;
   
   @media (max-width: 768px) {
      gap: 1rem;
      flex-direction: column;
      align-items: flex-start;
   }
`

const MetaItem = styled.div`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   color: #64748b;
   font-size: 0.9rem;
   font-weight: 500;
   
   svg {
      opacity: 0.7;
   }
`

const NoticeContent = styled.div`
   padding: 3rem 2.5rem;
   line-height: 1.8;
   font-size: 1.1rem;
   color: #374151;
   min-height: 300px;
   white-space: pre-wrap;
   
   @media (max-width: 768px) {
      padding: 2rem 1.5rem;
      font-size: 1rem;
   }
   
   /* 내용 스타일링 */
   p {
      margin-bottom: 1rem;
   }
   
   strong {
      color: #1e293b;
      font-weight: 600;
   }
   
   em {
      color: #059669;
      font-style: italic;
   }
`

const NoticeActions = styled.div`
   padding: 2.5rem;
   background: #f8fafc;
   border-top: 1px solid #e2e8f0;
   display: flex;
   justify-content: center;
`

const BackButton = styled.button`
   display: flex;
   align-items: center;
   gap: 0.75rem;
   padding: 1rem 2rem;
   background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
   color: white;
   border: none;
   border-radius: 50px;
   font-size: 1rem;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.3s ease;
   box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
   
   &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
   }
   
   &:active {
      transform: translateY(0);
   }
`
