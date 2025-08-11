import { motion } from 'framer-motion'
import { FaSnowflake, FaCertificate, FaWrench, FaClipboardCheck, FaUserCheck, FaAward, FaExclamationTriangle, FaInfoCircle, FaHome, FaBuilding, FaStore, FaBriefcase, FaThermometerHalf, FaFan, FaSearch, FaCogs, FaSprayCan, FaCheckCircle } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { getImageUrl, getOptimizedImageProps } from '../../../utils/imageHelpers'
import { ProcessTimeline } from '../../../components/common/ProcessTimeline'
import { BeforeAfterSlider } from '../../../components/common/BeforeAfterSlider'
import {
   fadeInScale,
   staggerContainer,
   slideInLeft,
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
   LegalDisclaimer,
   HeroImageContainer,
   HeroImagePlaceholder,
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
   CardBadge,
   ExamSection,
   ExamCard,
   ExamIcon,
   ExamType,
   SubjectTitle,
   SubjectList,
   RequirementSection,
   RequirementCard,
   RequirementIcon,
   RequirementTitle,
   RequirementList,
   RequirementItem,
   InfoSection,
   InfoCard,
   InfoIcon,
   InfoTitle,
   InfoContent,
   InfoItem,
   InfoHighlight,
   LegalNoticeSection,
   LegalCard,
   LegalTitle,
   LegalContent,
   LegalItem,
   ImportantNoticeCard,
   NoticeIcon,
   NoticeTitle,
   NoticeContent,
   NoticeItem,
   ApplicationCard,
   ApplicationIcon,
   ApplicationTitle,
   ApplicationDescription,
   RequirementGrid,
   InfoGrid,
   LegalGrid,
   AdditionalInfoSection,
   ImageGallery,
   ImageGalleryItem,
   ImageCaption,
   ResponsiveImage,
   StatisticsSection,
   StatCard,
   StatNumber,
   StatLabel,
   ZigzagSection,
   ZigzagLayout,
   ZigzagContent,
   ZigzagImage,
   CompactSection,
   ExamNotice,
   NoticeText,
} from '../../../components/common/SharedStyles'

