import styled from 'styled-components'
import { Link, NavLink, useLocation } from 'react-router-dom' // 라우터 링크 사용
import { useAuth } from '@/contexts/AuthContext' // useAuth 훅 임포트
import { useState, useEffect } from 'react' // 햄버거 메뉴 상태 관리
import { motion, AnimatePresence } from 'framer-motion'

// 메뉴 데이터 구조화
const menuItems = [
   {
      name: '협회소개',
      path: '/association',
      subItems: [
         { name: '인사말', path: '/association/greeting' }, // 예시 경로
         { name: '설립목적', path: '/association/purpose' },
         { name: '오시는길', path: '/association/location' },
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
         { name: '프로그램안내', path: '/exam-info/programs' }, // 교육안내 하위였으나 이쪽으로?
      ],
   },
   { name: '제품인증', path: '/product-cert', subItems: [{ name: '웰존', path: '/product-cert/welzone' }] },
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
   const [activeDropdown, setActiveDropdown] = useState(null)
   const location = useLocation()

   // 페이지 이동 시 모바일 메뉴 닫기
   useEffect(() => {
      setIsMobileMenuOpen(false)
      setActiveDropdown(null) // 페이지 이동 시 드롭다운도 닫기
   }, [location])

   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

   const handleLogout = () => {
      logout()
      // navigate('/') // Context에서 처리하거나 필요 시 여기서도 가능
   }

   const handleMouseEnter = (index) => {
      if (window.innerWidth > 768) {
         // 모바일에서는 hover 비활성화
         setActiveDropdown(index)
      }
   }

   const handleMouseLeave = () => {
      if (window.innerWidth > 768) {
         setActiveDropdown(null)
      }
   }

   // 드롭다운 애니메이션 Variants
   const dropdownVariants = {
      hidden: { opacity: 0, y: -10 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
      exit: { opacity: 0, y: -10, transition: { duration: 0.1 } },
   }

   // 모바일 메뉴 애니메이션 Variants
   const mobileMenuVariants = {
      hidden: { x: '100%', transition: { type: 'tween' } },
      visible: { x: 0, transition: { type: 'tween' } },
   }

   return (
      <HeaderContainer>
         <Logo to="/">
            {/* 로고 이미지 사용 고려 */}
            KHAMA
         </Logo>

         {/* --- 데스크탑 메뉴 --- */}
         <DesktopNavContainer>
            {menuItems.map((item, index) => (
               <NavItemWrapper key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                  <MainNavItem to={item.path}>{item.name}</MainNavItem>
                  <AnimatePresence>
                     {activeDropdown === index && item.subItems && (
                        <DropdownMenu variants={dropdownVariants} initial="hidden" animate="visible" exit="exit">
                           {item.subItems.map((subItem, subIndex) => (
                              <DropdownItem key={subIndex} to={subItem.path}>
                                 {subItem.name}
                              </DropdownItem>
                           ))}
                        </DropdownMenu>
                     )}
                  </AnimatePresence>
               </NavItemWrapper>
            ))}
         </DesktopNavContainer>

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
`

const DesktopNavContainer = styled.nav`
   display: flex;
   align-items: center;
   gap: ${({ theme }) => theme.spacing.lg};

   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: none;
   }
`

const NavItemWrapper = styled.div`
   position: relative; /* 드롭다운 기준 */
`

const MainNavItem = styled(NavLink)`
   font-family: ${({ theme }) => theme.fonts.body};
   font-weight: 500;
   font-size: ${({ theme }) => theme.fontSizes.medium};
   color: ${({ theme }) => theme.colors.text};
   text-decoration: none;
   padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
   transition: color 0.2s;
   position: relative;

   &:hover {
      color: ${({ theme }) => theme.colors.primary};
   }

   &.active {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
      /* 밑줄 효과 */
      &::after {
         content: '';
         position: absolute;
         bottom: -2px;
         left: 0;
         right: 0;
         height: 2px;
         background-color: ${({ theme }) => theme.colors.primary};
      }
   }
`

const DropdownMenu = styled(motion.div)`
   position: absolute;
   top: 100%;
   left: 50%;
   transform: translateX(-50%);
   background-color: white;
   border-radius: ${({ theme }) => theme.borderRadius};
   box-shadow: ${({ theme }) => theme.boxShadow};
   padding: ${({ theme }) => theme.spacing.sm} 0;
   min-width: 180px;
   z-index: 101;
   border: 1px solid ${({ theme }) => theme.colors.border};
`

const DropdownItem = styled(Link)`
   display: block;
   padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
   color: ${({ theme }) => theme.colors.text};
   font-size: ${({ theme }) => theme.fontSizes.small};
   white-space: nowrap;

   &:hover {
      background-color: ${({ theme }) => theme.colors.backgroundLight};
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
   }
`

const DesktopAuthLinks = styled.div`
   display: flex;
   align-items: center;
   gap: ${({ theme }) => theme.spacing.md};

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
