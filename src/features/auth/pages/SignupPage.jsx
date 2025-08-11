import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { useForm } from 'react-hook-form'
import { FaUserPlus, FaUser, FaEnvelope, FaLock, FaPhone, FaSignInAlt, FaExclamationCircle } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { signupUser } from '@/services/authService'
import { getImageUrl } from '../../../utils/imageHelpers'
import { fadeInUp, fadeInScale, staggerContainer, slideInLeft, slideInRight, PageWrapper, Container, ModernHeroSection, HeroBackground, HeroContainer, HeroBadge, HeroTitle, GradientText, HeroSubtitle, HeroDescription, Section, Card } from '../../../components/common/SharedStyles'

export function SignupPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const navigate = useNavigate()
   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.2 })

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
      <PageWrapper>
         <ModernHeroSection bgImage={getImageUrl('hero', 'auth.jpg')} ref={heroRef}>
            <HeroBackground radialGradient="radial-gradient(circle at 20% 80%, rgba(17, 153, 142, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)" />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaUserPlus /> 회원가입
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     <GradientText>회원</GradientText> 가입
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "KHAMA와 함께 전문가의 길을 시작하세요"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     전문 교육과 자격증 취득으로 새로운 기회를 만들어보세요
                  </HeroDescription>
               </motion.div>
            </HeroContainer>
         </ModernHeroSection>

         <Container>
            <Section ref={formRef}>
               <SignupCard as={motion.div} initial="hidden" animate={formInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                     {errors.root?.serverError && (
                        <ServerError as={motion.div} variants={fadeInUp}>
                           <FaExclamationCircle />
                           {errors.root.serverError.message}
                        </ServerError>
                     )}

                     <FormField as={motion.div} variants={fadeInUp}>
                        <FieldIcon>
                           <FaUser />
                        </FieldIcon>
                        <div style={{ flex: 1 }}>
                           <FieldLabel>이름</FieldLabel>
                           <StyledInput placeholder="이름을 입력하세요" error={errors.name} {...register('name', { required: '이름을 입력해주세요.' })} />
                           {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                        </div>
                     </FormField>

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
                           <StyledInput
                              type="password"
                              placeholder="비밀번호 (8자 이상)"
                              error={errors.password}
                              {...register('password', {
                                 required: '비밀번호를 입력해주세요.',
                                 minLength: {
                                    value: 8,
                                    message: '비밀번호는 8자 이상이어야 합니다.',
                                 },
                              })}
                           />
                           {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                        </div>
                     </FormField>

                     <FormField as={motion.div} variants={fadeInUp}>
                        <FieldIcon>
                           <FaLock />
                        </FieldIcon>
                        <div style={{ flex: 1 }}>
                           <FieldLabel>비밀번호 확인</FieldLabel>
                           <StyledInput
                              type="password"
                              placeholder="비밀번호를 다시 입력하세요"
                              error={errors.confirmPassword}
                              {...register('confirmPassword', {
                                 required: '비밀번호를 다시 입력해주세요.',
                                 validate: (value) => value === password || '비밀번호가 일치하지 않습니다.',
                              })}
                           />
                           {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
                        </div>
                     </FormField>

                     <FormField as={motion.div} variants={fadeInUp}>
                        <FieldIcon>
                           <FaPhone />
                        </FieldIcon>
                        <div style={{ flex: 1 }}>
                           <FieldLabel>휴대전화</FieldLabel>
                           <StyledInput
                              type="tel"
                              placeholder="휴대전화 번호 ('-' 제외)"
                              error={errors.phone}
                              {...register('phone', {
                                 required: '휴대전화 번호를 입력해주세요.',
                                 pattern: {
                                    value: /^\d{10,11}$/,
                                    message: '유효한 휴대전화 번호를 입력해주세요.',
                                 },
                              })}
                           />
                           {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
                        </div>
                     </FormField>

                     <SignupButton as={motion.button} variants={fadeInUp} type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                           <>가입 중...</>
                        ) : (
                           <>
                              <FaUserPlus /> 회원가입
                           </>
                        )}
                     </SignupButton>

                     <Divider as={motion.div} variants={fadeInUp} />

                     <LoginLink as={motion.div} variants={fadeInUp}>
                        <span>이미 계정이 있으신가요?</span>
                        <Link to="/login">
                           <FaSignInAlt /> 로그인
                        </Link>
                     </LoginLink>
                  </FormWrapper>
               </SignupCard>
            </Section>
         </Container>
      </PageWrapper>
   )
}

// SignupPage 전용 스타일 컴포넌트
const SignupCard = styled(Card)`
   max-width: 600px;
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
   background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
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
      border-color: #11998e;
      box-shadow: 0 0 0 3px rgba(17, 153, 142, 0.1);
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

const SignupButton = styled.button`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;
   padding: 1rem 2rem;
   background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
   color: white;
   border: none;
   border-radius: 50px;
   font-size: 1rem;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.3s ease;
   box-shadow: 0 4px 15px rgba(17, 153, 142, 0.3);
   margin-bottom: 2rem;

   &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(17, 153, 142, 0.4);
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

const LoginLink = styled.div`
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
      color: #11998e;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
         color: #38ef7d;
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
