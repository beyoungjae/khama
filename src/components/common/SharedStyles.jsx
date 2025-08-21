import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

// 공통 애니메이션 variants
export const fadeInUp = {
   hidden: { opacity: 0, y: 30 },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.4,
         ease: 'easeOut',
      },
   },
}

export const fadeInScale = {
   hidden: { opacity: 0, scale: 0.9 },
   visible: {
      opacity: 1,
      scale: 1,
      transition: {
         duration: 0.3,
         ease: 'easeOut',
      },
   },
}

export const staggerContainer = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.08,
         delayChildren: 0.1,
      },
   },
}

export const slideInLeft = {
   hidden: { opacity: 0, x: -40 },
   visible: {
      opacity: 1,
      x: 0,
      transition: {
         duration: 0.5,
         ease: 'easeOut',
      },
   },
}

export const slideInRight = {
   hidden: { opacity: 0, x: 40 },
   visible: {
      opacity: 1,
      x: 0,
      transition: {
         duration: 0.5,
         ease: 'easeOut',
      },
   },
}

/* 한 트랙이 자기 폭만큼(-100%) 이동하면 다음 트랙이 정확히 이어받음 */
const scrollX = keyframes`
  0%   { transform: translate3d(0,0,0); }
  100% { transform: translate3d(-100%,0,0); }
`

// 공통 레이아웃 컴포넌트
export const PageWrapper = styled.div`
   min-height: 100vh;
   background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`

export const Container = styled.div`
   max-width: 1200px;
   margin: 0 auto;
   padding: 0 2rem;

   @media (max-width: 768px) {
      padding: 0 1rem;
   }
`

// 공통 섹션 헤더
export const SectionHeader = styled.div`
   text-align: center;
   margin-bottom: 4rem;
`

export const SectionTitle = styled.h2`
   font-size: 2.5rem;
   font-weight: 700;
   color: #1e293b;
   margin-bottom: 1rem;
`

export const SectionSubtitle = styled.p`
   font-size: 1.1rem;
   color: #64748b;
   max-width: 600px;
   margin: 0 auto;
`

// 시험 관련 컴포넌트
export const ExamSubjects = styled.div`
   margin-top: 1.5rem;
`

export const HeroBgImg = styled(motion.img)`
   position: absolute;
   inset: 0;
   width: 100%;
   height: 100%;
   object-fit: cover; /* 데스크톱: 꽉 채우되 잘릴 수 있음 */
   pointer-events: none;
   user-select: none;

   /* 모바일: 원본 비율 유지, 잘림 없음 */
   @media (max-width: 768px) {
      object-fit: contain;
      max-height: 60vh; /* 너무 긴 이미지 가드 */
      background: #0f172a; /* 레터박스 배경색(원하면 변경) */
   }
`

// 공통 Hero 섹션 스타일
export const ModernHeroSection = styled.section`
   position: relative;
   min-height: 50vh;
   display: flex;
   align-items: center;
   overflow: hidden;
   background: ${(props) => {
      if (props.bgImage) {
         return `url(${props.bgImage})`
      }
      return props.gradient || '#fff'
   }};
   background-size: cover;
   background-position: center;
   background-attachment: ${(props) => (props.bgImage ? 'fixed' : 'initial')};

   @media (max-width: 768px) {
      background-attachment: scroll; /* 모바일에서는 패럴랙스 비활성화 */
   }

   /* 이미지 배경일 때 오버레이 추가 */
   &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: ${(props) => (props.bgImage ? 'rgba(0, 0, 0, 0.4)' : 'transparent')};
      z-index: 1;
   }
`

export const HeroBackground = styled(motion.div)`
   position: absolute;
   inset: 0;
   background: ${(props) => props.radialGradient || 'radial-gradient(circle at 20% 80%, rgba(255, 107, 107, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'};
   z-index: 1;
   pointer-events: none;
   will-change: opacity, transform;
`

export const HeroContainer = styled.div`
   position: relative;
   z-index: 3; /* 오버레이 위에 표시 */
   max-width: 1200px;
   margin: 0 auto;
   padding: 0 2rem;
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 4rem;
   align-items: center;

   @media (max-width: 968px) {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
   }
`

export const HeroContent = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
`

export const HeroBadge = styled.div`
   display: inline-flex;
   align-items: center;
   gap: 0.5rem;
   background: rgba(255, 255, 255, 0.2);
   backdrop-filter: blur(10px);
   padding: 0.5rem 1rem;
   border-radius: 50px;
   color: white;
   font-size: 0.9rem;
   font-weight: 500;
   margin-bottom: 1.5rem;
   border: 1px solid rgba(255, 255, 255, 0.3);
`

export const HeroTitle = styled.h1`
   font-size: 3.5rem;
   font-weight: 800;
   color: white;
   line-height: 1.1;
   margin-bottom: 1rem;

   @media (max-width: 768px) {
      font-size: 2.5rem;
   }
`

export const GradientText = styled.span`
   background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-clip: text;
