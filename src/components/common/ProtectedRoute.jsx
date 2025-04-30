import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'

export function ProtectedRoute({ children }) {
   const { isLoggedIn } = useAuth()
   const location = useLocation()

   if (!isLoggedIn) {
      // 로그인되지 않았으면 로그인 페이지로 리디렉션
      // 현재 경로를 state로 전달하여 로그인 후 돌아올 수 있도록 함
      return <Navigate to="/login" state={{ from: location }} replace />
   }

   // 로그인되었으면 자식 컴포넌트 렌더링
   return children
}
