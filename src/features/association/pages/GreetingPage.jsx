import styled from 'styled-components'
import { motion } from 'framer-motion'

const sectionVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function GreetingPage() {
   return (
      <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={sectionVariants}>
         <HeroSection>
            <HeroOverlay />
            <HeroContent>
               <h1>인사말</h1>
               <p>한국생활가전유지관리협회 방문을 진심으로 환영합니다.</p>
            </HeroContent>
         </HeroSection>
         <PageContainer>
            <Section variants={sectionVariants}>
               <SectionTitle>회장 인사말</SectionTitle>
               <GreetingImage src="/images/ceo-placeholder.jpg" alt="회장 이미지" />
               <GreetingText>
                  <p>안녕하십니까, 한국생활가전유지관리협회 회장 OOO입니다.</p>
                  <p>급변하는 기술 환경 속에서 생활가전 제품은 우리 삶의 필수적인 부분이 되었습니다. 이러한 가전제품을 안전하고 효율적으로 유지 관리하는 전문가의 역할은 그 어느 때보다 중요해지고 있습니다.</p>
                  <p>우리 협회는 생활가전 유지보수 분야의 기술 표준을 정립하고, 전문 인력 양성을 통해 국민의 안전과 편익 증진에 기여하고자 설립되었습니다. 또한, 관련 산업의 건전한 발전과 회원 상호 간의 교류 협력을 도모하고 있습니다.</p>
                  <p>앞으로도 협회는 투명하고 공정한 운영을 바탕으로 회원 여러분의 권익 보호와 전문성 향상을 위해 최선을 다할 것을 약속드립니다. 많은 관심과 참여 부탁드립니다.</p>
                  <p>감사합니다.</p>
               </GreetingText>
               <Signature>한국생활가전유지관리협회 회장 OOO 드림</Signature>
            </Section>
         </PageContainer>
      </motion.div>
   )
}

// 스타일 컴포넌트 (AssociationPage 등 다른 소개 페이지 스타일 참조)
const HeroSection = styled.section`
   position: relative;
   height: 350px; /* 헤더 메뉴 하위 페이지는 높이 약간 줄임 */
   background: url('/images/greeting-hero.jpg') no-repeat center center; /* 적절한 배경 이미지 경로 */
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
   text-align: center;
`

const HeroOverlay = styled.div`
   position: absolute;
   inset: 0;
   background-color: rgba(26, 90, 150, 0.6); /* Primary 색상 오버레이 */
   z-index: 1;
`

const HeroContent = styled.div`
   position: relative;
   z-index: 2;
   max-width: 800px;
   padding: 0 ${({ theme }) => theme.spacing.lg};

   h1 {
      font-size: ${({ theme }) => theme.fontSizes.h2}; /* 하위 페이지 타이틀 크기 조정 */
      font-weight: 700;
      margin-bottom: ${({ theme }) => theme.spacing.md};
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
   }

   p {
      font-size: ${({ theme }) => theme.fontSizes.large}; /* 부제 크기 조정 */
      line-height: 1.6;
      opacity: 0.9;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
   }
`

const PageContainer = styled.div`
   padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xl}`}; /* 상하 패딩 조정 */
   max-width: 900px; /* 콘텐츠 최대 너비 조정 */
   margin: 0 auto;
`

const Section = styled(motion.section)`
   margin-bottom: ${({ theme }) => theme.spacing.xl};
   padding: ${({ theme }) => theme.spacing.xl};
   background-color: #fff;
   border-radius: ${({ theme }) => theme.borderRadius};
   border: 1px solid ${({ theme }) => theme.colors.border};
   box-shadow: ${({ theme }) => theme.boxShadow};
`

const SectionTitle = styled.h2`
   font-size: ${({ theme }) => theme.fontSizes.h3};
   font-weight: 700;
   color: ${({ theme }) => theme.colors.primary};
   margin-bottom: ${({ theme }) => theme.spacing.lg};
   text-align: center;
`

const GreetingImage = styled.img`
   display: block;
   width: 200px; /* 이미지 크기 조정 */
   height: 250px;
   object-fit: cover;
   border-radius: 50%; /* 원형 이미지 */
   margin: 0 auto ${({ theme }) => theme.spacing.lg};
   border: 5px solid ${({ theme }) => theme.colors.backgroundLight};
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const GreetingText = styled.div`
   font-size: ${({ theme }) => theme.fontSizes.medium};
   line-height: 1.8;
   color: ${({ theme }) => theme.colors.textSecondary};
   text-align: justify; /* 양쪽 정렬 */

   p {
      margin-bottom: ${({ theme }) => theme.spacing.md};
   }
`

const Signature = styled.p`
   margin-top: ${({ theme }) => theme.spacing.xl};
   text-align: right;
   font-weight: 600;
   color: ${({ theme }) => theme.colors.text};
`
