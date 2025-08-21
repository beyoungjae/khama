import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { FaShieldAlt, FaUsers, FaLightbulb } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { getImageUrl, handleImageError, getLazyLoadingProps } from '../../../utils/imageHelpers'
import { fadeInScale, staggerContainer, PageWrapper, Container, SectionHeader, SectionTitle, SectionSubtitle } from '../../../components/common/SharedStyles'
import styled from 'styled-components'

export function GreetingPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { ref: greetingRef, inView: greetingInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   return (
      <PageWrapper>
         {/* 회장 인사말 섹션 (리디자인) */}
         <GreetingSection ref={greetingRef}>
            <Container>
               <motion.div initial="hidden" animate={greetingInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>회장 인사말</SectionTitle>
                     <SectionSubtitle>한국생활가전유지관리협회 회장의 메시지</SectionSubtitle>
                  </SectionHeader>

                  <GreetingHero>
                     {/* 좌측: 사진 */}
                     <PhotoWrap as={motion.div} variants={fadeInScale}>
                        <div className="frame">
                           <img src={getImageUrl('association', 'president')} alt="KHAMA 협회장" onError={handleImageError} {...getLazyLoadingProps()} draggable={false} />
                           <span className="ring" aria-hidden />
                           <span className="shine" aria-hidden />
                        </div>
                        <PhotoCaption>
                           <strong>김윤채</strong>
                           <span>한국생활가전유지관리협회 회장</span>
                        </PhotoCaption>
                     </PhotoWrap>

                     {/* 우측: 메시지 */}
                     <MessageWrap as={motion.div} variants={fadeInScale}>
                        <Ribbon>Message from the President</Ribbon>

                        <Lead>
                           안녕하십니까, 한국생활가전유지관리협회 회장 <strong>김윤채</strong>입니다.
                        </Lead>

                        <PullQuote>
                           생활가전 유지관리는 <br /> ‘안전’과 ‘신뢰’의 산업입니다. <br />
                           KHAMA는 표준과 교육으로 <br /> 그 신뢰를 설계합니다.
                        </PullQuote>

                        <MessageBody>
                           <p>
                              급변하는 기술 환경 속에서 <br />
                              생활가전 제품은 우리 삶의 필수 인프라가 되었습니다. <br /> 이러한 제품을 <em>안전하고 효율적으로 유지관리</em>하는 <br />
                              전문 인력의 역할은 어느 때보다 중요해지고 있습니다.
                           </p>
                           <p>
                              우리 협회는 유지관리 <strong>기술 표준</strong>을 정립하고, <br /> 체계적 <strong>교육·자격</strong>을 통해 전문가를 양성합니다. <br />
                              <br /> 더 나아가 산업의 건전한 발전과 회원 상호 협력을 촉진하여 <br />
                              국민의 생활 안전과 편익 증진에 기여하겠습니다.
                           </p>
                           <p>
                              앞으로도 투명하고 공정한 운영으로 회원의 권익을 보호하고, <br /> 업계의 신뢰를 이끄는 협회가 되겠습니다. <br />
                              많은 관심과 참여 부탁드립니다.
                           </p>
                        </MessageBody>

                        <SignatureBlock>
                           <span className="name">한국생활가전유지관리협회 회장</span>
                           <span className="sign">김윤채</span>
                        </SignatureBlock>

                        <KeyBadges>
                           <li>표준화</li>
                           <li>전문성</li>
                           <li>투명경영</li>
                        </KeyBadges>
                     </MessageWrap>
                  </GreetingHero>
               </motion.div>
            </Container>
         </GreetingSection>

         {/* 협회 가치 섹션 (리디자인) */}
         <ValuesSection ref={valuesRef}>
            <Container>
               <motion.div initial="hidden" animate={valuesInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <SectionHeader>
                     <SectionTitle>협회의 핵심 가치</SectionTitle>
                     <SectionSubtitle>우리가 지키는 원칙과 기준</SectionSubtitle>
                  </SectionHeader>

                  <ValueRow>
                     <ValueTile as={motion.div} variants={fadeInScale}>
                        <ValueIcon className="pink">
                           <FaShieldAlt />
                        </ValueIcon>
                        <h4>안전</h4>
                        <p>국민의 안전을 최우선으로, 최고 수준의 유지관리 표준을 제공합니다.</p>
                     </ValueTile>

                     <ValueTile as={motion.div} variants={fadeInScale}>
                        <ValueIcon className="blue">
                           <FaUsers />
                        </ValueIcon>
                        <h4>전문성</h4>
                        <p>체계적 교육과 자격 인증으로 신뢰받는 전문가를 양성합니다.</p>
                     </ValueTile>

                     <ValueTile as={motion.div} variants={fadeInScale}>
                        <ValueIcon className="amber">
                           <FaLightbulb />
                        </ValueIcon>
                        <h4>혁신</h4>
                        <p>지속적인 기술 개발과 표준화로 산업의 미래를 선도합니다.</p>
                     </ValueTile>
                  </ValueRow>
               </motion.div>
            </Container>
         </ValuesSection>
      </PageWrapper>
   )
}

// 인사말 페이지 전용 스타일 컴포넌트
const GreetingSection = styled.section`
   padding: 6rem 0;
   background: white;
`

const ValuesSection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`

/* ===== Greeting Redesign ===== */
const GreetingHero = styled.div`
   display: grid;
   grid-template-columns: 420px 1fr;
   gap: 3rem;
   align-items: start;

   @media (max-width: 1024px) {
      grid-template-columns: 1fr;
   }
`

const PhotoWrap = styled.div`
   .frame {
      position: relative;
      border-radius: 22px;
      overflow: hidden;
      box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
      border: 1px solid rgba(255, 255, 255, 0.35);
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.35));
   }
   img {
      display: block;
      width: 100%;
      height: 520px;
      object-fit: cover;
      user-select: none;
   }
   .ring {
      position: absolute;
      inset: -2px;
      border-radius: 24px;
      background: radial-gradient(1200px 300px at -10% 10%, rgba(255, 107, 107, 0.35), transparent 40%), radial-gradient(900px 300px at 110% 80%, rgba(59, 130, 246, 0.25), transparent 40%);
      pointer-events: none;
   }
   .shine {
      position: absolute;
      inset: 0;
      background: linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.25) 35%, transparent 70%);
      mix-blend-mode: screen;
      transform: translateX(-40%);
      animation: sweep 4s ease-in-out infinite;
   }
   @keyframes sweep {
      0% {
         transform: translateX(-60%);
         opacity: 0;
      }
      35% {
         opacity: 0.85;
      }
      60% {
         transform: translateX(60%);
         opacity: 0;
      }
      100% {
         transform: translateX(60%);
         opacity: 0;
      }
   }
