import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { Link } from 'react-router-dom'
import { FaClipboardCheck, FaUserGraduate, FaCertificate, FaCalendarAlt, FaCheckCircle, FaExclamationTriangle, FaBookOpen, FaClock } from 'react-icons/fa'
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
   StatisticsSection,
   StatisticsGrid,
   StatNumber,
   StatLabel,
   StatCard,
   SectionHeader,
   SectionTitle,
   SectionSubtitle,
   Grid,
   Card,
   CardIcon,
   CardTitle,
   CardDescription,
   ImageGallery,
   ImageGalleryItem,
   ImageCaption,
   ResponsiveImage,
} from '../../../components/common/SharedStyles'

export function ExamInfoPage() {
   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: overviewRef, inView: overviewInView } = useInView({ triggerOnce: true, threshold: 0.05 })
   const { ref: requirementRef, inView: requirementInView } = useInView({ triggerOnce: true, threshold: 0.05 })
   const { ref: subjectRef, inView: subjectInView } = useInView({ triggerOnce: true, threshold: 0.05 })
   const { ref: gradeRef, inView: gradeInView } = useInView({ triggerOnce: true, threshold: 0.05 })
   const { ref: applyRef, inView: applyInView } = useInView({ triggerOnce: true, threshold: 0.05 })

   return (
      <PageWrapper>
         <ModernHeroSection bgImage={getImageUrl('hero', 'exam.jpg')} ref={heroRef}>
            <HeroBackground radialGradient="radial-gradient(circle at 25% 75%, rgba(255, 107, 107, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)" />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaClipboardCheck /> 자격시험 안내
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     전문 <GradientText>자격 시험</GradientText> 안내
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "신뢰할 수 있는 전문가 양성을 위한 체계적인 평가"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     생활가전 유지보수 전문가 자격 시험에 대한
                     <br />
                     상세한 정보를 확인하고 준비하세요
                  </HeroDescription>
               </motion.div>
               <HeroImageContainer as={motion.div} variants={slideInRight}>
                  <HeroImagePlaceholder>
                     <FaCertificate size={80} />
                     <p>전문 자격 시험</p>
                  </HeroImagePlaceholder>
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         {/* 🚀 1단계: 임팩트 있는 통계 섹션 */}
         <StatisticsSection as={motion.section} initial="hidden" animate="visible" variants={staggerContainer}>
            <Container>
               <StatisticsGrid>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>4</StatNumber>
                     <StatLabel>자격증 종류</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>2</StatNumber>
                     <StatLabel>연간 시험 횟수</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>85%</StatNumber>
                     <StatLabel>평균 합격률</StatLabel>
                  </StatCard>
                  <StatCard variants={fadeInScale}>
                     <StatNumber>1,500+</StatNumber>
                     <StatLabel>연간 응시자</StatLabel>
                  </StatCard>
               </StatisticsGrid>
            </Container>
         </StatisticsSection>

         <Container>
            {/* 🎯 2단계: 컴팩트한 시험 개요 */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} ref={overviewRef}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} initial="hidden" animate={overviewInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     시험 개요
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} initial="hidden" animate={overviewInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     KHAMA 자격 시험의 기본 정보를 확인하세요
                  </SectionSubtitle>
               </SectionHeader>
               <Grid columns={1}>
                  <Card as={motion.div} variants={fadeInScale} style={{ padding: '2.5rem', background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)', border: '1px solid #e2e8f0' }}>
                     <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <CardDescription style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#334155', maxWidth: '800px', margin: '0 auto' }}>
                           KHAMA에서 주관하는 <strong style={{ color: '#0f172a' }}>생활가전 유지보수 전문가 자격 시험</strong>은 관련 분야의 전문 지식과 실무 능력을 체계적으로 평가하여 자격을 부여하는 공인 시험입니다.
                        </CardDescription>
                     </div>

                     <Grid columns={3} style={{ gap: '2rem', marginBottom: '2rem' }}>
                        <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
                           <CardIcon $primary style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                              <FaCertificate />
                           </CardIcon>
                           <div style={{ fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.1rem', color: '#1e293b' }}>주관 기관</div>
                           <div style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.4' }}>
                              (사)한국생활가전
                              <br />
                              유지관리협회
                           </div>
                        </div>
                        <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
                           <CardIcon $secondary style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                              <FaUserGraduate />
                           </CardIcon>
                           <div style={{ fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.1rem', color: '#1e293b' }}>자격 종류</div>
                           <div style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.4' }}>
                              4개 전문 자격증
                              <br />
                              1급/2급 체계
                           </div>
                        </div>
                        <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
                           <CardIcon $accent style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                              <FaCalendarAlt />
                           </CardIcon>
                           <div style={{ fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.1rem', color: '#1e293b' }}>시행 주기</div>
                           <div style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.4' }}>
                              연 2회
                              <br />
                              (상/하반기)
                           </div>
                        </div>
                     </Grid>

                     <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #0ea5e9', textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                           <FaCheckCircle style={{ color: '#0ea5e9', fontSize: '1.2rem' }} />
                           <strong style={{ color: '#0c4a6e', fontSize: '1.1rem' }}>전문가 인증 효과</strong>
                        </div>
                        <p style={{ margin: 0, color: '#0c4a6e', lineHeight: '1.6' }}>
                           본 시험을 통해 검증된 전문가는 소비자에게 <strong>신뢰할 수 있는 고품질 서비스</strong>를 제공할 수 있으며, 업계에서 <strong>공인된 전문성</strong>을 인정받게 됩니다.
                        </p>
                     </div>
                  </Card>
               </Grid>
            </CompactSection>

            {/* 🔥 3단계: 응시 자격 (컴팩트) */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} ref={requirementRef}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} initial="hidden" animate={requirementInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     응시 자격
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} initial="hidden" animate={requirementInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     각 자격증별 응시 요건을 확인해보세요
                  </SectionSubtitle>
               </SectionHeader>
               <Grid columns={2}>
                  <Card as={motion.div} variants={slideInLeft}>
                     <CardIcon $primary>
                        <FaUserGraduate />
                     </CardIcon>
                     <CardTitle>생활가전 유지보수사 2급</CardTitle>
                     <CardDescription>
                        학력, 경력 제한 없음
                        <br />
                        누구나 응시 가능한 기본 자격증
                     </CardDescription>
                  </Card>
                  <Card as={motion.div} variants={slideInRight}>
                     <CardIcon $secondary>
                        <FaCertificate />
                     </CardIcon>
                     <CardTitle>생활가전 유지보수사 1급</CardTitle>
                     <CardDescription>
                        2급 자격 취득 후 실무 경력 또는
                        <br />
                        관련 학과 졸업자
                     </CardDescription>
                  </Card>
                  <Card as={motion.div} variants={slideInLeft}>
                     <CardIcon $accent>
                        <FaClock />
                     </CardIcon>
                     <CardTitle>에어컨 전문가</CardTitle>
                     <CardDescription>
                        관련 교육 이수 또는
                        <br />
                        실무 경력 보유자
                     </CardDescription>
                  </Card>
                  <Card as={motion.div} variants={slideInRight}>
                     <CardIcon $primary>
                        <FaBookOpen />
                     </CardIcon>
                     <CardTitle>스마트홈 전문가</CardTitle>
                     <CardDescription>
                        관련 교육 이수 또는 정보통신/전기
                        <br />
                        분야 경력 보유자
                     </CardDescription>
                  </Card>
               </Grid>
            </CompactSection>

            {/* 💎 4단계: 2025년 시험 일정표 (신규 추가) */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} ref={subjectRef}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} initial="hidden" animate={subjectInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     <FaCalendarAlt /> 2025년 시험 일정표
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} initial="hidden" animate={subjectInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     연간 시험 일정을 미리 확인하고 계획을 세우세요
                  </SectionSubtitle>
               </SectionHeader>

               <Grid columns={1}>
                  <Card as={motion.div} variants={fadeInScale} style={{ overflow: 'auto', marginBottom: '2rem' }}>
                     <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                        <thead>
                           <tr style={{ background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)', color: 'white' }}>
                              <th style={{ border: '1px solid #ee5a6f', padding: '1rem', textAlign: 'center', fontWeight: '600' }}>회차</th>
                              <th style={{ border: '1px solid #ee5a6f', padding: '1rem', textAlign: 'center', fontWeight: '600' }}>접수 기간</th>
                              <th style={{ border: '1px solid #ee5a6f', padding: '1rem', textAlign: 'center', fontWeight: '600' }}>시험 일자</th>
                              <th style={{ border: '1px solid #ee5a6f', padding: '1rem', textAlign: 'center', fontWeight: '600' }}>합격 발표</th>
                              <th style={{ border: '1px solid #ee5a6f', padding: '1rem', textAlign: 'center', fontWeight: '600' }}>상태</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center', fontWeight: '600', backgroundColor: '#fff5f5' }}>1회차</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>2025.01.15 ~ 02.15</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>2025.03.15 (토)</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>2025.04.15</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>
                                 <span
                                    style={{
                                       padding: '0.25rem 0.75rem',
                                       borderRadius: '20px',
                                       fontSize: '0.8rem',
                                       fontWeight: '600',
                                       background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                                       color: 'white',
                                    }}
                                 >
                                    접수중
                                 </span>
                              </td>
                           </tr>
                           <tr style={{ backgroundColor: '#fafbfc' }}>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center', fontWeight: '600', backgroundColor: '#fff5f5' }}>2회차</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>2025.06.15 ~ 07.15</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>2025.08.16 (토)</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>2025.09.15</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>
                                 <span
                                    style={{
                                       padding: '0.25rem 0.75rem',
                                       borderRadius: '20px',
                                       fontSize: '0.8rem',
                                       fontWeight: '600',
                                       background: 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)',
                                       color: 'white',
                                    }}
                                 >
                                    예정
                                 </span>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                     <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '10px', border: '1px solid #0ea5e9' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                           <FaExclamationTriangle style={{ color: '#0ea5e9' }} />
                           <strong style={{ color: '#0c4a6e' }}>시험 일정 안내</strong>
                        </div>
                        <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#0c4a6e', lineHeight: '1.6' }}>
                           <li>시험 시간: 필기 10:00~12:00, 실기 14:00~16:00</li>
                           <li>시험 장소: KHAMA 교육원 (인천 서구 청라)</li>
                           <li>응시료: 필기 30,000원, 실기 50,000원</li>
                           <li>준비물: 신분증, 필기구, 작업복 (실기시험)</li>
                        </ul>
                     </div>
                  </Card>
               </Grid>

               {/* 시험 과목 및 평가 방식 */}
               <SectionHeader style={{ marginTop: '3rem' }}>
                  <SectionTitle as={motion.h3} initial="hidden" animate={subjectInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     시험 과목 및 평가 방식
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} initial="hidden" animate={subjectInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     자격증별 시험 구성과 평가 기준을 안내합니다
                  </SectionSubtitle>
               </SectionHeader>

               <Grid columns={1}>
                  <Card as={motion.div} variants={fadeInScale} style={{ overflow: 'auto' }}>
                     <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                        <thead>
                           <tr style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
                              <th style={{ border: '1px solid #764ba2', padding: '1rem', textAlign: 'center', fontWeight: '600' }}>자격명</th>
                              <th style={{ border: '1px solid #764ba2', padding: '1rem', textAlign: 'center', fontWeight: '600' }}>평가 방식</th>
                              <th style={{ border: '1px solid #764ba2', padding: '1rem', textAlign: 'center', fontWeight: '600' }}>주요 과목</th>
                              <th style={{ border: '1px solid #764ba2', padding: '1rem', textAlign: 'center', fontWeight: '600' }}>시험 시간</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', fontWeight: '500', backgroundColor: '#f8fafc' }}>생활가전 유지보수사 2급</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>필기 + 실기</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem' }}>
                                 <div style={{ marginBottom: '0.5rem' }}>
                                    <strong>필기:</strong> 가전제품 개론, 전기전자 기초, 안전 관리
                                 </div>
                                 <div>
                                    <strong>실기:</strong> 기본 분해/조립, 간단한 부품 교체
                                 </div>
                              </td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>
                                 <div>필기: 120분</div>
                                 <div>실기: 90분</div>
                              </td>
                           </tr>
                           <tr style={{ backgroundColor: '#fafbfc' }}>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', fontWeight: '500', backgroundColor: '#f8fafc' }}>생활가전 유지보수사 1급</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>필기 + 실기</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem' }}>
                                 <div style={{ marginBottom: '0.5rem' }}>
                                    <strong>필기:</strong> 고장 진단 심화, 회로 분석, 고객 응대
                                 </div>
                                 <div>
                                    <strong>실기:</strong> 복합 고장 진단, 핵심 부품 교체, 성능 측정
                                 </div>
                              </td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>
                                 <div>필기: 150분</div>
                                 <div>실기: 120분</div>
                              </td>
                           </tr>
                           <tr>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', fontWeight: '500', backgroundColor: '#f8fafc' }}>에어컨설치 관리사</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>실기 중심</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem' }}>
                                 <div>설치 표준, 냉매 취급, 배관 작업, 진공 테스트, 성능 점검</div>
                              </td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>실기: 150분</td>
                           </tr>
                           <tr style={{ backgroundColor: '#fafbfc' }}>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', fontWeight: '500', backgroundColor: '#f8fafc' }}>환기청정시스템 관리사</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>필기 + 실기</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem' }}>
                                 <div style={{ marginBottom: '0.5rem' }}>
                                    <strong>필기:</strong> 환기시스템 설계, 공기질 측정, 환경 법규
                                 </div>
                                 <div>
                                    <strong>실기:</strong> 필터 교체, 시스템 점검 및 관리
                                 </div>
                              </td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>
                                 <div>필기: 120분</div>
                                 <div>실기: 100분</div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </Card>
               </Grid>

               {/* 시험 과정 이미지 갤러리 */}
               <CompactSection style={{ marginTop: '3rem' }}>
                  <SectionHeader>
                     <SectionTitle as={motion.h3} initial="hidden" animate={subjectInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                        시험 과정 안내
                     </SectionTitle>
                     <SectionSubtitle as={motion.p} initial="hidden" animate={subjectInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                        실제 시험 환경과 과정을 미리 확인해보세요
                     </SectionSubtitle>
                  </SectionHeader>

                  <ImageGallery as={motion.div} variants={staggerContainer}>
                     <ImageGalleryItem variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'classroom'), '필기시험 환경', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>필기시험 환경</h4>
                           <p>쾌적하고 집중할 수 있는 시험 환경에서 공정한 평가가 이루어집니다</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'practical'), '실기시험 모습', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>실기시험 과정</h4>
                           <p>실제 장비를 활용한 실무 중심의 실기시험으로 전문성을 평가합니다</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'appliance.certificate'), '자격증 발급', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>자격증 발급</h4>
                           <p>합격 후 공식 자격증을 발급받아 전문가로서의 자격을 인정받습니다</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                  </ImageGallery>
               </CompactSection>
            </CompactSection>

            {/* 🏆 5단계: 합격 기준 (컴팩트) */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} ref={gradeRef}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} initial="hidden" animate={gradeInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     합격 기준
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} initial="hidden" animate={gradeInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     필기와 실기 시험의 합격 조건을 확인해보세요
                  </SectionSubtitle>
               </SectionHeader>
               <Grid columns={2}>
                  <Card as={motion.div} variants={slideInLeft} style={{ textAlign: 'center' }}>
                     <CardIcon $secondary style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        <FaCheckCircle />
                     </CardIcon>
                     <CardTitle style={{ marginBottom: '1rem' }}>필기 시험</CardTitle>
                     <CardDescription>
                        과목당 40점 이상, 전 과목 평균 60점 이상
                        <br />
                        객관식 4지 선다형으로 출제
                     </CardDescription>
                  </Card>
                  <Card as={motion.div} variants={slideInRight} style={{ textAlign: 'center' }}>
                     <CardIcon $accent style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        <FaCheckCircle />
                     </CardIcon>
                     <CardTitle style={{ marginBottom: '1rem' }}>실기 시험</CardTitle>
                     <CardDescription>
                        60점 이상 (시험 종류별 세부 기준 상이)
                        <br />
                        실제 작업 수행 및 평가
                     </CardDescription>
                  </Card>
               </Grid>
            </CompactSection>

            {/* 🚨 6단계: 시험 접수 안내 (컴팩트) */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} ref={applyRef}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} initial="hidden" animate={applyInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     시험 접수 안내
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} initial="hidden" animate={applyInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     온라인으로 간편하게 시험에 접수하세요
                  </SectionSubtitle>
               </SectionHeader>
               <Grid columns={1}>
                  <Card as={motion.div} variants={fadeInScale} style={{ textAlign: 'center', padding: '2rem' }}>
                     <CardIcon $primary style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                        <FaExclamationTriangle />
                     </CardIcon>
                     <CardTitle style={{ marginBottom: '1rem' }}>온라인 접수 시스템</CardTitle>
                     <CardDescription style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                        자격 시험 접수는 온라인 신청 페이지를 통해 진행됩니다.
                        <br />
                        접수 기간 내에 신청서를 작성하고 응시료를 납부해주시기 바랍니다.
                     </CardDescription>
                     <Link
                        to="/apply?type=exam"
                        style={{
                           display: 'inline-block',
                           padding: '1rem 2rem',
                           background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
                           color: 'white',
                           borderRadius: '50px',
                           fontWeight: '600',
                           cursor: 'pointer',
                           transition: 'all 0.3s ease',
                           textDecoration: 'none',
                           boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)',
                        }}
                        onMouseEnter={(e) => {
                           e.target.style.transform = 'translateY(-2px)'
                           e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)'
                        }}
                        onMouseLeave={(e) => {
                           e.target.style.transform = 'translateY(0)'
                           e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.3)'
                        }}
                     >
                        시험 접수 바로가기
                     </Link>
                  </Card>
               </Grid>
            </CompactSection>
         </Container>
      </PageWrapper>
   )
}
