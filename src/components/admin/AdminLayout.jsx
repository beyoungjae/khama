import styled from 'styled-components'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
// TODO: 관리자 인증 상태 확인 훅 필요 (예: useAuth)

export function AdminLayout() {
   const navigate = useNavigate()

   // TODO: 실제 관리자 로그아웃 로직 구현
   const handleLogout = () => {
      console.log('Admin logout')
      // localStorage.removeItem('adminToken'); // 예시
      navigate('/admin/login')
   }

   // TODO: 실제 관리자 권한 확인 로직 useEffect 등으로 구현 필요
   // 예: useEffect(() => { if (!isAdmin) navigate('/admin/login'); }, [isAdmin]);

   return (
      <AdminContainer>
         <Sidebar>
            <SidebarTitle>KHAMA Admin</SidebarTitle>
            <NavMenu>
               <StyledNavLink to="/admin/dashboard">대시보드</StyledNavLink>
               <StyledNavLink to="/admin/users">회원 관리</StyledNavLink>
               <StyledNavLink to="/admin/applications">신청서 관리</StyledNavLink>
               <StyledNavLink to="/admin/exams">시험 관리</StyledNavLink>
               <StyledNavLink to="/admin/certifications">자격증 관리</StyledNavLink>
               <Divider />
               <StyledNavLink to="/admin/notices">공지사항 관리</StyledNavLink>
               <StyledNavLink to="/admin/qna">Q&A 관리</StyledNavLink>
            </NavMenu>
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
         </Sidebar>
         <MainContent>
            <Outlet /> {/* 중첩된 라우트 페이지가 여기에 렌더링됩니다 */}
         </MainContent>
      </AdminContainer>
   )
}

const AdminContainer = styled.div`
   display: flex;
   min-height: 100vh;
`

const Sidebar = styled.aside`
   width: 240px;
   background-color: #2c3e50; /* 어두운 사이드바 색상 */
   color: white;
   display: flex;
   flex-direction: column;
   padding: 1.5rem 0;
`

const SidebarTitle = styled.h1`
   font-size: 1.6rem;
   font-weight: bold;
   text-align: center;
   margin-bottom: 2rem;
   padding: 0 1rem;
`

const NavMenu = styled.nav`
   flex-grow: 1; /* 메뉴 영역이 남은 공간 차지 */
   display: flex;
   flex-direction: column;
`

const StyledNavLink = styled(NavLink)`
   color: #bdc3c7; /* 기본 링크 색상 */
   text-decoration: none;
   padding: 0.9rem 1.5rem;
   font-size: 1rem;
   transition: background-color 0.2s, color 0.2s;

   &:hover {
      background-color: #34495e;
      color: white;
   }

   /* 활성 링크 스타일 */
   &.active {
      background-color: ${(props) => props.theme.colors.primary || '#007bff'};
      color: white;
      font-weight: 600;
   }
`

const LogoutButton = styled.button`
   background-color: transparent;
   color: #bdc3c7;
   border: 1px solid #bdc3c7;
   padding: 0.7rem 1.5rem;
   margin: 1rem 1.5rem 0;
   border-radius: 4px;
   cursor: pointer;
   font-size: 0.9rem;
   transition: background-color 0.2s, color 0.2s;

   &:hover {
      background-color: #e74c3c; /* 로그아웃 버튼 호버 시 빨간색 */
      border-color: #e74c3c;
      color: white;
   }
`

const MainContent = styled.main`
   flex: 1;
   padding: 2rem 3rem;
   background-color: #f4f6f8; /* 메인 컨텐츠 영역 배경색 */
   overflow-y: auto; /* 내용 많을 시 스크롤 */
`

const Divider = styled.hr`
   border: none;
   border-top: 1px solid #34495e;
   margin: 1rem 1.5rem;
`
