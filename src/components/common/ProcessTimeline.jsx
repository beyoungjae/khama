import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

const TimelineContainer = styled.div`
   position: relative;
   max-width: 1000px;
   margin: 0 auto;
   padding: 2rem 0;
`

const TimelineLine = styled.div`
   position: absolute;
   left: 50%;
   top: 0;
   bottom: 0;
   width: 4px;
   background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
   transform: translateX(-50%);
   border-radius: 2px;

   @media (max-width: 768px) {
      left: 2rem;
   }
`

const TimelineItem = styled(motion.div)`
   position: relative;
   margin: 3rem 0;
   display: flex;
   align-items: center;

   &:nth-child(even) {
      flex-direction: row-reverse;

      @media (max-width: 768px) {
         flex-direction: row;
      }
   }

   @media (max-width: 768px) {
      flex-direction: row;
      margin-left: 4rem;
   }
`

const TimelineContent = styled.div`
   flex: 1;
   max-width: 45%;
   padding: 2rem;
   background: white;
   border-radius: 15px;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   position: relative;

   &::before {
      content: '';
      position: absolute;
      top: 50%;
      width: 0;
      height: 0;
      border: 15px solid transparent;
   }

   .timeline-item:nth-child(even) &::before {
      left: -30px;
      border-right-color: white;

      @media (max-width: 768px) {
         right: -30px;
         left: auto;
         border-left-color: white;
         border-right-color: transparent;
      }
   }

   .timeline-item:nth-child(odd) &::before {
      right: -30px;
      border-left-color: white;
   }

   @media (max-width: 768px) {
      max-width: calc(100% - 4rem);
      margin-left: 1rem;

      &::before {
         right: -30px;
         left: auto;
         border-left-color: white;
         border-right-color: transparent;
      }
   }
`

const TimelineIcon = styled.div`
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
   width: 60px;
   height: 60px;
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
   font-size: 1.5rem;
   box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
   z-index: 10;

   @media (max-width: 768px) {
      left: 2rem;
      width: 50px;
      height: 50px;
      font-size: 1.2rem;
   }
`

const StepNumber = styled.div`
   position: absolute;
   top: -10px;
   right: -10px;
   width: 30px;
   height: 30px;
   background: #ff6b6b;
   color: white;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 0.8rem;
   font-weight: bold;
   box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
`

const ContentTitle = styled.h3`
   color: #2d3748;
   font-size: 1.4rem;
   font-weight: 700;
   margin-bottom: 1rem;
   line-height: 1.3;
`

const ContentDescription = styled.p`
   color: #4a5568;
   font-size: 1rem;
   line-height: 1.6;
   margin-bottom: 1rem;
`

const ContentDetails = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;

   li {
      color: #718096;
      font-size: 0.9rem;
      line-height: 1.5;
      margin-bottom: 0.5rem;
      padding-left: 1rem;
      position: relative;

      &::before {
         content: '✓';
         position: absolute;
         left: 0;
         color: #48bb78;
         font-weight: bold;
      }
   }
`

const TimelineBadge = styled.div`
   display: inline-block;
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   color: white;
   padding: 0.3rem 0.8rem;
   border-radius: 15px;
   font-size: 0.8rem;
   font-weight: 500;
   margin-top: 1rem;
`

// 애니메이션 variants
const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.3,
      },
   },
}

const itemVariants = {
   hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
   },
   visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
         duration: 0.6,
         ease: 'easeOut',
      },
   },
}

export function ProcessTimeline({ steps, title, subtitle }) {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
   })

   return (
      <div ref={ref}>
         {title && (
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
               <h2
                  style={{
                     fontSize: '2.5rem',
                     fontWeight: '700',
                     color: '#2d3748',
                     marginBottom: '1rem',
                  }}
               >
                  {title}
               </h2>
               {subtitle && (
                  <p
                     style={{
                        fontSize: '1.1rem',
                        color: '#718096',
                        maxWidth: '600px',
                        margin: '0 auto',
                     }}
                  >
                     {subtitle}
                  </p>
               )}
            </div>
         )}

         <TimelineContainer>
            <TimelineLine />

            <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={containerVariants}>
               {steps.map((step, index) => (
                  <TimelineItem key={index} className="timeline-item" variants={itemVariants}>
                     <TimelineIcon>
                        {step.icon}
                        <StepNumber>{index + 1}</StepNumber>
                     </TimelineIcon>

                     <TimelineContent>
                        <ContentTitle>{step.title}</ContentTitle>
                        <ContentDescription>{step.description}</ContentDescription>

                        {step.details && (
                           <ContentDetails>
                              {step.details.map((detail, detailIndex) => (
                                 <li key={detailIndex}>{detail}</li>
                              ))}
                           </ContentDetails>
                        )}

                        {step.badge && <TimelineBadge>{step.badge}</TimelineBadge>}
                     </TimelineContent>
                  </TimelineItem>
               ))}
            </motion.div>
         </TimelineContainer>
      </div>
   )
}
