import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { ModalProvider } from './contexts/ModalContext'

// 확장된 테마 정의
const theme = {
   colors: {
      primary: '#1A5A96', // 진한 파란색 (신뢰성, 전문성)
      secondary: '#4A90E2', // 밝은 파란색 (활기, 기술)
      accent: '#F5A623', // 주황색 (강조, 활력)
      background: '#FFFFFF', // 기본 배경
      backgroundLight: '#F8F9FA', // 약간 어두운 배경 (섹션 구분 등)
      text: '#343A40', // 기본 텍스트
      textSecondary: '#6C757D', // 보조 텍스트
      textLight: '#FFFFFF', // 밝은 텍스트 (버튼 등)
      border: '#DEE2E6', // 테두리 색상
      success: '#28A745',
      error: '#DC3545',
      warning: '#FFC107',
   },
   fonts: {
      body: `'Noto Sans KR', sans-serif`, // 본문 폰트 (가독성 좋은 한글 폰트)
      heading: `'Montserrat', sans-serif`, // 제목 폰트 (세련된 느낌)
   },
   fontSizes: {
      small: '0.875rem', // 14px
      medium: '1rem', // 16px
      large: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      xxl: '1.5rem', // 24px
      h1: '2.5rem', // 40px
      h2: '2rem', // 32px
      h3: '1.75rem', // 28px
      h4: '1.5rem', // 24px
   },
   breakpoints: {
      mobile: '576px',
      tablet: '768px',
      desktop: '992px',
      largeDesktop: '1200px',
   },
   spacing: {
      xs: '0.25rem', // 4px
      sm: '0.5rem', // 8px
      md: '1rem', // 16px
      lg: '1.5rem', // 24px
      xl: '2rem', // 32px
      xxl: '3rem', // 48px
   },
   borderRadius: '4px',
   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <ModalProvider>
            <GlobalStyle />
            <App />
         </ModalProvider>
      </ThemeProvider>
   </React.StrictMode>
)
