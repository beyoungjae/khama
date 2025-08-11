import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { FaCertificate, FaSearch, FaEye, FaDownload, FaCheck, FaClock, FaUsers, FaFileAlt } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { useState } from 'react'
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
  HeroDescription,
  Section,
  SectionHeader,
  SectionTitle,
  Card
} from '../../../components/common/SharedStyles'

// 목업 자격증 데이터
const mockCertificatesData = [
   { id: 'cert001', certName: '생활가전 유지보수사 1급', applicantName: '홍길동', issueDate: '2023-12-01', status: '발급완료' },
   { id: 'cert002', certName: '생활가전 유지보수사 2급', applicantName: '김철수', issueDate: '-', status: '발급대기' },
   { id: 'cert003', certName: '에어컨 전문가 인증', applicantName: '이영희', issueDate: '2024-03-15', status: '발급완료' },
   { id: 'cert004', certName: '생활가전 유지보수사 2급', applicantName: '박민준', issueDate: '-', status: '발급대기' },
   { id: 'cert005', certName: '스마트홈 설치 전문가', applicantName: '최다은', issueDate: '2024-06-01', status: '발급완료' },
]

// 발급 상태 옵션 (사용하지 않으므로 제거)

// 목업 발급 처리 함수
const issueCertificateMock = async (certId) => {
   console.log(`Issuing certificate ${certId} (mock)`)
   await new Promise((res) => setTimeout(res, 500))
   // 실제 API 호출 후 성공 여부 반환
   return true
}

