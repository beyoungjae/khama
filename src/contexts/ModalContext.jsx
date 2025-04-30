import React, { createContext, useState, useContext } from 'react'

const ModalContext = createContext({
   isContactModalOpen: false,
   openContactModal: () => {},
   closeContactModal: () => {},
})

export function ModalProvider({ children }) {
   const [isContactModalOpen, setIsContactModalOpen] = useState(false)

   const openContactModal = () => setIsContactModalOpen(true)
   const closeContactModal = () => setIsContactModalOpen(false)

   const value = {
      isContactModalOpen,
      openContactModal,
      closeContactModal,
   }

   return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export const useModal = () => {
   return useContext(ModalContext)
}
