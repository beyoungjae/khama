import styled, { keyframes } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from '@/routes/AppRouter'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AuthProvider } from '@/contexts/AuthContext'
import { useModal } from '@/contexts/ModalContext'
import { Modal } from '@/components/common/Modal'
import { ContactModalContent } from '@/components/common/ContactModalContent'
import { ScrollToTop } from '@/components/common/ScrollToTop'

function App() {
   const { isContactModalOpen, openContactModal, closeContactModal } = useModal()

   return (
      <BrowserRouter>
         <AuthProvider>
            <ScrollToTop />
            <AppContainer>
               <Header />
               <MainContent>
                  {/* AppRouter 내부의 Routes 컴포넌트가 이 위치에 렌더링될 페이지를 결정합니다 */}
                  {/* BrowserRouter는 AppRouter 내부에 있으므로 Outlet은 필요하지 않습니다. */}
                  {/* AppRouter 자체를 여기에 두면 됩니다. */}
                  <AppRouter />
               </MainContent>
               <Footer />
               <FloatingContactButton onClick={openContactModal} title="문의하기">
                  ?
               </FloatingContactButton>

               <Modal isOpen={isContactModalOpen} onClose={closeContactModal}>
                  <ContactModalContent />
               </Modal>
            </AppContainer>
         </AuthProvider>
      </BrowserRouter>
   )
}

const AppContainer = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
`

const MainContent = styled.main`
   flex: 1; /* Header와 Footer를 제외한 나머지 공간 차지 */
   /* 필요에 따라 패딩 등 추가 스타일 적용 */
`

const fadeIn = keyframes`
   from { opacity: 0; transform: scale(0.5); }
   to { opacity: 1; transform: scale(1); }
`

const FloatingContactButton = styled.button`
   position: fixed;
   bottom: 2rem;
   right: 2rem;
   width: 50px;
   height: 50px;
   background-color: ${(props) => props.theme.colors.primary || '#007bff'};
   color: white;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1.8rem;
   font-weight: bold;
   text-decoration: none;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
   z-index: 1000;
   transition: background-color 0.2s, transform 0.2s;
   animation: ${fadeIn} 0.3s ease-out;
   border: none;
   cursor: pointer;

   &:hover {
      background-color: #0056b3;
      transform: scale(1.1);
   }
`

export default App // main.jsx에서 사용하므로 default export 유지
