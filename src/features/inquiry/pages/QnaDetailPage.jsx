import { useState, useEffect } from 'react'
import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import { FaQuestionCircle, FaUser, FaCalendarAlt, FaEye, FaArrowLeft, FaLock, FaCheckCircle, FaClock, FaEdit, FaTrash, FaExclamationTriangle } from 'react-icons/fa'
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
import { getQuestionById } from '@/services/qnaService'
import { Button } from '@/components/common/Button'
import { useAuth } from '@/contexts/AuthContext'
// import { Question } from '@/types/qna';

export function QnaDetailPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div
   
   const { id } = useParams()
   const navigate = useNavigate()
   const { user, isAdmin } = useAuth()
   const [question, setQuestion] = useState(null) // 타입: Question | null
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const [showConfirmModal, setShowConfirmModal] = useState(false) // 삭제 확인 모달 상태
   
   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.2 })

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
         <PageWrapper>
            <LoadingContainer>
               <LoadingSkeleton />
               <LoadingText>로딩 중...</LoadingText>
            </LoadingContainer>
         </PageWrapper>
      )
   }

   if (error || !question) {
      return (
         <PageWrapper>
            <ErrorContainer>
               <ErrorCard>
                  <CardIcon $accent>
                     <FaQuestionCircle />
                  </CardIcon>
                  <CardTitle>오류 발생</CardTitle>
                  <CardDescription>{error || '질문 정보를 찾을 수 없습니다.'}</CardDescription>
                  <BackButton onClick={() => navigate('/qna')}>
                     <FaArrowLeft /> 목록으로 돌아가기
                  </BackButton>
               </ErrorCard>
            </ErrorContainer>
         </PageWrapper>
      )
   }

   // 수정/삭제 권한 확인 (작성자 또는 관리자)
   const canEditOrDelete = isAdmin || question.authorName === user?.name // 임시 비교

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
                     <FaQuestionCircle /> Q&A 상세
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     <GradientText>질문</GradientText> 상세보기
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "{question?.title || '로딩 중...'}"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     질문에 대한 자세한 내용과
                     <br />
                     답변을 확인해보세요
                  </HeroDescription>
               </motion.div>
               <HeroImageContainer as={motion.div} variants={slideInRight}>
                  <HeroImagePlaceholder>
                     <FaQuestionCircle size={80} />
                     <p>Q&A 상세</p>
                  </HeroImagePlaceholder>
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         <Container>
            <Section ref={contentRef}>
               <QnaDetailCard
                  as={motion.div}
                  initial="hidden"
                  animate={contentInView ? "visible" : "hidden"}
                  variants={staggerContainer}
               >
                  <QuestionSection as={motion.div} variants={fadeInUp}>
                     <QuestionHeader>
                        <QuestionTitle>
                           {question.isPrivate && (
                              <PrivateIcon>
                                 <FaLock size={16} />
                              </PrivateIcon>
                           )}
                           {question.title}
                        </QuestionTitle>
                        <QuestionMetaWrapper>
                           <MetaItem>
                              <FaUser size={14} />
                              <span>{question.authorName || '익명'}</span>
                           </MetaItem>
                           <MetaItem>
                              <FaCalendarAlt size={14} />
                              <span>{new Date(question.createdAt).toLocaleDateString()}</span>
                           </MetaItem>
                           <MetaItem>
                              <FaEye size={14} />
                              <span>{question.viewCount || 0}회</span>
                           </MetaItem>
                        </QuestionMetaWrapper>
                     </QuestionHeader>
                     
                     <QuestionContent
                        dangerouslySetInnerHTML={{ __html: question.content.replace(/\n/g, '<br />') }}
                     />
                  </QuestionSection>

                  <AnswerSection as={motion.div} variants={fadeInUp}>
                     <AnswerHeader>
                        <AnswerTitle>
                           {question.isAnswered && question.answer ? (
                              <><FaCheckCircle size={18} /> 답변 내용</>
                           ) : (
                              <><FaClock size={18} /> 답변 대기 중</>
                           )}
                        </AnswerTitle>
                        {question.isAnswered && question.answer && (
                           <AnswerMetaWrapper>
                              <MetaItem>
                                 <FaUser size={14} />
                                 <span>{question.answer.adminName || '관리자'}</span>
                              </MetaItem>
                              <MetaItem>
                                 <FaCalendarAlt size={14} />
                                 <span>{new Date(question.answer.answeredAt).toLocaleDateString()}</span>
                              </MetaItem>
                           </AnswerMetaWrapper>
                        )}
                     </AnswerHeader>
                     
                     {question.isAnswered && question.answer ? (
                        <AnswerContent
                           dangerouslySetInnerHTML={{ __html: question.answer.content.replace(/\n/g, '<br />') }}
                        />
                     ) : (
                        <NoAnswerMessage>
                           <FaClock size={24} />
                           <p>아직 답변이 등록되지 않았습니다.</p>
                           <span>빠른 시일 내에 답변드리겠습니다.</span>
                        </NoAnswerMessage>
                     )}
                  </AnswerSection>

                  <QnaActions as={motion.div} variants={fadeInUp}>
                     <ActionButtonGroup>
                        <BackButton onClick={() => navigate('/qna')}>
                           <FaArrowLeft /> 목록으로 돌아가기
                        </BackButton>
                        
                        {canEditOrDelete && (
                           <>
                              <EditButton onClick={handleEdit}>
                                 <FaEdit /> 수정
                              </EditButton>
                              <DeleteButton onClick={() => setShowConfirmModal(true)}>
                                 <FaTrash /> 삭제
                              </DeleteButton>
                           </>
                        )}
                     </ActionButtonGroup>
                  </QnaActions>
               </QnaDetailCard>
            </Section>
         </Container>

         {/* 삭제 확인 모달 */}
         {showConfirmModal && (
            <ConfirmModalBackdrop
               as={motion.div}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setShowConfirmModal(false)}
            >
               <ConfirmModalContent
                  as={motion.div}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
               >
                  <ModalIcon>
                     <FaExclamationTriangle />
                  </ModalIcon>
                  <ModalTitle>질문 삭제</ModalTitle>
                  <ModalMessage>정말로 이 질문을 삭제하시겠습니까?<br />삭제된 내용은 복구할 수 없습니다.</ModalMessage>
                  <ModalActions>
                     <ConfirmButton onClick={handleDelete}>
                        <FaTrash /> 삭제
                     </ConfirmButton>
                     <CancelButton onClick={() => setShowConfirmModal(false)}>
                        취소
                     </CancelButton>
                  </ModalActions>
               </ConfirmModalContent>
            </ConfirmModalBackdrop>
         )}
      </PageWrapper>
   )
}

