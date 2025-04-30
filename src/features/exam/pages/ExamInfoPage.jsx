import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'

// 다른 소개 페이지와 유사한 Framer Motion Variants
const sectionVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function ExamInfoPage() {
   return (
      <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={sectionVariants}>
         <HeroSection>
            <HeroOverlay />
            <HeroContent>
               <h1>자격시험 안내</h1>
               <p>생활가전 유지보수 전문가 자격 시험에 대한 정보를 확인하고 준비하세요.</p>
            </HeroContent>
         </HeroSection>
         <PageContainer>
            <Section variants={sectionVariants}>
               <SectionTitle>시험 개요</SectionTitle>
               <p>KHAMA에서 주관하는 생활가전 유지보수사 자격 시험은 관련 분야의 전문 지식과 실무 능력을 평가하여 자격을 부여하는 시험입니다. 본 시험을 통해 검증된 전문가는 소비자에게 신뢰 높은 서비스를 제공할 수 있습니다.</p>
               <ul>
                  <li>
                     <strong>주관 기관:</strong> (사)한국생활가전유지관리협회 (KHAMA)
                  </li>
                  <li>
                     <strong>시험 종류:</strong> 생활가전 유지보수사 (1급, 2급), 에어컨 전문가, 스마트홈 전문가 등
                  </li>
                  <li>
                     <strong>시행 주기:</strong> 연 2회 (상/하반기, 상세 일정 별도 공지)
                  </li>
               </ul>
            </Section>

            <Section variants={sectionVariants}>
               <SectionTitle>응시 자격</SectionTitle>
               <p>각 자격 시험별 응시 자격 요건은 다음과 같습니다. (세부 요건은 해당 시험 공고 참조)</p>
               <ListGrid>
                  <ListItem>
                     <h4>생활가전 유지보수사 2급</h4>
                     <p>학력, 경력 제한 없음</p>
                  </ListItem>
                  <ListItem>
                     <h4>생활가전 유지보수사 1급</h4>
                     <p>2급 자격 취득 후 실무 경력 X년 이상 또는 관련 학과 졸업자</p>
                  </ListItem>
                  <ListItem>
                     <h4>에어컨 전문가</h4>
                     <p>관련 교육 이수 또는 실무 경력 Y년 이상</p>
                  </ListItem>
                  <ListItem>
                     <h4>스마트홈 전문가</h4>
                     <p>관련 교육 이수 또는 정보통신/전기 분야 경력 Z년 이상</p>
                  </ListItem>
               </ListGrid>
            </Section>

            <Section variants={sectionVariants}>
               <SectionTitle>시험 과목 및 일정</SectionTitle>
               <p>주요 자격 시험의 과목 및 평가 방법은 다음과 같으며, 상세 일정은 공지사항을 통해 확인해주시기 바랍니다.</p>
               <StyledTable>
                  <thead>
                     <tr>
                        <th>자격명</th>
                        <th>평가 방식</th>
                        <th>주요 과목</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>생활가전 유지보수사 2급</td>
                        <td>필기 + 실기</td>
                        <td>가전제품 개론, 전기전자 기초, 안전 관리, 기본 분해/조립</td>
                     </tr>
                     <tr>
                        <td>생활가전 유지보수사 1급</td>
                        <td>필기 + 실기</td>
                        <td>고장 진단 및 수리, 부품 교체, 고객 응대, 심화 실무</td>
                     </tr>
                     <tr>
                        <td>에어컨 전문가</td>
                        <td>실기 중심</td>
                        <td>설치 표준, 냉매 취급, 고장 진단, 유지보수</td>
                     </tr>
                  </tbody>
               </StyledTable>
               <p style={{ marginTop: '1rem' }}>
                  * 차기 시험 일정: <strong>[202X년 X월 X일 (예정)]</strong> - 공지사항 참조
               </p>
            </Section>

            <Section variants={sectionVariants}>
               <SectionTitle>접수 방법</SectionTitle>
               <p>자격 시험 접수는 온라인 신청 페이지를 통해 진행됩니다. 접수 기간 내에 신청서를 작성하고 응시료를 납부해주시기 바랍니다.</p>
               <Button as={Link} to="/apply?type=exam" variant="primary" style={{ marginTop: '0.5rem' }}>
                  시험 접수 바로가기
               </Button>
            </Section>

            <Section variants={sectionVariants}>
               <SectionTitle>합격 기준</SectionTitle>
               <p>필기 시험과 실기 시험에서 각각 일정 점수 이상을 획득해야 최종 합격 처리됩니다.</p>
               <ul>
                  <li>
                     <strong>필기 시험:</strong> 과목당 40점 이상, 전 과목 평균 60점 이상
                  </li>
                  <li>
                     <strong>실기 시험:</strong> 60점 이상 (시험 종류별 세부 기준 상이)
                  </li>
               </ul>
            </Section>
         </PageContainer>
      </motion.div>
   )
}

// Hero 섹션 스타일 (AssociationPage, EducationPage 등과 유사하게)
const HeroSection = styled.section`
   position: relative;
   height: 400px; /* 높이 조절 */
   background: url('/images/exam-hero.jpg') no-repeat center center; /* 적절한 배경 이미지 경로 설정 필요 */
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
   background-color: rgba(74, 144, 226, 0.6); /* Secondary 색상 기반 오버레이 */
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

// Section, SectionTitle 등 공통 스타일 추가 (다른 페이지 참고)
const Section = styled(motion.section)`
   margin-bottom: ${({ theme }) => theme.spacing.xxl};
   padding: ${({ theme }) => theme.spacing.xl};
   background-color: #fff; // 배경색 추가
   border-radius: ${({ theme }) => theme.borderRadius};
   border: 1px solid ${({ theme }) => theme.colors.border};
   box-shadow: ${({ theme }) => theme.boxShadow};
`

const SectionTitle = styled.h2`
   font-size: ${({ theme }) => theme.fontSizes.h3}; // 크기 조정
   font-weight: 700;
   color: ${({ theme }) => theme.colors.primary};
   margin-bottom: ${({ theme }) => theme.spacing.lg};
   padding-bottom: ${({ theme }) => theme.spacing.sm};
   border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const ListGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   gap: ${({ theme }) => theme.spacing.lg};
   margin-top: ${({ theme }) => theme.spacing.lg};
`

const ListItem = styled.div`
   background-color: ${({ theme }) => theme.colors.backgroundLight};
   padding: ${({ theme }) => theme.spacing.md};
   border-radius: ${({ theme }) => theme.borderRadius};
   border: 1px solid ${({ theme }) => theme.colors.border};

   h4 {
      font-size: ${({ theme }) => theme.fontSizes.large};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.secondary};
      margin-bottom: ${({ theme }) => theme.spacing.sm};
   }

   p {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      color: ${({ theme }) => theme.colors.textSecondary};
      margin: 0;
   }
`

const StyledTable = styled.table`
   width: 100%;
   border-collapse: collapse;
   margin-top: ${({ theme }) => theme.spacing.lg};
   font-size: 0.95rem;

   th,
   td {
      border: 1px solid ${({ theme }) => theme.colors.border};
      padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
      text-align: left;
      vertical-align: top;
   }

   th {
      background-color: ${({ theme }) => theme.colors.backgroundLight};
      font-weight: 600;
   }

   tbody tr:nth-child(odd) {
      background-color: #fff; // 줄무늬 효과 (선택적)
   }
`
