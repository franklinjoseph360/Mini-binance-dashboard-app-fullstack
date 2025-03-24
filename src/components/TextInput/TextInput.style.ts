import styled from "styled-components";

export const TextInput = styled.input`
  width: 100%;
  padding: 10px 72px 10px 12px;
  font-size: 14px;
  border-radius: 8px;
  background-color: #181a20;
  color: #f0f0f0;
  border: 1px solid #181a20;

  &:focus {
    border-color: #2B3139;
    outline: none;
    background-color: #2B3139;
  }

  &::placeholder {
    color: #777;
  }

  @media (max-width: 600px) {
    font-size: 13px;
    padding: 10px 60px 10px 10px;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 10px 64px 10px 12px;
  }
`;
