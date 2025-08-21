import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { FaMapMarkerAlt, FaPhone, FaFax, FaEnvelope, FaCar, FaBus, FaSubway, FaClock } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import { fadeInScale, staggerContainer, PageWrapper, Container, SectionHeader, SectionTitle, SectionSubtitle, Card, CardIcon, CardContent, CardTitle, CardDescription } from '../../../components/common/SharedStyles'
import styled from 'styled-components'

export function LocationPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { ref: locationRef, inView: locationInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: transportRef, inView: transportInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   return (
      <PageWrapper>
         {/* 협회 위치 안내 섹션 (리디자인 + 구글맵 무API iFrame) */}
         <LocationSection ref={locationRef}>
            <Container>
               <motion.div initial="hidden" animate={locationInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>협회 위치 안내</SectionTitle>
                     <SectionSubtitle>한국생활가전유지관리협회 본원의 상세 위치 정보를 확인하세요</SectionSubtitle>
                  </SectionHeader>

                  <LocationContent>
                     {/* 🔎 지도 카드 (Google Maps iFrame / API 불필요) */}
                     <MapCard variants={fadeInScale}>
                        <MapHeader>
                           <div>
                              <h4>청라 큐브시그니처 2차 오피스텔 203호</h4>
                              <p>인천광역시 서구 청라한내로72번길 13 (청라동) 203호</p>
                           </div>
                           <MapCTA>
                              <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('인천광역시 서구 청라한내로72번길 13 203호')}`} target="_blank" rel="noreferrer">
                                 구글지도 길찾기
                              </a>
                              <a href={`https://map.naver.com/v5/search/${encodeURIComponent('청라 큐브시그니처 2차')}`} target="_blank" rel="noreferrer">
                                 네이버지도
                              </a>
                           </MapCTA>
                        </MapHeader>

                        <MapContainer>
                           <iframe
                              title="KHAMA 위치 (Google Maps)"
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              // output=embed 만으로 동작. 장소/좌표를 바꾸면 즉시 반영됨.
                              src={`https://www.google.com/maps?q=${encodeURIComponent('인천광역시 서구 청라한내로72번길 13 203호')}&output=embed`}
                           />
                        </MapContainer>

                        <MiniLegend>
                           <li>
                              <span className="dot car" />
                              지하주차장 무료
                           </li>
                           <li>
                              <span className="dot walk" />
                              지하철 도보 약 10분
                           </li>
                           <li>
                              <span className="dot bus" />
                              버스 정류장 도보 5분
                           </li>
                        </MiniLegend>
                     </MapCard>

                     {/* 📇 연락/운영/주소 카드 */}
                     <InfoCard variants={fadeInScale}>
                        <ContactInfo>
                           <ContactItem>
                              <ContactIcon>
                                 <FaMapMarkerAlt />
                              </ContactIcon>
                              <ContactDetails>
                                 <ContactLabel>주소</ContactLabel>
                                 <ContactValue>
                                    <Copyable onClick={() => navigator.clipboard?.writeText('인천광역시 서구 청라한내로72번길 13 (청라동) 203호')}>인천광역시 서구 청라한내로72번길 13 (청라동) 203호</Copyable>
                                 </ContactValue>
                                 <ContactSubValue>청라 큐브시그니처 2차 오피스텔 203호</ContactSubValue>
                              </ContactDetails>
                           </ContactItem>

                           <ContactItem>
                              <ContactIcon>
                                 <FaPhone />
                              </ContactIcon>
                              <ContactDetails>
                                 <ContactLabel>대표번호</ContactLabel>
                                 <ContactValue>
                                    <a href="tel:15663321">1566-3321</a>
                                 </ContactValue>
                              </ContactDetails>
                           </ContactItem>

                           <ContactItem>
                              <ContactIcon>
                                 <FaEnvelope />
                              </ContactIcon>
                              <ContactDetails>
                                 <ContactLabel>이메일</ContactLabel>
                                 <ContactValue>
                                    <a href="mailto:haan@hanallcompany.com">haan@hanallcompany.com</a>
                                 </ContactValue>
                              </ContactDetails>
                           </ContactItem>

                           <ContactItem>
                              <ContactIcon>
                                 <FaClock />
                              </ContactIcon>
                              <ContactDetails>
                                 <ContactLabel>운영시간</ContactLabel>
                                 <ContactValue>평일 09:00 – 18:00</ContactValue>
                                 <ContactSubValue>토/일/공휴일 휴무</ContactSubValue>
                              </ContactDetails>
                           </ContactItem>
                        </ContactInfo>

                        {/* 빠른 길찾기 버튼 */}
                        <QuickActions>
                           <a className="primary" href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('인천광역시 서구 청라한내로72번길 13 203호')}`} target="_blank" rel="noreferrer">
                              구글 길찾기
                           </a>
                           <a href={`https://map.kakao.com/link/search/${encodeURIComponent('청라 큐브시그니처 2차')}`} target="_blank" rel="noreferrer">
                              카카오 지도
                           </a>
                           <a href={`https://map.naver.com/v5/search/${encodeURIComponent('청라 큐브시그니처 2차')}`} target="_blank" rel="noreferrer">
                              네이버 지도
                           </a>
                        </QuickActions>
                     </InfoCard>
                  </LocationContent>
               </motion.div>
            </Container>
         </LocationSection>

         {/* 교통 안내 섹션 (타임라인형 + 강조 포인트) */}
         <TransportSection ref={transportRef}>
            <Container>
               <motion.div initial="hidden" animate={transportInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>교통 안내</SectionTitle>
                     <SectionSubtitle>다양한 교통수단으로 편리하게 방문하세요</SectionSubtitle>
                  </SectionHeader>

                  <TransportTimeline>
                     <Step>
                        <StepIcon className="car">
                           <FaCar />
                        </StepIcon>
                        <StepBody>
                           <h4>자가용</h4>
                           <ul>
                              <li>
                                 <strong>주차:</strong> 건물 지하주차장 이용 가능(무료)
                              </li>
                              <li>
                                 <strong>목적지 검색:</strong> “<em>청라 큐브시그니처 2차</em>”
                              </li>
                              <li>주차 후 안내데스크에 협회 방문 말씀 주세요</li>
                           </ul>
                        </StepBody>
                     </Step>

                     <Step>
                        <StepIcon className="subway">
                           <FaSubway />
                        </StepIcon>
                        <StepBody>
                           <h4>지하철</h4>
                           <ul>
                              <li>
                                 <strong>인천 2호선:</strong> <em>청라국제도시역</em> 하차
                              </li>
                              <li>
                                 <strong>도보:</strong> 1번 출구 → 청라한내로 방면 도보 약 10분
                              </li>
                           </ul>
                        </StepBody>
                     </Step>

                     <Step>
                        <StepIcon className="bus">
                           <FaBus />
                        </StepIcon>
                        <StepBody>
                           <h4>버스</h4>
                           <ul>
                              <li>
                                 <strong>간선:</strong> 111, 112
                              </li>
                              <li>
                                 <strong>지선:</strong> 903
                              </li>
                              <li>
                                 <strong>정류장:</strong> 청라국제도시 정류장 하차 → 도보 5분
                              </li>
                           </ul>
                        </StepBody>
                     </Step>
                  </TransportTimeline>
               </motion.div>
            </Container>
         </TransportSection>
      </PageWrapper>
   )
}