`

export const HeroSubtitle = styled.p`
   font-size: 1.25rem;
   color: rgba(255, 255, 255, 0.8);
   font-style: italic;
   margin-bottom: 1rem;

   @media (max-width: 768px) {
      font-size: 1.1rem;
   }
`

export const HeroDescription = styled.p`
   font-size: 1.1rem;
   color: rgba(255, 255, 255, 0.9);
   line-height: 1.6;
   margin-bottom: 1.5rem;
   max-width: 500px;
`

export const LegalDisclaimer = styled.div`
   font-size: 0.9rem;
   color: rgba(255, 255, 255, 0.7);
   font-style: italic;
`

export const HeroImageContainer = styled.div`
   position: relative;
`

export const HeroImagePlaceholder = styled.div`
   background: rgba(255, 255, 255, 0.1);
   backdrop-filter: blur(10px);
   border-radius: 20px;
   padding: 3rem;
   text-align: center;
   color: white;
   border: 1px solid rgba(255, 255, 255, 0.2);
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;

   svg {
      opacity: 0.8;
   }

   p {
      margin: 0;
      font-size: 1.1rem;
      opacity: 0.8;
   }
`

// 공통 섹션 스타일
export const Section = styled.section`
   padding: 6rem 0;
   background: ${(props) => props.background || 'white'};
`

// 공통 카드 스타일
export const Card = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 2rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
   transition: all 0.2s ease;
   will-change: transform, opacity, box-shadow;
   text-align: center;

   &:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
   }
`

export const CardIcon = styled.div`
   width: 60px;
   height: 60px;
   border-radius: 15px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   margin: 0 auto 1.5rem auto;

   ${(props) =>
      props.$primary &&
      `
      background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
      color: white;
   `}

   ${(props) =>
      props.$secondary &&
      `
      background: linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%);
      color: white;
   `}
   
   ${(props) =>
      props.$accent &&
      `
      background: linear-gradient(135deg, #ff8a80 0%, #ff5722 100%);
      color: white;
   `}
`

export const CardContent = styled.div``

export const CardTitle = styled.h3`
   font-size: 1.25rem;
   font-weight: 600;
   color: #1e293b;
   margin-bottom: 1rem;
`

export const CardDescription = styled.p`
   color: #64748b;
   line-height: 1.6;
   margin-bottom: 1rem;
`

export const CardBadge = styled.span`
   display: inline-block;
   background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
   color: white;
   padding: 0.25rem 0.75rem;
   border-radius: 20px;
   font-size: 0.8rem;
   font-weight: 600;
`

// 공통 그리드 레이아웃
export const Grid = styled.div`
   display: grid;
   grid-template-columns: ${(props) => props.columns || 'repeat(auto-fit, minmax(350px, 1fr))'};
   gap: ${(props) => props.gap || '2rem'};
`

// 특화된 그리드 레이아웃들
export const ExamGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   gap: 2rem;
`

export const RequirementGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   gap: 2rem;
`

export const InfoGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   gap: 2rem;
`

export const ProcessGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 2rem;
`

export const ApplicationGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 2rem;
`

export const LegalGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
   gap: 2rem;
`

// 공통 시험 관련 스타일
export const ExamSection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`

export const ExamCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 2rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
   transition: all 0.2s ease;
   will-change: transform, opacity, box-shadow;

   &:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
   }
`

export const ExamIcon = styled.div`
   width: 60px;
   height: 60px;
   border-radius: 15px;
   background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   color: white;
   margin: 0 auto 1.5rem;
`

export const ExamType = styled.h3`
   font-size: 1.25rem;
   font-weight: 600;
   color: #1e293b;
   text-align: center;
   margin-bottom: 2rem;
   padding: 1rem;
   background: #f8fafc;
   border-radius: 10px;
   border-left: 4px solid #3b82f6;
`

export const SubjectTitle = styled.h4`
   font-size: 1.1rem;
   font-weight: 600;
   color: #1e293b;
   margin-bottom: 1rem;
`

export const SubjectList = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;

   li {
      padding: 0.75rem 1rem;
      margin-bottom: 0.5rem;
      background: #f1f5f9;
      border-radius: 10px;
      color: #475569;
      border-left: 3px solid #3b82f6;
      transition: all 0.3s ease;

      &:hover {
         background: #e2e8f0;
         transform: translateX(5px);
      }
   }
`

// 공통 요구사항 스타일
export const RequirementSection = styled.section`
   padding: 6rem 0;
   background: white;
`

export const RequirementCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 2rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
   transition: all 0.2s ease;
   will-change: transform, opacity, box-shadow;

   &:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
   }
`

export const RequirementIcon = styled.div`
   width: 60px;
   height: 60px;
   border-radius: 15px;
   background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   color: white;
   margin: 0 auto 1.5rem;
`

export const RequirementTitle = styled.h3`
   font-size: 1.25rem;
   font-weight: 600;
   color: #1e293b;
   text-align: center;
   margin-bottom: 2rem;
`

export const RequirementList = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`

export const RequirementItem = styled.div`
   padding: 1rem;
   background: #f8fafc;
   border-radius: 10px;
   border-left: 4px solid #3b82f6;
   color: #475569;
   line-height: 1.6;

   strong {
      color: #1e293b;
      font-weight: 600;
   }
`

// 공통 정보 섹션 스타일
export const InfoSection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`

export const InfoCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 2rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
   transition: all 0.2s ease;
   will-change: transform, opacity, box-shadow;

   &:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
   }
