import styled from "styled-components";
import {darken,transparentize} from 'polished'

export const Container = styled.form`

h2{
  color: var(--text-title);
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

input{
  width: 100%;
  padding: 0 1.5rem;
  height: 3rem;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  background: #e7e9ee;
  font-size: 1rem;
  font-weight: 400;

  &::placeholder{
    color: var(--text-body);
  }

  & + input{
    margin-top: 1rem;
  }
}

button[type="submit"]{
  width: 100%;
  padding: 0 1.5rem;
  height: 3rem;
  background: var(--backgrouTotal);
  color: #fff;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;
  
  transition: filter 0.2s;
  &:hover{
    filter: brightness(0.9);
  }
}
`

export const TransictionTypeContainer = styled.div`
margin: 1rem 0;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.5rem;
`

interface ButtonRadioProps {
  isActive:(boolean)
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33CC95',
  red: '#F44336'
}
export const ButtonRadio = styled.button<ButtonRadioProps>`
  height: 3rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;


  background: ${(props) => props.isActive ?
    transparentize(0.7,colors[props.activeColor])
   :
   'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    border-color: ${darken(0.1,'#d7d7d7')};
  }

  img{
    width: 20px;
    height: 20px;
  }

  
  span{
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`