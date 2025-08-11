import styled from 'styled-components'

export function ContactModalContent() {
   return (
      <ContentWrapper>
         <Title>문의하기</Title>
         <Description>
            궁금한 점이 있으시면 아래 이메일로 문의해주세요. <br />
            최대한 빠른 시일 내에 답변드리겠습니다.
         </Description>
         <EmailLink href="mailto:haan@hanallcompany.com">haan@hanallcompany.com</EmailLink>
      </ContentWrapper>
   )
}

const ContentWrapper = styled.div`
   text-align: center;
   padding-top: ${({ theme }) => theme.spacing.md}; /* 닫기 버튼 공간 확보 */
`

const Title = styled.h2`
   font-size: ${({ theme }) => theme.fontSizes.h3};
   font-weight: 600;
   margin-bottom: ${({ theme }) => theme.spacing.md};
`

const Description = styled.p`
   font-size: ${({ theme }) => theme.fontSizes.medium};
   color: ${({ theme }) => theme.colors.textSecondary};
   margin-bottom: ${({ theme }) => theme.spacing.xl};
   line-height: 1.7;
`

const EmailLink = styled.a`
   display: inline-block;
   font-size: ${({ theme }) => theme.fontSizes.large};
   font-weight: 500;
   color: ${({ theme }) => theme.colors.primary};
   text-decoration: none;
   padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
   border: 1px solid ${({ theme }) => theme.colors.border};
   border-radius: ${({ theme }) => theme.borderRadius};
   transition: background-color 0.2s, color 0.2s;

   &:hover {
      background-color: ${({ theme }) => theme.colors.primary}1A;
      text-decoration: none;
   }
`
