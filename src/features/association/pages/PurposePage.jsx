import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { FaBullseye, FaEye, FaCogs, FaGraduationCap, FaIndustry, FaShieldAlt, FaBalanceScale, FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { getImageUrl, getOptimizedImageProps, handleImageError, getLazyLoadingProps } from '../../../utils/imageHelpers'
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

export function PurposePage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: purposeRef, inView: purposeInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   return (
      <PageWrapper>
         {/* Hero Section - 현대적 디자인 */}
         <ModernHeroSection ref={heroRef} bgImage={getImageUrl('association', 'meeting.jpg')}>
            <HeroBackground radialGradient="radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)" />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={slideInLeft}>
                  <HeroBadge>
                     <FaBullseye />
                     <span>설립목적</span>
                  </HeroBadge>
                  <HeroTitle>
                     생활가전 유지보수 산업의
                     <br />
                     <GradientText>발전과 국민 편익 증진</GradientText>
                  </HeroTitle>
                  <HeroSubtitle>Mission & Vision of KHAMA</HeroSubtitle>
                  <HeroDescription>기술 표준화와 전문가 양성을 통해 안전하고 편리한 국민 생활 환경 조성에 기여합니다</HeroDescription>
               </motion.div>
               <HeroImageContainer>
                  <HeroImagePlaceholder>
                     <FaBullseye size={80} />
                     <FaEye size={60} />
                     <FaLightbulb size={70} />
                     <p>미션 & 비전</p>
                  </HeroImagePlaceholder>
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         {/* 미션과 비전 섹션 */}
         <MissionVisionSection ref={missionRef}>
            <Container>
               <motion.div initial="hidden" animate={missionInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>우리의 미션과 비전</SectionTitle>
                     <SectionSubtitle>한국생활가전유지관리협회가 추구하는 목표와 방향성을 소개합니다</SectionSubtitle>
                  </SectionHeader>

                  <MissionVisionGrid>
                     <MissionCard variants={fadeInScale}>
                        <MissionIcon>
                           <FaBullseye />
                        </MissionIcon>
                        <MissionTitle>미션 (Mission)</MissionTitle>
                        <MissionDescription>생활가전 유지보수 기술 표준화와 전문가 양성을 통해 안전하고 편리한 국민 생활 환경 조성에 기여한다.</MissionDescription>
                     </MissionCard>

                     <VisionCard variants={fadeInScale}>
                        <VisionIcon>
                           <FaEye />
                        </VisionIcon>
                        <VisionTitle>비전 (Vision)</VisionTitle>
                        <VisionDescription>국민에게 신뢰받고, 산업 발전을 선도하는 최고의 생활가전 유지보수 전문 기관으로 도약한다.</VisionDescription>
                     </VisionCard>
                  </MissionVisionGrid>
               </motion.div>
            </Container>
         </MissionVisionSection>

         {/* 주요 설립 목적 섹션 */}
         <PurposeSection ref={purposeRef}>
            <Container>
               <motion.div initial="hidden" animate={purposeInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>주요 설립 목적</SectionTitle>
                     <SectionSubtitle>협회가 추구하는 5가지 핵심 목적을 소개합니다</SectionSubtitle>
                  </SectionHeader>

                  <PurposeGrid>
                     <Card variants={fadeInScale}>
                        <CardIcon primary>
                           <FaCogs />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>기술 표준 정립</CardTitle>
                           <CardDescription>생활가전 제품의 유지보수 기술 및 서비스 표준을 개발하고 보급하여 서비스 품질을 향상시킵니다</CardDescription>
                        </CardContent>
                     </Card>

                     <Card variants={fadeInScale}>
                        <CardIcon secondary>
                           <FaGraduationCap />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>전문 인력 양성</CardTitle>
                           <CardDescription>체계적인 교육과 공정한 자격 검정을 통해 우수한 전문 인력을 배출하고 관리합니다</CardDescription>
                        </CardContent>
                     </Card>

                     <Card variants={fadeInScale}>
                        <CardIcon accent>
                           <FaIndustry />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>산업 발전 기여</CardTitle>
                           <CardDescription>관련 기술 연구개발을 지원하고, 회원사 간 협력 및 정보 교류를 촉진하여 산업 생태계를 활성화합니다</CardDescription>
                        </CardContent>
                     </Card>

                     <Card variants={fadeInScale}>
                        <CardIcon primary>
                           <FaShieldAlt />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>소비자 권익 보호</CardTitle>
                           <CardDescription>정확한 정보 제공과 투명한 서비스 기준 마련을 통해 소비자의 알 권리를 보장하고 피해를 예방합니다</CardDescription>
                        </CardContent>
                     </Card>

                     <Card variants={fadeInScale}>
                        <CardIcon secondary>
                           <FaBalanceScale />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>정책 제안 및 협력</CardTitle>
                           <CardDescription>정부 및 유관기관과의 협력을 통해 생활가전 유지보수 관련 정책 수립 및 제도 개선에 참여합니다</CardDescription>
                        </CardContent>
                     </Card>

                     <Card variants={fadeInScale}>
                        <CardIcon accent>
                           <FaChartLine />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>지속적 발전</CardTitle>
                           <CardDescription>변화하는 기술 환경에 대응하여 지속적인 혁신과 발전을 통해 업계를 선도합니다</CardDescription>
                        </CardContent>
                     </Card>
                  </PurposeGrid>
               </motion.div>
            </Container>
         </PurposeSection>

         {/* 협회 비전 구현 이미지 갤러리 */}
         <Section>
            <Container>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>비전 구현을 위한 실천</SectionTitle>
                     <SectionSubtitle>KHAMA의 설립 목적을 실현하기 위한 구체적인 활동과 노력을 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <ImageGallery>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('association', 'meeting'), '전문가 회의', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>전문가 협의체 운영</h4>
                           <p>산업 전문가들과 함께하는 기술 표준 개발 및 정책 논의</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('education', 'classroom'), '교육 프로그램', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>전문 인력 양성 교육</h4>
                           <p>체계적인 교육 시스템을 통한 우수 전문가 배출</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('association', 'event'), '산업 발전 행사', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>산업 발전 프로그램</h4>
                           <p>회원사 간 협력과 정보 교류를 통한 생태계 활성화</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                  </ImageGallery>
               </motion.div>
            </Container>
         </Section>

         {/* 지속 가능한 발전 계획 섹션 */}
         <SustainabilitySection>
            <Container>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>지속 가능한 발전 계획</SectionTitle>
                     <SectionSubtitle>미래를 위한 KHAMA의 장기 발전 로드맵과 전략</SectionSubtitle>
                  </SectionHeader>

                  <SustainabilityContent>
                     <SustainabilityTextCard as={motion.div} variants={fadeInScale}>
                        <SustainabilityTitle>2030년까지의 발전 계획</SustainabilityTitle>
                        <SustainabilityList>
                           <SustainabilityItem>
                              <SustainabilityItemIcon><FaLightbulb /></SustainabilityItemIcon>
                              <div>
                                 <h4>기술 혁신 주도</h4>
                                 <p>AI, IoT 등 첨단 기술을 활용한 스마트 유지보수 시스템 개발</p>
                              </div>
                           </SustainabilityItem>
                           <SustainabilityItem>
                              <SustainabilityItemIcon><FaUsers /></SustainabilityItemIcon>
                              <div>
                                 <h4>전문가 네트워크 확장</h4>
                                 <p>국내외 전문기관과의 협력을 통한 글로벌 역량 강화</p>
                              </div>
                           </SustainabilityItem>
                           <SustainabilityItem>
                              <SustainabilityItemIcon><FaChartLine /></SustainabilityItemIcon>
                              <div>
                                 <h4>산업 생태계 혁신</h4>
                                 <p>디지털 전환과 지속가능한 서비스 모델 구축</p>
                              </div>
                           </SustainabilityItem>
                        </SustainabilityList>
                     </SustainabilityTextCard>
                     
                     <SustainabilityImageCard as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('association', 'building'), '협회 본부', [{ width: 500 }, { width: 800 }])} />
                        <SustainabilityImageCaption>
                           <h4>KHAMA 본부</h4>
                           <p>미래 지향적인 협회 운영을 위한 현대적 시설과 인프라</p>
                        </SustainabilityImageCaption>
                     </SustainabilityImageCard>
                  </SustainabilityContent>
               </motion.div>
            </Container>
         </SustainabilitySection>
      </PageWrapper>
   )
}

