import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { Link } from 'react-router-dom'
import { FaGraduationCap, FaUserGraduate, FaWind, FaHome, FaClipboardList, FaCalendarCheck, FaCreditCard, FaAward, FaChalkboardTeacher, FaCalendarAlt, FaExclamationTriangle } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { getImageUrl } from '../../../utils/imageHelpers'
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
} from '../../../components/common/SharedStyles'

export function ExamProgramsPage() {
   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: programRef, inView: programInView } = useInView({ triggerOnce: true, threshold: 0.05 })
   const { ref: featureRef, inView: featureInView } = useInView({ triggerOnce: true, threshold: 0.05 })
   const { ref: supportRef, inView: supportInView } = useInView({ triggerOnce: true, threshold: 0.05 })
   const { ref: applyRef, inView: applyInView } = useInView({ triggerOnce: true, threshold: 0.05 })

   return (
      <PageWrapper>
         <ModernHeroSection bgImage={getImageUrl('hero', 'exam.jpg')} ref={heroRef}>
            <HeroBackground />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaGraduationCap /> 시험 프로그램 안내
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     시험 대비 <GradientText>프로그램</GradientText>
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "체계적인 교육과 전문 지도로 합격률 극대화"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     자격 시험 준비를 위한 체계적인
                     <br />
                     교육 프로그램을 확인해보세요
                  </HeroDescription>
               </motion.div>
               <HeroImageContainer as={motion.div} variants={slideInRight}>
                  <HeroImagePlaceholder>
                     <FaChalkboardTeacher size={80} />
                     <p>전문 교육 프로그램</p>
                  </HeroImagePlaceholder>
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         <Container>
            {/* 🎯 교육 프로그램 시간표 (신규 추가) */}
            <CompactSection as={motion.section} initial="hidden" animate="visible" variants={staggerContainer}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInUp}>
                     <FaCalendarAlt /> 2025년 교육 프로그램 시간표
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInUp}>
                     시험 대비 교육 일정을 확인하고 미리 신청하세요
                  </SectionSubtitle>
               </SectionHeader>

               <Grid columns={1}>
                  <Card as={motion.div} variants={fadeInScale} style={{ overflow: 'auto', marginBottom: '2rem' }}>
                     <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                        <thead>
                           <tr style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
                              <th style={{ border: '1px solid #764ba2', padding: '1rem', textAlign: 'center', fontWeight: '600' }}>교육 과정</th>
                              <th style={{ border: '1px solid #764ba2', padding: '1rem', textAlign: 'center', fontWeight: '600' }}>교육 기간</th>
                              <th style={{ border: '1px solid #764ba2', padding: '1rem', textAlign: 'center', fontWeight: '600' }}>교육 시간</th>
                              <th style={{ border: '1px solid #764ba2', padding: '1rem', textAlign: 'center', fontWeight: '600' }}>수강료</th>
                              <th style={{ border: '1px solid #764ba2', padding: '1rem', textAlign: 'center', fontWeight: '600' }}>모집 현황</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', fontWeight: '600', backgroundColor: '#f8fafc' }}>생활가전 유지보수사 2급 대비반</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>
                                 2025.02.01 ~ 02.28
                                 <br />
                                 (4주)
                              </td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>
                                 평일 19:00~22:00
                                 <br />
                                 (주 3회)
                              </td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>350,000원</td>
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
                                    모집중 (8/20)
                                 </span>
                              </td>
                           </tr>
                           <tr style={{ backgroundColor: '#fafbfc' }}>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', fontWeight: '600', backgroundColor: '#f8fafc' }}>생활가전 유지보수사 1급 대비반</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>
                                 2025.02.01 ~ 03.15
                                 <br />
                                 (6주)
                              </td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>
                                 주말 09:00~18:00
                                 <br />
                                 (토요일)
                              </td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>550,000원</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>
                                 <span
                                    style={{
                                       padding: '0.25rem 0.75rem',
                                       borderRadius: '20px',
                                       fontSize: '0.8rem',
                                       fontWeight: '600',
                                       background: 'linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%)',
                                       color: 'white',
                                    }}
                                 >
                                    마감임박 (14/15)
                                 </span>
                              </td>
                           </tr>
                           <tr>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', fontWeight: '600', backgroundColor: '#f8fafc' }}>에어컨설치 관리사 실무반</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>
                                 2025.02.15 ~ 03.15
                                 <br />
                                 (4주)
                              </td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>
                                 주말 09:00~17:00
                                 <br />
                                 (토,일)
                              </td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>450,000원</td>
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
                                    모집중 (5/12)
                                 </span>
                              </td>
                           </tr>
                           <tr style={{ backgroundColor: '#fafbfc' }}>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', fontWeight: '600', backgroundColor: '#f8fafc' }}>환기청정시스템 관리사반</td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>
                                 2025.03.01 ~ 03.29
                                 <br />
                                 (4주)
                              </td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>
                                 평일 19:00~22:00
                                 <br />
                                 (주 2회)
                              </td>
                              <td style={{ border: '1px solid #e2e8f0', padding: '1rem', textAlign: 'center' }}>400,000원</td>
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
                                    준비중
                                 </span>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                     <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '10px', border: '1px solid #0ea5e9' }}>
                        <div style={{ gap: '0.5rem', marginBottom: '0.5rem' }}>
                           <FaExclamationTriangle style={{ color: '#0ea5e9' }} />
                           <strong style={{ color: '#0c4a6e' }}>교육 프로그램 안내</strong>
                        </div>
                        <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#0c4a6e', lineHeight: '1.6' }}>
                           <li>조기 등록 시 10% 할인 혜택 (1월 31일까지)</li>
                           <li>교재비 및 실습 재료비 별도</li>
                           <li>수료증 발급 (출석률 80% 이상)</li>
                           <li>시험 접수비 20% 할인 쿠폰 제공</li>
                        </ul>
                     </div>
                  </Card>
               </Grid>
            </CompactSection>

            <Section ref={programRef}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} initial="hidden" animate={programInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     시험 대비 교육 프로그램 상세
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} initial="hidden" animate={programInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     전문가가 직접 가르치는 실무 중심 교육의 특징을 확인하세요
                  </SectionSubtitle>
               </SectionHeader>
               <Grid columns={2}>
                  <Card as={motion.div} variants={slideInLeft} style={{ textAlign: 'center', padding: '2rem' }}>
                     <CardIcon $primary style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                        <FaUserGraduate />
                     </CardIcon>
                     <CardTitle style={{ marginBottom: '1.5rem' }}>생활가전 유지보수사 대비반</CardTitle>
                     <CardDescription style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
                        <strong>1급 및 2급 자격 시험 완벽 대비</strong>
                        <br />
                        이론 및 실습 집중 과정으로 최신 기출 문제 분석과 실전 모의고사를 통해 합격률을 높입니다. 현장 전문가의 노하우를 직접 전수받을 수 있는 프리미엄 교육 과정입니다.
                     </CardDescription>
                     <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
                        <div style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#667eea' }}>교육 내용</div>
                        <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
                           <li>가전제품 구조 및 원리 심화</li>
                           <li>고장 진단 및 수리 실습</li>
                           <li>최신 기출문제 완벽 분석</li>
                           <li>실전 모의고사 3회 실시</li>
                        </ul>
                     </div>
                     <Link
                        to="/education/content"
                        style={{
                           display: 'inline-block',
                           padding: '0.75rem 1.5rem',
                           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                           color: 'white',
                           borderRadius: '25px',
                           fontWeight: '600',
                           fontSize: '0.9rem',
                           textDecoration: 'none',
                           transition: 'all 0.3s ease',
                           boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                        }}
                        onMouseEnter={(e) => {
                           e.target.style.transform = 'translateY(-2px)'
                           e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)'
                        }}
                        onMouseLeave={(e) => {
                           e.target.style.transform = 'translateY(0)'
                           e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)'
                        }}
                     >
                        교육 내용 자세히 보기
                     </Link>
                  </Card>

                  <Card as={motion.div} variants={slideInRight} style={{ textAlign: 'center', padding: '2rem' }}>
                     <CardIcon $secondary style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                        <FaWind />
                     </CardIcon>
                     <CardTitle style={{ marginBottom: '1.5rem' }}>에어컨 전문가 실무 과정</CardTitle>
                     <CardDescription style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
                        <strong>실습 중심의 전문가 양성 과정</strong>
                        <br />
                        에어컨 설치, 진단, 수리 전문가 양성을 위한 실습 중심 교육입니다. 현장 노하우 전수 및 최신 기술 동향을 반영한 커리큘럼을 제공합니다.
                     </CardDescription>
                     <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #11998e' }}>
                        <div style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#11998e' }}>교육 내용</div>
                        <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
                           <li>에어컨 설치 표준 및 규정</li>
                           <li>냉매 취급 및 배관 작업</li>
                           <li>진공 테스트 및 성능 점검</li>
                           <li>현장 실습 및 문제 해결</li>
                        </ul>
                     </div>
                     <Link
                        to="/education/content"
                        style={{
                           display: 'inline-block',
                           padding: '0.75rem 1.5rem',
                           background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                           color: 'white',
                           borderRadius: '25px',
                           fontWeight: '600',
                           fontSize: '0.9rem',
                           textDecoration: 'none',
                           transition: 'all 0.3s ease',
                           boxShadow: '0 4px 15px rgba(17, 153, 142, 0.3)',
                        }}
                        onMouseEnter={(e) => {
                           e.target.style.transform = 'translateY(-2px)'
                           e.target.style.boxShadow = '0 6px 20px rgba(17, 153, 142, 0.4)'
                        }}
                        onMouseLeave={(e) => {
                           e.target.style.transform = 'translateY(0)'
                           e.target.style.boxShadow = '0 4px 15px rgba(17, 153, 142, 0.3)'
                        }}
                     >
                        교육 내용 자세히 보기
                     </Link>
                  </Card>
               </Grid>

               <Card
                  as={motion.div}
                  variants={fadeInScale}
                  style={{
                     textAlign: 'center',
                     padding: '2rem',
                     marginTop: '2rem',
                     backgroundColor: '#f8fafc',
                     border: '2px dashed #cbd5e1',
                  }}
               >
                  <CardIcon $accent style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                     <FaHome />
                  </CardIcon>
                  <CardTitle style={{ marginBottom: '1rem', color: '#64748b' }}>추가 프로그램 준비 중</CardTitle>
                  <CardDescription style={{ color: '#64748b', fontStyle: 'italic' }}>
                     스마트홈 전문가 과정 등 추가 프로그램 안내는 준비 중입니다.
                     <br />
                     자세한 일정은 공지사항을 통해 안내드리겠습니다.
                  </CardDescription>
               </Card>
            </Section>

            <Section ref={featureRef}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} initial="hidden" animate={featureInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     교육 프로그램 특징
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} initial="hidden" animate={featureInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     KHAMA만의 차별화된 교육 시스템
                  </SectionSubtitle>
               </SectionHeader>
               <Grid columns={3}>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $primary>
                        <FaChalkboardTeacher />
                     </CardIcon>
                     <CardTitle>현장 전문가 강의</CardTitle>
                     <CardDescription>
                        풍부한 실무 경험을 갖춘 현장 전문가가
                        <br />
                        직접 강의하는 실전 중심 교육
                     </CardDescription>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $secondary>
                        <FaGraduationCap />
                     </CardIcon>
                     <CardTitle>맞춤형 커리큘럼</CardTitle>
                     <CardDescription>
                        각 자격증별 특성을 반영한
                        <br />
                        체계적이고 효율적인 학습 과정
                     </CardDescription>
                  </Card>
                  <Card as={motion.div} variants={fadeInScale}>
                     <CardIcon $accent>
                        <FaAward />
                     </CardIcon>
                     <CardTitle>높은 합격률</CardTitle>
                     <CardDescription>
                        체계적인 관리와 개별 지도를 통한
                        <br />
                        우수한 시험 합격률 달성
                     </CardDescription>
                  </Card>
               </Grid>
            </Section>

            <Section ref={supportRef}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} initial="hidden" animate={supportInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     시험 응시 지원 서비스
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} initial="hidden" animate={supportInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     시험 접수부터 자격증 발급까지 전 과정 지원
                  </SectionSubtitle>
               </SectionHeader>
               <Grid columns={2}>
                  <Card as={motion.div} variants={slideInLeft} style={{ textAlign: 'center' }}>
                     <CardIcon $primary style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        <FaClipboardList />
                     </CardIcon>
                     <CardTitle style={{ marginBottom: '1rem' }}>온라인 원서 접수</CardTitle>
                     <CardDescription>
                        편리한 온라인 원서 접수 시스템 제공
                        <br />
                        간편하고 빠른 시험 신청 프로세스
                     </CardDescription>
                  </Card>
                  <Card as={motion.div} variants={slideInRight} style={{ textAlign: 'center' }}>
                     <CardIcon $secondary style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        <FaCalendarCheck />
                     </CardIcon>
                     <CardTitle style={{ marginBottom: '1rem' }}>시험 일정 공지</CardTitle>
                     <CardDescription>
                        정확한 시험 일정 및 장소 안내
                        <br />
                        실시간 공지사항 업데이트
                     </CardDescription>
                  </Card>
                  <Card as={motion.div} variants={slideInLeft} style={{ textAlign: 'center' }}>
                     <CardIcon $accent style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        <FaCreditCard />
                     </CardIcon>
                     <CardTitle style={{ marginBottom: '1rem' }}>응시료 결제</CardTitle>
                     <CardDescription>
                        다양한 결제 수단 지원
                        <br />
                        응시료 결제 및 환불 안내
                     </CardDescription>
                  </Card>
                  <Card as={motion.div} variants={slideInRight} style={{ textAlign: 'center' }}>
                     <CardIcon $primary style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        <FaAward />
                     </CardIcon>
                     <CardTitle style={{ marginBottom: '1rem' }}>자격증 발급</CardTitle>
                     <CardDescription>
                        합격자 발표 및 자격증 발급 안내
                        <br />
                        신속하고 정확한 자격증 교부
                     </CardDescription>
                  </Card>
               </Grid>
            </Section>

            <Section ref={applyRef}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} initial="hidden" animate={applyInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     시험 접수 바로가기
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} initial="hidden" animate={applyInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     지금 바로 시험에 지원하세요
                  </SectionSubtitle>
               </SectionHeader>
               <Grid columns={1}>
                  <Card as={motion.div} variants={fadeInScale} style={{ textAlign: 'center', padding: '3rem' }}>
                     <CardIcon $primary style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
                        <FaClipboardList />
                     </CardIcon>
                     <CardTitle style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>지금 바로 시험에 접수하세요</CardTitle>
                     <CardDescription style={{ marginBottom: '2rem', fontSize: '1.1rem', color: '#64748b' }}>
                        온라인으로 간편하게 자격 시험에 접수할 수 있습니다.
                        <br />
                        접수 기간을 확인하고 지금 바로 신청해보세요.
                     </CardDescription>
                     <div
                        style={{
                           display: 'inline-block',
                           padding: '1rem 2.5rem',
                           backgroundColor: '#ff9a56',
                           color: 'white',
                           borderRadius: '50px',
                           fontWeight: '600',
                           fontSize: '1.1rem',
                           cursor: 'pointer',
                           transition: 'transform 0.3s, box-shadow 0.3s',
                           textDecoration: 'none',
                           boxShadow: '0 4px 15px rgba(255, 154, 86, 0.3)',
                        }}
                        onMouseEnter={(e) => {
                           e.target.style.transform = 'translateY(-3px)'
                           e.target.style.boxShadow = '0 6px 20px rgba(255, 154, 86, 0.4)'
                        }}
                        onMouseLeave={(e) => {
                           e.target.style.transform = 'translateY(0)'
                           e.target.style.boxShadow = '0 4px 15px rgba(255, 154, 86, 0.3)'
                        }}
                        as={Link}
                        to="/apply?type=exam"
                     >
                        시험 접수 바로가기
                     </div>
                  </Card>
               </Grid>
            </Section>
         </Container>
      </PageWrapper>
   )
}
