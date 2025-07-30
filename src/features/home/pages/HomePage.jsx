import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { getNotices } from '@/services/noticeService'
import { useModal } from '@/contexts/ModalContext'
import { FaBook, FaUserGraduate, FaUsers, FaHeadset, FaAward, FaSnowflake, FaCalendar, FaAirFreshener } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

// 배너 문구 데이터
const banners = [
   { title: 'KHAMA', subtitle: '체계적이고 표준화된 가전제품 유지관리 기술 개발' },
   { title: 'KHAMA', subtitle: '가전제품 유지관리 산업의 발전과 전문성 향상에 기여' },
   { title: 'KHAMA', subtitle: '전문인력 양성 및 훈련과정 개발' },
]

// 아이콘 섹션 데이터 (아이콘은 임시 문자 또는 SVG 사용)
const features = [
   { icon: <FaBook />, title: '기술의 표준화 연구', description: '체계적이고 표준화된 유지관리 기술 연구', link: '/association/purpose' }, // 예시 링크
   { icon: <FaUserGraduate />, title: '창업지원', description: '창업컨설팅 및 멘토링 프로그램 운영', link: '/education/content' },
   { icon: <FaUsers />, title: '전문인력양성', description: '기술수준 향상 및 국제 경쟁력 강화', link: '/education/goal' },
   { icon: <FaHeadset />, title: '고객만족혁신', description: '소비자 불만 접수 및 유지관리 정보제공', link: '/notice' },
]

// 자격증 목록 데이터 (예시)
const certifications = [
   { icon: <FaCalendar />, name: '청소 서비스 관리사', description: '최고 수준의 전문 기술 인증' },
   { icon: <FaAward />, name: '가전제품 분해 청소 관리사', description: '기본적인 가전 제품 유지보수 기술 인증' },
   { icon: <FaSnowflake />, name: '에어컨 설치 관리사', description: '에어컨 설치 및 수리 전문 자격' },
   { icon: <FaAirFreshener />, name: '냉난방기 세척서비스 관리사', description: '냉난방기 세척 서비스 전문 자격' },
]

// Framer Motion Variants
const bannerVariants = {
   enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
   }),
   center: {
      zIndex: 1,
      x: '0%',
      opacity: 1,
   },
   exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
   }),
}

const bannerTransition = {
   x: { type: 'tween', ease: 'easeInOut', duration: 0.7 },
   opacity: { duration: 0.3 },
}

// itemFadeSlideUp variant 정의 추가
const itemFadeSlideUp = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const featureItemVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
   },
}

const sectionVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const certificationItemVariants = {
   hidden: { opacity: 0, scale: 0.8 },
   visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
   },
}

const pageTransition = {
   type: 'tween',
   ease: 'anticipate',
   duration: 0.8,
}

const textVariant = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const imageVariant = {
   hidden: { opacity: 0, scale: 0.9 },
   visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

// 숫자 카운트업 섹션 variants (staggerChildren 포함)
const counterSectionVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.2, // 자식(StatItem) 애니메이션 지연
      },
   },
}

