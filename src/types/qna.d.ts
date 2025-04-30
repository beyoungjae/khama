export interface Question {
   id: string | number
   userId?: string // 작성자 ID (로그인 연동 시)
   authorName?: string // 작성자 이름 (익명 또는 로그인 사용자)
   title: string
   content: string
   createdAt: string
   isAnswered: boolean
   answer?: Answer
   isPrivate?: boolean // 비밀글 여부 (선택적)
   viewCount?: number
}

export interface Answer {
   content: string
   answeredAt: string
   adminName?: string // 답변 관리자 이름
}
