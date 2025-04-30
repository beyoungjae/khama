import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useAuth } from '@/contexts/AuthContext'
import { getUserCertificates } from '@/services/myPageService'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'

export function MyCertificatesPage() {
   const { user } = useAuth()
   const [certificates, setCertificates] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

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
         <Container>
            <Title>나의 자격증</Title>
            <LoadingText>로딩 중...</LoadingText>
         </Container>
      )
   }

   if (error) {
      return (
         <Container>
            <Title>나의 자격증</Title>
            <ErrorText>{error}</ErrorText>
         </Container>
      )
   }

   return (
      <Container>
         <Title>나의 자격증</Title>
         {certificates.length > 0 ? (
            <CertificateTable>
               <colgroup>
                  <col style={{ width: 'auto' }} />
                  <col style={{ width: '30%' }} />
                  {/* <col style={{ width: '15%' }} /> // 발급/다운로드 버튼 등 추가 가능 */}
               </colgroup>
               <thead>
                  <tr>
                     <Th>자격증명</Th>
                     <Th>발급일</Th>
                     {/* <Th>관리</Th> */}
                  </tr>
               </thead>
               <tbody>
                  {certificates.map((cert) => (
                     <tr key={cert.id}>
                        <Td>{cert.name}</Td>
                        <Td>{cert.issueDate}</Td>
                        {/* <Td><Button size="small" variant="outline">다운로드</Button></Td> */}
                     </tr>
                  ))}
               </tbody>
            </CertificateTable>
         ) : (
            <Placeholder>보유한 자격증이 없습니다.</Placeholder>
         )}
         <ButtonWrapper>
            <Button as={Link} to="/my-page" variant="outline">
               마이페이지로 돌아가기
            </Button>
         </ButtonWrapper>
      </Container>
   )
}

// MyApplicationsPage 와 유사한 스타일 사용
const Container = styled.div`
   padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
   max-width: 800px; // 너비 조정
   margin: 0 auto;
`

const Title = styled.h1`
   font-size: ${({ theme }) => theme.fontSizes.h2};
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

const CertificateTable = styled.table`
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
      padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
      text-align: left;
      vertical-align: middle;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
   }

   th {
      background-color: ${({ theme }) => theme.colors.backgroundLight};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
      font-size: 0.95rem;
   }

   td {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.textSecondary};

      /* 발급일/관리 가운데 정렬 */
      &:nth-child(2),
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