`

const PhotoCaption = styled.div`
   margin-top: 0.9rem;
   display: flex;
   flex-direction: column;
   gap: 0.2rem;
   strong {
      font-size: 1.2rem;
      color: #0f172a;
   }
   span {
      color: #64748b;
      font-size: 0.95rem;
   }
`

const MessageWrap = styled(motion.div)`
   position: relative;
   background: rgba(255, 255, 255, 0.85);
   border: 1px solid #e6edf5;
   border-radius: 22px;
   padding: 2rem 2rem 1.75rem;
   box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
   backdrop-filter: blur(8px);
`

const Ribbon = styled.div`
   display: inline-flex;
   align-items: center;
   gap: 0.5rem;
   padding: 0.45rem 0.8rem;
   font-weight: 800;
   font-size: 0.78rem;
   letter-spacing: 0.06em;
   color: #b91c1c;
   background: #fff0f0;
   border: 1px solid #ffd5d5;
   border-radius: 999px;
   margin-bottom: 1rem;

   &:before {
      content: '•';
      color: #ef4444;
      font-weight: 900;
   }
`

const Lead = styled.p`
   margin: 0 0 0.8rem 0;
   font-size: 1.1rem;
   color: #334155;
   strong {
      color: #0f172a;
   }
`

const PullQuote = styled.blockquote`
   margin: 0.6rem 0 1.1rem;
   padding: 2rem 1.6rem;
   background: linear-gradient(180deg, #fff, #fbfbff);
   border: 1px dashed #e6eaf5;
   border-radius: 14px;
   color: #0f172a;
   font-weight: 700;
   line-height: 1.55;
   position: relative;
   text-align: center;

   &:before {
      content: '“';
      position: absolute;
      left: 0.6rem;
      top: 0.3rem;
      font-size: 2rem;
      color: #94a3b8;
      opacity: 0.4;
   }
   &:after {
      content: '”';
      position: absolute;
      right: 0.6rem;
      bottom: 0.1rem;
      font-size: 2rem;
      color: #94a3b8;
      opacity: 0.4;
   }
`

const MessageBody = styled.div`
   p {
      margin: 0 0 0.9rem 0;
      color: #475569;
      line-height: 1.75;
      font-size: 1rem;
      em {
         font-style: normal;
         color: #0f172a;
         font-weight: 600;
      }
      strong {
         color: #0f172a;
      }
   }
`

const SignatureBlock = styled.div`
   margin-top: 1.2rem;
   padding-top: 1rem;
   border-top: 2px solid #eef2f7;
   display: flex;
   gap: 0.6rem;
   align-items: baseline;
   justify-content: flex-end;

   .name {
      color: #64748b;
      font-weight: 600;
   }
   .sign {
      color: #0f172a;
      font-weight: 900;
      font-size: 1.1rem;
   }
`

const KeyBadges = styled.ul`
   margin: 0.8rem 0 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;
   gap: 0.5rem;

   li {
      padding: 0.35rem 0.7rem;
      border: 1px solid #e8eef6;
      background: #f8fafc;
      color: #334155;
      font-weight: 700;
      border-radius: 999px;
      font-size: 0.78rem;
   }
`

/* ===== Values Redesign ===== */
const ValueRow = styled.div`
   display: grid;
   grid-template-columns: repeat(3, minmax(220px, 1fr));
   gap: 1.25rem;

   @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
   }
   @media (max-width: 640px) {
      grid-template-columns: 1fr;
   }
