import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { FaCertificate, FaFlask, FaLeaf, FaShieldAlt, FaCheckCircle, FaIndustry, FaClipboardList, FaUsers, FaAward } from 'react-icons/fa'
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
   HeroImageContainer,
   HeroImagePlaceholder,
   SectionHeader,
   SectionTitle,
   SectionSubtitle,
   Card,
   CardIcon,
   CardContent,
   CardTitle,
   CardDescription,
   Section,
   ImageGallery,
   ImageGalleryItem,
   ImageCaption,
   ResponsiveImage,
} from '../../../components/common/SharedStyles'
import styled from 'styled-components'

export function ProductCertPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: certificationRef, inView: certificationInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: processRef, inView: processInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: benefitsRef, inView: benefitsInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   return (
      <PageWrapper>
         {/* Hero Section - 현대적 디자인 */}
         <ModernHeroSection ref={heroRef} bgImage={getImageUrl('hero', 'product.jpg')}>
            <HeroBackground radialGradient="radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)" />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={slideInLeft}>
                  <HeroBadge>
                     <FaCertificate />
                     <span>제품 인증</span>
                  </HeroBadge>
                  <HeroTitle>
                     KHAMA 협회에서 인증하는
                     <br />
                     <GradientText>우수 제품 정보</GradientText>
                  </HeroTitle>
                  <HeroSubtitle>Product Certification</HeroSubtitle>
                  <HeroDescription>신뢰할 수 있는 제품 선택 기준을 제공하고, 기업에게는 기술 개발 동기를 부여합니다</HeroDescription>
               </motion.div>
               <HeroImageContainer>
                  <HeroImagePlaceholder>
                     <FaCertificate size={80} />
                     <FaAward size={60} />
                     <FaShieldAlt size={70} />
                     <p>제품 인증</p>
                  </HeroImagePlaceholder>
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         {/* 인증 제품 정보 섹션 */}
         <CertificationInfoSection ref={certificationRef}>
            <Container>
               <motion.div initial="hidden" animate={certificationInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>친환경 인증 제품</SectionTitle>
                     <SectionSubtitle>친환경 인증 기준 합격 인증사유 : 유해물질 감소</SectionSubtitle>
                  </SectionHeader>

                  <CertificationGrid>
                     <CertificationCard variants={fadeInScale}>
                        <CertificationImageContainer>
                           <CertificationIcon>
                              <FaFlask />
                           </CertificationIcon>
                        </CertificationImageContainer>
                        <CertificationContent>
                           <CertificationTitle>친환경 인증 제품</CertificationTitle>
                           <CertificationDescription>
                              친환경 인증 기준 합격
                              <br />
                              인증사유 : 유해물질 감소
                           </CertificationDescription>
                        </CertificationContent>
                     </CertificationCard>

                     <CertificationCard variants={fadeInScale}>
                        <CertificationImageContainer>
                           <CertificationIcon>
                              <FaIndustry />
                           </CertificationIcon>
                        </CertificationImageContainer>
                        <CertificationContent>
                           <CertificationTitle>엄선된 원료</CertificationTitle>
                           <CertificationDescription>
                              인성업, 가성소다 비함유
                              <br />
                              가습기살균제 성분 CMIT,MIT 불검출
                              <br />
                              OIT,BIT,에칠렌글리콜,포름알데히드 불검출
                           </CertificationDescription>
                        </CertificationContent>
                     </CertificationCard>
                  </CertificationGrid>

                  <PublicTestingSection variants={fadeInScale}>
                     <PublicTestingTitle>공인기관 시험</PublicTestingTitle>
                     <PublicTestingDescription>
                        안전기준 적합확인을 위한 공인기관 시험 완료
                        <br />
                        세척력 시험 완료
                        <br />
                        생분해도 검사 완료
                     </PublicTestingDescription>
                  </PublicTestingSection>
               </motion.div>
            </Container>
         </CertificationInfoSection>

         {/* 인증 프로세스 섹션 */}
         <ProcessSection ref={processRef}>
            <Container>
               <motion.div initial="hidden" animate={processInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>인증 프로세스</SectionTitle>
                     <SectionSubtitle>체계적이고 투명한 5단계 인증 과정</SectionSubtitle>
                  </SectionHeader>

                  <ProcessGrid>
                     <ProcessCard variants={fadeInScale}>
                        <ProcessNumber>1</ProcessNumber>
                        <ProcessTitle>신청 접수</ProcessTitle>
                        <ProcessDescription>인증 신청서 제출 및 기본 서류 검토</ProcessDescription>
                     </ProcessCard>

                     <ProcessCard variants={fadeInScale}>
                        <ProcessNumber>2</ProcessNumber>
                        <ProcessTitle>서류 심사</ProcessTitle>
                        <ProcessDescription>제품 사양서, 시험성적서 등 관련 서류 심사</ProcessDescription>
                     </ProcessCard>

                     <ProcessCard variants={fadeInScale}>
                        <ProcessNumber>3</ProcessNumber>
                        <ProcessTitle>제품 시험</ProcessTitle>
                        <ProcessDescription>공인기관을 통한 성능, 안전성 시험 실시</ProcessDescription>
                     </ProcessCard>

                     <ProcessCard variants={fadeInScale}>
                        <ProcessNumber>4</ProcessNumber>
                        <ProcessTitle>공장 심사</ProcessTitle>
                        <ProcessDescription>생산 시설 및 품질관리 시스템 현장 심사</ProcessDescription>
                     </ProcessCard>

                     <ProcessCard variants={fadeInScale}>
                        <ProcessNumber>5</ProcessNumber>
                        <ProcessTitle>인증 심의 및 발급</ProcessTitle>
                        <ProcessDescription>최종 심의를 통한 인증서 발급 및 마크 사용 승인</ProcessDescription>
                     </ProcessCard>
                  </ProcessGrid>
               </motion.div>
            </Container>
         </ProcessSection>

         {/* 인증 혜택 섹션 */}
         <BenefitsSection ref={benefitsRef}>
            <Container>
               <motion.div initial="hidden" animate={benefitsInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>인증 혜택</SectionTitle>
                     <SectionSubtitle>KHAMA 인증 마크 획득 시 다양한 혜택을 제공합니다</SectionSubtitle>
                  </SectionHeader>

                  <BenefitsGrid>
                     <Card variants={fadeInScale}>
                        <CardIcon primary>
                           <FaCertificate />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>인증 마크 사용 권한</CardTitle>
                           <CardDescription>제품, 포장, 홍보물 등에 협회 인증 마크 사용 권한 부여</CardDescription>
                        </CardContent>
                     </Card>

                     <Card variants={fadeInScale}>
                        <CardIcon secondary>
                           <FaShieldAlt />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>브랜드 신뢰도 향상</CardTitle>
                           <CardDescription>소비자 신뢰도 및 브랜드 이미지 제고를 통한 경쟁력 강화</CardDescription>
                        </CardContent>
                     </Card>

                     <Card variants={fadeInScale}>
                        <CardIcon accent>
                           <FaUsers />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>마케팅 지원</CardTitle>
                           <CardDescription>협회 주관 홍보 및 마케팅 활동 지원 연계</CardDescription>
                        </CardContent>
                     </Card>

                     <Card variants={fadeInScale}>
                        <CardIcon primary>
                           <FaAward />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>조달 시장 우대</CardTitle>
                           <CardDescription>공공기관 납품 또는 조달 시장 참여 시 가산점 부여 (추진 중)</CardDescription>
                        </CardContent>
                     </Card>
                  </BenefitsGrid>

                  <CertificationBadgeSection variants={fadeInScale}>
                     <CertificationBadgeTitle>안전한 친환경 세제를 사용한 세척 서비스</CertificationBadgeTitle>
                     <CertificationBadges>
                        <CertificationBadge>
                           <FaLeaf />
                           <span>한국냉동공조협회 공인 약품</span>
                        </CertificationBadge>
                        <CertificationBadge>
                           <FaShieldAlt />
                           <span>환경부 친환경 인증 약품</span>
                        </CertificationBadge>
                        <CertificationBadge>
                           <FaCheckCircle />
                           <span>부식 발생이 적은 약품</span>
                        </CertificationBadge>
                     </CertificationBadges>
                     <CertificationBadgeDescription>고객뿐만 아니라 작업자의 안전까지 생각한 엄선된 원료의 친환경 세제만을 사용하므로 모두가 안심할 수 있습니다.</CertificationBadgeDescription>
                  </CertificationBadgeSection>
               </motion.div>
            </Container>
         </BenefitsSection>

         {/* 인증 제품 갤러리 섹션 */}
         <Section>
            <Container>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>KHAMA 인증 제품 갤러리</SectionTitle>
                     <SectionSubtitle>협회에서 인증한 우수 제품들과 인증 과정을 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <ImageGallery>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('products', 'certification'), '인증 제품 샘플', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>KHAMA 인증 제품</h4>
                           <p>협회 인증 마크를 획득한 우수 제품들</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'practical'), '제품 시험 과정', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>제품 시험 과정</h4>
                           <p>공인기관을 통한 철저한 성능 및 안전성 시험</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('association', 'event'), '인증서 수여식', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>인증서 수여식</h4>
                           <p>엄격한 심사를 통과한 제품에 대한 인증서 수여</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                  </ImageGallery>
               </motion.div>
            </Container>
         </Section>

         {/* 인증 기준 및 표준 섹션 */}
         <CertificationStandardsSection>
            <Container>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>인증 기준 및 표준</SectionTitle>
                     <SectionSubtitle>KHAMA가 제시하는 엄격한 인증 기준과 품질 표준을 소개합니다</SectionSubtitle>
                  </SectionHeader>

                  <CertificationStandardsContent>
                     <StandardsTextCard as={motion.div} variants={fadeInScale}>
                        <StandardsTitle>품질 인증 기준</StandardsTitle>
                        <StandardsList>
                           <StandardsItem>
                              <StandardsItemIcon>
                                 <FaShieldAlt />
                              </StandardsItemIcon>
                              <div>
                                 <h4>안전성 검증</h4>
                                 <p>사용자 안전을 위한 철저한 안전성 시험 및 검증</p>
                              </div>
                           </StandardsItem>
                           <StandardsItem>
                              <StandardsItemIcon>
                                 <FaLeaf />
                              </StandardsItemIcon>
                              <div>
                                 <h4>환경 친화성</h4>
                                 <p>친환경 소재 사용 및 환경 영향 최소화 확인</p>
                              </div>
                           </StandardsItem>
                           <StandardsItem>
                              <StandardsItemIcon>
                                 <FaAward />
                              </StandardsItemIcon>
                              <div>
                                 <h4>성능 우수성</h4>
                                 <p>동급 제품 대비 뛰어난 성능과 내구성 입증</p>
                              </div>
                           </StandardsItem>
                        </StandardsList>
                     </StandardsTextCard>

                     <StandardsImageCard as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('association', 'building'), '인증 심사 센터', [{ width: 500 }, { width: 800 }])} />
                        <StandardsImageCaption>
                           <h4>KHAMA 인증 센터</h4>
                           <p>체계적이고 공정한 제품 인증을 위한 전문 시설</p>
                        </StandardsImageCaption>
                     </StandardsImageCard>
                  </CertificationStandardsContent>
               </motion.div>
            </Container>
         </CertificationStandardsSection>
      </PageWrapper>
   )
}