`

export const InfoIcon = styled.div`
   width: 60px;
   height: 60px;
   border-radius: 15px;
   background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   color: white;
   margin: 0 auto 1.5rem;
`

export const InfoTitle = styled.h3`
   font-size: 1.25rem;
   font-weight: 600;
   color: #1e293b;
   text-align: center;
   margin-bottom: 2rem;
`

export const InfoContent = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`

export const InfoItem = styled.div`
   padding: 1rem;
   background: #f8fafc;
   border-radius: 10px;
   color: #475569;
   line-height: 1.6;
   border-left: 3px solid #3b82f6;
`

export const InfoHighlight = styled.div`
   padding: 1.5rem;
   background: linear-gradient(135deg, #10b981 0%, #059669 100%);
   color: white;
   border-radius: 15px;
   text-align: center;
   font-size: 1.1rem;

   strong {
      font-weight: 700;
   }
`

// 공통 법적 고지사항 스타일
export const LegalNoticeSection = styled.section`
   padding: 6rem 0;
   background: white;
`

export const LegalCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 2rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
`

export const LegalTitle = styled.h3`
   font-size: 1.25rem;
   font-weight: 600;
   color: #1e293b;
   margin-bottom: 1.5rem;
   padding-bottom: 0.5rem;
   border-bottom: 2px solid #e2e8f0;
`

export const LegalContent = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.75rem;
`

export const LegalItem = styled.div`
   padding: 0.75rem;
   background: #f8fafc;
   border-radius: 8px;
   color: #475569;
   font-size: 0.9rem;
   line-height: 1.5;
   border-left: 3px solid #3b82f6;

   strong {
      color: #1e293b;
      font-weight: 600;
   }
`

export const ImportantNoticeCard = styled(motion.div)`
   background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
   border-radius: 20px;
   padding: 2rem;
   border: 2px solid #f59e0b;
   box-shadow: 0 10px 30px rgba(245, 158, 11, 0.2);
`

export const NoticeIcon = styled.div`
   width: 60px;
   height: 60px;
   border-radius: 15px;
   background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   color: white;
   margin: 0 auto 1.5rem;
`

export const NoticeTitle = styled.h3`
   font-size: 1.25rem;
   font-weight: 600;
   color: #92400e;
   text-align: center;
   margin-bottom: 2rem;
`

export const NoticeContent = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`

export const NoticeItem = styled.div`
   padding: 1rem;
   background: white;
   border-radius: 10px;
   color: #374151;
   line-height: 1.6;
   border-left: 4px solid ${(props) => (props.important ? '#dc2626' : '#f59e0b')};

   ${(props) =>
      props.important &&
      `
      font-weight: 600;
      color: #1f2937;
   `}
`

// 공통 프로세스 스타일
export const ProcessCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 2rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
   text-align: center;
   position: relative;
   transition: all 0.3s ease;

   &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
   }
`

export const ProcessNumber = styled.div`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   font-weight: 700;
   margin: 0 auto 1.5rem;
`

export const ProcessTitle = styled.h3`
   font-size: 1.25rem;
   font-weight: 600;
   color: #1e293b;
   margin-bottom: 1rem;
`

export const ProcessDescription = styled.p`
   color: #64748b;
   line-height: 1.6;
   margin: 0;
`

// 공통 활용분야 스타일
export const ApplicationCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 2rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
   text-align: center;
   transition: all 0.3s ease;

   &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
   }
`

export const ApplicationIcon = styled.div`
   width: 60px;
   height: 60px;
   border-radius: 15px;
   background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   color: white;
   margin: 0 auto 1.5rem;
`

export const ApplicationTitle = styled.h3`
   font-size: 1.25rem;
   font-weight: 600;
   color: #1e293b;
   margin-bottom: 1rem;
`

export const ApplicationDescription = styled.p`
   color: #64748b;
   line-height: 1.6;
   margin: 0;
`
// 새집증후군 관련 특별 스타일 (환기청정시스템 페이지용)
export const SickBuildingSection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`

export const SickBuildingContent = styled.div`
   display: grid;
   grid-template-columns: 2fr 1fr;
   gap: 3rem;
   align-items: center;

   @media (max-width: 968px) {
      grid-template-columns: 1fr;
      gap: 2rem;
   }
`

export const SickBuildingTextCard = styled.div`
   background: white;
   border-radius: 20px;
   padding: 2.5rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
`

export const SickBuildingTitle = styled.h3`
   font-size: 1.5rem;
   font-weight: 700;
   color: #1e293b;
   margin-bottom: 1rem;
`

