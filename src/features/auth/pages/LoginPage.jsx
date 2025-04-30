import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/common/Input'
import { Button } from '@/components/common/Button'
import { useAuth } from '@/contexts/AuthContext'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export function LoginPage() {
   const { login } = useAuth()
   const navigate = useNavigate()
   const location = useLocation()
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      setError,
   } = useForm()

   const onSubmit = async (data) => {
      try {
         const loggedInUser = await login(data)
         console.log('Login successful from page:', loggedInUser)
         const from = location.state?.from?.pathname || '/'
         navigate(from, { replace: true })
      } catch (error) {
         console.error('Login failed from page:', error)
         setError('root.serverError', {
            type: 'manual',
            message: error.message || '로그인 중 오류가 발생했습니다.',
         })
      }
   }

   return (
      <Container>
         <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Title>로그인</Title>
            <Description>KHAMA 회원 서비스 이용을 위해 로그인해주세요.</Description>
            {errors.root?.serverError && <ServerError>{errors.root.serverError.message}</ServerError>}
            <InputGroup>
               <Input
                  type="email"
                  placeholder="이메일 주소"
                  aria-label="이메일 주소"
                  error={errors.email}
                  {...register('email', {
                     required: '이메일을 입력해주세요.',
                     pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: '유효한 이메일 주소를 입력해주세요.',
                     },
                  })}
               />
               <Input type="password" placeholder="비밀번호" aria-label="비밀번호" error={errors.password} {...register('password', { required: '비밀번호를 입력해주세요.' })} />
            </InputGroup>
            <Button type="submit" disabled={isSubmitting} fullWidth size="large">
               {isSubmitting ? '로그인 중...' : '로그인'}
            </Button>
            <Divider />
            <SignupLink>
               아직 회원이 아니신가요? <Link to="/signup">회원가입</Link>
            </SignupLink>
         </FormWrapper>
      </Container>
   )
}

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 4rem 2rem;
   min-height: calc(100vh - 160px); /* 헤더, 푸터 높이 제외 */
   background-color: ${({ theme }) => theme.colors.backgroundLight};
`

const FormWrapper = styled.form`
   width: 100%;
   max-width: 420px; /* 너비 살짝 증가 */
   padding: 3rem;
   border-radius: ${({ theme }) => theme.borderRadius};
   background-color: #fff;
   box-shadow: ${({ theme }) => theme.boxShadow};
   border: 1px solid ${({ theme }) => theme.colors.border};
`

const Title = styled.h1`
   font-size: ${({ theme }) => theme.fontSizes.h3};
   font-weight: 700;
   text-align: center;
   margin-bottom: 0.5rem;
   color: ${({ theme }) => theme.colors.text};
`

const Description = styled.p`
   font-size: ${({ theme }) => theme.fontSizes.medium};
   color: ${({ theme }) => theme.colors.textSecondary};
   text-align: center;
   margin-bottom: 2.5rem;
`

const InputGroup = styled.div`
   margin-bottom: 1.5rem;

   /* InputWrapper 마진 조정 */
   > div {
      margin-bottom: 1rem;
      &:last-child {
         margin-bottom: 0;
      }
   }
`

const Divider = styled.hr`
   border: none;
   border-top: 1px solid ${({ theme }) => theme.colors.border};
   margin: 2rem 0;
`

const SignupLink = styled.p`
   text-align: center;
   font-size: ${({ theme }) => theme.fontSizes.small};
   color: ${({ theme }) => theme.colors.textSecondary};

   a {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 500;
      text-decoration: none;
      margin-left: 0.5rem;

      &:hover {
         text-decoration: underline;
      }
   }
`

const ServerError = styled.p`
   color: ${({ theme }) => theme.colors.error};
   background-color: rgba(220, 53, 69, 0.1);
   padding: 0.8rem;
   border-radius: ${({ theme }) => theme.borderRadius};
   margin-bottom: 1.5rem;
   text-align: center;
   font-size: ${({ theme }) => theme.fontSizes.small};
`