// QnaDetailPage 전용 스타일 컴포넌트
const LoadingContainer = styled.div`
   padding: 6rem 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 2rem;
`

const LoadingSkeleton = styled.div`
   width: 80px;
   height: 80px;
   border: 4px solid #f3f3f3;
   border-top: 4px solid #4facfe;
   border-radius: 50%;
   animation: spin 1s linear infinite;

   @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
   }
`

const LoadingText = styled.p`
   font-size: 1.2rem;
   font-weight: 600;
   color: #64748b;
`

const ErrorContainer = styled.div`
   padding: 6rem 0;
   display: flex;
   justify-content: center;
   align-items: center;
`

const ErrorCard = styled(Card)`
   text-align: center;
   max-width: 500px;
   padding: 3rem;
`

const BackButton = styled.button`
   display: flex;
   align-items: center;
   gap: 0.75rem;
   padding: 1rem 2rem;
   background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
   color: white;
   border: none;
   border-radius: 50px;
   font-size: 1rem;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.3s ease;
   box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
   
   &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
   }
`

const QnaDetailCard = styled(Card)`
   max-width: 1000px;
   margin: 0 auto;
   padding: 0;
   overflow: hidden;
`

const QuestionSection = styled.div`
   padding: 2.5rem;
   border-bottom: 2px solid #e2e8f0;
`

const QuestionHeader = styled.div`
   margin-bottom: 2rem;
`

const QuestionTitle = styled.h1`
   display: flex;
   align-items: center;
   gap: 1rem;
   font-size: 2rem;
   font-weight: 700;
   color: #1e293b;
   margin-bottom: 1.5rem;
   line-height: 1.4;
   
   @media (max-width: 768px) {
      font-size: 1.5rem;
   }
`

const PrivateIcon = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 32px;
   height: 32px;
   background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
   color: white;
   border-radius: 50%;
   flex-shrink: 0;
`

const QuestionMetaWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 2rem;
   flex-wrap: wrap;
   
   @media (max-width: 768px) {
      gap: 1rem;
      flex-direction: column;
      align-items: flex-start;
   }
`

