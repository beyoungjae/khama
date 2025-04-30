import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { Input } from '@/components/common/Input'
import { Button } from '@/components/common/Button'
import { Select } from '@/components/common/Select'
import { submitApplication } from '@/services/applicationService'
import { courses } from '@/constants/courses'
import { exams } from '@/constants/exams'
import { AnimatePresence } from 'framer-motion'
// import { ApplicationDetails } from '@/types/application';

export function ApplicationFormPage() {
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
      <Container>
         <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Title>온라인 신청</Title>

            <Section>
               <SectionTitle>신청 구분</SectionTitle>
               <Controller
                  name="type"
                  control={control}
                  render={({ field }) => (
                     <RadioGroup>
                        <RadioLabel className={field.value === 'education' ? 'active' : ''}>
                           <input type="radio" {...field} value="education" checked={field.value === 'education'} />
                           <Icon>🎓</Icon> 교육 신청
                        </RadioLabel>
                        <RadioLabel className={field.value === 'exam' ? 'active' : ''}>
                           <input type="radio" {...field} value="exam" checked={field.value === 'exam'} />
                           <Icon>✍️</Icon> 시험 신청
                        </RadioLabel>
                     </RadioGroup>
                  )}
               />
            </Section>

            <Section>
               <SectionTitle>신청자 정보</SectionTitle>
               <InputRow>
                  <Input placeholder="이름" aria-label="이름" error={errors.details?.applicantName} {...register('details.applicantName', { required: '이름을 입력해주세요.' })} />
                  <Input
                     type="tel"
                     placeholder="연락처 ('-' 제외)"
                     aria-label="연락처"
                     error={errors.details?.applicantPhone}
                     {...register('details.applicantPhone', {
                        required: '연락처를 입력해주세요.',
                        pattern: {
                           value: /^\d{10,11}$/,
                           message: '유효한 연락처를 입력해주세요.',
                        },
                     })}
                  />
               </InputRow>
               <Input
                  type="email"
                  placeholder="이메일"
                  aria-label="이메일"
                  error={errors.details?.applicantEmail}
                  {...register('details.applicantEmail', {
                     required: '이메일을 입력해주세요.',
                     pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: '유효한 이메일 주소를 입력해주세요.',
                     },
                  })}
               />
            </Section>

            <AnimatePresence mode="wait">
               {applicationType === 'education' && (
                  <motion.div key="education" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                     <Section>
                        <SectionTitle>교육 정보</SectionTitle>
                        <Controller name="details.courseName" control={control} rules={{ required: '희망 교육 과정을 선택해주세요.' }} render={({ field, fieldState: { error } }) => <Select {...field} options={courses} placeholder="-- 교육 과정 선택 --" error={error} label="희망 교육 과정" />} />
                        <Input placeholder="희망 교육 시간대 (예: 평일 저녁)" aria-label="희망 교육 시간대" {...register('details.preferredSchedule')} />
                     </Section>
                  </motion.div>
               )}

               {applicationType === 'exam' && (
                  <motion.div key="exam" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                     <Section>
                        <SectionTitle>시험 정보</SectionTitle>
                        <Controller name="details.examName" control={control} rules={{ required: '응시 시험을 선택해주세요.' }} render={({ field, fieldState: { error } }) => <Select {...field} options={exams} placeholder="-- 응시 시험 선택 --" error={error} label="응시 시험명" />} />
                        <Input placeholder="응시 회차 (예: 2024년 5회차)" aria-label="응시 회차" {...register('details.examSession')} />
                     </Section>
                  </motion.div>
               )}
            </AnimatePresence>

            <Section>
               <SectionTitle>지원 동기 (선택)</SectionTitle>
               <TextArea placeholder="간단한 지원 동기나 자기소개를 작성해주세요." rows={5} {...register('details.motivation')} />
            </Section>

            <SubmitButtonWrapper>
               <Button type="submit" disabled={isSubmitting} size="large" fullWidth>
                  {isSubmitting ? '제출 중...' : '신청서 제출'}
               </Button>
            </SubmitButtonWrapper>
         </FormWrapper>
      </Container>
   )
}

const Container = styled.div`
   padding: 3rem 2rem;
   max-width: 800px;
   margin: 0 auto;
`

const FormWrapper = styled.form`
   background-color: #fff;
   padding: 2.5rem;
   border-radius: 8px;
   border: 1px solid #eee;
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`

const Title = styled.h1`
   font-size: 2rem;
   font-weight: bold;
   text-align: center;
   margin-bottom: 2.5rem;
`

const Section = styled.section`
   margin-bottom: 2rem;
   padding-bottom: 2rem;
   border-bottom: 1px dashed #ddd;

   &:last-of-type {
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 2.5rem;
   }
`

const SectionTitle = styled.h2`
   font-size: 1.3rem;
   font-weight: 600;
   margin-bottom: 1.5rem;
   color: #333;
`

const RadioGroup = styled.div`
   display: flex;
   gap: 2rem;
`

const RadioLabel = styled.label`
   display: flex;
   align-items: center;
   cursor: pointer;
   font-size: 1rem;

   input[type='radio'] {
      margin-right: 0.5rem;
      cursor: pointer;
      /* 기본 라디오 버튼 스타일 개선 (선택적) */
      appearance: none;
      width: 1.2em;
      height: 1.2em;
      border: 2px solid #ccc;
      border-radius: 50%;
      position: relative;
      outline: none;
      transition: border-color 0.2s;

      &:checked {
         border-color: ${(props) => props.theme.colors.primary || '#007bff'};
      }

      &:checked::before {
         content: '';
         display: block;
         width: 0.6em;
         height: 0.6em;
         background-color: ${(props) => props.theme.colors.primary || '#007bff'};
         border-radius: 50%;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
      }
   }
`

const TextArea = styled.textarea`
   width: 100%;
   padding: 0.8rem 1rem;
   border: 1px solid #ccc;
   border-radius: 4px;
   font-size: 1rem;
   font-family: inherit; /* body 폰트 상속 */
   resize: vertical; /* 수직 리사이즈만 허용 */

   &:focus {
      outline: none;
      border-color: ${(props) => props.theme.colors.primary || '#007bff'};
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
   }
`

const SubmitButtonWrapper = styled.div`
   margin-top: 3rem;
   text-align: center; /* 버튼 중앙 정렬 */
`
