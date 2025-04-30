import styled, { css } from 'styled-components'

export function Button({ children, variant = 'primary', size = 'medium', disabled, fullWidth = false, ...props }) {
   return (
      <StyledButton variant={variant} size={size} disabled={disabled} $fullWidth={fullWidth} {...props}>
         {children}
      </StyledButton>
   )
}

const sizes = {
   small: css`
      padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
      font-size: ${({ theme }) => theme.fontSizes.small};
   `,
   medium: css`
      padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
      font-size: ${({ theme }) => theme.fontSizes.medium};
   `,
   large: css`
      padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
      font-size: ${({ theme }) => theme.fontSizes.large};
   `,
}

const variants = {
   primary: css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.textLight};
      border: 1px solid ${({ theme }) => theme.colors.primary};

      &:hover:not(:disabled) {
         background-color: ${({ theme }) => theme.colors.secondary};
         border-color: ${({ theme }) => theme.colors.secondary};
      }
   `,
   secondary: css`
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.textLight};
      border: 1px solid ${({ theme }) => theme.colors.secondary};

      &:hover:not(:disabled) {
         background-color: ${({ theme }) => theme.colors.primary};
         border-color: ${({ theme }) => theme.colors.primary};
      }
   `,
   outline: css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};

      &:hover:not(:disabled) {
         background-color: ${({ theme }) => theme.colors.primary}1A;
         color: ${({ theme }) => theme.colors.secondary};
         border-color: ${({ theme }) => theme.colors.secondary};
      }
   `,
   ghost: css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary};
      border: none;

      &:hover:not(:disabled) {
         color: ${({ theme }) => theme.colors.secondary};
         background-color: ${({ theme }) => theme.colors.backgroundLight};
      }
   `,
}

const StyledButton = styled.button`
   display: inline-flex;
   justify-content: center;
   align-items: center;
   border-radius: ${({ theme }) => theme.borderRadius};
   font-family: ${({ theme }) => theme.fonts.body};
   font-weight: 500;
   cursor: pointer;
   transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out;
   width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};

   ${(props) => sizes[props.size]}
   ${(props) => variants[props.variant]}

   &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
   }
`
