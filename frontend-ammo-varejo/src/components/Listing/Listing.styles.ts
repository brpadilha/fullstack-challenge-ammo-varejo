import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  height: 4rem;
  width: 100%;
  background-color: ${({ theme }) => theme["gray-300"]};
  align-items: center;
  padding-left: 2rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 100;
`

export const ListProducts = styled.ul`
  display: flex;
  flex-direction: column;
  height: 2rem;
  overflow: auto;
  height: 38rem;
  width: 90%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`