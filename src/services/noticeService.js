// import { globalAxios } from '@/libs/axios'; // 실제 API 연동 시 주석 해제

// 목업 공지사항 데이터
const mockNotices = [
   {
      id: 1,
      title: 'KHAMA 웹사이트 오픈 안내',
      content: '한국생활가전유지관리협회(KHAMA)의 새로운 웹사이트가 오픈되었습니다. 많은 이용 바랍니다.\n\n주요 기능:\n- 협회 소개\n- 교육 및 자격 시험 안내\n- 온라인 신청\n- 자격증 조회\n\n앞으로 더 나은 서비스를 제공하기 위해 노력하겠습니다.',
      createdAt: '2024-07-28T10:00:00Z',
      author: '관리자',
      viewCount: 150,
   },
   {
      id: 2,
      title: '2024년 하반기 정기 교육 일정 안내',
      content: '2024년 하반기 생활가전 유지보수 전문가 양성 과정 교육생을 모집합니다.\n\n- 교육 기간: 2024.09.01 ~ 2024.11.30\n- 신청 기간: 2024.08.01 ~ 2024.08.15\n- 상세 내용은 [교육안내] 메뉴를 참고해주세요.',
      createdAt: '2024-07-25T14:30:00Z',
      author: '교육팀',
      viewCount: 88,
   },
   {
      id: 3,
      title: '제 5회 자격 검정 시험 공고',
      content: '제 5회 생활가전 유지보수사 자격 검정 시험 일정을 공고합니다.\n\n- 시험일: 2024.10.15\n- 접수 기간: 2024.09.15 ~ 2024.09.30\n- 시험 장소: 추후 공지\n\n자세한 내용은 [자격시험안내] 메뉴를 확인하세요.',
      createdAt: '2024-07-20T09:00:00Z',
      author: '시험운영팀',
      viewCount: 210,
   },
   // 추가 목업 데이터...
]

// 목업 공지사항 목록 조회 함수
export const getNotices = async (page = 1, limit = 10) => {
   console.log(`Mock getNotices request: page=${page}, limit=${limit}`)
   // 실제 API 호출 예시
   // const response = await globalAxios.get('/notices', { params: { page, limit } });
   // return response.data;

   await new Promise((resolve) => setTimeout(resolve, 500)) // 0.5초 지연

   const startIndex = (page - 1) * limit
   const endIndex = page * limit
   const paginatedNotices = mockNotices.slice(startIndex, endIndex)

   return {
      notices: paginatedNotices,
      totalCount: mockNotices.length,
      currentPage: page,
      totalPages: Math.ceil(mockNotices.length / limit),
   }
}

// 목업 공지사항 상세 조회 함수
export const getNoticeById = async (id) => {
   console.log(`Mock getNoticeById request: id=${id}`)
   // 실제 API 호출 예시
   // const response = await globalAxios.get(`/notices/${id}`);
   // return response.data;

   await new Promise((resolve) => setTimeout(resolve, 300)) // 0.3초 지연

   const notice = mockNotices.find((n) => n.id === parseInt(id, 10))

   if (notice) {
      // 조회수 증가 (목업)
      notice.viewCount = (notice.viewCount || 0) + 1
      return notice
   }

   throw new Error('공지사항을 찾을 수 없습니다.')
}
