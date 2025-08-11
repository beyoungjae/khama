import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { FaUsers, FaSearch, FaEdit, FaTrash, FaUserCheck, FaUserShield, FaUserCog } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { useState } from 'react'
import {
  fadeInUp,
  fadeInScale,
  staggerContainer,
  slideInLeft,
  slideInRight,
  PageWrapper,
  Container,
  ModernHeroSection,
  HeroBackground,
  HeroContainer,
  HeroBadge,
  HeroTitle,
  GradientText,
  HeroSubtitle,
  HeroDescription,
  Section,
  SectionHeader,
  SectionTitle,
  Card
} from '../../../components/common/SharedStyles'

// 목업 사용자 데이터
const mockUsers = [
   { id: 'user001', name: '홍길동', email: 'gildong@example.com', phone: '010-1234-5678', role: 'user', createdAt: '2024-07-01' },
   { id: 'user002', name: '김철수', email: 'chulsoo@example.com', phone: '010-9876-5432', role: 'user', createdAt: '2024-07-15' },
   { id: 'admin001', name: '관리자', email: 'admin@khama.or.kr', phone: '-', role: 'admin', createdAt: '2024-06-20' },
   { id: 'user003', name: '이영희', email: 'yhlee@example.com', phone: '010-1111-2222', role: 'user', createdAt: '2024-07-18' },
   { id: 'user004', name: '박민준', email: 'minjun@example.com', phone: '010-3333-4444', role: 'user', createdAt: '2024-07-20' },
]

// 역할 옵션 (사용하지 않으므로 제거)

// 목업 삭제 함수
const deleteUserMock = async (userId) => {
   console.log(`Deleting user ${userId} (mock)`)
   await new Promise((res) => setTimeout(res, 300))
   // 실제로는 API 호출 후 성공 여부 반환
   return true
}

export function UserManagementPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div
   
   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   
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
      <PageWrapper>
         <ModernHeroSection gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" ref={heroRef}>
            <HeroBackground />
            <HeroContainer>
               <motion.div
                  initial="hidden"
                  animate={heroInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaUsers /> 회원 관리
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     <GradientText>회원</GradientText> 관리
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "모든 회원 정보를 체계적으로 관리하세요"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     회원 등록 현황을 한눈에 확인하고 효율적으로 관리하세요
                  </HeroDescription>
               </motion.div>
            </HeroContainer>
         </ModernHeroSection>

         <Container>
            <Section ref={contentRef}>
               <SectionHeader>
                  <SectionTitle
                     as={motion.h2}
                     initial="hidden"
                     animate={contentInView ? "visible" : "hidden"}
                     variants={fadeInUp}
                  >
                     <FaUserCog /> 회원 목록
                  </SectionTitle>
               </SectionHeader>
               
               <FilterCard
                  as={motion.div}
                  initial="hidden"
                  animate={contentInView ? "visible" : "hidden"}
                  variants={fadeInUp}
               >
                  <FilterSection>
                     <SearchInput placeholder="이름 또는 이메일 검색" />
                     <FilterSelect>
                        <option value="all">전체 역할</option>
                        <option value="user">일반 사용자</option>
                        <option value="admin">관리자</option>
                     </FilterSelect>
                     <FilterButton>
                        <FaSearch /> 검색
                     </FilterButton>
                  </FilterSection>
               </FilterCard>

               <UserCard
                  as={motion.div}
                  initial="hidden"
                  animate={contentInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  <TableWrapper as={motion.div} variants={fadeInUp}>
                     <UserTable>
                        <thead>
                           <tr>
                              <th>
                                 <CheckboxWrapper>
                                    <input type="checkbox" aria-label="전체 선택" />
                                 </CheckboxWrapper>
                              </th>
                              <th>이름</th>
                              <th>이메일</th>
                              <th>연락처</th>
                              <th>역할</th>
                              <th>가입일</th>
                              <th>관리</th>
                           </tr>
                        </thead>
                        <tbody>
                           {currentUsers.map((user) => {
                              const isAdmin = user.role === 'admin'
                              return (
                                 <tr key={user.id}>
                                    <td>
                                       <CheckboxWrapper>
                                          <input type="checkbox" aria-label={`${user.name} 선택`} />
                                       </CheckboxWrapper>
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                       <RoleBadge role={user.role}>
                                          {isAdmin ? <FaUserShield /> : <FaUserCheck />}
                                          {isAdmin ? '관리자' : '사용자'}
                                       </RoleBadge>
                                    </td>
                                    <td>{user.createdAt}</td>
                                    <td>
                                       <ActionButtons>
                                          <ActionButton>
                                             <FaEdit />
                                          </ActionButton>
                                          <ActionButton status="delete" onClick={() => handleDeleteUser(user.id)}>
                                             <FaTrash />
                                          </ActionButton>
                                       </ActionButtons>
                                    </td>
                                 </tr>
                              )
                           })}
                        </tbody>
                     </UserTable>
                  </TableWrapper>
                  
                  {users.length === 0 && (
                     <PlaceholderContent as={motion.div} variants={fadeInUp}>
                        <FaUsers size={48} />
                        <h3>회원이 없습니다</h3>
                        <p>아직 등록된 회원이 없습니다.</p>
                     </PlaceholderContent>
                  )}
               </UserCard>
               
               {/* TODO: 페이지네이션 추가 */}
               {totalPages > 1 && (
                  <PaginationWrapper as={motion.div} variants={fadeInUp}>
                     <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                           <PageButton
                              key={page}
                              active={currentPage === page}
                              onClick={() => handlePageChange(page)}
                           >
                              {page}
                           </PageButton>
                        ))}
                     </div>
                  </PaginationWrapper>
               )}
            </Section>
         </Container>
      </PageWrapper>
   )
}

