import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { useForm } from 'react-hook-form'
import { FaUserShield, FaEnvelope, FaLock, FaSignInAlt, FaExclamationCircle } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { useAuth } from '@/contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
  fadeInUp,
  fadeInScale,
  staggerContainer,
  slideInLeft,
  slideInRight,
  PageWrapper,
  Container,
  ModernHeroSection,
  HeroBackground,
  HeroContainer,
  HeroBadge,
  HeroTitle,
  GradientText,
  HeroSubtitle,
  HeroDescription,
  Section,
  Card
} from '../../../components/common/SharedStyles'

export function AdminLoginPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div
   
   const { login, logout } = useAuth()
   const navigate = useNavigate()
   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   
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
      <PageWrapper>
         <ModernHeroSection gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" ref={heroRef}>
            <HeroBackground />
            <HeroContainer>
               <motion.div
                  initial="hidden"
                  animate={heroInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaUserShield /> 관리자
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     <GradientText>관리자</GradientText> 로그인
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "KHAMA 관리 시스템에 안전하게 접속하세요"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     관리자 전용 계정으로 시스템을 관리하고 모니터링하세요
                  </HeroDescription>
               </motion.div>
            </HeroContainer>
         </ModernHeroSection>

         <Container>
            <Section ref={formRef}>
               <LoginCard
                  as={motion.div}
                  initial="hidden"
                  animate={formInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                     {errors.root?.serverError && (
                        <ServerError as={motion.div} variants={fadeInUp}>
                           <FaExclamationCircle />
                           {errors.root.serverError.message}
                        </ServerError>
                     )}
                     
                     <FormField as={motion.div} variants={fadeInUp}>
                        <FieldIcon>
                           <FaEnvelope />
                        </FieldIcon>
                        <div style={{ flex: 1 }}>
                           <FieldLabel>관리자 이메일</FieldLabel>
                           <StyledInput
                              type="email"
                              placeholder="관리자 이메일을 입력하세요"
                              error={errors.email}
                              {...register('email', { required: '이메일을 입력해주세요.' })}
                           />
                           {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                        </div>
                     </FormField>
                     
                     <FormField as={motion.div} variants={fadeInUp}>
                        <FieldIcon>
                           <FaLock />
                        </FieldIcon>
                        <div style={{ flex: 1 }}>
                           <FieldLabel>비밀번호</FieldLabel>
                           <StyledInput
                              type="password"
                              placeholder="비밀번호를 입력하세요"
                              error={errors.password}
                              {...register('password', { required: '비밀번호를 입력해주세요.' })}
                           />
                           {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                        </div>
                     </FormField>
                     
                     <SubmitButton 
                        as={motion.button}
                        variants={fadeInUp}
                        type="submit" 
                        disabled={isSubmitting}
                     >
                        {isSubmitting ? (
                           <>로그인 중...</>
                        ) : (
                           <><FaSignInAlt /> 관리자 로그인</>
                        )}
                     </SubmitButton>
                  </FormWrapper>
               </LoginCard>
            </Section>
         </Container>
      </PageWrapper>
   )
}

// AdminLoginPage 전용 스타일 컴포넌트
const LoginCard = styled(Card)`
   max-width: 500px;
   margin: 0 auto;
   padding: 0;
   overflow: hidden;
`

const FormWrapper = styled.form`
   padding: 3rem;
   
   @media (max-width: 768px) {
      padding: 2rem;
   }
`

const FormField = styled.div`
   display: flex;
   align-items: flex-start;
   gap: 1.5rem;
   margin-bottom: 2rem;
   
   @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
   }
`

const FieldIcon = styled.div`
   width: 50px;
   height: 50px;
   border-radius: 12px;
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.2rem;
   color: white;
   flex-shrink: 0;
   
   @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      font-size: 1rem;
   }
`

const FieldLabel = styled.label`
   display: block;
   font-size: 1.1rem;
   font-weight: 600;
   color: #1e293b;
   margin-bottom: 0.75rem;
`

const StyledInput = styled.input`
   width: 100%;
   padding: 1rem 1.25rem;
   border: 2px solid ${({ error }) => (error ? '#ef4444' : '#e2e8f0')};
   border-radius: 12px;
   font-size: 1rem;
   transition: all 0.3s ease;
   outline: none;
   
   &:focus {
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
   }
   
   &::placeholder {
      color: #94a3b8;
   }
`

const ErrorMessage = styled.p`
   color: #ef4444;
   font-size: 0.875rem;
   margin-top: 0.5rem;
   display: flex;
   align-items: center;
   gap: 0.25rem;
`

const SubmitButton = styled.button`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;
   padding: 1rem 2rem;
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   color: white;
   border: none;
   border-radius: 50px;
   font-size: 1rem;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.3s ease;
   box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
   margin-top: 1rem;
   
   &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
   }
   
   &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
   }
`

const ServerError = styled.div`
   display: flex;
   align-items: center;
   gap: 0.75rem;
   color: #ef4444;
   background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
   border: 2px solid #fecaca;
   padding: 1rem 1.5rem;
   border-radius: 12px;
   margin-bottom: 2rem;
   font-size: 0.95rem;
   font-weight: 500;
   
   svg {
      font-size: 1.2rem;
      flex-shrink: 0;
   }
`
