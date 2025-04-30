import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import { getQuestionById } from '@/services/qnaService'
import { Button } from '@/components/common/Button'
import { useAuth } from '@/contexts/AuthContext'
// import { Question } from '@/types/qna';

export function QnaDetailPage() {
   const { id } = useParams()
   const navigate = useNavigate()
   const { user, isAdmin } = useAuth()
   const [question, setQuestion] = useState(null) // 타입: Question | null
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const [showConfirmModal, setShowConfirmModal] = useState(false) // 삭제 확인 모달 상태

   useEffect(() => {
      const fetchQuestion = async () => {
         if (!id) return
         try {
            setLoading(true)
            const data = await getQuestionById(id)

            // 비밀글 접근 권한 체크 (목업)
            if (data.isPrivate && !isAdmin && data.userId !== user?.id) {
               // 실제 userId 비교 로직 필요 (현재 목업 Question에 userId 없음)
               // 임시로 작성자 이름으로 비교 (매우 부정확, userId 사용 권장)
               if (data.authorName !== user?.name) {
                  throw new Error('비밀글 접근 권한이 없습니다.')
               }
            }

            setQuestion(data)
            setError(null)
         } catch (err) {
            console.error(`Failed to fetch question ${id}:`, err)
            setError(err.message || '질문을 불러오는 중 오류가 발생했습니다.')
            setQuestion(null)
         } finally {
            setLoading(false)
         }
      }

      fetchQuestion()
   }, [id, user, isAdmin]) // user, isAdmin 의존성 추가

   // 삭제 처리 함수 (목업)
   const handleDelete = async () => {
      setShowConfirmModal(false) // 확인 모달 닫기
      if (!question) return
      try {
         console.log(`Deleting question ${question.id} (mock)`)
         // await deleteQuestion(question.id); // 실제 API 호출
         alert('질문이 삭제되었습니다. (목업)')
         navigate('/qna') // 목록으로 이동
      } catch (err) {
         console.error('Failed to delete question:', err)
         alert('질문 삭제 중 오류가 발생했습니다.')
      }
   }

   // 수정 버튼 핸들러 (목업)
   const handleEdit = () => {
      alert('수정 기능은 아직 구현되지 않았습니다.')
      // navigate(`/qna/edit/${id}`); // 수정 페이지로 이동 (구현 필요)
   }

   if (loading) {
      return (
         <Container>
            <LoadingText>로딩 중...</LoadingText>
         </Container>
      )
   }

   // 에러 메시지에서 비밀글 관련 처리 제거 (useEffect에서 처리)
   if (error || !question) {
      return (
         <Container>
            <ErrorText>{error || '질문 정보를 찾을 수 없습니다.'}</ErrorText>
            <ButtonWrapper>
               <Button variant="outline" size="medium" onClick={() => navigate('/qna')} style={{ width: 'auto' }}>
                  목록으로
               </Button>
            </ButtonWrapper>
         </Container>
      )
   }

   // 수정/삭제 권한 확인 (작성자 또는 관리자)
   const canEditOrDelete = isAdmin || question.authorName === user?.name // 임시 비교

   return (
      <Container>
         <QuestionSection>
            <Title>
               {question.isPrivate && <LockIcon>🔒 </LockIcon>}
               {question.title}
            </Title>
            <MetaInfo>
               <span>작성자: {question.authorName || '-'}</span>
               <span>작성일: {new Date(question.createdAt).toLocaleDateString()}</span>
               <span>조회수: {question.viewCount || 0}</span>
            </MetaInfo>
            <Content dangerouslySetInnerHTML={{ __html: question.content.replace(/\n/g, '<br />') }} />
         </QuestionSection>

         {question.isAnswered && question.answer ? (
            <AnswerSection>
               <AnswerTitle>답변 내용</AnswerTitle>
               <MetaInfo>
                  <span>답변자: {question.answer.adminName || '관리자'}</span>
                  <span>답변일: {new Date(question.answer.answeredAt).toLocaleDateString()}</span>
               </MetaInfo>
               <Content dangerouslySetInnerHTML={{ __html: question.answer.content.replace(/\n/g, '<br />') }} />
            </AnswerSection>
         ) : (
            <AnswerSection>
               <AnswerTitle>답변 내용</AnswerTitle>
               <NoAnswerText>아직 답변이 등록되지 않았습니다.</NoAnswerText>
            </AnswerSection>
         )}

         <ButtonWrapper>
            <Button variant="outline" size="medium" onClick={() => navigate('/qna')} style={{ width: 'auto' }}>
               목록으로
            </Button>
            {/* 수정/삭제 버튼 추가 (권한 확인) */}
            {canEditOrDelete && (
               <>
                  <Button variant="secondary" size="medium" onClick={handleEdit} style={{ width: 'auto' }}>
                     수정
                  </Button>
                  <Button variant="danger" size="medium" onClick={() => setShowConfirmModal(true)} style={{ width: 'auto' }}>
                     삭제
                  </Button>
               </>
            )}
         </ButtonWrapper>

         {/* 삭제 확인 모달 (간단 버전) */}
         {showConfirmModal && (
            <ConfirmModalBackdrop onClick={() => setShowConfirmModal(false)}>
               <ConfirmModalContent onClick={(e) => e.stopPropagation()}>
                  <p>정말로 이 질문을 삭제하시겠습니까?</p>
                  <div>
                     <Button variant="danger" onClick={handleDelete}>
                        삭제
                     </Button>
                     <Button variant="outline" onClick={() => setShowConfirmModal(false)}>
                        취소
                     </Button>
                  </div>
               </ConfirmModalContent>
            </ConfirmModalBackdrop>
         )}
      </Container>
   )
}

