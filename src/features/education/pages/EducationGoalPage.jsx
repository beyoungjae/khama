import styled from 'styled-components'
import { motion } from 'framer-motion'

const sectionVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function EducationGoalPage() {
   return (
      <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={sectionVariants}>
         <HeroSection>
            <HeroOverlay />
            <HeroContent>
               <h1>교육 목적</h1>
               <p>미래 지향적인 생활가전 유지보수 전문가 양성을 목표로 합니다.</p>
            </HeroContent>
         </HeroSection>
         <PageContainer>
            <Section variants={sectionVariants}>
               <SectionTitle>전문성 강화</SectionTitle>
               <GoalItem>
                  <Icon>💡</Icon>
                  <TextWrapper>
                     <h3>최신 기술 습득</h3>
                     <p>스마트홈, IoT 기술 등 변화하는 가전 기술 트렌드에 발맞춘 전문 지식과 실무 능력을 배양합니다.</p>
                  </TextWrapper>
               </GoalItem>
               <GoalItem>
                  <Icon>🔧</Icon>
                  <TextWrapper>
                     <h3>실무 중심 교육</h3>
                     <p>이론 교육뿐만 아니라 실제 현장에서 요구되는 문제 해결 능력과 응용 기술 습득에 중점을 둡니다.</p>
                  </TextWrapper>
               </GoalItem>
            </Section>

            <Section variants={sectionVariants}>
               <SectionTitle>산업 기여 및 윤리 함양</SectionTitle>
               <GoalItem>
                  <Icon>🤝</Icon>
                  <TextWrapper>
                     <h3>고객 만족 실현</h3>
                     <p>전문 기술과 더불어 고객 응대 능력 및 서비스 마인드를 함양하여 높은 수준의 고객 만족을 실현합니다.</p>
                  </TextWrapper>
               </GoalItem>
               <GoalItem>
                  <Icon>🌱</Icon>
                  <TextWrapper>
                     <h3>직업 윤리 의식</h3>
                     <p>책임감과 직업 윤리를 바탕으로 안전 규정을 준수하며, 소비자에게 신뢰받는 전문가로서의 소양을 갖춥니다.</p>
                  </TextWrapper>
               </GoalItem>
            </Section>
         </PageContainer>
      </motion.div>
   )
}

// 스타일 컴포넌트 (다른 하위 페이지와 유사하게)
const HeroSection = styled.section`
   position: relative;
   height: 350px;
   background: url('/images/edu-goal-hero.jpg') no-repeat center center; /* 적절한 배경 이미지 */
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
   background-color: rgba(74, 144, 226, 0.6); /* Secondary 색상 오버레이 */
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

const GoalItem = styled.div`
   display: flex;
   align-items: center;
   gap: ${({ theme }) => theme.spacing.lg};
   background-color: #f8f9fa;
   padding: ${({ theme }) => theme.spacing.lg};
   border-radius: ${({ theme }) => theme.borderRadius};
   margin-bottom: ${({ theme }) => theme.spacing.lg};
   border: 1px solid ${({ theme }) => theme.colors.border};

   &:last-child {
      margin-bottom: 0;
   }
`

const Icon = styled.div`
   font-size: 2.5rem;
   color: ${({ theme }) => theme.colors.secondary};
`

const TextWrapper = styled.div`
   h3 {
      font-size: ${({ theme }) => theme.fontSizes.large};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: ${({ theme }) => theme.spacing.xs};
   }

   p {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      color: ${({ theme }) => theme.colors.textSecondary};
      line-height: 1.7;
      margin: 0;
   }
`
