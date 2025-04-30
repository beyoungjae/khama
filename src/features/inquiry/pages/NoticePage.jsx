import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useSearchParams } from 'react-router-dom'
import { getNotices } from '@/services/noticeService'
import { Pagination } from '@/components/common/Pagination'
// import { Notice } from '@/types/notice'; // TypeScript 사용 시 타입 임포트

export function NoticePage() {
   const [searchParams, setSearchParams] = useSearchParams()
   const [notices, setNotices] = useState([]) // 타입: Notice[]
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page') || '1', 10)) // 현재 페이지 상태
   const [totalPages, setTotalPages] = useState(1) // 총 페이지 상태
   const [totalCount, setTotalCount] = useState(0) // 총 게시물 수

   const noticesPerPage = 10 // 페이지당 게시물 수

   useEffect(() => {
      const fetchNotices = async (page) => {
         try {
            setLoading(true)
            // URL 파라미터 업데이트
            setSearchParams({ page: page.toString() })
            const data = await getNotices(page, noticesPerPage)
            setNotices(data.notices)
            setTotalPages(data.totalPages)
            setTotalCount(data.totalCount)
            setCurrentPage(data.currentPage) // API 응답값으로 현재 페이지 동기화
            setError(null)
         } catch (err) {
            console.error('Failed to fetch notices:', err)
            setError('공지사항을 불러오는 중 오류가 발생했습니다.')
            setNotices([])
            setTotalPages(1)
            setTotalCount(0)
         } finally {
            setLoading(false)
         }
      }

      fetchNotices(currentPage)
   }, [currentPage, setSearchParams]) // currentPage가 변경될 때마다 실행

   const handlePageChange = (pageNumber) => {
      if (pageNumber > 0 && pageNumber <= totalPages) {
         setCurrentPage(pageNumber)
         // 페이지 상단으로 스크롤 (선택적)
         window.scrollTo(0, 0)
      }
   }

   // 목록 번호 계산 (페이지네이션 고려)
   const getNoticeNumber = (index) => {
      return totalCount - (currentPage - 1) * noticesPerPage - index
   }

   if (loading && notices.length === 0) {
      // 초기 로딩 시에만 전체 로딩 표시
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
         <Title>공지사항</Title>
         {/* 로딩 중에도 기존 목록은 유지 (UX 개선) */}
         {loading && <LoadingOverlay>로딩 중...</LoadingOverlay>}
         <NoticeTable>
            <colgroup>
               <col style={{ width: '10%' }} />
               <col style={{ width: 'auto' }} />
               <col style={{ width: '15%' }} />
               <col style={{ width: '15%' }} />
               <col style={{ width: '10%' }} />
            </colgroup>
            <thead>
               <tr>
                  <Th>번호</Th>
                  <Th>제목</Th>
                  <Th>작성자</Th>
                  <Th>작성일</Th>
                  <Th>조회수</Th>
               </tr>
            </thead>
            <tbody>
               {notices.length > 0 ? (
                  notices.map((notice, index) => (
                     <tr key={notice.id}>
                        <Td>{getNoticeNumber(index)}</Td>
                        <TdTitle>
                           <StyledLink to={`/notice/${notice.id}`}>{notice.title}</StyledLink>
                        </TdTitle>
                        <Td>{notice.author || '-'}</Td>
                        <Td>{new Date(notice.createdAt).toLocaleDateString()}</Td>
                        <Td>{notice.viewCount || 0}</Td>
                     </tr>
                  ))
               ) : (
                  <tr>
                     <Td colSpan={5}>등록된 공지사항이 없습니다.</Td>
                  </tr>
               )}
            </tbody>
         </NoticeTable>
         <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </Container>
   )
}

const Container = styled.div`
   padding: 2rem 4rem;
   max-width: 1200px;
   margin: 0 auto;
   position: relative; /* 로딩 오버레이 기준 */
`

const Title = styled.h1`
   font-size: 2rem;
   font-weight: bold;
   margin-bottom: 2rem;
   text-align: center;
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

const NoticeTable = styled.table`
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

   /* 번호, 작성자, 작성일, 조회수 컬럼 너비는 colgroup으로 제어 */
`

const Th = styled.th`
   background-color: ${({ theme }) => theme.colors.backgroundLight};
   font-weight: 600;
   color: ${({ theme }) => theme.colors.text};
   border-bottom-width: 1px; /* thead 경계선 강화 */
`

const Td = styled.td`
   color: ${({ theme }) => theme.colors.textSecondary};

   /* 제목 열만 왼쪽 정렬 */
   &:nth-child(2) {
      text-align: left;
   }
`

const TdTitle = styled(Td)`
   text-align: left;
   padding-left: ${({ theme }) => theme.spacing.md};
   color: ${({ theme }) => theme.colors.text}; /* 제목은 기본 텍스트 색상 */
   font-weight: 500;
`

const StyledLink = styled(Link)`
   color: inherit; /* 부모 요소(TdTitle) 색상 상속 */
   text-decoration: none;
   &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.primary};
   }
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
