import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/common/Input'
import { Button } from '@/components/common/Button'
import { useAuth } from '@/contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export function AdminLoginPage() {
   const { login, logout } = useAuth()
   const navigate = useNavigate()
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      setError,
   } = useForm()

   const onSubmit = async (data) => {
      try {
         const loggedInUser = await login(data)
         // 실제 API 응답에서 role 확인 필요 (목업에서는 user 객체에 role 포함)
         if (loggedInUser?.role === 'admin') {
            console.log('Admin Login successful:', loggedInUser)
            navigate('/admin/dashboard', { replace: true })
         } else {
            // 관리자가 아닌 경우 처리
            if (loggedInUser) {
               // 일반 사용자로 로그인된 경우 로그아웃 처리
               await logout() // 비동기 logout 가정 (필요시 수정)
            }
            throw new Error('관리자 계정으로 로그인해주세요.')
         }
      } catch (error) {
         console.error('Admin Login failed:', error)
         setError('root.serverError', {
            type: 'manual',
            message: error.message || '로그인 중 오류가 발생했습니다.',
         })
      }
   }

   return (
      <Container>
         <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Title>관리자 로그인</Title>
            <Description>KHAMA 관리 시스템 접근을 위해 로그인해주세요.</Description>
            {errors.root?.serverError && <ServerError>{errors.root.serverError.message}</ServerError>}
            <InputGroup>
               <Input type="email" placeholder="관리자 이메일" aria-label="관리자 이메일" error={errors.email} {...register('email', { required: '이메일을 입력해주세요.' })} />
               <Input type="password" placeholder="비밀번호" aria-label="비밀번호" error={errors.password} {...register('password', { required: '비밀번호를 입력해주세요.' })} />
            </InputGroup>
            <Button type="submit" disabled={isSubmitting} fullWidth size="large">
               {isSubmitting ? '로그인 중...' : '로그인'}
            </Button>
         </FormWrapper>
      </Container>
   )
}

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 4rem 2rem;
   min-height: 100vh; /* 전체 높이 */
   background-color: #e9ecf0; /* 관리자 페이지 배경색 */
`

const FormWrapper = styled.form`
   width: 100%;
   max-width: 420px;
   padding: 3rem;
   border-radius: ${({ theme }) => theme.borderRadius};
   background-color: #fff;
   box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
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

   > div {
      /* InputWrapper */
      margin-bottom: 1rem;
      &:last-child {
         margin-bottom: 0;
      }
   }
`

const ServerError = styled.p`
   color: ${({ theme }) => theme.colors.error};
   background-color: rgba(220, 53, 69, 0.1);
   padding: 0.8rem;
   border-radius: 4px;
   margin-bottom: 1rem;
   text-align: center;
   font-size: 0.9rem;
`
