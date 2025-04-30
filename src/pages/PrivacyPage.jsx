import styled from 'styled-components'

export function PrivacyPage() {
   return (
      <Container>
         <Title>개인정보처리방침</Title>
         <Content>
            <SectionTitle>1. 개인정보의 처리 목적</SectionTitle>
            <p>협회는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
            <ul>
               <li>가. 홈페이지 회원 가입 및 관리</li>
               <li>나. 교육 및 시험 신청 처리</li>
               <li>다. 자격증 발급 및 관리</li>
               <li>[기타 처리 목적 추가 필요]</li>
            </ul>

            <SectionTitle>2. 개인정보의 처리 및 보유 기간</SectionTitle>
            <p>[법령에 따른 보유 기간 또는 이용 목적 달성 시까지 등 상세 내용 추가 필요]</p>

            <SectionTitle>3. 처리하는 개인정보의 항목</SectionTitle>
            <p>[수집하는 개인정보 항목 명시 (예: 이름, 이메일, 연락처 등)]</p>

            <SectionTitle>4. 개인정보의 제3자 제공에 관한 사항</SectionTitle>
            <p>[제3자 제공 시 제공받는 자, 목적, 항목, 보유 기간 등 명시. 해당 없을 시 "제공하지 않습니다" 명시]</p>

            <SectionTitle>5. 개인정보 처리의 위탁에 관한 사항</SectionTitle>
            <p>[위탁 시 수탁업체, 위탁업무 내용 명시. 해당 없을 시 "위탁하지 않습니다" 명시]</p>

            <SectionTitle>6. 정보주체와 법정대리인의 권리·의무 및 행사방법</SectionTitle>
            <p>[열람, 정정·삭제, 처리정지 요구권 및 행사 방법 안내]</p>

            <SectionTitle>7. 개인정보의 파기 절차 및 방법</SectionTitle>
            <p>[파기 사유 발생 시 절차, 방법 (전자적 파일, 종이 문서 등) 명시]</p>

            <SectionTitle>8. 개인정보의 안전성 확보 조치</SectionTitle>
            <p>[관리적, 기술적, 물리적 조치 내용 기술 (예: 내부관리계획 수립, 접근통제, 암호화 등)]</p>

            <SectionTitle>9. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항</SectionTitle>
            <p>[쿠키 등 자동 수집 장치 사용 여부, 사용 목적, 거부 방법 안내]</p>

            <SectionTitle>10. 개인정보 보호책임자에 관한 사항</SectionTitle>
            <p>
               - 성명 : [담당자 이름]
               <br />
               - 직책 : [담당자 직책]
               <br />
               - 연락처 : [전화번호, 이메일 주소]
               <br />* 개인정보 보호 담당부서로 연결됩니다.
            </p>

            <SectionTitle>11. 정보주체의 권익침해에 대한 구제방법</SectionTitle>
            <p>[개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등 안내]</p>

            <SectionTitle>12. 개인정보 처리방침의 변경에 관한 사항</SectionTitle>
            <p>본 개인정보 처리방침은 202X년 X월 X일부터 적용됩니다. 내용의 추가, 삭제 및 수정이 있을 시에는 변경사항의 시행일 최소 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>

            <hr style={{ margin: '2rem 0' }} />
            <Placeholder>[개인정보처리방침 전문은 법률 전문가의 검토를 받아 작성해야 합니다.]</Placeholder>
         </Content>
      </Container>
   )
}

// 스타일 컴포넌트 정의 (TermsPage와 동일하게 사용 가능)
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

   ul {
      list-style: disc;
      padding-left: 1.5rem;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
   }
   li {
      margin-bottom: 0.3rem;
   }
`

const SectionTitle = styled.h2`
   font-size: 1.3rem;
   font-weight: 600;
   margin-top: 2rem;
   margin-bottom: 1rem;
   padding-bottom: 0.5rem;
   border-bottom: 1px solid #eee;
   color: ${({ theme }) => theme.colors.primary};
`

const Placeholder = styled.p`
   color: #aaa;
   text-align: center;
   margin: 2rem 0;
   font-style: italic;
`