// 제품 인증 페이지 전용 스타일 컴포넌트
const CertificationInfoSection = styled.section`
   padding: 6rem 0;
   background: white;
`

const CertificationGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
   gap: 3rem;
   margin-bottom: 4rem;
`

const CertificationCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 2.5rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
   text-align: center;
`

const CertificationImageContainer = styled.div`
   margin-bottom: 2rem;
`

const CertificationIcon = styled.div`
   width: 100px;
   height: 100px;
   border-radius: 50%;
   background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 2.5rem;
   color: white;
   margin: 0 auto;
`

const CertificationContent = styled.div``

const CertificationTitle = styled.h3`
   font-size: 1.5rem;
   font-weight: 700;
   color: #1e293b;
   margin-bottom: 1rem;
`

const CertificationDescription = styled.p`
   color: #64748b;
   line-height: 1.6;
`

const PublicTestingSection = styled(motion.div)`
   background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
   border-radius: 20px;
   padding: 3rem;
   text-align: center;
   border: 2px solid #10b981;
`

const PublicTestingTitle = styled.h3`
   font-size: 1.75rem;
   font-weight: 700;
   color: #065f46;
   margin-bottom: 1.5rem;
`

const PublicTestingDescription = styled.p`
   color: #047857;
   line-height: 1.7;
   font-size: 1.1rem;
`

