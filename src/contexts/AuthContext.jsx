import React, { createContext, useState, useContext, useEffect } from 'react'
// import { loginUser as apiLoginUser, signupUser as apiSignupUser } from '@/services/authService'; // signupUser 임포트 주석처리
import { loginUser as apiLoginUser } from '@/services/authService' // 목업 서비스 임포트

// 사용자 정보 타입 (TypeScript 사용 시 별도 파일로 분리 가능)
// interface User { name: string; email: string; role: 'user' | 'admin'; }

// Context 생성
const AuthContext = createContext({
   isLoggedIn: false,
   user: null, // 타입: User | null
   isAdmin: false,
   setUser: () => {},
   login: async () => {
      /* 기본값 정의, 파라미터 없음 */ throw new Error('AuthContext not provided')
   },
   logout: () => {
      throw new Error('AuthContext not provided')
   },
   // signup: async (userData) => { throw new Error('AuthContext not provided'); } // 회원가입 함수 추가 가능
})

// Context Provider 컴포넌트
export function AuthProvider({ children }) {
   const [isLoggedIn, setIsLoggedIn] = useState(false)
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true) // 초기 로딩 상태 추가

   // 앱 로드 시 로컬 스토리지 등에서 로그인 정보 확인 (선택적)
   useEffect(() => {
      // 예시: 로컬 스토리지에서 토큰 확인 후 사용자 정보 가져오기
      const checkLoginStatus = async () => {
         const token = localStorage.getItem('authToken') // 임시 토큰 이름
         if (token) {
            try {
               // TODO: 실제 API로 토큰 유효성 검사 및 사용자 정보 요청
               // const userData = await verifyTokenAndGetUser(token);
               const mockUserData = { name: '저장된 사용자', email: 'stored@example.com', role: 'user' } // 목업 데이터
               setUser(mockUserData)
               setIsLoggedIn(true)
               console.log('Logged in from stored token (mock)')
            } catch (error) {
               console.error('Failed to verify token:', error)
               localStorage.removeItem('authToken') // 유효하지 않은 토큰 제거
            }
         }
         setLoading(false)
      }
      checkLoginStatus()
   }, [])

   // 로그인 함수
   const login = async (credentials) => {
      try {
         const response = await apiLoginUser(credentials) // 서비스 호출
         if (response.success && response.user) {
            setUser(response.user)
            setIsLoggedIn(true)
            // TODO: 실제 JWT 토큰 등을 로컬 스토리지에 저장
            localStorage.setItem('authToken', 'mock-token-12345') // 임시 토큰 저장
            console.log('Login successful:', response.user)
            return response.user // 로그인 성공 시 사용자 정보 반환
         }
      } catch (error) {
         console.error('Login failed in AuthContext:', error)
         // 에러를 다시 throw하여 컴포넌트에서 처리할 수 있도록 함
         throw error
      }
   }

   // 로그아웃 함수
   const logout = () => {
      setUser(null)
      setIsLoggedIn(false)
      localStorage.removeItem('authToken') // 토큰 제거
      console.log('Logout successful')
      // TODO: 필요 시 / 경로로 리디렉션 등 추가 작업
   }

   const value = {
      isLoggedIn,
      user,
      isAdmin: user?.role === 'admin', // 사용자 역할 기반 isAdmin 계산
      setUser,
      login,
      logout,
   }

   // 초기 로딩 중에는 아무것도 렌더링하지 않거나 로딩 스피너 표시
   if (loading) {
      return <div>Loading authentication...</div> // 간단한 로딩 표시
   }

   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Context 사용을 위한 커스텀 훅
export const useAuth = () => {
   return useContext(AuthContext)
}
