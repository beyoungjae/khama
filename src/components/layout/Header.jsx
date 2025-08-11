import styled, { css } from 'styled-components'
import { Link, NavLink, useLocation } from 'react-router-dom' // 라우터 링크 사용
import { useAuth } from '@/contexts/AuthContext' // useAuth 훅 임포트
import { useState, useEffect, useRef } from 'react' // 햄버거 메뉴 상태 관리
import { motion, AnimatePresence } from 'framer-motion'

// 메뉴 데이터 구조화
const menuItems = [
   {
      name: '협회소개',
      path: '/association',
      subItems: [
         { name: '인사말', path: '/association/greeting' },
         { name: '설립목적', path: '/association/purpose' },
         { name: '오시는길', path: '/association/location' },
      ],
   },
   {
      name: '자격증',
      path: '/certification',
      subItems: [
         { name: '가전제품분해청소관리사', path: '/certification/appliance-cleaning' },
         { name: '냉난방기 세척서비스 관리사', path: '/certification/air-conditioner-service' },
         { name: '에어컨설치 관리사', path: '/certification/air-conditioner-installation' },
         { name: '환기청정시스템 관리사', path: '/certification/ventilation-system' },
      ],
   },
   {
      name: '교육안내',
      path: '/education',
      subItems: [
         { name: '교육목적', path: '/education/goal' },
         { name: '교육시설안내', path: '/education/facilities' },
         { name: '교육내용', path: '/education/content' },
         { name: '교육원소개', path: '/education/intro' },
      ],
   },
   {
      name: '자격시험안내',
      path: '/exam-info',
      subItems: [
         { name: '자격검정과목', path: '/exam-info/subjects' },
         { name: '프로그램안내', path: '/exam-info/programs' },
      ],
   },
   {
      name: '제품인증',
      path: '/product-cert',
      subItems: [{ name: '웰존', path: '/product-cert/welzone' }],
   },
   {
      name: '고객센터',
      path: '/notice',
      subItems: [
         { name: '공지사항', path: '/notice' },
         { name: 'Q&A', path: '/qna' },
         { name: '문의하기', path: '/contact' },
      ],
   },
]

