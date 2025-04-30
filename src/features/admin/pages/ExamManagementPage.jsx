import styled from 'styled-components'
import { Input } from '@/components/common/Input'
import { Button } from '@/components/common/Button'
import { Select } from '@/components/common/Select'

// 목업 시험 데이터
const mockExams = [
   { id: 'exam001', name: '생활가전 유지보수사 2급', date: '2024-08-15', session: '3회차', applicants: 50, status: '접수중' },
   { id: 'exam002', name: '에어컨 전문가 인증', date: '2024-09-10', session: '1회차', applicants: 35, status: '예정' },
   { id: 'exam003', name: '생활가전 유지보수사 1급', date: '2024-07-20', session: '2회차', applicants: 80, status: '종료' },
]

// 시험 상태 옵션
const statusOptions = [
   { value: 'all', label: '전체' },
   { value: 'upcoming', label: '예정' },
   { value: 'registering', label: '접수중' },
   { value: 'closed', label: '종료' },
]

export function ExamManagementPage() {
   // TODO: 실제 데이터 로딩, 필터링, 페이지네이션, 시험 관리 로직

   return (
      <Container>
         <Title>시험 관리</Title>
         <FilterSection>
            <Input placeholder="시험명 검색" style={{ flexGrow: 1 }} />
            <Select options={statusOptions} placeholder="-- 상태 --" style={{ minWidth: '120px' }} />
            <Button variant="primary">검색</Button>
            {/* TODO: 시험 일정 추가 버튼 */}
            <Button variant="secondary" style={{ marginLeft: 'auto' }}>
               + 새 시험 일정 등록
            </Button>
         </FilterSection>

         <ExamTable>
            <colgroup>
               <col style={{ width: '5%' }} />
               <col style={{ width: 'auto' }} />
               <col style={{ width: '15%' }} />
               <col style={{ width: '10%' }} />
               <col style={{ width: '10%' }} />
               <col style={{ width: '10%' }} />
               <col style={{ width: '15%' }} />
            </colgroup>
            <thead>
               <tr>
                  <Th>
                     <input type="checkbox" />
                  </Th>
                  <Th>시험명</Th>
                  <Th>시험일</Th>
                  <Th>회차</Th>
                  <Th>접수인원</Th>
                  <Th>상태</Th>
                  <Th>관리</Th>
               </tr>
            </thead>
            <tbody>
               {mockExams.map((exam) => (
                  <tr key={exam.id}>
                     <Td>
                        <input type="checkbox" />
                     </Td>
                     <Td>{exam.name}</Td>
                     <Td>{exam.date}</Td>
                     <Td>{exam.session}</Td>
                     <Td>{exam.applicants}</Td>
                     <Td>
                        <StatusBadge status={exam.status}>{exam.status}</StatusBadge>
                     </Td>
                     <Td>
                        <ActionButton variant="ghost" size="small">
                           상세
                        </ActionButton>
                        <ActionButton variant="ghost" size="small">
                           수정
                        </ActionButton>
                        <ActionButton variant="ghost" size="small" color="error">
                           삭제
                        </ActionButton>
                     </Td>
                  </tr>
               ))}
            </tbody>
         </ExamTable>
         {/* TODO: Pagination */}
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
   align-items: center;
   margin-bottom: 1.5rem;
   background-color: #fff;
   padding: 1.5rem;
   border-radius: ${({ theme }) => theme.borderRadius};
   border: 1px solid ${({ theme }) => theme.colors.border};

   > div {
      margin-bottom: 0;
   }
`
const ExamTable = styled.table`
   width: 100%;
   border-collapse: collapse;
   background-color: #fff;
   border-radius: ${({ theme }) => theme.borderRadius};
   border: 1px solid ${({ theme }) => theme.colors.border};
   overflow: hidden;
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

   /* 체크박스, 회차, 인원, 상태, 관리 열 가운데 정렬 */
   th:first-child,
   td:first-child,
   th:nth-child(4),
   td:nth-child(4),
   th:nth-child(5),
   td:nth-child(5),
   th:nth-child(6),
   td:nth-child(6),
   th:last-child,
   td:last-child {
      text-align: center;
   }
`
const Th = styled.th`
   padding: 0.75rem;
   text-align: left;
   border-bottom: 1px solid #eee;
`
const Td = styled.td`
   padding: 0.75rem;
   text-align: left;
   border-bottom: 1px solid #eee;
`
const StatusBadge = styled.span`
   padding: 0.25rem 0.6rem;
   border-radius: ${({ theme }) => theme.borderRadius};
   font-size: 0.75rem;
   font-weight: 600;
   color: white;
   text-transform: uppercase;
   letter-spacing: 0.5px;
   background-color: ${({ theme, status }) => {
      switch (status) {
         case '접수중':
            return theme.colors.success
         case '예정':
            return theme.colors.warning
         case '종료':
            return theme.colors.textSecondary
         default:
            return theme.colors.textSecondary
      }
   }};
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