/* 지도 헤더/CTA */
const MapHeader = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 1rem;
   margin-bottom: 1rem;

   h4 {
      margin: 0;
      font-size: 1.05rem;
      font-weight: 800;
      color: #0f172a;
   }
   p {
      margin: 0.25rem 0 0;
      color: #64748b;
      font-size: 0.95rem;
   }

   @media (max-width: 640px) {
      flex-direction: column;
      align-items: flex-start;
   }
`

const MapCTA = styled.div`
   display: flex;
   gap: 0.5rem;
   flex-wrap: wrap;

   a {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.5rem 0.8rem;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 700;
      font-size: 0.9rem;
      border: 1px solid #eaeef6;
      background: #fff;
      color: #0f172a;
      transition: 0.15s ease;
      box-shadow: 0 6px 14px rgba(15, 23, 42, 0.06);
   }
   a:hover {
      transform: translateY(-1px);
      box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08);
   }
`

/* 기존 MapContainer 유지, 높이만 키워도 OK */
const MapContainer = styled.div`
   width: 100%;
   height: 420px;
   border-radius: 15px;
   overflow: hidden;
   box-shadow: 0 16px 42px rgba(15, 23, 42, 0.12);
   border: 1px solid #e6edf5;

   iframe {
      display: block;
      width: 100%;
      height: 100%;
   }
`

const MiniLegend = styled.ul`
   margin: 0.9rem 0 0;
   padding: 0;
   list-style: none;
   display: flex;
   gap: 1rem;
   flex-wrap: wrap;
   li {
      color: #64748b;
      font-size: 0.9rem;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
   }
   .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: inline-block;
   }
   .car {
      background: #10b981;
   }
   .walk {
      background: #2563eb;
   }
   .bus {
      background: #f59e0b;
   }