export function AirConditionerServicePage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: overviewRef, inView: overviewInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: examRef, inView: examInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: requirementRef, inView: requirementInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: additionalRef, inView: additionalInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: applicationRef, inView: applicationInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: legalRef, inView: legalInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   return (
      <PageWrapper>
         {/* Hero Section - 현대적 디자인 */}
         <ModernHeroSection ref={heroRef} bgImage={getImageUrl('hero', 'aircon.jpg')}>
            <HeroBackground radialGradient="radial-gradient(circle at 20% 80%, rgba(116, 185, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)" />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={slideInLeft}>
                  <HeroBadge>
                     <FaCertificate />
                     <span>등록민간자격 2025-000932</span>
                  </HeroBadge>
                  <HeroTitle>
                     냉난방기 세척서비스
                     <br />
                     <GradientText>관리사</GradientText>
                  </HeroTitle>
                  <HeroSubtitle>Air Conditioner Cleaning Service Manager</HeroSubtitle>
                  <HeroDescription>냉난방기를 분해조립, 내외부 청소 및 세척, 유지보수 등의 업무와 냉난방기 설치 및 유지보수관리 전문가 자격증</HeroDescription>
                  <LegalDisclaimer>※ 본 자격은 자격기본법에 따른 등록민간자격으로, 국가공인자격이 아닙니다.</LegalDisclaimer>
               </motion.div>
               <HeroImageContainer>
                  <HeroImagePlaceholder>
                     <FaSnowflake size={80} />
                     <FaThermometerHalf size={60} />
                     <FaFan size={70} />
                     <p>냉난방기 전문 관리</p>
                  </HeroImagePlaceholder>
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         {/* 통계 섹션 */}
         <StatisticsSection>
            <Container>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                  <StatisticsGrid>
                     <StatCard variants={fadeInScale}>
                        <StatNumber>1,800+</StatNumber>
                        <StatLabel>자격 취득자</StatLabel>
                     </StatCard>
                     <StatCard variants={fadeInScale}>
                        <StatNumber>92%</StatNumber>
                        <StatLabel>합격률</StatLabel>
                     </StatCard>
                     <StatCard variants={fadeInScale}>
                        <StatNumber>32시간</StatNumber>
                        <StatLabel>교육 시간</StatLabel>
                     </StatCard>
                     <StatCard variants={fadeInScale}>
                        <StatNumber>실기중심</StatNumber>
                        <StatLabel>교육 특징</StatLabel>
                     </StatCard>
                  </StatisticsGrid>
               </motion.div>
            </Container>
         </StatisticsSection>

         {/* 자격 개요 섹션 */}
         <Section ref={overviewRef} background="white">
            <Container>
               <motion.div initial="hidden" animate={overviewInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>자격 개요</SectionTitle>
                     <SectionSubtitle>냉난방기 세척서비스 관리사 자격의 핵심 정보를 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <Grid>
                     <Card variants={fadeInScale}>
                        <CardIcon primary>
                           <FaCertificate />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>자격 등급</CardTitle>
                           <CardDescription>단일등급</CardDescription>
                           <CardBadge>실기 전문</CardBadge>
                        </CardContent>
                     </Card>

                     <Card variants={fadeInScale}>
                        <CardIcon secondary>
                           <FaSnowflake />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>직무 내용</CardTitle>
                           <CardDescription>사무실, 가정등에서 냉난방기를 분해조립, 내외부 청소 및 세척, 유지보수 등의 업무와 냉난방기 설치 및 유지보수관리 업무</CardDescription>
                        </CardContent>
                     </Card>

                     <Card variants={fadeInScale}>
                        <CardIcon accent>
                           <FaWrench />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>검정 기준</CardTitle>
                           <CardDescription>냉난방 세척 장비를 활용하여 냉난방기 세척 및 재조립 능력을 갖춘 수준을 측정</CardDescription>
                        </CardContent>
                     </Card>
                  </Grid>
               </motion.div>
            </Container>
         </Section>

         {/* 검정 과목 및 방법 섹션 */}
         <ExamSection ref={examRef}>
            <Container>
               <motion.div initial="hidden" animate={examInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>검정 과목 및 방법</SectionTitle>
                     <SectionSubtitle>실기 중심의 전문적인 평가 시스템</SectionSubtitle>
                  </SectionHeader>

                  <ExamNotice style={{ margin: '30px 260px' }}>
                     <NoticeIcon style={{ margin: 0 }}>
                        <FaInfoCircle />
                     </NoticeIcon>
                     <NoticeText>
                        <strong>본 자격증은 실기시험만 시행됩니다.</strong>
                     </NoticeText>
                  </ExamNotice>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', maxWidth: '600px', margin: '0 auto' }}>
                     <ExamCard variants={fadeInScale}>
                        <ExamIcon>
                           <FaWrench />
                        </ExamIcon>
                        <ExamType>실기시험 (실습)</ExamType>
                        <div>
                           <SubjectTitle>검정 과목</SubjectTitle>
                           <SubjectList>
                              <li>그릴 분해세척 이론 및 실습</li>
                              <li>필터 분해세척 이론 및 실습</li>
                              <li>프론트판넬 내외부 청소 이론 및 실습</li>
                              <li>필터 건조 및 결합 이론 및 실습</li>
                              <li>그릴 건조 및 결합 이론 및 실습</li>
                              <li>외관 청소 이론 및 실습</li>
                              <li>전체 작동점검 실습</li>
                           </SubjectList>
                        </div>
                     </ExamCard>
                  </div>
               </motion.div>
            </Container>
         </ExamSection>

         {/* 응시 자격 및 합격 기준 섹션 */}
         <RequirementSection ref={requirementRef}>
            <Container>
               <motion.div initial="hidden" animate={requirementInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>응시 자격 및 합격 기준</SectionTitle>
                     <SectionSubtitle>자격 취득을 위한 응시 조건과 합격 기준을 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <RequirementGrid>
                     <RequirementCard variants={fadeInScale}>
                        <RequirementIcon>
                           <FaUserCheck />
                        </RequirementIcon>
                        <RequirementTitle>응시 자격</RequirementTitle>
                        <RequirementList>
                           <RequirementItem>
                              <strong>연령:</strong> 제한 없음
                           </RequirementItem>
                           <RequirementItem>
                              <strong>학력:</strong> 제한 없음
                           </RequirementItem>
                           <RequirementItem>
                              <strong>필수 조건:</strong> 냉난방기 세척서비스 관리사 종합 교육을 이수한 자
                           </RequirementItem>
                        </RequirementList>
                     </RequirementCard>

                     <RequirementCard variants={fadeInScale}>
                        <RequirementIcon>
                           <FaClipboardCheck />
                        </RequirementIcon>
                        <RequirementTitle>합격 기준</RequirementTitle>
                        <RequirementList>
                           <RequirementItem>
                              <strong>실기시험:</strong> 100점 만점 기준 60점 이상이며, 평가항목별 점수의 60% 이상 득점
                           </RequirementItem>
                           <RequirementItem>
                              <strong>최종 합격:</strong> 실기시험에 합격한 자
                           </RequirementItem>
                        </RequirementList>
                     </RequirementCard>
                  </RequirementGrid>
               </motion.div>
            </Container>
         </RequirementSection>

         {/* 냉난방기 유지보수 프로세스 타임라인 */}
         <Section background="linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)">
            <Container>
               <ProcessTimeline
                  title="냉난방기 유지보수 프로세스"
                  subtitle="전문적이고 체계적인 6단계 냉난방기 세척 및 유지보수 과정"
                  steps={[
                     {
                        icon: <FaSearch />,
                        title: '사전 점검 및 진단',
                        description: '냉난방기 상태 점검과 문제점 파악을 통한 서비스 계획 수립',
                        details: ['냉난방기 외관 및 작동 상태 점검', '필터 오염도 및 교체 필요성 확인', '냉매 압력 및 누수 여부 점검', '전기 연결 상태 및 안전성 확인'],
                        badge: '진단 단계',
                     },
                     {
                        icon: <FaCogs />,
                        title: '안전한 분해 작업',
                        description: '전문 도구를 사용한 체계적이고 안전한 냉난방기 분해',
                        details: ['전원 차단 및 안전 조치', '그릴 및 프론트 패널 분해', '필터 및 내부 부품 분리', '분해된 부품의 체계적 분류 및 보관'],
                        badge: '분해 단계',
                     },
                     {
                        icon: <FaSprayCan />,
                        title: '전문 세척 및 청소',
                        description: '각 부품별 맞춤형 세척으로 완벽한 청소 효과 달성',
                        details: ['필터 고압 세척 및 항균 처리', '그릴 및 패널 전용 세제 세척', '열교환기 핀 코일 정밀 청소', '배수 라인 및 드레인 청소'],
                        badge: '세척 단계',
                     },
                     {
                        icon: <FaWrench />,
                        title: '부품 점검 및 교체',
                        description: '마모된 부품 교체와 정밀 유지보수 작업',
                        details: ['필터 상태 확인 및 필요시 교체', '벨트 및 모터 부품 점검', '온도 센서 및 제어 장치 점검', '냉매 압력 조정 및 보충'],
                        badge: '정비 단계',
                     },
                     {
                        icon: <FaCogs />,
                        title: '정밀 조립 및 설치',
                        description: '청소된 부품의 정확한 조립과 설치 작업',
                        details: ['분해 순서의 역순으로 정밀 조립', '모든 연결부 및 나사 고정 확인', '배관 연결 및 누설 점검', '전기 연결 및 절연 상태 확인'],
                        badge: '조립 단계',
                     },
                     {
                        icon: <FaCheckCircle />,
                        title: '성능 테스트 및 완료',
                        description: '최종 성능 확인과 고객 만족도 점검',
                        details: ['냉난방 성능 및 온도 조절 테스트', '소음 및 진동 레벨 확인', '전력 소비량 및 효율성 측정', '서비스 완료 보고서 및 사후관리 안내'],
                        badge: '완료 단계',
                     },
                  ]}
               />
            </Container>
         </Section>

         {/* 세척 전후 효과 비교 */}
         <Section>
            <Container>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>세척 전후 효과 비교</SectionTitle>
                     <SectionSubtitle>전문적인 냉난방기 세척 서비스의 놀라운 효과를 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <motion.div variants={fadeInScale}>
                     <BeforeAfterSlider beforeImage={getImageUrl('certifications', 'aircon/before.jpg')} afterImage={getImageUrl('certifications', 'aircon/after.jpg')} beforeLabel="세척 전" afterLabel="세척 후" alt="냉난방기 세척 전후 비교" />
                  </motion.div>
               </motion.div>
            </Container>
         </Section>

         {/* 작업 과정 갤러리 섹션 */}
         <Section>
            <Container>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>실제 작업 과정</SectionTitle>
                     <SectionSubtitle>전문가의 체계적인 냉난방기 세척 서비스 과정을 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <ImageGallery>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'aircon/service.jpg'), '냉난방기 세척 작업', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>전문 세척 작업</h4>
                           <p>체계적이고 안전한 냉난방기 분해 및 세척 과정</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'aircon/maintenance.jpg'), '유지보수 작업', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>정밀 유지보수</h4>
                           <p>부품 점검 및 교체를 통한 최적 성능 유지</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('products', 'certification.jpg'), '서비스 완료 인증', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>서비스 완료</h4>
                           <p>품질 검증 및 서비스 완료 확인서 발급</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                  </ImageGallery>
               </motion.div>
            </Container>
         </Section>

         {/* 추가 정보 섹션 */}
         <AdditionalInfoSection ref={additionalRef}>
            <Container>
               <motion.div initial="hidden" animate={additionalInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>추가 정보</SectionTitle>
                     <SectionSubtitle>시험 면제 조건과 자격 유효기간에 대한 상세 정보</SectionSubtitle>
                  </SectionHeader>

                  <InfoGrid>
                     <InfoCard variants={fadeInScale}>
                        <InfoIcon>
                           <FaInfoCircle />
                        </InfoIcon>
                        <InfoTitle>검정의 일부 면제</InfoTitle>
                        <InfoContent>
                           <InfoItem>필기시험 또는 실기시험 중 1개만 합격한 경우, 이후에 시행되는 시험에 있어서 연속하여 2회에 한하여 합격한 시험을 면제</InfoItem>
                           <InfoItem>필기시험 불합격자 중에서 시험과목별 100점 만점 기준 60점 이상 득점자에 한하여 이후에 시행되는 시험에 있어서 연속하여 2회에 한하여 해당과목을 면제</InfoItem>
                        </InfoContent>
                     </InfoCard>

                     <InfoCard variants={fadeInScale}>
                        <InfoIcon>
                           <FaAward />
                        </InfoIcon>
                        <InfoTitle>자격 유효기간</InfoTitle>
                        <InfoContent>
                           <InfoHighlight>
                              냉난방기 세척서비스 관리사 자격은 <strong>취득시부터 영구 유효</strong>합니다.
                           </InfoHighlight>
                        </InfoContent>
                     </InfoCard>
                  </InfoGrid>
               </motion.div>
            </Container>
         </AdditionalInfoSection>

         {/* 실무 활용 분야 섹션 */}
         <Section ref={applicationRef} background="linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)">
            <Container>
               <motion.div initial="hidden" animate={applicationInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>실무 활용 분야</SectionTitle>
                     <SectionSubtitle>자격 취득 후 다양한 분야에서 활용 가능한 전문 영역</SectionSubtitle>
                  </SectionHeader>

                  <Grid columns="repeat(auto-fit, minmax(250px, 1fr))">
                     <ApplicationCard variants={fadeInScale}>
                        <ApplicationIcon>
                           <FaHome />
                        </ApplicationIcon>
                        <ApplicationTitle>가정용 냉난방기 서비스</ApplicationTitle>
                        <ApplicationDescription>일반 가정의 에어컨, 히터 등 냉난방기 청소 및 유지보수 서비스</ApplicationDescription>
                     </ApplicationCard>

                     <ApplicationCard variants={fadeInScale}>
                        <ApplicationIcon>
                           <FaBuilding />
                        </ApplicationIcon>
                        <ApplicationTitle>상업용 냉난방기 관리</ApplicationTitle>
                        <ApplicationDescription>사무실, 상가, 공공시설 등의 대형 냉난방 시설 관리 및 유지보수</ApplicationDescription>
                     </ApplicationCard>

                     <ApplicationCard variants={fadeInScale}>
                        <ApplicationIcon>
                           <FaStore />
                        </ApplicationIcon>
                        <ApplicationTitle>창업 및 독립</ApplicationTitle>
                        <ApplicationDescription>냉난방기 청소 전문업체 창업 또는 프리랜서 서비스 제공</ApplicationDescription>
                     </ApplicationCard>

                     <ApplicationCard variants={fadeInScale}>
                        <ApplicationIcon>
                           <FaBriefcase />
                        </ApplicationIcon>
                        <ApplicationTitle>기업 취업</ApplicationTitle>
                        <ApplicationDescription>가전제품 A/S 센터, 청소 전문업체, 시설관리업체 등 취업</ApplicationDescription>
                     </ApplicationCard>
                  </Grid>
               </motion.div>
            </Container>
         </Section>

         {/* 민간자격 법적 고지사항 섹션 */}
         <LegalNoticeSection ref={legalRef}>
            <Container>
               <motion.div initial="hidden" animate={legalInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>민간자격 등록 현황</SectionTitle>
                     <SectionSubtitle>자격기본법에 따른 법적 의무 표시사항</SectionSubtitle>
                  </SectionHeader>

                  <LegalGrid>
                     <LegalCard variants={fadeInScale}>
                        <LegalTitle>등록 정보</LegalTitle>
                        <LegalContent>
                           <LegalItem>
                              <strong>자격명:</strong> 냉난방기 세척서비스 관리사
                           </LegalItem>
                           <LegalItem>
                              <strong>등급명:</strong> 단일등급
                           </LegalItem>
                           <LegalItem>
                              <strong>자격 종류:</strong> 등록민간자격
                           </LegalItem>
                           <LegalItem>
                              <strong>등록번호:</strong> 2025-000932
                           </LegalItem>
                           <LegalItem>
                              <strong>자격발급기관:</strong> 한국생활가전유지관리협회
                           </LegalItem>
                           <LegalItem>
                              <strong>사업자등록번호:</strong> 108-82-87006
                           </LegalItem>
                           <LegalItem>
                              <strong>소재지:</strong> 인천광역시 서구 청라한내로72번길 13 (청라동) 203호
                           </LegalItem>
                           <LegalItem>
                              <strong>대표자명:</strong> 김윤채
                           </LegalItem>
                           <LegalItem>
                              <strong>연락처:</strong> 1566-3321
                           </LegalItem>
                        </LegalContent>
                     </LegalCard>

                     <LegalCard variants={fadeInScale}>
                        <LegalTitle>비용 및 환불 정보</LegalTitle>
                        <LegalContent>
                           <LegalItem>
                              <strong>자격의 종목 및 등급:</strong>
                              <br />
                              [종목] 냉난방기세척서비스관리사, [등급]단일등급
                           </LegalItem>
                           <LegalItem>
                              <strong>총비용:</strong> [교육비 + 시험비 + 자격발급비 확인 필요]
                           </LegalItem>
                           <LegalItem>
                              <strong>세부비용:</strong> 응시료 [금액], 자격발급비 [금액]
                           </LegalItem>
                           <LegalItem>
                              <strong>환불규정:</strong> 접수마감 전 100% 환불, 강의 당일 취소 시 30% 공제 후 환불
                           </LegalItem>
                           <LegalItem>
                              <strong>등록 조건:</strong> 자격기본법 제17조제2항과 같은 법 시행령제23조제4항 및 제23조의2제2항에 따라 위와 같이 민간자격에 대하여 등록하였음을 증명합니다.
                           </LegalItem>
                        </LegalContent>
                     </LegalCard>
                  </LegalGrid>

                  <ImportantNoticeCard variants={fadeInScale} style={{ marginTop: 50 }}>
                     <NoticeIcon>
                        <FaExclamationTriangle />
                     </NoticeIcon>
                     <NoticeTitle>소비자 알림 사항</NoticeTitle>
                     <NoticeContent>
                        <NoticeItem important>상기 "냉난방기 세척서비스 관리사"는 자격기본법 규정에 따라 등록한 민간자격으로, 국가로부터 인정받은 공인자격이 아닙니다.</NoticeItem>
                        <NoticeItem important>민간자격 등록 및 공인 제도에 대한 상세내용은 민간자격정보서비스(www.pqi.or.kr)의 '민간자격 소개' 란을 참고하여 주십시오.</NoticeItem>
                     </NoticeContent>
                  </ImportantNoticeCard>
               </motion.div>
            </Container>
         </LegalNoticeSection>
      </PageWrapper>
   )
}
