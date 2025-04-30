// import { globalAxios } from '@/libs/axios';

// 목업 Q&A 데이터
const mockQuestions = [
   {
      id: 101,
      authorName: '김민수',
      title: '자격증 발급 절차가 궁금합니다.',
      content: '시험 합격 후 자격증은 언제, 어떻게 받을 수 있나요? 우편으로 오나요?',
      createdAt: '2024-07-27T11:20:00Z',
      isAnswered: true,
      answer: {
         content: '안녕하세요, 김민수님. 합격 후 자격증은 신청 시 입력하신 주소로 등기우편 발송되며, 보통 2주 정도 소요됩니다. 마이페이지에서도 발급 상태를 확인하실 수 있습니다.',
         answeredAt: '2024-07-27T15:00:00Z',
         adminName: '자격증 관리팀',
      },
      isPrivate: false,
      viewCount: 55,
   },
   {
      id: 102,
      authorName: '이하나',
      title: '교육 신청 시 필요한 서류가 있나요?',
      content: '생활가전 유지보수 교육을 신청하려고 하는데, 별도로 제출해야 하는 서류가 있는지 궁금합니다.',
      createdAt: '2024-07-26T09:15:00Z',
      isAnswered: false,
      isPrivate: false,
      viewCount: 32,
   },
   {
      id: 103,
      authorName: '박서준',
      title: '비밀글 테스트입니다.',
      content: '이 글은 작성자와 관리자만 볼 수 있어야 합니다.',
      createdAt: '2024-07-25T16:40:00Z',
      isAnswered: false,
      isPrivate: true, // 비밀글
      viewCount: 2,
   },
]

// 목업 Q&A 목록 조회 함수
export const getQuestions = async (page = 1, limit = 10) => {
   console.log(`Mock getQuestions request: page=${page}, limit=${limit}`)
   // 실제 API 호출 (+ 검색, 필터링 등)
   await new Promise((resolve) => setTimeout(resolve, 500))

   const startIndex = (page - 1) * limit
   const endIndex = page * limit
   const paginatedQuestions = mockQuestions.slice(startIndex, endIndex)

   return {
      questions: paginatedQuestions,
      totalCount: mockQuestions.length,
      currentPage: page,
      totalPages: Math.ceil(mockQuestions.length / limit),
   }
}

// 목업 Q&A 상세 조회 함수
export const getQuestionById = async (id) => {
   console.log(`Mock getQuestionById request: id=${id}`)
   await new Promise((resolve) => setTimeout(resolve, 300))

   const question = mockQuestions.find((q) => q.id === parseInt(id, 10))

   if (question) {
      // TODO: 비밀글인 경우 접근 권한 확인 로직 필요 (여기서는 목업이므로 생략)
      if (question.isPrivate) {
         console.warn(`Accessing private question (mock): ${id}`)
         // 실제라면 여기서 권한 체크 후 에러 throw 또는 데이터 반환
      }
      question.viewCount = (question.viewCount || 0) + 1
      return question
   }

   throw new Error('질문을 찾을 수 없습니다.')
}

// 목업 질문 등록 함수
export const createQuestion = async (payload) => {
   console.log('Mock createQuestion request:', payload)
   await new Promise((resolve) => setTimeout(resolve, 700))

   const newQuestion = {
      id: Date.now(), // 임시 ID
      ...payload,
      createdAt: new Date().toISOString(),
      isAnswered: false,
      viewCount: 0,
   }
   mockQuestions.unshift(newQuestion) // 배열 맨 앞에 추가

   return newQuestion
}
