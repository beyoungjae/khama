import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/common/Input'
import { Button } from '@/components/common/Button'
import { Link, useNavigate } from 'react-router-dom'
import { signupUser } from '@/services/authService'

export function SignupPage() {
   const navigate = useNavigate()
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors, isSubmitting },
      setError,
      reset,
   } = useForm()

   const password = watch('password')

   const onSubmit = async (data) => {
      const { confirmPassword: _confirmPassword, ...payload } = data
      console.log('Signup Payload:', payload)
      try {
         const response = await signupUser(payload)
         console.log('Signup successful:', response)
         alert(response.message || '회원가입이 완료되었습니다. 로그인해주세요.')
         reset()
         navigate('/login')
      } catch (error) {
         console.error('Signup failed:', error)
         setError('root.serverError', {
            type: 'manual',
            message: error.message || '회원가입 중 오류가 발생했습니다.',
         })
      }
   }

   return (
      <Container>
         <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Title>회원가입</Title>
            <Description>KHAMA 서비스 이용을 위한 회원 정보를 입력해주세요.</Description>
            {errors.root?.serverError && <ServerError>{errors.root.serverError.message}</ServerError>}
            <InputGroup>
               <Input placeholder="이름" aria-label="이름" error={errors.name} {...register('name', { required: '이름을 입력해주세요.' })} />
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
               <Input
                  type="password"
                  placeholder="비밀번호 (8자 이상)"
                  aria-label="비밀번호"
                  error={errors.password}
                  {...register('password', {
                     required: '비밀번호를 입력해주세요.',
                     minLength: {
                        value: 8,
                        message: '비밀번호는 8자 이상이어야 합니다.',
                     },
                  })}
               />
               <Input
                  type="password"
                  placeholder="비밀번호 확인"
                  aria-label="비밀번호 확인"
                  error={errors.confirmPassword}
                  {...register('confirmPassword', {
                     required: '비밀번호를 다시 입력해주세요.',
                     validate: (value) => value === password || '비밀번호가 일치하지 않습니다.',
                  })}
               />
               <Input
                  type="tel"
                  placeholder="휴대전화 번호 ('-' 제외)"
                  aria-label="휴대전화 번호"
                  error={errors.phone}
                  {...register('phone', {
                     required: '휴대전화 번호를 입력해주세요.',
                     pattern: {
                        value: /^\d{10,11}$/,
                        message: '유효한 휴대전화 번호를 입력해주세요.',
                     },
                  })}
               />
            </InputGroup>
            <Button type="submit" disabled={isSubmitting} fullWidth size="large">
               {isSubmitting ? '가입 중...' : '회원가입'}
            </Button>
            <Divider />
            <LoginLink>
               이미 계정이 있으신가요? <Link to="/login">로그인</Link>
            </LoginLink>
         </FormWrapper>
      </Container>
   )
}

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 4rem 2rem;
   min-height: calc(100vh - 160px);
   background-color: ${({ theme }) => theme.colors.backgroundLight};
`

const FormWrapper = styled.form`
   width: 100%;
   max-width: 420px;
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

   > div {
      /* InputWrapper */
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

const LoginLink = styled.p`
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
