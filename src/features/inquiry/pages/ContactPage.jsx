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
   CardTitle,
   CardDescription,
} from '../../../components/common/SharedStyles'
import styled from 'styled-components'

export function ContactPage() {
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

               <FormContainer>
                  <FormCard as={motion.form} initial="hidden" animate={formInView ? 'visible' : 'hidden'} variants={staggerContainer} onSubmit={handleSubmit(onSubmit)}>
                     <FormRow>
                        <FormField as={motion.div} variants={fadeInUp}>
                           <Input label="성함" placeholder="성함을 입력해주세요" error={errors.name} icon={<FaUser />} {...register('name', { required: '성함을 입력해주세요.' })} />
                        </FormField>
                        <FormField as={motion.div} variants={fadeInUp}>
                           <Input
                              label="이메일 주소"
                              type="email"
                              placeholder="답변 받으실 이메일 주소"
                              error={errors.email}
                              icon={<FaEnvelope />}
                              {...register('email', {
                                 required: '이메일을 입력해주세요.',
                                 pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: '유효한 이메일 주소를 입력해주세요.',
                                 },
                              })}
                           />
                        </FormField>
                     </FormRow>

                     <FormField as={motion.div} variants={fadeInUp}>
                        <Input label="문의 제목" placeholder="문의 제목을 입력해주세요" error={errors.title} icon={<FaPen />} {...register('title', { required: '문의 제목을 입력해주세요.' })} />
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

                     <SubmitButtonWrapper as={motion.div} variants={fadeInUp}>
                        <SubmitButton type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                           {isSubmitting ? (
                              <>전송 중...</>
                           ) : (
                              <>
                                 <FaPaperPlane style={{ marginRight: '8px' }} />
                                 문의 접수하기
                              </>
                           )}
                        </SubmitButton>
                     </SubmitButtonWrapper>
                  </FormCard>
               </FormContainer>
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
                        haan@hanallcompany.com
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
                        1566-3321
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
const FormContainer = styled.div`
   display: flex;
   justify-content: center;
   width: 100%;
`

const FormCard = styled(Card)`
   padding: 3rem;
   max-width: 900px;
   width: 100%;
   background: white;
   border-radius: 20px;
   box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
   border: 1px solid #f1f5f9;
`

const FormRow = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 2rem;
   margin-bottom: 2rem;

   @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
   }
`

const FormField = styled.div`
   position: relative;
   margin-bottom: 2rem;
`

const SubmitButtonWrapper = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 2rem;
`

const InputWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
`

const InputLabel = styled.label`
   font-size: 1rem;
   font-weight: 600;
   color: #1f2937;
   margin-bottom: 0.75rem;
   display: flex;
   align-items: center;
   gap: 0.5rem;
`

const IconWrapper = styled.span`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   width: 20px;
   height: 20px;
   color: #ff6b6b;
   font-size: 0.9rem;
`

const InputContainer = styled.div`
   position: relative;
`

const InputField = styled.input`
   width: 100%;
   padding: 1.25rem 1.5rem;
   border: 2px solid #e5e7eb;
   border-radius: 16px;
   font-size: 1rem;
   transition: all 0.3s ease;
   background: #fafbfc;
   box-sizing: border-box;

   &:focus {
      outline: none;
      border-color: #ff6b6b;
      background: white;
      box-shadow: 0 0 0 4px rgba(255, 107, 107, 0.1);
      transform: translateY(-1px);
   }

   &::placeholder {
      color: #9ca3af;
      font-size: 0.95rem;
   }

   ${(props) =>
      props.$error &&
      `
      border-color: #ef4444;
      background: #fef2f2;
      &:focus {
         border-color: #ef4444;
         box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);
      }
   `}
`

const TextAreaField = styled.textarea`
   width: 100%;
   padding: 1.25rem 1.5rem;
   border: 2px solid #e5e7eb;
   border-radius: 16px;
   font-size: 1rem;
   transition: all 0.3s ease;
   background: #fafbfc;
   resize: vertical;
   min-height: 150px;
   font-family: inherit;
   line-height: 1.6;
   box-sizing: border-box;

   &:focus {
      outline: none;
      border-color: #ff6b6b;
      background: white;
      box-shadow: 0 0 0 4px rgba(255, 107, 107, 0.1);
      transform: translateY(-1px);
   }

   &::placeholder {
      color: #9ca3af;
      font-size: 0.95rem;
   }

   ${(props) =>
      props.$error &&
      `
      border-color: #ef4444;
      background: #fef2f2;
      &:focus {
         border-color: #ef4444;
         box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);
      }
   `}
`

const ErrorMessage = styled.span`
   color: #ef4444;
   font-size: 0.875rem;
   margin-top: 0.75rem;
   display: block;
   font-weight: 500;
`

const Input = ({ label, error, icon, ...props }) => (
   <InputWrapper>
      {label && (
         <InputLabel>
            {icon && <IconWrapper>{icon}</IconWrapper>}
            {label}
         </InputLabel>
      )}
      <InputContainer>
         <InputField $error={error} {...props} />
      </InputContainer>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
   </InputWrapper>
)

const TextArea = ({ label, error, ...props }) => (
   <InputWrapper>
      {label && (
         <InputLabel>
            <IconWrapper>
               <FaPen />
            </IconWrapper>
            {label}
         </InputLabel>
      )}
      <InputContainer>
         <TextAreaField $error={error} {...props} />
      </InputContainer>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
   </InputWrapper>
)

const SubmitButton = styled(motion.button)`
   padding: 1.25rem 3rem;
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
   gap: 0.5rem;
   box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
   position: relative;
   overflow: hidden;
   min-width: 200px;

   &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
   }

   &:hover:not(:disabled) {
      box-shadow: 0 12px 35px rgba(255, 107, 107, 0.4);
      transform: translateY(-3px);

      &::before {
         left: 100%;
      }
   }

   &:active:not(:disabled) {
      transform: translateY(-1px);
   }

   &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
      box-shadow: 0 4px 15px rgba(255, 107, 107, 0.2);
   }
`