const ProcessSection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
`

const ProcessGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 2rem;
`

const ProcessCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 2.5rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
   text-align: center;
   position: relative;
   overflow: hidden;

   &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
   }
`

const ProcessNumber = styled.div`
   width: 60px;
   height: 60px;
   border-radius: 50%;
   background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   font-weight: 700;
   color: white;
   margin: 0 auto 1.5rem;
`

const ProcessTitle = styled.h3`
   font-size: 1.25rem;
   font-weight: 700;
   color: #1e293b;
   margin-bottom: 1rem;
`

const ProcessDescription = styled.p`
   color: #64748b;
   line-height: 1.6;
`

const BenefitsSection = styled.section`
   padding: 6rem 0;
   background: white;
`

const BenefitsGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 2rem;
   margin-bottom: 4rem;
`

const CertificationBadgeSection = styled(motion.div)`
   background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
   border-radius: 20px;
   padding: 3rem;
   text-align: center;
   border: 1px solid #10b981;
`

const CertificationBadgeTitle = styled.h3`
   font-size: 1.5rem;
   font-weight: 700;
   color: #065f46;
   margin-bottom: 2rem;
`

const CertificationBadges = styled.div`
   display: flex;
   justify-content: center;
   gap: 1.5rem;
   margin-bottom: 2rem;
   flex-wrap: wrap;
`

