import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { FaFlask, FaShieldAlt, FaLeaf, FaCheckCircle, FaIndustry, FaCertificate, FaUsers, FaClipboardList, FaExclamationTriangle, FaChartLine, FaTrophy, FaThumbsUp } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { getImageUrl, getOptimizedImageProps, handleImageError, getLazyLoadingProps } from '../../../utils/imageHelpers'
import { BeforeAfterSlider } from '../../../components/common/BeforeAfterSlider'
import {
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
   ContentWithImage,
   ContentText,
   ContentImage,
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
   CompactGrid,
   BeforeAfterContainer,
   BeforeAfterCard,
   BeforeAfterImage,
   BeforeAfterLabel,
} from '../../../components/common/SharedStyles'

export function ProductWelzonePage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: productRef, inView: productInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: usageRef, inView: usageInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: certificationRef, inView: certificationInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   return (
      <PageWrapper>
         {/* Hero Section - 현대적 디자인 */}
         <ModernHeroSection ref={heroRef} bgImage={getImageUrl('hero', 'product.jpg')}>
            <HeroBackground radialGradient="radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)" />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={slideInLeft}>
                  <HeroBadge>
                     <FaFlask />
                     <span>웰존 핀코일 크리너</span>
                  </HeroBadge>
                  <HeroTitle>
                     안전한 친환경 세제를 사용한
                     <br />
                     <GradientText>세척 서비스</GradientText>
                  </HeroTitle>
                  <HeroSubtitle>Welzone Fin Coil Cleaner</HeroSubtitle>
                  <HeroDescription>가전 크리닝에 필요한 차별화된 서비스를 제공합니다</HeroDescription>
               </motion.div>
               <HeroImageContainer>
                  <HeroImagePlaceholder>
                     <FaFlask size={80} />
                     <FaShieldAlt size={60} />
                     <FaLeaf size={70} />
                     <p>친환경 세척 서비스</p>
                  </HeroImagePlaceholder>
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         {/* 통계 섹션 - 제품 성과 지표 */}
         <StatisticsSection>
            <Container>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                  <StatisticsGrid>
                     <StatCard as={motion.div} variants={fadeInScale}>
                        <StatNumber>99.8%</StatNumber>
                        <StatLabel>세척 효율</StatLabel>
                     </StatCard>
                     <StatCard as={motion.div} variants={fadeInScale}>
                        <StatNumber>100%</StatNumber>
                        <StatLabel>친환경 인증</StatLabel>
                     </StatCard>
                     <StatCard as={motion.div} variants={fadeInScale}>
                        <StatNumber>5분</StatNumber>
                        <StatLabel>평균 작업 시간</StatLabel>
                     </StatCard>
                     <StatCard as={motion.div} variants={fadeInScale}>
                        <StatNumber>0건</StatNumber>
                        <StatLabel>부식 발생</StatLabel>
                     </StatCard>
                  </StatisticsGrid>
               </motion.div>
            </Container>
         </StatisticsSection>

         {/* 지그재그 레이아웃 - 제품 정보 */}
         <ZigzagSection ref={productRef} background="white">
            <Container>
               <motion.div initial="hidden" animate={productInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>안전한 친환경 세제를 사용한 표시사항</SectionTitle>
                     <SectionSubtitle>신고번호: EB19-01-0712</SectionSubtitle>
                  </SectionHeader>

                  <ZigzagLayout as={motion.div} variants={staggerContainer}>
                     <ZigzagContent as={motion.div} variants={slideInLeft}>
                        <h3>제품 정보</h3>
                        <p>안전하고 효과적인 친환경 세정제로서 에어컨 냉각기 핀 전용으로 개발된 전문 제품입니다.</p>
                        <ul>
                           <li><FaFlask /> 품목: 세정제</li>
                           <li><FaFlask /> 용도: 에어컨냉각기핀용, 세탁조용</li>
                           <li><FaFlask /> 제형: 보충형(분무기형), 용량: 4L</li>
                           <li><FaFlask /> 액성: 원액(알칼리성)</li>
                        </ul>
                     </ZigzagContent>
                     <ZigzagImage as={motion.div} variants={slideInRight}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('products', 'welzone.product'), '웰존 핀코일 크리너 제품', [{ width: 400 }, { width: 600 }])} />
                     </ZigzagImage>
                  </ZigzagLayout>

                  <ZigzagLayout as={motion.div} variants={staggerContainer}>
                     <ZigzagContent as={motion.div} variants={slideInRight}>
                        <h3>사용상 주의사항</h3>
                        <p>안전한 사용을 위해 반드시 사용 방법과 주의사항을 숙지하고 사용하시기 바랍니다.</p>
                        <ul>
                           <li><FaExclamationTriangle /> 주요물질: 정제수, 2-에틸 헥사놀 이오-피오 폴리머</li>
                           <li><FaExclamationTriangle /> 사용법: 오염부위에 적정량 도포 후 5분 대기</li>
                           <li><FaExclamationTriangle /> 마무리: 고압세척기로 깨끗하게 헹굼</li>
                        </ul>
                     </ZigzagContent>
                     <ZigzagImage as={motion.div} variants={slideInLeft}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('certifications', 'appliance.work'), '안전한 사용 방법', [{ width: 400 }, { width: 600 }])} />
                     </ZigzagImage>
                  </ZigzagLayout>
               </motion.div>
            </Container>
         </ZigzagSection>

         {/* 컴팩트 특징 섹션 - 여백 최적화 */}
         <CompactSection ref={featuresRef} background="linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)">
            <Container>
               <motion.div initial="hidden" animate={featuresInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>웰존 핀코일 크리너 특징</SectionTitle>
                     <SectionSubtitle>가전 크리닝에 필요한 차별화된 서비스를 제공합니다</SectionSubtitle>
                  </SectionHeader>

                  <CompactGrid columns={3}>
                     <Card as={motion.div} variants={fadeInScale}>
                        <CardIcon primary>
                           <FaLeaf />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>친환경 마크 인증</CardTitle>
                           <CardDescription>CMIT, MIT, OIT, BIT, 포름알데히드, 에칠렌글리콜 불검출 시험 완료</CardDescription>
                        </CardContent>
                     </Card>

                     <Card as={motion.div} variants={fadeInScale}>
                        <CardIcon secondary>
                           <FaCertificate />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>한국냉동협회 공인</CardTitle>
                           <CardDescription>협회에서 공식 인정한 전문 약품으로 신뢰성 보장</CardDescription>
                        </CardContent>
                     </Card>

                     <Card as={motion.div} variants={fadeInScale}>
                        <CardIcon accent>
                           <FaIndustry />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>제조사 전용 크리너</CardTitle>
                           <CardDescription>S가전 서비스(케어플러스)에서 사용하는 전문 제품</CardDescription>
                        </CardContent>
                     </Card>

                     <Card as={motion.div} variants={fadeInScale}>
                        <CardIcon primary>
                           <FaShieldAlt />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>안전기준 적합</CardTitle>
                           <CardDescription>성분 검토와 표시사항 검토를 통한 안전성 확인</CardDescription>
                        </CardContent>
                     </Card>

                     <Card as={motion.div} variants={fadeInScale}>
                        <CardIcon secondary>
                           <FaUsers />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>기술 지원 서비스</CardTitle>
                           <CardDescription>약품업체와 서비스업체 간 기술 지원 및 제안서 작성 지원</CardDescription>
                        </CardContent>
                     </Card>

                     <Card as={motion.div} variants={fadeInScale}>
                        <CardIcon accent>
                           <FaThumbsUp />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>검증된 효과</CardTitle>
                           <CardDescription>공인기관 시험 완료, 세척력 시험 완료, 생분해도 검사 완료</CardDescription>
                        </CardContent>
                     </Card>
                  </CompactGrid>
               </motion.div>
            </Container>
         </CompactSection>

         {/* 지그재그 레이아웃 - 사용처 및 효과 */}
         <ZigzagSection ref={usageRef} background="white">
            <Container>
               <motion.div initial="hidden" animate={usageInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>왜 에어컨제조사에서 웰존을 사용할까요?</SectionTitle>
                     <SectionSubtitle>친환경 인증 제품으로 안전하고 효과적인 세척이 가능합니다</SectionSubtitle>
                  </SectionHeader>

                  <ZigzagLayout as={motion.div} variants={staggerContainer}>
                     <ZigzagContent as={motion.div} variants={slideInLeft}>
                        <h3>친환경 인증 제품</h3>
                        <p>친환경 인증 기준 합격으로 유해물질을 현저히 감소시켜 안전성을 보장합니다. 환경과 인체에 무해한 성분으로 제조되어 안심하고 사용할 수 있습니다.</p>
                        <ul>
                           <li><FaCertificate /> 친환경 인증 기준 합격</li>
                           <li><FaCertificate /> 유해물질 감소 확인</li>
                           <li><FaCertificate /> 환경부 승인 제품</li>
                        </ul>
                     </ZigzagContent>
                     <ZigzagImage as={motion.div} variants={slideInRight}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('products', 'certification'), '친환경 인증서', [{ width: 400 }, { width: 600 }])} />
                     </ZigzagImage>
                  </ZigzagLayout>

                  <ZigzagLayout as={motion.div} variants={staggerContainer}>
                     <ZigzagContent as={motion.div} variants={slideInRight}>
                        <h3>엄선된 원료</h3>
                        <p>인성업, 가성소다 비함유로 부식을 방지하고, 가습기살균제 성분들의 불검출을 통해 완전한 안전성을 확보했습니다.</p>
                        <ul>
                           <li><FaShieldAlt /> 인성업, 가성소다 비함유</li>
                           <li><FaShieldAlt /> CMIT, MIT 불검출</li>
                           <li><FaShieldAlt /> OIT, BIT, 에칠렌글리콜, 포름알데히드 불검출</li>
                        </ul>
                     </ZigzagContent>
                     <ZigzagImage as={motion.div} variants={slideInLeft}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'practical'), '원료 안전성 검사', [{ width: 400 }, { width: 600 }])} />
                     </ZigzagImage>
                  </ZigzagLayout>
               </motion.div>
            </Container>
         </ZigzagSection>

         {/* Before/After 비교 섹션 */}
         <Section>
            <Container>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>웰존 핀코일 크리너 효과</SectionTitle>
                     <SectionSubtitle>청소 전후 비교를 통해 확인하는 탁월한 세척 효과</SectionSubtitle>
                  </SectionHeader>

                  <BeforeAfterContainer>
                     <BeforeAfterCard as={motion.div} variants={slideInLeft}>
                        <BeforeAfterImage {...getOptimizedImageProps(getImageUrl('products', 'welzone.before'), '청소 전 에어컨 상태', [{ width: 400 }, { width: 600 }])} />
                        <BeforeAfterLabel style={{
                           top: '1rem',
                           left: '1rem',
                           background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
                           color: 'white',
                           padding: '0.5rem 1rem',
                           borderRadius: '20px',
                           fontWeight: '600',
                        }}>
                           청소 전 (Before)
                        </BeforeAfterLabel>
                        <div style={{
                           position: 'absolute',
                           bottom: '1rem',
                           left: '1rem',
                           right: '1rem',
                           background: 'rgba(0, 0, 0, 0.8)',
                           color: 'white',
                           padding: '1rem',
                           borderRadius: '8px',
                        }}>
                           <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>오염된 상태</h4>
                           <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>먼지와 세균이 축적되어 공기질 저하 및 효율성 감소</p>
                        </div>
                     </BeforeAfterCard>

                     <BeforeAfterCard as={motion.div} variants={slideInRight}>
                        <BeforeAfterImage {...getOptimizedImageProps(getImageUrl('products', 'welzone.after'), '청소 후 에어컨 상태', [{ width: 400 }, { width: 600 }])} />
                        <BeforeAfterLabel style={{
                           top: '1rem',
                           left: '1rem',
                           background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                           color: 'white',
                           padding: '0.5rem 1rem',
                           borderRadius: '20px',
                           fontWeight: '600',
                        }}>
                           청소 후 (After)
                        </BeforeAfterLabel>
                        <div style={{
                           position: 'absolute',
                           bottom: '1rem',
                           left: '1rem',
                           right: '1rem',
                           background: 'rgba(0, 0, 0, 0.8)',
                           color: 'white',
                           padding: '1rem',
                           borderRadius: '8px',
                        }}>
                           <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>깨끗한 상태</h4>
                           <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>친환경 세제로 안전하고 완벽하게 세척된 상태</p>
                        </div>
                     </BeforeAfterCard>
                  </BeforeAfterContainer>
               </motion.div>
            </Container>
         </Section>

         {/* 컴팩트 인증 섹션 */}
         <CompactSection ref={certificationRef} background="linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)">
            <Container>
               <motion.div initial="hidden" animate={certificationInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>안전한 친환경 세제를 사용한 세척 서비스</SectionTitle>
                     <SectionSubtitle>공인기관 시험 완료 세척력 시험 완료 생분해도 검사 완료</SectionSubtitle>
                  </SectionHeader>

                  <Section style={{ background: 'white', borderRadius: '20px', padding: '2rem', border: '1px solid #10b981' }}>
                     <motion.div as={motion.div} variants={fadeInScale}>
                        <CompactGrid columns={3} style={{ marginBottom: '2rem' }}>
                           <Card style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem', borderRadius: '15px', fontSize: '0.9rem', fontWeight: '600' }}>
                              <FaLeaf /> 한국냉동공조협회 공인 약품
                           </Card>
                           <Card style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem', borderRadius: '15px', fontSize: '0.9rem', fontWeight: '600' }}>
                              <FaShieldAlt /> 환경부 친환경 인증 약품
                           </Card>
                           <Card style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem', borderRadius: '15px', fontSize: '0.9rem', fontWeight: '600' }}>
                              <FaCheckCircle /> 부식 발생이 적은 약품
                           </Card>
                        </CompactGrid>
                        
                        <p style={{ color: '#047857', lineHeight: '1.7', fontSize: '1.1rem', textAlign: 'center', marginBottom: '2rem' }}>고객뿐만 아니라 작업자의 안전까지 생각한 엄선된 원료의 친환경 세제만을 사용하므로 모두가 안심할 수 있습니다.</p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', color: '#10b981' }}>
                           <FaCertificate size={80} />
                           <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1e293b' }}>ECO-LABEL 인증서</div>
                        </div>
                     </motion.div>
                  </Section>
               </motion.div>
            </Container>
         </CompactSection>

         {/* Before/After 효과 비교 섹션 */}
         <Section as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
            <Container>
               <SectionHeader>
                  <SectionTitle as={motion.h2} variants={fadeInScale}>
                     웰존 핀코일 크리너 효과
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} variants={fadeInScale}>
                     직접 확인해보세요! 슬라이더를 움직여 놀라운 변화를 경험하세요
                  </SectionSubtitle>
               </SectionHeader>

               <motion.div variants={fadeInScale}>
                  <BeforeAfterSlider beforeImage={getImageUrl('products', 'welzone.before')} afterImage={getImageUrl('products', 'welzone.after')} beforeLabel="청소 전" afterLabel="청소 후" alt="웰존 핀코일 크리너 사용 전후 비교" />
               </motion.div>

               <ContentWithImage>
                  <ContentText>
                     <motion.h3 variants={fadeInScale}>확실한 효과, 눈으로 확인하세요</motion.h3>
                     <motion.p variants={fadeInScale}>웰존 핀코일 크리너는 단순한 세정제가 아닙니다. 오랜 연구개발을 통해 완성된 전문 청소 솔루션으로, 기존 방법으로는 제거하기 어려운 오염물질까지 완벽하게 제거합니다.</motion.p>
                     <motion.p variants={fadeInScale}>위 이미지에서 보시는 것처럼, 사용 전후의 차이는 명확합니다. 이는 단순한 표면 청소가 아닌, 근본적인 오염 제거를 통해 가전제품의 성능을 복원하고 수명을 연장시키는 결과입니다.</motion.p>
                  </ContentText>
                  <ContentImage>
                     <ResponsiveImage src={getImageUrl('products', 'welzone.product')} alt="웰존 핀코일 크리너 제품" onError={handleImageError} {...getLazyLoadingProps()} />
                  </ContentImage>
               </ContentWithImage>
            </Container>
         </Section>
      </PageWrapper>
   )
}