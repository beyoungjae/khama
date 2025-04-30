import styled from 'styled-components'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
   return (
      <Container>
         <ErrorCode>404</ErrorCode>
         <Message>페이지를 찾을 수 없습니다.</Message>
         <Description>요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.</Description>
         <HomeLink to="/">홈으로 돌아가기</HomeLink>
      </Container>
   )
}

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   min-height: calc(100vh - 160px); /* 헤더/푸터 제외 높이 */
   text-align: center;
   padding: 2rem;
`

const ErrorCode = styled.h1`
   font-size: 6rem;
   font-weight: bold;
   color: #ccc;
   margin: 0;
`

const Message = styled.p`
   font-size: 1.8rem;
   font-weight: 500;
   color: #555;
   margin-top: 0.5rem;
   margin-bottom: 1rem;
`

const Description = styled.p`
   font-size: 1rem;
   color: #777;
   margin-bottom: 2rem;
`

const HomeLink = styled(Link)`
   display: inline-block;
   padding: 0.8rem 2rem;
   background-color: ${(props) => props.theme.colors.primary || '#007bff'};
   color: white;
   text-decoration: none;
   border-radius: 4px;
   font-weight: 500;
   transition: background-color 0.2s;

   &:hover {
      background-color: #0056b3;
   }
`