export function Header() {
   const { isLoggedIn, logout } = useAuth() // user 제거
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // 모바일 메뉴 상태
   const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false) // 메가 메뉴 상태 추가
   const location = useLocation()
   const leaveTimeoutRef = useRef(null) // 마우스 이탈 타이머 ref

   // 페이지 이동 시 모바일 메뉴 닫기
   useEffect(() => {
      setIsMobileMenuOpen(false)
      setIsMegaMenuOpen(false) // 페이지 이동 시 메가 메뉴도 닫기
   }, [location])

   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

   const handleLogout = () => {
      logout()
      // navigate('/') // Context에서 처리하거나 필요 시 여기서도 가능
   }

   // 메가 메뉴 열기 핸들러
   const handleMouseEnterMegaMenu = () => {
      if (window.innerWidth > 768) {
         clearTimeout(leaveTimeoutRef.current) // 기존 닫기 타이머 제거
         setIsMegaMenuOpen(true)
      }
   }

   // 메가 메뉴 닫기 핸들러 (지연 적용)
   const handleMouseLeaveMegaMenu = () => {
      if (window.innerWidth > 768) {
         leaveTimeoutRef.current = setTimeout(() => {
            setIsMegaMenuOpen(false)
         }, 200) // 0.2초 후 닫기 (조정 가능)
      }
   }

   // 메가 메뉴 애니메이션 Variants
   const megaMenuVariants = {
      hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
      visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
      exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
   }

   // 모바일 메뉴 애니메이션 Variants
   const mobileMenuVariants = {
      hidden: { x: '100%', transition: { type: 'tween' } },
      visible: { x: 0, transition: { type: 'tween' } },
   }

   return (
      <HeaderContainer onMouseLeave={handleMouseLeaveMegaMenu}>
         {' '}
         {/* 컨테이너 레벨에서 이탈 감지 */}
         <Logo to="/">
            {/* 로고 이미지 사용 고려 */}
            KHAMA
         </Logo>
         {/* --- 데스크탑 메뉴 --- */}
         <DesktopNavContainer onMouseEnter={handleMouseEnterMegaMenu}>
            {' '}
            {/* 네비게이션 영역 진입 시 메뉴 열기 */}
            {menuItems.map((item, index) => (
               <NavItemWrapper key={index}>
                  {/* 모든 메인 메뉴를 클릭 가능한 NavLink로 변경 */}
                  <MainNavItem as={NavLink} to={item.path} end={item.path === '/'}>
                     {' '}
                     {/* HomePage는 exact 매칭 */}
                     {item.name}
                  </MainNavItem>
               </NavItemWrapper>
            ))}
         </DesktopNavContainer>
         {/* --- 데스크탑 메가 메뉴 --- */}
         <AnimatePresence>
            {isMegaMenuOpen && (
               <MegaMenuContainer
                  variants={megaMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onMouseEnter={handleMouseEnterMegaMenu} // 메가 메뉴 내부로 마우스 이동 시 닫기 방지
                  onMouseLeave={handleMouseLeaveMegaMenu} // 메가 메뉴 벗어날 때 닫기
               >
                  <MegaMenuGrid>
                     {menuItems.map(
                        (item, index) =>
                           // 고객센터의 하위 메뉴들은 링크가 있으므로 렌더링
                           item.subItems &&
                           item.subItems.length > 0 && (
                              <MegaMenuCategory key={index}>
                                 <MegaMenuTitle>{item.name}</MegaMenuTitle>
                                 <MegaMenuList>
                                    {item.subItems.map((subItem, subIndex) => (
                                       <MegaMenuItem key={subIndex} to={subItem.path}>
                                          {subItem.name}
                                       </MegaMenuItem>
                                    ))}
                                 </MegaMenuList>
                              </MegaMenuCategory>
                           )
                     )}
                  </MegaMenuGrid>
               </MegaMenuContainer>
            )}
         </AnimatePresence>
         {/* --- 인증 링크 (데스크탑) --- */}
         <DesktopAuthLinks>
            {isLoggedIn ? (
               <>
                  <AuthLinkItem to="/my-page">마이페이지</AuthLinkItem>
                  <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
               </>
            ) : (
               <>
                  <AuthLinkItem to="/login">로그인</AuthLinkItem>
                  <AuthLinkItem to="/signup">회원가입</AuthLinkItem>
               </>
            )}
         </DesktopAuthLinks>
         {/* --- 모바일 햄버거 버튼 --- */}
         <HamburgerButton onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? '✖' : '☰'} {/* 아이콘 토글 */}
         </HamburgerButton>
         {/* --- 모바일 메뉴 (AnimatePresence 사용) --- */}
         <AnimatePresence>
            {isMobileMenuOpen && (
               <MobileMenuContainer variants={mobileMenuVariants} initial="hidden" animate="visible" exit="hidden">
                  <MobileNavMenu>
                     {menuItems.map((item, index) => (
                        <div key={index}>
                           {/* 모바일에서는 메인 메뉴도 링크로 작동 */}
                           <MobileNavItem to={item.path}>{item.name}</MobileNavItem>
                           {item.subItems && (
                              <MobileSubMenu>
                                 {item.subItems.map((subItem, subIndex) => (
                                    <MobileSubItem key={subIndex} to={subItem.path}>
                                       {subItem.name}
                                    </MobileSubItem>
                                 ))}
                              </MobileSubMenu>
                           )}
                        </div>
                     ))}
                  </MobileNavMenu>
                  <MobileAuthLinks>
                     {isLoggedIn ? (
                        <>
                           <MobileNavItem to="/my-page">마이페이지</MobileNavItem>
                           <MobileLogoutButton onClick={handleLogout}>로그아웃</MobileLogoutButton>
                        </>
                     ) : (
                        <>
                           <MobileNavItem to="/login">로그인</MobileNavItem>
                           <MobileNavItem to="/signup">회원가입</MobileNavItem>
                        </>
                     )}
                  </MobileAuthLinks>
               </MobileMenuContainer>
            )}
         </AnimatePresence>
         {/* TODO: 문의하기 플로팅 버튼 추가 */}
      </HeaderContainer>
   )
}

const HeaderContainer = styled(motion.header)`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
   background-color: ${({ theme }) => theme.colors.background};
   border-bottom: 1px solid ${({ theme }) => theme.colors.border};
   position: sticky; /* 스크롤 시 상단 고정 */
   top: 0;
   z-index: 100; /* 다른 요소 위에 */
   height: 70px; /* 헤더 높이 고정 */

   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
   }
`

const Logo = styled(Link)`
   font-family: ${({ theme }) => theme.fonts.heading};
   font-size: ${({ theme }) => theme.fontSizes.xl};
   font-weight: bold;
   color: ${({ theme }) => theme.colors.primary};
   text-decoration: none;
   flex-shrink: 0; // 로고 줄어들지 않게
`

const DesktopNavContainer = styled.nav`
   display: flex;
   align-items: center;
   gap: ${({ theme }) => theme.spacing.sm}; // 간격 살짝 줄임
   margin: 0 auto; // 중앙 정렬 시도

   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: none;
   }
`

const NavItemWrapper = styled.div`
   position: relative;
   padding: ${({ theme }) => `0 ${theme.spacing.sm}`}; // 좌우 패딩 추가
`

// NavLink 스타일 기본
const navItemStyle = css`
   font-family: ${({ theme }) => theme.fonts.body};
   font-weight: 500;
   font-size: ${({ theme }) => theme.fontSizes.medium};
   color: ${({ theme }) => theme.colors.text};
   text-decoration: none;
   padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
   transition: color 0.2s;
   position: relative;
   display: block; // 너비 차지하도록
   text-align: center;

   &:hover {
      color: ${({ theme }) => theme.colors.primary};
   }

   &.active {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
   }
`

