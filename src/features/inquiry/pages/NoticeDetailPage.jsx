import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getNoticeById } from '@/services/noticeService'
import { Button } from '@/components/common/Button'
// import { Notice } from '@/types/notice';

export function NoticeDetailPage() {
   const { id } = useParams() // URL 파라미터에서 id 가져오기
   const navigate = useNavigate()
   const [notice, setNotice] = useState(null) // 타입: Notice | null
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      const fetchNotice = async () => {
         if (!id) return
         try {
            setLoading(true)
            const data = await getNoticeById(id)
            setNotice(data)
            setError(null)
         } catch (err) {
            console.error(`Failed to fetch notice ${id}:`, err)
            setError('공지사항을 불러오는 중 오류가 발생했습니다.')
            setNotice(null)
         } finally {
            setLoading(false)
         }
      }

      fetchNotice()
   }, [id])

   if (loading) {
      return (
         <Container>
            <LoadingText>로딩 중...</LoadingText>
         </Container>
      )
   }

   if (error || !notice) {
      return (
         <Container>
            <ErrorText>{error || '공지사항 정보를 찾을 수 없습니다.'}</ErrorText>
         </Container>
      )
   }

   return (
      <Container>
         <Title>{notice.title}</Title>
         <MetaInfo>
            <span>작성자: {notice.author || '-'}</span>
            <span>작성일: {new Date(notice.createdAt).toLocaleDateString()}</span>
            <span>조회수: {notice.viewCount || 0}</span>
         </MetaInfo>
         <Content dangerouslySetInnerHTML={{ __html: notice.content.replace(/\n/g, '<br />') }} />
         <ButtonWrapper>
            <Button variant="outline" size="medium" onClick={() => navigate('/notice')} style={{ width: 'auto' }}>
               목록으로
            </Button>
         </ButtonWrapper>
      </Container>
   )
}

const Container = styled.div`
   padding: 2rem 4rem;
   max-width: 900px;
   margin: 0 auto;
`

const Title = styled.h1`
   font-size: 1.8rem;
   font-weight: bold;
   margin-bottom: 1rem;
   border-bottom: 2px solid #eee;
   padding-bottom: 1rem;
`

const MetaInfo = styled.div`
   display: flex;
   gap: 1rem;
   color: #777;
   font-size: 0.9rem;
   margin-bottom: 2rem;
   padding-bottom: 1rem;
   border-bottom: 1px solid #eee;

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
   min-height: 200px; /* 최소 높이 확보 */
   padding: 1rem 0;
   white-space: pre-wrap; /* 공백 및 줄바꿈 유지 */
`

const ButtonWrapper = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 3rem;
   padding-top: 1.5rem;
   border-top: 1px solid #eee;
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
