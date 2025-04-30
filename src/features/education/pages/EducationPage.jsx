import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'
// 아이콘 예시 (react-icons 사용 시)
import { FaBullseye, FaWrench, FaChalkboardTeacher, FaPhotoVideo } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

// --- Framer Motion Variants --- //
const sectionVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const itemVariants = {
   hidden: { opacity: 0, x: -30 },
   visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

const imageVariants = {
   hidden: { opacity: 0, scale: 0.9 },
   visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
}

export function EducationPage() {
   const { ref: overviewRef, inView: overviewInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: courseRef, inView: courseInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: facilityRef, inView: facilityInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
         <HeroSection>
            <HeroOverlay />
            <HeroContent>
               <motion.h1 variants={sectionVariants}>교육 안내</motion.h1>
               <motion.p variants={sectionVariants} style={{ transitionDelay: '0.2s' }}>
                  체계적인 이론 및 실습 교육을 통해 생활가전 유지보수 전문가로 성장할 기회를 제공합니다.
               </motion.p>
               <motion.div variants={sectionVariants} style={{ transitionDelay: '0.4s' }}>
                  <Button as={Link} to="/apply?type=education" variant="primary" size="large">
                     교육 신청하기
                  </Button>
               </motion.div>
            </HeroContent>
         </HeroSection>

         <Container>
            {/* --- 교육 개요 섹션 --- */}
            <OverviewSection ref={overviewRef} initial="hidden" animate={overviewInView ? 'visible' : 'hidden'} variants={sectionVariants}>
               <OverviewItem variants={itemVariants}>
                  <IconWrapper>
                     <FaBullseye />
                  </IconWrapper>
                  <h3>교육 목적</h3>
                  <p>가전제품 유지보수 분야의 이론과 실무 능력을 겸비한 전문 인력 양성</p>
               </OverviewItem>
               <OverviewItem variants={itemVariants}>
                  <IconWrapper>
                     <FaWrench />
                  </IconWrapper>
                  <h3>교육 특징</h3>
                  <p>최신 기술 동향 반영, 현장 중심 실습, 소수 정예 맞춤 교육</p>
               </OverviewItem>
               <OverviewItem variants={itemVariants}>
                  <IconWrapper>
                     <FaChalkboardTeacher />
                  </IconWrapper>
                  <h3>기대 효과</h3>
                  <p>자격증 취득 지원, 취업 및 창업 연계, 실무 역량 강화</p>
               </OverviewItem>
            </OverviewSection>

            {/* --- 교육 과정 소개 --- */}
            <CourseSection ref={courseRef} initial="hidden" animate={courseInView ? 'visible' : 'hidden'} variants={sectionVariants}>
               <TextContent variants={itemVariants}>
                  <SectionTitle>체계적인 교육 과정</SectionTitle>
                  <p>KHAMA 교육원은 기초부터 심화까지 단계별 교육 과정을 통해 여러분의 성장을 지원합니다. 각 과정은 다음과 같은 핵심 내용으로 구성됩니다:</p>
                  <List>
                     <li>
                        <strong>이론 학습:</strong> 가전제품 구조, 전기/전자 기초, 고장 진단 원리
                     </li>
                     <li>
                        <strong>실습 교육:</strong> 제품 분해/조립, 주요 부품 교체, 측정 장비 사용법
                     </li>
                     <li>
                        <strong>안전 및 서비스:</strong> 작업 안전 수칙, 고객 응대 및 커뮤니케이션
                     </li>
                     <li>
                        <strong>최신 기술:</strong> 스마트 가전 동향, 친환경 유지보수 기술 소개
                     </li>
                  </List>
                  <Button as={Link} to="/apply?type=education" variant="secondary" style={{ marginTop: '1rem' }}>
                     자세히 알아보기 및 신청
                  </Button>
               </TextContent>
               <ImageContent variants={imageVariants}>
                  <ImagePlaceholder>
                     <span>
                        <FaPhotoVideo />
                     </span>
                     <p>교육 과정 및 실습 장면 이미지/비디오</p>
                  </ImagePlaceholder>
                  {/* <img src="/path/to/education-image.jpg" alt="교육 과정 이미지"/> */}
               </ImageContent>
            </CourseSection>

            {/* --- 교육 시설 안내 --- */}
            <FacilitySection ref={facilityRef} initial="hidden" animate={facilityInView ? 'visible' : 'hidden'} variants={sectionVariants}>
               <SectionTitle $centered>최첨단 교육 시설</SectionTitle>
               <FacilityGrid>
                  <FacilityItem variants={itemVariants}>
                     <img src="/src/assets/images/facility-lecture.jpg" alt="강의실" />
                     <h4>이론 강의실</h4>
                     <p>쾌적하고 집중도 높은 학습 환경 제공</p>
                  </FacilityItem>
                  <FacilityItem variants={itemVariants}>
                     <img src="/src/assets/images/facility-practice.jpg" alt="실습실" />
                     <h4>전문 실습실</h4>
                     <p>다양한 가전제품 및 최신 장비 구비</p>
                  </FacilityItem>
                  <FacilityItem variants={itemVariants}>
                     <img src="/src/assets/images/facility-lounge.jpg" alt="휴게 공간" />
                     <h4>휴게 공간</h4>
                     <p>편안한 휴식과 네트워킹 지원</p>
                  </FacilityItem>
               </FacilityGrid>
               {/* TODO: 실제 이미지 경로 설정 필요 */}
            </FacilitySection>
         </Container>
      </motion.div>
   )
}

// --- Styled Components --- //

// HeroSection, HeroOverlay, HeroContent (AssociationPage와 유사하게 사용)
const HeroSection = styled.section`
   position: relative;
   height: 450px;
   background: url('/src/assets/images/education-hero.jpg') no-repeat center center; // 교육 관련 이미지
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
   background-color: rgba(26, 90, 150, 0.65); // 테마 Primary 색상 기반 다른 톤 오버레이
   z-index: 1;
`

const HeroContent = styled(motion.div)`
   // framer-motion 적용
   position: relative;
   z-index: 2;
   max-width: 800px;
   padding: 0 ${({ theme }) => theme.spacing.lg};

   h1 {
      font-size: ${({ theme }) => theme.fontSizes.h1};
      font-weight: 700;
      margin-bottom: ${({ theme }) => theme.spacing.md};
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
   }

   p {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      line-height: 1.7;
      opacity: 0.9;
      margin-bottom: ${({ theme }) => theme.spacing.xl};
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
   }
`

const Container = styled.div`
   padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
   max-width: 1100px;
   margin: 0 auto;
`

const SectionTitle = styled.h2`
   font-size: ${({ theme }) => theme.fontSizes.h2};
   font-weight: 700;
   color: ${({ theme }) => theme.colors.primary};
   text-align: ${(props) => (props.$centered ? 'center' : 'left')};
   margin-bottom: ${({ theme }) => theme.spacing.xl};
`

// --- 교육 개요 섹션 --- //
const OverviewSection = styled(motion.section)`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   gap: ${({ theme }) => theme.spacing.xl};
   margin-bottom: ${({ theme }) => theme.spacing.xxl};
   text-align: center;
`

const OverviewItem = styled(motion.div)`
   h3 {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};
      margin-top: ${({ theme }) => theme.spacing.sm};
      margin-bottom: ${({ theme }) => theme.spacing.md};
   }
   p {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      color: ${({ theme }) => theme.colors.textSecondary};
      line-height: 1.6;
      margin: 0;
   }
`

const IconWrapper = styled.div`
   font-size: 3rem;
   color: ${({ theme }) => theme.colors.secondary};
   line-height: 1;
   margin-bottom: ${({ theme }) => theme.spacing.sm};
`

// --- 교육 과정 소개 섹션 --- //
const CourseSection = styled(motion.section)`
   display: flex;
   align-items: center;
   gap: ${({ theme }) => theme.spacing.xxl};
   margin-bottom: ${({ theme }) => theme.spacing.xxl};
   background-color: ${({ theme }) => theme.colors.backgroundLight};
   padding: ${({ theme }) => theme.spacing.xxl};
   border-radius: ${({ theme }) => theme.borderRadius};

   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: column;
      padding: ${({ theme }) => theme.spacing.xl};
   }
`

const TextContent = styled(motion.div)`
   flex: 1.3;
   p {
      margin-bottom: ${({ theme }) => theme.spacing.lg};
      color: ${({ theme }) => theme.colors.textSecondary};
      line-height: 1.7;
   }
`

const ImageContent = styled(motion.div)`
   flex: 1;
`

const List = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;

   li {
      margin-bottom: ${({ theme }) => theme.spacing.md};
      padding-left: 1.5em;
      position: relative;
      font-size: ${({ theme }) => theme.fontSizes.medium};
      color: ${({ theme }) => theme.colors.textSecondary};

      &::before {
         content: '▹'; /* 다른 스타일의 불릿 */
         color: ${({ theme }) => theme.colors.secondary};
         font-weight: bold;
         position: absolute;
         left: 0;
         top: 0;
      }

      strong {
         color: ${({ theme }) => theme.colors.text};
         font-weight: 600;
      }
   }
`

const ImagePlaceholder = styled.div`
   // HomePage와 유사
   width: 100%;
   aspect-ratio: 16 / 9;
   background-color: #fff;
   border: 1px dashed ${({ theme }) => theme.colors.border};
   border-radius: ${({ theme }) => theme.borderRadius};
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   color: ${({ theme }) => theme.colors.textSecondary};

   span {
      font-size: 3rem;
      margin-bottom: 1rem;
   }
   p {
      font-size: ${({ theme }) => theme.fontSizes.small};
      margin: 0;
   }
`

// --- 교육 시설 안내 --- //
const FacilitySection = styled(motion.section)`
   margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const FacilityGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
   gap: ${({ theme }) => theme.spacing.xl};
`

const FacilityItem = styled(motion.div)`
   border-radius: ${({ theme }) => theme.borderRadius};
   overflow: hidden;
   border: 1px solid ${({ theme }) => theme.colors.border};
   background-color: white;
   box-shadow: ${({ theme }) => theme.boxShadow};
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

   h4 {
      font-size: ${({ theme }) => theme.fontSizes.large};
      font-weight: 600;
      margin: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg} ${theme.spacing.xs}`};
   }

   p {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      color: ${({ theme }) => theme.colors.textSecondary};
      padding: ${({ theme }) => `0 ${theme.spacing.lg} ${theme.spacing.md}`};
      margin: 0;
   }
`
