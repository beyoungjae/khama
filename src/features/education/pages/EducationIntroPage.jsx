import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { FaGraduationCap, FaChalkboardTeacher, FaUsers, FaCertificate, FaCheckCircle, FaLightbulb, FaTrophy, FaHandshake, FaClock, FaPhone, FaEnvelope, FaComments } from 'react-icons/fa'
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
   ContentWithImage,
   ContentText,
   ContentImage,
} from '../../../components/common/SharedStyles'

export function EducationIntroPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: overviewRef, inView: overviewInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   return (
      <PageWrapper>
         <ModernHeroSection bgImage={getImageUrl('hero', 'education.jpg')} ref={heroRef}>
            <HeroBackground radialGradient="radial-gradient(circle at 20% 80%, rgba(255, 107, 107, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)" />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaGraduationCap /> 교육원 소개
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     KHAMA <GradientText>교육원</GradientText>
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "전문 인력 양성의 요람, 미래를 여는 전문 교육"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     최고의 교육 환경에서 미래를 준비하세요
                     <br />
                     전문 인력 양성을 위한 체계적인 교육 시스템
                  </HeroDescription>
               </motion.div>
               <HeroImageContainer as={motion.div} variants={slideInRight}>
                  <HeroImagePlaceholder>
                     <FaGraduationCap size={80} />
                     <p>KHAMA 교육원</p>
                  </HeroImagePlaceholder>
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         {/* 🚀 1단계: 교육원 성과 통계 섹션 */}
         <StatisticsSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
            <Container>
               <StatisticsGrid>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>15년</StatNumber>
                     <StatLabel>교육원 운영 경력</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>3,000+</StatNumber>
                     <StatLabel>누적 교육생 수</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>95%</StatNumber>
                     <StatLabel>교육생 만족도</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>85%</StatNumber>
                     <StatLabel>취업 연계 성공률</StatLabel>
                  </StatCard>
               </StatisticsGrid>
            </Container>
         </StatisticsSection>

         <Container>
            {/* 🎯 2단계: 지그재그 레이아웃으로 교육원 개요 */}
            <ZigzagSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} background="linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)">
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     교육원 개요
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     전문 인력 양성을 위한 KHAMA의 핵심 교육 기관
                  </SectionSubtitle>
               </SectionHeader>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>교육원 설립 목적</h3>
                     <p>한국생활가전유지관리협회(KHAMA) 부설 교육원은 생활가전 유지보수 분야의 전문 인력 양성을 목표로 설립되었습니다.</p>
                     <ul>
                        <li>전문 인력 양성의 체계적 시스템 구축</li>
                        <li>이론과 실무를 겸비한 인재 배출</li>
                        <li>현장 중심의 교육 과정 운영</li>
                        <li>업계 표준 교육 프로그램 제공</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'classroom'), '교육원 설립 목적', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>지속적인 발전과 혁신</h3>
                     <p>급변하는 기술 환경에 발맞춰 교육 과정을 지속적으로 개발하고 있으며, 교육생들이 현장에서 요구하는 핵심 역량을 갖출 수 있도록 지원합니다.</p>
                     <ul>
                        <li>최신 기술 트렌드 반영 교육</li>
                        <li>현장 요구 역량 중심 커리큘럼</li>
                        <li>자격 취득 및 취업 연계 서비스</li>
                        <li>지속적인 교육 과정 개선</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'practical'), '지속적인 발전과 혁신', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>
            </ZigzagSection>

            {/* 💎 3단계: 컴팩트한 교육원 특징 */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     교육원 특징
                  </SectionTitle>
               </SectionHeader>
               <CompactGrid columns={4}>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $primary>
                        <FaChalkboardTeacher />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>전문 강사진</CardTitle>
                        <CardDescription>현장 경험이 풍부한 최고의 강사진이 체계적이고 실무 중심의 교육을 제공합니다</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $secondary>
                        <FaUsers />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>소수 정예 교육</CardTitle>
                        <CardDescription>개별 맞춤형 교육을 통해 교육생 한 명 한 명의 성장을 지원합니다</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $accent>
                        <FaLightbulb />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>최신 기술 교육</CardTitle>
                        <CardDescription>스마트홈, IoT 등 최신 기술 트렌드를 반영한 교육 과정을 제공합니다</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $primary>
                        <FaTrophy />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>높은 성취도</CardTitle>
                        <CardDescription>체계적인 교육과 지원을 통해 높은 자격증 취득률과 취업률을 달성합니다</CardDescription>
                     </CardContent>
                  </Card>
               </CompactGrid>
            </CompactSection>

            {/* 🔥 4단계: 지그재그 레이아웃으로 교육원의 약속 */}
            <ZigzagSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} background="linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%)">
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     교육원의 약속
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     교육생 성공을 위한 KHAMA 교육원의 확고한 약속
                  </SectionSubtitle>
               </SectionHeader>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>실무 중심 교육</h3>
                     <p>실무 중심의 차별화된 교육 커리큘럼을 제공하여 현장에서 바로 활용할 수 있는 실력을 기릅니다.</p>
                     <ul>
                        <li>현장 적용 가능한 실무 교육</li>
                        <li>차별화된 교육 커리큘럼</li>
                        <li>실습 중심의 체험형 학습</li>
                        <li>즉시 활용 가능한 기술 습득</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'instructor'), '실무 중심 교육 약속', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>지속적 개선 & 취업 지원</h3>
                     <p>최신 기술 트렌드를 반영한 지속적인 교육 과정 개선과 교육생의 성공적인 취업 및 경력 개발을 적극 지원합니다.</p>
                     <ul>
                        <li>최신 기술 트렌드 반영</li>
                        <li>지속적인 교육 과정 개선</li>
                        <li>취업 연계 서비스 제공</li>
                        <li>경력 개발 지원 프로그램</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'students'), '지속적 개선 & 취업 지원', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>
            </ZigzagSection>

            {/* 🖼️ 5단계: 교육원 시설 갤러리 (컴팩트) */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     교육원 시설 안내
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     최첨단 시설과 쾌적한 환경에서 전문 교육을 받으세요
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
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'instructor'), '전문 강사진', [{ width: 400 }, { width: 800 }])} />
                     <ImageCaption>
                        <h4>전문 강사진</h4>
                        <p>풍부한 경험을 가진 업계 전문가들의 교육</p>
                     </ImageCaption>
                  </ImageGalleryItem>
               </ImageGallery>
            </CompactSection>

            {/* 💎 6단계: 컴팩트한 교육 지원 서비스 */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     교육 지원 서비스
                  </SectionTitle>
               </SectionHeader>
               <CompactGrid columns={3}>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $primary>
                        <FaHandshake />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>취업 연계 서비스</CardTitle>
                        <CardDescription>협력 업체와의 네트워크를 통한 취업 기회 제공 및 경력 개발 지원</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $secondary>
                        <FaCertificate />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>자격증 취득 지원</CardTitle>
                        <CardDescription>체계적인 자격증 취득 과정과 시험 대비 집중 교육 제공</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $accent>
                        <FaClock />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>평생 교육 지원</CardTitle>
                        <CardDescription>수료 후에도 지속적인 기술 지원과 업데이트 교육 제공</CardDescription>
                     </CardContent>
                  </Card>
               </CompactGrid>
            </CompactSection>

            {/* 🏆 교육원 성과 및 인증 섹션 */}
            <ZigzagSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} background="linear-gradient(135deg, #fff5f5 0%, #fef2f2 100%)">
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     교육원 성과 및 인증
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     KHAMA 교육원의 우수한 성과와 공식 인증 현황
                  </SectionSubtitle>
               </SectionHeader>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>정부 인증 교육기관</h3>
                     <p>고용노동부 및 중소벤처기업부로부터 공식 인증받은 전문 교육기관으로, 국가 차원에서 인정받는 교육 품질을 보장합니다.</p>
                     <ul>
                        <li>고용노동부 직업능력개발훈련기관 인증</li>
                        <li>중소벤처기업부 기술교육원 지정</li>
                        <li>한국산업인력공단 협력기관</li>
                        <li>ISO 9001 품질경영시스템 인증</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('association', 'building'), '정부 인증 교육기관', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>우수한 교육 성과</h3>
                     <p>체계적인 교육 시스템과 전문 강사진을 통해 업계 최고 수준의 교육 성과를 달성하고 있습니다.</p>
                     <ul>
                        <li>자격증 취득률 85% (업계 평균 대비 20% 높음)</li>
                        <li>교육생 만족도 95% 이상 지속 유지</li>
                        <li>취업 연계 성공률 78% 달성</li>
                        <li>수료생 창업 성공률 45% 기록</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'students'), '우수한 교육 성과', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>
            </ZigzagSection>

            {/* 📞 교육 상담 및 문의 섹션 */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     교육 상담 및 문의
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     궁금한 점이 있으시면 언제든지 연락해주세요
                  </SectionSubtitle>
               </SectionHeader>
               <CompactGrid columns={2}>
                  <Card
                     as={motion.div}
                     variants={slideInLeft}
                     style={{
                        padding: '2rem',
                        background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
                        color: 'white',
                     }}
                  >
                     <CardTitle style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.3rem' }}>전화 상담</CardTitle>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                           <div
                              style={{
                                 width: '50px',
                                 height: '50px',
                                 background: 'rgba(255, 255, 255, 0.2)',
                                 borderRadius: '50%',
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                              }}
                           >
                              <FaPhone />
                           </div>
                           <div>
                              <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>1566-3321</div>
                              <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>평일 09:00 - 18:00</div>
                           </div>
                        </div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.9, lineHeight: '1.6' }}>교육 과정, 일정, 비용 등 모든 궁금한 사항에 대해 친절하게 안내해드립니다.</div>
                     </div>
                  </Card>
                  <Card as={motion.div} variants={slideInRight} style={{ padding: '2rem' }}>
                     <CardTitle style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>온라인 문의</CardTitle>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '10px' }}>
                           <div
                              style={{
                                 width: '50px',
                                 height: '50px',
                                 background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
                                 borderRadius: '50%',
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 color: 'white',
                              }}
                           >
                              <FaEnvelope />
                           </div>
                           <div>
                              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>이메일 문의</div>
                              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>khama@example.com</div>
                           </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '10px' }}>
                           <div
                              style={{
                                 width: '50px',
                                 height: '50px',
                                 background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
                                 borderRadius: '50%',
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 color: 'white',
                              }}
                           >
                              <FaComments />
                           </div>
                           <div>
                              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>온라인 상담</div>
                              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>실시간 채팅 상담</div>
                           </div>
                        </div>
                     </div>
                  </Card>
               </CompactGrid>
            </CompactSection>
         </Container>
      </PageWrapper>
   )
}
