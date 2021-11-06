import styled from 'styled-components/macro'

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  border: none;
  height: 2.866em;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  width: 100%;
  max-width: 294px;
  margin: 5em auto;
  padding: 0 1em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  *:last-child {
    margin-left: 1.57em;
  }
`
