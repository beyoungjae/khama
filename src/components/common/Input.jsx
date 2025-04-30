import React from 'react'
import styled from 'styled-components'

// forwardRef를 사용하여 register 함수의 ref를 전달받습니다.
export const Input = React.forwardRef(({ type = 'text', placeholder, error, label, ...props }, ref) => {
   return (
      <InputWrapper>
         {label && <Label htmlFor={props.id || placeholder}>{label}</Label>}
         <StyledInput type={type} placeholder={placeholder} ref={ref} id={props.id || placeholder} {...props} />
         {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </InputWrapper>
   )
})

Input.displayName = 'Input' // forwardRef 사용 시 displayName 설정 권장

const InputWrapper = styled.div`
   margin-bottom: 1rem; /* 입력 필드 간 간격 */
`

const Label = styled.label`
   display: block;
   margin-bottom: 0.5rem;
   font-weight: 500;
   color: #333;
   font-size: 0.9rem;
`

const StyledInput = styled.input`
   width: 100%;
   padding: 0.8rem 1rem;
   border: 1px solid #ccc;
   border-radius: 4px;
   font-size: 1rem;

   &:focus {
      outline: none;
      border-color: ${(props) => props.theme.colors.primary || '#007bff'};
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
   }
`

const ErrorMessage = styled.p`
   color: red;
   font-size: 0.8rem;
   margin-top: 0.3rem;
`