`

/* 연락처 UX 개선 */
const ContactValue = styled.div`
   font-size: 1.1rem;
   font-weight: 600;
   color: #1e293b;
   margin-bottom: 0.25rem;
   a {
      color: #0f172a;
      text-decoration: none;
      border-bottom: 1px dashed rgba(15, 23, 42, 0.25);
   }
   a:hover {
      opacity: 0.85;
   }
`
const Copyable = styled.span`
   cursor: pointer;
   border-bottom: 1px dashed rgba(15, 23, 42, 0.25);
   &:hover {
      opacity: 0.85;
   }
`

/* 빠른 길찾기 버튼 */
const QuickActions = styled.div`
   margin-top: 1.25rem;
   display: flex;
   gap: 0.5rem;
   flex-wrap: wrap;
   a {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.55rem 0.9rem;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 800;
      font-size: 0.9rem;
      border: 1px solid #e6edf5;
      background: #fff;
      color: #0f172a;
      transition: 0.15s ease;
      box-shadow: 0 8px 18px rgba(15, 23, 42, 0.06);
   }
   a.primary {
      background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
      color: #fff;
      border: 0;
   }
   a:hover {
      transform: translateY(-1px);
      box-shadow: 0 12px 26px rgba(15, 23, 42, 0.1);
   }
`

/* 타임라인형 교통 안내 */
const TransportTimeline = styled.div`
   position: relative;
   margin: 0 auto;
   max-width: 880px;
   &:before {
      content: '';
      position: absolute;
      left: 30px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(180deg, #ff6b6b, #ee5a6f);
      @media (max-width: 640px) {
         left: 22px;
      }
   }
`

const Step = styled.div`
   position: relative;
   padding-left: 82px;
   margin: 0 0 2rem 0;
   @media (max-width: 640px) {
      padding-left: 68px;
   }
`

const StepIcon = styled.div`
   position: absolute;
   left: 0;
   top: 0;
   width: 60px;
   height: 60px;
   border-radius: 16px;
   display: grid;
   place-items: center;
   color: #fff;
   font-size: 1.25rem;
   box-shadow: 0 12px 26px rgba(0, 0, 0, 0.12);
   &.car {
      background: linear-gradient(135deg, #10b981, #059669);
   }
   &.subway {
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
   }
   &.bus {
      background: linear-gradient(135deg, #f59e0b, #ef4444);
   }
   @media (max-width: 640px) {
      width: 50px;
      height: 50px;
      border-radius: 14px;
      font-size: 1.05rem;
   }
`

const StepBody = styled.div`
   background: #fff;
   border: 1px solid #e6edf5;
   border-radius: 16px;
   padding: 1.25rem 1.25rem 1.1rem;
   box-shadow: 0 20px 44px rgba(15, 23, 42, 0.08);
   h4 {
      margin: 0 0 0.4rem 0;
      font-size: 1.05rem;
      font-weight: 900;
      color: #0f172a;
   }
   ul {
      margin: 0.2rem 0 0;
      padding-left: 1rem;
      color: #475569;
      line-height: 1.7;
   }
   li {
      margin: 0.2rem 0;
   }
   strong {
      color: #0f172a;
   }
   em {
      font-style: normal;
      font-weight: 700;
      color: #0f172a;
   }
`

const LocationSection = styled.section`
   padding: 6rem 0;
   background: white;
`
const LocationContent = styled.div`
   display: grid;
   grid-template-columns: 1.2fr 0.8fr;
   gap: 2.5rem;
   @media (max-width: 1024px) {
      grid-template-columns: 1fr;
   }
`
const MapCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 1.25rem;
   box-shadow: 0 16px 42px rgba(15, 23, 42, 0.08);
   border: 1px solid #e6edf5;
`
const InfoCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 1.5rem;
   box-shadow: 0 16px 42px rgba(15, 23, 42, 0.08);
   border: 1px solid #e6edf5;
`
const ContactInfo = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`
const ContactItem = styled.div`
   display: flex;
   gap: 1rem;
   align-items: flex-start;
   padding: 1rem;
   background: #f8fafc;
   border: 1px solid #e6edf5;
   border-radius: 14px;
`
const ContactIcon = styled.div`
   width: 46px;
   height: 46px;
   border-radius: 12px;
   display: grid;
   place-items: center;
   background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
   color: #fff;
   font-size: 1.1rem;
   flex-shrink: 0;
`
const ContactDetails = styled.div`
   flex: 1;
`
const ContactLabel = styled.div`
   font-size: 0.9rem;
   font-weight: 700;
   color: #64748b;
   margin-bottom: 0.2rem;
`
const ContactSubValue = styled.div`
   font-size: 0.9rem;
   color: #64748b;
`
const TransportSection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`
