import { motion } from 'framer-motion' // motion은 애니메이션을 위해 필수적으로 사용됨
import { useForm } from 'react-hook-form'
import { FaUser, FaEnvelope, FaPen, FaPaperPlane, FaComments } from 'react-icons/fa'
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
   Grid,
   Card,
   CardIcon,
   CardContent,
   CardTitle,
   CardDescription,
} from '../../../components/common/SharedStyles'
import styled from 'styled-components'

export function ContactPage() {
   // motion 컴포넌트 사용을 위한 필수 import 보장
   const MotionDiv = motion.div

   const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 })
   const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.2 })
   const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: true, threshold: 0.2 })

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
   } = useForm({ mode: 'onBlur' })

   const onSubmit = async (data) => {
      console.log('Contact Form Data:', data)
      await new Promise((res) => setTimeout(res, 1500))
      alert('문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.')
      reset()
   }

   return (
      <PageWrapper>
         <ModernHeroSection bgImage={getImageUrl('hero', 'contact.jpg')} ref={heroRef}>
            <HeroBackground />
            <HeroContainer>
               <motion.div initial="hidden" animate={heroInView ? 'visible' : 'hidden'} variants={staggerContainer}>
                  <HeroBadge as={motion.div} variants={fadeInScale}>
                     <FaComments /> 문의하기
                  </HeroBadge>
                  <HeroTitle as={motion.h1} variants={slideInLeft}>
                     <GradientText>문의</GradientText> 및 상담
                  </HeroTitle>
                  <HeroSubtitle as={motion.p} variants={slideInRight}>
                     "언제든지 연락하세요, 친절하게 답변드리겠습니다"
                  </HeroSubtitle>
                  <HeroDescription as={motion.p} variants={slideInRight}>
                     궁금한 점이 있으시거나 도움이 필요하시면
                     <br />
                     언제든지 문의해주세요
                  </HeroDescription>
               </motion.div>
               <HeroImageContainer as={motion.div} variants={slideInRight}>
                  <HeroImagePlaceholder>
                     <FaComments size={80} />
                     <p>문의 및 상담</p>
                  </HeroImagePlaceholder>
               </HeroImageContainer>
            </HeroContainer>
         </ModernHeroSection>

         <Container>
            <Section ref={formRef}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} initial="hidden" animate={formInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     문의 양식
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} initial="hidden" animate={formInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     아래 양식을 작성해주시면 빠른 시일 내에 답변드리겠습니다
                  </SectionSubtitle>
               </SectionHeader>

               <Grid columns={1}>
                  <FormCard as={motion.form} initial="hidden" animate={formInView ? 'visible' : 'hidden'} variants={staggerContainer} onSubmit={handleSubmit(onSubmit)}>
                     <FormField as={motion.div} variants={fadeInUp}>
                        <FieldIcon>
                           <FaUser />
                        </FieldIcon>
                        <Input label="성함" placeholder="성함을 입력해주세요" error={errors.name} {...register('name', { required: '성함을 입력해주세요.' })} />
                     </FormField>

                     <FormField as={motion.div} variants={fadeInUp}>
                        <FieldIcon>
                           <FaEnvelope />
                        </FieldIcon>
                        <Input
                           label="이메일 주소"
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
                     </FormField>

                     <FormField as={motion.div} variants={fadeInUp}>
                        <FieldIcon>
                           <FaPen />
                        </FieldIcon>
                        <Input label="문의 제목" placeholder="문의 제목을 입력해주세요" error={errors.title} {...register('title', { required: '문의 제목을 입력해주세요.' })} />
                     </FormField>

                     <FormField as={motion.div} variants={fadeInUp}>
                        <TextArea
                           label="문의 내용"
                           placeholder="문의하실 내용을 자세히 작성해주세요."
                           rows={8}
                           error={errors.content}
                           {...register('content', {
                              required: '문의 내용을 입력해주세요.',
                              minLength: {
                                 value: 10,
                                 message: '최소 10자 이상 입력해주세요.',
                              },
                           })}
                        />
                     </FormField>

                     <SubmitButton as={motion.button} type="submit" disabled={isSubmitting} variants={fadeInUp} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        {isSubmitting ? (
                           <>전송 중...</>
                        ) : (
                           <>
                              문의 접수 <FaPaperPlane style={{ marginLeft: '8px' }} />
                           </>
                        )}
                     </SubmitButton>
                  </FormCard>
               </Grid>
            </Section>

            <Section ref={infoRef}>
               <SectionHeader>
                  <SectionTitle as={motion.h2} initial="hidden" animate={infoInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     연락처 안내
                  </SectionTitle>
                  <SectionSubtitle as={motion.p} initial="hidden" animate={infoInView ? 'visible' : 'hidden'} variants={fadeInUp}>
                     직접 연락을 원하시는 경우 아래 연락처를 이용해주세요
                  </SectionSubtitle>
               </SectionHeader>

               <Grid columns={2}>
                  <Card as={motion.div} variants={fadeInScale} initial="hidden" animate={infoInView ? 'visible' : 'hidden'}>
                     <CardIcon $primary>
                        <FaEnvelope />
                     </CardIcon>
                     <CardTitle>이메일 문의</CardTitle>
                     <CardDescription>
                        khama@example.com
                        <br />
                        원칙적으로 24시간 내 답변
                     </CardDescription>
                  </Card>

                  <Card as={motion.div} variants={fadeInScale} initial="hidden" animate={infoInView ? 'visible' : 'hidden'}>
                     <CardIcon $secondary>
                        <FaComments />
                     </CardIcon>
                     <CardTitle>전화 상담</CardTitle>
                     <CardDescription>
                        02-1234-5678
                        <br />
                        평일 09:00 ~ 18:00 (점심시간 12:00~13:00 제외)
                     </CardDescription>
                  </Card>
               </Grid>
            </Section>
         </Container>
      </PageWrapper>
   )
}

// ContactPage 전용 스타일 컴포넌트
const FormCard = styled(Card)`
   padding: 3rem;
   max-width: 800px;
   margin: 0 auto;
`

const FormField = styled.div`
   position: relative;
   margin-bottom: 2rem;
   display: flex;
   align-items: flex-start;
   gap: 1rem;
`

const FieldIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 10px;
   background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1rem;
   color: white;
   margin-top: 1.5rem;
   flex-shrink: 0;
`

const SubmitButton = styled.button`
   width: 100%;
   padding: 1rem 2rem;
   background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
   color: white;
   border: none;
   border-radius: 50px;
   font-size: 1.1rem;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.3s ease;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 1rem;
   box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);

   &:hover:not(:disabled) {
      box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
      transform: translateY(-2px);
   }

   &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
   }
`
