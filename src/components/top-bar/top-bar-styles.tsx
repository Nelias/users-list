import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  display: block;
  position: fixed;
  top: 0;
  background-color: #111;
  z-index: 2;
  padding: 8px 0;

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
  }
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
  color: gold;
  background: #000;
  padding: 6px 10px;
  border-radius: 40px;
  border: 2px solid #e8b923;
  margin-left: 10px;

  cursor: pointer;

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 600px) {
    margin-right: 10px;
  }
`
