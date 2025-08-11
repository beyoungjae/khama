import { motion } from 'framer-motion'
import { FaAirFreshener, FaLeaf, FaCertificate, FaHome, FaClipboardCheck, FaUserCheck, FaAward, FaExclamationTriangle, FaInfoCircle, FaBuilding, FaStore, FaBriefcase, FaBook, FaWrench, FaLungs, FaShieldAlt, FaSearch, FaCogs, FaTools, FaCheckCircle } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { getImageUrl, getOptimizedImageProps } from '../../../utils/imageHelpers'
import { ProcessTimeline } from '../../../components/common/ProcessTimeline'
import { BeforeAfterSlider } from '../../../components/common/BeforeAfterSlider'
import {
   fadeInUp,
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
   SectionHeader,
   SectionTitle,
   SectionSubtitle,
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
   ProcessCard,
   ProcessNumber,
   ProcessTitle,
   ProcessDescription,
   ApplicationCard,
   ApplicationIcon,
   ApplicationTitle,
   ApplicationDescription,
   SickBuildingSection,
   SickBuildingContent,
   SickBuildingTextCard,
   SickBuildingTitle,
   SickBuildingDescription,
   InfoSubTitle,
   CauseGrid,
   CauseItem,
   SymptomGrid,
   SymptomItem,
   SickBuildingImageCard,
   SickBuildingIcon,
   SickBuildingImageTitle,
   SickBuildingImageDescription,
   OverviewSection,
   OverviewGrid,
   OverviewCard,
   ExamGrid,
   RequirementGrid,
   InfoGrid,
   ProcessGrid,
   ApplicationGrid,
   LegalGrid,
   ExamSubjects,
   AdditionalInfoSection,
   ProcessSection,
   ApplicationSection,
   Section,
   ImageGallery,
   ImageGalleryItem,
   ImageCaption,
   ResponsiveImage,
   StatisticsSection,
   StatisticsGrid,
   StatCard,
   StatNumber,
   StatLabel,
   ZigzagSection,
   ZigzagLayout,
   ZigzagContent,
   ZigzagImage,
   CompactSection,
} from '../../../components/common/SharedStyles'

