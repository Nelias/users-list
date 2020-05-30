import styled from 'styled-components'

export const StyledUserCard = styled.li`
  min-width: 250px;
  margin: 10px 0;
  border: 1px solid #ae8625;
  padding: 0 20px;
  border-radius: 10px;
  position: relative;

  counter-increment: li;

  &::before {
    content: counter(li);
    color: #e2ad2d;
    display: inline-block;
    position: absolute;
    left: -10px;
    top: 37%;
    width: 1em;
    margin-left: -1.5em;
    margin-right: 0.5em;
    text-align: right;
    direction: rtl;
  }
`

export const UserTitle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const UserName = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 18px;
`

export const UserNickname = styled.span`
  color: #999;
`