// 개별 통계 항목 variant 추가
const statItemVariant = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function HomePage() {
   const { openContactModal } = useModal()
   const [pageIndex, setPageIndex] = useState(0)
   const [direction, setDirection] = useState(0)
   const [latestNotices, setLatestNotices] = useState([])
   const [loadingNotices, setLoadingNotices] = useState(true)

   const paginate = (newDirection) => {
      setDirection(newDirection)
      setPageIndex((prevIndex) => (prevIndex + newDirection + banners.length) % banners.length)
   }

   useEffect(() => {
      const fetchLatestNotices = async () => {
         try {
            setLoadingNotices(true)
            const data = await getNotices(1, 3)
            setLatestNotices(data.notices)
         } catch (error) {
            console.error('Failed to fetch latest notices:', error)
         } finally {
            setLoadingNotices(false)
         }
      }
      fetchLatestNotices()
   }, [])

   useEffect(() => {
      const interval = setInterval(() => {
         paginate(1)
      }, 5000)
      return () => clearInterval(interval)
   }, [])

   const { ref: featureRef, inView: featureInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: purposeRef, inView: purposeInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.3 })
   const { ref: certRef, inView: certInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: noticeRef, inView: noticeInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.3 })

   const AnimatedNumber = ({ value }) => {
      return <motion.span>{value.toLocaleString()}</motion.span>
   }

   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={pageTransition}>
         <Container>
            {/* --- 배너 섹션 --- */}
            <BannerSection>
               <BannerOverlay />
               <AnimatePresence initial={false} custom={direction} mode="wait">
                  <BannerContent key={pageIndex} custom={direction} variants={bannerVariants} initial="enter" animate="center" exit="exit" transition={bannerTransition}>
                     <motion.h1 variants={textVariant}>{banners[pageIndex].title}</motion.h1>
                     <motion.p variants={textVariant} style={{ transitionDelay: '0.2s' }}>
                        {banners[pageIndex].subtitle}
                     </motion.p>
                     <BannerButtonWrapper as={motion.div} variants={textVariant} style={{ transitionDelay: '0.4s' }}>
                        <Button as={Link} to="/apply" size="large" variant="primary">
                           온라인 신청하기 {/* <FaArrowRight style={{ marginLeft: '8px' }} /> */}
                        </Button>
                        <Button as={Link} to="/exam-info" size="large" variant="outline">
                           자격시험 안내
                        </Button>
                     </BannerButtonWrapper>
                  </BannerContent>
               </AnimatePresence>
            </BannerSection>

            {/* --- 특징 소개 섹션 --- */}
            <FeatureSection ref={featureRef} initial="hidden" animate={featureInView ? 'visible' : 'hidden'} variants={sectionVariants}>
               <SectionHeader animate={featureInView ? 'visible' : 'hidden'} variants={textVariant}>
                  <SectionTitle $centered>KHAMA 핵심 사업</SectionTitle>
                  <SectionSubtitle centered>전문성과 신뢰를 바탕으로 산업 발전을 선도합니다.</SectionSubtitle>
               </SectionHeader>
               <FeatureGrid>
                  {features.map((feature, index) => (
                     <FeatureItem key={index} variants={featureItemVariants}>
                        <IconWrapper>{feature.icon}</IconWrapper>
                        <FeatureTitle>{feature.title}</FeatureTitle>
                        <FeatureDescription>{feature.description}</FeatureDescription>
                     </FeatureItem>
                  ))}
               </FeatureGrid>
            </FeatureSection>

            {/* --- 설립 목적 섹션 --- */}
            <PurposeSection ref={purposeRef} initial="hidden" animate={purposeInView ? 'visible' : 'hidden'} variants={sectionVariants}>
               <TextContent variants={textVariant}>
                  <SectionTitle>설립 목적</SectionTitle>
                  <PurposeList>
                     <PurposeItem>
                        <h3>기술 표준화 및 연구</h3>
                        <p>생활가전 유지보수 기술의 표준화 연구 및 개발</p>
                     </PurposeItem>
                     <PurposeItem>
                        <h3>전문 인력 양성</h3>
                        <p>체계적인 교육 시스템을 통한 전문가 육성 및 역량 강화</p>
                     </PurposeItem>
                     <PurposeItem>
                        <h3>산업 발전 기여</h3>
                        <p>기술 교류, 정책 제안 등을 통한 산업 생태계 활성화</p>
                     </PurposeItem>
                     <PurposeItem>
                        <h3>소비자 권익 보호</h3>
                        <p>신뢰할 수 있는 서비스 환경 조성 및 정보 제공</p>
                     </PurposeItem>
                  </PurposeList>
                  <Button as={Link} to="/association" variant="secondary" style={{ marginTop: '1rem' }}>
                     협회 자세히 보기
                  </Button>
               </TextContent>
               <ImageContent variants={imageVariant}>
                  <ImagePlaceholder>협회 활동 이미지</ImagePlaceholder>
               </ImageContent>
            </PurposeSection>

            {/* --- 통계 섹션 --- */}
            <StatsSection ref={statsRef} initial="hidden" animate={statsInView ? 'visible' : 'hidden'} variants={counterSectionVariants}>
               <SectionTitle $centered>KHAMA 주요 성과</SectionTitle>
               <StatGrid>
                  <StatItem variants={statItemVariant}>
                     <StatValue>
                        <AnimatedNumber value={1500} />+
                     </StatValue>
                     <StatLabel>교육 수료생</StatLabel>
                  </StatItem>
                  <StatItem variants={statItemVariant}>
                     <StatValue>
                        <AnimatedNumber value={850} />+
                     </StatValue>
                     <StatLabel>자격증 발급</StatLabel>
                  </StatItem>
                  <StatItem variants={statItemVariant}>
                     <StatValue>
                        <AnimatedNumber value={5000} />+
                     </StatValue>
                     <StatLabel>기술 지원 건수</StatLabel>
                  </StatItem>
                  <StatItem variants={statItemVariant}>
                     <StatValue>
                        <AnimatedNumber value={50} />+
                     </StatValue>
                     <StatLabel>협력 기업</StatLabel>
                  </StatItem>
               </StatGrid>
            </StatsSection>

            {/* --- 자격증 섹션 --- */}
            <CertificationSection ref={certRef} initial="hidden" animate={certInView ? 'visible' : 'hidden'} variants={sectionVariants}>
               <SectionTitle $centered>KHAMA 자격증 안내</SectionTitle>
               <CertificationGrid>
                  {certifications.map((cert, index) => (
                     <CertificationItem key={index} variants={certificationItemVariants}>
                        <IconWrapper>{cert.icon}</IconWrapper>
                        <CertificationName>{cert.name}</CertificationName>
                        <CertificationDescription>{cert.description}</CertificationDescription>
                     </CertificationItem>
                  ))}
               </CertificationGrid>
               <ButtonWrapper>
                  <Button as={Link} to="/exam-info" variant="primary">
                     자격 시험 전체 보기
                  </Button>
               </ButtonWrapper>
            </CertificationSection>

            {/* --- 공지사항 섹션 --- */}
            <NoticePreviewSection ref={noticeRef} initial="hidden" animate={noticeInView ? 'visible' : 'hidden'} variants={sectionVariants}>
               <SectionTitle $centered>최신 공지사항</SectionTitle>
               {loadingNotices ? (
                  <p>공지사항 로딩 중...</p>
               ) : latestNotices.length > 0 ? (
                  <NoticeList>
                     {latestNotices.map((notice) => (
                        <NoticeItem key={notice.id} variants={itemFadeSlideUp}>
                           <NoticeTitle to={`/notice/${notice.id}`}>{notice.title}</NoticeTitle>
                           <NoticeDate>{new Date(notice.createdAt).toLocaleDateString()}</NoticeDate>
                        </NoticeItem>
                     ))}
                  </NoticeList>
               ) : (
                  <p>최신 공지사항이 없습니다.</p>
               )}
               <ButtonWrapper>
                  <Button as={Link} to="/notice" variant="outline">
                     공지사항 더보기
                  </Button>
               </ButtonWrapper>
            </NoticePreviewSection>

            {/* --- CTA 섹션 --- */}
            <CtaSection ref={ctaRef} initial="hidden" animate={ctaInView ? 'visible' : 'hidden'} variants={sectionVariants}>
               <h2>지금 KHAMA와 함께하세요!</h2>
               <p>전문가 교육, 자격증 취득, 창업 지원 등 다양한 기회가 여러분을 기다립니다.</p>
               <CtaButtonWrapper>
                  <Button as={Link} to="/signup" variant="primary" size="large">
                     회원가입
                  </Button>
                  <Button onClick={openContactModal} variant="outline" size="large">
                     문의하기
                  </Button>
               </CtaButtonWrapper>
            </CtaSection>
         </Container>
      </motion.div>
   )
}

