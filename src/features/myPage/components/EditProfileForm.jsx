import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/common/Input'
import { Button } from '@/components/common/Button'
import { useEffect } from 'react'

export function EditProfileForm({ currentUser, onUpdate, onCancel }) {
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
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
         <Title>회원 정보 수정</Title>
         <InputGroup>
            <Input label="이름" error={errors.name} {...register('name', { required: '이름을 입력해주세요.' })} />
            <Input
               label="연락처 ('-' 제외)"
               type="tel"
               error={errors.phone}
               {...register('phone', {
                  required: '연락처를 입력해주세요.',
                  pattern: {
                     value: /^\d{10,11}$/,
                     message: '유효한 연락처를 입력해주세요.',
                  },
               })}
            />
         </InputGroup>
         <ButtonContainer>
            <Button type="submit" disabled={isSubmitting}>
               {isSubmitting ? '저장 중...' : '저장'}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
               취소
            </Button>
         </ButtonContainer>
      </FormWrapper>
   )
}

const FormWrapper = styled.form`
   padding: 1rem;
`

const Title = styled.h2`
   font-size: 1.5rem;
   font-weight: 600;
   text-align: center;
   margin-bottom: 2rem;
`

const InputGroup = styled.div`
   margin-bottom: 1.5rem;
   > div {
      margin-bottom: 1rem;
   }
`

const ButtonContainer = styled.div`
   display: flex;
   justify-content: flex-end;
   gap: 0.5rem;
   margin-top: 2rem;
`
