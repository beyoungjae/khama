import styled from 'styled-components'
import { Input } from '@/components/common/Input'
import { Button } from '@/components/common/Button'
import { Select } from '@/components/common/Select'
import { useState } from 'react'
import { Pagination } from '@/components/common/Pagination'

// 목업 자격증 데이터
const mockCertificatesData = [
   { id: 'cert001', certName: '생활가전 유지보수사 1급', applicantName: '홍길동', issueDate: '2023-12-01', status: '발급완료' },
   { id: 'cert002', certName: '생활가전 유지보수사 2급', applicantName: '김철수', issueDate: '-', status: '발급대기' },
   { id: 'cert003', certName: '에어컨 전문가 인증', applicantName: '이영희', issueDate: '2024-03-15', status: '발급완료' },
   { id: 'cert004', certName: '생활가전 유지보수사 2급', applicantName: '박민준', issueDate: '-', status: '발급대기' },
   { id: 'cert005', certName: '스마트홈 설치 전문가', applicantName: '최다은', issueDate: '2024-06-01', status: '발급완료' },
]

// 발급 상태 옵션
const statusOptions = [
   { value: 'all', label: '전체' },
   { value: 'issued', label: '발급완료' },
   { value: 'pending', label: '발급대기' },
]

// 목업 발급 처리 함수
const issueCertificateMock = async (certId) => {
   console.log(`Issuing certificate ${certId} (mock)`)
   await new Promise((res) => setTimeout(res, 500))
   // 실제 API 호출 후 성공 여부 반환
   return true
}

export function CertificationManagementPage() {
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
      <Container>
         <Title>자격증 관리</Title>
         <FilterSection>
            <Input placeholder="자격증명 또는 수급자명 검색" style={{ flexGrow: 1 }} />
            <Select options={statusOptions} defaultValue="all" style={{ minWidth: '150px' }} />
            <Button variant="primary">검색</Button>
            {/* TODO: 일괄 발급 처리 버튼 (기능 미구현) */}
            <Button variant="secondary" style={{ marginLeft: 'auto' }} disabled>
               선택 항목 발급 처리
            </Button>
         </FilterSection>

         <CertificateTable>
            <colgroup>
               <col style={{ width: '5%' }} />
               <col style={{ width: 'auto' }} />
               <col style={{ width: '15%' }} />
               <col style={{ width: '15%' }} />
               <col style={{ width: '10%' }} />
               <col style={{ width: '15%' }} />
            </colgroup>
            <thead>
               <tr>
                  <Th>
                     <input type="checkbox" />
                  </Th>
                  <Th>자격증명</Th>
                  <Th>수급자명</Th>
                  <Th>발급일</Th>
                  <Th>상태</Th>
                  <Th>관리</Th>
               </tr>
            </thead>
            <tbody>
               {currentCerts.map((cert) => (
                  <tr key={cert.id}>
                     <Td>
                        <input type="checkbox" />
                     </Td>
                     <Td>{cert.certName}</Td>
                     <Td>{cert.applicantName}</Td>
                     <Td>{cert.issueDate}</Td>
                     <Td>
                        <StatusBadge status={cert.status}>{cert.status}</StatusBadge>
                     </Td>
                     <Td>
                        {cert.status === '발급대기' && (
                           <ActionButton variant="primary" size="small" onClick={() => handleIssueCertificate(cert.id)}>
                              발급
                           </ActionButton>
                        )}
                        {cert.status === '발급완료' && (
                           <ActionButton variant="ghost" size="small">
                              상세
                           </ActionButton>
                        )}
                        {/* TODO: PDF 다운로드 버튼 (기능 미구현) */}
                        <ActionButton variant="ghost" size="small" disabled>
                           PDF
                        </ActionButton>
                     </Td>
                  </tr>
               ))}
            </tbody>
         </CertificateTable>
         {/* 페이지네이션 추가 */}
         <PaginationContainer>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
         </PaginationContainer>
      </Container>
   )
}

// 다른 관리 페이지와 유사한 스타일 사용
const Container = styled.div``

const Title = styled.h1`
   font-size: ${({ theme }) => theme.fontSizes.h3};
   font-weight: 700;
   margin-bottom: 1.5rem;
`

const FilterSection = styled.div`
   display: flex;
   gap: 1rem;
   align-items: center;
   margin-bottom: 1.5rem;
   background-color: #fff;
   padding: 1.5rem;
   border-radius: ${({ theme }) => theme.borderRadius};
   border: 1px solid ${({ theme }) => theme.colors.border};

   > div {
      margin-bottom: 0;
   } // Input, Select 래퍼 마진 제거
`

const CertificateTable = styled.table`
   width: 100%;
   border-collapse: collapse;
   background-color: #fff;
   border-radius: ${({ theme }) => theme.borderRadius};
   border: 1px solid ${({ theme }) => theme.colors.border};
   overflow: hidden;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

   th,
   td {
      padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
      text-align: left;
      vertical-align: middle;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
   }

   th {
      background-color: ${({ theme }) => theme.colors.backgroundLight};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
      font-size: 0.9rem;
   }

   td {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.textSecondary};
   }

   tbody tr {
      &:last-child td {
         border-bottom: none;
      }
      &:hover {
         background-color: ${({ theme }) => theme.colors.primary}10;
      }
   }

   /* 체크박스, 발급일, 상태, 관리 열 가운데 정렬 */
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

const Th = styled.th``
const Td = styled.td``

const StatusBadge = styled.span`
   padding: 0.25rem 0.6rem;
   border-radius: ${({ theme }) => theme.borderRadius};
   font-size: 0.75rem;
   font-weight: 600;
   color: white;
   text-transform: uppercase;
   letter-spacing: 0.5px;
   background-color: ${({ theme, status }) => {
      switch (status) {
         case '발급완료':
            return theme.colors.success
         case '발급대기':
            return theme.colors.warning
         default:
            return theme.colors.textSecondary
      }
   }};
`

const ActionButton = styled(Button)`
   padding: 0.2rem 0.4rem;
   font-size: 0.8rem;
   margin-right: 0.3rem;
   /* color 속성 제거 -> Button variant에 따름 */

   &:hover {
      /* background-color 제거 -> Button variant에 따름 */
   }

   &:last-child {
      margin-right: 0;
   }
`

const PaginationContainer = styled.div`
   margin-top: 2rem;
   display: flex;
   justify-content: center;
`
