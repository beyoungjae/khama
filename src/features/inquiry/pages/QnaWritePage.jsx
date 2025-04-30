import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Input } from '@/components/common/Input'
import { Button } from '@/components/common/Button'
import { createQuestion } from '@/services/qnaService' // 목업 서비스 임포트
import { useAuth } from '@/contexts/AuthContext'

export function QnaWritePage() {
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
      <Container>
         <Title>Q&A 질문하기</Title>
         <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            {errors.root?.serverError && <ServerError>{errors.root.serverError.message}</ServerError>}
            <Input placeholder="제목을 입력하세요" error={errors.title} {...register('title', { required: '제목을 입력해주세요.' })} />
            <TextArea placeholder="문의하실 내용을 입력해주세요." rows={10} error={errors.content} {...register('content', { required: '내용을 입력해주세요.' })} />
            <CheckboxWrapper>
               <Controller
                  name="isPrivate"
                  control={control}
                  render={({ field }) => (
                     <CheckboxLabel>
                        <input type="checkbox" {...field} checked={field.value} />
                        비밀글로 작성하기
                     </CheckboxLabel>
                  )}
               />
               <PrivateInfo>비밀글로 작성 시, 작성자와 관리자만 내용을 확인할 수 있습니다.</PrivateInfo>
            </CheckboxWrapper>
            <ButtonWrapper>
               <Button type="button" variant="outline" onClick={() => navigate('/qna')} disabled={isSubmitting}>
                  취소
               </Button>
               <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? '등록 중...' : '질문 등록'}
               </Button>
            </ButtonWrapper>
         </FormWrapper>
      </Container>
   )
}

// 기존 페이지들과 유사한 스타일 + 폼 관련 스타일
const Container = styled.div`
   padding: 3rem 2rem;
   max-width: 800px;
   margin: 0 auto;
`

const Title = styled.h1`
   font-size: 2rem;
   font-weight: bold;
   text-align: center;
   margin-bottom: 2.5rem;
`

const FormWrapper = styled.form`
   background-color: #fff;
   padding: 2.5rem;
   border-radius: 8px;
   border: 1px solid #eee;
   box-shadow: ${({ theme }) => theme.boxShadow};
`

const TextArea = styled.textarea`
   width: 100%;
   padding: 0.8rem 1rem;
   border: 1px solid ${({ theme, error }) => (error ? 'red' : theme.colors.border)};
   border-radius: 4px;
   font-size: 1rem;
   font-family: inherit;
   resize: vertical;
   margin-bottom: 1rem;

   &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
   }
`

const CheckboxWrapper = styled.div`
   margin-bottom: 1.5rem;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`

const CheckboxLabel = styled.label`
   display: flex;
   align-items: center;
   cursor: pointer;
   font-size: 1rem;
   margin-bottom: 0.5rem;

   input[type='checkbox'] {
      margin-right: 0.5rem;
      cursor: pointer;
      width: 1.1em;
      height: 1.1em;
   }
`

const PrivateInfo = styled.p`
   font-size: 0.85rem;
   color: ${({ theme }) => theme.colors.textSecondary};
   margin-left: 1.6em; /* 체크박스 너비 + 여백 만큼 */
`

const ButtonWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   gap: 1rem;
   margin-top: 1rem;
`

const ServerError = styled.p`
   color: red;
   background-color: rgba(255, 0, 0, 0.1);
   padding: 0.8rem;
   border-radius: 4px;
   margin-bottom: 1rem;
   text-align: center;
   font-size: 0.9rem;
`
