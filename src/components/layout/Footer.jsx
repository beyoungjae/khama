import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useModal } from '@/contexts/ModalContext'
// 소셜 미디어 아이콘 예시 (react-icons 라이브러리 사용 시)
// import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export function Footer() {
   const { openContactModal } = useModal()

   return (
      <FooterContainer>
         <FooterContent>
            <FooterSection>
               <Logo to="/">KHAMA</Logo>
               <InfoText>한국생활가전유지관리협회는 생활가전 유지보수 기술 향상과 산업 발전에 기여합니다.</InfoText>
            </FooterSection>

            <FooterSection>
               <SectionTitle>바로가기</SectionTitle>
               <FooterLinks>
                  <FooterLinkItem to="/association">협회소개</FooterLinkItem>
                  <FooterLinkItem to="/education">교육안내</FooterLinkItem>
                  <FooterLinkItem to="/exam-info">자격시험</FooterLinkItem>
                  <FooterLinkItem to="/notice">고객센터</FooterLinkItem>
               </FooterLinks>
            </FooterSection>

            <FooterSection>
               <SectionTitle>고객 지원</SectionTitle>
               <FooterLinks>
                  <FooterLinkItem to="/terms">이용약관</FooterLinkItem>
                  <FooterLinkItem to="/privacy">개인정보처리방침</FooterLinkItem>
                  <FooterLinkButton onClick={openContactModal}>문의하기</FooterLinkButton>
               </FooterLinks>
            </FooterSection>

            <FooterSection>
               <SectionTitle>Contact Us</SectionTitle>
               <ContactInfo>
                  <p>주소: 인천 서구 청라한내로72번길 13 청라 큐브시그니처 2차 오피스텔 201호-206호</p>
                  <p>대표번호: 1566-3321</p>
                  <p>이메일: haan@hanallcompany.com</p>
               </ContactInfo>
               {/* <SocialLinks>
                  <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></SocialLink>
                  <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></SocialLink>
                  <SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></SocialLink>
               </SocialLinks> */}
            </FooterSection>
         </FooterContent>
         <Copyright>© {new Date().getFullYear()} KHAMA (한국생활가전유지관리협회). All rights reserved.</Copyright>
      </FooterContainer>
   )
}

const FooterContainer = styled.footer`
   background-color: ${({ theme }) => theme.colors.backgroundLight};
   color: ${({ theme }) => theme.colors.textSecondary};
   padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
   border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const FooterContent = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   gap: ${({ theme }) => theme.spacing.lg};
   max-width: 1200px;
   margin: 0 auto ${({ theme }) => theme.spacing.xl};

   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-template-columns: repeat(2, 1fr);
   }
   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-template-columns: 1fr;
      text-align: center;
   }
`

const FooterSection = styled.div`
   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      margin-bottom: ${({ theme }) => theme.spacing.lg};
   }
`

const Logo = styled(Link)`
   display: inline-block;
   font-family: ${({ theme }) => theme.fonts.heading};
   font-size: ${({ theme }) => theme.fontSizes.xl};
   font-weight: bold;
   color: ${({ theme }) => theme.colors.primary};
   text-decoration: none;
   margin-bottom: ${({ theme }) => theme.spacing.md};
`

const InfoText = styled.p`
   font-size: ${({ theme }) => theme.fontSizes.small};
   line-height: 1.6;
`

const SectionTitle = styled.h4`
   font-size: ${({ theme }) => theme.fontSizes.large};
   font-weight: 600;
   color: ${({ theme }) => theme.colors.text};
   margin-bottom: ${({ theme }) => theme.spacing.md};
`

const FooterLinks = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;
`

const FooterLinkItem = styled(Link)`
   display: block;
   font-size: ${({ theme }) => theme.fontSizes.small};
   color: ${({ theme }) => theme.colors.textSecondary};
   margin-bottom: ${({ theme }) => theme.spacing.sm};
   text-decoration: none;
   transition: color 0.2s;

   &:hover {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: underline;
   }
`

const FooterLinkButton = styled.span`
   display: block;
   font-size: ${({ theme }) => theme.fontSizes.small};
   color: ${({ theme }) => theme.colors.textSecondary};
   margin-bottom: ${({ theme }) => theme.spacing.sm};
   text-decoration: none;
   transition: color 0.2s;
   cursor: pointer;

   &:hover {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: underline;
   }
`

const ContactInfo = styled.div`
   font-size: ${({ theme }) => theme.fontSizes.small};
   line-height: 1.7;
   p {
      margin-bottom: ${({ theme }) => theme.spacing.xs};
   }
`

const SocialLinks = styled.div`
   margin-top: ${({ theme }) => theme.spacing.md};
   display: flex;
   gap: ${({ theme }) => theme.spacing.md};

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      justify-content: center;
   }
`

const SocialLink = styled.a`
   color: ${({ theme }) => theme.colors.textSecondary};
   font-size: 1.5rem; /* 아이콘 크기 */
   transition: color 0.2s;

   &:hover {
      color: ${({ theme }) => theme.colors.primary};
   }
`

const Copyright = styled.p`
   text-align: center;
   font-size: ${({ theme }) => theme.fontSizes.small};
   color: #aaa;
   border-top: 1px solid ${({ theme }) => theme.colors.border};
   padding-top: ${({ theme }) => theme.spacing.lg};
   margin-top: ${({ theme }) => theme.spacing.lg};
`
