// import { globalAxios } from '@/libs/axios'

// 목업 로그인 함수 (실제 API 연동 시 수정)
export const loginUser = async (payload) => {
   console.log('Mock login request:', payload)
   // 실제 API 호출 예시 (주석 처리)
   // const response = await globalAxios.post('/auth/login', payload);
   // return response.data;

   // 목업 응답 (성공)
   await new Promise((resolve) => setTimeout(resolve, 1000)) // 1초 지연

   // 관리자 계정 목업 추가
   if (payload.email === 'admin@khama.or.kr' && payload.password === 'adminpass') {
      return { success: true, user: { id: 'admin001', name: '관리자', email: payload.email, role: 'admin', phone: '010-0000-0000' } } // id 추가
   }

   if (payload.email === 'test@example.com' && payload.password === 'password') {
      // 실제로는 토큰 등을 반환해야 함
      return { success: true, user: { id: 'user001', name: '테스트 사용자', email: payload.email, role: 'user', phone: '010-1234-5678' } } // id 추가
   }

   // 목업 응답 (실패)
   throw new Error('이메일 또는 비밀번호가 잘못되었습니다.')
}

// 목업 회원가입 함수 (실제 API 연동 시 수정)
export const signupUser = async (payload) => {
   console.log('Mock signup request:', payload)
   // 실제 API 호출 예시 (주석 처리)
   // const response = await globalAxios.post('/auth/signup', payload);
   // return response.data;

   // 목업 응답
   await new Promise((resolve) => setTimeout(resolve, 1500)) // 1.5초 지연

   // 간단한 이메일 중복 체크 목업
   if (payload.email === 'existing@example.com') {
      throw new Error('이미 사용 중인 이메일입니다.')
   }

   return { success: true, message: '회원가입이 완료되었습니다.' }
}
