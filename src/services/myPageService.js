// 마이페이지 관련 목업 데이터 및 API 함수

// 사용자의 신청 내역 목업 데이터
const mockUserApplications = {
   user001: [
      { id: 'app001', type: '교육', name: '생활가전 기본 유지보수', date: '2024-07-15', status: '승인' },
      { id: 'app002', type: '시험', name: '생활가전 유지보수사 2급', date: '2024-07-20', status: '대기' },
   ],
   admin001: [], // 관리자는 신청 내역 없음 (예시)
}

// 사용자의 자격증 목업 데이터
const mockUserCertificates = {
   user001: [{ id: 'cert001', name: '생활가전 유지보수사 1급', issueDate: '2023-12-01' }],
   admin001: [],
}

// 사용자의 시험 결과 목업 데이터
const mockUserExamResults = {
   user001: [
      { id: 'exam001', name: '생활가전 유지보수사 2급', date: '2024-05-10', result: '합격' },
      { id: 'exam003', name: '에어컨 전문가 인증', date: '2024-06-20', result: '불합격' },
   ],
   admin001: [],
}

// 목업: 사용자 신청 내역 조회
export const getUserApplications = async (userId) => {
   console.log(`Mock getUserApplications request for userId: ${userId}`)
   await new Promise((resolve) => setTimeout(resolve, 300)) // 0.3초 지연
   return mockUserApplications[userId] || []
}

// 목업: 사용자 자격증 조회
export const getUserCertificates = async (userId) => {
   console.log(`Mock getUserCertificates request for userId: ${userId}`)
   await new Promise((resolve) => setTimeout(resolve, 400)) // 0.4초 지연
   return mockUserCertificates[userId] || []
}

// 목업: 사용자 시험 결과 조회
export const getUserExamResults = async (userId) => {
   console.log(`Mock getUserExamResults request for userId: ${userId}`)
   await new Promise((resolve) => setTimeout(resolve, 500)) // 0.5초 지연
   return mockUserExamResults[userId] || []
}
