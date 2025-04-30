import styled from 'styled-components'

// 페이지네이션 컴포넌트 Props
// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (pageNumber: number) => void;
// }

export function Pagination({ currentPage, totalPages, onPageChange }) {
   if (totalPages <= 1) {
      return null // 페이지가 1개 이하면 표시하지 않음
   }

   const getPageNumbers = () => {
      const pageNumbers = []
      const maxPagesToShow = 5 // 현재 페이지 좌우로 보여줄 최대 페이지 수 (현재 페이지 포함)
      const halfMaxPages = Math.floor(maxPagesToShow / 2)

      // 항상 첫 페이지 표시
      pageNumbers.push(1)

      // 시작 생략(...) 표시 조건
      if (currentPage > halfMaxPages + 2) {
         pageNumbers.push('start-ellipsis')
      }

      // 중간 페이지 번호 계산
      let startPage = Math.max(2, currentPage - halfMaxPages)
      let endPage = Math.min(totalPages - 1, currentPage + halfMaxPages)

      // 현재 페이지 위치에 따라 startPage, endPage 조정
      if (currentPage <= halfMaxPages + 1) {
         endPage = Math.min(totalPages - 1, maxPagesToShow)
      }
      if (currentPage >= totalPages - halfMaxPages) {
         startPage = Math.max(2, totalPages - maxPagesToShow + 1)
      }

      for (let i = startPage; i <= endPage; i++) {
         pageNumbers.push(i)
      }

      // 끝 생략(...) 표시 조건
      if (currentPage < totalPages - halfMaxPages - 1) {
         pageNumbers.push('end-ellipsis')
      }

      // 항상 마지막 페이지 표시 (1페이지가 아닌 경우)
      if (totalPages > 1) {
         pageNumbers.push(totalPages)
      }

      // 중복 제거 및 정렬 (만약 계산 로직이 복잡해져 중복이 생길 경우 대비)
      // return [...new Set(pageNumbers)].sort((a, b) => (typeof a === 'number' && typeof b === 'number' ? a - b : 0));
      // 위 로직보다 ellipsis 문자열을 고려한 필터링이 나을 수 있음
      const uniquePageNumbers = []
      const seen = new Set()
      for (const num of pageNumbers) {
         if (!seen.has(num)) {
            uniquePageNumbers.push(num)
            seen.add(num)
         }
      }
      return uniquePageNumbers
   }

   const pageNumbersToDisplay = getPageNumbers()

   return (
      <Nav>
         <Button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
            &laquo; 이전
         </Button>
         {pageNumbersToDisplay.map((number) =>
            typeof number === 'number' ? (
               <PageNumberButton key={`page-${number}`} $isActive={number === currentPage} onClick={() => onPageChange(number)}>
                  {number}
               </PageNumberButton>
            ) : (
               <Ellipsis key={number === 'start-ellipsis' ? 'start-dots' : 'end-dots'}>...</Ellipsis>
            )
         )}
         <Button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            다음 &raquo;
         </Button>
      </Nav>
   )
}

const Nav = styled.nav`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 2rem; /* 목록 테이블과의 간격 */
   gap: 0.5rem;
`

const Button = styled.button`
   padding: 0.5rem 1rem;
   border: 1px solid #ddd;
   background-color: white;
   color: #333;
   cursor: pointer;
   border-radius: 4px;
   transition: background-color 0.2s, color 0.2s;

   &:disabled {
      color: #aaa;
      cursor: not-allowed;
      background-color: #f9f9f9;
   }

   &:not(:disabled):hover {
      background-color: #eee;
   }
`

const PageNumberButton = styled(Button)`
   min-width: 2.5rem; /* 버튼 최소 너비 */
   background-color: ${(props) => (props.$isActive ? props.theme.colors.primary || '#007bff' : 'white')};
   color: ${(props) => (props.$isActive ? 'white' : '#333')};
   border-color: ${(props) => (props.$isActive ? props.theme.colors.primary || '#007bff' : '#ddd')};
   font-weight: ${(props) => (props.$isActive ? 'bold' : 'normal')};

   &:not(:disabled):hover {
      background-color: ${(props) => (props.$isActive ? '#0056b3' : '#eee')};
      border-color: ${(props) => (props.$isActive ? '#0056b3' : '#ddd')};
   }
`

const Ellipsis = styled.span`
   padding: 0.5rem 0.3rem;
   color: #aaa;
   cursor: default;
`