export function CertificationManagementPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div
   
   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   
   const [certificates, setCertificates] = useState(mockCertificatesData)
   const [currentPage, setCurrentPage] = useState(1)
   const certsPerPage = 5

   // 페이지네이션 계산
   const totalPages = Math.ceil(certificates.length / certsPerPage)
   const indexOfLastCert = currentPage * certsPerPage
   const indexOfFirstCert = indexOfLastCert - certsPerPage
   const currentCerts = certificates.slice(indexOfFirstCert, indexOfLastCert)

   const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber)
   }

   // 자격증 발급 처리 핸들러 (목업)
   const handleIssueCertificate = async (certId) => {
      const success = await issueCertificateMock(certId)
      if (success) {
         setCertificates((prevCerts) =>
            prevCerts.map((cert) =>
               cert.id === certId
                  ? { ...cert, status: '발급완료', issueDate: new Date().toISOString().split('T')[0] } // 오늘 날짜로 발급
                  : cert
            )
         )
         alert('자격증이 발급 처리되었습니다. (목업)')
      } else {
         alert('자격증 발급 처리 중 오류 발생 (목업)')
      }
   }

   return (
      <PageWrapper>
         <ModernHeroSection gradient="linear-gradient(135deg, #11998e 0%, #38ef7d 100%)" ref={heroRef}>
            <HeroBackground />
            <HeroContainer>
               <motion.div
                  initial="hidden"
                  animate={heroInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaCertificate /> 자격증 관리
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     <GradientText>자격증</GradientText> 관리
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "자격증 발급 현황을 체계적으로 관리하세요"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     모든 자격증 발급 요청을 한눈에 확인하고 효율적으로 처리하세요
                  </HeroDescription>
               </motion.div>
            </HeroContainer>
         </ModernHeroSection>

         <Container>
            <Section ref={contentRef}>
               <SectionHeader>
                  <SectionTitle
                     as={motion.h2}
                     initial="hidden"
                     animate={contentInView ? "visible" : "hidden"}
                     variants={fadeInUp}
                  >
                     <FaFileAlt /> 자격증 발급 현황
                  </SectionTitle>
               </SectionHeader>
               
               <FilterCard
                  as={motion.div}
                  initial="hidden"
                  animate={contentInView ? "visible" : "hidden"}
                  variants={fadeInUp}
               >
                  <FilterSection>
                     <SearchInput placeholder="자격증명 또는 수급자명 검색" />
                     <FilterSelect>
                        <option value="all">전체</option>
                        <option value="issued">발급완료</option>
                        <option value="pending">발급대기</option>
                     </FilterSelect>
                     <FilterButton>
                        <FaSearch /> 검색
                     </FilterButton>
                     <BatchButton disabled>
                        <FaUsers /> 선택 항목 발급 처리
                     </BatchButton>
                  </FilterSection>
               </FilterCard>

               <CertificateCard
                  as={motion.div}
                  initial="hidden"
                  animate={contentInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  <TableWrapper as={motion.div} variants={fadeInUp}>
                     <CertificateTable>
                        <thead>
                           <tr>
                              <th>
                                 <CheckboxWrapper>
                                    <input type="checkbox" />
                                 </CheckboxWrapper>
                              </th>
                              <th>자격증명</th>
                              <th>수급자명</th>
                              <th>발급일</th>
                              <th>상태</th>
                              <th>관리</th>
                           </tr>
                        </thead>
                        <tbody>
                           {currentCerts.map((cert) => {
                              const isIssued = cert.status === '발급완료'
                              return (
                                 <tr key={cert.id}>
                                    <td>
                                       <CheckboxWrapper>
                                          <input type="checkbox" />
                                       </CheckboxWrapper>
                                    </td>
                                    <td>{cert.certName}</td>
                                    <td>{cert.applicantName}</td>
                                    <td>{cert.issueDate}</td>
                                    <td>
                                       <StatusBadge status={cert.status}>
                                          {cert.status === '발급완료' ? <FaCheck /> : <FaClock />}
                                          {cert.status}
                                       </StatusBadge>
                                    </td>
                                    <td>
                                       <ActionButtons>
                                          {!isIssued && (
                                             <ActionButton status="approve" onClick={() => handleIssueCertificate(cert.id)}>
                                                <FaCheck />
                                             </ActionButton>
                                          )}
                                          <ActionButton>
                                             <FaEye />
                                          </ActionButton>
                                          <ActionButton status="download" disabled>
                                             <FaDownload />
                                          </ActionButton>
                                       </ActionButtons>
                                    </td>
                                 </tr>
                              )
                           })}
                        </tbody>
                     </CertificateTable>
                  </TableWrapper>
                  
                  {certificates.length === 0 && (
                     <PlaceholderContent as={motion.div} variants={fadeInUp}>
                        <FaCertificate size={48} />
                        <h3>자격증이 없습니다</h3>
                        <p>아직 발급 요청된 자격증이 없습니다.</p>
                     </PlaceholderContent>
                  )}
               </CertificateCard>
               
               {/* TODO: 페이지네이션 추가 */}
               {totalPages > 1 && (
                  <PaginationWrapper as={motion.div} variants={fadeInUp}>
                     <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                           <PageButton
                              key={page}
                              active={currentPage === page}
                              onClick={() => handlePageChange(page)}
                           >
                              {page}
                           </PageButton>
                        ))}
                     </div>
                  </PaginationWrapper>
               )}
            </Section>
         </Container>
      </PageWrapper>
   )
}

// CertificationManagementPage 전용 스타일 컴포넌트
const FilterCard = styled(Card)`
   padding: 1.5rem;
   margin-bottom: 2rem;
`

const FilterSection = styled.div`
   display: flex;
   gap: 1rem;
   align-items: center;
   flex-wrap: wrap;
   
   @media (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
   }
`

const SearchInput = styled.input`
   flex: 1;
   padding: 0.75rem 1rem;
   border: 2px solid #e2e8f0;
   border-radius: 12px;
   font-size: 0.9rem;
   transition: all 0.3s ease;
   
   &:focus {
      outline: none;
      border-color: #11998e;
      box-shadow: 0 0 0 3px rgba(17, 153, 142, 0.1);
   }
   
   &::placeholder {
      color: #94a3b8;
   }
`

