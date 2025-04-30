import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Button } from '@/components/common/Button' // 필요 시

const sectionVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function ProductWelzonePage() {
   return (
      <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={sectionVariants}>
         <HeroSection>
            <HeroOverlay />
            <HeroContent>
               <h1>웰존 (WELZONE) 인증</h1>
               <p>KHAMA가 보증하는 안전하고 신뢰할 수 있는 생활가전 서비스</p>
            </HeroContent>
         </HeroSection>
         <PageContainer>
            <Section variants={sectionVariants}>
               <SectionTitle>웰존(WELZONE)이란?</SectionTitle>
               <WelzoneIntro>
                  <LogoImage src="/images/welzone-logo.png" alt="Welzone Logo" />
                  <div>
                     <p>
                        웰존(WELZONE)은 한국생활가전유지관리협회(KHAMA)가 엄격한 기준에 따라 심사하여 부여하는
                        <strong>우수 생활가전 유지보수 서비스 인증 마크</strong>입니다.
                     </p>
                     <p>소비자는 웰존 마크를 통해 믿을 수 있는 업체를 쉽게 식별하고 양질의 서비스를 제공받을 수 있으며, 인증 업체는 전문성을 인정받고 고객 신뢰도를 높일 수 있습니다.</p>
                  </div>
               </WelzoneIntro>
            </Section>

            <Section variants={sectionVariants}>
               <SectionTitle>웰존 인증 혜택</SectionTitle>
               <BenefitGrid>
                  <BenefitItem>
                     <Icon>🏅</Icon>
                     <h3>고객 신뢰도 향상</h3>
                     <p>공신력 있는 협회 인증 마크 사용으로 서비스 신뢰도 증대</p>
                  </BenefitItem>
                  <BenefitItem>
                     <Icon>📈</Icon>
                     <h3>경쟁력 강화</h3>
                     <p>타 업체와의 차별화를 통해 시장 경쟁력 확보</p>
                  </BenefitItem>
                  <BenefitItem>
                     <Icon>📢</Icon>
                     <h3>홍보 및 마케팅 지원</h3>
                     <p>협회 온/오프라인 채널을 통한 인증 업체 홍보 지원</p>
                  </BenefitItem>
                  <BenefitItem>
                     <Icon>📚</Icon>
                     <h3>기술 및 정보 교류</h3>
                     <p>최신 기술 동향 및 정보 공유, 회원사 간 네트워크 강화</p>
                  </BenefitItem>
               </BenefitGrid>
            </Section>

            <Section variants={sectionVariants}>
               <SectionTitle>인증 절차 및 기준</SectionTitle>
               <p>웰존 인증은 서류 심사, 현장 실사, 종합 평가 등 체계적인 절차를 통해 진행됩니다. 주요 평가 기준은 다음과 같습니다.</p>
               <CriteriaList>
                  <li>기술 인력 보유 현황 및 자격</li>
                  <li>서비스 표준 메뉴얼 및 절차 준수 여부</li>
                  <li>고객 만족도 및 사후 관리 시스템</li>
                  <li>안전 관리 규정 준수 및 설비 현황</li>
                  <li>[기타 평가 항목 추가 필요]</li>
               </CriteriaList>
               {/* <Button variant="outline">웰존 인증 신청 안내 (준비중)</Button> */}
               <PlaceholderText style={{ textAlign: 'center', marginTop: '1rem' }}>웰존 인증 신청에 대한 자세한 안내는 추후 공지될 예정입니다.</PlaceholderText>
            </Section>
         </PageContainer>
      </motion.div>
   )
}

// 스타일 컴포넌트
const HeroSection = styled.section`
   position: relative;
   height: 350px;
   background: url('/images/welzone-hero.jpg') no-repeat center center; /* 배경 이미지 */
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
   text-align: center;
`

const HeroOverlay = styled.div`
   position: absolute;
   inset: 0;
   background-color: rgba(40, 167, 69, 0.6); /* Success 색상 계열 오버레이 */
   z-index: 1;
`

const HeroContent = styled.div`
   position: relative;
   z-index: 2;
   max-width: 800px;
   padding: 0 ${({ theme }) => theme.spacing.lg};

   h1 {
      font-size: ${({ theme }) => theme.fontSizes.h2};
      font-weight: 700;
      margin-bottom: ${({ theme }) => theme.spacing.md};
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
   }

   p {
      font-size: ${({ theme }) => theme.fontSizes.large};
      line-height: 1.6;
      opacity: 0.9;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
   }
`

const PageContainer = styled.div`
   padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xl}`};
   max-width: 900px;
   margin: 0 auto;
`

const Section = styled(motion.section)`
   margin-bottom: ${({ theme }) => theme.spacing.xl};
   padding: ${({ theme }) => theme.spacing.xl};
   background-color: #fff;
   border-radius: ${({ theme }) => theme.borderRadius};
   border: 1px solid ${({ theme }) => theme.colors.border};
   box-shadow: ${({ theme }) => theme.boxShadow};
`

const SectionTitle = styled.h2`
   font-size: ${({ theme }) => theme.fontSizes.h3};
   font-weight: 700;
   color: ${({ theme }) => theme.colors.primary};
   margin-bottom: ${({ theme }) => theme.spacing.lg};
   text-align: center;
`

const WelzoneIntro = styled.div`
   display: flex;
   gap: ${({ theme }) => theme.spacing.lg};
   align-items: center;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      flex-direction: column;
      text-align: center;
   }

   p {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      line-height: 1.8;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-bottom: ${({ theme }) => theme.spacing.md};
      &:last-child {
         margin-bottom: 0;
      }
   }

   strong {
      color: ${({ theme }) => theme.colors.success};
   }
`

const LogoImage = styled.img`
   width: 150px;
   height: auto;
   flex-shrink: 0;
`

const BenefitGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   gap: ${({ theme }) => theme.spacing.lg};
`

const BenefitItem = styled.div`
   background-color: ${({ theme }) => theme.colors.backgroundLight};
   padding: ${({ theme }) => theme.spacing.lg};
   border-radius: ${({ theme }) => theme.borderRadius};
   text-align: center;
   border: 1px solid ${({ theme }) => theme.colors.border};

   h3 {
      font-size: ${({ theme }) => theme.fontSizes.large};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.success};
      margin-bottom: ${({ theme }) => theme.spacing.sm};
      margin-top: ${({ theme }) => theme.spacing.xs};
   }

   p {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      color: ${({ theme }) => theme.colors.textSecondary};
      line-height: 1.6;
      margin: 0;
   }
`

const Icon = styled.div`
   font-size: 2.5rem;
   margin-bottom: ${({ theme }) => theme.spacing.sm};
   color: ${({ theme }) => theme.colors.success};
`

const CriteriaList = styled.ul`
   list-style: none;
   padding: 0;
   margin: ${({ theme }) => `${theme.spacing.lg} 0`};

   li {
      background-color: #f8f9fa;
      border-left: 4px solid ${({ theme }) => theme.colors.success};
      padding: ${({ theme }) => theme.spacing.md};
      margin-bottom: ${({ theme }) => theme.spacing.sm};
      border-radius: 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0;
      color: ${({ theme }) => theme.colors.textSecondary};
   }
`

const PlaceholderText = styled.p`
   color: #aaa;
   font-style: italic;
`
