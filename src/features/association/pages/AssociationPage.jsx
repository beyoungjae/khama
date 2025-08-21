import { motion } from 'framer-motion'
import { FaBuilding, FaBullseye, FaMapMarkerAlt, FaHandshake, FaLightbulb, FaShieldAlt, FaGraduationCap, FaCertificate, FaUsers, FaHeart, FaPhone, FaEnvelope, FaCalendarAlt, FaChartLine, FaBalanceScale, FaCheckCircle } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { getImageUrl, handleImageError, getLazyLoadingProps } from '../../../utils/imageHelpers'
import {
   fadeInUp,
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
   SectionHeader,
   SectionTitle,
   SectionSubtitle,
   CardIcon,
   CardContent,
   CardTitle,
   CardDescription,
   CardBadge,
   OverviewSection,
   OverviewGrid,
   OverviewCard,
   ImageGallery,
   ImageGalleryItem,
   ImageCaption,
   ResponsiveImage,
   HeroBgImg,
} from '../../../components/common/SharedStyles'
import styled from 'styled-components'

export function AssociationPage() {
   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: overviewRef, inView: overviewInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: businessRef, inView: businessInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: historyRef, inView: historyInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: operationRef, inView: operationInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: executiveRef, inView: executiveInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: financeRef, inView: financeInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   return (
      <PageWrapper>
         {/* Hero Section - 리뉴얼 */}
         <ModernHeroSection ref={heroRef} style={{ position: 'relative', overflow: 'hidden' }}>
            {/* 배경 이미지 (데스크톱: cover / 모바일: contain) */}
            <HeroBgImg
               key="assoc-hero-bg"
               src={getImageUrl('association', 'education.jpg')} // 👉 원하는 배경 파일명으로 교체 가능
               alt=""
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1.2, ease: 'easeInOut' }}
               aria-hidden="true"
               draggable={false}
            />

            {/* 라디얼/메시 그라디언트 오버레이 */}
            <HeroBackground
               radialGradient="radial-gradient(circle at 35% 50%, rgba(41, 41, 41, 0.91) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(48, 48, 48, 0.32) 0%, transparent 50%)"
               as={motion.div}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1.2 }}
            />

            {/* 부드러운 메시/글로우 데코 */}
            <HeroDecor aria-hidden="true">
               <div className="glow glow-1" />
               <div className="glow glow-2" />
               <div className="mesh" />
            </HeroDecor>

            <HeroContainer>
               {/* 왼쪽 카피 */}
               <motion.div initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  <HeroBadge as={motion.div} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                     <FaShieldAlt />
                     <span>신뢰할 수 있는 전문 기관</span>
                  </HeroBadge>

                  <HeroTitle>
                     한국생활가전
                     <br />
                     <GradientText>유지관리협회</GradientText>
                  </HeroTitle>

                  <HeroSubtitle style={{ fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '2rem', maxWidth: 520 }}>
                     생활가전 유지보수 기술의 표준화와 전문가 양성을 통해
                     <br />더 나은 생활 환경을 만들어가는 선도 기관입니다
                  </HeroSubtitle>
               </motion.div>
            </HeroContainer>
         </ModernHeroSection>

         {/* 협회 개요 섹션 - 카드 형태로 현대적 디자인 */}
         <OverviewSection ref={overviewRef}>
            <Container>
               <motion.div initial="hidden" animate={overviewInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>협회 개요</SectionTitle>
                     <SectionSubtitle>한국생활가전유지관리협회의 기본 정보를 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <OverviewGrid>
                     {/* 협회명 */}
                     <GlassOverviewCard variants={fadeInScale} whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
                        <CornerGlow aria-hidden="true" />
                        <SweepShine aria-hidden="true" />

                        <CardKicker>ABOUT KHAMA</CardKicker>
                        <CardHead>
                           <CardIcon $primary style={{ margin: 0 }}>
                              <FaBuilding />
                           </CardIcon>
                           <div>
                              <CardTitle style={{ margin: 0 }}>협회명</CardTitle>
                              <SmallMuted>Official Name</SmallMuted>
                           </div>
                        </CardHead>

                        <CardDescription style={{ marginTop: '0.75rem' }}>
                           <strong style={{ color: '#0f172a', fontWeight: 800 }}>한국생활가전유지관리협회</strong>
                           <br />
                           <em style={{ opacity: 0.85 }}>Korea Household Appliances Maintenance Association</em>
                        </CardDescription>

                        <BadgeRow>
                           <CardBadge>KHAMA</CardBadge>
                           <Pill>비영리</Pill>
                           <Pill>표준화 연구</Pill>
                        </BadgeRow>
                     </GlassOverviewCard>

                     {/* 설립 목적 */}
                     <GlassOverviewCard variants={fadeInScale} whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
                        <CornerGlow $alt aria-hidden="true" />
                        <SweepShine aria-hidden="true" />

                        <CardKicker>OUR PURPOSE</CardKicker>
                        <CardHead>
                           <CardIcon $secondary style={{ margin: 0 }}>
                              <FaBullseye />
                           </CardIcon>
                           <div>
                              <CardTitle style={{ margin: 0 }}>설립 목적</CardTitle>
                              <SmallMuted>Mission</SmallMuted>
                           </div>
                        </CardHead>

                        <CardDescription style={{ marginTop: '0.75rem' }}>
                           생활가전제품의 <strong>세척·감리 등 유지관리 표준화</strong> 연구와
                           <br />
                           체계적인 교육을 통해 업계의 <strong>동반 성장</strong>을 이끕니다.
                        </CardDescription>

                        <ChipRow>
                           <Chip>표준정립</Chip>
                           <Chip>전문인력양성</Chip>
                           <Chip>산업발전</Chip>
                        </ChipRow>
                     </GlassOverviewCard>

                     {/* 소재지 & 연락 */}
                     <GlassOverviewCard variants={fadeInScale} whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
                        <CornerGlow aria-hidden="true" />
                        <SweepShine aria-hidden="true" />

                        <CardKicker>HEAD OFFICE</CardKicker>
                        <CardHead>
                           <CardIcon $accent style={{ margin: 0 }}>
                              <FaMapMarkerAlt />
                           </CardIcon>
                           <div>
                              <CardTitle style={{ margin: 0 }}>소재지</CardTitle>
                              <SmallMuted>Location & Contact</SmallMuted>
                           </div>
                        </CardHead>

                        <CardDescription style={{ marginTop: '0.75rem' }}>
                           인천광역시 서구 청라한내로72번길 13
                           <br />
                           (청라동) 203호
                        </CardDescription>

                        <InfoRow>
                           <InfoItem as="a" href="tel:15663321">
                              <FaPhone /> 1566-3321
                           </InfoItem>

                           <InfoItem as="a" href="mailto:haan@hanallcompany.com">
                              <FaEnvelope /> haan@hanallcompany.com
                           </InfoItem>
                        </InfoRow>

                        <BadgeRow>
                           <Pill>운영 09:00–18:00</Pill>
                           <Pill>방문상담 예약제</Pill>
                        </BadgeRow>
                     </GlassOverviewCard>
                  </OverviewGrid>
               </motion.div>
            </Container>
         </OverviewSection>

         {/* 비전 & 미션 섹션 (업그레이드) */}
         <VisionSection ref={visionRef}>
            <Container>
               <motion.div initial="hidden" animate={visionInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <VisionHeader>
                     <VisionKicker as={motion.span} variants={fadeInUp}>
                        OUR DIRECTION
                     </VisionKicker>
                     <VisionHeading as={motion.h3} variants={fadeInUp}>
                        KHAMA의 <em>비전</em>과 <strong>미션</strong>
                     </VisionHeading>
                     <VisionSub as={motion.p} variants={fadeInUp}>
                        생활가전 유지보수 산업의 표준을 이끌고, 신뢰받는 서비스 생태계를 만들어갑니다.
                     </VisionSub>
                  </VisionHeader>

                  <VisionProGrid>
                     {/* 비전 */}
                     <VisionProCard as={motion.div} variants={fadeInUp} whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(238,90,111,.18)' }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
                        <VisionBorder />
                        <VisionInner>
                           <VisionIconRing $accent="pink">
                              <FaLightbulb />
                           </VisionIconRing>
                           <VisionTitleRow>
                              <VisionBadge $accent="pink">VISION</VisionBadge>
                              <VisionTitle>대한민국 최고의 유지보수 전문가 플랫폼</VisionTitle>
                           </VisionTitleRow>

                           <VisionLead>대한민국 최고의 생활가전 유지보수 전문가 양성 및 지원 플랫폼 구축</VisionLead>

                           <VisionList>
                              <li>표준화된 기술 교육 및 인증 체계</li>
                              <li>전문가 커뮤니티 및 지식 네트워크</li>
                              <li>지속 가능한 창업/취업 지원</li>
                           </VisionList>
                        </VisionInner>
                        <Shine />
                     </VisionProCard>

                     {/* 미션 */}
                     <VisionProCard as={motion.div} variants={fadeInUp} whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(59,130,246,.18)' }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
                        <VisionBorder $accent="blue" />
                        <VisionInner>
                           <VisionIconRing $accent="blue">
                              <FaHandshake />
                           </VisionIconRing>
                           <VisionTitleRow>
                              <VisionBadge $accent="blue">MISSION</VisionBadge>
                              <VisionTitle>산업 발전과 신뢰받는 서비스 환경 조성</VisionTitle>
                           </VisionTitleRow>

                           <VisionLead>생활가전 유지보수 기술 향상과 산업 발전에 기여하고, 안전하고 신뢰받는 서비스 환경 조성</VisionLead>

                           <VisionList>
                              <li>실무 중심 커리큘럼/평가 체계 운영</li>
                              <li>현장 안전·품질 기준 준수 및 확산</li>
                              <li>민관·산학 협력으로 생태계 강화</li>
                           </VisionList>
                        </VisionInner>
                        <Shine />
                     </VisionProCard>
                  </VisionProGrid>
               </motion.div>
            </Container>
         </VisionSection>

         {/* 주요 사업 섹션 (리디자인) */}
         <BusinessSection ref={businessRef}>
            <Container>
               <motion.div initial="hidden" animate={businessInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <BusinessHeader>
                     <BizKicker as={motion.span} variants={fadeInUp}>
                        WHAT WE DO
                     </BizKicker>
                     <BizHeading as={motion.h3} variants={fadeInUp}>
                        KHAMA의 <em>핵심 사업</em>
                     </BizHeading>
                     <BizSub as={motion.p} variants={fadeInUp}>
                        표준화된 지식과 실무 중심의 교육·자격·네트워크로 산업 생태계를 단단히 만듭니다.
                     </BizSub>
                  </BusinessHeader>

                  {/* 필요한 만큼 자유롭게 추가/수정 가능 */}
                  <Pillars>
                     {/* 01 */}
                     <PillarRow as={motion.div} variants={fadeInUp} whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
                        <PillarAccent aria-hidden />
                        <PillarIconRing $accent="pink">
                           <FaGraduationCap />
                        </PillarIconRing>
                        <PillarBody>
                           <PillarTop>
                              <PillarIndex>01</PillarIndex>
                              <PillarTitle>교육사업</PillarTitle>
                           </PillarTop>
                           <PillarLead>생활가전유지관리사 창업/실무 역량을 탄탄히 쌓는 실습 중심 교육.</PillarLead>
                           <BSChipRow>
                              <BSChip>창업교육</BSChip>
                              <BSChip>전문가교육</BSChip>
                              <BSChip>신아이템교육</BSChip>
                           </BSChipRow>
                        </PillarBody>
                        <PillarGhostIllustration />
                     </PillarRow>

                     {/* 02 */}
                     <PillarRow as={motion.div} variants={fadeInUp} whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
                        <PillarAccent $accent="blue" aria-hidden />
                        <PillarIconRing $accent="blue">
                           <FaCertificate />
                        </PillarIconRing>
                        <PillarBody>
                           <PillarTop>
                              <PillarIndex>02</PillarIndex>
                              <PillarTitle>자격증 사업</PillarTitle>
                           </PillarTop>
                           <PillarLead>표준 교육·평가 체계를 통해 안전하고 신뢰받는 서비스 인력을 인증합니다.</PillarLead>
                           <BSChipRow>
                              <BSChip>표준 커리큘럼</BSChip>
                              <BSChip>실기 평가</BSChip>
                              <BSChip>안전규정</BSChip>
                           </BSChipRow>
                        </PillarBody>
                        <PillarGhostIllustration />
                     </PillarRow>

                     {/* 03 */}
                     <PillarRow as={motion.div} variants={fadeInUp} whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
                        <PillarAccent $accent="teal" aria-hidden />
                        <PillarIconRing $accent="teal">
                           <FaUsers />
                        </PillarIconRing>
                        <PillarBody>
                           <PillarTop>
                              <PillarIndex>03</PillarIndex>
                              <PillarTitle>전문가 교육기관 운영</PillarTitle>
                           </PillarTop>
                           <PillarLead>인증된 교육기관 네트워크로 지역별 균형 있는 전문가 양성 기반을 조성합니다.</PillarLead>
                           <BSChipRow>
                              <BSChip>기관 인증</BSChip>
                              <BSChip>멘토링</BSChip>
                              <BSChip>현장 실습</BSChip>
                           </BSChipRow>
                        </PillarBody>
                        <PillarGhostIllustration />
                     </PillarRow>

                     {/* 04 */}
                     <PillarRow as={motion.div} variants={fadeInUp} whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
                        <PillarAccent $accent="amber" aria-hidden />
                        <PillarIconRing $accent="amber">
                           <FaHeart />
                        </PillarIconRing>
                        <PillarBody>
                           <PillarTop>
                              <PillarIndex>04</PillarIndex>
                              <PillarTitle>사회봉사활동</PillarTitle>
                           </PillarTop>
                           <PillarLead>취약계층 시설의 생활가전 위생 개선과 안전 환경 조성을 위해 재능을 나눕니다.</PillarLead>
                           <BSChipRow>
                              <BSChip>무료 점검</BSChip>
                              <BSChip>위생 개선</BSChip>
                              <BSChip>지역 연계</BSChip>
                           </BSChipRow>
                        </PillarBody>
                        <PillarGhostIllustration />
                     </PillarRow>
                  </Pillars>
               </motion.div>
            </Container>
         </BusinessSection>

         {/* 연혁 섹션 (리디자인) */}
         <HistorySection ref={historyRef}>
            <Container>
               <motion.div initial="hidden" animate={historyInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                  <SectionHeader>
                     <SectionTitle>주요 연혁</SectionTitle>
                     <SectionSubtitle>협회의 성장 궤적을 한눈에 보세요</SectionSubtitle>
                  </SectionHeader>

                  <TimelineWrap>
                     {/* === 1 === */}
                     <HistoryRow as={motion.div} variants={fadeInUp}>
                        <SideCol className="left">
                           <YearChip>2024.11</YearChip>
                           <HistCard>
                              <HistIcon className="pink">
                                 <FaCalendarAlt />
                              </HistIcon>
                              <h4>한국생활가전유지관리협회 설립</h4>
                              <p>생활가전 유지보수 산업 발전을 위한 협회 정식 설립</p>
                           </HistCard>
                        </SideCol>
                        <CenterRail>
                           <Dot />
                        </CenterRail>
                        <SideCol className="right" aria-hidden />
                     </HistoryRow>

                     {/* === 2 === */}
                     <HistoryRow as={motion.div} variants={fadeInUp}>
                        <SideCol className="left" aria-hidden />
                        <CenterRail>
                           <Dot />
                        </CenterRail>
                        <SideCol className="right">
                           <YearChip>2024.12</YearChip>
                           <HistCard>
                              <HistIcon className="blue">
                                 <FaCertificate />
                              </HistIcon>
                              <h4>민간자격 등록 완료</h4>
                              <p>4개 분야 민간자격 정식 등록 및 운영 규정 제정</p>
                              <TagList>
                                 <li>가전제품분해청소관리사</li>
                                 <li>냉난방기 세척서비스 관리사</li>
                                 <li>에어컨설치 관리사</li>
                                 <li>환기청정시스템 관리사</li>
                              </TagList>
                           </HistCard>
                        </SideCol>
                     </HistoryRow>

                     {/* === 더 추가하고 싶으면 이 블록 복제 ===
        <HistoryRow as={motion.div} variants={fadeInUp}>
          <SideCol className="left">
            <YearChip>YYYY.MM</YearChip>
            <HistCard>
              <HistIcon className="teal"><FaSomething /></HistIcon>
              <h4>제목</h4>
              <p>설명</p>
              <TagList>
                <li>태그1</li><li>태그2</li>
              </TagList>
            </HistCard>
          </SideCol>
          <CenterRail><Dot /></CenterRail>
          <SideCol className="right" aria-hidden />
        </HistoryRow>
        */}
                  </TimelineWrap>
               </motion.div>
            </Container>
         </HistorySection>

         {/* 운영 원칙 섹션 (리디자인) */}
         <OperationSection ref={operationRef}>
            <Container>
               <motion.div initial="hidden" animate={operationInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>운영 원칙</SectionTitle>
                     <SectionSubtitle>투명하고 신뢰할 수 있는 협회 운영의 기본 규범</SectionSubtitle>
                  </SectionHeader>

                  <PrinciplesWrap>
                     {/* 레일 배경 */}
                     <Rail />

                     {/* 1 */}
                     <PrincipleItem as={motion.div} variants={fadeInUp}>
                        <Badge className="pink">
                           <FaChartLine />
                        </Badge>
                        <h4>투명한 재정 운영</h4>
                        <p>수익금은 회원 배분이 아닌 목적사업 재투자 및 사업확대·안정화 적립에 사용합니다.</p>
                        <Meta>지속가능성 • 재투자 • 투명성</Meta>
                     </PrincipleItem>

                     {/* 2 */}
                     <PrincipleItem as={motion.div} variants={fadeInUp}>
                        <Badge className="blue">
                           <FaBalanceScale />
                        </Badge>
                        <h4>정기적인 감사</h4>
                        <p>연 2회 이상 회계감사를 시행하여 운영의 투명성과 책임성을 강화합니다.</p>
                        <Meta>컴플라이언스 • 신뢰 • 검증</Meta>
                     </PrincipleItem>

                     {/* 3 */}
                     <PrincipleItem as={motion.div} variants={fadeInUp}>
                        <Badge className="teal">
                           <FaHeart />
                        </Badge>
                        <h4>기부금 운영</h4>
                        <p>기부금·후원금은 목적사업에 사용하며 연간 모금액과 집행 내역을 공개합니다.</p>
                        <Meta>공개 • 공익 • 보고</Meta>
                     </PrincipleItem>

                     {/* 4 */}
                     <PrincipleItem as={motion.div} variants={fadeInUp}>
                        <Badge className="amber">
                           <FaCheckCircle />
                        </Badge>
                        <h4>민주적 의사결정</h4>
                        <p>이사회는 재적 과반 출석·찬성 원칙으로 의결하여 공정한 거버넌스를 유지합니다.</p>
                        <Meta>합의 • 절차 • 거버넌스</Meta>
                     </PrincipleItem>
                  </PrinciplesWrap>
               </motion.div>
            </Container>
         </OperationSection>
      </PageWrapper>
   )
}

// —— Hero 전용 데코 —— //
const HeroDecor = styled.div`
   position: absolute;
   inset: 0;
   pointer-events: none;
   z-index: 1;

   .glow {
      position: absolute;
      filter: blur(60px);
      opacity: 0.55;
   }
   .glow-1 {
      width: 400px;
      height: 400px;
      left: -120px;
      top: -100px;
      background: radial-gradient(closest-side, rgba(238, 90, 111, 0.45), transparent 70%);
   }
   .glow-2 {
      width: 420px;
      height: 420px;
      right: -140px;
      bottom: -120px;
      background: radial-gradient(closest-side, rgba(59, 130, 246, 0.35), transparent 70%);
   }

   .mesh {
      position: absolute;
      inset: 0;
      opacity: 0.12;
      background: radial-gradient(circle at 20% 0%, rgba(255, 255, 255, 0.5) 0 1px, transparent 2px) 0 0/40px 40px, radial-gradient(circle at 0% 20%, rgba(255, 255, 255, 0.5) 0 1px, transparent 2px) 0 0/40px 40px;
      mask: linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%);
   }
`
// ——— Overview 업그레이드 전용 ———
const GlassOverviewCard = styled(OverviewCard)`
   position: relative;
   overflow: hidden;
   padding: 2.25rem;
   background: linear-gradient(180deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.9));
   backdrop-filter: blur(8px);
   border: 1px solid #eaeef5;
   box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 12px 36px rgba(15, 23, 42, 0.08);

   /* 부드러운 보더 하이라이트 */
   &::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 20px;
      pointer-events: none;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.35);
      opacity: 0.7;
   }
`

const CardKicker = styled.span`
   display: inline-block;
   font-size: 12px;
   letter-spacing: 0.08em;
   font-weight: 800;
   color: #ee5a6f;
   background: linear-gradient(135deg, #ffe4e8, #ffd9e1);
   padding: 6px 10px;
   border-radius: 999px;
   border: 1px solid #ffd2dc;
`

const CardHead = styled.div`
   display: flex;
   align-items: center;
   gap: 12px;
   margin-top: 0.85rem;
`

const SmallMuted = styled.div`
   font-size: 12px;
   color: #94a3b8;
   font-weight: 700;
   letter-spacing: 0.04em;
`

const ChipRow = styled.div`
   display: flex;
   gap: 0.5rem;
   flex-wrap: wrap;
   margin-top: 1rem;
`

const Chip = styled.span`
   font-size: 12px;
   font-weight: 700;
   color: #0f172a;
   background: #f1f5f9;
   border: 1px solid #e2e8f0;
   padding: 6px 10px;
   border-radius: 999px;
`

const BadgeRow = styled.div`
   display: flex;
   gap: 0.5rem;
   flex-wrap: wrap;
   margin-top: 1rem;
   align-items: center;
   ${CardBadge} {
      background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
      border: none;
   }
`

const InfoRow = styled.div`
   display: flex;
   gap: 0.75rem;
   flex-wrap: wrap;
   align-items: center;
   margin-top: 1rem;
`

const InfoItem = styled.a`
   display: inline-flex;
   align-items: center;
   gap: 0.5rem;
   padding: 6px 10px;
   border-radius: 10px;
   background: #f8fafc;
   border: 1px solid #e2e8f0;
   color: #475569;
   font-size: 13px;
   font-weight: 600;

   svg {
      color: #3b82f6;
   }
`

const Pill = styled.span`
   display: inline-flex;
   align-items: center;
   padding: 6px 10px;
   border-radius: 999px;
   background: #fff7ed;
   color: #b45309;
   border: 1px solid #fcd34d;
   font-size: 12px;
   font-weight: 800;
`

/* 카드 코너 글로우 */
const CornerGlow = styled.div`
   position: absolute;
   width: 340px;
   height: 340px;
   border-radius: 50%;
   filter: blur(60px);
   opacity: 0.35;
   top: -140px;
   right: -140px;
   background: radial-gradient(closest-side, rgba(238, 90, 111, 0.6), transparent 70%);
   pointer-events: none;

   ${(p) =>
      p.$alt &&
      `
    left:-140px; right:auto; top:auto; bottom:-140px;
    background: radial-gradient(closest-side, rgba(59,130,246,.5), transparent 70%);
  `}
`

/* 스윕 샤인 (부드러운 하이라이트) */
const SweepShine = styled.div`
   position: absolute;
   inset: -2px;
   background: linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.35) 45%, transparent 65%);
   mix-blend-mode: soft-light;
   transform: translateX(-120%);
   transition: transform 0.95s cubic-bezier(0.22, 1, 0.36, 1);
   ${GlassOverviewCard}:hover & {
      transform: translateX(120%);
   }
`

// ===== Vision 리디자인 =====
const VisionHeader = styled.div`
   text-align: center;
   margin-bottom: 3.5rem;
`

const VisionKicker = styled.span`
   display: inline-block;
   font-weight: 700;
   letter-spacing: 0.12em;
   font-size: 0.8rem;
   color: #ef4444;
   background: #fff;
   border: 1px solid #ffe1e1;
   padding: 0.35rem 0.7rem;
   border-radius: 999px;
`

const VisionHeading = styled.h3`
   margin: 0.9rem 0 0.6rem;
   font-size: 2rem;
   font-weight: 800;
   color: #0f172a;

   em {
      font-style: normal;
      color: #ef4444;
   }
   strong {
      color: #2563eb;
   }
   @media (max-width: 768px) {
      font-size: 1.6rem;
   }
`

const VisionSub = styled.p`
   color: #64748b;
   max-width: 680px;
   margin: 0 auto;
   line-height: 1.6;
`

const VisionProGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(2, minmax(0, 1fr));
   gap: 2rem;

   @media (max-width: 968px) {
      grid-template-columns: 1fr;
   }
`

const VisionProCard = styled.div`
   position: relative;
   border-radius: 22px;
   background: rgba(255, 255, 255, 0.85);
   backdrop-filter: blur(10px);
   border: 1px solid #e9eef5;
   overflow: hidden;
`

const VisionBorder = styled.div`
   position: absolute;
   inset: 0;
   pointer-events: none;
   border-radius: 22px;
   padding: 1px;
   background: radial-gradient(1200px 1200px at 10% -10%, rgba(255, 255, 255, 0.4), transparent 60%), ${({ $accent }) => ($accent === 'blue' ? 'linear-gradient(135deg, rgba(59,130,246,.25), rgba(56,189,248,.25))' : 'linear-gradient(135deg, rgba(244,114,182,.25), rgba(239,68,68,.25))')};
   -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
   -webkit-mask-composite: xor;
   mask-composite: exclude;
`

const VisionInner = styled.div`
   position: relative;
   z-index: 1;
   padding: 2rem;
`

const VisionIconRing = styled.div`
   width: 70px;
   height: 70px;
   border-radius: 16px;
   display: grid;
   place-items: center;
   font-size: 1.6rem;
   color: #fff;
   margin-bottom: 1.2rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   ${({ $accent }) => ($accent === 'blue' ? 'background: linear-gradient(135deg, #60a5fa 0%, #2563eb 100%);' : 'background: linear-gradient(135deg, #fb7185 0%, #ef4444 100%);')}
`

const VisionTitleRow = styled.div`
   display: flex;
   align-items: center;
   gap: 0.6rem;
   flex-wrap: wrap;
   margin-bottom: 0.5rem;
`

const VisionBadge = styled.span`
   display: inline-flex;
   align-items: center;
   gap: 0.4rem;
   padding: 0.35rem 0.6rem;
   border-radius: 999px;
   font-size: 0.8rem;
   font-weight: 800;
   letter-spacing: 0.06em;
   color: #fff;
   ${({ $accent }) => ($accent === 'blue' ? 'background: linear-gradient(135deg, #93c5fd 0%, #3b82f6 100%);' : 'background: linear-gradient(135deg, #fda4af 0%, #ef4444 100%);')}
`

const VisionTitle = styled.h4`
   margin: 0;
   font-size: 1.35rem;
   font-weight: 800;
   color: #0f172a;
   @media (max-width: 768px) {
      font-size: 1.2rem;
   }
`

const VisionLead = styled.p`
   margin: 0.5rem 0 1rem;
   color: #334155;
   line-height: 1.7;
`

const VisionList = styled.ul`
   margin: 0.25rem 0 0;
   padding: 0;
   list-style: none;
   display: grid;
   gap: 0.6rem;

   li {
      position: relative;
      padding-left: 1.2rem;
      color: #475569;
   }
   li::before {
      content: '✓';
      position: absolute;
      left: 0;
      top: 0;
      color: #10b981;
      font-weight: 800;
   }
`

// 카드의 상단에 부드러운 샤인 스윕
const Shine = styled.div`
   pointer-events: none;
   position: absolute;
   inset: -40% -40%;
   background: linear-gradient(75deg, transparent 0%, rgba(255, 255, 255, 0.16) 35%, transparent 70%);
   transform: translateX(-60%);
   animation: shineMove 3.6s ease-in-out infinite;
   @keyframes shineMove {
      0% {
         transform: translateX(-60%) rotate(0.001deg);
      }
      60% {
         transform: translateX(20%) rotate(0.001deg);
      }
      100% {
         transform: translateX(120%) rotate(0.001deg);
      }
   }
`

/* ===== Business 리디자인 ===== */
const BusinessHeader = styled.div`
   text-align: center;
   margin-bottom: 3.2rem;
`

const BizKicker = styled.span`
   display: inline-block;
   font-weight: 800;
   letter-spacing: 0.12em;
   font-size: 0.8rem;
   color: #ef4444;
   background: #fff;
   border: 1px solid #ffe1e1;
   padding: 0.35rem 0.7rem;
   border-radius: 999px;
`

const BizHeading = styled.h3`
   margin: 0.9rem 0 0.6rem;
   font-size: 2rem;
   font-weight: 900;
   color: #0f172a;
   em {
      font-style: normal;
      color: #ef4444;
   }
   @media (max-width: 768px) {
      font-size: 1.6rem;
   }
`

const BizSub = styled.p`
   color: #64748b;
   max-width: 680px;
   margin: 0 auto;
   line-height: 1.6;
`

const Pillars = styled.div`
   display: grid;
   gap: 1.2rem;
   position: relative;
   isolation: isolate;
   /* 은은한 배경 패턴 */
   &:before {
      content: '';
      position: absolute;
      inset: -10% -10% -20% -10%;
      z-index: -1;
      background: radial-gradient(600px 300px at 10% -10%, rgba(238, 90, 111, 0.08), transparent 60%), radial-gradient(500px 300px at 90% 110%, rgba(59, 130, 246, 0.08), transparent 60%);
      pointer-events: none;
   }
`

const PillarRow = styled.div`
   position: relative;
   display: grid;
   grid-template-columns: 80px 1fr;
   align-items: start;
   gap: 1.2rem;
   padding: 1.2rem 1.2rem 1.2rem 1rem;
   border-radius: 18px;
   background: rgba(255, 255, 255, 0.85);
   backdrop-filter: blur(10px);
   border: 1px solid #e9eef5;
   overflow: hidden;

   @media (max-width: 640px) {
      grid-template-columns: 64px 1fr;
      padding: 1rem;
   }
`

const PillarAccent = styled.div`
   position: absolute;
   inset: 0;
   pointer-events: none;
   mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
   mask-composite: exclude;
   -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
   -webkit-mask-composite: xor;
   padding: 1px;
   border-radius: 18px;
   background: ${({ $accent }) => {
      switch ($accent) {
         case 'blue':
            return 'linear-gradient(135deg, rgba(59,130,246,.35), rgba(56,189,248,.22))'
         case 'teal':
            return 'linear-gradient(135deg, rgba(45,212,191,.35), rgba(34,197,94,.22))'
         case 'amber':
            return 'linear-gradient(135deg, rgba(245,158,11,.35), rgba(251,191,36,.22))'
         default:
            return 'linear-gradient(135deg, rgba(244,114,182,.35), rgba(239,68,68,.22))'
      }
   }};
`

const PillarIconRing = styled.div`
   width: 70px;
   height: 70px;
   border-radius: 16px;
   display: grid;
   place-items: center;
   font-size: 1.6rem;
   color: #fff;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

   ${({ $accent }) => {
      switch ($accent) {
         case 'blue':
            return 'background: linear-gradient(135deg, #60a5fa, #2563eb);'
         case 'teal':
            return 'background: linear-gradient(135deg, #34d399, #0ea5e9);'
         case 'amber':
            return 'background: linear-gradient(135deg, #f59e0b, #ef4444);'
         default:
            return 'background: linear-gradient(135deg, #fb7185, #ef4444);'
      }
   }}

   @media (max-width: 640px) {
      width: 60px;
      height: 60px;
      font-size: 1.4rem;
      border-radius: 14px;
   }
`

const PillarBody = styled.div`
   position: relative;
`

const PillarTop = styled.div`
   display: flex;
   align-items: baseline;
   gap: 0.8rem;
   flex-wrap: wrap;
`

const PillarIndex = styled.span`
   font-weight: 900;
   font-size: 0.95rem;
   color: #ef4444;
   background: #fff;
   border: 1px solid #ffe1e1;
   padding: 0.2rem 0.5rem;
   border-radius: 8px;
`

const PillarTitle = styled.h4`
   margin: 0;
   font-size: 1.35rem;
   font-weight: 800;
   color: #0f172a;
   @media (max-width: 640px) {
      font-size: 1.15rem;
   }
`

const PillarLead = styled.p`
   margin: 0.4rem 0 0.9rem;
   color: #334155;
   line-height: 1.7;
`

const BSChipRow = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 0.5rem;
`

const BSChip = styled.span`
   display: inline-flex;
   align-items: center;
   gap: 0.35rem;
   padding: 0.4rem 0.7rem;
   border-radius: 999px;
   font-size: 0.85rem;
   color: #0f172a;
   background: #fff;
   border: 1px solid #e9eef5;
   box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);

   &:before {
      content: '•';
      color: #ef4444;
      font-weight: 900;
      transform: translateY(-1px);
   }
`

/* 우측 상단에 아주 옅은 장식(블롭/그리드) */
const PillarGhostIllustration = styled.div`
   position: absolute;
   right: -40px;
   top: -40px;
   width: 240px;
   height: 240px;
   border-radius: 50%;
   background: radial-gradient(closest-side, rgba(238, 90, 111, 0.1), transparent 65%), radial-gradient(closest-side, rgba(59, 130, 246, 0.1), transparent 60%);
   filter: blur(8px);
   opacity: 0.6;
   pointer-events: none;

   @media (max-width: 640px) {
      width: 180px;
      height: 180px;
      right: -30px;
      top: -30px;
   }
`
/* ==== History Redesign ==== */
const TimelineWrap = styled.div`
   position: relative;
   margin: 2rem 0 0;
`

const HistoryRow = styled.div`
   position: relative;
   display: grid;
   grid-template-columns: 1fr 80px 1fr;
   align-items: start;
   gap: 1.2rem;
   margin: 1.6rem 0;

   @media (max-width: 860px) {
      grid-template-columns: 16px 1fr;
      gap: 1rem;
   }
`

const SideCol = styled.div`
   position: relative;

   &.left {
      text-align: right;
   }
   &.right {
      text-align: left;
   }

   @media (max-width: 860px) {
      grid-column: 2 / -1 !important;
      text-align: left;
   }
`

const CenterRail = styled.div`
   position: relative;
   height: 100%;
   min-height: 90px;

   &:before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 3px;
      transform: translateX(-50%);
      border-radius: 999px;
      background: linear-gradient(180deg, #ff6b6b, #3b82f6);
      opacity: 0.25;
   }

   @media (max-width: 860px) {
      grid-column: 1 / 2;
      min-height: 40px;
   }
`

const Dot = styled.span`
   position: absolute;
   left: 50%;
   top: 10px;
   transform: translate(-50%, -50%);
   width: 14px;
   height: 14px;
   border-radius: 50%;
   background: #fff;
   border: 3px solid #ff6b6b;
   box-shadow: 0 8px 18px rgba(239, 68, 68, 0.25);

   @media (max-width: 860px) {
      top: 6px;
   }
`

const YearChip = styled.span`
   display: inline-flex;
   align-items: center;
   gap: 0.45rem;
   margin: 0.25rem 0 0.75rem;
   padding: 0.35rem 0.7rem;
   font-weight: 800;
   font-size: 0.8rem;
   letter-spacing: 0.06em;
   color: #ef4444;
   background: #fff;
   border: 1px solid #ffe1e1;
   border-radius: 999px;

   &:before {
      content: '•';
      color: #ef4444;
   }

   @media (max-width: 860px) {
      font-size: 0.78rem;
   }
`

const HistCard = styled.div`
   position: relative;
   display: block;
   background: rgba(255, 255, 255, 0.85);
   backdrop-filter: blur(8px);
   border: 1px solid #e9eef5;
   border-radius: 16px;
   padding: 1.1rem 1.1rem 1.1rem 3.5rem;
   box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
   transition: transform 0.2s ease, box-shadow 0.2s ease;

   h4 {
      margin: 0.1rem 0 0.35rem;
      font-size: 1.1rem;
      font-weight: 800;
      color: #0f172a;
   }

   p {
      margin: 0;
      color: #475569;
      line-height: 1.65;
   }

   &:hover {
      transform: translateY(-2px);
      box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
   }

   @media (max-width: 860px) {
      padding-left: 3.1rem;
   }
`

const HistIcon = styled.div`
   position: absolute;
   left: 0.9rem;
   top: 0.9rem;
   width: 36px;
   height: 36px;
   border-radius: 12px;
   display: grid;
   place-items: center;
   color: #fff;
   font-size: 1rem;
   box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);

   &.pink {
      background: linear-gradient(135deg, #fb7185, #ef4444);
   }
   &.blue {
      background: linear-gradient(135deg, #60a5fa, #2563eb);
   }
   &.teal {
      background: linear-gradient(135deg, #34d399, #0ea5e9);
   }
   &.amber {
      background: linear-gradient(135deg, #f59e0b, #ef4444);
   }

   @media (max-width: 860px) {
      left: 0.8rem;
      top: 0.8rem;
   }
`

const TagList = styled.ul`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
   gap: 0.5rem;
   list-style: none;
   margin: 0.8rem 0 0;
   padding: 0;

   li {
      background: #f8fafc;
      border: 1px solid #e6ecf3;
      color: #334155;
      font-size: 0.9rem;
      border-radius: 10px;
      padding: 0.5rem 0.8rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
   }
`

/* ==== Operation Redesign (Rail + Pills) ==== */
const PrinciplesWrap = styled.div`
   position: relative;
   display: grid;
   grid-template-columns: repeat(4, minmax(220px, 1fr));
   gap: 1.25rem;
   margin-top: 1rem;
   padding: 1rem 0 0;

   @media (max-width: 1100px) {
      grid-template-columns: repeat(2, minmax(220px, 1fr));
   }
   @media (max-width: 720px) {
      grid-template-columns: 1fr;
   }
`

const Rail = styled.div`
   position: absolute;
   left: 0;
   right: 0;
   top: 48px; /* 아이템 헤딩 라인 기준 */
   height: 4px;
   border-radius: 999px;
   background: linear-gradient(90deg, rgba(255, 107, 107, 0.18), rgba(59, 130, 246, 0.18));
   pointer-events: none;

   @media (max-width: 720px) {
      left: 18px;
      right: 18px;
      top: 56px;
   }
`

const PrincipleItem = styled.div`
   position: relative;
   background: rgba(255, 255, 255, 0.85);
   backdrop-filter: blur(10px);
   border: 1px solid #e9eef5;
   border-radius: 16px;
   padding: 1.1rem 1rem 1rem 1rem;
   box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);
   transition: transform 0.18s ease, box-shadow 0.18s ease;

   &:hover {
      transform: translateY(-3px);
      box-shadow: 0 22px 48px rgba(15, 23, 42, 0.1);
   }

   h4 {
      margin: 0.35rem 0 0.35rem 48px;
      font-size: 1.05rem;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: 0.01em;
   }

   p {
      margin: 0 0 0.6rem 48px;
      color: #475569;
      line-height: 1.65;
      font-size: 0.98rem;
   }
`

const Badge = styled.div`
   position: absolute;
   left: 0.9rem;
   top: 0.9rem;
   width: 36px;
   height: 36px;
   border-radius: 12px;
   display: grid;
   place-items: center;
   color: #fff;
   font-size: 1rem;
   box-shadow: 0 12px 26px rgba(0, 0, 0, 0.12);
   border: 1px solid rgba(255, 255, 255, 0.15);

   &.pink {
      background: linear-gradient(135deg, #fb7185, #ef4444);
   }
   &.blue {
      background: linear-gradient(135deg, #60a5fa, #2563eb);
   }
   &.teal {
      background: linear-gradient(135deg, #34d399, #0ea5e9);
   }
   &.amber {
      background: linear-gradient(135deg, #f59e0b, #ef4444);
   }

   @media (max-width: 720px) {
      left: 0.85rem;
      top: 0.85rem;
   }
`

const Meta = styled.div`
   margin-left: 45px;
   display: inline-flex;
   align-items: center;
   gap: 0.5rem;
   padding: 0.35rem 0.6rem;
   font-weight: 700;
   font-size: 0.78rem;
   color: #334155;
   border: 1px solid #e8eef5;
   background: #f8fafc;
   border-radius: 999px;

   &:before {
      content: '✓';
      display: inline-block;
      font-weight: 900;
      color: #10b981;
   }
`

const VisionSection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`

const BusinessSection = styled.section`
   padding: 6rem 0;
   background: white;
`

const HistorySection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`

const OperationSection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`
