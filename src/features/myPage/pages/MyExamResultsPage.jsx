import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useAuth } from '@/contexts/AuthContext'
import { getUserExamResults } from '@/services/myPageService'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'

export function MyExamResultsPage() {
   const { user } = useAuth()
   const [examResults, setExamResults] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

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

   if (loading) {
      return (
         <Container>
            <Title>나의 시험 결과</Title>
            <LoadingText>로딩 중...</LoadingText>
         </Container>
      )
   }

   if (error) {
      return (
         <Container>
            <Title>나의 시험 결과</Title>
            <ErrorText>{error}</ErrorText>
         </Container>
      )
   }

   return (
      <Container>
         <Title>나의 시험 결과</Title>
         {examResults.length > 0 ? (
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
                  {examResults.map((exam) => (
                     <tr key={exam.id}>
                        <Td>{exam.name}</Td>
                        <Td>{exam.date}</Td>
                        <Td>
                           <ResultBadge result={exam.result}>{exam.result}</ResultBadge>
                        </Td>
                     </tr>
                  ))}
               </tbody>
            </ResultTable>
         ) : (
            <Placeholder>응시한 시험 결과가 없습니다.</Placeholder>
         )}
         <ButtonWrapper>
            <Button as={Link} to="/my-page" variant="outline">
               마이페이지로 돌아가기
            </Button>
         </ButtonWrapper>
      </Container>
   )
}

// 다른 마이페이지 상세 페이지와 유사한 스타일 사용
const Container = styled.div`
   padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
   max-width: 900px; // 너비 조정
   margin: 0 auto;
`

const Title = styled.h1`
   font-size: ${({ theme }) => theme.fontSizes.h2};
   font-weight: 700;
   margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const ResultTable = styled.table`
   // CertificateTable 과 거의 동일
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

      /* 응시일, 결과 가운데 정렬 */
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

const ResultBadge = styled.span`
   // MyPage.jsx 의 ResultBadge 와 동일
   padding: 0.3rem 0.6rem;
   border-radius: ${({ theme }) => theme.borderRadius};
   font-size: 0.8rem;
   font-weight: 600;
   color: white;
   background-color: ${({ theme, result }) => (result === '합격' ? theme.colors.primary : theme.colors.error)};
`

// 다른 마이페이지 상세 페이지와 공통 스타일 재사용
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
