import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { getNotices } from '@/services/noticeService'
import { useModal } from '@/contexts/ModalContext'
import { FaBook, FaUsers, FaHeadset, FaAward, FaSnowflake, FaCalendar, FaAirFreshener, FaBell, FaArrowRight, FaPlay } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { getImageUrl, getOptimizedImageProps } from '../../../utils/imageHelpers'
import {
   fadeInScale,
   staggerContainer,
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
   CardTitle,
   CardDescription,
   ResponsiveImage,
   ImageHeaderCard,
   ImageOverlay,
   ImageOverlayContent,
   AccentBlob,
   ChipList,
   Chip,
   ShineWrapper,
   ShineLayer,
   EdgeGroup,
   EdgeKicker,
   TitleEdge,
   StoryCard,
   StoryHeader,
   StoryAvatar,
   StoryName,
   Quote,
   BulletList,
   StatPill,
   StatRow,
   StoryImageWrap,
   PartnersSection,
   OneLineMarquee,
   MarqueeContent,
   PartnerChip,
   PartnerLogoImg,
   HeroBgImg,
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

const aboutCards = [
   {
      key: 'purpose',
      title: '설립 목적',
      desc: '생활가전 유지관리 기술의 표준화와 전문인력 양성을 통한 산업 발전',
      link: '/association/purpose',
      image: getImageUrl('association', 'education.jpg'),
   },
   {
      key: 'greeting',
      title: '인사말',
      desc: '회장님의 메시지와 협회의 비전을 확인해보세요',
      link: '/association/greeting',
      image: getImageUrl('association', 'greet.png'),
   },
   {
      key: 'location',
      title: '오시는 길',
      desc: '협회 위치와 찾아오시는 방법을 안내해드립니다',
      link: '/association/location',
      image: getImageUrl('association', 'meet.png'),
   },
]

// 자격증 목록 데이터
const certifications = [
   {
      icon: <FaAward />,
      name: '가전제품분해청소관리사',
      link: '/certification/appliance-cleaning',
      image: getImageUrl('certifications', 'warrant_appliance.jpg'),
      chips: ['분해청소', '세탁기·공기청정기', '실무 집중'],
   },
   {
      icon: <FaSnowflake />,
      name: '냉난방기 세척서비스 관리사',
      link: '/certification/air-conditioner-service',
      image: getImageUrl('certifications', 'warrant_aircon.jpg'),
      chips: ['세척서비스', '냉난방기', '현장 위주'],
   },
   {
      icon: <FaCalendar />,
      name: '에어컨설치 관리사',
      link: '/certification/air-conditioner-installation',
      image: getImageUrl('certifications', 'warrant_aircon_install.jpg'),
      chips: ['설치', '배관/배선', '안전규정'],
   },
   {
      icon: <FaAirFreshener />,
      name: '환기청정시스템 관리사',
      link: '/certification/ventilation-system',
      image: getImageUrl('certifications', 'warrant_ventilation.jpg'),
      chips: ['환기시스템', '실내공기', '유지관리'],
   },
]

// 파트너 데이터 (src/assets/images/partners/ 에 로고 넣기)
const partners = [
   { logo: getImageUrl('partners', 'caps.png') },
   { logo: getImageUrl('partners', 'carrier.png') },
   { logo: getImageUrl('partners', 'cleantopia.png') },
   { logo: getImageUrl('partners', 'hyundaicard.png') },
   { logo: getImageUrl('partners', 'koreasafe.png') },
   { logo: getImageUrl('partners', 'jingu.png') },
   { logo: getImageUrl('partners', 'junjaland.png') },
   { logo: getImageUrl('partners', 'lgwhisen.png') },
   { logo: getImageUrl('partners', 'lottecard.png') },
   { logo: getImageUrl('partners', 'preed.png') },
   { logo: getImageUrl('partners', 'samsung.png') },
   { logo: getImageUrl('partners', 'samsungstory.png') },
   { logo: getImageUrl('partners', 'sinhan.png') },
   { logo: getImageUrl('partners', 'whinia.png') },
   // 필요만큼 추가…
]

// 트랙 폭 보강: 트랙 내부에서 한 번 더 복제 (총 2배)
const marqueeItems = [...partners, ...partners]

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
               <HeroBgImg key={currentBannerIndex} src={currentBanner.image} alt="" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5, ease: 'easeInOut' }} aria-hidden="true" draggable={false} />
            </AnimatePresence>

            {/* 그라디언트 오버레이도 동기화 크로스페이드 */}
            <AnimatePresence mode="wait">
               <HeroBackground
                  key={`bg-${currentBannerIndex}`}
                  radialGradient="radial-gradient(circle at 35% 50%, rgba(41, 41, 41, 0.6) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(48, 48, 48, 0.32) 0%, transparent 50%)"
                  initial={{ opacity: 0, scale: 1.02, y: 5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -5 }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
               />
            </AnimatePresence>

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
                        <Button as={Link} to="/education" variant="secondary" size="large">
                           교육 과정 알아보기
                        </Button>
                        <Button onClick={openContactModal} variant="primary" size="large">
                           문의하기
                        </Button>
                     </motion.div>
                  </motion.div>
               </AnimatePresence>
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
            {/* 💎 협회 소개 섹션 */}
            <CompactSection as={motion.section} initial="hidden" animate="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     KHAMA 소개
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     생활가전 유지관리 전문가 양성을 위한 선도 기관
                  </SectionSubtitle>
               </SectionHeader>

               <Grid columns={3}>
                  {aboutCards.map((item, idx) => (
                     <Card
                        key={item.key}
                        as={motion.div}
                        variants={fadeInScale}
                        style={{
                           padding: 0,
                           overflow: 'hidden',
                           borderRadius: 20,
                           background: 'white',
                        }}
                        whileHover={{ y: -4, boxShadow: '0 18px 40px rgba(0,0,0,0.12)' }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                     >
                        {/* 이미지 헤더: 부드러운 줌 + 오버레이 페이드 */}
                        <Link to={item.link} aria-label={`${item.title} 자세히 보기`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                           <ImageHeaderCard as={motion.div} style={{ borderRadius: '20px 20px 0 0' }}>
                              <ResponsiveImage {...getOptimizedImageProps(item.image, item.title, [{ width: 600 }, { width: 900 }, { width: 1200 }])} style={{ width: '100%', objectFit: 'cover', display: 'block' }} draggable={false} />

                              {/* ⬇️ 오버레이 안에 제목/아이콘/설명/CTA 넣기 */}
                              <ImageOverlay
                                 style={{
                                    alignItems: 'flex-end', // 하단 정렬
                                    justifyContent: 'stretch',
                                    padding: '1.25rem',
                                 }}
                              >
                                 <ImageOverlayContent style={{ width: '100%', textAlign: 'left' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                                       {idx === 0 && (
                                          <CardIcon $secondary style={{ margin: 0 }}>
                                             <FaBook />
                                          </CardIcon>
                                       )}
                                       {idx === 1 && (
                                          <CardIcon $accent style={{ margin: 0 }}>
                                             <FaUsers />
                                          </CardIcon>
                                       )}
                                       {idx === 2 && (
                                          <CardIcon $primary style={{ margin: 0 }}>
                                             <FaHeadset />
                                          </CardIcon>
                                       )}
                                       <h3 style={{ margin: 0 }}>{item.title}</h3>
                                    </div>

                                    <p
                                       style={{
                                          margin: 0,
                                          opacity: 0.95,
                                          lineHeight: 1.5,
                                          // 긴 문장 모바일 클램프(선택)
                                          display: '-webkit-box',
                                          WebkitLineClamp: 2,
                                          WebkitBoxOrient: 'vertical',
                                          overflow: 'hidden',
                                       }}
                                    >
                                       {item.desc}
                                    </p>

                                    <span
                                       style={{
                                          marginTop: 10,
                                          display: 'inline-flex',
                                          alignItems: 'center',
                                          gap: 8,
                                          padding: '6px 10px',
                                          borderRadius: 10,
                                          border: '1px solid rgba(255,255,255,0.25)',
                                          background: 'rgba(255,255,255,0.12)',
                                          color: '#fff',
                                          fontWeight: 600,
                                          fontSize: 14,
                                       }}
                                    >
                                       자세히 보기 <FaArrowRight size={12} />
                                    </span>
                                 </ImageOverlayContent>
                              </ImageOverlay>
                           </ImageHeaderCard>
                        </Link>
                     </Card>
                  ))}
               </Grid>
            </CompactSection>
            {/* 🔥 자격증 소개 - 지그재그 레이아웃 (업그레이드) */}
            <ZigzagSection as={motion.section} initial="hidden" animate="visible" variants={staggerContainer} background="linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)">
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     전문 자격증 과정
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     체계적인 교육을 통해 전문성을 인정받는 4가지 자격증
                  </SectionSubtitle>
               </SectionHeader>

               {certifications.map((cert, index) => {
                  const DEFAULT_CHIPS = ['실기 중심', '현장 실무', '공식 커리큘럼']

                  return (
                     <motion.div key={index} style={{ position: 'relative', zIndex: 1 }} variants={fadeInScale}>
                        {/* 부드러운 그라디언트 블롭 장식 */}
                        <AccentBlob />

                        <ZigzagLayout>
                           <ZigzagContent>
                              <EdgeGroup>
                                 <EdgeKicker>전문 자격증</EdgeKicker>
                                 <TitleEdge>
                                    <CardIcon $primary style={{ margin: 0, fontSize: '1.4rem' }}>
                                       {cert.icon}
                                    </CardIcon>
                                    <h4>{cert.name}</h4>
                                 </TitleEdge>
                              </EdgeGroup>

                              <ChipList>
                                 {(cert.chips ?? DEFAULT_CHIPS).map((c) => (
                                    <Chip key={c}>• {c}</Chip>
                                 ))}
                              </ChipList>

                              <div style={{ marginTop: '1.25rem', display: 'flex', gap: '.6rem', alignItems: 'center' }}>
                                 <Link to={cert.link}>
                                    <Button
                                       variant="primary"
                                       style={{
                                          display: 'inline-flex',
                                          alignItems: 'center',
                                          gap: '0.5rem',
                                          padding: '0.7rem 1.2rem',
                                          borderRadius: 12,
                                          textDecoration: 'none',
                                          color: 'white',
                                          fontWeight: 700,
                                          boxShadow: '0 8px 20px rgba(238,90,111,.35)',
                                       }}
                                    >
                                       자격증 정보 보기 <FaArrowRight size={14} />
                                    </Button>
                                 </Link>
                              </div>
                           </ZigzagContent>

                           <ZigzagImage as={motion.div} whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
                              <Link to={cert.link} style={{ display: 'block' }}>
                                 <ShineWrapper>
                                    <ResponsiveImage {...getOptimizedImageProps(cert.image, cert.name, [{ width: 500 }, { width: 800 }, { width: 1200 }])} style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} draggable={false} />
                                    {/* 어둡게 그라디언트 */}
                                    <div
                                       style={{
                                          position: 'absolute',
                                          inset: 0,
                                          background: 'linear-gradient(180deg, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.35) 100%)',
                                       }}
                                    />

                                    {/* ✨ 샤인 레이어 */}
                                    <ShineLayer className="shine-layer" />

                                    {/* 하단 캡션 */}
                                    <div style={{ position: 'absolute', left: 16, right: 16, bottom: 14, color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                       <span style={{ fontWeight: 700 }}>{cert.name}</span>
                                       <span style={{ fontSize: 12, padding: '6px 10px', borderRadius: 999, background: 'rgba(255,255,255,.14)', border: '1px solid rgba(255,255,255,.28)', backdropFilter: 'blur(6px)' }}>자세히 보기</span>
                                    </div>
                                 </ShineWrapper>
                              </Link>
                           </ZigzagImage>
                        </ZigzagLayout>
                     </motion.div>
                  )
               })}
            </ZigzagSection>
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
            {/* 🏆 성공 스토리 섹션 (업그레이드) */}
            <ZigzagSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     성공 스토리
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     KHAMA와 함께 성장한 전문가들의 이야기
                  </SectionSubtitle>
               </SectionHeader>

               {[
                  {
                     name: '김○○',
                     role: '가전제품분해청소관리사',
                     quote: '자격 취득 후 3개월 만에 창업했고, 지금은 예약이 밀릴 정도로 바빠요.',
                     bullets: ['교육 수료 후 3개월 만에 창업 성공', '월 평균 매출 300만원 달성', '고객 만족도 98% 유지', '직원 2명 고용으로 사업 확장'],
                     stats: ['월매출 300만원', '재방문 62%', '리뷰★ 4.9'],
                     image: getImageUrl('certifications', 'work2.png'),
                  },
                  {
                     name: '박○○',
                     role: '에어컨설치 관리사',
                     quote: '대형 기업과 정식 계약을 맺고 안정적으로 성장 중입니다.',
                     bullets: ['대형 기업 3곳과 정식 계약', '연간 매출 5,000만원 달성', '기술 인증 A등급 획득', '후배 양성을 위한 강사 활동'],
                     stats: ['연매출 5,000만원', '계약사 3곳', '자격 A등급'],
                     image: getImageUrl('certifications', 'work1.jpg'),
                  },
               ].map((s, i) => (
                  <ZigzagLayout key={i} as={motion.div} variants={fadeInScale}>
                     {/* 텍스트 카드 */}
                     <StoryCard initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                        <StoryHeader>
                           <StoryAvatar>{s.name[0]}</StoryAvatar>
                           <StoryName>
                              <strong>{s.name} 수료생</strong>
                              <span>{s.role}</span>
                           </StoryName>
                        </StoryHeader>

                        <Quote>{s.quote}</Quote>

                        <StatRow>
                           {s.stats.map((v) => (
                              <StatPill key={v}>{v}</StatPill>
                           ))}
                        </StatRow>

                        <BulletList style={{ marginTop: '.75rem' }}>
                           {s.bullets.map((v) => (
                              <li key={v}>{v}</li>
                           ))}
                        </BulletList>
                     </StoryCard>

                     {/* 이미지 카드 */}
                     <ZigzagImage as={motion.div} whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
                        <StoryImageWrap>
                           <ResponsiveImage {...getOptimizedImageProps(s.image, `${s.name} 성공 스토리`, [{ width: 500 }, { width: 800 }, { width: 1200 }])} style={{ width: '100%', height: 400, objectFit: 'cover', display: 'block' }} draggable={false} />
                           {/* 어둠/샤인/캡션 */}
                           <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.35) 100%)' }} />
                           <div className="shine-layer" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(75deg, transparent 0%, rgba(255,255,255,.18) 35%, transparent 65%)' }} />
                           <div style={{ position: 'absolute', left: 16, right: 16, bottom: 14, color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <span style={{ fontWeight: 800 }}>{s.role}</span>
                           </div>
                        </StoryImageWrap>
                     </ZigzagImage>
                  </ZigzagLayout>
               ))}
            </ZigzagSection>

            <PartnersSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     파트너십 & 협력기관
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     KHAMA와 함께하는 신뢰할 수 있는 파트너들
                  </SectionSubtitle>
               </SectionHeader>

               <OneLineMarquee $duration={26}>
                  {/* 트랙 1 */}
                  <MarqueeContent className="marquee-track">
                     {partners.map((p, i) => (
                        <PartnerChip as="a" key={`m1-${i}`} rel="noopener noreferrer">
                           <PartnerLogoImg src={p.logo} alt="" />
                        </PartnerChip>
                     ))}
                  </MarqueeContent>

                  {/* 트랙 2(동일 내용) — 끊김 없는 무한 루프를 위해 필수 */}
                  <MarqueeContent className="marquee-track" aria-hidden="true">
                     {partners.map((p, i) => (
                        <PartnerChip as="a" key={`m2-${i}`} rel="noopener noreferrer">
                           <PartnerLogoImg src={p.logo} alt="" />
                        </PartnerChip>
                     ))}
                  </MarqueeContent>
               </OneLineMarquee>
            </PartnersSection>

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
