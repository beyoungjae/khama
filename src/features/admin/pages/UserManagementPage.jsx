import styled from 'styled-components'
import { Input } from '@/components/common/Input'
import { Button } from '@/components/common/Button'
import { Select } from '@/components/common/Select'
import { useState } from 'react'
import { Pagination } from '@/components/common/Pagination'

// 목업 사용자 데이터
const mockUsers = [
   { id: 'user001', name: '홍길동', email: 'gildong@example.com', phone: '010-1234-5678', role: 'user', createdAt: '2024-07-01' },
   { id: 'user002', name: '김철수', email: 'chulsoo@example.com', phone: '010-9876-5432', role: 'user', createdAt: '2024-07-15' },
   { id: 'admin001', name: '관리자', email: 'admin@khama.or.kr', phone: '-', role: 'admin', createdAt: '2024-06-20' },
   { id: 'user003', name: '이영희', email: 'yhlee@example.com', phone: '010-1111-2222', role: 'user', createdAt: '2024-07-18' },
   { id: 'user004', name: '박민준', email: 'minjun@example.com', phone: '010-3333-4444', role: 'user', createdAt: '2024-07-20' },
]

// 역할 옵션
const roleOptions = [
   { value: 'all', label: '전체 역할' },
   { value: 'user', label: '일반 사용자' },
   { value: 'admin', label: '관리자' },
]

// 목업 삭제 함수
const deleteUserMock = async (userId) => {
   console.log(`Deleting user ${userId} (mock)`)
   await new Promise((res) => setTimeout(res, 300))
   // 실제로는 API 호출 후 성공 여부 반환
   return true
}

export function UserManagementPage() {
   const [users, setUsers] = useState(mockUsers)
   const [currentPage, setCurrentPage] = useState(1)
   const usersPerPage = 5

   // 페이지네이션 계산
   const totalPages = Math.ceil(users.length / usersPerPage)
   const indexOfLastUser = currentPage * usersPerPage
   const indexOfFirstUser = indexOfLastUser - usersPerPage
   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

   const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber)
   }

   // 사용자 삭제 핸들러
   const handleDeleteUser = async (userId) => {
      if (window.confirm(`사용자 ID ${userId}를 정말 삭제하시겠습니까?`)) {
         const success = await deleteUserMock(userId)
         if (success) {
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId))
            alert('사용자가 삭제되었습니다. (목업)')
            // TODO: 현재 페이지에 아이템이 없으면 이전 페이지로 이동 등의 처리
         } else {
            alert('사용자 삭제 중 오류 발생 (목업)')
         }
      }
   }

   return (
      <Container>
         <Title>회원 관리</Title>
         <FilterSection>
            <Input placeholder="이름 또는 이메일 검색" style={{ flexGrow: 1 }} />
            <Select options={roleOptions} defaultValue="all" style={{ minWidth: '150px' }} />
            <Button variant="primary">검색</Button>
         </FilterSection>

         <UserTable>
            <colgroup>
               <col style={{ width: '5%' }} />
               <col style={{ width: '15%' }} />
               <col style={{ width: 'auto' }} />
               <col style={{ width: '15%' }} />
               <col style={{ width: '10%' }} />
               <col style={{ width: '15%' }} />
               <col style={{ width: '10%' }} />
            </colgroup>
            <thead>
               <tr>
                  <Th>
                     <input type="checkbox" aria-label="전체 선택" />
                  </Th>
                  <Th>이름</Th>
                  <Th>이메일</Th>
                  <Th>연락처</Th>
                  <Th>역할</Th>
                  <Th>가입일</Th>
                  <Th>관리</Th>
               </tr>
            </thead>
            <tbody>
               {currentUsers.map((user) => (
                  <tr key={user.id}>
                     <Td>
                        <input type="checkbox" aria-label={`${user.name} 선택`} />
                     </Td>
                     <Td>{user.name}</Td>
                     <Td>{user.email}</Td>
                     <Td>{user.phone}</Td>
                     <Td>
                        <RoleBadge role={user.role}>{user.role === 'admin' ? '관리자' : '사용자'}</RoleBadge>
                     </Td>
                     <Td>{user.createdAt}</Td>
                     <Td>
                        <ActionButton variant="ghost" size="small">
                           수정
                        </ActionButton>
                        <ActionButton variant="ghost" size="small" $danger onClick={() => handleDeleteUser(user.id)}>
                           삭제
                        </ActionButton>
                     </Td>
                  </tr>
               ))}
            </tbody>
         </UserTable>
         <PaginationContainer>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
         </PaginationContainer>
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
   margin-bottom: 1.5rem;
   background-color: #fff;
   padding: 1.5rem;
   border-radius: ${({ theme }) => theme.borderRadius};
   border: 1px solid ${({ theme }) => theme.colors.border};

   /* Input 컴포넌트 내부의 마진 제거 */
   > div {
      margin-bottom: 0;
   }
   /* > select { margin-bottom: 0; } */ /* Select 컴포넌트 래퍼 고려 필요 -> Select 컴포넌트 자체에서 마진 제어하므로 제거 */
`
const UserTable = styled.table`
   width: 100%;
   border-collapse: collapse;
   background-color: #fff;
   border-radius: ${({ theme }) => theme.borderRadius};
   border: 1px solid ${({ theme }) => theme.colors.border};
   overflow: hidden; /* radius 적용 위해 */
   box-shadow: 0 2px 4px rgba(0,0,0,0.05);

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
         background-color: ${({ theme }) => theme.colors.primary}10; /* 연한 파란색 배경 */
      }
   padding: 2rem;
   border-radius: 8px;
   border: 1px solid #eee;
   text-align: center;
   color: #888;
   font-style: italic;
`

const ActionButton = styled(Button)`
   padding: 0.2rem 0.4rem;
   font-size: 0.8rem;
   margin-right: 0.3rem;
   color: ${({ theme, $danger }) => ($danger ? theme.colors.error : theme.colors.textSecondary)};

   &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundLight};
      color: ${({ theme, $danger }) => ($danger ? theme.colors.error : theme.colors.primary)};
   }

   &:last-child {
      margin-right: 0;
   }
`

const PaginationContainer = styled.div`
   margin-top: 2rem;
   display: flex;
   justify-content: center;
`
