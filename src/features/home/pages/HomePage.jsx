import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { getNotices } from '@/services/noticeService'
import { useModal } from '@/contexts/ModalContext'
import { FaBook, FaUserGraduate, FaUsers, FaHeadset, FaAward, FaSnowflake, FaCalendar, FaAirFreshener, FaBell, FaArrowRight, FaPlay } from 'react-icons/fa'
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
   StatisticsSection,
   StatisticsGrid,
   StatNumber,
   StatLabel,
   StatCard,
   CompactSection,
   ZigzagSection,
   ZigzagLayout,
   ZigzagContent,
   ZigzagImage,
   SectionHeader,
   SectionTitle,
   SectionSubtitle,
   Grid,
   Card,
   CardIcon,
   CardContent,
   CardTitle,
   CardDescription,
   ResponsiveImage,
} from '../../../components/common/SharedStyles'

// 배너 문구 및 이미지 데이터
const banners = [
   {
      title: 'KHAMA',
      subtitle: '체계적이고 표준화된 가전제품 유지관리 기술 개발',
      image: getImageUrl('hero', 'banner-background.jpg'),
   },
   {
      title: 'KHAMA',
      subtitle: '가전제품 유지관리 산업의 발전과 전문성 향상에 기여',
      image: getImageUrl('hero', 'banner-background2.jpg'),
   },
   {
      title: 'KHAMA',
      subtitle: '전문인력 양성 및 훈련과정 개발',
      image: getImageUrl('hero', 'banner-background3.jpg'),
   },
]

// 핵심 서비스 데이터
const features = [
   { icon: <FaBook />, title: '기술의 표준화 연구', description: '체계적이고 표준화된 유지관리 기술 연구', link: '/association/purpose' },
   { icon: <FaUserGraduate />, title: '창업지원', description: '창업컨설팅 및 멘토링 프로그램 운영', link: '/education/content' },
   { icon: <FaUsers />, title: '전문인력양성', description: '기술수준 향상 및 국제 경쟁력 강화', link: '/education/goal' },
   { icon: <FaHeadset />, title: '고객만족혁신', description: '소비자 불만 접수 및 유지관리 정보제공', link: '/notice' },
]

// 자격증 목록 데이터
const certifications = [
   {
      icon: <FaAward />,
      name: '가전제품분해청소관리사',
      description: '세탁기, 에어컨, 공기청정기 등 가전제품 분해 청소 전문가',
      link: '/certification/appliance-cleaning',
      image: getImageUrl('certifications', 'appliance.work'),
   },
   {
      icon: <FaSnowflake />,
      name: '냉난방기 세척서비스 관리사',
      description: '냉난방기 분해조립, 내외부 청소 및 세척, 유지보수 전문가',
      link: '/certification/air-conditioner-service',
      image: getImageUrl('certifications', 'aircon.service'),
   },
   {
      icon: <FaCalendar />,
      name: '에어컨설치 관리사',
      description: '에어컨 및 공조기, 실외기 설치 전문가',
      link: '/certification/air-conditioner-installation',
      image: getImageUrl('certifications', 'aircon.installation'),
   },
   {
      icon: <FaAirFreshener />,
      name: '환기청정시스템 관리사',
      description: '실내 환기와 청정, 새집증후군 공기 정화 전문가',
      link: '/certification/ventilation-system',
      image: getImageUrl('certifications', 'ventilation.system'),
   },
]

