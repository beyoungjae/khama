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
      padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
      font-size: ${({ theme }) => theme.fontSizes.medium};
      line-height: 1.5;
   `,
   large: css`
      padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
      font-size: ${({ theme }) => theme.fontSizes.large};
      line-height: 1.5;
   `,
}

const lightenColor = (color, percent) => {
   if (!color || color.length !== 7) return color
   let num = parseInt(color.substring(1), 16)
   let amt = Math.round(2.55 * percent)
   let R = (num >> 16) + amt
   let G = ((num >> 8) & 0x00ff) + amt
   let B = (num & 0x0000ff) + amt

   R = Math.max(0, Math.min(255, R))
   G = Math.max(0, Math.min(255, G))
   B = Math.max(0, Math.min(255, B))

   return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`
}

const variants = {
   primary: css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.textLight};
      border: 1px solid ${({ theme }) => theme.colors.primary};

      &:hover:not(:disabled) {
         background-color: ${({ theme }) => lightenColor(theme.colors.primary, -10)};
         border-color: ${({ theme }) => lightenColor(theme.colors.primary, -10)};
         color: ${({ theme }) => theme.colors.textLight};
         box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
      }
   `,
   secondary: css`
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.textLight};
      border: 1px solid ${({ theme }) => theme.colors.secondary};

      &:hover:not(:disabled) {
         background-color: ${({ theme }) => lightenColor(theme.colors.secondary, -10)};
         border-color: ${({ theme }) => lightenColor(theme.colors.secondary, -10)};
         color: ${({ theme }) => theme.colors.textLight};
         box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
      }
   `,
   outline: css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};

      &:hover:not(:disabled) {
         background-color: ${({ theme }) => theme.colors.primary}15;
         color: ${({ theme }) => lightenColor(theme.colors.primary, -10)};
         border-color: ${({ theme }) => lightenColor(theme.colors.primary, -10)};
      }
   `,
   ghost: css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary};
      border: none;

      &:hover:not(:disabled) {
         color: ${({ theme }) => lightenColor(theme.colors.primary, -10)};
         background-color: ${({ theme }) => theme.colors.primary}10;
      }
   `,
   danger: css`
      background-color: ${({ theme }) => theme.colors.error};
      color: ${({ theme }) => theme.colors.textLight};
      border: 1px solid ${({ theme }) => theme.colors.error};

      &:hover:not(:disabled) {
         background-color: ${({ theme }) => lightenColor(theme.colors.error, -10)};
         border-color: ${({ theme }) => lightenColor(theme.colors.error, -10)};
         color: ${({ theme }) => theme.colors.textLight};
         box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
      }
   `,
}

const StyledButton = styled.button`
   display: inline-flex;
   justify-content: center;
   align-items: center;
   border-radius: ${({ theme }) => theme.borderRadius};
   font-family: ${({ theme }) => theme.fonts.body};
   font-weight: 600;
   cursor: pointer;
   transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out, transform 0.1s ease-in-out, box-shadow 0.2s ease-in-out;
   width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
   white-space: nowrap;

   ${(props) => sizes[props.size]}
   ${(props) => variants[props.variant]}

   &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background-image: none;
      box-shadow: none;
      transform: none;
   }

   &:active:not(:disabled) {
      transform: translateY(0px);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
   }
`
