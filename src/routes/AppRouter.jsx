import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from '@/features/home/pages/HomePage'
import { AssociationPage } from '@/features/association/pages/AssociationPage'
import { GreetingPage } from '@/features/association/pages/GreetingPage'
import { LocationPage } from '@/features/association/pages/LocationPage'
import { EducationPage } from '@/features/education/pages/EducationPage'
import { EducationFacilitiesPage } from '@/features/education/pages/EducationFacilitiesPage'
import { EducationContentPage } from '@/features/education/pages/EducationContentPage'
import { EducationIntroPage } from '@/features/education/pages/EducationIntroPage'
import { ExamInfoPage } from '@/features/exam/pages/ExamInfoPage'
import { ExamSubjectsPage } from '@/features/exam/pages/ExamSubjectsPage'
import { ExamProgramsPage } from '@/features/exam/pages/ExamProgramsPage'
import { ProductCertPage } from '@/features/certification/pages/ProductCertPage'
import { ProductWelzonePage } from '@/features/certification/pages/ProductWelzonePage'
import { ApplianceCleaningPage } from '@/features/certification/pages/ApplianceCleaningPage'
import { AirConditionerServicePage } from '@/features/certification/pages/AirConditionerServicePage'
import { AirConditionerInstallationPage } from '@/features/certification/pages/AirConditionerInstallationPage'
import { VentilationSystemPage } from '@/features/certification/pages/VentilationSystemPage'
import { NoticePage } from '@/features/inquiry/pages/NoticePage'
import { NoticeDetailPage } from '@/features/inquiry/pages/NoticeDetailPage'
import { QnaPage } from '@/features/inquiry/pages/QnaPage'
import { QnaDetailPage } from '@/features/inquiry/pages/QnaDetailPage'
import { QnaWritePage } from '@/features/inquiry/pages/QnaWritePage'
import { ContactPage } from '@/features/inquiry/pages/ContactPage'
import { MyPage } from '@/features/myPage/pages/MyPage'
import { MyApplicationsPage } from '@/features/myPage/pages/MyApplicationsPage'
import { MyCertificatesPage } from '@/features/myPage/pages/MyCertificatesPage'
import { MyExamResultsPage } from '@/features/myPage/pages/MyExamResultsPage'
import { LoginPage } from '@/features/auth/pages/LoginPage'
import { SignupPage } from '@/features/auth/pages/SignupPage'
import { AdminLoginPage } from '@/features/admin/pages/AdminLoginPage'
import { AdminLayout } from '@/components/admin/AdminLayout'
import { AdminDashboardPage } from '@/features/admin/pages/AdminDashboardPage'
import { ApplicationFormPage } from '@/features/application/pages/ApplicationFormPage'
import { UserManagementPage } from '@/features/admin/pages/UserManagementPage'
import { ApplicationManagementPage } from '@/features/admin/pages/ApplicationManagementPage'
import { ExamManagementPage } from '@/features/admin/pages/ExamManagementPage'
import { CertificationManagementPage } from '@/features/admin/pages/CertificationManagementPage'
import { TermsPage } from '@/pages/TermsPage'
import { PrivacyPage } from '@/pages/PrivacyPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { useAuth } from '@/contexts/AuthContext'
import { ProtectedRoute } from '@/components/common/ProtectedRoute'
// TODO: 이용약관, 개인정보처리방침 페이지 추가 필요

// TODO: 인증 상태 관리 훅 (예: useAuth)
// const useAuth = () => ({ isAdmin: true }) // 임시 목업 훅 제거

// 관리자 전용 라우트 보호 컴포넌트 (목업)
function ProtectedAdminRoute({ children }) {
   const { isLoggedIn, isAdmin } = useAuth()
   // 실제 구현에서는 토큰 유효성 검사, API 호출 등을 통해 확인
   if (!isLoggedIn || !isAdmin) {
      // 로그인 페이지로 리디렉션, 현재 경로를 state로 전달하여 로그인 후 돌아올 수 있도록 함
      return <Navigate to="/admin/login" replace state={{ from: location }} />
   }
   return children
}

