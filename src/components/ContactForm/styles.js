import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  color: #3a3335;
  background-color: transparent;
  border: 2px solid #3a333fff;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  width: 100%;
  max-width: 496px;

  &::placeholder {
    color: #3a333fff;
  }

  &:hover {
    box-shadow: 1px 1px 10px #3a3335;
    transition: 0.25s;
  }

  &:focus {
    box-shadow: 1px 1px 25px #3a3335;
    transition: 0.25s;
  }
`;

export const Textarea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  color: #3a3335;
  background-color: transparent;
  border: 2px solid #3a333fff;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  width: 100%;
  max-width: 496px;
  resize: none;

  &::placeholder {
    color: #3a333fff;
  }

  &:hover {
    box-shadow: 1px 1px 10px #3a3335;
    transition: 0.25s;
  }

  &:focus {
    box-shadow: 1px 1px 25px #3a3335;
    transition: 0.25s;
  }

  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    margin: 15px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #3a3335;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
