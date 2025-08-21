import { motion } from 'framer-motion'
import { FaTools, FaCog, FaCertificate, FaWrench, FaClipboardCheck, FaUserCheck, FaAward, FaExclamationTriangle, FaInfoCircle, FaHome, FaBuilding, FaStore, FaBriefcase, FaBook, FaSnowflake, FaPlug, FaThermometerHalf } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { getImageUrl, getOptimizedImageProps } from '../../../utils/imageHelpers'
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
   ProcessTimeline,
   ProcessStep,
   ProcessContent,
   ProcessImage,
   ImageGallery,
   ImageGalleryItem,
   ImageCaption,
   ResponsiveImage,
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
   OverviewSection,
   OverviewGrid,
   OverviewCard,
   ExamGrid,
   RequirementGrid,
   InfoGrid,
   ProcessGrid,
   ApplicationGrid,
   LegalGrid,
   AdditionalInfoSection,
   ProcessSection,
   ApplicationSection,
   ExamSubjects,
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

export function AirConditionerInstallationPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: overviewRef, inView: overviewInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: examRef, inView: examInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: requirementRef, inView: requirementInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: additionalRef, inView: additionalInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: processRef, inView: processInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: applicationRef, inView: applicationInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: legalRef, inView: legalInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   return (
      <PageWrapper>
         {/* Hero Section - 현대적 디자인 */}
         <ModernHeroSection ref={heroRef} bgImage={getImageUrl('hero', 'aircon.jpg')}>
            <HeroBackground gradient="linear-gradient(135deg, #11998e 0%, #38ef7d 100%)" />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={slideInLeft}>
                  <HeroBadge>
                     <FaCertificate />
                     <span>등록민간자격 2025-000930</span>
                  </HeroBadge>
                  <HeroTitle>
                     에어컨설치
                     <br />
                     <GradientText>관리사</GradientText>
                  </HeroTitle>
                  <HeroSubtitle>Air Conditioner Installation Manager</HeroSubtitle>
                  <HeroDescription>에어컨 및 에어컨 공조기, 실외기등에 대한 전문적인 지식을 가지고 실내, 실외에 설치하는 전문가 자격증</HeroDescription>
                  <LegalDisclaimer>※ 본 자격은 자격기본법에 따른 등록민간자격으로, 국가공인자격이 아닙니다.</LegalDisclaimer>
               </motion.div>
               <HeroImageContainer>
                  <HeroImagePlaceholder>
                     <FaSnowflake size={80} />
                     <FaPlug size={60} />
                     <FaThermometerHalf size={70} />
                     <p>에어컨 설치 전문가</p>
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
                        <StatNumber>3,200+</StatNumber>
                        <StatLabel>자격 취득자</StatLabel>
                     </StatCard>
                     <StatCard variants={fadeInScale}>
                        <StatNumber>89%</StatNumber>
                        <StatLabel>합격률</StatLabel>
                     </StatCard>
                     <StatCard variants={fadeInScale}>
                        <StatNumber>48시간</StatNumber>
                        <StatLabel>교육 시간</StatLabel>
                     </StatCard>
                     <StatCard variants={fadeInScale}>
                        <StatNumber>필기+실기</StatNumber>
                        <StatLabel>시험 구성</StatLabel>
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
                     <SectionSubtitle>에어컨설치 관리사 자격의 핵심 정보를 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <OverviewGrid>
                     <OverviewCard variants={fadeInScale}>
                        <CardIcon primary>
                           <FaCertificate />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>자격 등급</CardTitle>
                           <CardDescription>단일등급</CardDescription>
                           <CardBadge>설치 전문</CardBadge>
                        </CardContent>
                     </OverviewCard>

                     <OverviewCard variants={fadeInScale}>
                        <CardIcon secondary>
                           <FaTools />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>직무 내용</CardTitle>
                           <CardDescription>사무실, 가정등에 에어컨 및 에어컨 공조기, 실외기등에 대한 전문적인 지식을 가지고 실내, 실외에 설치하는 업무</CardDescription>
                        </CardContent>
                     </OverviewCard>

                     <OverviewCard variants={fadeInScale}>
                        <CardIcon accent>
                           <FaCog />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>검정 기준</CardTitle>
                           <CardDescription>에어컨 관련 장비 및 지식을 바탕으로 에어컨, 공조기, 실외기를 설치할 수 있는 능력을 갖춘 수준을 측정</CardDescription>
                        </CardContent>
                     </OverviewCard>
                  </OverviewGrid>
               </motion.div>
            </Container>
         </OverviewSection>

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
                              <li>에어컨 설치 이론</li>
                              <li>에어컨 냉매 가스 충전 방법 이해</li>
                              <li>실외기 연결 방법에 대한 이해</li>
                              <li>공조기에 대한 원리</li>
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
                              <li>에어컨 냉매 가스 충전 실기</li>
                              <li>실외기 연결 실기</li>
                              <li>공조기 연결 실기</li>
                           </SubjectList>
                        </ExamSubjects>
                     </ExamCard>
                  </ExamGrid>
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
                              <strong>필수 조건:</strong> 에어컨설치 관리사 종합 교육을 이수한 자
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
                              에어컨설치 관리사 자격은 <strong>취득시부터 영구 유효</strong>합니다.
                           </InfoHighlight>
                        </InfoContent>
                     </InfoCard>
                  </InfoGrid>
               </motion.div>
            </Container>
         </AdditionalInfoSection>

         {/* 설치 작업 프로세스 섹션 */}
         <ProcessSection ref={processRef}>
            <Container>
               <motion.div initial="hidden" animate={processInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>에어컨 설치 작업 프로세스</SectionTitle>
                     <SectionSubtitle>체계적이고 전문적인 6단계 설치 과정</SectionSubtitle>
                  </SectionHeader>

                  <ProcessGrid>
                     <ProcessCard variants={fadeInScale}>
                        <ProcessNumber>1</ProcessNumber>
                        <ProcessTitle>현장 조사 및 계획</ProcessTitle>
                        <ProcessDescription>설치 위치 확인, 전기 용량 점검, 배관 경로 계획 수립</ProcessDescription>
                     </ProcessCard>

                     <ProcessCard variants={fadeInScale}>
                        <ProcessNumber>2</ProcessNumber>
                        <ProcessTitle>실내기 설치</ProcessTitle>
                        <ProcessDescription>벽면 브라켓 설치, 실내기 고정, 배수 호스 연결</ProcessDescription>
                     </ProcessCard>

                     <ProcessCard variants={fadeInScale}>
                        <ProcessNumber>3</ProcessNumber>
                        <ProcessTitle>실외기 설치</ProcessTitle>
                        <ProcessDescription>실외기 거치대 설치, 실외기 고정, 진동 방지 조치</ProcessDescription>
                     </ProcessCard>

                     <ProcessCard variants={fadeInScale}>
                        <ProcessNumber>4</ProcessNumber>
                        <ProcessTitle>배관 연결</ProcessTitle>
                        <ProcessDescription>냉매 배관 연결, 전선 연결, 배수관 연결</ProcessDescription>
                     </ProcessCard>

                     <ProcessCard variants={fadeInScale}>
                        <ProcessNumber>5</ProcessNumber>
                        <ProcessTitle>냉매 충전 및 시운전</ProcessTitle>
                        <ProcessDescription>진공 작업, 냉매 가스 충전, 전체 시스템 작동 점검</ProcessDescription>
                     </ProcessCard>

                     <ProcessCard variants={fadeInScale}>
                        <ProcessNumber>6</ProcessNumber>
                        <ProcessTitle>최종 점검 및 정리</ProcessTitle>
                        <ProcessDescription>성능 테스트, 안전 점검, 고객 사용법 안내</ProcessDescription>
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
                        <ApplicationTitle>가정용 에어컨 설치</ApplicationTitle>
                        <ApplicationDescription>일반 가정의 벽걸이형, 스탠드형 에어컨 설치 및 교체</ApplicationDescription>
                     </ApplicationCard>

                     <ApplicationCard variants={fadeInScale}>
                        <ApplicationIcon>
                           <FaBuilding />
                        </ApplicationIcon>
                        <ApplicationTitle>상업용 공조 시설</ApplicationTitle>
                        <ApplicationDescription>사무실, 상가, 공장 등의 대형 공조 시설 설치 및 유지보수</ApplicationDescription>
                     </ApplicationCard>

                     <ApplicationCard variants={fadeInScale}>
                        <ApplicationIcon>
                           <FaStore />
                        </ApplicationIcon>
                        <ApplicationTitle>설치 전문업체 창업</ApplicationTitle>
                        <ApplicationDescription>에어컨 설치 전문업체 창업 또는 프리랜서 설치 서비스</ApplicationDescription>
                     </ApplicationCard>

                     <ApplicationCard variants={fadeInScale}>
                        <ApplicationIcon>
                           <FaBriefcase />
                        </ApplicationIcon>
                        <ApplicationTitle>기업 취업</ApplicationTitle>
                        <ApplicationDescription>가전제품 판매점, 설치업체, 건설회사 등 취업</ApplicationDescription>
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
                              <strong>자격명:</strong> 에어컨설치 관리사
                           </LegalItem>
                           <LegalItem>
                              <strong>등급명:</strong> 단일등급
                           </LegalItem>
                           <LegalItem>
                              <strong>자격 종류:</strong> 등록민간자격
                           </LegalItem>
                           <LegalItem>
                              <strong>등록번호:</strong> 2025-000930
                           </LegalItem>
                           <LegalItem>
                              <strong>자격발급기관:</strong> 한국생활가전유지관리협회
                           </LegalItem>
                           <LegalItem>
                              <strong>사업자등록번호:</strong> 714-88-00785
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
                              [종목] 에어컨설치관리사, [등급]단일등급
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
                        <NoticeItem important>상기 "에어컨설치 관리사"는 자격기본법 규정에 따라 등록한 민간자격으로, 국가로부터 인정받은 공인자격이 아닙니다.</NoticeItem>
                        <NoticeItem important>민간자격 등록 및 공인 제도에 대한 상세내용은 민간자격정보서비스(www.pqi.or.kr)의 '민간자격 소개' 란을 참고하여 주십시오.</NoticeItem>
                     </NoticeContent>
                  </ImportantNoticeCard>
               </motion.div>
            </Container>
         </LegalNoticeSection>

         {/* 지그재그 레이아웃 - 설치 기술 소개 */}
         <ZigzagSection>
            <Container>
               <ZigzagLayout>
                  <ZigzagContent>
                     <div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={slideInLeft}>
                           <h3>전문 설치 기술</h3>
                           <p>에어컨 설치는 단순한 기계 장착이 아닙니다. 건물 구조, 전기 용량, 냉매 특성을 모두 고려한 전문적인 기술이 필요합니다.</p>
                           <ul>
                              <li>정밀한 현장 분석 및 계획</li>
                              <li>안전한 전기 배선 및 연결</li>
                              <li>냉매 배관 최적화 설계</li>
                              <li>성능 테스트 및 최적화</li>
                           </ul>
                        </motion.div>
                     </div>
                     <ZigzagImage>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInScale}>
                           <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'aircon/installation.jpg'), '에어컨 설치 작업', [{ width: 400 }, { width: 800 }])} />
                        </motion.div>
                     </ZigzagImage>
                  </ZigzagContent>

                  <ZigzagContent reverse>
                     <div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={slideInLeft}>
                           <h3>시장 전망과 기회</h3>
                           <p>기후변화와 에너지 효율성에 대한 관심 증가로 에어컨 설치 전문가의 수요가 지속적으로 증가하고 있습니다.</p>
                           <ul>
                              <li>신축 건물 증가</li>
                              <li>에너지 효율 개선 수요</li>
                              <li>스마트 홈 시스템 확산</li>
                              <li>정기 점검 서비스 확대</li>
                           </ul>
                        </motion.div>
                     </div>
                     <ZigzagImage>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInScale}>
                           <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'aircon/service.jpg'), '전문 서비스', [{ width: 400 }, { width: 800 }])} />
                        </motion.div>
                     </ZigzagImage>
                  </ZigzagContent>
               </ZigzagLayout>
            </Container>
         </ZigzagSection>

         {/* 에어컨 설치 과정 갤러리 섹션 */}
         <CompactSection>
            <Container>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>전문 설치 작업 현장</SectionTitle>
                     <SectionSubtitle>체계적이고 안전한 에어컨 설치 과정을 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <ImageGallery>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'aircon/installation.jpg'), '에어컨 설치 작업', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>정밀한 설치 작업</h4>
                           <p>안전하고 정확한 에어컨 설치 과정</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'aircon/service.jpg'), '배관 연결 작업', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>배관 연결</h4>
                           <p>전문적인 냉매 배관 연결 작업</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'aircon/maintenance.jpg'), '성능 테스트', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>성능 테스트</h4>
                           <p>설치 완료 후 철저한 성능 검증</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                  </ImageGallery>
               </motion.div>
            </Container>
         </CompactSection>
      </PageWrapper>
   )
}