// 공지사항 상세와 유사한 스타일 + 추가 스타일
const Container = styled.div`
   padding: 2rem 4rem;
   max-width: 900px;
   margin: 0 auto;
`

const QuestionSection = styled.div`
   border-bottom: 2px solid #eee;
   padding-bottom: 2rem;
   margin-bottom: 2rem;
`

const AnswerSection = styled.div`
   background-color: #f9f9f9;
   border: 1px solid #eee;
   border-radius: 8px;
   padding: 1.5rem;
`

const Title = styled.h1`
   font-size: 1.8rem;
   font-weight: bold;
   margin-bottom: 1rem;
`

const LockIcon = styled.span`
   color: #999;
   margin-right: 0.5rem;
`

const MetaInfo = styled.div`
   display: flex;
   gap: 1rem;
   color: #777;
   font-size: 0.9rem;
   margin-bottom: 1.5rem;

   span {
      &::after {
         content: '|';
         margin-left: 1rem;
         color: #ccc;
      }
      &:last-child::after {
         content: '';
      }
   }
`

const Content = styled.div`
   line-height: 1.7;
   min-height: 100px;
   white-space: pre-wrap;
`

const AnswerTitle = styled.h2`
   font-size: 1.3rem;
   font-weight: 600;
   margin-bottom: 1rem;
   color: ${(props) => props.theme.colors.primary || '#007bff'};
`

const NoAnswerText = styled.p`
   color: #888;
   text-align: center;
   padding: 2rem 0;
`

const ButtonWrapper = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 3rem;
   padding-top: 1.5rem;
   border-top: 1px solid #eee;
   gap: 1rem;
`

const LoadingText = styled.p`
   text-align: center;
   padding: 2rem;
`

const ErrorText = styled.p`
   text-align: center;
   color: red;
   padding: 2rem;
`

// 간단한 확인 모달 스타일
const ConfirmModalBackdrop = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.5);
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 1010;
`

const ConfirmModalContent = styled.div`
   background: white;
   padding: 2rem;
   border-radius: 8px;
   text-align: center;
   p {
      margin-bottom: 1.5rem;
   }
   div {
      display: flex;
      justify-content: center;
      gap: 1rem;
   }
`