// --- Styled Components --- //

const Container = styled.div`
   scroll-behavior: smooth;
`

// --- 배너 섹션 스타일 ---
const BannerSection = styled.section`
   position: relative;
   height: 600px; /* 높이 증가 */
   background: url('/src/assets/images/banner-background.jpg'); /* 배경 이미지 */
   background-size: cover;
   background-position: center;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   text-align: center;
   overflow: hidden;
`

const BannerOverlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)); /* 오버레이 강화 */
   z-index: 1;
`

const BannerContent = styled(motion.div)`
   position: relative; /* 오버레이 위에 표시되도록 */
   z-index: 2;
   max-width: 900px; /* 너비 증가 */
   padding: 0 ${({ theme }) => theme.spacing.lg};

   h1 {
      font-family: ${({ theme }) => theme.fonts.heading};
      font-size: 3.5rem; /* 크기 증가 */
      font-weight: 700;
      margin-bottom: ${({ theme }) => theme.spacing.md};
      text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
         font-size: 2.5rem;
      }
   }

   p {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      margin-bottom: ${({ theme }) => theme.spacing.xl}; /* 간격 증가 */
      line-height: 1.7;
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
         font-size: ${({ theme }) => theme.fontSizes.large};
      }
   }
`

const BannerButtonWrapper = styled(motion.div)`
   display: flex;
   justify-content: center;
   gap: ${({ theme }) => theme.spacing.lg};
   margin-top: ${({ theme }) => theme.spacing.xl};

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      flex-direction: column;
      align-items: center;
      gap: ${({ theme }) => theme.spacing.md};
   }

   /* 아웃라인 버튼 색상 변경 */
   a[variant='outline'] {
      color: white;
      border-color: white;
      &:hover {
         background-color: rgba(255, 255, 255, 0.1);
         border-color: white;
         color: white;
      }
   }
