import styled from 'styled-components'
import { motion } from 'framer-motion'
import { exams } from '@/constants/exams' // 시험 데이터 임포트

const sectionVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function ExamSubjectsPage() {
   return (
      <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={sectionVariants}>
         <HeroSection>
            <HeroOverlay />
            <HeroContent>
               <h1>자격 검정 과목</h1>
               <p>KHAMA에서 시행하는 자격 시험의 평가 과목을 안내합니다.</p>
            </HeroContent>
         </HeroSection>
         <PageContainer>
            <Section variants={sectionVariants}>
               <SectionTitle>시험 과목 안내</SectionTitle>
               <ExamTable>
                  <thead>
                     <tr>
                        <th>자격증명</th>
                        <th>평가 구분</th>
                        <th>주요 평가 내용</th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* TODO: exams 데이터 구조 확인 후 실제 데이터 매핑 필요 */}
                     <tr>
                        <td rowSpan={2}>{exams[0].label} (1급)</td>
                        <td>필기</td>
                        <td>가전제품 고장 진단 심화, 회로 분석, 수리 기술, 안전 규정, 고객 응대</td>
                     </tr>
                     <tr>
                        <td>실기</td>
                        <td>복합 고장 진단 및 수리, 핵심 부품 교체, 성능 측정 및 평가</td>
                     </tr>
                     <tr>
                        <td rowSpan={2}>{exams[1].label} (2급)</td>
                        <td>필기</td>
                        <td>가전제품 개론, 전기/전자 기초, 유지보수 일반, 안전 관리</td>
                     </tr>
                     <tr>
                        <td>실기</td>
                        <td>기본 분해 및 조립, 간단한 부품 교체, 기초 측정 장비 사용</td>
                     </tr>
                     <tr>
                        <td>{exams[2].label}</td>
                        <td>실기 중심</td>
                        <td>에어컨 설치 표준 준수, 냉매 회수 및 충전, 진공 작업, 성능 점검</td>
                     </tr>
                     <tr>
                        <td>{exams[3].label}</td>
                        <td>필기 + 실기</td>
                        <td>스마트홈 기기 연동, 네트워크 설정, 플랫폼 활용, 문제 해결</td>
                     </tr>
                  </tbody>
               </ExamTable>
               <Note>* 상기 내용은 예시이며, 실제 시험 과목 및 평가 방법은 시험 공고 시 확정됩니다.</Note>
            </Section>
         </PageContainer>
      </motion.div>
   )
}

// 스타일 컴포넌트
const HeroSection = styled.section`
   position: relative;
   height: 350px;
   background: url('/images/exam-subject-hero.jpg') no-repeat center center; /* 배경 이미지 */
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
   background-color: rgba(245, 166, 35, 0.6); /* Accent 색상 오버레이 */
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
   max-width: 1000px;
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

const ExamTable = styled.table`
   width: 100%;
   border-collapse: collapse;
   margin-bottom: ${({ theme }) => theme.spacing.lg};
   font-size: 0.95rem;

   th,
   td {
      border: 1px solid ${({ theme }) => theme.colors.border};
      padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
      text-align: left;
      vertical-align: middle; /* 세로 중앙 정렬 */
   }

   th {
      background-color: ${({ theme }) => theme.colors.backgroundLight};
      font-weight: 600;
      text-align: center;
   }

   tbody tr:nth-child(odd) {
      background-color: #f8f9fa; /* 홀수 행 배경색 */
   }

   td[rowspan] {
      vertical-align: middle; /* 병합된 셀 내용 중앙 정렬 */
      text-align: center;
      font-weight: 500;
   }
`

const Note = styled.p`
   text-align: center;
   font-size: ${({ theme }) => theme.fontSizes.small};
   color: ${({ theme }) => theme.colors.textSecondary};
   margin: 0;
`