export const SickBuildingDescription = styled.p`
   color: #64748b;
   line-height: 1.6;
   margin-bottom: 2rem;
   font-size: 1.1rem;
`

export const InfoSubTitle = styled.h4`
   font-size: 1.2rem;
   font-weight: 600;
   color: #1e293b;
   margin: 1.5rem 0 1rem 0;
`

export const CauseGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
   gap: 0.5rem;
   margin-bottom: 2rem;
`

export const CauseItem = styled.div`
   padding: 0.75rem 1rem;
   background: ${(props) => (props.danger ? 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)' : '#f1f5f9')};
   border: ${(props) => (props.danger ? '1px solid #fca5a5' : '1px solid #e2e8f0')};
   border-radius: 10px;
   color: ${(props) => (props.danger ? '#991b1b' : '#475569')};
   font-size: 0.9rem;
   font-weight: 500;
   text-align: center;
`

export const SymptomGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
   gap: 0.5rem;
`

export const SymptomItem = styled.div`
   padding: 0.75rem 1rem;
   background: ${(props) => (props.warning ? 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)' : '#f1f5f9')};
   border: ${(props) => (props.warning ? '1px solid #f59e0b' : '1px solid #e2e8f0')};
   border-radius: 10px;
   color: ${(props) => (props.warning ? '#92400e' : '#475569')};
   font-size: 0.9rem;
   font-weight: 500;
   text-align: center;
`

export const SickBuildingImageCard = styled.div`
   background: white;
   border-radius: 20px;
   padding: 2.5rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
   text-align: center;
`

export const SickBuildingIcon = styled.div`
   width: 80px;
   height: 80px;
   border-radius: 20px;
   background: linear-gradient(135deg, #10b981 0%, #059669 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 2rem;
   color: white;
   margin: 0 auto 1.5rem;
`

export const SickBuildingImageTitle = styled.h3`
   font-size: 1.25rem;
   font-weight: 600;
   color: #1e293b;
   margin-bottom: 1rem;
`

export const SickBuildingImageDescription = styled.p`
   color: #64748b;
   line-height: 1.6;
`

// 협회 소개 페이지 전용 스타일 컴포넌트들
export const OverviewSection = styled.section`
   padding: 6rem 0;
   background: white;
`

export const OverviewGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   gap: 2rem;
`

export const OverviewCard = styled(motion.div)`
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
// 추가 정보 섹션
export const AdditionalInfoSection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`

// 프로세스 섹션
export const ProcessSection = styled.section`
   padding: 6rem 0;
   background: white;
`

// 활용 분야 섹션
export const ApplicationSection = styled.section`
   padding: 6rem 0;
   background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`

// 이미지 관련 공통 컴포넌트들
export const ImageCard = styled(motion.div)`
   position: relative;
   border-radius: 20px;
   overflow: hidden;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   transition: all 0.3s ease;
   will-change: transform, box-shadow;

   &:hover {
      transform: translateY(-3px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
   }
`

// 이미지 헤더 전용(데스크톱: cover + 고정비율, 모바일: contain + 원본비율)
export const ImageHeaderCard = styled(ImageCard)`
   border-radius: 20px 20px 0 0;

   /* 데스크톱: 일정 비율 유지(16:9), 내부 이미지는 cover */
   @media (min-width: 769px) {
      aspect-ratio: 16 / 9;
   }

   img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* 데스크톱에서 라인 정렬용 */
      display: block;
   }

   /* 모바일: 원본 비율 유지(전체 보이게) */
   @media (max-width: 768px) {
      aspect-ratio: auto;
      img {
         height: auto; /* 원본 비율 */
         object-fit: contain; /* 잘림 없이 전체 표시 */
         max-height: 60vh; /* 너무 긴 이미지 보호용 가드 */
      }
   }
`

export const ResponsiveImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   transition: transform 0.3s ease;
   will-change: transform;

   ${ImageCard}:hover & {
      transform: scale(1.05);
   }
`

export const ImageOverlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: linear-gradient(45deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   opacity: 0;
   transition: opacity 0.3s ease;

   ${ImageCard}:hover & {
      opacity: 1;
   }

   @media (hover: none), (pointer: coarse) {
      opacity: 1;
      background: linear-gradient(45deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%);
      align-items: flex-end; /* 하단 배치가 기본이라면 */
      padding: 1rem;
   }
`

export const ImageOverlayContent = styled.div`
   text-align: center;
   color: white;
   padding: 1rem;

   h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
   }

   p {
      font-size: 0.9rem;
      opacity: 0.9;
   }
`

export const HeroImageSection = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-image: url(${(props) => props.bgImage});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   opacity: 0.15;
   z-index: 0;
`

export const ImageGallery = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 2rem;
   margin-top: 2rem;

   @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
   }
`

export const ImageGalleryItem = styled(motion.div)`
   position: relative;
   aspect-ratio: 4/3;
   border-radius: 16px;
   overflow: hidden;
   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
   cursor: pointer;
   transition: all 0.3s ease;

   &:hover {
      transform: scale(1.02);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
   }
