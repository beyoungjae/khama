import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { FaBookOpen, FaUserGraduate, FaCogs, FaTools, FaChalkboardTeacher, FaLaptopCode, FaArrowUp, FaHandshake } from 'react-icons/fa'
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
   StatisticsSection,
   StatisticsGrid,
   StatNumber,
   StatLabel,
   StatCard,
   ZigzagSection,
   ZigzagLayout,
   ZigzagContent,
   ZigzagImage,
   ImageGallery,
   ImageGalleryItem,
   ImageCaption,
   ResponsiveImage,
   Section,
   SectionHeader,
   SectionTitle,
   SectionSubtitle,
   Grid,
   Card,
   CardIcon,
   CardContent,
   CardTitle,
   CardDescription,
} from '../../../components/common/SharedStyles'

export function EducationContentPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: programRef, inView: programInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: featureRef, inView: featureInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: benefitRef, inView: benefitInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   return (
      <PageWrapper>
         <ModernHeroSection bgImage={getImageUrl('hero', 'education.jpg')} ref={heroRef}>
            <HeroBackground radialGradient="radial-gradient(circle at 30% 70%, rgba(255, 107, 107, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)" />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaBookOpen /> 교육 내용
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     체계적인 <GradientText>교육 과정</GradientText>
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "실무 경험과 이론의 완벽한 조화로 전문가 양성"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     실무 중심의 전문적인 생활가전 유지보수
                     <br />
                     교육 과정을 제공합니다
                  </HeroDescription>
               </motion.div>
               <HeroImageContainer as={motion.div} variants={slideInRight}>
                  <HeroImagePlaceholder>
                     <FaChalkboardTeacher size={80} />
                     <p>전문 교육 과정</p>
                  </HeroImagePlaceholder>
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         {/* 🚀 1단계: 임팩트 있는 통계 섹션 */}
         <StatisticsSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
            <Container>
               <StatisticsGrid>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>4</StatNumber>
                     <StatLabel>전문 교육 과정</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>300+</StatNumber>
                     <StatLabel>연간 교육생</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>85%</StatNumber>
                     <StatLabel>자격증 취득률</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>95%</StatNumber>
                     <StatLabel>교육 만족도</StatLabel>
                  </StatCard>
               </StatisticsGrid>
            </Container>
         </StatisticsSection>

         <Container>
            {/* 🎯 2단계: 컴팩트한 주요 교육 과정 */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} ref={programRef}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} initial="hidden" animate={programInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     주요 교육 과정
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} initial="hidden" animate={programInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     4가지 전문 자격증 과정을 통한 체계적 교육
                  </SectionSubtitle>
               </SectionHeader>
               <Grid columns={2} style={{ gap: '1.5rem' }}>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $primary>
                        <FaUserGraduate />
                     </CardIcon>
                     <CardTitle>가전제품분해청소관리사</CardTitle>
                     <CardDescription>
                        가전제품의 체계적인 분해 및 청소 기술을 습득하여
                        <br />
                        전문적인 관리 서비스를 제공할 수 있는 역량을 기릅니다
                     </CardDescription>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $secondary>
                        <FaCogs />
                     </CardIcon>
                     <CardTitle>냉난방기 세척서비스 관리사</CardTitle>
                     <CardDescription>
                        냉난방기 시스템의 세척 및 유지보수 기술을 통해
                        <br />
                        효율적인 냉난방 환경을 조성하는 전문가가 됩니다
                     </CardDescription>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $accent>
                        <FaTools />
                     </CardIcon>
                     <CardTitle>에어컨설치 관리사</CardTitle>
                     <CardDescription>
                        에어컨 설치부터 유지보수까지 전 과정을 다루어
                        <br />
                        안전하고 효율적인 설치 서비스를 제공합니다
                     </CardDescription>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $primary>
                        <FaUserGraduate />
                     </CardIcon>
                     <CardTitle>환기청정시스템 관리사</CardTitle>
                     <CardDescription>
                        실내 공기질 개선을 위한 환기청정시스템의
                        <br />
                        설치 및 관리 전문 기술을 습득합니다
                     </CardDescription>
                  </Card>
               </Grid>
            </CompactSection>

            {/* 🔥 3단계: 지그재그 레이아웃으로 교육 특징 */}
            <ZigzagSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} background="linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)" ref={featureRef}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} initial="hidden" animate={featureInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     교육 특징
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} initial="hidden" animate={featureInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     KHAMA만의 차별화된 교육 시스템
                  </SectionSubtitle>
               </SectionHeader>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>현장 전문가 강사진</h3>
                     <p>풍부한 실무 경험을 갖춘 최고의 강사진이 체계적이고 실무 중심의 교육을 진행합니다. 각 분야 전문가들의 노하우를 직접 전수받을 수 있습니다.</p>
                     <ul>
                        <li>15년 이상 경력의 전문 강사진</li>
                        <li>실무 중심의 맞춤형 교육</li>
                        <li>1:1 개별 지도 시스템</li>
                        <li>현장 경험 공유 및 케이스 스터디</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'instructor'), '전문 강사진', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>최신 장비 활용 실습</h3>
                     <p>실제 현장과 유사한 환경에서 최신 가전제품 및 측정 장비를 활용한 실습 기회를 제공합니다. 이론과 실무의 완벽한 조화를 경험하세요.</p>
                     <ul>
                        <li>최신 가전제품 실습 장비</li>
                        <li>전문 측정 및 진단 도구</li>
                        <li>실제 현장 시뮬레이션</li>
                        <li>개인별 실습 기회 보장</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'equipment'), '최신 교육 장비', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>취업 및 창업 연계 지원</h3>
                     <p>우수 교육 수료생에게는 관련 기업 취업 및 창업 컨설팅 기회를 제공합니다. 체계적인 경력 개발 로드맵을 함께 설계합니다.</p>
                     <ul>
                        <li>파트너 기업 취업 연계</li>
                        <li>창업 컨설팅 및 멘토링</li>
                        <li>수료생 네트워킹 모임</li>
                        <li>지속적인 경력 개발 지원</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'career'), '취업 지원', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>
            </ZigzagSection>

            {/* 💎 4단계: 교육 혜택 (컴팩트) */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} ref={benefitRef}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} initial="hidden" animate={benefitInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     교육 과정 혜택
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} initial="hidden" animate={benefitInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     교육 수료 후 지원되는 다양한 혜택
                  </SectionSubtitle>
               </SectionHeader>
               <Grid columns={2}>
                  <Card as={motion.div} variants={slideInLeft} style={{ textAlign: 'center' }}>
                     <CardIcon $primary style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        <FaUserGraduate />
                     </CardIcon>
                     <CardTitle style={{ marginBottom: '1rem' }}>자격증 취득 지원</CardTitle>
                     <CardDescription>
                        각 과정별 민간자격증 취득을 위한
                        <br />
                        체계적인 준비 과정과 응시 지원을 제공합니다
                     </CardDescription>
                  </Card>
                  <Card as={motion.div} variants={slideInRight} style={{ textAlign: 'center' }}>
                     <CardIcon $secondary style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        <FaHandshake />
                     </CardIcon>
                     <CardTitle style={{ marginBottom: '1rem' }}>취업 네트워킹</CardTitle>
                     <CardDescription>
                        관련 업계와의 네트워크를 통한
                        <br />
                        취업 기회 연결 및 경력 개발을 지원합니다
                     </CardDescription>
                  </Card>
               </Grid>
            </CompactSection>

            {/* 🖼️ 5단계: 교육 과정 갤러리 (컴팩트) */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     교육 과정 갤러리
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     생생한 교육 현장과 우수한 교육 환경을 확인해보세요
                  </SectionSubtitle>
               </SectionHeader>

               <ImageGallery>
                  <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'classroom'), '현대적인 강의실', [{ width: 400 }, { width: 800 }])} />
                     <ImageCaption>
                        <h4>현대적인 강의실</h4>
                        <p>최신 교육 장비를 갖춘 쾌적한 학습 환경</p>
                     </ImageCaption>
                  </ImageGalleryItem>
                  <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'practical'), '실습 교육 모습', [{ width: 400 }, { width: 800 }])} />
                     <ImageCaption>
                        <h4>실습 교육</h4>
                        <p>실무 중심의 체험형 교육 프로그램</p>
                     </ImageCaption>
                  </ImageGalleryItem>
                  <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'facility1'), '교육 시설 전경', [{ width: 400 }, { width: 800 }])} />
                     <ImageCaption>
                        <h4>교육 시설 전경</h4>
                        <p>체계적으로 구성된 교육 공간</p>
                     </ImageCaption>
                  </ImageGalleryItem>
                  <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'students'), '수강생들의 열정', [{ width: 400 }, { width: 800 }])} />
                     <ImageCaption>
                        <h4>수강생들의 열정</h4>
                        <p>진지한 학습 분위기와 활발한 토론</p>
                     </ImageCaption>
                  </ImageGalleryItem>
               </ImageGallery>
            </CompactSection>
         </Container>
      </PageWrapper>
   )
}
