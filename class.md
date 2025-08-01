# 📄 KHAMA 웹서비스 PRD (한국생활가전유지관리협회)

## 1. 프로젝트 목적

-  협회 소개, 교육 및 자격 인증 제공
-  자격시험 신청, 자격증 발급, 관리자 기능 등 포함된 통합형 웹서비스 구축
-  사용자 친화적인 UI/UX와 반응형 웹 제공
-  관리자가 신청서 및 회원을 쉽게 관리할 수 있는 백오피스 제공

## 2. 대상 사용자

-  자격증 취득 희망 일반인
-  생활가전 유지보수 업계 종사자
-  교육 및 인증 프로그램 참가자
-  협회 운영 관리자

## 3. 주요 기능 및 페이지 구조

### 3.1 사용자 기능

-  회원가입 / 로그인 / 마이페이지
-  신청서 작성 (교육/자격시험)
-  신청서 상태 확인
-  자격 검정 시험 응시, 결과 확인
-  자격증 발급 내역 조회 및 다운로드 (PDF 가능)

### 3.2 관리자 기능

-  관리자 로그인
-  전체 사용자 관리 (조회/권한 설정)
-  신청서 열람 및 승인/거절 처리
-  자격 검정 시험 관리 (등록, 결과 입력)
-  자격증 발급 관리 (등록/발급)

### 3.3 페이지 구성

#### Home

-  협회 소개 문구 및 배너
-  주요 메뉴 바로가기

#### 협회소개

-  협회명 / 영문명
-  미션 / 비전
-  베너 소개

#### 교육안내

-  교육 목적 / 구성
-  교육 프로그램 안내
-  교육원 소개

#### 자격시험안내

-  자격 검정 과목
-  시험 일정 및 신청 안내

#### 제품인증

-  웰존(Welzone) 인증 설명

#### 고객센터

-  공지사항
-  Q&A
-  문의하기 (이메일 안내)

#### 마이페이지 (회원용)

-  작성한 신청서 조회
-  자격증 내역
-  시험 결과 조회

#### 관리자 페이지

-  신청서 관리
-  회원 관리
-  자격증 및 시험 관리

## 4. 상단 네비게이션

-  협회소개 | 교육안내 | 자격시험안내 | 제품인증 | 고객센터 | 마이페이지
-  우측 플로팅 버튼: “문의하기”

## 5. 하단 푸터

-  협회명 / 사업자 등록번호 / 주소 / 대표번호
-  이용약관 | 개인정보처리방침

## 6. 기술 스택 제안

### 프론트엔드

-  React
-  React Router (v6, 다중 페이지 구성)
-  styled-components (CSS-in-JS)
-  framer-motion (페이지 전환 및 버튼 애니메이션)
-  React Hook Form (신청서 작성 폼 처리)
-  Axios (Supabase 연결 및 API 호출)
-  배포: Vercel

### 백엔드/DB

-  Supabase
   -  Auth (회원가입/로그인/권한 관리)
   -  Database (PostgreSQL 기반 테이블 운영)
   -  Storage (PDF 저장 및 다운로드 관리)
   -  Admin Panel (간편 테이블 관리)

## 7. 데이터베이스 테이블 정의

### users

| 컬럼명     | 타입      | 설명                   |
| ---------- | --------- | ---------------------- |
| id         | UUID      | 사용자 고유 ID         |
| email      | String    | 이메일 (로그인 계정)   |
| password   | String    | 해시된 비밀번호        |
| name       | String    | 이름                   |
| phone      | String    | 휴대전화 번호          |
| role       | String    | 'user' or 'admin' 역할 |
| created_at | Timestamp | 가입 일시              |

### applications

| 컬럼명     | 타입      | 설명                     |
| ---------- | --------- | ------------------------ |
| id         | UUID      | 신청서 고유 ID           |
| user_id    | UUID      | 신청자 (users.id 참조)   |
| type       | String    | '교육' or '시험'         |
| status     | String    | '대기' / '승인' / '거절' |
| details    | Text      | 신청 내용 상세           |
| created_at | Timestamp | 작성 일시                |

### certifications

| 컬럼명           | 타입   | 설명                        |
| ---------------- | ------ | --------------------------- |
| id               | UUID   | 자격증 고유 ID              |
| user_id          | UUID   | 발급 대상자 (users.id 참조) |
| certificate_name | String | 자격증명                    |
| issue_date       | Date   | 발급일                      |
| file_url         | String | 자격증 PDF 저장 URL         |

### exams

| 컬럼명      | 타입   | 설명         |
| ----------- | ------ | ------------ |
| id          | UUID   | 시험 고유 ID |
| exam_name   | String | 시험명       |
| date        | Date   | 시험 일자    |
| location    | String | 시험 장소    |
| description | Text   | 시험 설명    |

### notices

| 컬럼명     | 타입      | 설명             |
| ---------- | --------- | ---------------- |
| id         | UUID      | 공지사항 고유 ID |
| title      | String    | 제목             |
| content    | Text      | 내용             |
| created_at | Timestamp | 작성 일시        |

### questions

| 컬럼명     | 타입      | 설명                        |
| ---------- | --------- | --------------------------- |
| id         | UUID      | Q&A 고유 ID                 |
| user_id    | UUID      | 질문 작성자 (users.id 참조) |
| title      | String    | 질문 제목                   |
| content    | Text      | 질문 내용                   |
| created_at | Timestamp | 작성 일시                   |

## 8. 기타 고려사항

-  모든 페이지는 반응형 (모바일/태블릿 대응)
-  다크모드 지원하지 않음 (화이트 기반 UI)
-  애니메이션을 통한 자연스러운 페이지 전환
-  외부 API 연동 없이 모든 기능 자체 처리
-  신청서/자격증은 PDF 파일로 저장 및 다운로드 가능

## 9. 향후 확장 가능 기능

-  온라인 결제 모듈 (교육/시험 비용 결제)
-  실시간 시험 응시 시스템 (별도 구현 필요)
-  SMS/Email 알림 기능 (신청 접수, 결과 안내)