const MetaItem = styled.div`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   color: #64748b;
   font-size: 0.9rem;
   font-weight: 500;
   
   svg {
      opacity: 0.7;
   }
`

const QuestionContent = styled.div`
   line-height: 1.8;
   font-size: 1.1rem;
   color: #374151;
   min-height: 200px;
   white-space: pre-wrap;
   
   @media (max-width: 768px) {
      font-size: 1rem;
   }
   
   p {
      margin-bottom: 1rem;
   }
   
   strong {
      color: #1e293b;
      font-weight: 600;
   }
`

const AnswerSection = styled.div`
   padding: 2.5rem;
   background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
   border-bottom: 2px solid #e2e8f0;
`

const AnswerHeader = styled.div`
   margin-bottom: 2rem;
`

const AnswerTitle = styled.h2`
   display: flex;
   align-items: center;
   gap: 0.75rem;
   font-size: 1.5rem;
   font-weight: 600;
   color: #059669;
   margin-bottom: 1rem;
   
   svg {
      color: #10b981;
   }
`

const AnswerMetaWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 2rem;
   flex-wrap: wrap;
   
   @media (max-width: 768px) {
      gap: 1rem;
   }
`

const AnswerContent = styled.div`
   line-height: 1.8;
   font-size: 1.1rem;
   color: #374151;
   white-space: pre-wrap;
   background: white;
   padding: 2rem;
   border-radius: 12px;
   border: 1px solid #e2e8f0;
   
   @media (max-width: 768px) {
      padding: 1.5rem;
      font-size: 1rem;
   }
   
   p {
      margin-bottom: 1rem;
   }
   
   strong {
      color: #1e293b;
      font-weight: 600;
   }
`

const NoAnswerMessage = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   padding: 3rem;
   background: white;
   border-radius: 12px;
   border: 2px dashed #d1d5db;
   color: #64748b;
   
   svg {
      margin-bottom: 1rem;
      opacity: 0.5;
   }
   
   p {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #374151;
   }
   
   span {
      font-size: 0.9rem;
   }
`

const QnaActions = styled.div`
   padding: 2.5rem;
   background: #f8fafc;
   border-top: 1px solid #e2e8f0;
`

const ActionButtonGroup = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1rem;
   flex-wrap: wrap;
`

const EditButton = styled.button`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   padding: 1rem 1.5rem;
   background: linear-gradient(135deg, #10b981 0%, #059669 100%);
   color: white;
   border: none;
   border-radius: 50px;
   font-size: 0.9rem;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.3s ease;
   box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
   
   &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
   }
`

const DeleteButton = styled.button`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   padding: 1rem 1.5rem;
   background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
   color: white;
   border: none;
   border-radius: 50px;
   font-size: 0.9rem;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.3s ease;
   box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
   
   &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
   }
`

// 모달 스타일
const ConfirmModalBackdrop = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.6);
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 1010;
   backdrop-filter: blur(4px);
`

const ConfirmModalContent = styled.div`
   background: white;
   padding: 3rem;
   border-radius: 20px;
   text-align: center;
   max-width: 500px;
   width: 90%;
   box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
`

const ModalIcon = styled.div`
   width: 80px;
   height: 80px;
   background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 auto 1.5rem;
   color: white;
   font-size: 2rem;
`

const ModalTitle = styled.h3`
   font-size: 1.5rem;
   font-weight: 700;
   color: #1e293b;
   margin-bottom: 1rem;
`

const ModalMessage = styled.p`
   color: #64748b;
   line-height: 1.6;
   margin-bottom: 2rem;
   font-size: 1rem;
`

const ModalActions = styled.div`
   display: flex;
   justify-content: center;
   gap: 1rem;
   flex-wrap: wrap;
`

const ConfirmButton = styled.button`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   padding: 1rem 2rem;
   background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
   color: white;
   border: none;
   border-radius: 50px;
   font-size: 1rem;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.3s ease;
   box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
   
   &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
   }
`

const CancelButton = styled.button`
   padding: 1rem 2rem;
   background: transparent;
   color: #64748b;
   border: 2px solid #e2e8f0;
   border-radius: 50px;
   font-size: 1rem;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.3s ease;
   
   &:hover {
      background: #f8fafc;
      border-color: #cbd5e1;
      color: #475569;
   }
`