export function VentilationSystemPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: overviewRef, inView: overviewInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: sickBuildingRef, inView: sickBuildingInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: examRef, inView: examInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: requirementRef, inView: requirementInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: additionalRef, inView: additionalInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: processRef, inView: processInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: applicationRef, inView: applicationInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: legalRef, inView: legalInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   return (
      <PageWrapper>
         {/* Hero Section - 현대적 디자인 */}
         <ModernHeroSection ref={heroRef} bgImage={getImageUrl('hero', 'ventilation.jpg')}>
            <HeroBackground gradient="linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%)" />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={slideInLeft}>
                  <HeroBadge>
                     <FaCertificate />
                     <span>등록민간자격 2025-000929</span>
                  </HeroBadge>
                  <HeroTitle>
                     환기청정시스템
                     <br />
                     <GradientText>관리사</GradientText>
                  </HeroTitle>
                  <HeroSubtitle>Ventilation & Air Purification System Manager</HeroSubtitle>
                  <HeroDescription>환기, 청정 장비를 활용하여 실내 환기와 청정 등 새집증후군등의 공기를 정화하는 전문가 자격증</HeroDescription>
                  <LegalDisclaimer>※ 본 자격은 자격기본법에 따른 등록민간자격으로, 국가공인자격이 아닙니다.</LegalDisclaimer>
               </motion.div>
               <HeroImageContainer>
                  <HeroImagePlaceholder>
                     <FaAirFreshener size={80} />
                     <FaLeaf size={60} />
                     <FaLungs size={70} />
                     <p>공기질 개선 전문가</p>
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
                        <StatNumber>1,200+</StatNumber>
                        <StatLabel>자격 취득자</StatLabel>
                     </StatCard>
                     <StatCard variants={fadeInScale}>
                        <StatNumber>94%</StatNumber>
                        <StatLabel>합격률</StatLabel>
                     </StatCard>
                     <StatCard variants={fadeInScale}>
                        <StatNumber>36시간</StatNumber>
                        <StatLabel>교육 시간</StatLabel>
                     </StatCard>
                     <StatCard variants={fadeInScale}>
                        <StatNumber>공기질개선</StatNumber>
                        <StatLabel>전문 분야</StatLabel>
                     </StatCard>
                  </StatisticsGrid>
               </motion.div>
            </Container>
         </StatisticsSection>

         {/* 자격 개요 섹션 */}
         <OverviewSection ref={overviewRef}>
            <Container>
               <motion.div initial="hidden" animate={overviewInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>자격 개요</SectionTitle>
                     <SectionSubtitle>환기청정시스템 관리사 자격의 핵심 정보를 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <OverviewGrid>
                     <OverviewCard variants={fadeInScale}>
                        <CardIcon primary>
                           <FaCertificate />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>자격 등급</CardTitle>
                           <CardDescription>단일등급</CardDescription>
                           <CardBadge>공기질 전문</CardBadge>
                        </CardContent>
                     </OverviewCard>

                     <OverviewCard variants={fadeInScale}>
                        <CardIcon secondary>
                           <FaHome />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>직무 내용</CardTitle>
                           <CardDescription>사무실, 가정, 입주아파트등에서 환기, 청정 장비를 활용하여 실내 환기와 청정등 새집증후군등의 공기를 정화하는 업무</CardDescription>
                        </CardContent>
                     </OverviewCard>

                     <OverviewCard variants={fadeInScale}>
                        <CardIcon accent>
                           <FaAirFreshener />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>검정 기준</CardTitle>
                           <CardDescription>공기질 측정 장비를 활용 유해 요소를 식별하고 공기질 개선 작업(환기청정시스템) 능력을 갖춘 수준을 측정</CardDescription>
                        </CardContent>
                     </OverviewCard>
                  </OverviewGrid>
               </motion.div>
            </Container>
         </OverviewSection>

         {/* 새집증후군 정보 섹션 */}
         <SickBuildingSection ref={sickBuildingRef}>
            <Container>
               <motion.div initial="hidden" animate={sickBuildingInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                  <SectionHeader>
                     <SectionTitle>새집증후군이란?</SectionTitle>
                     <SectionSubtitle>실내 공기질 개선이 필요한 이유와 전문가의 역할</SectionSubtitle>
                  </SectionHeader>

                  <SickBuildingContent>
                     <SickBuildingTextCard>
                        <SickBuildingTitle>새집증후군의 정의</SickBuildingTitle>
                        <SickBuildingDescription>새집증후군(Sick Building Syndrome)은 새로 지어진 건물이나 새로 꾸민 실내에서 발생하는 각종 화학물질로 인해 나타나는 건강 이상 증상을 말합니다.</SickBuildingDescription>

                        <InfoSubTitle>주요 원인 물질</InfoSubTitle>
                        <CauseGrid>
                           <CauseItem danger>포름알데히드 (HCHO)</CauseItem>
                           <CauseItem danger>벤젠 (Benzene)</CauseItem>
                           <CauseItem danger>톨루엔 (Toluene)</CauseItem>
                           <CauseItem danger>자일렌 (Xylene)</CauseItem>
                           <CauseItem danger>휘발성 유기화합물 (VOCs)</CauseItem>
                        </CauseGrid>

                        <InfoSubTitle>주요 증상</InfoSubTitle>
                        <SymptomGrid>
                           <SymptomItem warning>두통, 현기증</SymptomItem>
                           <SymptomItem warning>눈, 코, 목의 자극감</SymptomItem>
                           <SymptomItem warning>피부 알레르기</SymptomItem>
                           <SymptomItem warning>호흡기 질환</SymptomItem>
                           <SymptomItem warning>집중력 저하</SymptomItem>
                        </SymptomGrid>
                     </SickBuildingTextCard>

                     <SickBuildingImageCard>
                        <SickBuildingIcon>
                           <FaShieldAlt />
                        </SickBuildingIcon>
                        <SickBuildingImageTitle>건강한 실내 공기질 관리</SickBuildingImageTitle>
                        <SickBuildingImageDescription>전문적인 환기청정시스템으로 안전하고 깨끗한 실내 환경을 조성합니다</SickBuildingImageDescription>
                     </SickBuildingImageCard>
                  </SickBuildingContent>
               </motion.div>
            </Container>
         </SickBuildingSection>

         {/* 검정 과목 및 방법 섹션 */}
         <ExamSection ref={examRef}>
            <Container>
               <motion.div initial="hidden" animate={examInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>검정 과목 및 방법</SectionTitle>
                     <SectionSubtitle>필기시험과 실기시험으로 구성된 체계적인 평가 시스템</SectionSubtitle>
                  </SectionHeader>

                  <ExamGrid>
                     <ExamCard variants={fadeInScale}>
                        <ExamIcon>
                           <FaBook />
                        </ExamIcon>
                        <ExamType>필기시험 (객관식)</ExamType>
                        <ExamSubjects>
                           <SubjectTitle>검정 과목</SubjectTitle>
                           <SubjectList>
                              <li>새집 증후군에 대한 이해</li>
                              <li>공기 정화 시스템에 대한 이해</li>
                              <li>환경 검사 장비 이론</li>
                           </SubjectList>
                        </ExamSubjects>
                     </ExamCard>

                     <ExamCard variants={fadeInScale}>
                        <ExamIcon>
                           <FaWrench />
                        </ExamIcon>
                        <ExamType>실기시험 (실기 구술형)</ExamType>
                        <ExamSubjects>
                           <SubjectTitle>검정 과목</SubjectTitle>
                           <SubjectList>
                              <li>피톤 치드 살포 실기</li>
                              <li>공기 정화 시스템 유지관리 실기</li>
                           </SubjectList>
                        </ExamSubjects>
                     </ExamCard>
                  </ExamGrid>
               </motion.div>
            </Container>
         </ExamSection>

         {/* 환기청정시스템 시공 프로세스 타임라인 */}
         <Section background="linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%)">
            <Container>
               <ProcessTimeline
                  title="환기청정시스템 시공 프로세스"
                  subtitle="체계적이고 전문적인 5단계 환기청정시스템 설치 및 관리 과정"
                  steps={[
                     {
                        icon: <FaSearch />,
                        title: "현장 조사 및 공기질 진단",
                        description: "실내 공기질 측정과 환경 분석을 통한 최적 시스템 설계",
                        details: [
                           "전문 장비를 이용한 공기질 측정",
                           "포름알데히드, VOCs 등 유해물질 농도 분석",
                           "실내 구조 및 환기 필요 면적 측정",
                           "기존 환기시설 성능 평가"
                        ],
                        badge: "진단 단계"
                     },
                     {
                        icon: <FaCogs />,
                        title: "맞춤형 시스템 설계",
                        description: "건물 특성과 공기질 상태에 맞는 최적 환기청정시스템 설계",
                        details: [
                           "실내 용적 및 환기량 계산",
                           "필터 타입 및 용량 선정",
                           "덕트 경로 및 배치 설계",
                           "에너지 효율성 최적화 계획"
                        ],
                        badge: "설계 단계"
                     },
                     {
                        icon: <FaTools />,
                        title: "시스템 설치 및 배관",
                        description: "전문 기술을 바탕으로 한 정밀한 환기청정시스템 설치 작업",
                        details: [
                           "환기팬 및 공기청정기 설치",
                           "덕트 배관 및 연결 작업",
                           "센서 및 제어시스템 설치",
                           "안전 점검 및 누설 테스트"
                        ],
                        badge: "시공 단계"
                     },
                     {
                        icon: <FaWrench />,
                        title: "성능 테스트 및 조정",
                        description: "설치된 시스템의 성능 확인과 최적화 작업",
                        details: [
                           "시스템 가동 및 성능 측정",
                           "공기 순환량 및 정화 효율 확인",
                           "소음 레벨 및 진동 점검",
                           "자동 제어 시스템 동작 확인"
                        ],
                        badge: "테스트 단계"
                     },
                     {
                        icon: <FaCheckCircle />,
                        title: "사후 관리 및 유지보수",
                        description: "지속적인 공기질 관리를 위한 정기 점검 및 관리 서비스",
                        details: [
                           "정기적인 필터 교체 스케줄 제공",
                           "시스템 성능 모니터링",
                           "공기질 재측정 및 평가",
                           "고객 교육 및 사용법 안내"
                        ],
                        badge: "관리 단계"
                     }
                  ]}
               />
            </Container>
         </Section>

         {/* 지그재그 레이아웃 - 환기청정시스템 기술 */}
         <ZigzagSection>
            <Container>
               <ZigzagLayout>
                  <ZigzagContent>
                     <div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={slideInLeft}>
                           <h3>첨단 공기질 진단 기술</h3>
                           <p>환기청정시스템 전문가는 최신 측정 장비를 활용하여 실내 공기질을 정밀 진단합니다. 포름알데히드, VOCs 등 유해물질을 정확히 측정하여 맞춤형 솔루션을 제공합니다.</p>
                           <ul>
                              <li>전문 공기질 측정 장비 활용</li>
                              <li>유해물질 농도 정밀 분석</li>
                              <li>실내 환경 종합 평가</li>
                              <li>맞춤형 개선 방안 제시</li>
                           </ul>
                        </motion.div>
                     </div>
                     <ZigzagImage>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInScale}>
                           <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'ventilation/system.jpg'), '환기시스템 점검', [{ width: 400 }, { width: 800 }])} />
                        </motion.div>
                     </ZigzagImage>
                  </ZigzagContent>

                  <ZigzagContent reverse>
                     <div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={slideInLeft}>
                           <h3>건강한 실내 환경 조성</h3>
                           <p>단순한 환기를 넘어 실내 공기질을 근본적으로 개선합니다. 새집증후군 예방부터 알레르기 원인 제거까지 종합적인 공기질 관리 서비스를 제공합니다.</p>
                           <ul>
                              <li>새집증후군 원인 제거</li>
                              <li>알레르기 유발 요소 차단</li>
                              <li>실내 습도 및 온도 최적화</li>
                              <li>지속적인 공기질 모니터링</li>
                           </ul>
                        </motion.div>
                     </div>
                     <ZigzagImage>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInScale}>
                           <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'ventilation/clean.jpg'), '청정 작업', [{ width: 400 }, { width: 800 }])} />
                        </motion.div>
                     </ZigzagImage>
                  </ZigzagContent>
               </ZigzagLayout>
            </Container>
         </ZigzagSection>

         {/* 공기질 개선 효과 비교 */}
         <CompactSection>
            <Container>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>공기질 개선 효과</SectionTitle>
                     <SectionSubtitle>환기청정시스템 설치 전후의 놀라운 공기질 변화를 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <motion.div variants={fadeInScale}>
                     <BeforeAfterSlider
                        beforeImage={getImageUrl('certifications', 'ventilation/before.jpg')}
                        afterImage={getImageUrl('certifications', 'ventilation/after.jpg')}
                        beforeLabel="시공 전"
                        afterLabel="시공 후"
                        alt="환기청정시스템 시공 전후 비교"
                     />
                  </motion.div>
               </motion.div>
            </Container>
         </CompactSection>

         {/* 환기청정시스템 작업 과정 갤러리 */}
         <CompactSection>
            <Container>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>실제 시공 과정</SectionTitle>
                     <SectionSubtitle>전문가들의 실제 환기청정시스템 시공 및 관리 과정을 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <ImageGallery>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'ventilation/system.jpg'), '환기시스템 점검', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>시스템 진단 및 점검</h4>
                           <p>환기청정시스템의 전반적인 상태 진단 및 성능 점검</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'ventilation/clean.jpg'), '청정 작업', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>전문 청정 작업</h4>
                           <p>필터 교체 및 덕트 청소를 통한 공기질 개선</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'instructor.jpg'), '전문가 교육', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>전문가 양성 교육</h4>
                           <p>체계적인 교육을 통한 환기청정시스템 전문가 양성</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                  </ImageGallery>
               </motion.div>
            </Container>
         </CompactSection>

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
                              <strong>필수 조건:</strong> 환기청정시스템 관리사 종합 교육을 이수한 자
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
                              <strong>필기시험:</strong> 과목당 100점 만점 기준 60점 이상이며, 평균 점수가 60점 이상
                           </RequirementItem>
                           <RequirementItem>
                              <strong>실기시험:</strong> 100점 만점 기준 60점 이상이며, 평가항목별 점수의 60% 이상 득점
                           </RequirementItem>
                           <RequirementItem>
                              <strong>최종 합격:</strong> 필기시험과 실기시험에 모두 합격한 자
                           </RequirementItem>
                        </RequirementList>
                     </RequirementCard>
                  </RequirementGrid>
               </motion.div>
            </Container>
         </RequirementSection>

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
                              환기청정시스템 관리사 자격은 <strong>취득시부터 영구 유효</strong>합니다.
                           </InfoHighlight>
                        </InfoContent>
                     </InfoCard>
                  </InfoGrid>
               </motion.div>
            </Container>
         </AdditionalInfoSection>

         {/* 공기질 개선 서비스 프로세스 섹션 */}
         <ProcessSection ref={processRef}>
            <Container>
               <motion.div initial="hidden" animate={processInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>공기질 개선 서비스 프로세스</SectionTitle>
                     <SectionSubtitle>체계적이고 전문적인 6단계 공기질 개선 과정</SectionSubtitle>
                  </SectionHeader>

                  <ProcessGrid>
                     <ProcessCard variants={fadeInScale}>
                        <ProcessNumber>1</ProcessNumber>
                        <ProcessTitle>실내 공기질 측정</ProcessTitle>
                        <ProcessDescription>전문 장비를 이용한 유해물질 농도 측정 및 분석</ProcessDescription>
                     </ProcessCard>

                     <ProcessCard variants={fadeInScale}>
                        <ProcessNumber>2</ProcessNumber>
                        <ProcessTitle>오염원 파악</ProcessTitle>
                        <ProcessDescription>오염물질 발생원 확인 및 개선 방안 수립</ProcessDescription>
                     </ProcessCard>

                     <ProcessCard variants={fadeInScale}>
                        <ProcessNumber>3</ProcessNumber>
                        <ProcessTitle>환기 시스템 점검</ProcessTitle>
                        <ProcessDescription>기존 환기 시설 성능 점검 및 개선 필요사항 파악</ProcessDescription>
                     </ProcessCard>

                     <ProcessCard variants={fadeInScale}>
                        <ProcessNumber>4</ProcessNumber>
                        <ProcessTitle>공기 정화 작업</ProcessTitle>
                        <ProcessDescription>피톤치드 살포, 공기청정기 설치 등 정화 작업 실시</ProcessDescription>
                     </ProcessCard>

                     <ProcessCard variants={fadeInScale}>
                        <ProcessNumber>5</ProcessNumber>
                        <ProcessTitle>환기 시스템 개선</ProcessTitle>
                        <ProcessDescription>환기 시설 설치 또는 개선을 통한 지속적 공기질 관리</ProcessDescription>
                     </ProcessCard>

                     <ProcessCard variants={fadeInScale}>
                        <ProcessNumber>6</ProcessNumber>
                        <ProcessTitle>사후 관리</ProcessTitle>
                        <ProcessDescription>정기적인 공기질 모니터링 및 유지보수 서비스</ProcessDescription>
                     </ProcessCard>
                  </ProcessGrid>
               </motion.div>
            </Container>
         </ProcessSection>

         {/* 실무 활용 분야 섹션 */}
         <ApplicationSection ref={applicationRef}>
            <Container>
               <motion.div initial="hidden" animate={applicationInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>실무 활용 분야</SectionTitle>
                     <SectionSubtitle>자격 취득 후 다양한 분야에서 활용 가능한 전문 영역</SectionSubtitle>
                  </SectionHeader>

                  <ApplicationGrid>
                     <ApplicationCard variants={fadeInScale}>
                        <ApplicationIcon>
                           <FaHome />
                        </ApplicationIcon>
                        <ApplicationTitle>신축 건물 공기질 관리</ApplicationTitle>
                        <ApplicationDescription>새집증후군 예방을 위한 신축 주택 및 건물의 공기질 개선</ApplicationDescription>
                     </ApplicationCard>

                     <ApplicationCard variants={fadeInScale}>
                        <ApplicationIcon>
                           <FaBuilding />
                        </ApplicationIcon>
                        <ApplicationTitle>리모델링 후 관리</ApplicationTitle>
                        <ApplicationDescription>인테리어 공사 후 발생하는 유해물질 제거 및 공기질 개선</ApplicationDescription>
                     </ApplicationCard>

                     <ApplicationCard variants={fadeInScale}>
                        <ApplicationIcon>
                           <FaStore />
                        </ApplicationIcon>
                        <ApplicationTitle>환기청정 전문업체</ApplicationTitle>
                        <ApplicationDescription>공기질 개선 전문업체 창업 또는 관련 서비스 제공</ApplicationDescription>
                     </ApplicationCard>

                     <ApplicationCard variants={fadeInScale}>
                        <ApplicationIcon>
                           <FaBriefcase />
                        </ApplicationIcon>
                        <ApplicationTitle>건설 및 인테리어 업계</ApplicationTitle>
                        <ApplicationDescription>건설회사, 인테리어업체에서 공기질 관리 전문가로 활동</ApplicationDescription>
                     </ApplicationCard>
                  </ApplicationGrid>
               </motion.div>
            </Container>
         </ApplicationSection>

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
                              <strong>자격명:</strong> 환기청정시스템 관리사
                           </LegalItem>
                           <LegalItem>
                              <strong>등급명:</strong> 단일등급
                           </LegalItem>
                           <LegalItem>
                              <strong>자격 종류:</strong> 등록민간자격
                           </LegalItem>
                           <LegalItem>
                              <strong>등록번호:</strong> 2025-000929
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
                              [종목] 환기청정시스템관리사, [등급]단일등급
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
                        <NoticeItem important>상기 "환기청정시스템 관리사"는 자격기본법 규정에 따라 등록한 민간자격으로, 국가로부터 인정받은 공인자격이 아닙니다.</NoticeItem>
                        <NoticeItem important>민간자격 등록 및 공인 제도에 대한 상세내용은 민간자격정보서비스(www.pqi.or.kr)의 '민간자격 소개' 란을 참고하여 주십시오.</NoticeItem>
                     </NoticeContent>
                  </ImportantNoticeCard>
               </motion.div>
            </Container>
         </LegalNoticeSection>
      </PageWrapper>
   )
}
