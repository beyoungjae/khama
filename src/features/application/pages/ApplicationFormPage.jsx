import { motion, AnimatePresence } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { useForm, Controller } from 'react-hook-form'
import { FaFileAlt, FaUser, FaTimes, FaCheck, FaGraduationCap, FaClipboard, FaEnvelope, FaPhone, FaComments } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { submitApplication } from '@/services/applicationService'
import { courses } from '@/constants/courses'
import { exams } from '@/constants/exams'
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
  Section,
  SectionHeader,
  SectionTitle,
  Card
} from '../../../components/common/SharedStyles'
// import { ApplicationDetails } from '@/types/application';

export function ApplicationFormPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div
   
   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   
   const {
      register,
      handleSubmit,
      control, // Controller 사용을 위해 필요
      watch,
      formState: { errors, isSubmitting },
      reset, // 폼 초기화
   } = useForm({
      defaultValues: {
         type: 'education', // 기본값 설정
         details: {
            applicantName: '',
            applicantPhone: '',
            applicantEmail: '',
            courseName: '',
            examName: '',
            motivation: '',
         },
      },
   })

   const applicationType = watch('type') // 신청 유형 감시

   const onSubmit = async (data) => {
      console.log('Application Data:', data)
      try {
         // type에 따라 불필요한 details 필드 제거 (선택적)
         const payload = {
            type: data.type,
            details: {
               applicantName: data.details.applicantName,
               applicantPhone: data.details.applicantPhone,
               applicantEmail: data.details.applicantEmail,
               motivation: data.details.motivation,
               ...(data.type === 'education' && { courseName: data.details.courseName, preferredSchedule: data.details.preferredSchedule }),
               ...(data.type === 'exam' && { examName: data.details.examName, examSession: data.details.examSession }),
            },
         }

         await submitApplication(payload)
         alert('신청이 성공적으로 제출되었습니다.')
         reset() // 폼 초기화
         // TODO: 신청 완료 후 마이페이지 등으로 이동
      } catch (error) {
         console.error('Application submission failed:', error)
         alert('신청 제출 중 오류가 발생했습니다.')
      }
   }

   return (
      <PageWrapper>
         <ModernHeroSection bgImage={getImageUrl('hero', 'contact.jpg')} ref={heroRef}>
            <HeroBackground radialGradient="radial-gradient(circle at 20% 80%, rgba(79, 172, 254, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)" />
            <HeroContainer>
               <motion.div
                  initial="hidden"
                  animate={heroInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaFileAlt /> 온라인 신청
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     <GradientText>온라인</GradientText> 신청
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "교육과 시험을 간편하게 온라인으로 신청하세요"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     필요한 정보를 입력하고 쉽고 빠르게 신청을 완료하세요
                  </HeroDescription>
               </motion.div>
            </HeroContainer>
         </ModernHeroSection>

         <Container>
            <Section ref={formRef}>
               <ApplicationCard
                  as={motion.div}
                  initial="hidden"
                  animate={formInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                     <FormSection as={motion.div} variants={fadeInUp}>
                        <FormSectionTitle>
                           <FaClipboard /> 신청 구분
                        </FormSectionTitle>
                        <Controller
                           name="type"
                           control={control}
                           render={({ field }) => (
                              <RadioGroup>
                                 <RadioOption className={field.value === 'education' ? 'active' : ''}>
                                    <RadioInput 
                                       type="radio" 
                                       {...field} 
                                       value="education" 
                                       checked={field.value === 'education'} 
                                    />
                                    <RadioLabel>
                                       <FaGraduationCap />
                                       <div>
                                          <div className="title">교육 신청</div>
                                          <div className="desc">전문 교육 과정 신청</div>
                                       </div>
                                    </RadioLabel>
                                 </RadioOption>
                                 <RadioOption className={field.value === 'exam' ? 'active' : ''}>
                                    <RadioInput 
                                       type="radio" 
                                       {...field} 
                                       value="exam" 
                                       checked={field.value === 'exam'} 
                                    />
                                    <RadioLabel>
                                       <FaClipboard />
                                       <div>
                                          <div className="title">시험 신청</div>
                                          <div className="desc">자격 시험 접수</div>
                                       </div>
                                    </RadioLabel>
                                 </RadioOption>
                              </RadioGroup>
                           )}
                        />
                     </FormSection>

                     <FormSection as={motion.div} variants={fadeInUp}>
                        <FormSectionTitle>
                           <FaUser /> 신청자 정보
                        </FormSectionTitle>
                        <FormField>
                           <FieldIcon>
                              <FaUser />
                           </FieldIcon>
                           <div style={{ flex: 1 }}>
                              <FieldLabel>이름</FieldLabel>
                              <StyledInput
                                 placeholder="이름을 입력하세요"
                                 error={errors.details?.applicantName}
                                 {...register('details.applicantName', { required: '이름을 입력해주세요.' })}
                              />
                              {errors.details?.applicantName && <ErrorMessage>{errors.details.applicantName.message}</ErrorMessage>}
                           </div>
                        </FormField>
                        <FormField>
                           <FieldIcon>
                              <FaPhone />
                           </FieldIcon>
                           <div style={{ flex: 1 }}>
                              <FieldLabel>연락처</FieldLabel>
                              <StyledInput
                                 type="tel"
                                 placeholder="연락처를 입력하세요 ('-' 제외)"
                                 error={errors.details?.applicantPhone}
                                 {...register('details.applicantPhone', {
                                    required: '연락처를 입력해주세요.',
                                    pattern: {
                                       value: /^\d{10,11}$/,
                                       message: '유효한 연락처를 입력해주세요.',
                                    },
                                 })}
                              />
                              {errors.details?.applicantPhone && <ErrorMessage>{errors.details.applicantPhone.message}</ErrorMessage>}
                           </div>
                        </FormField>
                        <FormField>
                           <FieldIcon>
                              <FaEnvelope />
                           </FieldIcon>
                           <div style={{ flex: 1 }}>
                              <FieldLabel>이메일</FieldLabel>
                              <StyledInput
                                 type="email"
                                 placeholder="이메일을 입력하세요"
                                 error={errors.details?.applicantEmail}
                                 {...register('details.applicantEmail', {
                                    required: '이메일을 입력해주세요.',
                                    pattern: {
                                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                       message: '유효한 이메일 주소를 입력해주세요.',
                                    },
                                 })}
                              />
                              {errors.details?.applicantEmail && <ErrorMessage>{errors.details.applicantEmail.message}</ErrorMessage>}
                           </div>
                        </FormField>
                     </FormSection>

                     <AnimatePresence mode="wait">
                        {applicationType === 'education' && (
                           <motion.div 
                              key="education"
                              initial={{ opacity: 0, y: 20 }} 
                              animate={{ opacity: 1, y: 0 }} 
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.3 }}
                           >
                              <FormSection>
                                 <FormSectionTitle>
                                    <FaGraduationCap /> 교육 정보
                                 </FormSectionTitle>
                                 <FormField>
                                    <FieldIcon>
                                       <FaGraduationCap />
                                    </FieldIcon>
                                    <div style={{ flex: 1 }}>
                                       <FieldLabel>희망 교육 과정</FieldLabel>
                                       <Controller 
                                          name="details.courseName" 
                                          control={control} 
                                          rules={{ required: '희망 교육 과정을 선택해주세요.' }} 
                                          render={({ field, fieldState: { error } }) => (
                                             <>
                                                <StyledSelect {...field} error={error}>
                                                   <option value="">-- 교육 과정 선택 --</option>
                                                   {courses?.map(course => (
                                                      <option key={course.value} value={course.value}>
                                                         {course.label}
                                                      </option>
                                                   ))}
                                                </StyledSelect>
                                                {error && <ErrorMessage>{error.message}</ErrorMessage>}
                                             </>
                                          )}
                                       />
                                    </div>
                                 </FormField>
                                 <FormField>
                                    <FieldIcon>
                                       <FaClipboard />
                                    </FieldIcon>
                                    <div style={{ flex: 1 }}>
                                       <FieldLabel>희망 교육 시간대 (선택)</FieldLabel>
                                       <StyledInput
                                          placeholder="희망 교육 시간대 (예: 평일 저녁)"
                                          {...register('details.preferredSchedule')}
                                       />
                                    </div>
                                 </FormField>
                              </FormSection>
                           </motion.div>
                        )}

                        {applicationType === 'exam' && (
                           <motion.div 
                              key="exam"
                              initial={{ opacity: 0, y: 20 }} 
                              animate={{ opacity: 1, y: 0 }} 
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.3 }}
                           >
                              <FormSection>
                                 <FormSectionTitle>
                                    <FaClipboard /> 시험 정보
                                 </FormSectionTitle>
                                 <FormField>
                                    <FieldIcon>
                                       <FaClipboard />
                                    </FieldIcon>
                                    <div style={{ flex: 1 }}>
                                       <FieldLabel>응시 시험</FieldLabel>
                                       <Controller 
                                          name="details.examName" 
                                          control={control} 
                                          rules={{ required: '응시 시험을 선택해주세요.' }} 
                                          render={({ field, fieldState: { error } }) => (
                                             <>
                                                <StyledSelect {...field} error={error}>
                                                   <option value="">-- 응시 시험 선택 --</option>
                                                   {exams?.map(exam => (
                                                      <option key={exam.value} value={exam.value}>
                                                         {exam.label}
                                                      </option>
                                                   ))}
                                                </StyledSelect>
                                                {error && <ErrorMessage>{error.message}</ErrorMessage>}
                                             </>
                                          )}
                                       />
                                    </div>
                                 </FormField>
                                 <FormField>
                                    <FieldIcon>
                                       <FaClipboard />
                                    </FieldIcon>
                                    <div style={{ flex: 1 }}>
                                       <FieldLabel>응시 회차 (선택)</FieldLabel>
                                       <StyledInput
                                          placeholder="응시 회차 (예: 2024년 5회차)"
                                          {...register('details.examSession')}
                                       />
                                    </div>
                                 </FormField>
                              </FormSection>
                           </motion.div>
                        )}
                     </AnimatePresence>

                     <FormSection as={motion.div} variants={fadeInUp}>
                        <FormSectionTitle>
                           <FaComments /> 지원 동기 (선택)
                        </FormSectionTitle>
                        <FormField>
                           <FieldIcon style={{ alignSelf: 'flex-start', marginTop: '2rem' }}>
                              <FaComments />
                           </FieldIcon>
                           <div style={{ flex: 1 }}>
                              <FieldLabel>지원 동기</FieldLabel>
                              <StyledTextArea
                                 placeholder="간단한 지원 동기나 자기소개를 작성해주세요."
                                 rows={5}
                                 {...register('details.motivation')}
                              />
                           </div>
                        </FormField>
                     </FormSection>

                     <FormActions as={motion.div} variants={fadeInUp}>
                        <SubmitButton type="submit" disabled={isSubmitting}>
                           {isSubmitting ? (
                              <>제출 중...</>
                           ) : (
                              <><FaCheck /> 신청서 제출</>
                           )}
                        </SubmitButton>
                     </FormActions>
                  </FormWrapper>
               </ApplicationCard>
            </Section>
         </Container>
      </PageWrapper>
   )
}

