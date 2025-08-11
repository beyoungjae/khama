import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { FaBuilding, FaFlask, FaDesktop, FaHome, FaChalkboardTeacher, FaUsers, FaCoffee, FaLock, FaWrench, FaCog, FaShieldAlt, FaTools, FaStar, FaCheckCircle, FaLightbulb, FaGraduationCap } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { getImageUrl, getOptimizedImageProps } from '../../../utils/imageHelpers'
import {
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

export function EducationFacilitiesPage() {
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
                     <FaBuilding /> 교육 시설 안내
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     최첨단 <GradientText>교육 시설</GradientText>
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "전문가 양성을 위한 최적의 교육 환경"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     최신 장비와 쾌적한 학습 환경에서
                     <br />
                     전문적인 기술을 습득할 수 있습니다
                  </HeroDescription>
               </motion.div>
               <HeroImageContainer as={motion.div} variants={slideInRight}>
                  <HeroImagePlaceholder>
                     <FaBuilding size={80} />
                     <p>교육 시설 안내</p>
                  </HeroImagePlaceholder>
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         {/* 🚀 1단계: 교육 시설 통계 섹션 */}
         <StatisticsSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
            <Container>
               <StatisticsGrid>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>6</StatNumber>
                     <StatLabel>전문 실습실</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>200㎡</StatNumber>
                     <StatLabel>총 교육 공간</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>50+</StatNumber>
                     <StatLabel>최신 교육 장비</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>24시간</StatNumber>
                     <StatLabel>시설 이용 지원</StatLabel>
                  </StatCard>
               </StatisticsGrid>
            </Container>
         </StatisticsSection>

         <Container>
            {/* 🎯 2단계: 지그재그 레이아웃으로 전문 실습 환경 */}
            <ZigzagSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} background="linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)">
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     전문 실습 환경
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     실무 중심의 체계적인 교육을 위한 최첨단 실습 시설
                  </SectionSubtitle>
               </SectionHeader>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>다목적 실습실</h3>
                     <p>최신 가전제품 분해 조립 및 고장 진단 실습이 가능한 전문 환경을 제공합니다. 실제 현장과 동일한 조건에서 실습할 수 있습니다.</p>
                     <ul>
                        <li>최신 가전제품 분해 조립 실습</li>
                        <li>고장 진단 및 수리 실습</li>
                        <li>전문 측정 장비 활용</li>
                        <li>안전 작업 환경 구축</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'practical'), '다목적 실습실', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>에어컨 전문 실습장</h3>
                     <p>다양한 종류의 에어컨 설치 및 유지보수 실습을 위한 전용 공간입니다. 실제 설치 환경을 재현한 실습 공간을 제공합니다.</p>
                     <ul>
                        <li>다양한 에어컨 모델 실습</li>
                        <li>설치 및 유지보수 실습</li>
                        <li>냉매 충전 실습</li>
                        <li>성능 테스트 및 점검</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'facility1'), '에어컨 전문 실습장', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>스마트홈 연동 실습</h3>
                     <p>IoT 기반 스마트홈 기기 연동 및 제어 시스템 구축 실습 공간입니다. 미래 기술 트렌드에 맞는 실습 환경을 제공합니다.</p>
                     <ul>
                        <li>IoT 기반 스마트홈 기기 연동</li>
                        <li>제어 시스템 구축 실습</li>
                        <li>네트워크 연결 및 설정</li>
                        <li>스마트 기기 관리 시스템</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'classroom'), '스마트홈 연동 실습', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>
            </ZigzagSection>

            {/* 💎 3단계: 컴팩트한 편의 및 부대 시설 */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     편의 및 부대 시설
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     교육생의 편의와 학습 효율성을 위한 다양한 지원 시설
                  </SectionSubtitle>
               </SectionHeader>
               <CompactGrid columns={4}>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $primary>
                        <FaChalkboardTeacher />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>이론 강의실</CardTitle>
                        <CardDescription>빔프로젝터, 음향 시스템 등 최신 교육 장비를 구비한 체계적 이론 교육 공간</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $secondary>
                        <FaUsers />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>스터디룸</CardTitle>
                        <CardDescription>그룹 스터디 및 개별 학습을 위한 전용 공간으로 집중력 높은 학습 환경 제공</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $accent>
                        <FaCoffee />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>휴게 공간</CardTitle>
                        <CardDescription>교육생 편의를 위한 라운지 및 휴식 공간으로 편안한 쉼 시간과 네트워킹 지원</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $primary>
                        <FaDesktop />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>기타 지원 시설</CardTitle>
                        <CardDescription>사물함, PC 사용 공간, 주차 공간 등 교육생의 편의를 위한 다양한 시설 지원</CardDescription>
                     </CardContent>
                  </Card>
               </CompactGrid>
            </CompactSection>

            {/* 🖼️ 4단계: 교육 시설 갤러리 (컴팩트) */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     교육 시설 갤러리
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     최첨단 교육 시설과 쾌적한 학습 환경을 확인해보세요
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
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'instructor'), '전문 강사진', [{ width: 400 }, { width: 800 }])} />
                     <ImageCaption>
                        <h4>전문 강사진</h4>
                        <p>풍부한 경험을 가진 업계 전문가들의 교육</p>
                     </ImageCaption>
                  </ImageGalleryItem>
                  <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'students'), '교육생들의 학습 모습', [{ width: 400 }, { width: 800 }])} />
                     <ImageCaption>
                        <h4>교육생들의 학습</h4>
                        <p>열정적으로 참여하는 교육생들</p>
                     </ImageCaption>
                  </ImageGalleryItem>
                  <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'facility2'), '휴게 공간', [{ width: 400 }, { width: 800 }])} />
                     <ImageCaption>
                        <h4>휴게 공간</h4>
                        <p>편안한 쉼 시간과 네트워킹 공간</p>
                     </ImageCaption>
                  </ImageGalleryItem>
               </ImageGallery>
            </CompactSection>

            {/* 🔥 5단계: 지그재그 레이아웃으로 시설 운영 원칙 */}
            <ZigzagSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} background="linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%)">
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     시설 운영 원칙
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     안전하고 효율적인 교육 환경 조성을 위한 운영 철학
                  </SectionSubtitle>
               </SectionHeader>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>안전 관리 시스템</h3>
                     <p>안전한 교육 환경을 위해 체계적인 안전 관리 시스템을 운영합니다. 모든 교육생이 안심하고 학습할 수 있는 환경을 제공합니다.</p>
                     <ul>
                        <li>24시간 보안 시스템 운영</li>
                        <li>화재 및 응급상황 대응 체계</li>
                        <li>실습 장비 안전 점검</li>
                        <li>교육생 안전 교육 실시</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'classroom'), '안전 관리 시스템', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>시설 유지보수 & 지원</h3>
                     <p>최상의 교육 환경 유지를 위해 정기적인 점검과 유지보수를 실시하며, 교육생들이 편리하게 시설을 이용할 수 있도록 24시간 지원 시스템을 운영합니다.</p>
                     <ul>
                        <li>정기적인 시설 점검 및 유지보수</li>
                        <li>최신 교육 장비 업데이트</li>
                        <li>24시간 시설 이용 지원</li>
                        <li>교육생 편의 서비스 제공</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'facility1'), '시설 유지보수 & 지원', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>
            </ZigzagSection>

            {/* 💎 6단계: 컴팩트한 시설 특장점 */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     KHAMA 교육 시설 특장점
                  </SectionTitle>
               </SectionHeader>
               <CompactGrid columns={4}>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $primary>
                        <FaShieldAlt />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>안전한 환경</CardTitle>
                        <CardDescription>체계적인 안전 관리 시스템으로 안심하고 학습할 수 있는 환경</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $secondary>
                        <FaTools />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>최신 장비</CardTitle>
                        <CardDescription>업계 최신 트렌드를 반영한 첨단 교육 장비 완비</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $accent>
                        <FaStar />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>쾌적한 공간</CardTitle>
                        <CardDescription>집중력 향상을 위한 최적의 학습 환경 조성</CardDescription>
                     </CardContent>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $primary>
                        <FaCheckCircle />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>24시간 지원</CardTitle>
                        <CardDescription>언제든지 이용 가능한 편리한 시설 지원 시스템</CardDescription>
                     </CardContent>
                  </Card>
               </CompactGrid>
            </CompactSection>

            {/* 🏆 시설 이용 안내 섹션 */}
            <ZigzagSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} background="linear-gradient(135deg, #fff5f5 0%, #fef2f2 100%)">
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     시설 이용 안내
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     교육 시설을 효율적으로 이용하기 위한 안내 사항
                  </SectionSubtitle>
               </SectionHeader>

               <CompactGrid columns={2}>
                  <Card as={motion.div} variants={fadeInScale} style={{ padding: '2rem' }}>
                     <CardTitle style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#ff6b6b' }}>이용 시간 안내</CardTitle>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                           <span style={{ fontWeight: '600' }}>평일</span>
                           <span>09:00 - 22:00</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                           <span style={{ fontWeight: '600' }}>주말</span>
                           <span>09:00 - 18:00</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                           <span style={{ fontWeight: '600' }}>공휴일</span>
                           <span>휴무</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                           <span style={{ fontWeight: '600' }}>특별 실습</span>
                           <span>24시간 예약제</span>
                        </div>
                     </div>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale} style={{ padding: '2rem' }}>
                     <CardTitle style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#ff6b6b' }}>예약 및 문의</CardTitle>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                           <span style={{ fontWeight: '600' }}>시설 예약</span>
                           <span>온라인 예약 시스템</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                           <span style={{ fontWeight: '600' }}>전화 문의</span>
                           <span>1566-3321</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                           <span style={{ fontWeight: '600' }}>이메일</span>
                           <span>facility@khama.or.kr</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                           <span style={{ fontWeight: '600' }}>현장 방문</span>
                           <span>평일 09:00-18:00</span>
                        </div>
                     </div>
                  </Card>
               </CompactGrid>
            </ZigzagSection>
         </Container>
      </PageWrapper>
   )
}
