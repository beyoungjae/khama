import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { FaBullseye, FaLightbulb, FaWrench, FaHandshake, FaSeedling, FaStar, FaShieldAlt, FaUserCheck, FaUsers, FaCertificate, FaTrophy, FaGraduationCap } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { getImageUrl, getOptimizedImageProps } from '../../../utils/imageHelpers'
import {
   fadeInUp,
   fadeInScale,
   staggerContainer,
   slideInLeft,
   slideInRight,
   PageWrapper,
   Container,
   ModernHeroSection,
   HeroBackground,
   HeroContainer,
   HeroBadge,
   HeroTitle,
   GradientText,
   HeroSubtitle,
   HeroDescription,
   HeroImageContainer,
   HeroImagePlaceholder,
   CompactSection,
   CompactGrid,
   StatisticsSection,
   StatisticsGrid,
   StatNumber,
   StatLabel,
   StatCard,
   ZigzagSection,
   ZigzagLayout,
   ZigzagContent,
   ZigzagImage,
   SectionHeader,
   SectionTitle,
   SectionSubtitle,
   Card,
   CardIcon,
   CardContent,
   CardTitle,
   CardDescription,
   ImageGallery,
   ImageGalleryItem,
   ImageCaption,
   ResponsiveImage,
} from '../../../components/common/SharedStyles'

