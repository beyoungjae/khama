import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { useAuth } from '@/contexts/AuthContext'
import { useState, useEffect } from 'react'
import { Modal } from '@/components/common/Modal'
import { EditProfileForm } from '../components/EditProfileForm'
import { getUserApplications, getUserCertificates, getUserExamResults } from '@/services/myPageService'

// TODO: 로그인 상태 확인 및 사용자 정보 가져오는 로직 추가 (예: 커스텀 훅 사용)

// 목업 데이터 제거
// const mockApplications = [...];
// const mockCertificates = [...];
// const mockExamResults = [...];

export function MyPage() {
   const { user, setUser } = useAuth()
   const [isEditModalOpen, setIsEditModalOpen] = useState(false)

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

   if (!user) {
      // 로그인되지 않은 경우 로그인 페이지 유도 등 처리 가능
      return (
         <Container>
            <NoticeText>로그인이 필요한 페이지입니다.</NoticeText>
            <Link to="/login">로그인 페이지로 이동</Link>
         </Container>
      )
   }

   // 로딩 및 에러 상태 처리 추가
   if (loading) {
      return (
         <Container>
            <PageHeader>
               <Title>마이페이지</Title>
            </PageHeader>
            <LoadingText>정보를 불러오는 중...</LoadingText>
         </Container>
      )
   }

   if (error) {
      return (
         <Container>
            <PageHeader>
               <Title>마이페이지</Title>
            </PageHeader>
            <ErrorText>{error}</ErrorText>
         </Container>
      )
   }

   return (
      <Container>
         <PageHeader>
            <Title>마이페이지</Title>
            <WelcomeMessage>{user.name}님, 환영합니다!</WelcomeMessage>
         </PageHeader>

         <GridContainer>
            {/* 신청 내역 섹션 - applications 상태 사용 */}
            <Section cardStyle>
               <SectionTitle>신청 내역</SectionTitle>
               {applications.length > 0 ? (
                  <List>
                     {applications.map((app) => (
                        <ListItem key={app.id}>
                           <span>
                              [{app.type}] {app.name}
                           </span>
                           <StatusBadge status={app.status}>{app.status}</StatusBadge>
                        </ListItem>
                     ))}
                  </List>
               ) : (
                  <Placeholder>신청 내역이 없습니다.</Placeholder>
               )}
               <ViewMoreLink to="/my-page/applications">더보기</ViewMoreLink> {/* 실제 경로 필요 */}
            </Section>

            {/* 나의 자격증 섹션 - certificates 상태 사용 */}
            <Section cardStyle>
               <SectionTitle>나의 자격증</SectionTitle>
               {certificates.length > 0 ? (
                  <List>
                     {certificates.map((cert) => (
                        <ListItem key={cert.id}>
                           <span>{cert.name}</span>
                           <span className="date">발급일: {cert.issueDate}</span>
                        </ListItem>
                     ))}
                  </List>
               ) : (
                  <Placeholder>보유한 자격증이 없습니다.</Placeholder>
               )}
               <ViewMoreLink to="/my-page/certificates">더보기</ViewMoreLink>
            </Section>

            {/* 시험 결과 섹션 - examResults 상태 사용 */}
            <Section cardStyle>
               <SectionTitle>시험 결과</SectionTitle>
               {examResults.length > 0 ? (
                  <List>
                     {examResults.map((exam) => (
                        <ListItem key={exam.id}>
                           <span>{exam.name}</span>
                           <ResultBadge result={exam.result}>{exam.result}</ResultBadge>
                        </ListItem>
                     ))}
                  </List>
               ) : (
                  <Placeholder>응시한 시험 결과가 없습니다.</Placeholder>
               )}
               <ViewMoreLink to="/my-page/exam-results">더보기</ViewMoreLink>
            </Section>

            {/* 회원 정보 수정 섹션 */}
            <Section cardStyle>
               <SectionTitle>회원 정보</SectionTitle>
               <UserInfo>
                  <p>
                     <strong>이름:</strong> {user.name}
                  </p>
                  <p>
                     <strong>이메일:</strong> {user.email}
                  </p>
                  <p>
                     <strong>연락처:</strong> {user.phone || '미등록'}
                  </p>
               </UserInfo>
               <Button variant="outline" size="small" style={{ marginTop: '1rem' }} onClick={openEditModal}>
                  회원 정보 수정
               </Button>
            </Section>
         </GridContainer>

         <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
            <EditProfileForm currentUser={user} onUpdate={handleProfileUpdate} onCancel={closeEditModal} />
         </Modal>
      </Container>
   )
}

