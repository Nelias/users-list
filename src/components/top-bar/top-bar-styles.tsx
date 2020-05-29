import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: #111;
  z-index: 2;
  padding: 8px 0;
`

export const Search = styled.input`
  width: 45%;
  min-width: 100px;
  max-width: 300px;
  padding: 8px 10px;
  border-radius: 40px;
  border: none;

  &:focus {
    outline: none;
  }
`

export const Button = styled.button`
  font-weight: bold;
  color: #f7ef8a;
  background: #000;
  padding: 6px 10px;
  border-radius: 40px;
  border: 2px solid #bfb753;
  margin-left: 10px;

  cursor: pointer;

  &:focus {
    outline: none;
  }
`
