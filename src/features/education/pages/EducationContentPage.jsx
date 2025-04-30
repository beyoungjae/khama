import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' // 온라인 신청 링크용
import { Button } from '@/components/common/Button' // 버튼 컴포넌트
import { courses } from '@/constants/courses' // 교육 과정 데이터 임포트

const sectionVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function EducationContentPage() {
   return (
      <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={sectionVariants}>
         <HeroSection>
            <HeroOverlay />
            <HeroContent>
               <h1>교육 내용</h1>
               <p>체계적이고 전문적인 생활가전 유지보수 교육 과정을 제공합니다.</p>
            </HeroContent>
         </HeroSection>
         <PageContainer>
            <Section variants={sectionVariants}>
               <SectionTitle>주요 교육 과정</SectionTitle>
               <CourseGrid>
                  {courses.map((course) => (
                     <CourseCard key={course.value}>
                        {/* 아이콘은 과정 특성에 맞게 추가 가능 */}
                        <CourseIcon>📚</CourseIcon>
                        <h3>{course.label}</h3>
                        <p>이 과정은 [해당 과정에 대한 간략한 설명]을 다룹니다. [주요 학습 목표 또는 내용 요약]을 통해 전문성을 키울 수 있습니다.</p>
                        {/* <CourseDetailsLink to={`/education/courses/${course.value}`}>과정 상세보기</CourseDetailsLink> */}
                        <PlaceholderText>(과정 상세 내용은 추후 추가 예정)</PlaceholderText>
                     </CourseCard>
                  ))}
               </CourseGrid>
               <ButtonWrapper>
                  <Button as={Link} to="/apply?type=education" variant="primary" size="large">
                     교육 신청하기
                  </Button>
               </ButtonWrapper>
            </Section>

            <Section variants={sectionVariants}>
               <SectionTitle>교육 특징</SectionTitle>
               <FeatureList>
                  <li>
                     <FeatureIcon>👨‍🏫</FeatureIcon>
                     <div>
                        <strong>현장 전문가 강사진</strong>
                        <p>풍부한 실무 경험을 갖춘 최고의 강사진이 교육을 진행합니다.</p>
                     </div>
                  </li>
                  <li>
                     <FeatureIcon>💻</FeatureIcon>
                     <div>
                        <strong>최신 장비 활용 실습</strong>
                        <p>실제 현장과 유사한 환경에서 최신 가전제품 및 측정 장비를 활용한 실습 기회를 제공합니다.</p>
                     </div>
                  </li>
                  <li>
                     <FeatureIcon>📈</FeatureIcon>
                     <div>
                        <strong>취업 및 창업 연계 지원</strong>
                        <p>우수 교육 수료생에게는 관련 기업 취업 및 창업 컨설팅 기회를 제공합니다. (협의 중)</p>
                     </div>
                  </li>
               </FeatureList>
            </Section>
         </PageContainer>
      </motion.div>
   )
}

// 스타일 컴포넌트
const HeroSection = styled.section`
   position: relative;
   height: 350px;
   background: url('/images/edu-content-hero.jpg') no-repeat center center; /* 배경 이미지 */
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
   max-width: 1100px; /* 콘텐츠 너비 조정 */
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

const CourseGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: ${({ theme }) => theme.spacing.lg};
   margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const CourseCard = styled.div`
   background-color: ${({ theme }) => theme.colors.backgroundLight};
   border: 1px solid ${({ theme }) => theme.colors.border};
   border-radius: ${({ theme }) => theme.borderRadius};
   padding: ${({ theme }) => theme.spacing.lg};
   text-align: center;
   transition: box-shadow 0.3s ease;

   &:hover {
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
   }

   h3 {
      font-size: ${({ theme }) => theme.fontSizes.large};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: ${({ theme }) => theme.spacing.sm};
      margin-top: ${({ theme }) => theme.spacing.sm};
   }

   p {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      color: ${({ theme }) => theme.colors.textSecondary};
      line-height: 1.6;
      margin-bottom: ${({ theme }) => theme.spacing.md};
   }
`

const CourseIcon = styled.div`
   font-size: 2rem;
   color: ${({ theme }) => theme.colors.primary};
`

const PlaceholderText = styled.span`
   display: block;
   font-size: ${({ theme }) => theme.fontSizes.small};
   color: #aaa;
   margin-top: ${({ theme }) => theme.spacing.sm};
   font-style: italic;
`

const ButtonWrapper = styled.div`
   text-align: center;
   margin-top: ${({ theme }) => theme.spacing.lg};
`

const FeatureList = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;
   display: flex;
   flex-direction: column;
   gap: ${({ theme }) => theme.spacing.lg};
`

const FeatureIcon = styled.div`
   font-size: 2rem;
   color: ${({ theme }) => theme.colors.secondary};
   margin-right: ${({ theme }) => theme.spacing.md};
`

const FeatureItem = styled.li`
   display: flex;
   align-items: center;
   background-color: #f8f9fa;
   padding: ${({ theme }) => theme.spacing.lg};
   border-radius: ${({ theme }) => theme.borderRadius};
   border: 1px solid ${({ theme }) => theme.colors.border};

   strong {
      font-size: ${({ theme }) => theme.fontSizes.large};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
      display: block;
      margin-bottom: ${({ theme }) => theme.spacing.xs};
   }

   p {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      color: ${({ theme }) => theme.colors.textSecondary};
      line-height: 1.6;
      margin: 0;
   }
`