const FilterSelect = styled.select`
   padding: 0.75rem 1rem;
   border: 2px solid #e2e8f0;
   border-radius: 12px;
   font-size: 0.9rem;
   background: white;
   cursor: pointer;
   transition: all 0.3s ease;
   
   &:focus {
      outline: none;
      border-color: #11998e;
      box-shadow: 0 0 0 3px rgba(17, 153, 142, 0.1);
   }
`

const FilterButton = styled.button`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   padding: 0.75rem 1.5rem;
   background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
   color: white;
   border: none;
   border-radius: 12px;
   font-size: 0.9rem;
   font-weight: 500;
   cursor: pointer;
   transition: all 0.3s ease;
   
   &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(17, 153, 142, 0.3);
   }
`

const BatchButton = styled.button`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   padding: 0.75rem 1.5rem;
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   color: white;
   border: none;
   border-radius: 12px;
   font-size: 0.9rem;
   font-weight: 500;
   cursor: pointer;
   transition: all 0.3s ease;
   margin-left: auto;
   
   &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
   }
   
   &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
   }
   
   @media (max-width: 768px) {
      margin-left: 0;
   }
`

const CertificateCard = styled(Card)`
   padding: 0;
   overflow: hidden;
`

const TableWrapper = styled.div`
   overflow-x: auto;
`

const CertificateTable = styled.table`
   width: 100%;
   border-collapse: collapse;
   
   th, td {
      padding: 1rem 1.5rem;
      text-align: left;
      border-bottom: 1px solid #e2e8f0;
   }
   
   th {
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      font-weight: 600;
      color: #1e293b;
      font-size: 0.9rem;
   }
   
   td {
      font-size: 0.9rem;
      color: #64748b;
   }
   
   tbody tr:hover {
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
   }
   
   th:first-child,
   td:first-child,
   th:nth-child(4),
   td:nth-child(4),
   th:nth-child(5),
   td:nth-child(5),
   th:last-child,
   td:last-child {
      text-align: center;
   }
`

const CheckboxWrapper = styled.div`
   display: flex;
   justify-content: center;
   
   input[type="checkbox"] {
      width: 16px;
      height: 16px;
      cursor: pointer;
   }
`

const StatusBadge = styled.span`
   display: inline-flex;
   align-items: center;
   gap: 0.5rem;
   padding: 0.5rem 1rem;
   border-radius: 20px;
   font-size: 0.8rem;
   font-weight: 600;
   background: ${({ status }) => {
      switch (status) {
         case '발급완료': return 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
         case '발급대기': return 'linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%)'
         default: return 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)'
      }
   }};
   color: white;
`

const ActionButtons = styled.div`
   display: flex;
   gap: 0.5rem;
   justify-content: center;
`

const ActionButton = styled.button`
   width: 32px;
   height: 32px;
   border: none;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   transition: all 0.3s ease;
   font-size: 0.9rem;
   
   background: ${({ status }) => {
      switch (status) {
         case 'approve': return 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
         case 'download': return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
         default: return 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)'
      }
   }};
   color: white;
   
   &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
   }
   
   &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
   }
`

const PlaceholderContent = styled.div`
   padding: 4rem 2rem;
   text-align: center;
   color: #94a3b8;
   
   svg {
      margin-bottom: 1rem;
      opacity: 0.5;
   }
   
   h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #64748b;
      margin-bottom: 0.5rem;
   }
   
   p {
      font-size: 0.95rem;
      line-height: 1.5;
   }
`

const PaginationWrapper = styled.div`
   margin-top: 2rem;
   display: flex;
   justify-content: center;
`

const PageButton = styled.button`
   width: 40px;
   height: 40px;
   border: 2px solid ${({ active }) => active ? '#11998e' : '#e2e8f0'};
   background: ${({ active }) => active ? 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' : 'white'};
   color: ${({ active }) => active ? 'white' : '#64748b'};
   border-radius: 8px;
   font-weight: 500;
   cursor: pointer;
   transition: all 0.3s ease;
   
   &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(17, 153, 142, 0.2);
   }
`