`

// --- 공통 섹션 헤더 ---
const SectionHeader = styled(motion.div)`
   text-align: center;
   margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

// --- 특징 소개 섹션 스타일 ---
const FeatureSection = styled(motion.section)`
   padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
   background-color: ${({ theme }) => theme.colors.backgroundLight};
`

const FeatureGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   gap: ${({ theme }) => theme.spacing.xl};
   max-width: 1200px;
   margin: 0 auto;
`

const FeatureItem = styled(motion.div)`
   background-color: ${({ theme }) => theme.colors.background};
   border-radius: ${({ theme }) => theme.borderRadius};
   padding: ${({ theme }) => theme.spacing.xl}; /* 패딩 증가 */
   text-align: center;
   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
   border: 1px solid ${({ theme }) => theme.colors.border};
   transition: transform 0.3s ease, box-shadow 0.3s ease;

   &:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
   }
`

const IconWrapper = styled.div`
   font-size: 3.5rem; /* 아이콘 크기 증가 */
   color: ${({ theme }) => theme.colors.primary};
   margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const FeatureTitle = styled.h3`
   font-size: ${({ theme }) => theme.fontSizes.xl}; /* 크기 증가 */
   font-weight: 600;
   margin-bottom: ${({ theme }) => theme.spacing.md};
`

const FeatureDescription = styled.p`
   font-size: ${({ theme }) => theme.fontSizes.medium};
   color: ${({ theme }) => theme.colors.textSecondary};
   line-height: 1.6;
`

