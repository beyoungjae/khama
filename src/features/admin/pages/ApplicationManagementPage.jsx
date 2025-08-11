import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { FaClipboardList, FaSearch, FaCheck, FaTimes, FaClock, FaEye, FaEdit } from 'react-icons/fa'
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
   Card,
} from '../../../components/common/SharedStyles'

export function ApplicationManagementPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   // TODO: 실제 데이터 가져오기
   const applications = [
      { id: 1, name: '김철수', course: '가전제품분해청소관리사', type: '교육', date: '2024-01-15', status: '대기' },
      { id: 2, name: '이영희', course: '냉난방기 세척서비스 관리사', type: '시험', date: '2024-01-14', status: '승인' },
      { id: 3, name: '박민수', course: '에어컨설치 관리사', type: '교육', date: '2024-01-13', status: '반려' },
   ]

   const getStatusIcon = (status) => {
      switch (status) {
         case '승인':
            return FaCheck
         case '대기':
            return FaClock
         case '반려':
            return FaTimes
         default:
            return FaClock
      }
   }

   return (
      <PageWrapper>
         <ModernHeroSection gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" ref={heroRef}>
            <HeroBackground />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaClipboardList /> 신청서 관리
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     <GradientText>신청서</GradientText> 관리
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "교육 및 시험 신청서를 효율적으로 관리하세요"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     접수된 모든 신청서를 한눈에 확인하고 승인/반려 처리를 진행하세요
                  </HeroDescription>
               </motion.div>
            </HeroContainer>
         </ModernHeroSection>

         <Container>
            <Section ref={contentRef}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} initial="hidden" animate={contentInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     <FaSearch /> 신청서 목록
                  </SectionTitle>
               </SectionHeader>

               <ApplicationCard as={motion.div} initial="hidden" animate={contentInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <TableWrapper as={motion.div} variants={fadeInUp}>
                     <ApplicationTable>
                        <thead>
                           <tr>
                              <th>신청자</th>
                              <th>과정명</th>
                              <th>유형</th>
                              <th>신청일</th>
                              <th>상태</th>
                              <th>관리</th>
                           </tr>
                        </thead>
                        <tbody>
                           {applications.map((app) => {
                              const StatusIcon = getStatusIcon(app.status)
                              return (
                                 <tr key={app.id}>
                                    <td>{app.name}</td>
                                    <td>{app.course}</td>
                                    <td>
                                       <TypeBadge type={app.type}>{app.type}</TypeBadge>
                                    </td>
                                    <td>{app.date}</td>
                                    <td>
                                       <StatusBadge status={app.status}>
                                          <StatusIcon />
                                          {app.status}
                                       </StatusBadge>
                                    </td>
                                    <td>
                                       <ActionButtons>
                                          <ActionButton>
                                             <FaEye />
                                          </ActionButton>
                                          <ActionButton>
                                             <FaEdit />
                                          </ActionButton>
                                          <ActionButton status="approve">
                                             <FaCheck />
                                          </ActionButton>
                                          <ActionButton status="reject">
                                             <FaTimes />
                                          </ActionButton>
                                       </ActionButtons>
                                    </td>
                                 </tr>
                              )
                           })}
                        </tbody>
                     </ApplicationTable>
                  </TableWrapper>

                  {applications.length === 0 && (
                     <PlaceholderContent as={motion.div} variants={fadeInUp}>
                        <FaClipboardList size={48} />
                        <h3>신청서가 없습니다</h3>
                        <p>아직 접수된 교육/시험 신청서가 없습니다.</p>
                     </PlaceholderContent>
                  )}
               </ApplicationCard>
            </Section>
         </Container>
      </PageWrapper>
   )
}

// ApplicationManagementPage 전용 스타일 컴포넌트
const ApplicationCard = styled(Card)`
   padding: 0;
   overflow: hidden;
`

const TableWrapper = styled.div`
   overflow-x: auto;
`

const ApplicationTable = styled.table`
   width: 100%;
   border-collapse: collapse;

   th,
   td {
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

   th:last-child,
   td:last-child {
      text-align: center;
   }
`

const TypeBadge = styled.span`
   display: inline-flex;
   align-items: center;
   gap: 0.25rem;
   padding: 0.25rem 0.75rem;
   border-radius: 20px;
   font-size: 0.8rem;
   font-weight: 500;
   background: ${({ type }) => (type === '교육' ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' : 'linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%)')};
   color: white;
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
         case '승인':
            return 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
         case '대기':
            return 'linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%)'
         case '반려':
            return 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
         default:
            return 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)'
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
         case 'approve':
            return 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
         case 'reject':
            return 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
         default:
            return 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)'
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
