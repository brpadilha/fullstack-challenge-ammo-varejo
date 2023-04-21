import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  border: 0;
  background: ${({ theme }) => theme["gray-300"]};
  font-weight: bold;
  cursor: pointer;
`