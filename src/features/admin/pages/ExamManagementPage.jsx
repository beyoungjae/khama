import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { FaFileSignature, FaSearch, FaPlus, FaEye, FaEdit, FaTrash, FaClock, FaCheck, FaTimes, FaCalendarAlt } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
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

// 목업 시험 데이터
const mockExams = [
   { id: 'exam001', name: '생활가전 유지보수사 2급', date: '2024-08-15', session: '3회차', applicants: 50, status: '접수중' },
   { id: 'exam002', name: '에어컨 전문가 인증', date: '2024-09-10', session: '1회차', applicants: 35, status: '예정' },
   { id: 'exam003', name: '생활가전 유지보수사 1급', date: '2024-07-20', session: '2회차', applicants: 80, status: '종료' },
]

export function ExamManagementPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div
   
   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   
   // TODO: 실제 데이터 로딩, 필터링, 페이지네이션, 시험 관리 로직

   const getStatusIcon = (status) => {
      switch (status) {
         case '접수중': return FaCheck
         case '예정': return FaClock
         case '종료': return FaTimes
         default: return FaClock
      }
   }

   return (
      <PageWrapper>
         <ModernHeroSection gradient="linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%)" ref={heroRef}>
            <HeroBackground />
            <HeroContainer>
               <motion.div
                  initial="hidden"
                  animate={heroInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaFileSignature /> 시험 관리
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     <GradientText>시험</GradientText> 관리
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "시험 일정과 접수 현황을 체계적으로 관리하세요"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     모든 시험 일정을 한눈에 확인하고 효율적으로 관리하세요
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
                     <FaCalendarAlt /> 시험 일정 관리
                  </SectionTitle>
               </SectionHeader>
               
               <FilterCard
                  as={motion.div}
                  initial="hidden"
                  animate={contentInView ? "visible" : "hidden"}
                  variants={fadeInUp}
               >
                  <FilterSection>
                     <SearchInput placeholder="시험명 검색" />
                     <FilterSelect>
                        <option value="">전체 상태</option>
                        <option value="upcoming">예정</option>
                        <option value="registering">접수중</option>
                        <option value="closed">종료</option>
                     </FilterSelect>
                     <FilterButton>
                        <FaSearch /> 검색
                     </FilterButton>
                     <AddButton>
                        <FaPlus /> 새 시험 일정 등록
                     </AddButton>
                  </FilterSection>
               </FilterCard>

               <ExamCard
                  as={motion.div}
                  initial="hidden"
                  animate={contentInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  <TableWrapper as={motion.div} variants={fadeInUp}>
                     <ExamTable>
                        <thead>
                           <tr>
                              <th>
                                 <CheckboxWrapper>
                                    <input type="checkbox" />
                                 </CheckboxWrapper>
                              </th>
                              <th>시험명</th>
                              <th>시험일</th>
                              <th>회차</th>
                              <th>접수인원</th>
                              <th>상태</th>
                              <th>관리</th>
                           </tr>
                        </thead>
                        <tbody>
                           {mockExams.map((exam) => {
                              const StatusIcon = getStatusIcon(exam.status)
                              return (
                                 <tr key={exam.id}>
                                    <td>
                                       <CheckboxWrapper>
                                          <input type="checkbox" />
                                       </CheckboxWrapper>
                                    </td>
                                    <td>{exam.name}</td>
                                    <td>{exam.date}</td>
                                    <td>{exam.session}</td>
                                    <td>{exam.applicants}명</td>
                                    <td>
                                       <StatusBadge status={exam.status}>
                                          <StatusIcon />
                                          {exam.status}
                                       </StatusBadge>
                                    </td>
                                    <td>
                                       <ActionButtons>
                                          <ActionButton><FaEye /></ActionButton>
                                          <ActionButton><FaEdit /></ActionButton>
                                          <ActionButton status="delete"><FaTrash /></ActionButton>
                                       </ActionButtons>
                                    </td>
                                 </tr>
                              )
                           })}
                        </tbody>
                     </ExamTable>
                  </TableWrapper>
                  
                  {mockExams.length === 0 && (
                     <PlaceholderContent as={motion.div} variants={fadeInUp}>
                        <FaFileSignature size={48} />
                        <h3>등록된 시험이 없습니다</h3>
                        <p>새로운 시험 일정을 등록해보세요.</p>
                     </PlaceholderContent>
                  )}
               </ExamCard>
            </Section>
         </Container>
      </PageWrapper>
   )
}

// ExamManagementPage 전용 스타일 컴포넌트
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
      border-color: #ff9a56;
      box-shadow: 0 0 0 3px rgba(255, 154, 86, 0.1);
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
      border-color: #ff9a56;
      box-shadow: 0 0 0 3px rgba(255, 154, 86, 0.1);
   }
`

const FilterButton = styled.button`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   padding: 0.75rem 1.5rem;
   background: linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%);
   color: white;
   border: none;
   border-radius: 12px;
   font-size: 0.9rem;
   font-weight: 500;
   cursor: pointer;
   transition: all 0.3s ease;
   
   &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(255, 154, 86, 0.3);
   }
`

const AddButton = styled.button`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   padding: 0.75rem 1.5rem;
   background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
   color: white;
   border: none;
   border-radius: 12px;
   font-size: 0.9rem;
   font-weight: 500;
   cursor: pointer;
   transition: all 0.3s ease;
   margin-left: auto;
   
   &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(17, 153, 142, 0.3);
   }
   
   @media (max-width: 768px) {
      margin-left: 0;
   }
`

const ExamCard = styled(Card)`
   padding: 0;
   overflow: hidden;
`

const TableWrapper = styled.div`
   overflow-x: auto;
`

const ExamTable = styled.table`
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

const CheckboxWrapper = styled.div`
   display: flex;
   justify-content: center;
   
   input[type="checkbox"] {
      width: 16px;
      height: 16px;
      cursor: pointer;
   }
`

const StatusBadge = styled.span`
   display: inline-flex;
   align-items: center;
   gap: 0.5rem;
   padding: 0.5rem 1rem;
   border-radius: 20px;
   font-size: 0.8rem;
   font-weight: 600;
   background: ${({ status }) => {
      switch (status) {
         case '접수중': return 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
         case '예정': return 'linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%)'
         case '종료': return 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)'
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