export function EducationGoalPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.05 })

   return (
      <PageWrapper>
         <ModernHeroSection bgImage={getImageUrl('hero', 'education.jpg')} ref={heroRef}>
            <HeroBackground radialGradient="radial-gradient(circle at 30% 70%, rgba(255, 107, 107, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)" />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaBullseye /> 교육 목적
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     미래 지향적 <GradientText>전문가 양성</GradientText>
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "전문성과 윤리를 겸비한 생활가전 유지관리 전문가 양성"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     생활가전 유지보수 분야의 핵심 인재로
                     <br />
                     성장할 수 있는 체계적인 교육을 제공합니다
                  </HeroDescription>
               </motion.div>
               <HeroImageContainer as={motion.div} variants={slideInRight}>
                  <HeroImagePlaceholder>
                     <FaBullseye size={80} />
                     <p>교육 목적</p>
                  </HeroImagePlaceholder>
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         {/* 🚀 1단계: 교육 목표 통계 섹션 */}
         <StatisticsSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
            <Container>
               <StatisticsGrid>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>90%</StatNumber>
                     <StatLabel>자격증 취득률 목표</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>85%</StatNumber>
                     <StatLabel>취업률 목표</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>95%</StatNumber>
                     <StatLabel>교육생 만족도 목표</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>100%</StatNumber>
                     <StatLabel>현장 적용률 목표</StatLabel>
                  </StatCard>
               </StatisticsGrid>
            </Container>
         </StatisticsSection>

         <Container>
            {/* 🎯 2단계: 지그재그 레이아웃으로 핵심 교육 목표 */}
            <ZigzagSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} background="linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)">
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     핵심 교육 목표
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     미래 지향적 전문가 양성을 위한 체계적인 교육 목표
                  </SectionSubtitle>
               </SectionHeader>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>최신 기술 습득</h3>
                     <p>스마트홈, IoT 기술 등 변화하는 가전 기술 트렌드에 발맞춘 전문 지식과 실무 능력을 배양합니다.</p>
                     <ul>
                        <li>스마트홈 기술 동향 분석</li>
                        <li>IoT 기반 가전 기기 이해</li>
                        <li>AI 기술 활용 방안</li>
                        <li>신기술 적용 실무 능력</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'classroom'), '최신 기술 교육', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>실무 중심 교육</h3>
                     <p>이론 교육뿐만 아니라 실제 현장에서 요구되는 문제 해결 능력과 응용 기술 습득에 중점을 둡니다.</p>
                     <ul>
                        <li>현장 중심 실습 교육</li>
                        <li>문제 해결 능력 배양</li>
                        <li>응용 기술 습득</li>
                        <li>현장 적응력 강화</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'practical'), '실무 중심 교육', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>
            </ZigzagSection>

            {/* 💎 3단계: 컴팩트한 전문성 강화 방향 */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     전문성 강화 방향
                  </SectionTitle>
               </SectionHeader>
               <CompactGrid columns={3}>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $accent>
                        <FaStar />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>고급 기술 역량</CardTitle>
                        <CardDescription>고도화된 가전 기술과 진단 능력을 통해 업계 최고 수준의 전문가로 성장합니다</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $primary>
                        <FaShieldAlt />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>안전 의식 강화</CardTitle>
                        <CardDescription>작업 안전과 제품 안전을 최우선으로 하는 전문적인 안전 의식을 함양합니다</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $secondary>
                        <FaUserCheck />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>품질 관리 능력</CardTitle>
                        <CardDescription>체계적인 품질 관리와 서비스 표준화를 통해 일관성 있는 고품질 서비스를 제공합니다</CardDescription>
                     </CardContent>
                  </Card>
               </CompactGrid>
            </CompactSection>

            {/* 🔥 4단계: 지그재그 레이아웃으로 산업 기여 및 윤리 함양 */}
            <ZigzagSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} background="linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%)">
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     산업 기여 및 윤리 함양
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     전문성과 윤리를 겸비한 생활가전 유지관리 전문가 양성
                  </SectionSubtitle>
               </SectionHeader>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>고객 만족 실현</h3>
                     <p>전문 기술과 더불어 고객 응대 능력 및 서비스 마인드를 함양하여 높은 수준의 고객 만족을 실현합니다.</p>
                     <ul>
                        <li>고객 니즈 정확한 파악</li>
                        <li>최적의 솔루션 제공</li>
                        <li>전문적인 서비스 마인드</li>
                        <li>고객 응대 능력 향상</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'instructor'), '고객 만족 교육', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>직업 윤리 의식</h3>
                     <p>책임감과 직업 윤리를 바탕으로 안전 규정을 준수하며, 소비자에게 신뢰받는 전문가로서의 소양을 갖춥니다.</p>
                     <ul>
                        <li>안전 규정 철저 준수</li>
                        <li>전문가로서의 책임감</li>
                        <li>지속 가능한 서비스</li>
                        <li>환경 보호 기여</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'students'), '직업 윤리 교육', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>
            </ZigzagSection>

            {/* 💎 5단계: 컴팩트한 교육 성과 목표 */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     교육 성과 목표
                  </SectionTitle>
               </SectionHeader>
               <CompactGrid columns={4}>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $secondary>
                        <FaCertificate />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>자격증 취득률 90%</CardTitle>
                        <CardDescription>체계적인 교육과 개별 맞춤 지도를 통해 높은 자격증 취득률 달성</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $accent>
                        <FaUsers />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>취업률 85%</CardTitle>
                        <CardDescription>산업체와의 긴밀한 협력을 통해 높은 취업률과 취업 만족도 실현</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $primary>
                        <FaStar />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>교육생 만족도 95%</CardTitle>
                        <CardDescription>최고 품질의 교육 서비스 제공을 통해 교육생들의 높은 만족도 달성</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $secondary>
                        <FaTrophy />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>현장 적용률 100%</CardTitle>
                        <CardDescription>실무 중심 교육을 통해 현장에서 바로 활용 가능한 실력 배양</CardDescription>
                     </CardContent>
                  </Card>
               </CompactGrid>
            </CompactSection>

            {/* 🖼️ 6단계: 교육 성과 갤러리 (컴팩트) */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     교육 성과 갤러리
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     KHAMA 교육원의 성공적인 교육 성과를 확인하세요
                  </SectionSubtitle>
               </SectionHeader>

               <ImageGallery>
                  <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'classroom'), '현대적인 강의실', [{ width: 400 }, { width: 800 }])} />
                     <ImageCaption>
                        <h4>체계적인 이론 교육</h4>
                        <p>최신 교육 시설에서 진행되는 전문 이론 교육</p>
                     </ImageCaption>
                  </ImageGalleryItem>
                  <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'practical'), '실습 교육 모습', [{ width: 400 }, { width: 800 }])} />
                     <ImageCaption>
                        <h4>실무 중심 실습</h4>
                        <p>현장에서 바로 활용 가능한 실무 중심 교육</p>
                     </ImageCaption>
                  </ImageGalleryItem>
                  <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'facility1'), '교육 시설 전경', [{ width: 400 }, { width: 800 }])} />
                     <ImageCaption>
                        <h4>최첨단 교육 시설</h4>
                        <p>전문가 양성을 위한 최적의 교육 환경</p>
                     </ImageCaption>
                  </ImageGalleryItem>
               </ImageGallery>
            </CompactSection>
         </Container>
      </PageWrapper>
   )
}
