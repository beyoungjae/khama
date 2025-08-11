import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { FaUser, FaPhone, FaSave, FaTimes } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import {
  fadeInUp,
  fadeInScale,
  staggerContainer,
  Card
} from '../../../components/common/SharedStyles'

export function EditProfileForm({ currentUser, onUpdate, onCancel }) {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div
   
   const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
   } = useForm({
      defaultValues: {
         name: currentUser?.name || '',
         phone: currentUser?.phone || '',
      },
   })

   useEffect(() => {
      reset({
         name: currentUser?.name || '',
         phone: currentUser?.phone || '',
      })
   }, [currentUser, reset])

   const onSubmit = (data) => {
      onUpdate(data)
   }

   return (
      <FormCard 
         ref={formRef}
         as={motion.div}
         initial="hidden"
         animate={formInView ? "visible" : "hidden"}
         variants={staggerContainer}
      >
         <FormHeader as={motion.div} variants={fadeInScale}>
            <FaUser />
            <Title>회원 정보 수정</Title>
         </FormHeader>
         
         <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <InputGroup as={motion.div} variants={fadeInUp}>
               <FieldWrapper>
                  <FieldIcon>
                     <FaUser />
                  </FieldIcon>
                  <div style={{ flex: 1 }}>
                     <FieldLabel>이름</FieldLabel>
                     <StyledInput
                        type="text"
                        placeholder="이름을 입력하세요"
                        error={errors.name}
                        {...register('name', { required: '이름을 입력해주세요.' })}
                     />
                     {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                  </div>
               </FieldWrapper>
            </InputGroup>
            
            <InputGroup as={motion.div} variants={fadeInUp}>
               <FieldWrapper>
                  <FieldIcon>
                     <FaPhone />
                  </FieldIcon>
                  <div style={{ flex: 1 }}>
                     <FieldLabel>연락처</FieldLabel>
                     <StyledInput
                        type="tel"
                        placeholder="연락처를 입력하세요 ('-' 제외)"
                        error={errors.phone}
                        {...register('phone', {
                           required: '연락처를 입력해주세요.',
                           pattern: {
                              value: /^\d{10,11}$/,
                              message: '유효한 연락처를 입력해주세요.',
                           },
                        })}
                     />
                     {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
                  </div>
               </FieldWrapper>
            </InputGroup>
            
            <ButtonContainer as={motion.div} variants={fadeInUp}>
               <SaveButton type="submit" disabled={isSubmitting}>
                  <FaSave />
                  {isSubmitting ? '저장 중...' : '저장'}
               </SaveButton>
               <CancelButton type="button" onClick={onCancel}>
                  <FaTimes />
                  취소
               </CancelButton>
            </ButtonContainer>
         </FormWrapper>
      </FormCard>
   )
}

// 현대화된 스타일 컴포넌트
const FormCard = styled(Card)`
   max-width: 500px;
   margin: 0 auto;
   padding: 0;
   overflow: hidden;
`

const FormHeader = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;
   padding: 2rem;
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   color: white;
   
   svg {
      font-size: 1.5rem;
   }
`

const Title = styled.h2`
   font-size: 1.5rem;
   font-weight: 600;
   margin: 0;
`

const FormWrapper = styled.form`
   padding: 2rem;
`

const InputGroup = styled.div`
   margin-bottom: 2rem;
`

const FieldWrapper = styled.div`
   display: flex;
   align-items: flex-start;
   gap: 1.5rem;
   
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

const ButtonContainer = styled.div`
   display: flex;
   justify-content: flex-end;
   gap: 1rem;
   margin-top: 2rem;
   
   @media (max-width: 768px) {
      flex-direction: column;
      gap: 0.75rem;
   }
`

const SaveButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;
   padding: 0.75rem 1.5rem;
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   color: white;
   border: none;
   border-radius: 25px;
   font-size: 1rem;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.3s ease;
   min-width: 120px;
   
   &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
   }
   
   &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
   }
`

const CancelButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;
   padding: 0.75rem 1.5rem;
   background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
   color: #64748b;
   border: 2px solid #e2e8f0;
   border-radius: 25px;
   font-size: 1rem;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.3s ease;
   min-width: 120px;
   
   &:hover {
      background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
      color: white;
      border-color: #ff6b6b;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
   }
`