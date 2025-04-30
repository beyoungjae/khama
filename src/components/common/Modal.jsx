import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './Button' // 닫기 버튼용

const backdropVariants = {
   visible: { opacity: 1 },
   hidden: { opacity: 0 },
}

const modalVariants = {
   hidden: {
      y: '-50px',
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: 'easeOut' },
   },
   visible: {
      y: '0',
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
   },
   exit: {
      y: '30px',
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: 'easeIn' },
   },
}

export function Modal({ isOpen, onClose, children }) {
   if (!isOpen) return null

   return (
      <AnimatePresence>
         {isOpen && (
            <Backdrop
               variants={backdropVariants}
               initial="hidden"
               animate="visible"
               exit="hidden"
               onClick={onClose} // 배경 클릭 시 닫기
            >
               <ModalContainer
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 전파 방지
               >
                  <CloseButton variant="ghost" onClick={onClose}>
                     &times;
                  </CloseButton>
                  {children}
               </ModalContainer>
            </Backdrop>
         )}
      </AnimatePresence>
   )
}

const Backdrop = styled(motion.div)`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.6);
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 1000; /* 헤더보다 높게 */
`

const ModalContainer = styled(motion.div)`
   background: white;
   padding: ${({ theme }) => theme.spacing.xl};
   border-radius: ${({ theme }) => theme.borderRadius};
   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
   min-width: 300px;
   max-width: 500px;
   position: relative;
`

const CloseButton = styled(Button)`
   position: absolute;
   top: ${({ theme }) => theme.spacing.sm};
   right: ${({ theme }) => theme.spacing.sm};
   font-size: 1.8rem;
   color: ${({ theme }) => theme.colors.textSecondary};
   padding: 0 ${({ theme }) => theme.spacing.sm}; // 패딩 조정

   &:hover {
      color: ${({ theme }) => theme.colors.text};
      background-color: transparent; // ghost 기본 hover 효과 제거
   }
`
