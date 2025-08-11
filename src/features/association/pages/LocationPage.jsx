import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { FaMapMarkerAlt, FaPhone, FaFax, FaEnvelope, FaCar, FaBus, FaSubway, FaClock, FaBuilding } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import { getImageUrl } from '../../../utils/imageHelpers'
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
} from '../../../components/common/SharedStyles'
import styled from 'styled-components'

export function LocationPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: locationRef, inView: locationInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: transportRef, inView: transportInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   return (
      <PageWrapper>
         {/* Hero Section - 현대적 디자인 */}
         <ModernHeroSection ref={heroRef} bgImage={getImageUrl('association', 'building.jpg')}>
            <HeroBackground radialGradient="radial-gradient(circle at 20% 80%, rgba(239, 68, 68, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)" />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={slideInLeft}>
                  <HeroBadge>
                     <FaMapMarkerAlt />
                     <span>오시는 길</span>
                  </HeroBadge>
                  <HeroTitle>
                     한국생활가전유지관리협회
                     <br />
                     <GradientText>본원 위치 안내</GradientText>
                  </HeroTitle>
                  <HeroSubtitle>Location Guide</HeroSubtitle>
                  <HeroDescription>인천광역시 서구 청라국제도시에 위치한 협회 본원에 오시는 길을 안내해 드립니다</HeroDescription>
               </motion.div>
               <HeroImageContainer>
                  <HeroImagePlaceholder>
                     <FaMapMarkerAlt size={80} />
                     <FaBuilding size={60} />
                     <FaCar size={70} />
                     <p>위치 안내</p>
                  </HeroImagePlaceholder>
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         {/* 협회 위치 안내 섹션 */}
         <LocationSection ref={locationRef}>
            <Container>
               <motion.div initial="hidden" animate={locationInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>협회 위치 안내</SectionTitle>
                     <SectionSubtitle>한국생활가전유지관리협회 본원의 상세 위치 정보를 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <LocationContent>
                     <MapCard variants={fadeInScale}>
                        <MapContainer>
                           <Map
                              center={{ lat: 37.540705, lng: 126.6715 }}
                              style={{ width: "100%", height: "400px" }}
                              level={3}
                           >
                              <MapMarker
                                 position={{ lat: 37.540705, lng: 126.6715 }}
                                 title="한국생활가전유지관리협회"
                              >
                                 <div style={{ 
                                    minWidth: '150px', 
                                    textAlign: 'center',
                                    padding: '10px',
                                    backgroundColor: 'white',
                                    borderRadius: '8px',
                                    border: '2px solid #dc2626',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    color: '#1e293b'
                                 }}>
                                    한국생활가전유지관리협회
                                    <br />
                                    인천 서구 청라한내로72번길 13
                                 </div>
                              </MapMarker>
                           </Map>
                        </MapContainer>
                     </MapCard>

                     <InfoCard variants={fadeInScale}>
                        <ContactInfo>
                           <ContactItem>
                              <ContactIcon>
                                 <FaMapMarkerAlt />
                              </ContactIcon>
                              <ContactDetails>
                                 <ContactLabel>주소</ContactLabel>
                                 <ContactValue>인천광역시 서구 청라한내로72번길 13 (청라동) 203호</ContactValue>
                                 <ContactSubValue>청라 큐브시그니처 2차 오피스텔</ContactSubValue>
                              </ContactDetails>
                           </ContactItem>

                           <ContactItem>
                              <ContactIcon>
                                 <FaPhone />
                              </ContactIcon>
                              <ContactDetails>
                                 <ContactLabel>대표번호</ContactLabel>
                                 <ContactValue>1566-3321</ContactValue>
                              </ContactDetails>
                           </ContactItem>

                           <ContactItem>
                              <ContactIcon>
                                 <FaFax />
                              </ContactIcon>
                              <ContactDetails>
                                 <ContactLabel>팩스</ContactLabel>
                                 <ContactValue>070-4727-8646</ContactValue>
                              </ContactDetails>
                           </ContactItem>

                           <ContactItem>
                              <ContactIcon>
                                 <FaEnvelope />
                              </ContactIcon>
                              <ContactDetails>
                                 <ContactLabel>이메일</ContactLabel>
                                 <ContactValue>haan@hanallcompany.com</ContactValue>
                              </ContactDetails>
                           </ContactItem>

                           <ContactItem>
                              <ContactIcon>
                                 <FaClock />
                              </ContactIcon>
                              <ContactDetails>
                                 <ContactLabel>운영시간</ContactLabel>
                                 <ContactValue>평일 09:00 - 18:00</ContactValue>
                                 <ContactSubValue>토요일, 일요일, 공휴일 휴무</ContactSubValue>
                              </ContactDetails>
                           </ContactItem>
                        </ContactInfo>
                     </InfoCard>
                  </LocationContent>
               </motion.div>
            </Container>
         </LocationSection>

         {/* 교통 안내 섹션 */}
         <TransportSection ref={transportRef}>
            <Container>
               <motion.div initial="hidden" animate={transportInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>교통 안내</SectionTitle>
                     <SectionSubtitle>다양한 교통수단을 이용하여 협회에 방문하실 수 있습니다</SectionSubtitle>
                  </SectionHeader>

                  <TransportGrid>
                     <Card variants={fadeInScale}>
                        <CardIcon primary>
                           <FaCar />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>자가용 이용</CardTitle>
                           <CardDescription>
                              <TransportDetail>
                                 <strong>주차 안내:</strong> 건물 내 지하주차장 이용 가능 (무료)
                              </TransportDetail>
                              <TransportDetail>
                                 <strong>네비게이션:</strong> "청라 큐브시그니처 2차" 검색
                              </TransportDetail>
                              <TransportDetail>방문 시 안내데스크에 협회 방문 목적을 말씀해 주세요</TransportDetail>
                           </CardDescription>
                        </CardContent>
                     </Card>

                     <Card variants={fadeInScale}>
                        <CardIcon secondary>
                           <FaSubway />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>지하철 이용</CardTitle>
                           <CardDescription>
                              <TransportDetail>
                                 <strong>인천지하철 2호선:</strong> 청라국제도시역 하차
                              </TransportDetail>
                              <TransportDetail>
                                 <strong>도보:</strong> 청라국제도시역에서 약 10분
                              </TransportDetail>
                              <TransportDetail>1번 출구 이용 → 청라한내로 방향</TransportDetail>
                           </CardDescription>
                        </CardContent>
                     </Card>

                     <Card variants={fadeInScale}>
                        <CardIcon accent>
                           <FaBus />
                        </CardIcon>
                        <CardContent>
                           <CardTitle>버스 이용</CardTitle>
                           <CardDescription>
                              <TransportDetail>
                                 <strong>간선버스:</strong> 111, 112번
                              </TransportDetail>
                              <TransportDetail>
                                 <strong>지선버스:</strong> 903번
                              </TransportDetail>
                              <TransportDetail>청라국제도시 정류장 하차 후 도보 5분</TransportDetail>
                           </CardDescription>
                        </CardContent>
                     </Card>
                  </TransportGrid>
               </motion.div>
            </Container>
         </TransportSection>
      </PageWrapper>
   )
}

// 오시는 길 페이지 전용 스타일 컴포넌트
const LocationSection = styled.section`
   padding: 6rem 0;
   background: white;
`

const LocationContent = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 3rem;

   @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
   }