// UserManagementPage 전용 스타일 컴포넌트
const FilterCard = styled(Card)`
   padding: 1.5rem;
   margin-bottom: 2rem;
`

const FilterSection = styled.div`
   display: flex;
   gap: 1rem;
   align-items: center;
   flex-wrap: wrap;
   
   @media (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
   }
`

const SearchInput = styled.input`
   flex: 1;
   padding: 0.75rem 1rem;
   border: 2px solid #e2e8f0;
   border-radius: 12px;
   font-size: 0.9rem;
   transition: all 0.3s ease;
   
   &:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
   }
   
   &::placeholder {
      color: #94a3b8;
   }
`

const FilterSelect = styled.select`
   padding: 0.75rem 1rem;
   border: 2px solid #e2e8f0;
   border-radius: 12px;
   font-size: 0.9rem;
   background: white;
   cursor: pointer;
   transition: all 0.3s ease;
   
   &:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
   }
`

const FilterButton = styled.button`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   padding: 0.75rem 1.5rem;
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   color: white;
   border: none;
   border-radius: 12px;
   font-size: 0.9rem;
   font-weight: 500;
   cursor: pointer;
   transition: all 0.3s ease;
   
   &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
   }
`

const UserCard = styled(Card)`
   padding: 0;
   overflow: hidden;
`

const TableWrapper = styled.div`
   overflow-x: auto;
`

const UserTable = styled.table`
   width: 100%;
   border-collapse: collapse;
   
   th, td {
      padding: 1rem 1.5rem;
      text-align: left;
      border-bottom: 1px solid #e2e8f0;
   }
   
   th {
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      font-weight: 600;
      color: #1e293b;
      font-size: 0.9rem;
   }
   
   td {
      font-size: 0.9rem;
      color: #64748b;
   }
   
   tbody tr:hover {
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
   }
   
   th:first-child,
   td:first-child,
   th:nth-child(5),
   td:nth-child(5),
   th:nth-child(6),
   td:nth-child(6),
   th:last-child,
   td:last-child {
      text-align: center;
   }
`

const CheckboxWrapper = styled.div`
   display: flex;
   justify-content: center;
   
   input[type="checkbox"] {
      width: 16px;
      height: 16px;
      cursor: pointer;
   }
`

const RoleBadge = styled.span`
   display: inline-flex;
   align-items: center;
   gap: 0.5rem;
   padding: 0.5rem 1rem;
   border-radius: 20px;
   font-size: 0.8rem;
   font-weight: 600;
   background: ${({ role }) => {
      switch (role) {
         case 'admin': return 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
         case 'user': return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
         default: return 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)'
      }
   }};
   color: white;
`

const ActionButtons = styled.div`
   display: flex;
   gap: 0.5rem;
   justify-content: center;
`

const ActionButton = styled.button`
   width: 32px;
   height: 32px;
   border: none;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   transition: all 0.3s ease;
   font-size: 0.9rem;
   
   background: ${({ status }) => {
      switch (status) {
         case 'delete': return 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
         default: return 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)'
      }
   }};
   color: white;
   
   &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
   }
`

const PlaceholderContent = styled.div`
   padding: 4rem 2rem;
   text-align: center;
   color: #94a3b8;
   
   svg {
      margin-bottom: 1rem;
      opacity: 0.5;
   }
   
   h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #64748b;
      margin-bottom: 0.5rem;
   }
   
   p {
      font-size: 0.95rem;
      line-height: 1.5;
   }
`

const PaginationWrapper = styled.div`
   margin-top: 2rem;
   display: flex;
   justify-content: center;
`

const PageButton = styled.button`
   width: 40px;
   height: 40px;
   border: 2px solid ${({ active }) => active ? '#667eea' : '#e2e8f0'};
   background: ${({ active }) => active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
   color: ${({ active }) => active ? 'white' : '#64748b'};
   border-radius: 8px;
   font-weight: 500;
   cursor: pointer;
   transition: all 0.3s ease;
   
   &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
   }
`
