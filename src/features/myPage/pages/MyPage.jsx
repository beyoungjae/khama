import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { Link } from 'react-router-dom'
import { FaUser, FaClipboardList, FaCertificate, FaFileAlt, FaEdit, FaEye, FaCheck, FaClock, FaTimes, FaSpinner, FaTrophy, FaGraduationCap } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { useAuth } from '@/contexts/AuthContext'
import { useState, useEffect } from 'react'
import { Modal } from '@/components/common/Modal'
import { EditProfileForm } from '../components/EditProfileForm'
import { getUserApplications, getUserCertificates, getUserExamResults } from '@/services/myPageService'
import { getImageUrl, getOptimizedImageProps } from '../../../utils/imageHelpers'
import {
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
   SectionHeader,
   SectionTitle,
   Grid,
   Card,
   CardIcon,
   CardTitle,
   CardDescription,
   ImageGallery,
   ImageGalleryItem,
   ImageCaption,
   ResponsiveImage,
} from '../../../components/common/SharedStyles'

export function MyPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { user, setUser } = useAuth()
   const [isEditModalOpen, setIsEditModalOpen] = useState(false)
   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   // 데이터 상태 추가
   const [applications, setApplications] = useState([])
   const [certificates, setCertificates] = useState([])
   const [examResults, setExamResults] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      if (!user?.id) return // 사용자 ID 없으면 중단

      const fetchData = async () => {
         try {
            setLoading(true)
            setError(null)
            // Promise.all로 데이터 병렬 로딩
            const [apps, certs, results] = await Promise.all([getUserApplications(user.id), getUserCertificates(user.id), getUserExamResults(user.id)])
            setApplications(apps)
            setCertificates(certs)
            setExamResults(results)
         } catch (err) {
            console.error('Failed to fetch MyPage data:', err)
            setError('마이페이지 정보를 불러오는 중 오류가 발생했습니다.')
         } finally {
            setLoading(false)
         }
      }

      fetchData()
   }, [user]) // user 객체가 변경될 때마다 실행

   const openEditModal = () => setIsEditModalOpen(true)
   const closeEditModal = () => setIsEditModalOpen(false)

   const handleProfileUpdate = (updatedData) => {
      console.log('Updating profile (mock):', updatedData)
      setUser({ ...user, ...updatedData })
      closeEditModal()
      alert('회원 정보가 수정되었습니다.')
   }

   const getStatusIcon = (status) => {
      switch (status) {
         case '승인':
            return FaCheck
         case '대기':
            return FaClock
         case '반려':
            return FaTimes
         default:
            return FaClock
      }
   }

   const getResultIcon = (result) => {
      switch (result) {
         case '합격':
            return FaCheck
         case '불합격':
            return FaTimes
         default:
            return FaClock
      }
   }

   if (!user) {
      return (
         <PageWrapper>
            <Container>
               <NotLoginCard>
                  <CardIcon $primary>
                     <FaUser />
                  </CardIcon>
                  <CardTitle>로그인이 필요합니다</CardTitle>
                  <CardDescription>마이페이지를 이용하려면 로그인해주세요.</CardDescription>
                  <LoginLink to="/login">로그인 페이지로 이동</LoginLink>
               </NotLoginCard>
            </Container>
         </PageWrapper>
      )
   }

   if (loading) {
      return (
         <PageWrapper>
            <Container>
               <LoadingCard>
                  <FaSpinner className="spinner" />
                  <h3>정보를 불러오는 중...</h3>
                  <p>마이페이지 정보를 로딩하고 있습니다.</p>
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
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaUser /> 마이페이지
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     <GradientText>{user.name}</GradientText>님의 페이지
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "나의 학습 여정을 확인하고 관리하세요"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     신청 내역, 자격증, 시험 결과 등 모든 정보를 한곳에서 관리하세요
                  </HeroDescription>
               </motion.div>
            </HeroContainer>
         </ModernHeroSection>

         <Container>
            <Section ref={contentRef}>
               <MyPageGrid as={motion.div} initial="hidden" animate={contentInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  {/* 신청 내역 카드 */}
                  <MyPageCard as={motion.div} variants={fadeInScale}>
                     <CardHeader>
                        <CardIcon $primary>
                           <FaClipboardList />
                        </CardIcon>
                        <CardTitle>신청 내역</CardTitle>
                     </CardHeader>
                     {applications.length > 0 ? (
                        <ItemList>
                           {applications.slice(0, 3).map((app) => {
                              const StatusIcon = getStatusIcon(app.status)
                              return (
                                 <ListItem key={app.id}>
                                    <ItemInfo>
                                       <ItemName>
                                          [{app.type}] {app.name}
                                       </ItemName>
                                    </ItemInfo>
                                    <StatusBadge status={app.status}>
                                       <StatusIcon />
                                       {app.status}
                                    </StatusBadge>
                                 </ListItem>
                              )
                           })}
                        </ItemList>
                     ) : (
                        <EmptyState>
                           <FaClipboardList />
                           <p>신청 내역이 없습니다.</p>
                        </EmptyState>
                     )}
                     <ViewMoreLink to="/my-page/applications">
                        <FaEye /> 더보기
                     </ViewMoreLink>
                  </MyPageCard>

                  {/* 나의 자격증 카드 */}
                  <MyPageCard as={motion.div} variants={fadeInScale}>
                     <CardHeader>
                        <CardIcon $secondary>
                           <FaCertificate />
                        </CardIcon>
                        <CardTitle>나의 자격증</CardTitle>
                     </CardHeader>
                     {certificates.length > 0 ? (
                        <ItemList>
                           {certificates.slice(0, 3).map((cert) => (
                              <ListItem key={cert.id}>
                                 <ItemInfo>
                                    <ItemName>{cert.name}</ItemName>
                                    <ItemDate>발급일: {cert.issueDate}</ItemDate>
                                 </ItemInfo>
                                 <CertBadge>
                                    <FaCertificate />
                                    인증됨
                                 </CertBadge>
                              </ListItem>
                           ))}
                        </ItemList>
                     ) : (
                        <EmptyState>
                           <FaCertificate />
                           <p>보유한 자격증이 없습니다.</p>
                        </EmptyState>
                     )}
                     <ViewMoreLink to="/my-page/certificates">
                        <FaEye /> 더보기
                     </ViewMoreLink>
                  </MyPageCard>

                  {/* 시험 결과 카드 */}
                  <MyPageCard as={motion.div} variants={fadeInScale}>
                     <CardHeader>
                        <CardIcon $accent>
                           <FaFileAlt />
                        </CardIcon>
                        <CardTitle>시험 결과</CardTitle>
                     </CardHeader>
                     {examResults.length > 0 ? (
                        <ItemList>
                           {examResults.slice(0, 3).map((exam) => {
                              const ResultIcon = getResultIcon(exam.result)
                              return (
                                 <ListItem key={exam.id}>
                                    <ItemInfo>
                                       <ItemName>{exam.name}</ItemName>
                                    </ItemInfo>
                                    <ResultBadge result={exam.result}>
                                       <ResultIcon />
                                       {exam.result}
                                    </ResultBadge>
                                 </ListItem>
                              )
                           })}
                        </ItemList>
                     ) : (
                        <EmptyState>
                           <FaFileAlt />
                           <p>응시한 시험 결과가 없습니다.</p>
                        </EmptyState>
                     )}
                     <ViewMoreLink to="/my-page/exam-results">
                        <FaEye /> 더보기
                     </ViewMoreLink>
                  </MyPageCard>

                  {/* 회원 정보 카드 */}
                  <MyPageCard as={motion.div} variants={fadeInScale}>
                     <CardHeader>
                        <CardIcon $primary>
                           <FaUser />
                        </CardIcon>
                        <CardTitle>회원 정보</CardTitle>
                     </CardHeader>
                     <UserInfoSection>
                        <UserInfoItem>
                           <strong>이름:</strong> {user.name}
                        </UserInfoItem>
                        <UserInfoItem>
                           <strong>이메일:</strong> {user.email}
                        </UserInfoItem>
                        <UserInfoItem>
                           <strong>연락처:</strong> {user.phone || '미등록'}
                        </UserInfoItem>
                     </UserInfoSection>
                     <EditButton onClick={openEditModal}>
                        <FaEdit /> 회원 정보 수정
                     </EditButton>
                  </MyPageCard>
               </MyPageGrid>

               {/* 개인화 성취 갤러리 */}
               <Section style={{ marginTop: '4rem' }}>
                  <SectionHeader>
                     <SectionTitle as={motion.h3} variants={fadeInScale}>
                        <FaTrophy /> 나의 학습 여정
                     </SectionTitle>
                  </SectionHeader>

                  <ImageGallery as={motion.div} variants={staggerContainer}>
                     <ImageGalleryItem variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'students'), '교육 참여 모습', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>교육 과정 참여</h4>
                           <p>전문 교육을 통한 지식과 기술 습득</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'practical'), '실습 교육 참여', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>실무 실습</h4>
                           <p>실제 장비를 활용한 실무 경험 쌓기</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('products', 'certification'), '자격증 취득', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>자격증 취득</h4>
                           <p>전문가로서의 자격과 역량 인정</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                  </ImageGallery>
               </Section>
            </Section>
         </Container>

         <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
            <EditProfileForm currentUser={user} onUpdate={handleProfileUpdate} onCancel={closeEditModal} />
         </Modal>
      </PageWrapper>
   )
}

