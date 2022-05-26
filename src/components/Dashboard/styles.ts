
import styled from "styled-components"
export const Container = styled.div`
background-color: #F0F2F5;
padding: 0rem 1rem;
`

export const Content = styled.div `
max-width: 1120px;
height: 15rem;
margin: 0 auto;
padding: 2rem 0rem;
display: block;

button {
  background-color: var(--blue);
  border: 0;
  font-size: 1rem;
  color: #fff;
  padding: 0.6rem 2rem;
  margin-left:1.5rem;
  border-radius: 10rem;
  transition: filter 0.3s;

  &:hover{
    filter: brightness(0.9);
  }
}
`