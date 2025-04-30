import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaBuilding, FaBullseye, FaEye, FaHistory, FaSitemap } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

// --- Framer Motion Variants --- //
const sectionVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const itemVariants = {
   hidden: { opacity: 0, scale: 0.9 },
   visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
   },
}

export function AssociationPage() {
   const { ref: coreValuesRef, inView: coreValuesInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: historyRef, inView: historyInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: orgChartRef, inView: orgChartInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
         <HeroSection>
            <HeroOverlay />
            <HeroContent>
               <motion.h1 variants={sectionVariants}>협회 소개</motion.h1>
               <motion.p variants={sectionVariants} style={{ transitionDelay: '0.2s' }}>
                  한국생활가전유지관리협회 (KHAMA)는 기술 표준화, 전문가 양성, 산업 발전을 통해 더 나은 생활 환경을 만들어갑니다.
               </motion.p>
            </HeroContent>
         </HeroSection>

         <Container>
            {/* --- 핵심 가치 섹션 --- */}
            <CoreValuesSection ref={coreValuesRef} initial="hidden" animate={coreValuesInView ? 'visible' : 'hidden'} variants={sectionVariants}>
               <SectionTitle $centered>핵심 가치</SectionTitle>
               <ValueGrid>
                  <ValueItem variants={itemVariants}>
                     <IconWrapper>
                        <FaBuilding />
                     </IconWrapper>
                     <h3>협회명</h3>
                     <p>
                        한국생활가전유지관리협회
                        <br />
                        (KHAMA)
                     </p>
                  </ValueItem>
                  <ValueItem variants={itemVariants}>
                     <IconWrapper>
                        <FaBullseye />
                     </IconWrapper>
                     <h3>미션</h3>
                     <p>생활가전 유지보수 기술 향상과 산업 발전에 기여하고, 안전하고 신뢰받는 서비스 환경 조성</p>
                  </ValueItem>
                  <ValueItem variants={itemVariants}>
                     <IconWrapper>
                        <FaEye />
                     </IconWrapper>
                     <h3>비전</h3>
                     <p>대한민국 최고의 생활가전 유지보수 전문가 양성 및 지원 플랫폼 구축</p>
                  </ValueItem>
               </ValueGrid>
            </CoreValuesSection>

            {/* --- 연혁 섹션 (예시) --- */}
            <HistorySection ref={historyRef} initial="hidden" animate={historyInView ? 'visible' : 'hidden'} variants={sectionVariants}>
               <SectionTitle>주요 연혁</SectionTitle>
               <Timeline>
                  <TimelineItem variants={itemVariants}>
                     <TimelineYear>202X</TimelineYear>
                     <TimelineContent>
                        <h4>협회 설립</h4>
                        <p>생활가전 유지보수 산업 발전을 위한 첫걸음</p>
                     </TimelineContent>
                  </TimelineItem>
                  <TimelineItem variants={itemVariants}>
                     <TimelineYear>202X</TimelineYear>
                     <TimelineContent>
                        <h4>제 1회 자격 시험 시행</h4>
                        <p>전문 인력 배출 시작</p>
                     </TimelineContent>
                  </TimelineItem>
                  {/* ... 추가 연혁 항목 ... */}
                  <TimelinePlaceholder>
                     <span>
                        <FaHistory />
                     </span>
                     <p>협회의 주요 발자취가 여기에 표시됩니다.</p>
                  </TimelinePlaceholder>
               </Timeline>
            </HistorySection>

            {/* --- 조직도 섹션 (예시) --- */}
            <OrgChartSection ref={orgChartRef} initial="hidden" animate={orgChartInView ? 'visible' : 'hidden'} variants={sectionVariants}>
               <SectionTitle $centered>조직도</SectionTitle>
               <ImagePlaceholder>
                  <span>
                     <FaSitemap />
                  </span>
                  <p>협회 조직 구성도 이미지</p>
               </ImagePlaceholder>
               {/* <img src="/path/to/org-chart.png" alt="조직도" /> */}
            </OrgChartSection>
         </Container>
      </motion.div>
   )
}

const Container = styled.div`
   padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
   max-width: 1100px; /* 콘텐츠 최대 너비 조정 */
   margin: 0 auto;
`