`

const MapCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 2rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
`

const MapContainer = styled.div`
   width: 100%;
   height: 400px;
   border-radius: 15px;
   overflow: hidden;
`


const InfoCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 2rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
`

const ContactInfo = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
`

const ContactItem = styled.div`
   display: flex;
   align-items: flex-start;
   gap: 1rem;
   padding: 1.5rem;
   background: #f8fafc;
   border-radius: 15px;
   border: 1px solid #e2e8f0;
`

const ContactIcon = styled.div`
   width: 50px;
   height: 50px;
   border-radius: 12px;
   background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
   font-size: 1.2rem;
   flex-shrink: 0;
`

const ContactDetails = styled.div`
   flex: 1;
`

const ContactLabel = styled.div`
   font-size: 0.9rem;
   font-weight: 600;
   color: #64748b;
   margin-bottom: 0.25rem;
`

const ContactValue = styled.div`
   font-size: 1.1rem;
   font-weight: 600;
   color: #1e293b;
   margin-bottom: 0.25rem;
`

const ContactSubValue = styled.div`
   font-size: 0.9rem;
   color: #64748b;
`

const TransportSection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`

const TransportGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   gap: 2rem;
`

const TransportDetail = styled.div`
   margin-bottom: 0.75rem;
   line-height: 1.6;

   &:last-child {
      margin-bottom: 0;
   }

   strong {
      color: #1e293b;
      font-weight: 600;
   }
`
