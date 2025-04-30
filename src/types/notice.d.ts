export interface Notice {
   id: string | number // UUID 또는 number
   title: string
   content: string
   createdAt: string // ISO 8601 형식의 날짜 문자열
   author?: string // 작성자 (선택적)
   viewCount?: number // 조회수 (선택적)
}
