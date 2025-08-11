# KHAMA - 한국생활가전유지관리협회

한국생활가전유지관리협회(Korea Household Appliances Maintenance Association)의 공식 웹사이트입니다.

## 프로젝트 개요

KHAMA는 생활가전제품의 세척, 감리 등 유지관리의 표준화 연구 및 교육, 자문 활동을 통해 관련 업계에 다양한 정보를 제공하고 상호 동반 성장할 수 있는 기회를 만드는 협회입니다.

## 주요 기능

### 협회 소개

-  협회 개요 및 설립 목적
-  주요 사업 소개
-  조직 구성 및 연혁

### 자격증 관리

-  **가전제품분해청소관리사**: 세탁기, 에어컨, 공기청정기 등 가전제품 분해 청소 전문가
-  **냉난방기 세척서비스 관리사**: 냉난방기 분해조립, 내외부 청소 및 세척, 유지보수 전문가
-  **에어컨설치 관리사**: 에어컨 및 공조기, 실외기 설치 전문가
-  **환기청정시스템 관리사**: 실내 환기와 청정, 새집증후군 공기 정화 전문가

### 교육 프로그램

-  창업교육
-  전문가교육
-  신아이템교육

### 온라인 서비스

-  자격시험 신청
-  마이페이지
-  공지사항 및 Q&A
-  관리자 시스템

## 기술 스택

-  **Frontend**: React 19, Vite
-  **Styling**: Styled Components
-  **Animation**: Framer Motion
-  **Routing**: React Router DOM
-  **State Management**: React Context API
-  **Form Handling**: React Hook Form
-  **Icons**: React Icons
-  **HTTP Client**: Axios

## 프로젝트 구조

```
src/
├── components/          # 공통 컴포넌트
│   ├── common/         # 재사용 가능한 공통 컴포넌트
│   ├── layout/         # 레이아웃 컴포넌트
│   └── admin/          # 관리자 전용 컴포넌트
├── features/           # 기능별 모듈
│   ├── home/           # 홈페이지
│   ├── association/    # 협회 소개
│   ├── certification/  # 자격증 관련
│   ├── education/      # 교육 프로그램
│   ├── exam/           # 시험 관련
│   ├── auth/           # 인증 (로그인/회원가입)
│   ├── myPage/         # 마이페이지
│   ├── inquiry/        # 고객센터
│   ├── application/    # 온라인 신청
│   └── admin/          # 관리자
├── contexts/           # React Context
├── hooks/              # 커스텀 훅
├── services/           # API 서비스
├── utils/              # 유틸리티 함수
├── styles/             # 전역 스타일
└── routes/             # 라우팅 설정
```

## 설치 및 실행

### 필수 요구사항

-  Node.js 18.0.0 이상
-  npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone [repository-url]
cd khama-frontend

# 의존성 설치
npm install
# 또는
yarn install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

### 빌드

```bash
npm run build
# 또는
yarn build
```

### 프리뷰

```bash
npm run preview
# 또는
yarn preview
```

## 환경 설정

`.env` 파일을 생성하고 필요한 환경 변수를 설정하세요:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_TITLE=KHAMA
```

## 주요 페이지

### 사용자 페이지

-  `/` - 홈페이지
-  `/association` - 협회 소개
-  `/certification/*` - 자격증 상세 페이지
-  `/education/*` - 교육 프로그램
-  `/exam-info` - 시험 안내
-  `/apply` - 온라인 신청
-  `/my-page` - 마이페이지
-  `/notice` - 공지사항
-  `/qna` - Q&A

### 관리자 페이지

-  `/admin/login` - 관리자 로그인
-  `/admin/dashboard` - 관리자 대시보드
-  `/admin/users` - 사용자 관리
-  `/admin/applications` - 신청서 관리
-  `/admin/exams` - 시험 관리
-  `/admin/certifications` - 자격증 관리

## 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 연락처

한국생활가전유지관리협회 (KHAMA)

-  소재지: 인천광역시
-  웹사이트: [협회 웹사이트 URL]
