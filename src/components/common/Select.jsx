import React from 'react'
import styled from 'styled-components'

// Select 컴포넌트 Props
// interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
//   options: { value: string | number; label: string }[];
//   placeholder?: string;
//   error?: { message?: string }; // react-hook-form 에러 객체 타입
//   label?: string; // 라벨 추가 (선택적)
// }

export const Select = React.forwardRef(({ options, placeholder, error, label, ...props }, ref) => {
   return (
      <SelectWrapper>
         {label && <Label>{label}</Label>}
         <StyledSelect ref={ref} {...props}>
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option) => (
               <option key={option.value} value={option.value}>
                  {option.label}
               </option>
            ))}
         </StyledSelect>
         {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </SelectWrapper>
   )
})

Select.displayName = 'Select'

const SelectWrapper = styled.div`
   margin-bottom: 1rem;
`

const Label = styled.label`
   display: block;
   margin-bottom: 0.5rem;
   font-weight: 500;
   color: #333;
`

const StyledSelect = styled.select`
   width: 100%;
   padding: 0.8rem 1rem;
   border: 1px solid #ccc;
   border-radius: 4px;
   font-size: 1rem;
   background-color: white;
   appearance: none; /* 기본 화살표 제거 */
   background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
   background-repeat: no-repeat;
   background-position: right 1rem center;
   background-size: 0.65em auto;
   padding-right: 2.5rem; /* 화살표 공간 확보 */

   &:focus {
      outline: none;
      border-color: ${(props) => props.theme.colors.primary || '#007bff'};
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
   }

   /* IE/Edge 기본 화살표 제거 */
   &::-ms-expand {
      display: none;
   }
`

const ErrorMessage = styled.p`
   color: red;
   font-size: 0.8rem;
   margin-top: 0.3rem;
`
