import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const H2 = styled.h2`
  text-align: center;
`;

export const Form = styled.form`
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #7d7a7a;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

export const P = styled.p`
  text-align: center;
  margin-top: 10px;
`;

export const A = styled.a`
  text-decoration: none;
  color: #4CAF50;

  &:hover {
    text-decoration: underline;
  }
`;


export const Warning = styled.p`
    margin-top: 20px;
    color:red;
`;