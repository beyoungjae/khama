import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useAuth } from '@/contexts/AuthContext'
import { getUserApplications } from '@/services/myPageService'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'

export function MyApplicationsPage() {
   const { user } = useAuth()
   const [applications, setApplications] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

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

   if (loading) {
      return (
         <Container>
            <Title>나의 신청 내역</Title>
            <LoadingText>로딩 중...</LoadingText>
         </Container>
      )
   }

   if (error) {
      return (
         <Container>
            <Title>나의 신청 내역</Title>
            <ErrorText>{error}</ErrorText>
         </Container>
      )
   }

   return (
      <Container>
         <Title>나의 신청 내역</Title>
         {applications.length > 0 ? (
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
                  {applications.map((app) => (
                     <tr key={app.id}>
                        <Td>{app.type}</Td>
                        <Td>{app.name}</Td>
                        <Td>{app.date}</Td>
                        <Td>
                           <StatusBadge status={app.status}>{app.status}</StatusBadge>
                        </Td>
                     </tr>
                  ))}
               </tbody>
            </ApplicationTable>
         ) : (
            <Placeholder>신청 내역이 없습니다.</Placeholder>
         )}
         <ButtonWrapper>
            <Button as={Link} to="/my-page" variant="outline">
               마이페이지로 돌아가기
            </Button>
         </ButtonWrapper>
      </Container>
   )
}

// MyPage.jsx 또는 다른 관리 페이지와 유사한 스타일 사용
const Container = styled.div`
   padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
   max-width: 1000px; // 너비 조정
   margin: 0 auto;
`

const Title = styled.h1`
   font-size: ${({ theme }) => theme.fontSizes.h2}; // 크기 조정
   font-weight: 700;
   margin-bottom: ${({ theme }) => theme.spacing.xl};
`

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

const ApplicationTable = styled.table`
   width: 100%;
   border-collapse: collapse;
   background-color: #fff;
   border-radius: ${({ theme }) => theme.borderRadius};
   border: 1px solid ${({ theme }) => theme.colors.border};
   overflow: hidden;
   box-shadow: ${({ theme }) => theme.boxShadow};
   margin-top: 1.5rem;

   th,
   td {
      padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`}; // 패딩 조정
      text-align: left;
      vertical-align: middle;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
   }

   th {
      background-color: ${({ theme }) => theme.colors.backgroundLight};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
      font-size: 0.95rem; // 약간 키움
   }

   td {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.textSecondary};

      /* 상태 열 가운데 정렬 */
      &:last-child {
         text-align: center;
      }
   }

   tbody tr {
      &:last-child td {
         border-bottom: none;
      }
      &:hover {
         background-color: ${({ theme }) => theme.colors.primary}10;
      }
   }
`

const Th = styled.th``
const Td = styled.td``

const StatusBadge = styled.span`
   padding: 0.3rem 0.6rem;
   border-radius: ${({ theme }) => theme.borderRadius};
   font-size: 0.8rem;
   font-weight: 600;
   color: white;
   background-color: ${({ theme, status }) => (status === '승인' ? theme.colors.success : status === '대기' ? theme.colors.warning : status === '반려' ? theme.colors.error : theme.colors.textSecondary)};
`

const Placeholder = styled.div`
   color: ${({ theme }) => theme.colors.textSecondary};
   text-align: center;
   padding: 3rem 0;
   font-style: italic;
   background-color: #fff;
   border: 1px dashed ${({ theme }) => theme.colors.border};
   border-radius: ${({ theme }) => theme.borderRadius};
   margin-top: 1.5rem;
`

const ButtonWrapper = styled.div`
   margin-top: ${({ theme }) => theme.spacing.xl};
   text-align: center;
`