const HeroSection = styled.section`
   position: relative;
   height: 450px;
   background: url('/src/assets/images/association-hero.jpg') no-repeat center center;
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
   background-color: rgba(0, 60, 120, 0.6); /* 테마 Primary 색상 기반 반투명 오버레이 */
   z-index: 1;
`

const HeroContent = styled.div`
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
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
   }
`

const SectionTitle = styled.h2`
   font-size: ${({ theme }) => theme.fontSizes.h2};
   font-weight: 700;
   color: ${({ theme }) => theme.colors.primary};
   text-align: ${(props) => (props.$centered ? 'center' : 'left')};
   margin-bottom: ${({ theme }) => theme.spacing.xl};
`

// --- 핵심 가치 섹션 --- //
const CoreValuesSection = styled(motion.section)`
   margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const ValueGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   gap: ${({ theme }) => theme.spacing.xl};
`

const ValueItem = styled(motion.div)`
   background-color: ${({ theme }) => theme.colors.background};
   padding: ${({ theme }) => theme.spacing.xl};
   border-radius: ${({ theme }) => theme.borderRadius};
   border: 1px solid ${({ theme }) => theme.colors.border};
   text-align: center;
   box-shadow: ${({ theme }) => theme.boxShadow};
   transition: transform 0.3s ease;

   &:hover {
      transform: translateY(-5px);
   }

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
`

// --- 연혁 섹션 --- //
const HistorySection = styled(motion.section)`
   margin-bottom: ${({ theme }) => theme.spacing.xxl};
   position: relative;
   padding-left: ${({ theme }) => theme.spacing.lg}; /* 타임라인 선 공간 */

   /* 타임라인 세로 선 */
   &::before {
      content: '';
      position: absolute;
      left: calc(${({ theme }) => theme.spacing.lg} + 10px); /* 아이콘 중앙에 맞춤 */
      top: 0;
      bottom: 0;
      width: 4px;
      background-color: ${({ theme }) => theme.colors.primary}33; /* 연한 파란색 */
      border-radius: 2px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
         display: none;
      }
   }
`

const Timeline = styled.div`
   position: relative;
   padding-left: ${({ theme }) => theme.spacing.lg};
`

const TimelineItem = styled(motion.div)`
   position: relative;
   margin-bottom: ${({ theme }) => theme.spacing.xl};

   &::before {
      content: '';
      position: absolute;
      left: -${({ theme }) => theme.spacing.lg};
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.background};
   }
`

const TimelineYear = styled.div`
   font-size: ${({ theme }) => theme.fontSizes.xl};
   font-weight: 600;
   color: ${({ theme }) => theme.colors.primary};
   margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const TimelineContent = styled.div`
   padding-left: ${({ theme }) => theme.spacing.xl};
   border-left: 2px solid ${({ theme }) => theme.colors.primary};
   position: relative;

   h4 {
      font-size: ${({ theme }) => theme.fontSizes.h4};
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: ${({ theme }) => theme.spacing.sm};
   }

   p {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      color: ${({ theme }) => theme.colors.textSecondary};
      line-height: 1.6;
      margin: 0;
   }
`

const TimelinePlaceholder = styled.div`
   position: absolute;
   left: 0;
   top: 50%;
   transform: translateY(-50%);
   text-align: center;
   width: 100%;

   span {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.primary};
   }

   p {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-top: ${({ theme }) => theme.spacing.sm};
   }
`

// --- 조직도 섹션 --- //
const OrgChartSection = styled(motion.section)`
   margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const ImagePlaceholder = styled.div`
   position: relative;
   height: 300px;
   background-color: ${({ theme }) => theme.colors.background};
   border-radius: ${({ theme }) => theme.borderRadius};
   border: 1px solid ${({ theme }) => theme.colors.border};
   box-shadow: ${({ theme }) => theme.boxShadow};
   display: flex;
   align-items: center;
   justify-content: center;

   span {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.primary};
   }

   p {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: ${({ theme }) => theme.spacing.sm};
      background-color: rgba(0, 0, 0, 0.5);
      color: ${({ theme }) => theme.colors.background};
      border-radius: 0 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius};
      text-align: center;
   }
`
