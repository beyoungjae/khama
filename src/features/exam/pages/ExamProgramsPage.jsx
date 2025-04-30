import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'

const sectionVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function ExamProgramsPage() {
   return (
      <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={sectionVariants}>
         <HeroSection>
            <HeroOverlay />
            <HeroContent>
               <h1>시험 프로그램 안내</h1>
               <p>자격 시험 준비를 위한 다양한 프로그램을 확인해보세요.</p>
            </HeroContent>
         </HeroSection>
         <PageContainer>
            <Section variants={sectionVariants}>
               <SectionTitle>시험 대비 교육 프로그램</SectionTitle>
               <ProgramCard>
                  <Icon>🎓</Icon>
                  <TextWrapper>
                     <h3>생활가전 유지보수사 대비반</h3>
                     <p>1급 및 2급 자격 시험 필기/실기 완벽 대비를 위한 이론 및 실습 집중 과정입니다. 최신 기출 문제 분석과 실전 모의고사를 통해 합격률을 높입니다.</p>
                     <Button as={Link} to="/education/content" variant="outline" size="small" style={{ marginTop: '0.5rem' }}>
                        교육 내용 자세히 보기
                     </Button>
                  </TextWrapper>
               </ProgramCard>
               <ProgramCard>
                  <Icon>💨</Icon>
                  <TextWrapper>
                     <h3>에어컨 전문가 실무 과정</h3>
                     <p>에어컨 설치, 진단, 수리 전문가 양성을 위한 실습 중심 교육입니다. 현장 노하우 전수 및 최신 기술 동향을 반영한 커리큘럼을 제공합니다.</p>
                     <Button as={Link} to="/education/content" variant="outline" size="small" style={{ marginTop: '0.5rem' }}>
                        교육 내용 자세히 보기
                     </Button>
                  </TextWrapper>
               </ProgramCard>
               {/* TODO: 스마트홈 등 다른 프로그램 추가 */}
               <Placeholder>스마트홈 전문가 과정 등 추가 프로그램 안내는 준비 중입니다.</Placeholder>
            </Section>

            <Section variants={sectionVariants}>
               <SectionTitle>시험 응시 지원</SectionTitle>
               <SupportList>
                  <li>온라인 원서 접수 시스템 제공</li>
                  <li>시험 일정 및 장소 공지</li>
                  <li>응시료 결제 및 환불 안내</li>
                  <li>합격자 발표 및 자격증 발급 안내</li>
               </SupportList>
               <ButtonWrapper>
                  <Button as={Link} to="/apply?type=exam" variant="primary" size="large">
                     시험 접수 바로가기
                  </Button>
               </ButtonWrapper>
            </Section>
         </PageContainer>
      </motion.div>
   )
}

// 스타일 컴포넌트
const HeroSection = styled.section`
   position: relative;
   height: 350px;
   background: url('/images/exam-program-hero.jpg') no-repeat center center; /* 배경 이미지 */
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
   background-color: rgba(245, 166, 35, 0.6);
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

const ProgramCard = styled.div`
   display: flex;
   gap: ${({ theme }) => theme.spacing.lg};
   background-color: ${({ theme }) => theme.colors.backgroundLight};
   padding: ${({ theme }) => theme.spacing.lg};
   border-radius: ${({ theme }) => theme.borderRadius};
   margin-bottom: ${({ theme }) => theme.spacing.lg};
   border: 1px solid ${({ theme }) => theme.colors.border};
`

const Icon = styled.div`
   font-size: 2.5rem;
   color: ${({ theme }) => theme.colors.accent};
   padding-top: 5px;
`

const TextWrapper = styled.div`
   flex: 1;
   h3 {
      font-size: ${({ theme }) => theme.fontSizes.large};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: ${({ theme }) => theme.spacing.sm};
   }
   p {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      color: ${({ theme }) => theme.colors.textSecondary};
      line-height: 1.7;
      margin: 0;
   }
`

const Placeholder = styled.p`
   text-align: center;
   color: #aaa;
   font-style: italic;
   margin-top: ${({ theme }) => theme.spacing.lg};
`

const SupportList = styled.ul`
   list-style: disc;
   padding-left: ${({ theme }) => theme.spacing.lg};
   margin-bottom: ${({ theme }) => theme.spacing.xl};

   li {
      margin-bottom: ${({ theme }) => theme.spacing.sm};
      color: ${({ theme }) => theme.colors.textSecondary};
   }
`

const ButtonWrapper = styled.div`
   text-align: center;
`