// --- 설립 목적 섹션 스타일 ---
const PurposeSection = styled(motion.section)`
   display: flex;
   align-items: stretch; /* 높이 동일하게 */
   gap: ${({ theme }) => theme.spacing.xxl};
   padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
   background-color: ${({ theme }) => theme.colors.background};
   max-width: 1200px;
   margin: 0 auto;

   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: column-reverse; /* 모바일에서 이미지 위로 */
      gap: ${({ theme }) => theme.spacing.xl};
   }
`

const TextContent = styled(motion.div)`
   flex: 1.2; /* 텍스트 영역 조금 더 넓게 */
`

const ImageContent = styled(motion.div)`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: center;
`

const SectionTitle = styled.h2`
   font-size: ${({ theme }) => theme.fontSizes.h2};
   font-weight: 700;
   margin-bottom: ${({ theme }) => theme.spacing.xl};
   color: ${({ theme }) => theme.colors.primary};
   text-align: ${(props) => (props.$centered ? 'center' : 'left')};
`

const SectionSubtitle = styled.p`
   font-size: ${({ theme }) => theme.fontSizes.large};
   color: ${({ theme }) => theme.colors.textSecondary};
   margin-top: -${({ theme }) => theme.spacing.lg}; /* 제목과의 간격 조정 */
   margin-bottom: ${({ theme }) => theme.spacing.xl};
   max-width: 600px;
   margin-left: auto;
   margin-right: auto;
`

const PurposeList = styled.div`
   display: flex;
   flex-direction: column;
   gap: ${({ theme }) => theme.spacing.lg};
`

const PurposeItem = styled(motion.div)`
   padding-left: 1.5rem;
   position: relative;
   border-left: 3px solid ${({ theme }) => theme.colors.secondary}33; /* 연한 보더 */
   transition: border-color 0.3s ease;

   &:hover {
      border-left-color: ${({ theme }) => theme.colors.secondary};
   }

   h3 {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      font-weight: 600;
      margin-bottom: ${({ theme }) => theme.spacing.sm};
      color: ${({ theme }) => theme.colors.secondary};
      display: flex;
      align-items: center;

      span {
         font-size: 0.8em;
         font-weight: 700;
         color: ${({ theme }) => theme.colors.primary};
         background-color: ${({ theme }) => theme.colors.primary}1A;
         border-radius: 4px;
         padding: 0.2rem 0.5rem;
         margin-right: 0.8rem;
      }
   }
   p {
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-bottom: 0;
      line-height: 1.7;
   }
`

const ImagePlaceholder = styled.div`
   width: 100%;
   aspect-ratio: 4 / 3; /* 이미지 비율 유지 */
   background-color: ${({ theme }) => theme.colors.backgroundLight};
   border: 1px dashed ${({ theme }) => theme.colors.border};
   border-radius: ${({ theme }) => theme.borderRadius};
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   color: ${({ theme }) => theme.colors.textSecondary};

   span {
      font-size: 3rem;
      margin-bottom: 1rem;
   }
   p {
      font-size: ${({ theme }) => theme.fontSizes.small};
   }
`

// --- 자격증 소개 섹션 스타일 ---
const CertificationSection = styled(motion.section)`
   padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
   background-color: ${({ theme }) => theme.colors.backgroundLight}; /* 배경색 변경 */
`

const CertificationGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); /* 너비 조정 */
   gap: ${({ theme }) => theme.spacing.xl}; /* 간격 조정 */
   max-width: 1200px;
   margin: 0 auto;
`

const CertificationItem = styled(motion.div)`
   background-color: ${({ theme }) => theme.colors.background};
   border-radius: ${({ theme }) => theme.borderRadius};
   padding: ${({ theme }) => theme.spacing.xl};
   text-align: center;
   border: 1px solid ${({ theme }) => theme.colors.border};
   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`

const CertificationName = styled.h3`
   font-size: ${({ theme }) => theme.fontSizes.large};
   font-weight: 600;
   margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const CertificationDescription = styled.p`
   font-size: ${({ theme }) => theme.fontSizes.small};
   color: ${({ theme }) => theme.colors.textSecondary};
   margin-bottom: 0;
`

