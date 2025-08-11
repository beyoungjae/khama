import { motion } from 'framer-motion'
import { FaBuilding, FaBullseye, FaMapMarkerAlt, FaHandshake, FaLightbulb, FaShieldAlt, FaGraduationCap, FaCertificate, FaUsers, FaHeart, FaPhone, FaEnvelope, FaCalendarAlt, FaChartLine, FaBalanceScale, FaCheckCircle } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { getImageUrl, handleImageError, getLazyLoadingProps } from '../../../utils/imageHelpers'
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
   HeroImageContainer,
   SectionHeader,
   SectionTitle,
   SectionSubtitle,
   CardIcon,
   CardContent,
   CardTitle,
   CardDescription,
   CardBadge,
   OverviewSection,
   OverviewGrid,
   OverviewCard,
   ImageGallery,
   ImageGalleryItem,
   ImageCaption,
   ResponsiveImage,
} from '../../../components/common/SharedStyles'
import styled from 'styled-components'

export function AssociationPage() {
   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: overviewRef, inView: overviewInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: businessRef, inView: businessInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: historyRef, inView: historyInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: operationRef, inView: operationInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: executiveRef, inView: executiveInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: financeRef, inView: financeInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   return (
      <PageWrapper>
         {/* Hero Section - 완전히 새로운 현대적 디자인 */}
         <ModernHeroSection ref={heroRef} style={{ minHeight: '100vh' }}>
            <HeroBackground />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={slideInLeft}>
                  <HeroBadge>
                     <FaShieldAlt />
                     <span>신뢰할 수 있는 전문 기관</span>
                  </HeroBadge>
                  <HeroTitle>
                     한국생활가전
                     <br />
                     <GradientText>유지관리협회</GradientText>
                  </HeroTitle>
                  <HeroSubtitle style={{ fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '2rem', maxWidth: '500px' }}>
                     생활가전 유지보수 기술의 표준화와 전문가 양성을 통해
                     <br />더 나은 생활 환경을 만들어가는 선도 기관입니다
                  </HeroSubtitle>
                  <HeroStats>
                     <StatItem>
                        <StatNumber>4</StatNumber>
                        <StatLabel>전문 자격증</StatLabel>
                     </StatItem>
                     <StatItem>
                        <StatNumber>1,500+</StatNumber>
                        <StatLabel>교육 수료생</StatLabel>
                     </StatItem>
                     <StatItem>
                        <StatNumber>2024</StatNumber>
                        <StatLabel>설립년도</StatLabel>
                     </StatItem>
                  </HeroStats>
               </motion.div>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={slideInRight}>
                  <HeroImageContainer>
                     <ResponsiveImage src={getImageUrl('association', 'building.jpg')} alt="KHAMA 협회 건물" onError={handleImageError} {...getLazyLoadingProps()} style={{ borderRadius: '20px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }} />
                  </HeroImageContainer>
               </motion.div>
            </HeroContainer>
         </ModernHeroSection>

         {/* 협회 개요 섹션 - 카드 형태로 현대적 디자인 */}
         <OverviewSection ref={overviewRef}>
            <Container>
               <motion.div initial="hidden" animate={overviewInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>협회 개요</SectionTitle>
                     <SectionSubtitle>한국생활가전유지관리협회의 기본 정보를 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <OverviewGrid>
                     <OverviewCard variants={fadeInScale}>
                        <CardIcon $primary>
                           <FaBuilding />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>협회명</CardTitle>
                           <CardDescription>
                              한국생활가전유지관리협회
                              <br />
                              <em>Korea Household Appliances Maintenance Association</em>
                           </CardDescription>
                           <CardBadge>KHAMA</CardBadge>
                        </CardContent>
                     </OverviewCard>

                     <OverviewCard variants={fadeInScale}>
                        <CardIcon $secondary>
                           <FaBullseye />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>설립 목적</CardTitle>
                           <CardDescription>생활가전제품의 세척, 감리 등 유지관리의 표준화 연구 및 교육을 통해 관련 업계의 상호 동반 성장 기회를 제공합니다.</CardDescription>
                        </CardContent>
                     </OverviewCard>

                     <OverviewCard variants={fadeInScale}>
                        <CardIcon $accent>
                           <FaMapMarkerAlt />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>소재지</CardTitle>
                           <CardDescription>
                              인천광역시 서구 청라한내로72번길 13
                              <br />
                              (청라동) 203호
                           </CardDescription>
                           <ContactInfo>
                              <ContactItem>
                                 <FaPhone />
                                 <span>1566-3321</span>
                              </ContactItem>
                              <ContactItem>
                                 <FaEnvelope />
                                 <span>haan@hanallcompany.com</span>
                              </ContactItem>
                           </ContactInfo>
                        </CardContent>
                     </OverviewCard>
                  </OverviewGrid>
               </motion.div>
            </Container>
         </OverviewSection>

         {/* 비전 & 미션 섹션 */}
         <VisionSection ref={visionRef}>
            <Container>
               <motion.div initial="hidden" animate={visionInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                  <VisionGrid>
                     <VisionCard>
                        <VisionIcon>
                           <FaLightbulb />
                        </VisionIcon>
                        <VisionTitle>비전</VisionTitle>
                        <VisionText>대한민국 최고의 생활가전 유지보수 전문가 양성 및 지원 플랫폼 구축</VisionText>
                     </VisionCard>

                     <VisionCard>
                        <VisionIcon>
                           <FaHandshake />
                        </VisionIcon>
                        <VisionTitle>미션</VisionTitle>
                        <VisionText>생활가전 유지보수 기술 향상과 산업 발전에 기여하고, 안전하고 신뢰받는 서비스 환경 조성</VisionText>
                     </VisionCard>
                  </VisionGrid>
               </motion.div>
            </Container>
         </VisionSection>

         {/* 주요 사업 섹션 */}
         <BusinessSection ref={businessRef}>
            <Container>
               <motion.div initial="hidden" animate={businessInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>주요 사업</SectionTitle>
                     <SectionSubtitle>협회의 핵심 사업 영역을 소개합니다</SectionSubtitle>
                  </SectionHeader>

                  <BusinessGrid>
                     <BusinessCard variants={fadeInScale}>
                        <BusinessIcon>
                           <FaGraduationCap />
                        </BusinessIcon>
                        <BusinessTitle>교육사업</BusinessTitle>
                        <BusinessDescription>생활가전유지관리사에 대한 창업을 돕고 올바른 시공을 할 수 있도록 도우며, 지속적으로 유지할 수 있도록 지원하는 사업</BusinessDescription>
                        <BusinessList>
                           <li>창업교육</li>
                           <li>전문가교육</li>
                           <li>신아이템교육</li>
                        </BusinessList>
                     </BusinessCard>

                     <BusinessCard variants={fadeInScale}>
                        <BusinessIcon>
                           <FaCertificate />
                        </BusinessIcon>
                        <BusinessTitle>자격증 사업</BusinessTitle>
                        <BusinessDescription>생활가전 유지보수시 일정한 교육과 자격을 갖춘 사람이 서비스를 진행하여 안전사고를 예방하고 올바른 서비스를 제공하기 위함</BusinessDescription>
                     </BusinessCard>

                     <BusinessCard variants={fadeInScale}>
                        <BusinessIcon>
                           <FaUsers />
                        </BusinessIcon>
                        <BusinessTitle>전문가 교육기관 운영</BusinessTitle>
                        <BusinessDescription>생활가전제품 유지보수 전문가 교육기관 설립 및 운영</BusinessDescription>
                     </BusinessCard>

                     <BusinessCard variants={fadeInScale}>
                        <BusinessIcon>
                           <FaHeart />
                        </BusinessIcon>
                        <BusinessTitle>사회봉사활동</BusinessTitle>
                        <BusinessDescription>취약계층 시설에 있는 생활가전 세척을 통해 위생 상태를 체크하고 유지관리하여 건강한 시설이 될 수 있도록 사회 봉사활동</BusinessDescription>
                     </BusinessCard>
                  </BusinessGrid>
               </motion.div>
            </Container>
         </BusinessSection>

         {/* 연혁 섹션 */}
         <HistorySection ref={historyRef}>
            <Container>
               <motion.div initial="hidden" animate={historyInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                  <SectionHeader>
                     <SectionTitle>주요 연혁</SectionTitle>
                     <SectionSubtitle>협회의 성장 과정을 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <Timeline>
                     <TimelineItem>
                        <TimelineIcon>
                           <FaCalendarAlt />
                        </TimelineIcon>
                        <TimelineContent>
                           <TimelineYear>2024년 11월</TimelineYear>
                           <TimelineTitle>한국생활가전유지관리협회 설립</TimelineTitle>
                           <TimelineDescription>생활가전 유지보수 산업 발전을 위한 협회 정식 설립</TimelineDescription>
                        </TimelineContent>
                     </TimelineItem>

                     <TimelineItem>
                        <TimelineIcon>
                           <FaCertificate />
                        </TimelineIcon>
                        <TimelineContent>
                           <TimelineYear>2024년 12월</TimelineYear>
                           <TimelineTitle>민간자격 등록 완료</TimelineTitle>
                           <TimelineDescription>4개 분야 민간자격 정식 등록 및 운영 규정 제정</TimelineDescription>
                           <CertificationList>
                              <li>가전제품분해청소관리사</li>
                              <li>냉난방기 세척서비스 관리사</li>
                              <li>에어컨설치 관리사</li>
                              <li>환기청정시스템 관리사</li>
                           </CertificationList>
                        </TimelineContent>
                     </TimelineItem>
                  </Timeline>
               </motion.div>
            </Container>
         </HistorySection>

         {/* 운영 원칙 섹션 */}
         <OperationSection ref={operationRef}>
            <Container>
               <motion.div initial="hidden" animate={operationInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>운영 원칙</SectionTitle>
                     <SectionSubtitle>투명하고 신뢰할 수 있는 협회 운영 원칙</SectionSubtitle>
                  </SectionHeader>

                  <OperationGrid>
                     <OperationCard variants={fadeInScale}>
                        <OperationIcon>
                           <FaChartLine />
                        </OperationIcon>
                        <OperationTitle>투명한 재정 운영</OperationTitle>
                        <OperationDescription>협회의 수익금은 회원에게 배분하지 않으며 목적사업에 재투자하거나 사업확대, 안정화를 위해 별도로 적립합니다.</OperationDescription>
                     </OperationCard>

                     <OperationCard variants={fadeInScale}>
                        <OperationIcon>
                           <FaBalanceScale />
                        </OperationIcon>
                        <OperationTitle>정기적인 감사</OperationTitle>
                        <OperationDescription>감사는 회계감사를 연 2회 이상 실시하여 협회 운영의 투명성을 보장합니다.</OperationDescription>
                     </OperationCard>

                     <OperationCard variants={fadeInScale}>
                        <OperationIcon>
                           <FaHeart />
                        </OperationIcon>
                        <OperationTitle>기부금 운영</OperationTitle>
                        <OperationDescription>협회의 목적사업을 위해 기부금, 후원금을 모금할 수 있으며, 연간 모금액 내역과 활용실적을 공개합니다.</OperationDescription>
                     </OperationCard>

                     <OperationCard variants={fadeInScale}>
                        <OperationIcon>
                           <FaCheckCircle />
                        </OperationIcon>
                        <OperationTitle>민주적 의사결정</OperationTitle>
                        <OperationDescription>이사회는 재적이사 과반수의 출석으로 개의하고 출석이사 과반수의 찬성으로 의결합니다.</OperationDescription>
                     </OperationCard>
                  </OperationGrid>
               </motion.div>
            </Container>
         </OperationSection>

         {/* 임원 직무 및 임기 섹션 */}
         <ExecutiveSection ref={executiveRef}>
            <Container>
               <motion.div initial="hidden" animate={executiveInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>임원 직무 및 임기</SectionTitle>
                     <SectionSubtitle>체계적인 임원 구성과 명확한 역할 분담</SectionSubtitle>
                  </SectionHeader>

                  <ExecutiveGrid>
                     <ExecutiveCard variants={fadeInScale}>
                        <ExecutiveTitle>이사장의 직무</ExecutiveTitle>
                        <ExecutiveList>
                           <li>협회를 대표하고 협회의 업무를 총괄</li>
                           <li>교수임명과 총회 및 이사회의 의장</li>
                           <li>이사회로부터 위임받은 사항을 처리</li>
                        </ExecutiveList>
                     </ExecutiveCard>

                     <ExecutiveCard variants={fadeInScale}>
                        <ExecutiveTitle>감사의 직무</ExecutiveTitle>
                        <ExecutiveList>
                           <li>협회의 재산 사항을 감사</li>
                           <li>총회 및 이사회의 운영과 그 업무에 관한 사항을 감사</li>
                           <li>부정 또는 부당한 점 발견 시 이사회에 시정 요구</li>
                           <li>협회의 재산 사항과 업무에 관하여 의견 진술</li>
                        </ExecutiveList>
                     </ExecutiveCard>

                     <ExecutiveCard variants={fadeInScale}>
                        <ExecutiveTitle>임원 임기</ExecutiveTitle>
                        <ExecutiveList>
                           <li>이사장, 총장, 부총장, 이사, 감사의 임기는 2년</li>
                           <li>보선에 의하여 취임한 임원의 임기는 전임자의 잔여 기간</li>
                           <li>새로운 임원의 선출은 임기만료 2개월 전까지 실시</li>
                        </ExecutiveList>
                     </ExecutiveCard>
                  </ExecutiveGrid>
               </motion.div>
            </Container>
         </ExecutiveSection>

         {/* 협회 활동 갤러리 섹션 */}
         <ActivityGallerySection>
            <Container>
               <motion.div initial="hidden" animate={financeInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>협회 활동 모습</SectionTitle>
                     <SectionSubtitle>KHAMA의 다양한 활동과 성과를 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <ImageGallery>
                     <ImageGalleryItem variants={fadeInScale}>
                        <ResponsiveImage src={getImageUrl('association', 'meeting.jpg')} alt="협회 회의 모습" onError={handleImageError} {...getLazyLoadingProps()} />
                        <ImageCaption>
                           <h4>정기 이사회</h4>
                           <p>투명하고 민주적인 의사결정 과정</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem variants={fadeInScale}>
                        <ResponsiveImage src={getImageUrl('association', 'event.jpg')} alt="협회 행사 모습" onError={handleImageError} {...getLazyLoadingProps()} />
                        <ImageCaption>
                           <h4>협회 행사</h4>
                           <p>회원들과 함께하는 소통의 시간</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                     <ImageGalleryItem variants={fadeInScale}>
                        <ResponsiveImage src={getImageUrl('association', 'president.jpg')} alt="협회장 모습" onError={handleImageError} {...getLazyLoadingProps()} />
                        <ImageCaption>
                           <h4>협회 리더십</h4>
                           <p>전문성과 경험을 바탕으로 한 지도력</p>
                        </ImageCaption>
                     </ImageGalleryItem>
                  </ImageGallery>
               </motion.div>
            </Container>
         </ActivityGallerySection>

         {/* 회계 및 재산 관리 섹션 */}
         <FinanceSection ref={financeRef}>
            <Container>
               <motion.div initial="hidden" animate={financeInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>회계 및 재산 관리</SectionTitle>
                     <SectionSubtitle>투명하고 체계적인 재정 관리 시스템</SectionSubtitle>
                  </SectionHeader>

                  <FinanceGrid>
                     <FinanceCard variants={fadeInScale}>
                        <FinanceTitle>재산 구분</FinanceTitle>
                        <FinanceContent>
                           <FinanceItem>
                              <strong>기본재산:</strong> 협회 설립 시 설립자가 출연한 재산과 이사회에서 기본재산으로 정한 재산
                           </FinanceItem>
                           <FinanceItem>
                              <strong>운영재산:</strong> 기본재산 이외의 재산
                           </FinanceItem>
                        </FinanceContent>
                     </FinanceCard>

                     <FinanceCard variants={fadeInScale}>
                        <FinanceTitle>회계연도</FinanceTitle>
                        <FinanceContent>
                           <FinanceItem>협회의 회계연도는 정부의 회계연도를 따릅니다.</FinanceItem>
                           <FinanceItem>매 회계연도 종료 후 2월 이내에 결산서를 작성하여 이사회의 의결을 얻어야 합니다.</FinanceItem>
                        </FinanceContent>
                     </FinanceCard>

                     <FinanceCard variants={fadeInScale}>
                        <FinanceTitle>수익금 처리</FinanceTitle>
                        <FinanceContent>
                           <FinanceItem>협회의 수입금은 기부금 및 학비 및 기타의 수익으로 충당합니다.</FinanceItem>
                           <FinanceItem>수익금은 회원에게 배분하지 않으며 목적사업에 재투자하거나 사업확대, 안정화를 위해 별도로 적립할 수 있습니다.</FinanceItem>
                        </FinanceContent>
                     </FinanceCard>
                  </FinanceGrid>
               </motion.div>
            </Container>
         </FinanceSection>
      </PageWrapper>
   )
}

// 협회 소개 페이지 전용 스타일 컴포넌트들
const HeroStats = styled.div`
   display: flex;
   gap: 2rem;
   margin-top: 2rem;

   @media (max-width: 768px) {
      justify-content: center;
   }
`

const StatItem = styled.div`
   text-align: center;
`

const StatNumber = styled.div`
   font-size: 2rem;
   font-weight: 700;
   color: #fbbf24;
   margin-bottom: 0.5rem;
`

const StatLabel = styled.div`
   font-size: 0.9rem;
   color: rgba(255, 255, 255, 0.8);
`

const ContactInfo = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
   margin-top: 1rem;
`

const ContactItem = styled.div`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   color: #64748b;
   font-size: 0.9rem;

   svg {
      color: #3b82f6;
   }
`

const VisionGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
   gap: 3rem;
`

const VisionCard = styled.div`
   background: white;
   border-radius: 20px;
   padding: 3rem;
   text-align: center;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
   transition: all 0.3s ease;

   &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
   }
`

const VisionIcon = styled.div`
   width: 80px;
   height: 80px;
   border-radius: 20px;
   background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 2rem;
   color: white;
   margin: 0 auto 1.5rem;
`

const VisionTitle = styled.h3`
   font-size: 1.5rem;
   font-weight: 700;
   color: #1e293b;
   margin-bottom: 1rem;
`

const VisionText = styled.p`
   color: #64748b;
   line-height: 1.6;
   font-size: 1.1rem;
`

const BusinessGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 2rem;
`

const BusinessCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 2rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
   transition: all 0.3s ease;

   &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
   }
`

const BusinessIcon = styled.div`
   width: 60px;
   height: 60px;
   border-radius: 15px;
   background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   color: white;
   margin-bottom: 1.5rem;
`

const BusinessTitle = styled.h3`
   font-size: 1.25rem;
   font-weight: 600;
   color: #1e293b;
   margin-bottom: 1rem;
`

const BusinessDescription = styled.p`
   color: #64748b;
   line-height: 1.6;
   margin-bottom: 1rem;
`

const BusinessList = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;

   li {
      padding: 0.5rem 0;
      color: #64748b;
      position: relative;
      padding-left: 1.5rem;

      &:before {
         content: '•';
         color: #3b82f6;
         font-weight: bold;
         position: absolute;
         left: 0;
      }
   }
`

const Timeline = styled.div`
   position: relative;
   max-width: 800px;
   margin: 0 auto;

   &:before {
      content: '';
      position: absolute;
      left: 30px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
   }
`

const TimelineItem = styled.div`
   position: relative;
   margin-bottom: 3rem;
   padding-left: 80px;
`

const TimelineIcon = styled.div`
   position: absolute;
   left: 0;
   top: 0;
   width: 60px;
   height: 60px;
   border-radius: 15px;
   background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
   font-size: 1.2rem;
   box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
`

const TimelineContent = styled.div`
   background: white;
   border-radius: 15px;
   padding: 2rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
`

const TimelineYear = styled.div`
   font-size: 1.1rem;
   font-weight: 600;
   color: #3b82f6;
   margin-bottom: 0.5rem;
`

const TimelineTitle = styled.h3`
   font-size: 1.25rem;
   font-weight: 600;
   color: #1e293b;
   margin-bottom: 0.5rem;
`

const TimelineDescription = styled.p`
   color: #64748b;
   line-height: 1.6;
   margin-bottom: 1rem;
`

const CertificationList = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   gap: 0.5rem;

   li {
      background: #f1f5f9;
      padding: 0.5rem 1rem;
      border-radius: 10px;
      color: #475569;
      font-size: 0.9rem;
      border-left: 3px solid #3b82f6;
   }
`

const OrgStructure = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;
`

const OrgLevel = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 2rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
`

const OrgLevelTitle = styled.h3`
   font-size: 1.25rem;
   font-weight: 600;
   color: #1e293b;
   margin-bottom: 1rem;
   text-align: center;
   padding: 1rem;
   background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
   color: white;
   border-radius: 10px;
`

const OrgLevelDescription = styled.p`
   color: #64748b;
   text-align: center;
   margin-bottom: 1.5rem;
`

const OrgGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   gap: 1rem;
`

const OrgItem = styled.div`
   background: #f8fafc;
   padding: 1rem;
   border-radius: 10px;
   text-align: center;
   color: #475569;
   border-left: 3px solid #3b82f6;
`

const OperationGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 2rem;
`

const OperationCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 2rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
   transition: all 0.3s ease;

   &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
   }
`

const OperationIcon = styled.div`
   width: 60px;
   height: 60px;
   border-radius: 15px;
   background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   color: white;
   margin-bottom: 1.5rem;
`

const OperationTitle = styled.h3`
   font-size: 1.25rem;
   font-weight: 600;
   color: #1e293b;
   margin-bottom: 1rem;
`

const OperationDescription = styled.p`
   color: #64748b;
   line-height: 1.6;
`

const ExecutiveGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   gap: 2rem;
`

const ExecutiveCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 2rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
`

const ExecutiveTitle = styled.h3`
   font-size: 1.25rem;
   font-weight: 600;
   color: #1e293b;
   margin-bottom: 1.5rem;
   text-align: center;
   padding: 1rem;
   background: #f8fafc;
   border-radius: 10px;
   border-left: 4px solid #3b82f6;
`

const ExecutiveList = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;

   li {
      padding: 0.75rem;
      margin-bottom: 0.5rem;
      background: #f8fafc;
      border-radius: 8px;
      color: #475569;
      line-height: 1.6;
      border-left: 3px solid #3b82f6;
   }
`

const FinanceGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   gap: 2rem;
`

const FinanceCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 2rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
`

const FinanceTitle = styled.h3`
   font-size: 1.25rem;
   font-weight: 600;
   color: #1e293b;
   margin-bottom: 1.5rem;
   text-align: center;
   padding: 1rem;
   background: #f8fafc;
   border-radius: 10px;
   border-left: 4px solid #3b82f6;
`

const FinanceContent = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`

const FinanceItem = styled.div`
   padding: 1rem;
   background: #f8fafc;
   border-radius: 8px;
   color: #475569;
   line-height: 1.6;
   border-left: 3px solid #3b82f6;

   strong {
      color: #1e293b;
      font-weight: 600;
   }
`

const VisionSection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`

const BusinessSection = styled.section`
   padding: 6rem 0;
   background: white;
`

const HistorySection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`

const OrganizationSection = styled.section`
   padding: 6rem 0;
   background: white;
`

const OperationSection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`

const ExecutiveSection = styled.section`
   padding: 6rem 0;
   background: white;
`

const ActivityGallerySection = styled.section`
   padding: 6rem 0;
   background: white;
`

const FinanceSection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`