// 설립목적 페이지 전용 스타일 컴포넌트
const MissionVisionSection = styled.section`
   padding: 6rem 0;
   background: white;
`

const MissionVisionGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
   gap: 3rem;

   @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
   }
`

const MissionCard = styled(motion.div)`
   background: linear-gradient(135deg, #059669 0%, #10b981 100%);
   border-radius: 20px;
   padding: 3rem;
   text-align: center;
   color: white;
   box-shadow: 0 20px 40px rgba(5, 150, 105, 0.3);
   position: relative;
   overflow: hidden;

   &::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -50%;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
   }
`

const MissionIcon = styled.div`
   width: 80px;
   height: 80px;
   border-radius: 50%;
   background: rgba(255, 255, 255, 0.2);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 2rem;
   margin: 0 auto 1.5rem;
   backdrop-filter: blur(10px);
`

const MissionTitle = styled.h3`
   font-size: 1.75rem;
   font-weight: 700;
   margin-bottom: 1.5rem;
`

const MissionDescription = styled.p`
   font-size: 1.1rem;
   line-height: 1.7;
   opacity: 0.95;
`

const VisionCard = styled(motion.div)`
   background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
   border-radius: 20px;
   padding: 3rem;
   text-align: center;
   color: white;
   box-shadow: 0 20px 40px rgba(30, 64, 175, 0.3);
   position: relative;
   overflow: hidden;

   &::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -50%;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
   }
`

const VisionIcon = styled.div`
   width: 80px;
   height: 80px;
   border-radius: 50%;
   background: rgba(255, 255, 255, 0.2);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 2rem;
   margin: 0 auto 1.5rem;
   backdrop-filter: blur(10px);
`

const VisionTitle = styled.h3`
   font-size: 1.75rem;
   font-weight: 700;
   margin-bottom: 1.5rem;
`

const VisionDescription = styled.p`
   font-size: 1.1rem;
   line-height: 1.7;
   opacity: 0.95;
`

const PurposeSection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`

const PurposeGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   gap: 2rem;
`

// 지속가능한 발전 계획 섹션 스타일
const SustainabilitySection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
`

const SustainabilityContent = styled.div`
   display: grid;
   grid-template-columns: 1.5fr 1fr;
   gap: 3rem;
   align-items: start;

   @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
   }
`

const SustainabilityTextCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 3rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid rgba(245, 158, 11, 0.2);
`

const SustainabilityTitle = styled.h3`
   font-size: 1.75rem;
   font-weight: 700;
   color: #92400e;
   margin-bottom: 2rem;
   text-align: center;
`

const SustainabilityList = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;
`

const SustainabilityItem = styled.div`
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

const SustainabilityItemIcon = styled.div`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
   font-size: 1.25rem;
   flex-shrink: 0;
   margin-top: 0.25rem;
`

const SustainabilityImageCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   overflow: hidden;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid rgba(245, 158, 11, 0.2);
`

const SustainabilityImageCaption = styled.div`
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
