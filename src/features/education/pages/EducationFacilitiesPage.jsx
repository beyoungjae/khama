import styled from 'styled-components'
import { motion } from 'framer-motion'

const sectionVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function EducationFacilitiesPage() {
   return (
      <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={sectionVariants}>
         <HeroSection>
            <HeroOverlay />
            <HeroContent>
               <h1>교육 시설 안내</h1>
               <p>최첨단 실습 장비와 쾌적한 학습 환경을 제공합니다.</p>
            </HeroContent>
         </HeroSection>
         <PageContainer>
            <Section variants={sectionVariants}>
               <SectionTitle>첨단 실습 환경</SectionTitle>
               <FacilityGrid>
                  <FacilityItem>
                     <img src="/images/facility-lab.jpg" alt="실습실" />
                     <h3>다목적 실습실</h3>
                     <p>최신 가전제품 분해 조립 및 고장 진단 실습이 가능한 환경</p>
                  </FacilityItem>
                  <FacilityItem>
                     <img src="/images/facility-ac.jpg" alt="에어컨 실습" />
                     <h3>에어컨 전문 실습장</h3>
                     <p>다양한 종류의 에어컨 설치 및 유지보수 실습 공간</p>
                  </FacilityItem>
                  <FacilityItem>
                     <img src="/images/facility-smart.jpg" alt="스마트홈 실습" />
                     <h3>스마트홈 연동 실습</h3>
                     <p>IoT 기반 스마트홈 기기 연동 및 제어 시스템 구축 실습</p>
                  </FacilityItem>
               </FacilityGrid>
            </Section>

            <Section variants={sectionVariants}>
               <SectionTitle>편의 및 부대 시설</SectionTitle>
               <FacilityList>
                  <li>
                     <strong>강의실:</strong> 빔프로젝터, 음향 시스템 등 최신 교육 장비 구비
                  </li>
                  <li>
                     <strong>스터디룸:</strong> 그룹 스터디 및 개별 학습을 위한 공간 제공
                  </li>
                  <li>
                     <strong>휴게 공간:</strong> 교육생 편의를 위한 라운지 및 휴식 공간 마련
                  </li>
                  <li>
                     <strong>기타:</strong> 사물함, PC 사용 공간 등 지원
                  </li>
               </FacilityList>
            </Section>
         </PageContainer>
      </motion.div>
   )
}

// 스타일 컴포넌트
const HeroSection = styled.section`
   position: relative;
   height: 350px;
   background: url('/images/edu-facility-hero.jpg') no-repeat center center; /* 배경 이미지 */
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
   max-width: 1000px; /* 콘텐츠 너비 조정 */
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

const FacilityGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
   gap: ${({ theme }) => theme.spacing.lg};
   margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const FacilityItem = styled.div`
   background-color: #fff;
   border-radius: ${({ theme }) => theme.borderRadius};
   overflow: hidden;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
   border: 1px solid ${({ theme }) => theme.colors.border};
   transition: transform 0.3s ease;

   &:hover {
      transform: translateY(-5px);
   }

   img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
   }

   h3 {
      font-size: ${({ theme }) => theme.fontSizes.large};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.secondary};
      margin: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.sm}`};
   }

   p {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      color: ${({ theme }) => theme.colors.textSecondary};
      padding: ${({ theme }) => `0 ${theme.spacing.md} ${theme.spacing.md}`};
      margin: 0;
      line-height: 1.6;
   }
`

const FacilityList = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;

   li {
      background-color: #f8f9fa;
      border-left: 4px solid ${({ theme }) => theme.colors.secondary};
      padding: ${({ theme }) => theme.spacing.md};
      margin-bottom: ${({ theme }) => theme.spacing.sm};
      border-radius: 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0;

      strong {
         color: ${({ theme }) => theme.colors.secondary};
         font-weight: 600;
      }
   }
`
