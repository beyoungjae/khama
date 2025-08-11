import { motion } from 'framer-motion'
import { FaBook, FaTools, FaCertificate, FaClipboardCheck, FaUserCheck, FaAward, FaExclamationTriangle, FaInfoCircle, FaCog, FaSnowflake, FaWind, FaSearch, FaWrench, FaSprayCan, FaCheckCircle } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { getImageUrl, getOptimizedImageProps } from '../../../utils/imageHelpers'
import { BeforeAfterSlider } from '../../../components/common/BeforeAfterSlider'
import { ProcessTimeline } from '../../../components/common/ProcessTimeline'
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
   ResponsiveImage,
   ImageGallery,
   ImageGalleryItem,
   ImageCaption,
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

export function ApplianceCleaningPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.05 })
   const { ref: overviewRef, inView: overviewInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: examRef, inView: examInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: requirementRef, inView: requirementInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: additionalRef, inView: additionalInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: legalRef, inView: legalInView } = useInView({ triggerOnce: true, threshold: 0.1 })

   return (
      <PageWrapper>
         {/* Hero Section - 현대적 디자인 */}
         <ModernHeroSection ref={heroRef} bgImage={getImageUrl('hero', 'appliance.jpg')}>
            <HeroBackground gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={slideInLeft}>
                  <HeroBadge>
                     <FaCertificate />
                     <span>등록민간자격 2025-000931</span>
                  </HeroBadge>
                  <HeroTitle>
                     가전제품분해
                     <br />
                     <GradientText>청소관리사</GradientText>
                  </HeroTitle>
                  <HeroSubtitle>Home Appliance Cleaning Manager</HeroSubtitle>
                  <HeroDescription>세탁기, 에어컨, 공기청정기 등 가전제품에 대한 전문적인 지식을 가지고 분해 청소하는 전문가 자격증</HeroDescription>
                  <LegalDisclaimer>※ 본 자격은 자격기본법에 따른 등록민간자격으로, 국가공인자격이 아닙니다.</LegalDisclaimer>
               </motion.div>
               <HeroImageContainer>
                  <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'appliance/work.jpg'), '가전제품 분해청소 작업 모습', [{ width: 400 }, { width: 800 }])} style={{ borderRadius: '20px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }} />
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         {/* 통계 섹션 */}
         <StatisticsSection>
            <Container>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                  <StatisticsGrid>
                     <StatCard variants={fadeInScale}>
                        <StatNumber>2,500+</StatNumber>
                        <StatLabel>자격 취득자</StatLabel>
                     </StatCard>
                     <StatCard variants={fadeInScale}>
                        <StatNumber>95%</StatNumber>
                        <StatLabel>합격률</StatLabel>
                     </StatCard>
                     <StatCard variants={fadeInScale}>
                        <StatNumber>40시간</StatNumber>
                        <StatLabel>교육 시간</StatLabel>
                     </StatCard>
                     <StatCard variants={fadeInScale}>
                        <StatNumber>전국</StatNumber>
                        <StatLabel>활동 지역</StatLabel>
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
                     <SectionSubtitle>가전제품분해청소관리사 자격의 핵심 정보를 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <Grid>
                     <Card variants={fadeInScale}>
                        <CardIcon primary>
                           <FaCertificate />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>자격 등급</CardTitle>
                           <CardDescription>단일등급</CardDescription>
                           <CardBadge>전문가 과정</CardBadge>
                        </CardContent>
                     </Card>

                     <Card variants={fadeInScale}>
                        <CardIcon secondary>
                           <FaTools />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>직무 내용</CardTitle>
                           <CardDescription>사무실, 가정등에서 세탁기, 에어컨, 공기청정기 등 가전제품에 대한 전문적인 지식을 가지고 분해 청소하는 업무</CardDescription>
                        </CardContent>
                     </Card>

                     <Card variants={fadeInScale}>
                        <CardIcon accent>
                           <FaBook />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>검정 기준</CardTitle>
                           <CardDescription>가전제품 도구 및 전문적 지식을 활용하여 세탁기, 에어컨, 공기청정기등의 가전제품 분해 세척 및 재조립 능력을 갖춘 수준을 측정</CardDescription>
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
                     <SectionSubtitle>필기시험과 실기시험으로 구성된 체계적인 평가 시스템</SectionSubtitle>
                  </SectionHeader>

                  <Grid columns="repeat(auto-fit, minmax(400px, 1fr))">
                     <ExamCard variants={fadeInScale}>
                        <ExamIcon>
                           <FaBook />
                        </ExamIcon>
                        <ExamType>필기시험 (객관식)</ExamType>
                        <div>
                           <SubjectTitle>검정 과목</SubjectTitle>
                           <SubjectList>
                              <li>가전제품의 작동 원리</li>
                              <li>세탁기 완전분해 세척교육 이론</li>
                              <li>에어컨 완전분해 세척교육 이론</li>
                              <li>기타 가전제품 케어 교육 이론</li>
                              <li>마케팅 실무 이론</li>
                           </SubjectList>
                        </div>
                     </ExamCard>

                     <ExamCard variants={fadeInScale}>
                        <ExamIcon>
                           <FaTools />
                        </ExamIcon>
                        <ExamType>실기시험 (실기 구술형)</ExamType>
                        <div>
                           <SubjectTitle>검정 과목</SubjectTitle>
                           <SubjectList>
                              <li>세탁기 완전분해 세척 실기</li>
                              <li>에어컨 완전분해 세척 실기</li>
                              <li>기타 가전제품 케어 실기</li>
                              <li>마케팅 실무 실기</li>
                           </SubjectList>
                        </div>
                     </ExamCard>
                  </Grid>
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

                  <Grid columns="repeat(auto-fit, minmax(400px, 1fr))">
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
                              <strong>필수 조건:</strong> 가전제품분해청소관리사 종합 교육을 이수한 자
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
                  </Grid>
               </motion.div>
            </Container>
         </RequirementSection>

         {/* 지그재그 레이아웃 - 교육 과정 소개 */}
         <ZigzagSection>
            <Container>
               <ZigzagLayout>
                  <ZigzagContent>
                     <div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={slideInLeft}>
                           <h3>체계적인 교육 과정</h3>
                           <p>이론과 실습을 병행한 40시간의 집중 교육으로 전문 기술을 습득합니다. 실제 가전제품을 활용한 실습 교육을 통해 현장 적응력을 높입니다.</p>
                           <ul>
                              <li>가전제품 작동 원리 이해</li>
                              <li>안전한 분해 및 조립 기술</li>
                              <li>전문 청소 장비 활용법</li>
                              <li>고객 서비스 및 마케팅</li>
                           </ul>
                        </motion.div>
                     </div>
                     <ZigzagImage>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInScale}>
                           <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'practical.jpg'), '실습 교육 모습', [{ width: 400 }, { width: 800 }])} />
                        </motion.div>
                     </ZigzagImage>
                  </ZigzagContent>

                  <ZigzagContent reverse>
                     <div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={slideInLeft}>
                           <h3>취업 및 창업 전망</h3>
                           <p>자격 취득 후 다양한 분야에서 활용 가능합니다. 가정용 청소 서비스부터 대형 업체 취업까지 폭넓은 기회를 제공합니다.</p>
                           <ul>
                              <li>가전제품 A/S 센터 취업</li>
                              <li>청소 전문업체 창업</li>
                              <li>프리랜서 서비스 제공</li>
                              <li>가전매장 기술 지원</li>
                           </ul>
                        </motion.div>
                     </div>
                     <ZigzagImage>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInScale}>
                           <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'appliance/equipment.jpg'), '전문 장비', [{ width: 400 }, { width: 800 }])} />
                        </motion.div>
                     </ZigzagImage>
                  </ZigzagContent>
               </ZigzagLayout>
            </Container>
         </ZigzagSection>

         {/* 작업 과정 갤러리 섹션 */}
         <CompactSection>
            <Container>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>작업 과정 갤러리</SectionTitle>
                     <SectionSubtitle>가전제품 분해청소 전문가의 실제 작업 모습을 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <ImageGallery>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'appliance/work.jpg'), '가전제품 분해 작업', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>전문적인 분해 작업</h4>
                           <p>체계적이고 안전한 가전제품 분해 과정</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'appliance/equipment.jpg'), '청소 장비', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>전문 청소 장비</h4>
                           <p>최신 청소 도구와 장비 활용</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'appliance/certificate.jpg'), '자격증 샘플', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>자격증 발급</h4>
                           <p>공식 인증된 자격증 취득</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                  </ImageGallery>
               </motion.div>
            </Container>
         </CompactSection>

         {/* 추가 정보 섹션 */}
         <InfoSection ref={additionalRef}>
            <Container>
               <motion.div initial="hidden" animate={additionalInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>추가 정보</SectionTitle>
                     <SectionSubtitle>시험 면제 조건과 자격 유효기간에 대한 상세 정보</SectionSubtitle>
                  </SectionHeader>

                  <Grid columns="repeat(auto-fit, minmax(400px, 1fr))">
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
                              가전제품분해청소관리사 자격은 <strong>취득시부터 영구 유효</strong>합니다.
                           </InfoHighlight>
                        </InfoContent>
                     </InfoCard>
                  </Grid>
               </motion.div>
            </Container>
         </InfoSection>

         {/* Before/After 청소 효과 비교 섹션 */}
         <Section background="linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%)">
            <Container>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle as={motion.h2} variants={fadeInScale}>
                        청소 전후 비교
                     </SectionTitle>
                     <SectionSubtitle as={motion.p} variants={fadeInScale}>
                        전문적인 분해청소를 통한 놀라운 변화를 직접 확인하세요
                     </SectionSubtitle>
                  </SectionHeader>

                  <motion.div variants={fadeInScale}>
                     <BeforeAfterSlider beforeImage={getImageUrl('certifications', 'appliance/before.jpg')} afterImage={getImageUrl('certifications', 'appliance/after.jpg')} beforeLabel="청소 전" afterLabel="청소 후" alt="가전제품 청소 전후 비교" />
                  </motion.div>
               </motion.div>
            </Container>
         </Section>

         {/* 작업 프로세스 타임라인 섹션 */}
         <Section>
            <Container>
               <ProcessTimeline
                  title="가전제품 분해청소 프로세스"
                  subtitle="체계적이고 전문적인 4단계 청소 과정을 통해 최상의 결과를 보장합니다"
                  steps={[
                     {
                        icon: <FaSearch />,
                        title: '사전 점검 및 분석',
                        description: '가전제품의 상태를 정밀 진단하고 최적의 청소 방법을 결정합니다.',
                        details: ['제품 모델 및 제조년도 확인', '오염 정도 및 손상 부위 점검', '분해 가능한 부품 파악', '청소 도구 및 세제 선택'],
                        badge: '진단 단계',
                     },
                     {
                        icon: <FaWrench />,
                        title: '안전한 분해 작업',
                        description: '전문 도구를 사용하여 가전제품을 안전하게 분해합니다.',
                        details: ['전원 차단 및 안전 점검', '부품별 순서에 따른 체계적 분해', '분해된 부품의 정리 및 보관', '특수 부품 분리 및 표시'],
                        badge: '분해 단계',
                     },
                     {
                        icon: <FaSprayCan />,
                        title: '전문 청소 및 세척',
                        description: '각 부품에 맞는 전용 세제와 도구로 깨끗하게 청소합니다.',
                        details: ['부품별 맞춤 세제 적용', '고압 세척 및 초음파 세척', '세균 및 곰팡이 완전 제거', '건조 및 상태 최终 점검'],
                        badge: '청소 단계',
                     },
                     {
                        icon: <FaCheckCircle />,
                        title: '조립 및 성능 테스트',
                        description: '청소된 부품을 정확히 조립하고 성능을 확인합니다.',
                        details: ['분해 순서의 역순으로 정밀 조립', '모든 연결부 및 나사 점검', '성능 테스트 및 안전 점검', '청소 완료 보고서 작성'],
                        badge: '완성 단계',
                     },
                  ]}
               />
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

                  <Grid columns="repeat(auto-fit, minmax(400px, 1fr))" gap="2rem">
                     <LegalCard variants={fadeInScale}>
                        <LegalTitle>등록 정보</LegalTitle>
                        <LegalContent>
                           <LegalItem>
                              <strong>자격명:</strong> 가전제품분해청소관리사
                           </LegalItem>
                           <LegalItem>
                              <strong>등급명:</strong> 단일등급
                           </LegalItem>
                           <LegalItem>
                              <strong>자격 종류:</strong> 등록민간자격
                           </LegalItem>
                           <LegalItem>
                              <strong>등록번호:</strong> 2025-000931
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
                              [종목] 가전제품분해청소관리사, [등급]단일등급
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
                  </Grid>

                  <div style={{ marginTop: '3rem' }}>
                     <ImportantNoticeCard variants={fadeInScale}>
                        <NoticeIcon>
                           <FaExclamationTriangle />
                        </NoticeIcon>
                        <NoticeTitle>소비자 알림 사항</NoticeTitle>
                        <NoticeContent>
                           <NoticeItem important>상기 "가전제품분해청소관리사"는 자격기본법 규정에 따라 등록한 민간자격으로, 국가로부터 인정받은 공인자격이 아닙니다.</NoticeItem>
                           <NoticeItem important>민간자격 등록 및 공인 제도에 대한 상세내용은 민간자격정보서비스(www.pqi.or.kr)의 '민간자격 소개' 란을 참고하여 주십시오.</NoticeItem>
                           <NoticeItem>본 자격증은 취업이나 승진, 전직에 직접적인 도움이 되지 않을 수 있으며, 관련 분야 전문성 향상을 위한 교육 목적으로 활용하시기 바랍니다.</NoticeItem>
                        </NoticeContent>
                     </ImportantNoticeCard>
                  </div>
               </motion.div>
            </Container>
         </LegalNoticeSection>
      </PageWrapper>
   )
}