const CertificationBadge = styled.div`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   padding: 1rem 1.5rem;
   background: linear-gradient(135deg, #10b981 0%, #059669 100%);
   color: white;
   border-radius: 25px;
   font-weight: 600;
   font-size: 0.9rem;
`

const CertificationBadgeDescription = styled.p`
   color: #047857;
   line-height: 1.7;
   font-size: 1.1rem;
   max-width: 600px;
   margin: 0 auto;
`

// 인증 기준 및 표준 섹션 스타일
const CertificationStandardsSection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
`

const CertificationStandardsContent = styled.div`
   display: grid;
   grid-template-columns: 1.5fr 1fr;
   gap: 3rem;
   align-items: start;

   @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
   }
`

const StandardsTextCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 3rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid rgba(59, 130, 246, 0.2);
`

const StandardsTitle = styled.h3`
   font-size: 1.75rem;
   font-weight: 700;
   color: #1e40af;
   margin-bottom: 2rem;
   text-align: center;
`

const StandardsList = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;
`

const StandardsItem = styled.div`
   display: flex;
   align-items: flex-start;
   gap: 1rem;

   h4 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.5rem;
   }

   p {
      color: #6b7280;
      line-height: 1.6;
   }
`

const StandardsItemIcon = styled.div`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
   font-size: 1.25rem;
   flex-shrink: 0;
   margin-top: 0.25rem;
`

const StandardsImageCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   overflow: hidden;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid rgba(59, 130, 246, 0.2);
`

const StandardsImageCaption = styled.div`
   padding: 2rem;
   text-align: center;

   h4 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.5rem;
   }

   p {
      color: #6b7280;
      line-height: 1.6;
   }
`
