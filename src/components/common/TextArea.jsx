import React from 'react'
import styled from 'styled-components'

export const TextArea = React.forwardRef(({ placeholder, error, label, rows = 5, ...props }, ref) => {
   return (
      <TextAreaWrapper>
         {label && <Label htmlFor={props.id || placeholder}>{label}</Label>}
         <StyledTextArea placeholder={placeholder} ref={ref} id={props.id || placeholder} rows={rows} {...props} />
         {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </TextAreaWrapper>
   )
})

TextArea.displayName = 'TextArea'

const TextAreaWrapper = styled.div`
   margin-bottom: 1rem;
`

const Label = styled.label`
   display: block;
   margin-bottom: 0.5rem;
   font-weight: 500;
   color: #333;
   font-size: 0.9rem;
`

const ErrorMessage = styled.p`
   color: red;
   font-size: 0.8rem;
   margin-top: 0.3rem;
`

const StyledTextArea = styled.textarea`
   width: 100%;
   padding: 0.8rem 1rem;
   border: 1px solid #ccc;
   border-radius: 4px;
   font-size: 1rem;
   font-family: inherit;
   resize: vertical;

   &:focus {
      outline: none;
      border-color: ${(props) => props.theme.colors.primary || '#007bff'};
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
   }
`
