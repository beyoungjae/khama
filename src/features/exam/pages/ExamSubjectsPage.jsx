import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { FaBookOpen, FaCertificate, FaGraduationCap, FaWrench, FaLaptopCode, FaPen, FaTools, FaExclamationTriangle } from 'react-icons/fa'
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
   Section,
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

export function ExamSubjectsPage() {
   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: methodRef, inView: methodInView } = useInView({ triggerOnce: true, threshold: 0.05 })
   const { ref: coreRef, inView: coreInView } = useInView({ triggerOnce: true, threshold: 0.05 })
   const { ref: noticeRef, inView: noticeInView } = useInView({ triggerOnce: true, threshold: 0.05 })

   return (
      <PageWrapper>
         <ModernHeroSection bgImage={getImageUrl('hero', 'exam.jpg')} ref={heroRef}>
            <HeroBackground />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaBookOpen /> 자격 검정 과목
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     시험 <GradientText>과목 안내</GradientText>
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "체계적이고 전문적인 평가 시스템"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     KHAMA에서 시행하는 자격 시험의
                     <br />
                     평가 과목을 상세히 안내합니다
                  </HeroDescription>
               </motion.div>
               <HeroImageContainer as={motion.div} variants={slideInRight}>
                  <HeroImagePlaceholder>
                     <FaBookOpen size={80} />
                     <p>시험 과목 안내</p>
                  </HeroImagePlaceholder>
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         <Container>
            {/* 🎯 시험 과목별 상세 가이드 (개선된 레이아웃) */}
            <CompactSection as={motion.section} initial="hidden" animate="visible" variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInUp}>
                     시험 과목 상세 가이드
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInUp}>
                     자격증별 평가 과목과 출제 범위를 체계적으로 안내합니다
                  </SectionSubtitle>
               </SectionHeader>

               {/* 생활가전 유지보수사 1급 */}
               <Grid columns={1} style={{ marginBottom: '3rem' }}>
                  <Card as={motion.div} variants={fadeInScale} style={{ padding: '2rem' }}>
                     <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '2px solid #e2e8f0' }}>
                        <CardIcon $primary style={{ fontSize: '2rem' }}>
                           <FaGraduationCap />
                        </CardIcon>
                        <div>
                           <CardTitle style={{ margin: 0, fontSize: '1.5rem' }}>생활가전 유지보수사 1급</CardTitle>
                           <div style={{ color: '#64748b', marginTop: '0.5rem' }}>고급 전문가 과정 | 필기 + 실기</div>
                        </div>
                     </div>

                     <Grid columns={2} style={{ gap: '2rem' }}>
                        <div>
                           <div style={{ marginBottom: '1rem' }}>
                              <CardIcon $secondary style={{ fontSize: '1.2rem' }}>
                                 <FaPen />
                              </CardIcon>
                              <h4 style={{ color: '#1e293b' }}>필기 시험 (150분)</h4>
                           </div>
                           <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '10px', borderLeft: '4px solid #667eea' }}>
                              <div style={{ fontWeight: '600', marginBottom: '1rem', color: '#667eea' }}>출제 과목 (100문항)</div>
                              <ul style={{ margin: 0, paddingLeft: '1rem', lineHeight: '1.8' }}>
                                 <li>
                                    <strong>가전제품 고장 진단 심화</strong> (25문항)
                                    <br />
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>복합 고장 원인 분석, 진단 장비 활용, 회로도 해석</span>
                                 </li>
                                 <li>
                                    <strong>회로 분석 및 수리 기술</strong> (25문항)
                                    <br />
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>전자회로 분석, PCB 수리, 부품 교체 기법</span>
                                 </li>
                                 <li>
                                    <strong>안전 규정 및 법규</strong> (25문항)
                                    <br />
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>전기안전법, 제품안전법, 작업안전수칙</span>
                                 </li>
                                 <li>
                                    <strong>고객 응대 및 서비스</strong> (25문항)
                                    <br />
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>고객 상담, 클레임 처리, 서비스 품질 관리</span>
                                 </li>
                              </ul>
                           </div>
                        </div>

                        <div>
                           <div style={{ marginBottom: '1rem' }}>
                              <CardIcon $accent style={{ fontSize: '1.2rem' }}>
                                 <FaTools />
                              </CardIcon>
                              <h4 style={{ color: '#1e293b' }}>실기 시험 (120분)</h4>
                           </div>
                           <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '10px', borderLeft: '4px solid #0ea5e9' }}>
                              <div style={{ fontWeight: '600', marginBottom: '1rem', color: '#0ea5e9' }}>실무 작업 과제</div>
                              <ul style={{ margin: 0, paddingLeft: '1rem', lineHeight: '1.8' }}>
                                 <li>
                                    <strong>복합 고장 진단 및 수리</strong>
                                    <br />
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>다중 고장 원인 파악, 체계적 수리 절차</span>
                                 </li>
                                 <li>
                                    <strong>핵심 부품 교체</strong>
                                    <br />
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>컴프레서, 모터, 제어보드 교체 작업</span>
                                 </li>
                                 <li>
                                    <strong>성능 측정 및 평가</strong>
                                    <br />
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>전력 측정, 효율 분석, 품질 검증</span>
                                 </li>
                                 <li>
                                    <strong>작업 보고서 작성</strong>
                                    <br />
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>수리 내역, 부품 교체 기록, 고객 안내</span>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </Grid>
                  </Card>
               </Grid>

               {/* 생활가전 유지보수사 2급 */}
               <Grid columns={1} style={{ marginBottom: '3rem' }}>
                  <Card as={motion.div} variants={fadeInScale} style={{ padding: '2rem' }}>
                     <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '2px solid #e2e8f0' }}>
                        <CardIcon $secondary style={{ fontSize: '2rem' }}>
                           <FaCertificate />
                        </CardIcon>
                        <div>
                           <CardTitle style={{ fontSize: '1.5rem' }}>생활가전 유지보수사 2급</CardTitle>
                           <div style={{ color: '#64748b', marginTop: '0.5rem' }}>기초 전문가 과정 | 필기 + 실기</div>
                        </div>
                     </div>

                     <Grid columns={2} style={{ gap: '2rem' }}>
                        <div>
                           <div style={{ marginBottom: '1rem' }}>
                              <CardIcon $primary style={{ fontSize: '1.2rem' }}>
                                 <FaPen />
                              </CardIcon>
                              <h4 style={{ color: '#1e293b' }}>필기 시험 (120분)</h4>
                           </div>
                           <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '10px', borderLeft: '4px solid #11998e' }}>
                              <div style={{ fontWeight: '600', marginBottom: '1rem', color: '#11998e' }}>출제 과목 (80문항)</div>
                              <ul style={{ paddingLeft: '1rem', lineHeight: '1.8' }}>
                                 <li>
                                    <strong>가전제품 개론</strong> (20문항)
                                    <br />
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>가전제품 종류, 구조, 작동 원리</span>
                                 </li>
                                 <li>
                                    <strong>전기/전자 기초</strong> (20문항)
                                    <br />
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>전기 이론, 전자 부품, 회로 기초</span>
                                 </li>
                                 <li>
                                    <strong>유지보수 일반</strong> (20문항)
                                    <br />
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>점검 방법, 청소 기법, 예방 정비</span>
                                 </li>
                                 <li>
                                    <strong>안전 관리</strong> (20문항)
                                    <br />
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>작업 안전, 전기 안전, 응급처치</span>
                                 </li>
                              </ul>
                           </div>
                        </div>

                        <div>
                           <div style={{ marginBottom: '1rem' }}>
                              <CardIcon $accent style={{ fontSize: '1.2rem' }}>
                                 <FaWrench />
                              </CardIcon>
                              <h4 style={{ color: '#1e293b' }}>실기 시험 (90분)</h4>
                           </div>
                           <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '10px', borderLeft: '4px solid #22c55e' }}>
                              <div style={{ fontWeight: '600', marginBottom: '1rem', color: '#22c55e' }}>기본 작업 과제</div>
                              <ul style={{ paddingLeft: '1rem', lineHeight: '1.8' }}>
                                 <li>
                                    <strong>기본 분해 및 조립</strong>
                                    <br />
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>외관 분해, 내부 청소, 조립 복원</span>
                                 </li>
                                 <li>
                                    <strong>간단한 부품 교체</strong>
                                    <br />
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>필터, 벨트, 소모품 교체 작업</span>
                                 </li>
                                 <li>
                                    <strong>기초 측정 장비 사용</strong>
                                    <br />
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>멀티미터, 절연저항계 사용법</span>
                                 </li>
                                 <li>
                                    <strong>기본 점검 및 청소</strong>
                                    <br />
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>외관 점검, 내부 청소, 기능 확인</span>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </Grid>
                  </Card>
               </Grid>

               {/* 에어컨설치 관리사 & 환기청정시스템 관리사 */}
               <Grid columns={2} style={{ gap: '2rem' }}>
                  <Card as={motion.div} variants={fadeInScale} style={{ padding: '2rem', textAlign: 'center' }}>
                     <CardIcon $accent style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        <FaWrench />
                     </CardIcon>
                     <CardTitle style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>에어컨설치 관리사</CardTitle>
                     <div style={{ color: '#64748b', marginBottom: '1.5rem' }}>실기 중심 과정 (150분)</div>
                     <div style={{ backgroundColor: '#fef3c7', padding: '1.5rem', borderRadius: '10px', borderLeft: '4px solid #f59e0b' }}>
                        <div style={{ fontWeight: '600', marginBottom: '1rem', color: '#92400e' }}>전문 실무 과제</div>
                        <ul style={{ margin: 0, paddingLeft: '1rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                           <li>에어컨 설치 표준 준수</li>
                           <li>냉매 회수 및 충전 작업</li>
                           <li>배관 연결 및 진공 작업</li>
                           <li>전기 배선 및 제어 연결</li>
                           <li>성능 점검 및 시운전</li>
                           <li>설치 완료 보고서 작성</li>
                        </ul>
                     </div>
                  </Card>

                  <Card as={motion.div} variants={fadeInScale} style={{ padding: '2rem', textAlign: 'center' }}>
                     <CardIcon $primary style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        <FaLaptopCode />
                     </CardIcon>
                     <CardTitle style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>환기청정시스템 관리사</CardTitle>
                     <div style={{ color: '#64748b', marginBottom: '1.5rem' }}>필기 + 실기 (220분)</div>
                     <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '10px', borderLeft: '4px solid #3b82f6' }}>
                        <div style={{ fontWeight: '600', marginBottom: '1rem', color: '#1e40af' }}>종합 평가 과제</div>
                        <div style={{ marginBottom: '1rem' }}>
                           <strong style={{ fontSize: '0.9rem' }}>필기 (120분):</strong>
                           <div style={{ fontSize: '0.85rem', color: '#64748b', marginLeft: '1rem' }}>환기시스템 설계, 공기질 측정, 환경 법규</div>
                        </div>
                        <div>
                           <strong style={{ fontSize: '0.9rem' }}>실기 (100분):</strong>
                           <div style={{ fontSize: '0.85rem', color: '#64748b', marginLeft: '1rem' }}>필터 교체, 시스템 점검, 공기질 측정 실습</div>
                        </div>
                     </div>
                  </Card>
               </Grid>
            </CompactSection>

            <Section ref={methodRef}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} initial="hidden" animate={methodInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     평가 방식별 상세 정보
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} initial="hidden" animate={methodInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     필기와 실기 시험의 특징과 기준
                  </SectionSubtitle>
               </SectionHeader>
               <Grid columns={2}>
                  <Card as={motion.div} variants={slideInLeft} style={{ textAlign: 'center' }}>
                     <CardIcon $primary style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                        <FaPen />
                     </CardIcon>
                     <CardTitle style={{ marginBottom: '1.5rem' }}>필기 시험</CardTitle>
                     <CardDescription style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                        <strong>출제 형식:</strong> 객관식 4지 선다형
                     </CardDescription>
                     <CardDescription style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                        <strong>시험 시간:</strong> 60분 (과목당)
                     </CardDescription>
                     <CardDescription style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                        <strong>합격 기준:</strong> 과목당 40점 이상, 전 과목 평균 60점 이상
                     </CardDescription>
                     <CardDescription style={{ lineHeight: '1.7' }}>
                        <strong>주요 내용:</strong> 이론 지식, 법규, 안전 관리, 기초 원리
                     </CardDescription>
                  </Card>

                  <Card as={motion.div} variants={slideInRight} style={{ textAlign: 'center' }}>
                     <CardIcon $secondary style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                        <FaTools />
                     </CardIcon>
                     <CardTitle style={{ marginBottom: '1.5rem' }}>실기 시험</CardTitle>
                     <CardDescription style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                        <strong>평가 형식:</strong> 실제 작업 수행 및 평가
                     </CardDescription>
                     <CardDescription style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                        <strong>시험 시간:</strong> 120분 (자격증별 상이)
                     </CardDescription>
                     <CardDescription style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                        <strong>합격 기준:</strong> 60점 이상 (세부 기준 상이)
                     </CardDescription>
                     <CardDescription style={{ lineHeight: '1.7' }}>
                        <strong>주요 내용:</strong> 실무 능력, 작업 수행, 장비 사용, 문제 해결
                     </CardDescription>
                  </Card>
               </Grid>
            </Section>

            <Section ref={coreRef}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} initial="hidden" animate={coreInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     자격증별 핵심 과목
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} initial="hidden" animate={coreInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     각 자격증의 최중요 학습 내용
                  </SectionSubtitle>
               </SectionHeader>
               <Grid columns={2}>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $primary>
                        <FaGraduationCap />
                     </CardIcon>
                     <CardTitle>생활가전 유지보수사</CardTitle>
                     <CardDescription>
                        • 가전제품 구조 및 원리
                        <br />
                        • 전기/전자 기초 이론
                        <br />
                        • 고장 진단 및 수리 기법
                        <br />
                        • 안전 관리 및 작업 수칙
                        <br />• 고객 서비스 및 커뮤니케이션
                     </CardDescription>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $secondary>
                        <FaWrench />
                     </CardIcon>
                     <CardTitle>에어컨설치 관리사</CardTitle>
                     <CardDescription>
                        • 에어컨 설치 표준 및 규정
                        <br />
                        • 냉매 취급 및 관리
                        <br />
                        • 배관 작업 및 전기 연결
                        <br />
                        • 진공 및 기밀 테스트
                        <br />• 성능 점검 및 시운전
                     </CardDescription>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $accent>
                        <FaLaptopCode />
                     </CardIcon>
                     <CardTitle>환기청정시스템 관리사</CardTitle>
                     <CardDescription>
                        • 환기 시스템 설계 원리
                        <br />
                        • 공기질 측정 및 분석
                        <br />
                        • 필터 종류 및 교체 방법
                        <br />
                        • 시스템 점검 및 유지보수
                        <br />• 환경 법규 및 기준
                     </CardDescription>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $primary>
                        <FaCertificate />
                     </CardIcon>
                     <CardTitle>가전제품분해청소관리사</CardTitle>
                     <CardDescription>
                        • 가전제품 분해 및 조립
                        <br />
                        • 청소 기법 및 세제 선택
                        <br />
                        • 부품별 관리 방법
                        <br />
                        • 안전 작업 수칙
                        <br />• 고객 응대 및 서비스
                     </CardDescription>
                  </Card>
               </Grid>
            </Section>

            {/* 시험 과정 이미지 갤러리 */}
            <CompactSection as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInUp}>
                     시험 과정 안내
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInUp}>
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

            <Section ref={noticeRef}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} initial="hidden" animate={noticeInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     시험 준비 안내
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} initial="hidden" animate={noticeInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     시험 준비 시 주의사항과 안내사항
                  </SectionSubtitle>
               </SectionHeader>
               <Grid columns={1}>
                  <Card
                     as={motion.div}
                     variants={fadeInScale}
                     style={{
                        textAlign: 'center',
                        padding: '2rem',
                        backgroundColor: '#fef3c7',
                        border: '2px solid #f59e0b',
                     }}
                  >
                     <CardIcon $accent style={{ fontSize: '3rem', marginBottom: '1rem', color: '#f59e0b' }}>
                        <FaExclamationTriangle />
                     </CardIcon>
                     <CardTitle style={{ marginBottom: '1rem', color: '#92400e' }}>중요 안내사항</CardTitle>
                     <CardDescription
                        style={{
                           marginBottom: '1.5rem',
                           fontSize: '1rem',
                           color: '#92400e',
                           lineHeight: '1.8',
                           textAlign: 'left',
                        }}
                     >
                        <strong>• 시험 과목 변경:</strong> 상기 내용은 예시이며, 실제 시험 과목 및 평가 방법은 시험 공고 시 확정됩니다.
                        <br />
                        <strong>• 최신 정보 확인:</strong> 공지사항을 통해 최신 시험 정보를 반드시 확인해주시기 바랍니다.
                        <br />
                        <strong>• 교육 프로그램:</strong> 각 자격증별 맞춤형 교육 프로그램을 통해 체계적으로 준비하실 수 있습니다.
                        <br />
                        <strong>• 문의사항:</strong> 시험 관련 문의는 협회 사무국으로 연락해주시기 바랍니다.
                     </CardDescription>
                  </Card>
               </Grid>
            </Section>
         </Container>
      </PageWrapper>
   )
}
