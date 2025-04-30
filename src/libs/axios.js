import axios from 'axios'

export const globalAxios = axios.create({
   // baseURL: import.meta.env.VITE_API_URL, // 백엔드 API 주소 (.env 파일에 정의 필요)
   timeout: 5000, // 요청 타임아웃 5초
   headers: {
      'Content-Type': 'application/json',
   },
})

// 요청 인터셉터 (필요 시 추가)
globalAxios.interceptors.request.use(
   (config) => {
      // 요청 보내기 전에 수행할 로직 (예: 토큰 추가)
      // const token = localStorage.getItem('accessToken');
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`;
      // }
      return config
   },
   (error) => {
      return Promise.reject(error)
   }
)

// 응답 인터셉터 (필요 시 추가)
globalAxios.interceptors.response.use(
   (response) => {
      // 응답 데이터 가공
      return response
   },
   (error) => {
      // 오류 처리 로직 (예: 401 시 리프레시 토큰 요청 또는 로그아웃)
      return Promise.reject(error)
   }
)