export function HomePage() {
   const [notices, setNotices] = useState([])
   const [currentBannerIndex, setCurrentBannerIndex] = useState(0)
   const { openModal } = useModal()

   // Intersection Observer 훅들
   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.05 })

   // 배너 자동 전환
   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentBannerIndex((prev) => (prev + 1) % banners.length)
      }, 5000)
      return () => clearInterval(interval)
   }, [])

   // 공지사항 데이터 로드
   useEffect(() => {
      const loadNotices = async () => {
         try {
            const data = await getNotices()
            setNotices(data.slice(0, 3))
         } catch (error) {
            console.error('공지사항 로드 실패:', error)
         }
      }
      loadNotices()
   }, [])

   const openContactModal = () => {
      openModal('contact-form', {
         title: '문의하기',
         onConfirm: (data) => console.log('문의 데이터:', data),
      })
   }

   const currentBanner = banners[currentBannerIndex]

   return (
      <PageWrapper>
         {/* 🚀 Hero 섹션 - 동적 배경 전환 */}
         <ModernHeroSection ref={heroRef} style={{ position: 'relative', overflow: 'hidden' }}>
            {/* 배경 이미지 애니메이션 */}
            <AnimatePresence mode="wait">
               <motion.div
                  key={currentBannerIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  style={{
                     position: 'absolute',
                     inset: 0,
                     backgroundImage: `url(${currentBanner.image})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     backgroundAttachment: 'fixed',
                  }}
               />
            </AnimatePresence>
            <HeroBackground radialGradient="radial-gradient(circle at 20% 80%, rgba(255, 107, 107, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)" />

            {/* 배너 콘텐츠 애니메이션 */}
            <HeroContainer>
               <AnimatePresence mode="wait">
                  <motion.div key={currentBannerIndex} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
                     <HeroBadge as={motion.div} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
                        <FaPlay /> 한국생활가전유지관리협회
                     </HeroBadge>

                     <HeroTitle as={motion.h1} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
                        <GradientText>{currentBanner.title}</GradientText>
                     </HeroTitle>

                     <HeroSubtitle as={motion.p} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
                        "{currentBanner.subtitle}"
                     </HeroSubtitle>

                     <HeroDescription as={motion.p} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
                        생활가전 유지관리 전문가 양성과
                        <br />
                        산업 발전을 선도하는 협회입니다
                     </HeroDescription>

                     <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.8 }} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                        <Button as={Link} to="/education" variant="primary" size="large">
                           교육 과정 알아보기
                        </Button>
                        <Button onClick={openContactModal} variant="outline" size="large">
                           문의하기
                        </Button>
                     </motion.div>
                  </motion.div>
               </AnimatePresence>

               <HeroImageContainer as={motion.div} initial={{ opacity: 0, x: 50 }} animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ delay: 0.5, duration: 1 }}>
                  <HeroImagePlaceholder>
                     <FaAward size={80} />
                     <p>전문가 양성 협회</p>
                  </HeroImagePlaceholder>
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         {/* 📊 통계 섹션 */}
         <StatisticsSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
            <Container>
               <StatisticsGrid>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>4</StatNumber>
                     <StatLabel>전문 자격증 과정</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>15+</StatNumber>
                     <StatLabel>년간 운영 경험</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>500+</StatNumber>
                     <StatLabel>연간 교육 수료생</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>85%</StatNumber>
                     <StatLabel>자격증 취득률</StatLabel>
                  </StatCard>
               </StatisticsGrid>
            </Container>
         </StatisticsSection>

         <Container>
            {/* 🎯 핵심 서비스 섹션 */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     KHAMA 핵심 사업
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     생활가전 유지관리 산업 발전을 위한 4가지 핵심 사업 영역
                  </SectionSubtitle>
               </SectionHeader>
               <Grid columns={4}>
                  {features.map((feature, index) => (
                     <Card key={index} as={motion.div} variants={fadeInScale}>
                        <CardIcon $primary>{feature.icon}</CardIcon>
                        <CardContent>
                           <CardTitle>{feature.title}</CardTitle>
                           <CardDescription>{feature.description}</CardDescription>
                        </CardContent>
                        <Link to={feature.link} style={{ marginTop: '1rem', color: '#ff6b6b', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                           자세히 보기 <FaArrowRight size={12} />
                        </Link>
                     </Card>
                  ))}
               </Grid>
            </CompactSection>

            {/* 🔥 자격증 소개 - 지그재그 레이아웃 */}
            <ZigzagSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} background="linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)">
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     전문 자격증 과정
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     체계적인 교육을 통해 전문성을 인정받는 4가지 자격증
                  </SectionSubtitle>
               </SectionHeader>

               {certifications.map((cert, index) => (
                  <ZigzagLayout key={index} as={motion.div} variants={fadeInScale}>
                     <ZigzagContent>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                           <CardIcon $primary style={{ marginRight: '1rem', fontSize: '2rem' }}>
                              {cert.icon}
                           </CardIcon>
                           <h3>{cert.name}</h3>
                        </div>
                        <p>{cert.description}</p>
                        <div style={{ marginTop: '1.5rem' }}>
                           <Link to={cert.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', backgroundColor: '#ff6b6b', color: 'white', borderRadius: '25px', textDecoration: 'none', fontWeight: '600' }}>
                              자격증 정보 보기 <FaArrowRight size={14} />
                           </Link>
                        </div>
                     </ZigzagContent>
                     <ZigzagImage>
                        <ResponsiveImage {...getOptimizedImageProps(cert.image, cert.name, [{ width: 500 }, { width: 800 }])} />
                     </ZigzagImage>
                  </ZigzagLayout>
               ))}
            </ZigzagSection>

            {/* 💎 협회 소개 섹션 */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     KHAMA 소개
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     생활가전 유지관리 전문가 양성을 위한 선도 기관
                  </SectionSubtitle>
               </SectionHeader>
               <Grid columns={3}>
                  <Card as={motion.div} variants={slideInLeft}>
                     <CardIcon $secondary>
                        <FaBook />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>설립 목적</CardTitle>
                        <CardDescription>생활가전 유지관리 기술의 표준화와 전문인력 양성을 통한 산업 발전</CardDescription>
                     </CardContent>
                     <Link to="/association/purpose" style={{ marginTop: '1rem', color: '#ff6b6b', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                        자세히 보기 <FaArrowRight size={12} />
                     </Link>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $accent>
                        <FaUsers />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>인사말</CardTitle>
                        <CardDescription>회장님의 메시지와 협회의 비전을 확인해보세요</CardDescription>
                     </CardContent>
                     <Link to="/association/greeting" style={{ marginTop: '1rem', color: '#ff6b6b', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                        자세히 보기 <FaArrowRight size={12} />
                     </Link>
                  </Card>
                  <Card as={motion.div} variants={slideInRight}>
                     <CardIcon $primary>
                        <FaHeadset />
                     </CardIcon>
                     <CardContent>
                        <CardTitle>오시는 길</CardTitle>
                        <CardDescription>협회 위치와 찾아오시는 방법을 안내해드립니다</CardDescription>
                     </CardContent>
                     <Link to="/association/location" style={{ marginTop: '1rem', color: '#ff6b6b', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                        자세히 보기 <FaArrowRight size={12} />
                     </Link>
                  </Card>
               </Grid>
            </CompactSection>

            {/* 📢 공지사항 섹션 */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     <FaBell /> 최신 공지사항
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     협회의 중요한 소식과 공지사항을 확인하세요
                  </SectionSubtitle>
               </SectionHeader>
               <Grid columns={1}>
                  <Card as={motion.div} variants={fadeInScale} style={{ padding: '2rem' }}>
                     {notices.length > 0 ? (
                        <div>
                           {notices.map((notice, index) => (
                              <div key={notice.id} style={{ padding: '1rem 0', borderBottom: index < notices.length - 1 ? '1px solid #e2e8f0' : 'none' }}>
                                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Link to={`/notice/${notice.id}`} style={{ textDecoration: 'none', color: '#1a202c', fontSize: '1.1rem', fontWeight: '600' }}>
                                       {notice.title}
                                    </Link>
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>{new Date(notice.createdAt).toLocaleDateString()}</span>
                                 </div>
                                 <p style={{ marginTop: '0.5rem', color: '#64748b', fontSize: '0.95rem' }}>{notice.content.length > 100 ? `${notice.content.substring(0, 100)}...` : notice.content}</p>
                              </div>
                           ))}
                           <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                              <Button as={Link} to="/notice" variant="outline">
                                 공지사항 더보기
                              </Button>
                           </div>
                        </div>
                     ) : (
                        <div style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                           <FaBell size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                           <p>등록된 공지사항이 없습니다.</p>
                        </div>
                     )}
                  </Card>
               </Grid>
            </CompactSection>

            {/* 🏆 성공 스토리 섹션 */}
            <ZigzagSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} background="linear-gradient(135deg, #fff5f5 0%, #fef2f2 100%)">
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     성공 스토리
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     KHAMA와 함께 성장한 전문가들의 이야기
                  </SectionSubtitle>
               </SectionHeader>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>김○○ 수료생</h3>
                     <p>"KHAMA 교육을 통해 가전제품분해청소관리사 자격을 취득하고, 현재 성공적으로 창업하여 운영하고 있습니다. 체계적인 교육과 실무 중심의 커리큘럼이 큰 도움이 되었습니다."</p>
                     <ul>
                        <li>교육 수료 후 3개월 만에 창업 성공</li>
                        <li>월 평균 매출 300만원 달성</li>
                        <li>고객 만족도 98% 유지</li>
                        <li>직원 2명 고용으로 사업 확장</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'appliance.work'), '성공 스토리', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>

               <ZigzagLayout as={motion.div} variants={fadeInScale}>
                  <ZigzagContent>
                     <h3>박○○ 수료생</h3>
                     <p>"에어컨설치 관리사 과정을 통해 전문 기술을 습득했습니다. 현재 대형 건설사와 계약을 맺고 안정적인 수익을 올리고 있으며, KHAMA의 지속적인 기술 지원이 큰 힘이 됩니다."</p>
                     <ul>
                        <li>대형 건설사 3곳과 정식 계약</li>
                        <li>연간 매출 5,000만원 달성</li>
                        <li>기술 인증 A등급 획득</li>
                        <li>후배 양성을 위한 강사 활동</li>
                     </ul>
                  </ZigzagContent>
                  <ZigzagImage>
                     <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'aircon.installation'), '성공 스토리 2', [{ width: 500 }, { width: 800 }])} />
                  </ZigzagImage>
               </ZigzagLayout>
            </ZigzagSection>

            {/* 🤝 파트너십 섹션 */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     파트너십 & 협력기관
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     KHAMA와 함께하는 신뢰할 수 있는 파트너들
                  </SectionSubtitle>
               </SectionHeader>
               <Grid columns={4}>
                  <Card as={motion.div} variants={fadeInScale} style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                     <CardIcon $primary style={{ margin: '0 auto 1rem' }}>
                        <FaUsers />
                     </CardIcon>
                     <CardTitle style={{ fontSize: '1.1rem' }}>교육기관</CardTitle>
                     <CardDescription>전국 15개 교육기관과 협력</CardDescription>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale} style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                     <CardIcon $secondary style={{ margin: '0 auto 1rem' }}>
                        <FaBook />
                     </CardIcon>
                     <CardTitle style={{ fontSize: '1.1rem' }}>정부기관</CardTitle>
                     <CardDescription>고용노동부, 중소벤처기업부</CardDescription>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale} style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                     <CardIcon $accent style={{ margin: '0 auto 1rem' }}>
                        <FaHeadset />
                     </CardIcon>
                     <CardTitle style={{ fontSize: '1.1rem' }}>기업체</CardTitle>
                     <CardDescription>대형 가전업체 및 서비스업체</CardDescription>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale} style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                     <CardIcon $primary style={{ margin: '0 auto 1rem' }}>
                        <FaAward />
                     </CardIcon>
                     <CardTitle style={{ fontSize: '1.1rem' }}>협회</CardTitle>
                     <CardDescription>관련 업계 협회 및 단체</CardDescription>
                  </Card>
               </Grid>
            </CompactSection>

            {/* 📊 실시간 현황 섹션 */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     실시간 현황
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     지금 이 순간에도 성장하고 있는 KHAMA
                  </SectionSubtitle>
               </SectionHeader>
               <Grid columns={2}>
                  <Card as={motion.div} variants={slideInLeft} style={{ padding: '2rem', background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)', color: 'white' }}>
                     <CardTitle style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.3rem' }}>이번 달 교육 현황</CardTitle>
                     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div style={{ textAlign: 'center' }}>
                           <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>127</div>
                           <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>신규 수강생</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                           <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>89</div>
                           <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>자격증 취득</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                           <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>34</div>
                           <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>창업 성공</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                           <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>98%</div>
                           <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>만족도</div>
                        </div>
                     </div>
                  </Card>
                  <Card as={motion.div} variants={slideInRight} style={{ padding: '2rem' }}>
                     <CardTitle style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>다가오는 일정</CardTitle>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '10px' }}>
                           <FaCalendar style={{ color: '#ff6b6b', fontSize: '1.2rem' }} />
                           <div>
                              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>2025년 1월 정기 시험</div>
                              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>접수 마감: 2025.01.15</div>
                           </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '10px' }}>
                           <FaBook style={{ color: '#ff6b6b', fontSize: '1.2rem' }} />
                           <div>
                              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>신규 교육과정 개설</div>
                              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>스마트홈 전문가 과정</div>
                           </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '10px' }}>
                           <FaUsers style={{ color: '#ff6b6b', fontSize: '1.2rem' }} />
                           <div>
                              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>취업박람회 참가</div>
                              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>2025.02.20 코엑스</div>
                           </div>
                        </div>
                     </div>
                  </Card>
               </Grid>
            </CompactSection>

            {/* 🚨 CTA 섹션 */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     지금 KHAMA와 함께하세요!
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     전문가 교육, 자격증 취득, 창업 지원 등 다양한 기회가 여러분을 기다립니다
                  </SectionSubtitle>
               </SectionHeader>
               <Grid columns={1}>
                  <Card as={motion.div} variants={fadeInScale} style={{ textAlign: 'center', padding: '3rem 2rem', background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)', color: 'white' }}>
                     <CardTitle style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>전문가로의 첫걸음을 내딛어보세요</CardTitle>
                     <CardDescription style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)' }}>체계적인 교육 과정과 실무 중심의 자격증 취득을 통해 전문가로 성장하실 수 있습니다</CardDescription>
                     <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button as={Link} to="/signup" variant="primary" size="large" style={{ backgroundColor: 'white', color: '#ff6b6b' }}>
                           회원가입
                        </Button>
                        <Button onClick={openContactModal} variant="outline" size="large" style={{ borderColor: 'white', color: 'white' }}>
                           문의하기
                        </Button>
                     </div>
                  </Card>
               </Grid>
            </CompactSection>
         </Container>
      </PageWrapper>
   )
}