// --- CTA 섹션 스타일 ---
const CtaSection = styled(motion.section)`
   padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
   background-color: ${({ theme }) => theme.colors.primary};
   color: white;
   text-align: center;

   h2 {
      font-size: ${({ theme }) => theme.fontSizes.h2};
      font-weight: 700;
      margin-bottom: ${({ theme }) => theme.spacing.md};
   }

   p {
      font-size: ${({ theme }) => theme.fontSizes.large};
      margin-bottom: ${({ theme }) => theme.spacing.xl};
      opacity: 0.9;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
   }

   /* 아웃라인 버튼 스타일 재정의 */
   button[variant='outline'] {
      color: white;
      border-color: white;
      &:hover:not(:disabled) {
         background-color: rgba(255, 255, 255, 0.1);
         border-color: white;
         color: white;
      }
   }
`

const CtaButtonWrapper = styled.div`
   display: flex;
   justify-content: center;
   gap: ${({ theme }) => theme.spacing.lg};

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      flex-direction: column;
      align-items: center;
      gap: ${({ theme }) => theme.spacing.md};
   }
`

// --- 통계 섹션 스타일 ---
const StatsSection = styled(motion.section)`
   padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
   background: linear-gradient(to right, ${({ theme }) => theme.colors.backgroundLight}, ${({ theme }) => theme.colors.background});
   color: white;
`

const StatGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   gap: ${({ theme }) => theme.spacing.xl};
   max-width: 1000px;
   margin: 0 auto;
   text-align: center;
`

const StatItem = styled(motion.div)`
   text-align: center;

   svg {
      // 아이콘 스타일 추가
      font-size: 3rem;
      margin-bottom: ${({ theme }) => theme.spacing.sm};
      opacity: 0.8;
   }
`

const StatValue = styled(motion.span)`
   font-size: 3rem;
   font-weight: 700;
   color: ${({ theme }) => theme.colors.primary};
   margin-bottom: ${({ theme }) => theme.spacing.sm};
   line-height: 1.1;
`

const StatLabel = styled.div`
   font-size: ${({ theme }) => theme.fontSizes.large};
   color: ${({ theme }) => theme.colors.textSecondary};
`

// --- 최신 공지사항 섹션 스타일 ---
const NoticePreviewSection = styled(motion.section)`
   padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
   max-width: 1100px; /* 컨테이너 너비 조절 */
   margin: 0 auto;
`

const NoticeList = styled.div`
   display: flex;
   flex-direction: column;
   gap: ${({ theme }) => theme.spacing.md};
`

const NoticeItem = styled(motion.div)`
   background-color: ${({ theme }) => theme.colors.background};
   padding: ${({ theme }) => theme.spacing.lg};
   border-radius: ${({ theme }) => theme.borderRadius};
   border: 1px solid ${({ theme }) => theme.colors.border};
   display: flex;
   justify-content: space-between;
   align-items: center;
   transition: box-shadow 0.3s ease;

   &:hover {
      box-shadow: ${({ theme }) => theme.boxShadow};
   }
`

const NoticeTitle = styled(Link)`
   font-size: ${({ theme }) => theme.fontSizes.large};
   font-weight: 500;
   color: ${({ theme }) => theme.colors.text};
   text-decoration: none;
   flex-grow: 1; /* 제목이 남은 공간 차지 */
   margin-right: ${({ theme }) => theme.spacing.lg};

   &:hover {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: underline;
   }
`

const NoticeDate = styled.span`
   font-size: ${({ theme }) => theme.fontSizes.small};
   color: ${({ theme }) => theme.colors.textSecondary};
   white-space: nowrap; /* 날짜 줄바꿈 방지 */
`

const ButtonWrapper = styled.div`
   text-align: right;
   margin-top: 1.5rem;
`
