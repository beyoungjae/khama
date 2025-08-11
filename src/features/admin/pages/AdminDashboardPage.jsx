import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { FaUsers, FaClipboardList, FaFileSignature, FaCertificate, FaChartLine, FaTachometerAlt, FaCogs, FaShieldAlt, FaDatabase } from 'react-icons/fa'
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
   Section,
   SectionHeader,
   SectionTitle,
   SectionSubtitle,
   Grid,
   Card,
   CardIcon,
   CardTitle,
   CardDescription,
   ImageGallery,
   ImageGalleryItem,
   ImageCaption,
   ResponsiveImage,
} from '../../../components/common/SharedStyles'

export function AdminDashboardPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   // TODO: 실제 데이터 가져오기 (회원 수, 신청 건수 등)
   const stats = {
      users: 125, // 예시 데이터
      applications: 32,
      exams: 15,
      certificates: 88,
   }

   const statItems = [
      {
         icon: FaUsers,
         value: stats.users,
         label: '총 회원 수',
         color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      {
         icon: FaClipboardList,
         value: stats.applications,
         label: '신규 신청 건수',
         color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      },
      {
         icon: FaFileSignature,
         value: stats.exams,
         label: '시험 접수 현황',
         color: 'linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%)',
      },
      {
         icon: FaCertificate,
         value: stats.certificates,
         label: '발급된 자격증',
         color: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      },
   ]

   return (
      <PageWrapper>
         <ModernHeroSection gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" ref={heroRef}>
            <HeroBackground />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaTachometerAlt /> 관리자
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     <GradientText>관리자</GradientText> 대시보드
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "KHAMA 관리 시스템에 오신 것을 환영합니다"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     시스템 현황을 한눈에 확인하고 효율적으로 관리하세요
                  </HeroDescription>
               </motion.div>
            </HeroContainer>
         </ModernHeroSection>

         <Container>
            <Section ref={statsRef}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} initial="hidden" animate={statsInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     <FaChartLine /> 시스템 현황
                  </SectionTitle>
               </SectionHeader>

               <Grid columns={4} as={motion.div} initial="hidden" animate={statsInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  {statItems.map((item, index) => (
                     <Card key={index} as={motion.div} variants={fadeInScale}>
                        <CardIcon $gradient={item.color}>
                           <item.icon />
                        </CardIcon>
                        <CardTitle style={{ fontSize: '2.2rem', fontWeight: '700', lineHeight: '1.2' }}>{item.value}</CardTitle>
                        <CardDescription style={{ fontSize: '0.95rem', opacity: '0.8' }}>{item.label}</CardDescription>
                     </Card>
                  ))}
               </Grid>

               {/* 시스템 관리 이미지 갤러리 */}
               <Section style={{ marginTop: '4rem' }}>
                  <SectionHeader>
                     <SectionTitle as={motion.h3} initial="hidden" animate={statsInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                        <FaCogs /> 시스템 관리 현황
                     </SectionTitle>
                     <SectionSubtitle as={motion.p} initial="hidden" animate={statsInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                        KHAMA 관리 시스템의 주요 기능과 현황을 확인하세요
                     </SectionSubtitle>
                  </SectionHeader>

                  <ImageGallery as={motion.div} variants={staggerContainer}>
                     <ImageGalleryItem variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('common', 'notice'), '사용자 관리 시스템', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>사용자 관리</h4>
                           <p>회원 가입, 권한 관리, 활동 현황을 체계적으로 관리합니다</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'classroom'), '교육 및 시험 관리', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>교육 및 시험 관리</h4>
                           <p>교육 과정 운영, 시험 일정 관리, 성적 처리를 통합 관리합니다</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('products', 'certification'), '자격증 발급 관리', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>자격증 발급 관리</h4>
                           <p>자격증 발급, 갱신, 조회 서비스를 안전하게 관리합니다</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                  </ImageGallery>
               </Section>
            </Section>
         </Container>
      </PageWrapper>
   )
}