`

export const ImageCaption = styled.div`
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
   color: white;
   padding: 2rem 1.5rem 1.5rem;
   transform: translateY(100%);
   transition: transform 0.3s ease;

   ${ImageGalleryItem}:hover & {
      transform: translateY(0);
   }

   h4 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
   }

   p {
      font-size: 0.9rem;
      opacity: 0.9;
      line-height: 1.4;
   }
`

export const BeforeAfterContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 2rem;
   margin: 2rem 0;

   @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
   }
`

export const BeforeAfterCard = styled(motion.div)`
   position: relative;
   border-radius: 16px;
   overflow: hidden;
   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
   background: white;
`

export const BeforeAfterImage = styled.img`
   width: 100%;
   height: 250px;
   object-fit: cover;
`

export const BeforeAfterLabel = styled.div`
   position: absolute;
   top: 1rem;
   left: 1rem;
   padding: 0.5rem 1rem;
   border-radius: 20px;
   font-size: 0.85rem;
   font-weight: 600;
   text-transform: uppercase;
   letter-spacing: 0.5px;

   ${(props) =>
      props.type === 'before'
         ? `
      background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
      color: white;
   `
         : `
      background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
      color: white;
   `}
`

export const BeforeAfterContent = styled.div`
   padding: 1.5rem;
   text-align: center;

   h4 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 0.5rem;
   }

   p {
      color: #64748b;
      font-size: 0.9rem;
      line-height: 1.5;
   }
`

export const PersonCard = styled(motion.div)`
   background: white;
   border-radius: 20px;
   padding: 2rem;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   text-align: center;
   transition: all 0.3s ease;

   &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
   }
`

export const PersonImage = styled.img`
   width: 120px;
   height: 120px;
   border-radius: 50%;
   object-fit: cover;
   margin: 0 auto 1.5rem;
   border: 4px solid #e2e8f0;
   transition: border-color 0.3s ease;

   ${PersonCard}:hover & {
      border-color: #ff6b6b;
   }
`

export const PersonName = styled.h3`
   font-size: 1.25rem;
   font-weight: 600;
   color: #1e293b;
   margin-bottom: 0.5rem;
`

export const PersonRole = styled.p`
   color: #ff6b6b;
   font-weight: 500;
   margin-bottom: 1rem;
`

export const PersonDescription = styled.p`
   color: #64748b;
   line-height: 1.6;
   font-size: 0.95rem;
`
// 콘텐츠 이미지 컴포넌트들
export const ContentWithImage = styled.div`
   display: flex;
   align-items: center;
   gap: 3rem;
   margin: 3rem 0;

   @media (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
   }

   &.reverse {
      flex-direction: row-reverse;

      @media (max-width: 768px) {
         flex-direction: column;
      }
   }
`

export const ContentText = styled.div`
   flex: 1;

   h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 1rem;
   }

   p {
      color: #64748b;
      line-height: 1.7;
      margin-bottom: 1rem;
   }
`

export const ContentImage = styled.div`
   flex: 1;
   position: relative;
   border-radius: 15px;
   overflow: hidden;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

   img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      transition: transform 0.3s ease;
   }

   &:hover img {
      transform: scale(1.05);
   }
`

export const BeforeAfterSlider = styled.div`
   position: absolute;
   top: 0;
   bottom: 0;
   width: 4px;
   background: white;
   cursor: ew-resize;
   z-index: 10;

   &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
   }

   &::after {
      content: '⟷';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px;
      color: #ff6b6b;
      font-weight: bold;
   }
`

export const ProcessTimeline = styled.div`
   position: relative;
   margin: 3rem 0;

   &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(to bottom, #ff6b6b, #ee5a6f);
      transform: translateX(-50%);

      @media (max-width: 768px) {
         left: 2rem;
      }
   }
`

export const ProcessStep = styled(motion.div)`
   display: flex;
   align-items: center;
   margin-bottom: 3rem;
   position: relative;

   @media (max-width: 768px) {
      margin-left: 2rem;
   }

   &:nth-child(even) {
      flex-direction: row-reverse;

      @media (max-width: 768px) {
         flex-direction: row;
      }
   }
`

export const ProcessContent = styled.div`
   flex: 1;
   background: white;
   padding: 2rem;
   border-radius: 15px;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   margin: 0 3rem;

   @media (max-width: 768px) {
      margin: 0 0 0 3rem;
   }

   h4 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 1rem;
   }

   p {
      color: #64748b;
      line-height: 1.6;
   }
`

export const ProcessImage = styled.div`
   flex: 1;
   margin: 0 3rem;

   @media (max-width: 768px) {
      display: none;
   }

   img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   }
`

// 🚀 디자인 개선을 위한 새로운 컴포넌트들

// 1단계: 여백 최적화 및 컴팩트 그리드
export const CompactSection = styled.section`
   padding: 4rem 0; // 6rem에서 4rem으로 감소 (33% 절약)
`

