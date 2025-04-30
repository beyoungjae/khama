import styled from 'styled-components'

export function TermsPage() {
   return (
      <Container>
         <Title>이용약관</Title>
         <Content>
            <SectionTitle>제1장 총칙</SectionTitle>
            <Article>
               <ArticleTitle>제1조 (목적)</ArticleTitle>
               <p>본 약관은 한국생활가전유지관리협회(이하 '협회')가 제공하는 웹사이트 서비스(이하 '서비스')의 이용 조건 및 절차, 회원과 협회의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.</p>
            </Article>
            <Article>
               <ArticleTitle>제2조 (용어의 정의)</ArticleTitle>
               <p>[용어 정의 내용 추가 필요]</p>
            </Article>
            <Article>
               <ArticleTitle>제3조 (약관의 명시, 효력 및 변경)</ArticleTitle>
               <p>1. 본 약관은 서비스를 이용하고자 하는 모든 회원에 대하여 그 효력을 발생합니다.</p>
               <p>2. 협회는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있습니다.</p>
               <p>[약관 변경 공지 및 동의 절차 내용 추가 필요]</p>
            </Article>

            <SectionTitle>제2장 서비스 이용 계약</SectionTitle>
            <Article>
               <ArticleTitle>제4조 (이용 계약의 성립)</ArticleTitle>
               <p>[회원 가입 절차, 이용 신청 및 승낙 조건 등 내용 추가 필요]</p>
            </Article>
            <Article>
               <ArticleTitle>제5조 (회원 정보의 제공 및 변경)</ArticleTitle>
               <p>[회원 정보 수집 항목, 정보 변경 절차 등 내용 추가 필요]</p>
            </Article>
            <Article>
               <ArticleTitle>제6조 (이용 제한 등)</ArticleTitle>
               <p>[회원 자격 상실, 서비스 이용 제한 사유 및 절차 등 내용 추가 필요]</p>
            </Article>

            <SectionTitle>제3장 계약 당사자의 의무</SectionTitle>
            <Article>
               <ArticleTitle>제7조 (협회의 의무)</ArticleTitle>
               <p>[서비스 안정적 제공, 개인정보 보호 등 협회 의무 내용 추가 필요]</p>
            </Article>
            <Article>
               <ArticleTitle>제8조 (회원의 의무)</ArticleTitle>
               <p>[회원 정보 최신 유지, 약관 준수, 금지 행위 등 회원 의무 내용 추가 필요]</p>
            </Article>

            <SectionTitle>제4장 서비스 제공 및 이용</SectionTitle>
            {/* ... 서비스 내용, 변경, 중단, 정보 제공, 게시물 관리 등 조항 추가 ... */}
            <Placeholder>[제4장 상세 내용 추가 필요]</Placeholder>

            <SectionTitle>제5장 계약 해지 및 이용 제한</SectionTitle>
            {/* ... 계약 해지 절차, 이용 제한 등 조항 추가 ... */}
            <Placeholder>[제5장 상세 내용 추가 필요]</Placeholder>

            <SectionTitle>제6장 손해배상 및 기타 사항</SectionTitle>
            {/* ... 손해배상, 면책조항, 재판권 및 준거법 등 조항 추가 ... */}
            <Placeholder>[제6장 상세 내용 추가 필요]</Placeholder>

            <SectionTitle>부칙</SectionTitle>
            <p>제1조 (시행일) 본 약관은 202X년 X월 X일부터 시행합니다.</p>

            <hr style={{ margin: '2rem 0' }} />
            <Placeholder>[이용약관 전문은 법률 전문가의 검토를 받아 작성해야 합니다.]</Placeholder>
         </Content>
      </Container>
   )
}

// 스타일 컴포넌트 정의 유지
const Container = styled.div`
   padding: 2rem 4rem;
   max-width: 900px;
   margin: 0 auto;
`

const Title = styled.h1`
   font-size: 2rem;
   font-weight: bold;
   margin-bottom: 2rem;
   text-align: center;
`

const Content = styled.div`
   line-height: 1.7;
   background-color: #fff;
   padding: 2rem;
   border: 1px solid #eee;
   border-radius: 8px;
`

const SectionTitle = styled.h2`
   font-size: 1.5rem;
   font-weight: 700;
   margin-top: 2.5rem;
   margin-bottom: 1.5rem;
   padding-bottom: 0.7rem;
   border-bottom: 2px solid #eee;
   color: ${({ theme }) => theme.colors.primary};
`

const Placeholder = styled.p`
   color: #aaa;
   text-align: center;
   margin: 2rem 0;
   font-style: italic;
`

// Article, ArticleTitle 스타일 추가
const Article = styled.div`
   margin-bottom: 1.5rem;
`

const ArticleTitle = styled.h3`
   font-size: 1.1rem;
   font-weight: 600;
   margin-bottom: 0.5rem;
   color: #444;
`
