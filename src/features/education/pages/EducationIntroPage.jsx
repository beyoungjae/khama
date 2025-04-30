import styled from 'styled-components'
import { motion } from 'framer-motion'

const sectionVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function EducationIntroPage() {
   return (
      <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={sectionVariants}>
         <HeroSection>
            <HeroOverlay />
            <HeroContent>
               <h1>교육원 소개</h1>
               <p>최고의 교육 환경에서 미래를 준비하세요.</p>
            </HeroContent>
         </HeroSection>
         <PageContainer>
            <Section variants={sectionVariants}>
               <SectionTitle>KHAMA 교육원</SectionTitle>
               <IntroText>
                  <p>한국생활가전유지관리협회(KHAMA) 부설 교육원은 생활가전 유지보수 분야의 전문 인력 양성을 목표로 설립되었습니다. 다년간의 현장 경험을 갖춘 우수한 강사진과 최첨단 실습 시설을 바탕으로, 이론과 실무를 겸비한 인재를 배출하고 있습니다.</p>
                  <p>
                     본 교육원은 급변하는 기술 환경에 발맞춰 교육 과정을 지속적으로 개발하고 있으며, 교육생들이 현장에서 요구하는 핵심 역량을 갖출 수 있도록 지원합니다. 또한, 교육 수료 후에도 자격 취득, 취업 연계 등 다양한 기회를 제공하여 전문가로서 성공적인 커리어를 쌓아나갈 수 있도록 돕고
                     있습니다.
                  </p>
               </IntroText>
               <ImageGrid>
                  <img src="/images/edu-intro-1.jpg" alt="교육원 전경" />
                  <img src="/images/edu-intro-2.jpg" alt="강의 모습" />
                  <img src="/images/edu-intro-3.jpg" alt="실습 장비" />
               </ImageGrid>
            </Section>

            <Section variants={sectionVariants}>
               <SectionTitle>교육원의 약속</SectionTitle>
               <PromiseList>
                  <li>
                     <Icon>✅</Icon>
                     <p>실무 중심의 차별화된 교육 커리큘럼 제공</p>
                  </li>
                  <li>
                     <Icon>✅</Icon>
                     <p>최신 기술 트렌드를 반영한 지속적인 교육 과정 개선</p>
                  </li>
                  <li>
                     <Icon>✅</Icon>
                     <p>현장 경험 풍부한 최고의 강사진 확보</p>
                  </li>
                  <li>
                     <Icon>✅</Icon>
                     <p>쾌적하고 안전한 최첨단 교육 시설 완비</p>
                  </li>
                  <li>
                     <Icon>✅</Icon>
                     <p>교육생의 성공적인 취업 및 경력 개발 지원</p>
                  </li>
               </PromiseList>
            </Section>
         </PageContainer>
      </motion.div>
   )
}

// 스타일 컴포넌트
const HeroSection = styled.section`
   position: relative;
   height: 350px;
   background: url('/images/edu-intro-hero.jpg') no-repeat center center; /* 배경 이미지 */
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
   background-color: rgba(74, 144, 226, 0.6);
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

const IntroText = styled.div`
   font-size: ${({ theme }) => theme.fontSizes.medium};
   color: ${({ theme }) => theme.colors.textSecondary};
   line-height: 1.8;
   text-align: justify;
   margin-bottom: ${({ theme }) => theme.spacing.lg};

   p {
      margin-bottom: ${({ theme }) => theme.spacing.md};
   }
`

const ImageGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   gap: ${({ theme }) => theme.spacing.md};

   img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: ${({ theme }) => theme.borderRadius};
      border: 1px solid ${({ theme }) => theme.colors.border};
   }
`

const PromiseList = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;

   li {
      display: flex;
      align-items: center;
      background-color: #f8f9fa;
      padding: ${({ theme }) => theme.spacing.md};
      margin-bottom: ${({ theme }) => theme.spacing.md};
      border-radius: ${({ theme }) => theme.borderRadius};
      border: 1px solid ${({ theme }) => theme.colors.border};
   }
`

const Icon = styled.span`
   font-size: 1.5rem;
   margin-right: ${({ theme }) => theme.spacing.md};
`