export const CompactGrid = styled.div`
   display: grid;
   grid-template-columns: ${(props) => (props.columns === 4 ? 'repeat(4, 1fr)' : props.columns === 3 ? 'repeat(3, 1fr)' : props.columns === 2 ? 'repeat(2, 1fr)' : '1fr')};
   gap: 1.5rem; // 2rem에서 1.5rem으로 감소

   @media (max-width: 968px) {
      grid-template-columns: ${(props) => (props.columns === 4 ? 'repeat(2, 1fr)' : props.columns === 3 ? 'repeat(2, 1fr)' : '1fr')};
      gap: 1rem;
   }

   @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1rem;
   }
`

// 2단계: 통계 및 숫자 섹션
export const StatisticsSection = styled.section`
   padding: 3rem 0;
   background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`

export const StatisticsGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   gap: 2rem;
   text-align: center;

   @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
   }

   @media (max-width: 480px) {
      grid-template-columns: 1fr;
   }
`

export const StatNumber = styled.div`
   font-size: 3rem;
   font-weight: 900;
   background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-clip: text;
   line-height: 1;

   @media (max-width: 768px) {
      font-size: 2.5rem;
   }
`

export const StatLabel = styled.div`
   font-size: 1rem;
   color: #64748b;
   margin-top: 0.5rem;
   font-weight: 500;

   @media (max-width: 768px) {
      font-size: 0.9rem;
   }
`

export const StatCard = styled(motion.div)`
   background: white;
   border-radius: 15px;
   padding: 2rem 1rem;
   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;
   transition: all 0.3s ease;

   &:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
   }
`

// 소프트 그라디언트 블롭(장식용)
export const AccentBlob = styled.div`
   position: absolute;
   inset: 0;
   pointer-events: none;
   z-index: 0;

   &::before {
      content: '';
      position: absolute;
      width: 420px;
      height: 420px;
      border-radius: 50%;
      filter: blur(60px);
      opacity: 0.22;
      ${(props) => (props.align === 'right' ? 'right:-140px;' : 'left:-140px;')}
      top: -100px;
      background: radial-gradient(closest-side, #ff6b6b 0%, transparent 70%);
   }
`

// 카드 상단의 작은 라벨
export const Kicker = styled.span`
   display: inline-flex;
   align-items: center;
   gap: 0.5rem;
   padding: 0.35rem 0.75rem;
   font-size: 0.8rem;
   font-weight: 700;
   letter-spacing: 0.02em;
   border-radius: 999px;
   color: #be123c;
   background: linear-gradient(135deg, #fee2e2 0%, #ffe4e6 100%);
   border: 1px solid #fecaca;
`

// 작은 칩 리스트
export const ChipList = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 0.5rem;
   margin-top: 1rem;
`
export const Chip = styled.span`
   display: inline-flex;
   align-items: center;
   gap: 0.4rem;
   padding: 0.35rem 0.6rem;
   font-size: 0.8rem;
   font-weight: 600;
   color: #334155;
   border-radius: 999px;
   background: #f1f5f9;
   border: 1px solid #e2e8f0;
`

export const ShineWrapper = styled.div`
   position: relative;
   border-radius: 20px;
   overflow: hidden;
   box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);

   /* 🔥 hover 되면 내부 ShineLayer가 왼쪽→오른쪽으로 슬라이드 */
   &:hover .shine-layer {
      transform: translateX(120%);
   }
`

export const ShineLayer = styled.div`
   position: absolute;
   inset: 0;
   pointer-events: none;
   z-index: 1;
   background: linear-gradient(75deg, transparent 0%, rgba(255, 255, 255, 0.18) 35%, transparent 65%);
   transform: translateX(-120%);
   transition: transform 0.7s ease;
`

// 이미지 위로 지나가는 샤인 레이어
export const Shine = styled.div`
   position: absolute;
   inset: 0;
   pointer-events: none;
   z-index: 1;
   background: linear-gradient(75deg, transparent 0%, rgba(255, 255, 255, 0.18) 35%, transparent 65%);
   transform: translateX(-120%);
   transition: transform 0.7s ease;
`

export const EdgeGroup = styled.div`
   position: relative;
   margin-bottom: 0.75rem;
`

export const EdgeKicker = styled(Kicker)`
   margin-bottom: 1.2rem;
   @media (max-width: 968px) {
      margin-bottom: 1rem;
   }
`

/* 아이콘+타이틀 칩을 유리카드처럼 만들어 이미지 가장자리로 당김 */
export const TitleEdge = styled.div`
   display: flex;
   align-items: center;
   gap: 0.75rem;
   padding: 1.5rem;
   background: rgba(255, 255, 255, 0.85);
   border: 1px solid #ffe1e1;
   border-radius: 14px;
   backdrop-filter: blur(8px);
   box-shadow: 0 8px 20px rgba(238, 90, 111, 0.15);

   h4 {
      margin: 0;
      /* 데스크톱 최대 24px, 모바일 최소 16px로 유동 */
      font-size: clamp(16px, 2.4vw, 24px);
      line-height: 1.2;
      color: #0f172a;
   }

   @media (max-width: 968px) {
      transform: none; /* 모바일에선 안전하게 해제 */
      gap: 0.6rem;
      padding: 0.5rem 0.8rem;
   }

   @media (max-width: 480px) {
      gap: 0.5rem;
      padding: 0.45rem 0.7rem;
   }
`

// 3단계: 지그재그 레이아웃
export const ZigzagSection = styled.section`
   padding: 4rem 0;
`

export const ZigzagLayout = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 3rem;
   align-items: center;
   margin-bottom: 3rem;

   &:nth-child(even) {
      direction: rtl;

      > * {
         direction: ltr;
      }
   }

   @media (max-width: 968px) {
      grid-template-columns: 1fr;
      direction: ltr;
      gap: 2rem;

      &:nth-child(even) {
         direction: ltr;
      }
   }
`

export const ZigzagContent = styled.div`
   h3 {
      font-size: 1.75rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 1rem;
   }

   p {
      color: #64748b;
      line-height: 1.7;
      margin-bottom: 1.5rem;
   }

   ul {
      list-style: none;
      padding: 0;

      li {
         display: flex;
         align-items: center;
         color: #475569;
         margin-bottom: 0.75rem;

         &::before {
            content: '✓';
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            border-radius: 50%;
            font-size: 0.75rem;
            font-weight: bold;
            margin-right: 0.75rem;
            flex-shrink: 0;
         }
      }
   }
`

export const ZigzagImage = styled.div`
   position: relative;
   border-radius: 20px;
   overflow: hidden;
   box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);

   img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      transition: transform 0.3s ease;
   }

   &:hover img {
      transform: scale(1.05);
   }
