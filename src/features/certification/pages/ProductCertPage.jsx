import styled from 'styled-components'
import { motion } from 'framer-motion' // 애니메이션 위해 추가
// import { Button } from '@/components/common/Button'; // 필요 시 버튼 추가

// Framer Motion Variants (ExamInfoPage와 유사하게)
const sectionVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function ProductCertPage() {
   return (
      <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={sectionVariants}>
         <HeroSection>
            <HeroOverlay />
            <HeroContent>
               <h1>제품 인증</h1>
               <p>KHAMA 협회에서 인증하는 우수 제품 정보를 확인하세요.</p>
            </HeroContent>
         </HeroSection>
         <PageContainer>
            <Section variants={sectionVariants}>
               <SectionTitle>제품 인증 개요</SectionTitle>
               <p>KHAMA 제품 인증은 협회가 정한 일정 기준 이상의 성능, 안전성, 편의성을 갖춘 우수 생활가전 제품 및 관련 부품/소재를 공식적으로 인정하는 제도입니다. 소비자에게는 신뢰할 수 있는 제품 선택 기준을 제공하고, 기업에게는 기술 개발 동기를 부여하여 산업 전체의 발전을 도모합니다.</p>
               <Highlights>
                  <span>#신뢰성 확보</span>
                  <span>#품질 보증</span>
                  <span>#소비자 보호</span>
                  <span>#기술 혁신</span>
               </Highlights>
            </Section>

            <Section variants={sectionVariants}>
               <SectionTitle>인증 대상</SectionTitle>
               <p>주요 생활가전 제품과 핵심 부품 및 소재를 대상으로 인증을 진행합니다.</p>
               <ul>
                  <li>
                     <strong>가전 제품:</strong> 냉장고, 세탁기, 에어컨, TV, 공기청정기 등 주요 가전
                  </li>
                  <li>
                     <strong>핵심 부품:</strong> 모터, 컴프레서, 필터, PCB 등 성능 및 안전 관련 부품
                  </li>
                  <li>
                     <strong>관련 소재:</strong> 친환경 냉매, 고효율 단열재 등
                  </li>
                  <li>* 세부 인증 대상 품목은 별도 고시됩니다.</li>
               </ul>
            </Section>

            <Section variants={sectionVariants}>
               <SectionTitle>인증 절차</SectionTitle>
               <p>제품 인증은 신청 접수, 서류 심사, 제품 시험, 공장 심사(필요시), 최종 심의 단계를 거쳐 이루어집니다.</p>
               <Steps>
                  <Step>1. 신청 접수</Step>
                  <Step>2. 서류 심사</Step>
                  <Step>3. 제품 시험</Step>
                  <Step>4. 공장 심사</Step>
                  <Step>5. 인증 심의 및 발급</Step>
               </Steps>
               {/* <Button variant="outline" style={{ marginTop: '1rem' }}>인증 신청 안내 (준비중)</Button> */}
            </Section>

            <Section variants={sectionVariants}>
               <SectionTitle>인증 혜택</SectionTitle>
               <p>KHAMA 인증 마크 획득 시 다음과 같은 혜택을 기대할 수 있습니다.</p>
               <ul>
                  <li>협회 인증 마크 사용 권한 부여 (제품, 포장, 홍보물 등)</li>
                  <li>소비자 신뢰도 및 브랜드 이미지 제고</li>
                  <li>협회 주관 홍보 및 마케팅 활동 지원 연계</li>
                  <li>공공기관 납품 또는 조달 시장 참여 시 가산점 부여 (추진 중)</li>
               </ul>
            </Section>

            <Section variants={sectionVariants}>
               <SectionTitle>인증 제품 조회</SectionTitle>
               <p>KHAMA 인증을 획득한 제품 목록은 아래에서 확인하실 수 있습니다.</p>
               {/* TODO: 실제 인증 제품 목록 컴포넌트 또는 링크 추가 */}
               <Placeholder>현재 인증된 제품 목록이 여기에 표시됩니다. (구현 예정)</Placeholder>
            </Section>
         </PageContainer>
      </motion.div>
   )
}

// Hero 섹션 스타일 (다른 페이지와 유사)
const HeroSection = styled.section`
   position: relative;
   height: 400px;
   background: url('/images/product-cert-hero.jpg') no-repeat center center; /* 적절한 배경 이미지 경로 */
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
   background-color: rgba(30, 110, 180, 0.6); /* Primary/Secondary 중간톤 오버레이 */
   z-index: 1;
`

const HeroContent = styled.div`
   position: relative;
   z-index: 2;
   max-width: 800px;
   padding: 0 ${({ theme }) => theme.spacing.lg};

   h1 {
      font-size: ${({ theme }) => theme.fontSizes.h1};
      font-weight: 700;
      margin-bottom: ${({ theme }) => theme.spacing.md};
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
   }

   p {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      line-height: 1.7;
      opacity: 0.9;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
   }
`

// 기존 Container -> PageContainer 이름 변경 및 스타일 조정
const PageContainer = styled.div`
   padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
   max-width: 1100px;
   margin: 0 auto;
`

// Section, SectionTitle 등 공통 스타일 추가/재사용 (ExamInfoPage 참고)
const Section = styled(motion.section)`
   margin-bottom: ${({ theme }) => theme.spacing.xxl};
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
   padding-bottom: ${({ theme }) => theme.spacing.sm};
   border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

// 추가된 스타일 컴포넌트
const Highlights = styled.div`
   margin-top: ${({ theme }) => theme.spacing.lg};
   display: flex;
   flex-wrap: wrap;
   gap: ${({ theme }) => theme.spacing.sm};

   span {
      background-color: ${({ theme }) => theme.colors.secondary}20; // 연한 Secondary 색 배경
      color: ${({ theme }) => theme.colors.secondary};
      padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
      border-radius: 1rem; // 둥근 모서리
      font-size: ${({ theme }) => theme.fontSizes.small};
      font-weight: 500;
   }
`

const Steps = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: ${({ theme }) => theme.spacing.lg};
   padding: ${({ theme }) => theme.spacing.lg} 0;
   border-top: 1px dashed ${({ theme }) => theme.colors.border};
   border-bottom: 1px dashed ${({ theme }) => theme.colors.border};

   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: column;
      align-items: flex-start;
      gap: ${({ theme }) => theme.spacing.md};
   }
`

const Step = styled.div`
   font-weight: 600;
   color: ${({ theme }) => theme.colors.text};
   position: relative;

   @media (min-width: 769px) {
      &:not(:last-child)::after {
         content: '→';
         position: absolute;
         right: -${({ theme }) => theme.spacing.lg}; // 화살표 간격 조정
         color: ${({ theme }) => theme.colors.textSecondary};
      }
   }
`

const Placeholder = styled.div`
   background-color: #fff;
   padding: 2rem;
   border-radius: 8px;
   border: 1px dashed #ccc;
   text-align: center;
   color: #888;
   font-style: italic;
   margin-top: 2rem;
`
