import styled from 'styled-components'
import { Button } from '@/components/common/Button'

export function ApplicationManagementPage() {
   return (
      <Container>
         <Title>신청서 관리</Title>
         {/* TODO: 신청서 목록 테이블, 검색/필터링, 승인/거절 처리 기능 구현 */}
         <Placeholder>접수된 교육/시험 신청서 목록 및 관리 기능이 여기에 표시됩니다.</Placeholder>
      </Container>
   )
}

const Container = styled.div``
const Title = styled.h1`
   font-size: ${({ theme }) => theme.fontSizes.h3};
   font-weight: 700;
   margin-bottom: 1.5rem;
`

const FilterSection = styled.div`
   display: flex;
   gap: 1rem;
   align-items: center; // 세로 정렬 추가
   margin-bottom: 1.5rem;
   background-color: #fff;
   padding: 1.5rem;
   border-radius: ${({ theme }) => theme.borderRadius};
   border: 1px solid ${({ theme }) => theme.colors.border};

   > div {
      margin-bottom: 0;
   } // Input, Select 래퍼 마진 제거
`

const ApplicationTable = styled.table`
   // UserTable -> ApplicationTable 이름 변경
   width: 100%;
   border-collapse: collapse;
   background-color: #fff;
   border-radius: ${({ theme }) => theme.borderRadius};
   border: 1px solid ${({ theme }) => theme.colors.border};
   overflow: hidden; /* radius 적용 위해 */
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

   th,
   td {
      padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
      text-align: left;
      vertical-align: middle;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
   }

   th {
      background-color: ${({ theme }) => theme.colors.backgroundLight};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
      font-size: 0.9rem;
   }

   td {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.textSecondary};
   }

   tbody tr {
      &:last-child td {
         border-bottom: none;
      }
      &:hover {
         background-color: ${({ theme }) => theme.colors.primary}10;
      }
   }

   /* 체크박스, 상태, 관리 열 가운데 정렬 */
   th:first-child,
   td:first-child,
   th:nth-child(6),
   td:nth-child(6),
   th:last-child,
   td:last-child {
      text-align: center;
   }
`

const Th = styled.th``
const Td = styled.td``

// StatusBadge, ActionButton은 그대로 사용
const StatusBadge = styled.span`
   padding: 0.2rem 0.5rem;
   border-radius: ${({ theme }) => theme.borderRadius};
   font-size: 0.75rem;
   font-weight: 600;
   color: white;
   background-color: ${({ theme, status }) => (status === '승인' ? theme.colors.success : status === '대기' ? theme.colors.warning : status === '반려' ? theme.colors.error : theme.colors.textSecondary)};
`

const ActionButton = styled(Button)`
   padding: 0.2rem 0.4rem;
   font-size: 0.8rem;
   margin-right: 0.3rem;
   color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.textSecondary)};

   &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundLight};
   }

   &:last-child {
      margin-right: 0;
   }
`

const Placeholder = styled.div`
   background-color: #fff;
   padding: 2rem;
   border-radius: 8px;
   border: 1px solid #eee;
   text-align: center;
   color: #888;
   font-style: italic;
`
