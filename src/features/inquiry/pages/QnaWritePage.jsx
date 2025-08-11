import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { FaPen, FaQuestionCircle, FaLock, FaUser, FaFileAlt, FaCheck, FaTimes, FaExclamationCircle } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { getImageUrl } from '../../../utils/imageHelpers'
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
  HeroImageContainer,
  HeroImagePlaceholder,
  Section,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  Card,
  CardIcon,
  CardContent,
  CardTitle,
  CardDescription
} from '../../../components/common/SharedStyles'
import { Input } from '@/components/common/Input'
import { Button } from '@/components/common/Button'
import { createQuestion } from '@/services/qnaService' // 목업 서비스 임포트
import { useAuth } from '@/contexts/AuthContext'

export function QnaWritePage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div
   
   const navigate = useNavigate()
   const { user } = useAuth() // 로그인 사용자 정보 가져오기 (이름 등 활용)
   const {
      register,
      handleSubmit,
      control,
      formState: { errors, isSubmitting },
      setError,
   } = useForm({
      defaultValues: {
         title: '',
         content: '',
         isPrivate: false,
      },
   })
   
   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   const onSubmit = async (data) => {
      console.log('Q&A Submit Data:', data)
      try {
         // 실제 API 호출 시에는 userId 등 추가 정보 필요
         const payload = { ...data, authorName: user?.name || '익명' } // 사용자 이름 추가
         const newQuestion = await createQuestion(payload)
         alert('질문이 성공적으로 등록되었습니다.')
         navigate(`/qna/${newQuestion.id}`) // 작성된 글로 이동
      } catch (error) {
         console.error('Q&A submission failed:', error)
         setError('root.serverError', {
            type: 'manual',
            message: '질문 등록 중 오류가 발생했습니다.',
         })
      }
   }

   return (
      <PageWrapper>
         <ModernHeroSection ref={heroRef} bgImage={getImageUrl('hero', 'contact.jpg')}>
            <HeroBackground radialGradient="radial-gradient(circle at 20% 80%, rgba(79, 172, 254, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)" />
            <HeroContainer>
               <motion.div
                  initial="hidden"
                  animate={heroInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaPen /> 질문 작성
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     <GradientText>질문</GradientText> 작성하기
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "궁금한 점이 있으시면 언제든지 질문해주세요"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     KHAMA에 대한 모든 궁금증을 자세히 작성해주시면
                     <br />
                     빠른 시일 내에 친절하게 답변드리겠습니다
                  </HeroDescription>
               </motion.div>
               <HeroImageContainer as={motion.div} variants={slideInRight}>
                  <HeroImagePlaceholder>
                     <FaPen size={80} />
                     <p>질문 작성</p>
                  </HeroImagePlaceholder>
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         <Container>
            <Section ref={formRef}>
               <SectionHeader>
                  <SectionTitle
                     as={motion.h2}
                     initial="hidden"
                     animate={formInView ? "visible" : "hidden"}
                     variants={fadeInUp}
                  >
                     질문 양식
                  </SectionTitle>
                  <SectionSubtitle
                     as={motion.p}
                     initial="hidden"
                     animate={formInView ? "visible" : "hidden"}
                     variants={fadeInUp}
                  >
                     아래 양식을 작성해주시면 빠른 시일 내에 답변드리겠습니다
                  </SectionSubtitle>
               </SectionHeader>
               
               <QnaWriteCard
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
                           <FaFileAlt />
                        </FieldIcon>
                        <div style={{ flex: 1 }}>
                           <FieldLabel>질문 제목</FieldLabel>
                           <StyledInput
                              placeholder="질문 제목을 입력하세요"
                              error={errors.title}
                              {...register('title', { required: '제목을 입력해주세요.' })}
                           />
                           {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
                        </div>
                     </FormField>
                     
                     <FormField as={motion.div} variants={fadeInUp}>
                        <FieldIcon style={{ alignSelf: 'flex-start', marginTop: '2rem' }}>
                           <FaQuestionCircle />
                        </FieldIcon>
                        <div style={{ flex: 1 }}>
                           <FieldLabel>질문 내용</FieldLabel>
                           <StyledTextArea
                              placeholder="문의하실 내용을 자세히 작성해주세요."
                              rows={10}
                              error={errors.content}
                              {...register('content', { required: '내용을 입력해주세요.' })}
                           />
                           {errors.content && <ErrorMessage>{errors.content.message}</ErrorMessage>}
                        </div>
                     </FormField>
                     
                     <FormField as={motion.div} variants={fadeInUp}>
                        <PrivacyWrapper>
                           <Controller
                              name="isPrivate"
                              control={control}
                              render={({ field }) => (
                                 <PrivacyCheckbox>
                                    <PrivacyInput
                                       type="checkbox"
                                       {...field}
                                       checked={field.value}
                                       id="isPrivate"
                                    />
                                    <PrivacyLabel htmlFor="isPrivate">
                                       <PrivacyIcon checked={field.value}>
                                          <FaLock />
                                       </PrivacyIcon>
                                       <div>
                                          <PrivacyTitle>비밀글로 작성하기</PrivacyTitle>
                                          <PrivacyDescription>
                                             비밀글로 작성 시, 작성자와 관리자만 내용을 확인할 수 있습니다.
                                          </PrivacyDescription>
                                       </div>
                                    </PrivacyLabel>
                                 </PrivacyCheckbox>
                              )}
                           />
                        </PrivacyWrapper>
                     </FormField>
                     
                     <FormActions as={motion.div} variants={fadeInUp}>
                        <CancelButton 
                           type="button" 
                           onClick={() => navigate('/qna')} 
                           disabled={isSubmitting}
                        >
                           <FaTimes /> 취소
                        </CancelButton>
                        <SubmitButton type="submit" disabled={isSubmitting}>
                           {isSubmitting ? (
                              <>등록 중...</>
                           ) : (
                              <><FaCheck /> 질문 등록</>
                           )}
                        </SubmitButton>
                     </FormActions>
                  </FormWrapper>
               </QnaWriteCard>
            </Section>
         </Container>
      </PageWrapper>
   )
}

// QnaWritePage 전용 스타일 컴포넌트
const QnaWriteCard = styled(Card)`
   max-width: 900px;
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
   margin-bottom: 2.5rem;
   
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

const StyledTextArea = styled.textarea`
   width: 100%;
   padding: 1rem 1.25rem;
   border: 2px solid ${({ error }) => (error ? '#ef4444' : '#e2e8f0')};
   border-radius: 12px;
   font-size: 1rem;
   font-family: inherit;
   resize: vertical;
   min-height: 200px;
   line-height: 1.6;
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

const PrivacyWrapper = styled.div`
   flex: 1;
`

const PrivacyCheckbox = styled.div`
   position: relative;
`

const PrivacyInput = styled.input`
   position: absolute;
   opacity: 0;
   width: 0;
   height: 0;
`

const PrivacyLabel = styled.label`
   display: flex;
   align-items: flex-start;
   gap: 1rem;
   padding: 1.5rem;
   background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
   border: 2px solid #e2e8f0;
   border-radius: 12px;
   cursor: pointer;
   transition: all 0.3s ease;
   
   &:hover {
      border-color: #cbd5e1;
      background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
   }
   
   input:checked + & {
      border-color: #4facfe;
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
   }
`

const PrivacyIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 8px;
   background: ${({ checked }) => 
      checked 
         ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
         : 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)'
   };
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
   font-size: 1rem;
   transition: all 0.3s ease;
   flex-shrink: 0;
`

const PrivacyTitle = styled.div`
   font-size: 1.1rem;
   font-weight: 600;
   color: #1e293b;
   margin-bottom: 0.5rem;
`

const PrivacyDescription = styled.div`
   font-size: 0.9rem;
   color: #64748b;
   line-height: 1.5;
`

const FormActions = styled.div`
   display: flex;
   justify-content: center;
   gap: 1rem;
   margin-top: 2rem;
   padding-top: 2rem;
   border-top: 2px solid #e2e8f0;
   
   @media (max-width: 768px) {
      flex-direction: column;
   }
`

const CancelButton = styled.button`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   padding: 1rem 2rem;
   background: transparent;
   color: #64748b;
   border: 2px solid #e2e8f0;
   border-radius: 50px;
   font-size: 1rem;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.3s ease;
   
   &:hover:not(:disabled) {
      background: #f8fafc;
      border-color: #cbd5e1;
      color: #475569;
   }
   
   &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
   }
`

const SubmitButton = styled.button`
   display: flex;
   align-items: center;
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