// MyPage 전용 스타일 컴포넌트
const NotLoginCard = styled(Card)`
   max-width: 400px;
   margin: 4rem auto;
   text-align: center;
   padding: 3rem 2rem;
`

const LoginLink = styled(Link)`
   display: inline-flex;
   align-items: center;
   gap: 0.5rem;
   padding: 0.75rem 1.5rem;
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   color: white;
   text-decoration: none;
   border-radius: 25px;
   font-weight: 600;
   margin-top: 1.5rem;
   transition: all 0.3s ease;

   &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
   }
`

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
      from {
         transform: rotate(0deg);
      }
      to {
         transform: rotate(360deg);
      }
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

const MyPageGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   gap: 2rem;

   @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
   }
`

const MyPageCard = styled(Card)`
   display: flex;
   flex-direction: column;
   height: 100%;
`

const CardHeader = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
   margin-bottom: 1.5rem;
   padding-bottom: 1rem;
   border-bottom: 2px solid #e2e8f0;
`

const ItemList = styled.div`
   flex: 1;
   margin-bottom: 1.5rem;
`

const ListItem = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0.75rem 0;
   border-bottom: 1px dashed #e2e8f0;

   &:last-child {
      border-bottom: none;
   }
`

const ItemInfo = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.25rem;
   flex: 1;
`

