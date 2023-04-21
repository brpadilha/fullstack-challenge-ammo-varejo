import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  gap:0.5rem
`

export const ContainerButtons = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 1rem;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid ${({ theme }) => theme["gray-300"]};
  margin-top: 0.5rem;
`