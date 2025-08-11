import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaClipboardList, FaCheck, FaClock, FaTimes, FaArrowLeft, FaSpinner } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { useAuth } from '@/contexts/AuthContext'
import { getUserApplications } from '@/services/myPageService'
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

export function MyApplicationsPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div
   
   const { user } = useAuth()
   const [applications, setApplications] = useState([])
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
            const data = await getUserApplications(user.id)
            setApplications(data)
         } catch (err) {
            console.error('Failed to fetch user applications:', err)
            setError('신청 내역을 불러오는 중 오류가 발생했습니다.')
         } finally {
            setLoading(false)
         }
      }

      fetchData()
   }, [user])

   const getStatusIcon = (status) => {
      switch (status) {
         case '승인': return FaCheck
         case '대기': return FaClock
         case '반려': return FaTimes
         default: return FaClock
      }
   }

   if (loading) {
      return (
         <PageWrapper>
            <Container>
               <LoadingCard>
                  <FaSpinner className="spinner" />
                  <h3>신청 내역을 불러오는 중...</h3>
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
         <ModernHeroSection gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" ref={heroRef}>
            <HeroBackground />
            <HeroContainer>
               <motion.div
                  initial="hidden"
                  animate={heroInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaClipboardList /> 신청 내역
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     나의 <GradientText>신청 내역</GradientText>
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "모든 신청 내역을 확인하고 관리하세요"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     교육과 시험 신청 현황을 한눈에 확인할 수 있습니다
                  </HeroDescription>
               </motion.div>
            </HeroContainer>
         </ModernHeroSection>

         <Container>
            <Section ref={contentRef}>
               {applications.length > 0 ? (
                  <ApplicationsCard
                     as={motion.div}
                     initial="hidden"
                     animate={contentInView ? "visible" : "hidden"}
                     variants={fadeInScale}
                  >
                     <CardHeader>
                        <FaClipboardList />
                        <h3>신청 내역 목록</h3>
                     </CardHeader>
                     <ApplicationTable>
                        <colgroup>
                           <col style={{ width: '15%' }} />
                           <col style={{ width: 'auto' }} />
                           <col style={{ width: '20%' }} />
                           <col style={{ width: '15%' }} />
                        </colgroup>
                        <thead>
                           <tr>
                              <Th>신청 종류</Th>
                              <Th>상세 내용</Th>
                              <Th>신청일</Th>
                              <Th>상태</Th>
                           </tr>
                        </thead>
                        <tbody>
                           {applications.map((app, index) => {
                              const StatusIcon = getStatusIcon(app.status)
                              return (
                                 <motion.tr 
                                    key={app.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: index * 0.1 }}
                                 >
                                    <Td>
                                       <TypeBadge type={app.type}>
                                          {app.type}
                                       </TypeBadge>
                                    </Td>
                                    <Td>{app.name}</Td>
                                    <Td>{app.date}</Td>
                                    <Td>
                                       <StatusBadge status={app.status}>
                                          <StatusIcon />
                                          {app.status}
                                       </StatusBadge>
                                    </Td>
                                 </motion.tr>
                              )
                           })}
                        </tbody>
                     </ApplicationTable>
                  </ApplicationsCard>
               ) : (
                  <EmptyCard
                     as={motion.div}
                     initial="hidden"
                     animate={contentInView ? "visible" : "hidden"}
                     variants={fadeInScale}
                  >
                     <FaClipboardList />
                     <h3>신청 내역이 없습니다</h3>
                     <p>교육이나 시험에 신청하시면 여기에서 확인할 수 있습니다.</p>
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
      color: #4facfe;
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

const ApplicationsCard = styled(Card)`
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
      color: #4facfe;
   }
   
   h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1e293b;
      margin: 0;
   }
`

const ApplicationTable = styled.table`
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
      
      &:last-child {
         text-align: center;
      }
   }
   
   tbody tr:hover {
      background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
   }
`

const Th = styled.th``
const Td = styled.td``

const TypeBadge = styled.span`
   display: inline-block;
   padding: 0.25rem 0.5rem;
   border-radius: 12px;
   font-size: 0.75rem;
   font-weight: 600;
   background: ${({ type }) => {
      switch (type) {
         case '교육': return 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
         case '시험': return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
         default: return 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)'
      }
   }};
   color: white;
`

const StatusBadge = styled.span`
   display: inline-flex;
   align-items: center;
   gap: 0.25rem;
   padding: 0.25rem 0.75rem;
   border-radius: 20px;
   font-size: 0.8rem;
   font-weight: 600;
   background: ${({ status }) => {
      switch (status) {
         case '승인': return 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
         case '대기': return 'linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%)'
         case '반려': return 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
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
      color: #4facfe;
      text-decoration: none;
      border-radius: 25px;
      font-weight: 600;
      transition: all 0.3s ease;
      
      &:hover {
         background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
         color: white;
         transform: translateY(-2px);
         box-shadow: 0 4px 12px rgba(79, 172, 254, 0.3);
      }
   }
`