const ItemName = styled.span`
   font-weight: 500;
   color: #1e293b;
   font-size: 0.95rem;
`

const ItemDate = styled.span`
   font-size: 0.8rem;
   color: #64748b;
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
         case '승인':
            return 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
         case '대기':
            return 'linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%)'
         case '반려':
            return 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
         default:
            return 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)'
      }
   }};
   color: white;
`

const CertBadge = styled.span`
   display: inline-flex;
   align-items: center;
   gap: 0.25rem;
   padding: 0.25rem 0.75rem;
   border-radius: 20px;
   font-size: 0.8rem;
   font-weight: 600;
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   color: white;
`

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
         case '합격':
            return 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
         case '불합격':
            return 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
         default:
            return 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)'
      }
   }};
   color: white;
`

const EmptyState = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 3rem 1rem;
   color: #94a3b8;
   flex: 1;

   svg {
      font-size: 2rem;
      margin-bottom: 1rem;
      opacity: 0.5;
   }

   p {
      font-size: 0.95rem;
      font-style: italic;
   }
`

const ViewMoreLink = styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;
   padding: 0.75rem;
   background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
   color: #667eea;
   text-decoration: none;
   border-radius: 8px;
   font-weight: 500;
   font-size: 0.9rem;
   transition: all 0.3s ease;
   margin-top: auto;

   &:hover {
      background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
      transform: translateY(-1px);
   }
`

const UserInfoSection = styled.div`
   flex: 1;
   margin-bottom: 1.5rem;
`

const UserInfoItem = styled.div`
   display: flex;
   align-items: center;
   padding: 0.75rem 0;
   border-bottom: 1px dashed #e2e8f0;
   font-size: 0.95rem;

   &:last-child {
      border-bottom: none;
   }

   strong {
      width: 80px;
      color: #64748b;
      font-weight: 600;
   }
`

const EditButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;
   width: 100%;
   padding: 0.75rem;
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   color: white;
   border: none;
   border-radius: 8px;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.3s ease;

   &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
   }
`
