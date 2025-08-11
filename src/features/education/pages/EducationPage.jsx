import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { Link } from 'react-router-dom'
import { FaBullseye, FaWrench, FaChalkboardTeacher, FaGraduationCap, FaUsers, FaCertificate, FaTrophy, FaClock, FaCheckCircle } from 'react-icons/fa'
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

export function EducationPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.05 })

   return (
      <PageWrapper>
         <ModernHeroSection bgImage={getImageUrl('hero', 'education.jpg')} ref={heroRef}>
            <HeroBackground radialGradient="radial-gradient(circle at 20% 80%, rgba(255, 107, 107, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)" />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaGraduationCap /> 전문 교육 과정
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     KHAMA <GradientText>교육원</GradientText>
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "이론과 실무를 겸비한 전문가 양성의 요람"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     체계적인 이론 및 실습 교육을 통해
                     <br />
                     생활가전 유지보수 전문가로 성장할 기회를 제공합니다
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
                     <StatLabel>전문 자격증 과정</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>95%</StatNumber>
                     <StatLabel>교육 만족도</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>200+</StatNumber>
                     <StatLabel>연간 교육생</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>85%</StatNumber>
                     <StatLabel>자격증 취득률</StatLabel>
                  </StatCard>
               </StatisticsGrid>
            </Container>
         </StatisticsSection>

         <Container>
            {/* 🎯 2단계: 컴팩트한 교육 개요 */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     교육 개요
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     체계적이고 전문적인 교육 시스템으로 여러분을 전문가로 양성합니다
                  </SectionSubtitle>
               </SectionHeader>
               <CompactGrid columns={3}>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $primary>
                        <FaBullseye />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>교육 목적</CardTitle>
                        <CardDescription>가전제품 유지보수 분야의 이론과 실무 능력을 겸비한 전문 인력 양성</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $secondary>
                        <FaWrench />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>교육 특징</CardTitle>
                        <CardDescription>최신 기술 동향 반영, 현장 중심 실습, 소수 정예 맞춤 교육</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $accent>
                        <FaTrophy />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>기대 효과</CardTitle>
                        <CardDescription>체계적 교육을 통한 전문 기술 습득과 자격증 취득으로 경쟁력 향상</CardDescription>
                     </CardContent>
                  </Card>
               </CompactGrid>
            </CompactSection>

            {/* 🔥 3단계: 지그재그 레이아웃으로 교육 과정 */}
            <ZigzagSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} background="linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)">
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     전문 교육 과정
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     4개 전문 분야별 맞춤형 교육 프로그램
                  </SectionSubtitle>
               </SectionHeader>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>
                        <Link to="/certification/appliance-cleaning" style={{ textDecoration: 'none', color: 'inherit' }}>
                           가전제품분해청소관리사
                        </Link>
                     </h3>
                     <p>가전제품의 분해청소 전문가 양성 과정으로, 에어컨, 냉장고, 세탁기 등의 체계적 청소 기법을 학습합니다.</p>
                     <ul>
                        <li>전문 분해청소 기법 마스터</li>
                        <li>안전한 작업 절차 교육</li>
                        <li>친환경 세제 활용법</li>
                        <li>고객 서비스 노하우</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'appliance.cleaning'), '가전제품 분해청소 교육', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>
                        <Link to="/certification/aircon-service" style={{ textDecoration: 'none', color: 'inherit' }}>
                           냉난방기 세척서비스 관리사
                        </Link>
                     </h3>
                     <p>냉난방기 전문 세척 관리사 양성 과정으로, 시스템 청소와 유지보수 기법을 체계적으로 교육합니다.</p>
                     <ul>
                        <li>냉난방기 구조 이해</li>
                        <li>전문 세척 장비 운용</li>
                        <li>시스템 진단 및 점검</li>
                        <li>예방 정비 계획 수립</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'aircon.service'), '냉난방기 세척 교육', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>
                        <Link to="/certification/aircon-installation" style={{ textDecoration: 'none', color: 'inherit' }}>
                           에어컨설치 관리사
                        </Link>
                     </h3>
                     <p>에어컨 설치 전문가 양성 과정으로, 안전하고 효율적인 설치 기법과 점검 방법을 학습합니다.</p>
                     <ul>
                        <li>전문 설치 기법</li>
                        <li>냉매 충전 실무</li>
                        <li>배관 연결 기술</li>
                        <li>성능 테스트 방법</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'aircon.installation'), '에어컨 설치 교육', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>
                        <Link to="/certification/ventilation-system" style={{ textDecoration: 'none', color: 'inherit' }}>
                           환기청정시스템 관리사
                        </Link>
                     </h3>
                     <p>환기청정시스템 전문가 양성 과정으로, 실내 공기질 관리와 시스템 최적화 방법을 교육합니다.</p>
                     <ul>
                        <li>공기질 측정 및 분석</li>
                        <li>환기 시스템 설계</li>
                        <li>필터 교체 및 관리</li>
                        <li>에너지 효율 최적화</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'aircon.maintenance'), '환기청정시스템 교육', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>
            </ZigzagSection>

            {/* 💎 4단계: 특장점 (컴팩트) */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     KHAMA 교육원 특장점
                  </SectionTitle>
               </SectionHeader>
               <CompactGrid columns={4}>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $primary>
                        <FaCertificate />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>체계적 커리큘럼</CardTitle>
                        <CardDescription>기초부터 전문까지 단계별 교육과정</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $secondary>
                        <FaUsers />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>현장 전문가 강사진</CardTitle>
                        <CardDescription>풍부한 실무 경험의 전문가 교육</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $accent>
                        <FaClock />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>유연한 교육 일정</CardTitle>
                        <CardDescription>개인 일정에 맞는 맞춤형 교육</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $primary>
                        <FaCheckCircle />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>높은 취업률</CardTitle>
                        <CardDescription>교육 후 취업 연계 서비스 제공</CardDescription>
                     </CardContent>
                  </Card>
               </CompactGrid>
            </CompactSection>

            {/* 🖼️ 5단계: 교육 시설 갤러리 (컴팩트) */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     교육 시설 및 환경
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     최신 장비와 쾌적한 환경에서 전문적인 기술을 습득하세요
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
               </ImageGallery>
            </CompactSection>

            {/* 🎓 교육 과정별 상세 정보 */}
            <ZigzagSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} background="linear-gradient(135deg, #fff5f5 0%, #fef2f2 100%)">
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     교육 과정별 상세 정보
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     각 자격증별 교육 기간, 비용, 일정을 확인하세요
                  </SectionSubtitle>
               </SectionHeader>

               <CompactGrid columns={2}>
                  <Card as={motion.div} variants={fadeInScale} style={{ padding: '2rem' }}>
                     <CardTitle style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#ff6b6b' }}>기본 과정 (2급)</CardTitle>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                           <span style={{ fontWeight: '600' }}>교육 기간</span>
                           <span>4주 (80시간)</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                           <span style={{ fontWeight: '600' }}>교육 비용</span>
                           <span>350,000원</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                           <span style={{ fontWeight: '600' }}>수업 시간</span>
                           <span>평일 19:00-22:00</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                           <span style={{ fontWeight: '600' }}>정원</span>
                           <span>20명 (소수정예)</span>
                        </div>
                     </div>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale} style={{ padding: '2rem' }}>
                     <CardTitle style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#ff6b6b' }}>전문 과정 (1급)</CardTitle>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                           <span style={{ fontWeight: '600' }}>교육 기간</span>
                           <span>6주 (120시간)</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                           <span style={{ fontWeight: '600' }}>교육 비용</span>
                           <span>550,000원</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                           <span style={{ fontWeight: '600' }}>수업 시간</span>
                           <span>주말 09:00-18:00</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                           <span style={{ fontWeight: '600' }}>정원</span>
                           <span>15명 (집중교육)</span>
                        </div>
                     </div>
                  </Card>
               </CompactGrid>
            </ZigzagSection>

            {/* 📅 교육 일정 및 신청 안내 */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     교육 일정 및 신청 안내
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     2025년 상반기 교육 일정을 확인하고 지금 신청하세요
                  </SectionSubtitle>
               </SectionHeader>
               <CompactGrid columns={1}>
                  <Card
                     as={motion.div}
                     variants={fadeInScale}
                     style={{
                        padding: '3rem 2rem',
                        background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
                        color: 'white',
                        textAlign: 'center',
                     }}
                  >
                     <CardTitle style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'white' }}>2025년 1기 모집 중!</CardTitle>
                     <CardDescription style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)' }}>선착순 모집으로 조기 마감될 수 있습니다. 지금 바로 신청하세요!</CardDescription>
                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '10px' }}>
                           <div style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>접수 기간</div>
                           <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>2025.01.01 ~ 01.31</div>
                        </div>
                        <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '10px' }}>
                           <div style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>교육 시작</div>
                           <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>2025.02.10 (월)</div>
                        </div>
                        <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '10px' }}>
                           <div style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>남은 자리</div>
                           <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>12석 / 20석</div>
                        </div>
                     </div>
                     <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button
                           style={{
                              padding: '1rem 2rem',
                              background: 'white',
                              color: '#ff6b6b',
                              border: 'none',
                              borderRadius: '25px',
                              fontSize: '1.1rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                           }}
                        >
                           지금 신청하기
                        </button>
                        <button
                           style={{
                              padding: '1rem 2rem',
                              background: 'transparent',
                              color: 'white',
                              border: '2px solid white',
                              borderRadius: '25px',
                              fontSize: '1.1rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                           }}
                        >
                           상담 신청
                        </button>
                     </div>
                  </Card>
               </CompactGrid>
            </CompactSection>
         </Container>
      </PageWrapper>
   )
}