// 링크가 있는 메인 네비게이션 아이템 (고객센터 등)
const MainNavItem = styled(NavLink)`
   ${navItemStyle}
`

// --- 메가 메뉴 스타일 --- //
const MegaMenuContainer = styled(motion.div)`
   position: absolute;
   top: 70px; /* 헤더 높이 */
   left: 0;
   width: 100%;
   background-color: white;
   box-shadow: ${({ theme }) => theme.boxShadow};
   border-top: 1px solid ${({ theme }) => theme.colors.border};
   border-bottom: 1px solid ${({ theme }) => theme.colors.border};
   z-index: 99; /* 헤더 바로 아래 */
   padding: ${({ theme }) => theme.spacing.lg} 0; // 상하 패딩
`

const MegaMenuGrid = styled.div`
   display: grid;
   /* 메뉴 아이템 개수에 따라 조정 (6개) */
   grid-template-columns: repeat(6, 1fr);
   max-width: 1400px; // 최대 너비 설정 (6개 컬럼에 맞게 확장)
   margin: 0 auto; // 중앙 정렬
   padding: 0 ${({ theme }) => theme.spacing.xl}; // 좌우 패딩
   gap: ${({ theme }) => theme.spacing.lg};

   @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr); // 중간 화면에서는 3열
   }

   @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr); // 작은 화면에서는 2열
   }
`

const MegaMenuCategory = styled.div`
   /* 각 카테고리 스타일 */
`

const MegaMenuTitle = styled.h4`
   font-size: ${({ theme }) => theme.fontSizes.medium};
   font-weight: 700;
   color: ${({ theme }) => theme.colors.primary};
   margin-bottom: ${({ theme }) => theme.spacing.md};
   padding-bottom: ${({ theme }) => theme.spacing.sm};
   border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const MegaMenuList = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;
`

const MegaMenuItem = styled(Link)`
   display: block;
   padding: ${({ theme }) => `${theme.spacing.xs} 0`}; // 상하 패딩 줄임
   color: ${({ theme }) => theme.colors.textSecondary};
   font-size: ${({ theme }) => theme.fontSizes.small};

   &:hover {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      background-color: transparent; // 배경색 제거
   }
`
// --- 기존 스타일 유지 --- //

const DesktopAuthLinks = styled.div`
   display: flex;
   align-items: center;
   gap: ${({ theme }) => theme.spacing.md};
   flex-shrink: 0; // 인증 링크 줄어들지 않게

   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: none;
   }
`

const AuthLinkItem = styled(NavLink)`
   font-size: ${({ theme }) => theme.fontSizes.small};
   color: ${({ theme }) => theme.colors.textSecondary};
   padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};

   &:hover {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
   }

   &.active {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 500;
   }
`

const LogoutButton = styled.button`
   font-size: ${({ theme }) => theme.fontSizes.small};
   color: ${({ theme }) => theme.colors.textSecondary};
   padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
   background: none;
   border: none;
   cursor: pointer;

   &:hover {
      color: ${({ theme }) => theme.colors.error};
   }
`

const HamburgerButton = styled.button`
   display: none;
   font-size: 1.8rem;
   color: ${({ theme }) => theme.colors.primary};
   z-index: 101;

   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: block;
   }
`

// 모바일 메뉴 스타일
const MobileMenuContainer = styled(motion.div)`
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   width: 280px;
   background-color: white;
   box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);
   z-index: 100;
   display: flex;
   flex-direction: column;
   padding-top: 70px; /* 헤더 높이만큼 */
`

const MobileNavMenu = styled.nav`
   flex-grow: 1;
   overflow-y: auto;
   padding: ${({ theme }) => theme.spacing.md};
`

const MobileNavItem = styled(NavLink)`
   display: block;
   padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
   font-size: ${({ theme }) => theme.fontSizes.medium};
   font-weight: 500;
   color: ${({ theme }) => theme.colors.text};

   &.active {
      color: ${({ theme }) => theme.colors.primary};
   }
`

const MobileSubMenu = styled.div`
   padding-left: ${({ theme }) => theme.spacing.lg};
   border-left: 2px solid ${({ theme }) => theme.colors.border};
   margin-left: ${({ theme }) => theme.spacing.md};
   margin-top: ${({ theme }) => theme.spacing.sm};
   margin-bottom: ${({ theme }) => theme.spacing.md};
`

const MobileSubItem = styled(Link)`
   display: block;
   padding: ${({ theme }) => `${theme.spacing.xs} 0`};
   font-size: ${({ theme }) => theme.fontSizes.small};
   color: ${({ theme }) => theme.colors.textSecondary};

   &:hover {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
   }
`

const MobileAuthLinks = styled.div`
   border-top: 1px solid ${({ theme }) => theme.colors.border};
   padding: ${({ theme }) => theme.spacing.md};
`

const MobileLogoutButton = styled(LogoutButton)`
   width: 100%;
   text-align: left;
   padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
   font-size: ${({ theme }) => theme.fontSizes.medium};
   color: ${({ theme }) => theme.colors.error};
`
