import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { getQuestions } from '@/services/qnaService'
import { Button } from '@/components/common/Button'
import { Pagination } from '@/components/common/Pagination'
// import { Question } from '@/types/qna';
import { useAuth } from '@/contexts/AuthContext'

export function QnaPage() {
   const [searchParams, setSearchParams] = useSearchParams()
   const { isLoggedIn } = useAuth()
   const navigate = useNavigate()
   const [questions, setQuestions] = useState([]) // 타입: Question[]
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page') || '1', 10))
   const [totalPages, setTotalPages] = useState(1)
   const [totalCount, setTotalCount] = useState(0)

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
         <Container>
            <LoadingText>로딩 중...</LoadingText>
         </Container>
      )
   }

   if (error) {
      return (
         <Container>
            <ErrorText>{error}</ErrorText>
         </Container>
      )
   }

   return (
      <Container>
         <Title>Q&A</Title>
         <ButtonWrapper>
            {isLoggedIn && (
               <Button onClick={handleWriteClick} size="medium" variant="primary">
                  질문하기
               </Button>
            )}
         </ButtonWrapper>
         {loading && <LoadingOverlay>로딩 중...</LoadingOverlay>}
         <QnaTable>
            <colgroup>
               <col style={{ width: '8%' }} />
               <col style={{ width: 'auto' }} />
               <col style={{ width: '12%' }} />
               <col style={{ width: '12%' }} />
               <col style={{ width: '10%' }} />
               <col style={{ width: '10%' }} />
            </colgroup>
            <thead>
               <tr>
                  <Th>번호</Th>
                  <Th>제목</Th>
                  <Th>작성자</Th>
                  <Th>작성일</Th>
                  <Th>상태</Th>
                  <Th>조회수</Th>
               </tr>
            </thead>
            <tbody>
               {questions.length > 0 ? (
                  questions.map((q, index) => (
                     <tr key={q.id}>
                        <Td>{getQuestionNumber(index)}</Td>
                        <TdTitle>
                           {q.isPrivate && <LockIcon>🔒</LockIcon>}
                           <StyledLink to={`/qna/${q.id}`}>{q.title}</StyledLink>
                        </TdTitle>
                        <Td>{q.authorName || '-'}</Td>
                        <Td>{new Date(q.createdAt).toLocaleDateString()}</Td>
                        <Td>
                           <StatusBadge answered={q.isAnswered}>{q.isAnswered ? '답변완료' : '답변대기'}</StatusBadge>
                        </Td>
                        <Td>{q.viewCount || 0}</Td>
                     </tr>
                  ))
               ) : (
                  <tr>
                     <Td colSpan={6}>등록된 질문이 없습니다.</Td>
                  </tr>
               )}
            </tbody>
         </QnaTable>
         <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </Container>
   )
}

// 공지사항과 유사한 스타일 + 추가 스타일
const Container = styled.div`
   padding: 2rem 4rem;
   max-width: 1200px;
   margin: 0 auto;
   position: relative;
`

const Title = styled.h1`
   font-size: 2rem;
   font-weight: bold;
   margin-bottom: 1rem;
   text-align: center;
`

const ButtonWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-bottom: 1.5rem;
`

const LoadingText = styled.p`
   text-align: center;
   padding: 2rem;
`

const ErrorText = styled.p`
   text-align: center;
   color: red;
   padding: 2rem;
`

const QnaTable = styled.table`
   width: 100%;
   border-collapse: collapse;
   margin-top: 1rem;
   font-size: ${({ theme }) => theme.fontSizes.medium};
   border-top: 2px solid ${({ theme }) => theme.colors.primary};

   th,
   td {
      padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.sm}`};
      text-align: center;
      vertical-align: middle;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
   }

   tbody tr {
      transition: background-color 0.2s;
      &:hover {
         background-color: ${({ theme }) => theme.colors.backgroundLight};
      }
   }
`

const Th = styled.th`
   background-color: ${({ theme }) => theme.colors.backgroundLight};
   font-weight: 600;
   color: ${({ theme }) => theme.colors.text};
   border-bottom-width: 1px;
`

const Td = styled.td`
   color: ${({ theme }) => theme.colors.textSecondary};

   &:nth-child(2) {
      text-align: left;
   }
`

const TdTitle = styled(Td)`
   text-align: left;
   padding-left: ${({ theme }) => theme.spacing.md};
   color: ${({ theme }) => theme.colors.text};
   font-weight: 500;
   display: flex;
   align-items: center;
`

const LockIcon = styled.span`
   margin-right: 0.5rem;
   color: ${({ theme }) => theme.colors.textSecondary};
   font-size: 0.9em;
   display: inline-flex;
   vertical-align: middle;
`

const StyledLink = styled(Link)`
   color: inherit;
   text-decoration: none;
   &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.primary};
   }
`

const StatusBadge = styled.span`
   padding: 0.3rem 0.6rem;
   border-radius: ${({ theme }) => theme.borderRadius};
   font-size: 0.8rem;
   font-weight: 600;
   color: white;
   text-transform: uppercase;
   letter-spacing: 0.5px;

   ${(props) =>
      props.answered
         ? css`
              background-color: ${props.theme.colors.primary};
           `
         : css`
              background-color: ${props.theme.colors.secondary};
           `}
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
   font-weight: bold;
   z-index: 10;
   border-radius: ${({ theme }) => theme.borderRadius};
`
