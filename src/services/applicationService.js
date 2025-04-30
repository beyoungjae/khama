// import { globalAxios } from '@/libs/axios';

// 목업 신청서 데이터 저장소 (임시)
let mockApplications = []

// 목업 신청서 등록 함수
export const submitApplication = async (payload) => {
   console.log('Mock submitApplication request:', payload)
   // 실제 API 호출 예시
   // const response = await globalAxios.post('/applications', payload);
   // return response.data;

   await new Promise((resolve) => setTimeout(resolve, 1000)) // 1초 지연

   // TODO: 로그인된 사용자 ID 가져오기
   const userId = 'user-123' // 임시 사용자 ID

   const newApplication = {
      id: Date.now(), // 임시 ID
      userId: userId,
      status: 'pending',
      createdAt: new Date().toISOString(),
      ...payload,
   }

   mockApplications.push(newApplication)
   console.log('Current Applications:', mockApplications)

   return { success: true, application: newApplication }
}

// 목업 사용자의 신청서 목록 조회 함수 (MyPage 등에서 사용)
export const getUserApplications = async (userId) => {
   console.log(`Mock getUserApplications request for user: ${userId}`)
   // 실제 API 호출 예시
   // const response = await globalAxios.get(`/users/${userId}/applications`);
   // return response.data;

   await new Promise((resolve) => setTimeout(resolve, 800))

   const userApps = mockApplications.filter((app) => app.userId === userId)
   return userApps
}