const Container = styled.div`
   padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
   max-width: 1200px;
   margin: 0 auto;
`

const PageHeader = styled.div`
   text-align: center;
   margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const Title = styled.h1`
   font-size: ${({ theme }) => theme.fontSizes.h1};
   font-weight: 700;
   margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const WelcomeMessage = styled.p`
   font-size: ${({ theme }) => theme.fontSizes.large};
   color: ${({ theme }) => theme.colors.textSecondary};
`

const NoticeText = styled.p`
   text-align: center;
   font-size: 1.1rem;
   margin-bottom: 1rem;
`

const GridContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: ${({ theme }) => theme.spacing.xl};
`

const Section = styled.section`
   ${(props) =>
      props.cardStyle &&
      `
      background-color: #fff;
      padding: ${props.theme.spacing.lg};
      border-radius: ${props.theme.borderRadius};
      border: 1px solid ${props.theme.colors.border};
      box-shadow: ${props.theme.boxShadow};
      display: flex;
      flex-direction: column;
   `}
`

const SectionTitle = styled.h2`
   font-size: ${({ theme }) => theme.fontSizes.h4};
   font-weight: 600;
   margin-bottom: ${({ theme }) => theme.spacing.lg};
   color: ${({ theme }) => theme.colors.primary};
   padding-bottom: ${({ theme }) => theme.spacing.sm};
   border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const List = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
   flex-grow: 1; /* 리스트가 남은 공간 차지 */
`

const ListItem = styled.li`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: ${({ theme }) => theme.spacing.sm} 0;
   border-bottom: 1px dashed ${({ theme }) => theme.colors.border};
   font-size: ${({ theme }) => theme.fontSizes.medium};

   &:last-child {
      border-bottom: none;
   }

   .date {
      font-size: ${({ theme }) => theme.fontSizes.small};
      color: ${({ theme }) => theme.colors.textSecondary};
   }
`

const StatusBadge = styled.span`
   padding: 0.3rem 0.6rem;
   border-radius: ${({ theme }) => theme.borderRadius};
   font-size: 0.8rem;
   font-weight: 600;
   color: white;
   background-color: ${({ theme, status }) => (status === '승인' ? theme.colors.success : status === '대기' ? theme.colors.warning : theme.colors.textSecondary)};
`

const ResultBadge = styled(StatusBadge)`
   background-color: ${({ theme, result }) => (result === '합격' ? theme.colors.primary : theme.colors.error)};
`

const Placeholder = styled.div`
   color: ${({ theme }) => theme.colors.textSecondary};
   text-align: center;
   padding: 2rem 0;
   font-style: italic;
   flex-grow: 1;
`

const ViewMoreLink = styled(Link)`
   display: block;
   text-align: right;
   margin-top: auto; /* 아래쪽으로 밀기 */
   font-size: ${({ theme }) => theme.fontSizes.small};
   color: ${({ theme }) => theme.colors.primary};
   font-weight: 500;

   &:hover {
      text-decoration: underline;
   }
`

const UserInfo = styled.div`
   margin-bottom: ${({ theme }) => theme.spacing.lg};
   p {
      margin-bottom: ${({ theme }) => theme.spacing.sm};
      font-size: ${({ theme }) => theme.fontSizes.medium};
      color: ${({ theme }) => theme.colors.text};
   }
   strong {
      display: inline-block;
      width: 60px;
      color: ${({ theme }) => theme.colors.text};
      margin-right: 0.5rem;
   }
`

// 로딩 및 에러 텍스트 스타일 추가
const LoadingText = styled.p`
   text-align: center;
   padding: 2rem;
   font-size: 1.1rem;
   color: ${({ theme }) => theme.colors.textSecondary};
`

const ErrorText = styled.p`
   text-align: center;
   padding: 2rem;
   font-size: 1.1rem;
   color: ${({ theme }) => theme.colors.error};
`