export function AppRouter() {
   return (
      <Routes>
         {/* 기본 사용자 페이지 */}
         <Route path="/" element={<HomePage />} />
         <Route path="/association" element={<AssociationPage />} />
         <Route path="/association/greeting" element={<GreetingPage />} />
         <Route path="/association/location" element={<LocationPage />} />
         <Route path="/education" element={<EducationPage />} />
         <Route path="/education/facilities" element={<EducationFacilitiesPage />} />
         <Route path="/education/content" element={<EducationContentPage />} />
         <Route path="/education/intro" element={<EducationIntroPage />} />
         <Route path="/exam-info" element={<ExamInfoPage />} />
         <Route path="/exam-info/subjects" element={<ExamSubjectsPage />} />
         <Route path="/exam-info/programs" element={<ExamProgramsPage />} />
         <Route path="/product-cert" element={<ProductCertPage />} />
         <Route path="/product-cert/welzone" element={<ProductWelzonePage />} />

         {/* 자격증 상세 페이지 */}
         <Route path="/certification/appliance-cleaning" element={<ApplianceCleaningPage />} />
         <Route path="/certification/air-conditioner-service" element={<AirConditionerServicePage />} />
         <Route path="/certification/air-conditioner-installation" element={<AirConditionerInstallationPage />} />
         <Route path="/certification/ventilation-system" element={<VentilationSystemPage />} />
         <Route path="/apply" element={<ApplicationFormPage />} />

         {/* 온라인 신청 */}
         {/* 고객센터 */}
         <Route path="/notice" element={<NoticePage />} />
         <Route path="/notice/:id" element={<NoticeDetailPage />} />
         <Route path="/qna" element={<QnaPage />} />
         <Route path="/qna/:id" element={<QnaDetailPage />} />
         <Route path="/qna/write" element={<QnaWritePage />} />
         <Route path="/contact" element={<ContactPage />} />

         {/* 마이페이지 - ProtectedRoute 적용 */}
         <Route
            path="/my-page"
            element={
               <ProtectedRoute>
                  <MyPage />
               </ProtectedRoute>
            }
         />
         <Route
            path="/my-page/applications"
            element={
               <ProtectedRoute>
                  <MyApplicationsPage />
               </ProtectedRoute>
            }
         />
         <Route
            path="/my-page/certificates"
            element={
               <ProtectedRoute>
                  <MyCertificatesPage />
               </ProtectedRoute>
            }
         />
         <Route
            path="/my-page/exam-results"
            element={
               <ProtectedRoute>
                  <MyExamResultsPage />
               </ProtectedRoute>
            }
         />

         {/* 인증 */}
         <Route path="/login" element={<LoginPage />} />
         <Route path="/signup" element={<SignupPage />} />

         {/* 관리자 */}
         <Route path="/admin/login" element={<AdminLoginPage />} />
         <Route
            path="/admin"
            element={
               <ProtectedAdminRoute>
                  <AdminLayout />
               </ProtectedAdminRoute>
            }
         >
            {/* /admin 경로로 접근 시 기본으로 대시보드 표시 */}
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboardPage />} />
            <Route path="users" element={<UserManagementPage />} />
            <Route path="applications" element={<ApplicationManagementPage />} />
            <Route path="exams" element={<ExamManagementPage />} />
            <Route path="certifications" element={<CertificationManagementPage />} />
            {/* TODO: 다른 관리자 페이지 라우트 추가 */}
            {/* <Route path="users" element={<UserManagementPage />} /> */}
            {/* <Route path="applications" element={<ApplicationManagementPage />} /> */}
            {/* ... */}
         </Route>

         {/* 기타 페이지 */}
         <Route path="/terms" element={<TermsPage />} />
         <Route path="/privacy" element={<PrivacyPage />} />

         {/* 404 Not Found 페이지 (가장 마지막에 위치) */}
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
   )
}