// ApplicationFormPage 전용 스타일 컴포넌트
const ApplicationCard = styled(Card)`
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

const FormSection = styled.div`
   margin-bottom: 2.5rem;
   padding-bottom: 2rem;
   border-bottom: 2px solid #e2e8f0;
   
   &:last-child {
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 0;
   }
`

const FormSectionTitle = styled.h3`
   display: flex;
   align-items: center;
   gap: 0.75rem;
   font-size: 1.25rem;
   font-weight: 600;
   color: #1e293b;
   margin-bottom: 2rem;
   
   svg {
      color: #4facfe;
   }
`

const RadioGroup = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 1rem;
   
   @media (max-width: 768px) {
      grid-template-columns: 1fr;
   }
`

const RadioOption = styled.div`
   position: relative;
   
   &.active label {
      border-color: #4facfe;
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
   }
`

const RadioInput = styled.input`
   position: absolute;
   opacity: 0;
   width: 0;
   height: 0;
`

const RadioLabel = styled.label`
   display: flex;
   align-items: center;
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
   
   svg {
      font-size: 1.5rem;
      color: #4facfe;
   }
   
   .title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 0.25rem;
   }
   
   .desc {
      font-size: 0.9rem;
      color: #64748b;
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

const StyledSelect = styled.select`
   width: 100%;
   padding: 1rem 1.25rem;
   border: 2px solid ${({ error }) => (error ? '#ef4444' : '#e2e8f0')};
   border-radius: 12px;
   font-size: 1rem;
   background: white;
   cursor: pointer;
   transition: all 0.3s ease;
   outline: none;
   
   &:focus {
      border-color: #4facfe;
      box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.1);
   }
`

const StyledTextArea = styled.textarea`
   width: 100%;
   padding: 1rem 1.25rem;
   border: 2px solid #e2e8f0;
   border-radius: 12px;
   font-size: 1rem;
   font-family: inherit;
   resize: vertical;
   min-height: 120px;
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

const FormActions = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 2rem;
   padding-top: 2rem;
   border-top: 2px solid #e2e8f0;
`

const SubmitButton = styled.button`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   padding: 1rem 3rem;
   background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
   color: white;
   border: none;
   border-radius: 50px;
   font-size: 1.1rem;
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
