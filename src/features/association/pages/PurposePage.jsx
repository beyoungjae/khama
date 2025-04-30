import styled from 'styled-components'
import { motion } from 'framer-motion'
// 다른 소개 페이지의 스타일 컴포넌트를 가져오거나 유사하게 정의
// import { HeroSection, HeroOverlay, HeroContent, PageContainer, Section, SectionTitle } from './AssociationPage';

const sectionVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function PurposePage() {
   return (
      <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={sectionVariants}>
         <HeroSection>
            <HeroOverlay />
            <HeroContent>
               <h1>설립목적</h1>
               <p>생활가전 유지보수 산업의 발전과 국민 편익 증진을 위해 노력합니다.</p>
            </HeroContent>
         </HeroSection>
         <PageContainer>
            <Section variants={sectionVariants}>
               <SectionTitle>우리의 미션과 비전</SectionTitle>
               <PurposeGrid>
                  <PurposeItem>
                     <Icon>🎯</Icon>
                     <h3>미션 (Mission)</h3>
                     <p>생활가전 유지보수 기술 표준화와 전문가 양성을 통해 안전하고 편리한 국민 생활 환경 조성에 기여한다.</p>
                  </PurposeItem>
                  <PurposeItem>
                     <Icon>🌟</Icon>
                     <h3>비전 (Vision)</h3>
                     <p>국민에게 신뢰받고, 산업 발전을 선도하는 최고의 생활가전 유지보수 전문 기관으로 도약한다.</p>
                  </PurposeItem>
               </PurposeGrid>
            </Section>

            <Section variants={sectionVariants}>
               <SectionTitle>주요 설립 목적</SectionTitle>
               <PurposeList>
                  <li>
                     <strong>기술 표준 정립:</strong> 생활가전 제품의 유지보수 기술 및 서비스 표준을 개발하고 보급하여 서비스 품질을 향상시킵니다.
                  </li>
                  <li>
                     <strong>전문 인력 양성:</strong> 체계적인 교육과 공정한 자격 검정을 통해 우수한 전문 인력을 배출하고 관리합니다.
                  </li>
                  <li>
                     <strong>산업 발전 기여:</strong> 관련 기술 연구개발을 지원하고, 회원사 간 협력 및 정보 교류를 촉진하여 산업 생태계를 활성화합니다.
                  </li>
                  <li>
                     <strong>소비자 권익 보호:</strong> 정확한 정보 제공과 투명한 서비스 기준 마련을 통해 소비자의 알 권리를 보장하고 피해를 예방합니다.
                  </li>
                  <li>
                     <strong>정책 제안 및 협력:</strong> 정부 및 유관기관과의 협력을 통해 생활가전 유지보수 관련 정책 수립 및 제도 개선에 참여합니다.
                  </li>
               </PurposeList>
            </Section>
         </PageContainer>
      </motion.div>
   )
}

// 스타일 컴포넌트 (GreetingPage와 유사하게 사용)
const HeroSection = styled.section`
   position: relative;
   height: 350px;
   background: url('/images/purpose-hero.jpg') no-repeat center center; /* 적절한 배경 이미지 경로 */
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
   background-color: rgba(26, 90, 150, 0.65);
   z-index: 1;
`

const HeroContent = styled.div`
   position: relative;
   z-index: 2;
   max-width: 800px;
   padding: 0 ${({ theme }) => theme.spacing.lg};

   h1 {
      font-size: ${({ theme }) => theme.fontSizes.h2};
      font-weight: 700;
      margin-bottom: ${({ theme }) => theme.spacing.md};
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
   }

   p {
      font-size: ${({ theme }) => theme.fontSizes.large};
      line-height: 1.6;
      opacity: 0.9;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
   }
`

const PageContainer = styled.div`
   padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xl}`};
   max-width: 900px;
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

const PurposeGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
   gap: ${({ theme }) => theme.spacing.lg};
   margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const PurposeItem = styled.div`
   background-color: ${({ theme }) => theme.colors.backgroundLight};
   padding: ${({ theme }) => theme.spacing.lg};
   border-radius: ${({ theme }) => theme.borderRadius};
   text-align: center;
   border: 1px solid ${({ theme }) => theme.colors.border};

   h3 {
      font-size: ${({ theme }) => theme.fontSizes.large};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.secondary};
      margin-bottom: ${({ theme }) => theme.spacing.sm};
   }

   p {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      color: ${({ theme }) => theme.colors.textSecondary};
      line-height: 1.7;
      margin: 0;
   }
`

const Icon = styled.div`
   font-size: 2.5rem;
   margin-bottom: ${({ theme }) => theme.spacing.md};
   color: ${({ theme }) => theme.colors.primary};
`

const PurposeList = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;

   li {
      background-color: #f8f9fa;
      border-left: 4px solid ${({ theme }) => theme.colors.primary};
      padding: ${({ theme }) => theme.spacing.md};
      margin-bottom: ${({ theme }) => theme.spacing.md};
      border-radius: 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0;

      strong {
         color: ${({ theme }) => theme.colors.primary};
         font-weight: 600;
         display: block;
         margin-bottom: ${({ theme }) => theme.spacing.xs};
      }
   }
`
