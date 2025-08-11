import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaCertificate, FaArrowLeft, FaSpinner, FaTimes } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { useAuth } from '@/contexts/AuthContext'
import { getUserCertificates } from '@/services/myPageService'
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

export function MyCertificatesPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div
   
   const { user } = useAuth()
   const [certificates, setCertificates] = useState([])
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
            const data = await getUserCertificates(user.id)
            setCertificates(data)
         } catch (err) {
            console.error('Failed to fetch user certificates:', err)
            setError('자격증 정보를 불러오는 중 오류가 발생했습니다.')
         } finally {
            setLoading(false)
         }
      }

      fetchData()
   }, [user])

   if (loading) {
      return (
         <PageWrapper>
            <Container>
               <LoadingCard>
                  <FaSpinner className="spinner" />
                  <h3>자격증 정보를 불러오는 중...</h3>
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
         <ModernHeroSection gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" ref={heroRef}>
            <HeroBackground />
            <HeroContainer>
               <motion.div
                  initial="hidden"
                  animate={heroInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaCertificate /> 자격증
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     나의 <GradientText>자격증</GradientText>
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "취득한 자격증을 확인하고 관리하세요"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     보유한 모든 자격증을 한눈에 확인하고 다운로드할 수 있습니다
                  </HeroDescription>
               </motion.div>
            </HeroContainer>
         </ModernHeroSection>

         <Container>
            <Section ref={contentRef}>
               {certificates.length > 0 ? (
                  <CertificatesCard
                     as={motion.div}
                     initial="hidden"
                     animate={contentInView ? "visible" : "hidden"}
                     variants={fadeInScale}
                  >
                     <CardHeader>
                        <FaCertificate />
                        <h3>자격증 목록</h3>
                     </CardHeader>
                     <CertificateTable>
                        <colgroup>
                           <col style={{ width: 'auto' }} />
                           <col style={{ width: '30%' }} />
                        </colgroup>
                        <thead>
                           <tr>
                              <Th>자격증명</Th>
                              <Th>발급일</Th>
                           </tr>
                        </thead>
                        <tbody>
                           {certificates.map((cert, index) => (
                              <motion.tr 
                                 key={cert.id}
                                 initial={{ opacity: 0, y: 20 }}
                                 animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                 transition={{ delay: index * 0.1 }}
                              >
                                 <Td>
                                    <CertificateNameWrapper>
                                       <FaCertificate />
                                       {cert.name}
                                    </CertificateNameWrapper>
                                 </Td>
                                 <Td>{cert.issueDate}</Td>
                              </motion.tr>
                           ))}
                        </tbody>
                     </CertificateTable>
                  </CertificatesCard>
               ) : (
                  <EmptyCard
                     as={motion.div}
                     initial="hidden"
                     animate={contentInView ? "visible" : "hidden"}
                     variants={fadeInScale}
                  >
                     <FaCertificate />
                     <h3>보유한 자격증이 없습니다</h3>
                     <p>자격증을 취득하시면 여기에서 확인할 수 있습니다.</p>
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
      color: #667eea;
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

const CertificatesCard = styled(Card)`
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
      color: #667eea;
   }
   
   h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1e293b;
      margin: 0;
   }
`

const CertificateTable = styled.table`
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
      
      &:nth-child(2) {
         text-align: center;
      }
   }
   
   tbody tr:hover {
      background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
   }
`

const Th = styled.th``
const Td = styled.td``

const CertificateNameWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 0.75rem;
   
   svg {
      color: #667eea;
      font-size: 1.1rem;
   }
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
      color: #667eea;
      text-decoration: none;
      border-radius: 25px;
      font-weight: 600;
      transition: all 0.3s ease;
      
      &:hover {
         background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
         color: white;
         transform: translateY(-2px);
         box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
      }
   }
`