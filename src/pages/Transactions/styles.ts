import styled, { css } from 'styled-components'

export const TransactionsContainer = styled.main`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
  `}
`

export const TransactionsTable = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    td {
      padding: 1.25rem 2rem;
      background: ${theme.colors['gray-700']};
    }

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  `}
`

interface PriceHighlight {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlight>`
  ${({ theme, variant }) => css`
    color: ${variant === 'income'
      ? theme.colors['green-300']
      : theme.colors['red-300']};
  `}
`
