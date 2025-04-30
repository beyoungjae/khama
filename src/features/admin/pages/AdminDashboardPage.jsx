import styled from 'styled-components'
// 아이콘 예시 (react-icons)
// import { FaUsers, FaClipboardList, FaFileSignature, FaCertificate } from 'react-icons/fa';

export function AdminDashboardPage() {
   // TODO: 실제 데이터 가져오기 (회원 수, 신청 건수 등)
   const stats = {
      users: 125, // 예시 데이터
      applications: 32,
      exams: 15,
      certificates: 88,
   }

   return (
      <Container>
         <Title>관리자 대시보드</Title>
         <WelcomeText>KHAMA 관리 시스템에 오신 것을 환영합니다.</WelcomeText>

         <StatsGrid>
            <StatCard color="#1A5A96">
               {/* <Icon><FaUsers /></Icon> */}
               <Icon>👥</Icon>
               <StatValue>{stats.users}</StatValue>
               <StatLabel>총 회원 수</StatLabel>
            </StatCard>
            <StatCard color="#4A90E2">
               {/* <Icon><FaClipboardList /></Icon> */}
               <Icon>📋</Icon>
               <StatValue>{stats.applications}</StatValue>
               <StatLabel>신규 신청 건수</StatLabel>
            </StatCard>
            <StatCard color="#F5A623">
               {/* <Icon><FaFileSignature /></Icon> */}
               <Icon>✍️</Icon>
               <StatValue>{stats.exams}</StatValue>
               <StatLabel>시험 접수 현황</StatLabel>
            </StatCard>
            <StatCard color="#28A745">
               {/* <Icon><FaCertificate /></Icon> */}
               <Icon>🏅</Icon>
               <StatValue>{stats.certificates}</StatValue>
               <StatLabel>발급된 자격증</StatLabel>
            </StatCard>
         </StatsGrid>

         {/* TODO: 최근 활동 로그, 주요 공지사항 등 추가 섹션 고려 */}
         <Placeholder style={{ marginTop: '2rem' }}>추가 대시보드 컨텐츠 영역</Placeholder>
      </Container>
   )
}

const Container = styled.div`
   padding: 2rem;
`

const Title = styled.h1`
   font-size: ${({ theme }) => theme.fontSizes.h3};
   font-weight: 700;
   margin-bottom: 0.5rem;
`

const WelcomeText = styled.p`
   font-size: 1.1rem;
   color: ${({ theme }) => theme.colors.textSecondary};
   margin-bottom: 2.5rem;
`

const StatsGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   gap: 1.5rem;
`

const StatCard = styled.div`
   background-color: ${(props) => props.color || props.theme.colors.primary};
   color: white;
   padding: 1.5rem;
   border-radius: ${({ theme }) => theme.borderRadius};
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   transition: transform 0.2s ease;

   &:hover {
      transform: translateY(-5px);
   }
`

const Icon = styled.div`
   font-size: 2.5rem;
   margin-bottom: 1rem;
`

const StatValue = styled.div`
   font-size: 2.2rem;
   font-weight: 700;
   line-height: 1.2;
`

const StatLabel = styled.div`
   font-size: 0.9rem;
   opacity: 0.9;
   margin-top: 0.3rem;
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