`

// 4단계: 정보 계층화
export const InfoTiers = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;

   .tier-primary {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1e293b;
      display: flex;
      align-items: center;
      gap: 0.75rem;

      .tier-icon {
         width: 40px;
         height: 40px;
         border-radius: 10px;
         background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
         display: flex;
         align-items: center;
         justify-content: center;
         color: white;
         font-size: 1.2rem;
      }
   }

   .tier-secondary {
      font-size: 1.1rem;
      color: #475569;
      margin-left: 3.25rem;
      font-weight: 500;
   }

   .tier-detail {
      font-size: 0.95rem;
      color: #64748b;
      margin-left: 3.25rem;
      line-height: 1.6;
   }
`

// 향상된 타임라인 컴포넌트
export const EnhancedTimeline = styled.div`
   position: relative;
   margin: 3rem 0;

   &::before {
      content: '';
      position: absolute;
      left: 2rem;
      top: 0;
      bottom: 0;
      width: 3px;
      background: linear-gradient(to bottom, #ff6b6b, #ee5a6f);
      border-radius: 2px;

      @media (max-width: 768px) {
         left: 1rem;
      }
   }
`

export const TimelineItem = styled(motion.div)`
   position: relative;
   margin-bottom: 2rem;
   margin-left: 5rem;

   @media (max-width: 768px) {
      margin-left: 3rem;
   }

   &::before {
      content: '';
      position: absolute;
      left: -4rem;
      top: 0.5rem;
      width: 20px;
      height: 20px;
      background: white;
      border: 4px solid #ff6b6b;
      border-radius: 50%;

      @media (max-width: 768px) {
         left: -2.5rem;
      }
   }
`

export const TimelineContent = styled.div`
   background: white;
   padding: 1.5rem 2rem;
   border-radius: 15px;
   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
   border: 1px solid #e2e8f0;

   h4 {
      font-size: 1.2rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 0.75rem;
   }

   p {
      color: #64748b;
      line-height: 1.6;
      margin: 0;
   }
`

// 컴팩트 카드 스타일
export const CompactCard = styled(motion.div)`
   background: white;
   border-radius: 12px;
   padding: 1.5rem;
   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
   border: 1px solid #e2e8f0;
   transition: all 0.3s ease;

   &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
   }
`

// 냉난방기 세척서비스 관리사 페이지 전용 스타일 (실기시험만 시행 알림)
export const ExamNotice = styled.div`
   background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
   border: 2px solid #f59e0b;
   border-radius: 15px;
   padding: 1.5rem;
   margin-bottom: 3rem;
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;
`

export const NoticeText = styled.div`
   color: #92400e;
   font-size: 1.1rem;
   font-weight: 600;
`

/* 유리카드 형태의 스토리 카드 */
export const StoryCard = styled(motion.div)`
   position: relative;
   border-radius: 20px;
   padding: 1.5rem 1.5rem 1.25rem;
   background: rgba(255, 255, 255, 0.75);
   border: 1px solid #ffe1e1;
   backdrop-filter: blur(8px);
   box-shadow: 0 20px 50px rgba(238, 90, 111, 0.12);
   overflow: hidden;

   &:before {
      content: '';
      position: absolute;
      inset: -30%;
      background: radial-gradient(closest-side, rgba(255, 107, 107, 0.12), transparent 70%), radial-gradient(closest-side, rgba(255, 184, 108, 0.12), transparent 70%);
      transform: rotate(8deg);
      z-index: 0;
   }
`

