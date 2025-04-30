import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/common/Input'
import { Button } from '@/components/common/Button'
import { TextArea } from '@/components/common/TextArea'

export function ContactPage() {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
   } = useForm()

   // 목업 문의 제출 함수
   const onSubmit = async (data) => {
      console.log('Contact Form Data:', data)
      // 실제 API 호출 로직 (예: sendContactEmail(data))
      await new Promise((res) => setTimeout(res, 1000)) // 1초 대기
      alert('문의가 성공적으로 접수되었습니다.')
      reset()
   }

   return (
      <Container>
         <Title>문의하기</Title>
         <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Input label="이름" placeholder="성함을 입력해주세요" error={errors.name} {...register('name', { required: '이름을 입력해주세요.' })} />
            <Input
               label="이메일"
               type="email"
               placeholder="답변 받으실 이메일 주소"
               error={errors.email}
               {...register('email', {
                  required: '이메일을 입력해주세요.',
                  pattern: {
                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                     message: '유효한 이메일 주소를 입력해주세요.',
                  },
               })}
            />
            <Input label="제목" placeholder="문의 제목을 입력해주세요" error={errors.title} {...register('title', { required: '제목을 입력해주세요.' })} />
            <TextArea label="문의 내용" placeholder="문의하실 내용을 자세히 작성해주세요." rows={8} error={errors.content} {...register('content', { required: '문의 내용을 입력해주세요.' })} />
            <Button type="submit" disabled={isSubmitting} fullWidth size="large">
               {isSubmitting ? '전송 중...' : '문의 접수'}
            </Button>
         </FormWrapper>
      </Container>
   )
}

const Container = styled.div`
   padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
   max-width: 700px;
   margin: 0 auto;
`

const Title = styled.h1`
   font-size: ${({ theme }) => theme.fontSizes.h2};
   font-weight: 700;
   text-align: center;
   margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const FormWrapper = styled.form`
   background-color: #fff;
   padding: ${({ theme }) => theme.spacing.xl};
   border-radius: ${({ theme }) => theme.borderRadius};
   border: 1px solid ${({ theme }) => theme.colors.border};
   box-shadow: ${({ theme }) => theme.boxShadow};

   // Input/TextArea Wrapper의 마진 조정 (Input.jsx/TextArea.jsx 에 정의된 경우)
   > div {
      // InputWrapper 또는 TextAreaWrapper
      margin-bottom: ${({ theme }) => theme.spacing.lg};
   }

   // 마지막 버튼 상단 마진 추가
   > button[type='submit'] {
      margin-top: ${({ theme }) => theme.spacing.md};
   }
`
