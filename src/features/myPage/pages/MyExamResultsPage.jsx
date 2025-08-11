import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaFileAlt, FaCheck, FaTimes, FaClock, FaArrowLeft, FaSpinner } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { useAuth } from '@/contexts/AuthContext'
import { getUserExamResults } from '@/services/myPageService'
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
  Section,
  Card
} from '../../../components/common/SharedStyles'

export function MyExamResultsPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div
   
   const { user } = useAuth()
   const [examResults, setExamResults] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   useEffect(() => {
      if (!user?.id) return

      const fetchData = async () => {
         try {
            setLoading(true)
            setError(null)
            const data = await getUserExamResults(user.id)
            setExamResults(data)
         } catch (err) {
            console.error('Failed to fetch user exam results:', err)
            setError('시험 결과 정보를 불러오는 중 오류가 발생했습니다.')
         } finally {
            setLoading(false)
         }
      }

      fetchData()
   }, [user])

   const getResultIcon = (result) => {
      switch (result) {
         case '합격': return FaCheck
         case '불합격': return FaTimes
         default: return FaClock
      }
   }

   if (loading) {
      return (
         <PageWrapper>
            <Container>
               <LoadingCard>
                  <FaSpinner className="spinner" />
                  <h3>시험 결과를 불러오는 중...</h3>
                  <p>잠시만 기다려주세요.</p>
               </LoadingCard>
            </Container>
         </PageWrapper>
      )
   }

   if (error) {
      return (
         <PageWrapper>
            <Container>
               <ErrorCard>
                  <FaTimes />
                  <h3>오류가 발생했습니다</h3>
                  <p>{error}</p>
               </ErrorCard>
            </Container>
         </PageWrapper>
      )
   }

   return (
      <PageWrapper>
         <ModernHeroSection gradient="linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%)" ref={heroRef}>
            <HeroBackground />
            <HeroContainer>
               <motion.div
                  initial="hidden"
                  animate={heroInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaFileAlt /> 시험 결과
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     나의 <GradientText>시험 결과</GradientText>
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "시험 응시 결과를 확인하고 관리하세요"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     응시한 모든 시험의 결과를 한눈에 확인할 수 있습니다
                  </HeroDescription>
               </motion.div>
            </HeroContainer>
         </ModernHeroSection>

         <Container>
            <Section ref={contentRef}>
               {examResults.length > 0 ? (
                  <ResultsCard
                     as={motion.div}
                     initial="hidden"
                     animate={contentInView ? "visible" : "hidden"}
                     variants={fadeInScale}
                  >
                     <CardHeader>
                        <FaFileAlt />
                        <h3>시험 결과 목록</h3>
                     </CardHeader>
                     <ResultTable>
                        <colgroup>
                           <col style={{ width: 'auto' }} />
                           <col style={{ width: '25%' }} />
                           <col style={{ width: '20%' }} />
                        </colgroup>
                        <thead>
                           <tr>
                              <Th>시험명</Th>
                              <Th>응시일</Th>
                              <Th>결과</Th>
                           </tr>
                        </thead>
                        <tbody>
                           {examResults.map((exam, index) => {
                              const ResultIcon = getResultIcon(exam.result)
                              return (
                                 <motion.tr 
                                    key={exam.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: index * 0.1 }}
                                 >
                                    <Td>{exam.name}</Td>
                                    <Td>{exam.date}</Td>
                                    <Td>
                                       <ResultBadge result={exam.result}>
                                          <ResultIcon />
                                          {exam.result}
                                       </ResultBadge>
                                    </Td>
                                 </motion.tr>
                              )
                           })}
                        </tbody>
                     </ResultTable>
                  </ResultsCard>
               ) : (
                  <EmptyCard
                     as={motion.div}
                     initial="hidden"
                     animate={contentInView ? "visible" : "hidden"}
                     variants={fadeInScale}
                  >
                     <FaFileAlt />
                     <h3>응시한 시험 결과가 없습니다</h3>
                     <p>시험에 응시하시면 여기에서 결과를 확인할 수 있습니다.</p>
                  </EmptyCard>
               )}
               
               <BackButton
                  as={motion.div}
                  initial="hidden"
                  animate={contentInView ? "visible" : "hidden"}
                  variants={fadeInUp}
                  transition={{ delay: 0.3 }}
               >
                  <Link to="/my-page">
                     <FaArrowLeft /> 마이페이지로 돌아가기
                  </Link>
               </BackButton>
            </Section>
         </Container>
      </PageWrapper>
   )
}

// 현대화된 스타일 컴포넌트
const LoadingCard = styled(Card)`
   max-width: 400px;
   margin: 4rem auto;
   text-align: center;
   padding: 3rem 2rem;
   
   .spinner {
      font-size: 2rem;
      color: #ff9a56;
      animation: spin 1s linear infinite;
      margin-bottom: 1rem;
   }
   
   @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
   }
   
   h3 {
      font-size: 1.25rem;
      color: #1e293b;
      margin-bottom: 0.5rem;
   }
   
   p {
      color: #64748b;
   }
`

const ErrorCard = styled(Card)`
   max-width: 400px;
   margin: 4rem auto;
   text-align: center;
   padding: 3rem 2rem;
   
   svg {
      font-size: 2rem;
      color: #ef4444;
      margin-bottom: 1rem;
   }
   
   h3 {
      font-size: 1.25rem;
      color: #1e293b;
      margin-bottom: 0.5rem;
   }
   
   p {
      color: #64748b;
   }
`

const ResultsCard = styled(Card)`
   margin-bottom: 2rem;
`

const CardHeader = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
   margin-bottom: 2rem;
   padding-bottom: 1rem;
   border-bottom: 2px solid #e2e8f0;
   
   svg {
      font-size: 1.5rem;
      color: #ff9a56;
   }
   
   h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1e293b;
      margin: 0;
   }
`

const ResultTable = styled.table`
   width: 100%;
   border-collapse: collapse;
   
   th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid #e2e8f0;
   }
   
   th {
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      font-weight: 600;
      color: #475569;
      font-size: 0.95rem;
   }
   
   td {
      font-size: 0.9rem;
      color: #64748b;
      
      &:nth-child(2),
      &:last-child {
         text-align: center;
      }
   }
   
   tbody tr:hover {
      background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
   }
`

const Th = styled.th``
const Td = styled.td``

const ResultBadge = styled.span`
   display: inline-flex;
   align-items: center;
   gap: 0.25rem;
   padding: 0.25rem 0.75rem;
   border-radius: 20px;
   font-size: 0.8rem;
   font-weight: 600;
   background: ${({ result }) => {
      switch (result) {
         case '합격': return 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
         case '불합격': return 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
         default: return 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)'
      }
   }};
   color: white;
`

const EmptyCard = styled(Card)`
   text-align: center;
   padding: 4rem 2rem;
   margin-bottom: 2rem;
   
   svg {
      font-size: 3rem;
      color: #94a3b8;
      margin-bottom: 1.5rem;
      opacity: 0.5;
   }
   
   h3 {
      font-size: 1.25rem;
      color: #64748b;
      margin-bottom: 1rem;
   }
   
   p {
      color: #94a3b8;
      font-style: italic;
   }
`

const BackButton = styled.div`
   text-align: center;
   
   a {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      color: #ff9a56;
      text-decoration: none;
      border-radius: 25px;
      font-weight: 600;
      transition: all 0.3s ease;
      
      &:hover {
         background: linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%);
         color: white;
         transform: translateY(-2px);
         box-shadow: 0 4px 12px rgba(255, 154, 86, 0.3);
      }
   }
`