export const StoryHeader = styled.div`
   position: relative;
   z-index: 1;
   display: flex;
   align-items: center;
   gap: 0.75rem;
   margin-bottom: 0.5rem;
`

export const StoryAvatar = styled.div`
   width: 44px;
   height: 44px;
   border-radius: 50%;
   flex-shrink: 0;
   background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: 800;
   letter-spacing: 0.02em;
   border: 3px solid #fff;
   box-shadow: 0 6px 16px rgba(238, 90, 111, 0.25);
   @media (max-width: 768px) {
      width: 40px;
      height: 40px;
   }
`

export const StoryName = styled.div`
   display: flex;
   flex-direction: column;
   strong {
      color: #0f172a;
      font-size: 1.1rem;
      line-height: 1.1;
   }
   span {
      color: #ef4444;
      font-weight: 700;
      font-size: 0.8rem;
   }
`

export const Quote = styled.blockquote`
   display: flex;
   position: relative;
   z-index: 1;
   margin: 0.75rem 0 1rem;
   color: #334155;
   line-height: 1.7;
   padding-left: 2.25rem;
   &:before {
      content: '“';
      position: absolute;
      left: 0.25rem;
      top: -0.25rem;
      font-size: 2rem;
      color: #fb7185;
      font-weight: 900;
      opacity: 0.6;
   }
`

export const BulletList = styled.ul`
   position: relative;
   z-index: 1;
   list-style: none;
   padding: 0;
   margin: 0.5rem 0 0;
   li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #475569;
      padding: 0.45rem 0.6rem;
      border-radius: 10px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      margin-bottom: 0.5rem;
      &:before {
         content: '✓';
         display: inline-flex;
         align-items: center;
         justify-content: center;
         width: 18px;
         height: 18px;
         border-radius: 50%;
         background: linear-gradient(135deg, #10b981 0%, #059669 100%);
         color: #fff;
         font-size: 0.75rem;
      }
   }
`

export const StatPill = styled.span`
   position: relative;
   z-index: 1;
   display: inline-flex;
   align-items: center;
   gap: 0.4rem;
   padding: 0.4rem 0.65rem;
   border-radius: 999px;
   font-size: 0.8rem;
   font-weight: 700;
   color: #fff;
   background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
   box-shadow: 0 8px 18px rgba(238, 90, 111, 0.25);
   border: 1px solid rgba(255, 255, 255, 0.4);
`

export const StatRow = styled.div`
   position: relative;
   z-index: 1;
   display: flex;
   flex-wrap: wrap;
   gap: 0.5rem;
   margin-top: 0.5rem;
`

// 섹션 래퍼
export const PartnersSection = styled.section`
   padding: 4rem 0;
`

/* 이미지 래퍼: 기존 ShineWrapper가 있으면 그대로 사용, 없으면 간단 버전 */
export const StoryImageWrap = styled(motion.div)`
   position: relative;
   border-radius: 20px;
   overflow: hidden;
   box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
   .shine-layer {
      transform: translateX(-120%);
      transition: transform 0.7s ease;
   }
   &:hover .shine-layer {
      transform: translateX(120%);
   }
`

export const OneLineMarquee = styled.div`
   --gap: clamp(0.6rem, 2vw, 1.25rem);
   --duration: ${(p) => p.$duration || 26}s;

   position: relative;
   display: flex; /* 트랙 2개를 가로로 */
   overflow: hidden;
   padding: 1rem 0;

   /* 양끝 페이드 */
   mask-image: linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%);
   -webkit-mask-image: linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%);

   &:hover .marquee-track {
      animation-play-state: paused;
   }

   @media (prefers-reduced-motion: reduce) {
      & * {
         animation: none !important;
      }
   }
`

export const MarqueeContent = styled.ul`
   list-style: none;
   display: flex;
   align-items: center;
   gap: var(--gap);
   margin: 0;
   padding: 0;

   /* 핵심 1: 트랙이 콘텐츠 폭만큼만 */
   width: max-content;
   flex: 0 0 auto;

   /* 핵심 2: 시접 간격 동일하게(반쪽 갭을 양끝에) */
   padding-inline: calc(var(--gap) / 2);

   /* 끊김 없는 루프 */
   animation: ${scrollX} var(--duration) linear infinite;
   will-change: transform;
`

/* 아이템(로고+라벨) */
export const PartnerChip = styled.li`
   display: inline-flex;
   align-items: center;
   gap: 0.6rem;
   padding: 0.65rem 0.9rem;
   border-radius: 14px;
   background: white;
   border: 1px solid #e2e8f0;
   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
   white-space: nowrap;
`

export const PartnerLogoImg = styled.img`
   height: 150px;
   width: auto;
   object-fit: contain;
   display: block;
   filter: grayscale(10%);
   opacity: 0.95;

   @media (max-width: 768px) {
      height: 24px;
   }
`
