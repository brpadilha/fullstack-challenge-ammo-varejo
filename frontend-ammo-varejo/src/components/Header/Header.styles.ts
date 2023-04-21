import styled from "styled-components";

export const Title = styled.h1`
  font-size: 28px;
  color: ${({ theme }) => theme["gray-900"]};
`;

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;

export const InputBox = styled.input`
  width: 20rem;
  height: 40px;
  border: 1px solid ${({ theme }) => theme["gray-500"]};
  border-radius: 5px;
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

`