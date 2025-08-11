import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { useForm } from 'react-hook-form'
import { FaSignInAlt, FaEnvelope, FaLock, FaExclamationCircle, FaUserPlus } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { useAuth } from '@/contexts/AuthContext'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { getImageUrl } from '../../../utils/imageHelpers'
import { fadeInUp, fadeInScale, staggerContainer, slideInLeft, slideInRight, PageWrapper, Container, ModernHeroSection, HeroBackground, HeroContainer, HeroBadge, HeroTitle, GradientText, HeroSubtitle, HeroDescription, Section, Card } from '../../../components/common/SharedStyles'

export function LoginPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { login } = useAuth()
   const navigate = useNavigate()
   const location = useLocation()
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
      <PageWrapper>
         <ModernHeroSection bgImage={getImageUrl('hero', 'auth.jpg')} ref={heroRef}>
            <HeroBackground radialGradient="radial-gradient(circle at 20% 80%, rgba(79, 172, 254, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)" />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaSignInAlt /> 로그인
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     <GradientText>회원</GradientText> 로그인
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "KHAMA 회원 서비스를 이용해보세요"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     교육 신청, 시험 접수, 자격증 관리 등 다양한 서비스를 제공합니다
                  </HeroDescription>
               </motion.div>
            </HeroContainer>
         </ModernHeroSection>

         <Container>
            <Section ref={formRef}>
               <LoginCard as={motion.div} initial="hidden" animate={formInView ? 'visible' : 'hidden'} variants={staggerContainer}>
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
                           <FieldLabel>이메일</FieldLabel>
                           <StyledInput
                              type="email"
                              placeholder="이메일 주소를 입력하세요"
                              error={errors.email}
                              {...register('email', {
                                 required: '이메일을 입력해주세요.',
                                 pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: '유효한 이메일 주소를 입력해주세요.',
                                 },
                              })}
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
                           <StyledInput type="password" placeholder="비밀번호를 입력하세요" error={errors.password} {...register('password', { required: '비밀번호를 입력해주세요.' })} />
                           {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                        </div>
                     </FormField>

                     <LoginButton as={motion.button} variants={fadeInUp} type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                           <>로그인 중...</>
                        ) : (
                           <>
                              <FaSignInAlt /> 로그인
                           </>
                        )}
                     </LoginButton>

                     <Divider as={motion.div} variants={fadeInUp} />

                     <SignupLink as={motion.div} variants={fadeInUp}>
                        <span>아직 회원이 아니신가요?</span>
                        <Link to="/signup">
                           <FaUserPlus /> 회원가입
                        </Link>
                     </SignupLink>
                  </FormWrapper>
               </LoginCard>
            </Section>
         </Container>
      </PageWrapper>
   )
}

// LoginPage 전용 스타일 컴포넌트
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
   background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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
      border-color: #4facfe;
      box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.1);
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

const LoginButton = styled.button`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;
   padding: 1rem 2rem;
   background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
   color: white;
   border: none;
   border-radius: 50px;
   font-size: 1rem;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.3s ease;
   box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);
   margin-bottom: 2rem;

   &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(79, 172, 254, 0.4);
   }

   &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
   }
`

const Divider = styled.hr`
   border: none;
   border-top: 2px solid #e2e8f0;
   margin: 2rem 0;
`

const SignupLink = styled.div`
   text-align: center;
   font-size: 0.95rem;
   color: #64748b;

   span {
      margin-right: 0.5rem;
   }

   a {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: #4facfe;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
         color: #00f2fe;
         transform: translateY(-1px);
      }
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
