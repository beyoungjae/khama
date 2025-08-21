import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset' // CSS 리셋

// 웹 폰트 로드 (Google Fonts 예시)
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;700&display=swap');

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px; /* 기본 폰트 크기 설정 (rem 단위 기준) */
    height: 100%;
    scrollbar-width: thin; /* 'auto' 또는 'thin' */
    scrollbar-color: ${({ theme }) => theme.colors.primary}B3 ${({ theme }) => theme.colors.backgroundLight}; /* thumb track */
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased; /* 폰트 안티앨리어싱 */
    -moz-osx-font-smoothing: grayscale;
    height: 100%;

    /* Webkit 기반 브라우저 스크롤바 스타일링 */
    &::-webkit-scrollbar {
      width: 8px; /* 스크롤바 너비 */
    }

    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.backgroundLight}; /* 스크롤바 트랙 배경색 */
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.primary}B3; /* 스크롤바 막대 색상 (primary + 투명도) */
      border-radius: 10px;
      border: 1px solid ${({ theme }) => theme.colors.backgroundLight}; /* 트랙과 약간의 경계 */
      transition: background-color 0.2s ease-in-out;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${({ theme }) => theme.colors.primary}; /* 호버 시 더 진하게 */
    }
  }

  #root {
    height: 100%;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.3;
  }

  h1 { font-size: ${({ theme }) => theme.fontSizes.h1}; }
  h2 { font-size: ${({ theme }) => theme.fontSizes.h2}; }
  h3 { font-size: ${({ theme }) => theme.fontSizes.h3}; }
  h4 { font-size: ${({ theme }) => theme.fontSizes.h4}; }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .has-shine:hover .shine { transform: translateX(120%); }
`
