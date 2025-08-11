import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { FaUser, FaHandshake, FaHeart, FaShieldAlt, FaUsers, FaLightbulb } from 'react-icons/fa'
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
   PersonCard,
   PersonImage,
   PersonName,
   PersonRole,
   PersonDescription,
   HeroImageSection,
   Section,
   Grid,
   ImageGallery,
   ImageGalleryItem,
   ImageCaption,
   ResponsiveImage,
} from '../../../components/common/SharedStyles'
import styled from 'styled-components'

export function GreetingPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: greetingRef, inView: greetingInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   return (
      <PageWrapper>
         {/* Hero Section - 현대적 디자인 */}
         <ModernHeroSection ref={heroRef} bgImage={getImageUrl('association', 'president.jpg')}>
            <HeroBackground radialGradient="radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)" />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={slideInLeft}>
                  <HeroBadge>
                     <FaHandshake />
                     <span>회장 인사말</span>
                  </HeroBadge>
                  <HeroTitle>
                     한국생활가전유지관리협회
                     <br />
                     <GradientText>방문을 환영합니다</GradientText>
                  </HeroTitle>
                  <HeroSubtitle>Korea Household Appliances Maintenance Association</HeroSubtitle>
                  <HeroDescription>생활가전 유지보수 분야의 기술 표준을 정립하고, 전문 인력 양성을 통해 국민의 안전과 편익 증진에 기여합니다</HeroDescription>
               </motion.div>
               <HeroImageContainer>
                  <HeroImagePlaceholder>
                     <FaUser size={80} />
                     <FaHandshake size={60} />
                     <FaHeart size={70} />
                     <p>회장 인사말</p>
                  </HeroImagePlaceholder>
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         {/* 회장 인사말 섹션 */}
         <GreetingSection ref={greetingRef}>
            <Container>
               <motion.div initial="hidden" animate={greetingInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>회장 인사말</SectionTitle>
                     <SectionSubtitle>한국생활가전유지관리협회 회장의 인사말씀을 전해드립니다</SectionSubtitle>
                  </SectionHeader>

                  <GreetingContent>
                     <PersonCard as={motion.div} variants={fadeInScale}>
                        <PersonImage src={getImageUrl('association', 'president')} alt="KHAMA 협회장" onError={handleImageError} {...getLazyLoadingProps()} />
                        <PersonName>김윤채</PersonName>
                        <PersonRole>한국생활가전유지관리협회 회장</PersonRole>
                        <PersonDescription>생활가전 산업 발전과 전문 인력 양성을 통해 국민의 안전과 편익 증진에 기여</PersonDescription>
                     </PersonCard>

                     <GreetingMessageCard variants={fadeInScale}>
                        <GreetingMessage>
                           <MessageParagraph>안녕하십니까, 한국생활가전유지관리협회 회장 김윤채입니다.</MessageParagraph>
                           <MessageParagraph>급변하는 기술 환경 속에서 생활가전 제품은 우리 삶의 필수적인 부분이 되었습니다. 이러한 가전제품을 안전하고 효율적으로 유지 관리하는 전문가의 역할은 그 어느 때보다 중요해지고 있습니다.</MessageParagraph>
                           <MessageParagraph>우리 협회는 생활가전 유지보수 분야의 기술 표준을 정립하고, 전문 인력 양성을 통해 국민의 안전과 편익 증진에 기여하고자 설립되었습니다. 또한, 관련 산업의 건전한 발전과 회원 상호 간의 교류 협력을 도모하고 있습니다.</MessageParagraph>
                           <MessageParagraph>앞으로도 협회는 투명하고 공정한 운영을 바탕으로 회원 여러분의 권익 보호와 전문성 향상을 위해 최선을 다할 것을 약속드립니다. 많은 관심과 참여 부탁드립니다.</MessageParagraph>
                           <MessageParagraph>감사합니다.</MessageParagraph>
                        </GreetingMessage>
                        <Signature>한국생활가전유지관리협회 회장 김윤채 드림</Signature>
                     </GreetingMessageCard>
                  </GreetingContent>
               </motion.div>
            </Container>
         </GreetingSection>

         {/* 협회 가치 섹션 */}
         <ValuesSection ref={valuesRef}>
            <Container>
               <motion.div initial="hidden" animate={valuesInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>협회의 핵심 가치</SectionTitle>
                     <SectionSubtitle>우리가 추구하는 가치와 비전을 소개합니다</SectionSubtitle>
                  </SectionHeader>

                  <ValuesGrid>
                     <Card variants={fadeInScale}>
                        <CardIcon primary>
                           <FaShieldAlt />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>안전</CardTitle>
                           <CardDescription>국민의 안전한 생활환경 조성을 위해 최고 수준의 기술 표준을 제공합니다</CardDescription>
                        </CardContent>
                     </Card>

                     <Card variants={fadeInScale}>
                        <CardIcon secondary>
                           <FaUsers />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>전문성</CardTitle>
                           <CardDescription>체계적인 교육과 자격 인증을 통해 전문가를 양성합니다</CardDescription>
                        </CardContent>
                     </Card>

                     <Card variants={fadeInScale}>
                        <CardIcon accent>
                           <FaLightbulb />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>혁신</CardTitle>
                           <CardDescription>지속적인 기술 개발과 표준화를 통해 산업 발전을 선도합니다</CardDescription>
                        </CardContent>
                     </Card>
                  </ValuesGrid>
               </motion.div>
            </Container>
         </ValuesSection>

         {/* 협회 활동 이미지 갤러리 */}
         <Section>
            <Container>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>협회 주요 활동</SectionTitle>
                     <SectionSubtitle>KHAMA의 다양한 활동과 성과를 통해 협회의 비전을 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <ImageGallery>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('association', 'meeting'), '협회 정기 회의', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>정기 이사회</h4>
                           <p>투명하고 민주적인 의사결정을 통한 협회 운영</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('association', 'event'), '협회 행사', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>협회 행사</h4>
                           <p>회원들과 함께하는 소통과 화합의 시간</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem as={motion.div} variants={fadeInScale}>
                        <ResponsiveImage {...getOptimizedImageProps(getImageUrl('association', 'building'), '협회 건물', [{ width: 400 }, { width: 800 }])} />
                        <ImageCaption>
                           <h4>협회 본부</h4>
                           <p>전문적이고 체계적인 업무 환경</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                  </ImageGallery>
               </motion.div>
            </Container>
         </Section>
      </PageWrapper>
   )
}

// 인사말 페이지 전용 스타일 컴포넌트
const GreetingSection = styled.section`
   padding: 6rem 0;
   background: white;
`

const GreetingContent = styled.div`
   display: grid;
   grid-template-columns: 1fr 2fr;
   gap: 4rem;
   align-items: start;

   @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
   }
`

const PresidentImageCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 2.5rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
   text-align: center;
   position: sticky;
   top: 2rem;
`

const PresidentImage = styled.div`
   width: 150px;
   height: 150px;
   border-radius: 50%;
   background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 3rem;
   color: white;
   margin: 0 auto 1.5rem;
   box-shadow: 0 10px 30px rgba(30, 64, 175, 0.3);
`

const PresidentName = styled.h3`
   font-size: 1.5rem;
   font-weight: 700;
   color: #1e293b;
   margin-bottom: 0.5rem;
`

const PresidentTitle = styled.p`
   color: #64748b;
   font-size: 1rem;
   font-weight: 500;
`

const GreetingMessageCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 3rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
`

const GreetingMessage = styled.div`
   margin-bottom: 2rem;
`

const MessageParagraph = styled.p`
   font-size: 1.1rem;
   line-height: 1.8;
   color: #374151;
   margin-bottom: 1.5rem;
   text-align: justify;

   &:first-child {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1e40af;
   }
`

const Signature = styled.div`
   text-align: right;
   font-size: 1.1rem;
   font-weight: 600;
   color: #1e40af;
   padding-top: 2rem;
   border-top: 2px solid #e2e8f0;
`

const ValuesSection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`

const ValuesGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 2rem;
`