`

const ValueTile = styled(motion.div)`
   position: relative;
   overflow: hidden;
   border-radius: 18px;
   background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.8));
   border: 1px solid #e6edf5;
   padding: 1.25rem 1.25rem 1.15rem;
   box-shadow: 0 20px 44px rgba(15, 23, 42, 0.08);
   transition: transform 0.18s ease, box-shadow 0.18s ease;

   &:hover {
      transform: translateY(-4px);
      box-shadow: 0 32px 64px rgba(15, 23, 42, 0.12);
   }

   h4 {
      margin: 0.25rem 0 0.35rem 0;
      font-size: 1.05rem;
      font-weight: 900;
      color: #0f172a;
   }
   p {
      margin: 0;
      color: #475569;
      line-height: 1.65;
      font-size: 0.98rem;
   }

   /* 은은한 배경 장식 */
   &:after {
      content: '';
      position: absolute;
      right: -20%;
      top: -20%;
      width: 220px;
      height: 220px;
      background: radial-gradient(closest-side, rgba(255, 107, 107, 0.1), transparent 70%);
      filter: blur(8px);
      pointer-events: none;
   }
`

const ValueIcon = styled.div`
   width: 42px;
   height: 42px;
   border-radius: 12px;
   display: grid;
   place-items: center;
   color: #fff;
   font-size: 1.1rem;
   border: 1px solid rgba(255, 255, 255, 0.25);
   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
   margin-bottom: 0.6rem;

   &.pink {
      background: linear-gradient(135deg, #fb7185, #ef4444);
   }
   &.blue {
      background: linear-gradient(135deg, #60a5fa, #2563eb);
   }
   &.amber {
      background: linear-gradient(135deg, #f59e0b, #ef4444);
   }
`
