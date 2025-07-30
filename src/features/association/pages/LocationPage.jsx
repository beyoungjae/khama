import styled from 'styled-components'
import { motion } from 'framer-motion'

const sectionVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function LocationPage() {
   return (
      <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={sectionVariants}>
         <HeroSection>
            <HeroOverlay />
            <HeroContent>
               <h1>오시는 길</h1>
               <p>한국생활가전유지관리협회 본원에 오시는 길을 안내해 드립니다.</p>
            </HeroContent>
         </HeroSection>
         <PageContainer>
            <Section variants={sectionVariants}>
               <SectionTitle>협회 위치 안내</SectionTitle>
               <LocationGrid>
                  <MapPlaceholder>
                     {/* TODO: 실제 지도 컴포넌트로 교체 필요 (예: Kakao Maps) */}
                     <img src="/images/map-placeholder.png" alt="협회 위치 지도 (플레이스홀더)" />
                  </MapPlaceholder>
                  <InfoContainer>
                     <InfoItem>
                        <Icon>📍</Icon>
                        <InfoText>
                           <strong>주소</strong>
                           <p>인천 서구 청라한내로72번길 13 청라 큐브시그니처 2차 오피스텔 201호-206호</p>
                        </InfoText>
                     </InfoItem>
                     <InfoItem>
                        <Icon>📞</Icon>
                        <InfoText>
                           <strong>대표번호</strong>
                           <p>1566-3321</p>
                        </InfoText>
                     </InfoItem>
                     <InfoItem>
                        <Icon>📠</Icon>
                        <InfoText>
                           <strong>팩스</strong>
                           <p>070-4727-8646</p>
                        </InfoText>
                     </InfoItem>
                     <InfoItem>
                        <Icon>📧</Icon>
                        <InfoText>
                           <strong>이메일</strong>
                           <p>haan@hanallcompany.com</p>
                        </InfoText>
                     </InfoItem>
                  </InfoContainer>
               </LocationGrid>
            </Section>

            <Section variants={sectionVariants}>
               <SectionTitle>대중교통 이용 안내</SectionTitle>
               <TransportGrid>
                  <TransportItem>
                     <h4>주차안내</h4>
                     <p>건물 내 지하주차장 이용 가능 (무료)</p>
                     <p>방문 시 안내데스크에 문의 바랍니다.</p>
                  </TransportItem>
               </TransportGrid>
            </Section>
         </PageContainer>
      </motion.div>
   )
}

// 스타일 컴포넌트 (GreetingPage 등과 유사하게 사용)
const HeroSection = styled.section`
   position: relative;
   height: 350px;
   background: url('/images/location-hero.jpg') no-repeat center center; /* 적절한 배경 이미지 */
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
   background-color: rgba(26, 90, 150, 0.6);
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
   max-width: 1000px; /* 너비 약간 넓게 조정 */
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

const LocationGrid = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr; /* 지도와 정보 1:1 비율 */
   gap: ${({ theme }) => theme.spacing.xl};
   align-items: flex-start; /* 상단 정렬 */

   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-template-columns: 1fr;
   }
`

const MapPlaceholder = styled.div`
   width: 100%;
   height: 400px; /* 지도 높이 */
   background-color: ${({ theme }) => theme.colors.backgroundLight};
   border: 1px solid ${({ theme }) => theme.colors.border};
   border-radius: ${({ theme }) => theme.borderRadius};
   display: flex;
   justify-content: center;
   align-items: center;
   overflow: hidden;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.7;
   }
`

const InfoContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: ${({ theme }) => theme.spacing.md};
`

const InfoItem = styled.div`
   display: flex;
   align-items: flex-start;
   gap: ${({ theme }) => theme.spacing.sm};
   background-color: #f8f9fa;
   padding: ${({ theme }) => theme.spacing.md};
   border-radius: ${({ theme }) => theme.borderRadius};
`

const Icon = styled.span`
   font-size: 1.5rem;
   color: ${({ theme }) => theme.colors.primary};
   margin-top: 2px; /* 아이콘 세로 정렬 */
`

const InfoText = styled.div`
   strong {
      display: block;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: ${({ theme }) => theme.spacing.xs};
   }
   p {
      margin: 0;
      color: ${({ theme }) => theme.colors.textSecondary};
      line-height: 1.5;
   }
`

const TransportGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   gap: ${({ theme }) => theme.spacing.lg};
`

const TransportItem = styled.div`
   background-color: ${({ theme }) => theme.colors.backgroundLight};
   padding: ${({ theme }) => theme.spacing.lg};
   border-radius: ${({ theme }) => theme.borderRadius};
   border: 1px solid ${({ theme }) => theme.colors.border};

   h4 {
      font-size: ${({ theme }) => theme.fontSizes.large};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.secondary};
      margin-bottom: ${({ theme }) => theme.spacing.md};
   }

   p {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      color: ${({ theme }) => theme.colors.textSecondary};
      line-height: 1.6;
      margin-bottom: ${({ theme }) => theme.spacing.sm};
      &:last-child {
         margin-bottom: 0;
      }
   }
`
