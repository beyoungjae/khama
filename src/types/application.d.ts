export interface Application {
   id?: string | number // 생성 시에는 없을 수 있음
   userId: string // 신청자 ID
   type: 'education' | 'exam' // 신청 종류: '교육' 또는 '시험'
   status?: 'pending' | 'approved' | 'rejected' // 상태 (생성 시에는 'pending')
   details: ApplicationDetails
   createdAt?: string
}

// 신청 종류에 따라 상세 내용 구조가 다를 수 있음 (예시)
export interface ApplicationDetails {
   // 공통 정보
   applicantName: string
   applicantPhone: string
   applicantEmail: string

   // 교육 신청 시 추가 정보
   courseName?: string // 희망 교육 과정
   preferredSchedule?: string // 희망 교육 시간대

   // 시험 신청 시 추가 정보
   examName?: string // 응시 시험명
   examSession?: string // 응시 회차

   // 기타 필요한 정보...
   motivation?: string // 지원 동기 등
}
