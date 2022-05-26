import styled from "styled-components";

export const Container = styled.div `
padding: 0 1rem;
`

export const Content = styled.div `
max-width: 1120px;
height: 5rem;
margin: 0 auto;
margin-top:-9rem;
display: flex;
justify-content: space-between;
gap: 2rem;


div{
  background-color: var(--white);
  width: 20rem;
  height: 6.5rem;
  border-radius: 4rem;
  padding: 1.5rem 2rem; 
  align-items: center;  
  color: var(--text-title);

  header{
    display: flex;
    justify-content: space-between;
    font-size:1rem
  }

  header img{
    width: 1.7rem;
  }

  strong{
    font-weight:600;
    font-size: 1.5rem;
    line-height: 3rem;
    /* color:#000000; */
  }

  &.backgroudHighLigth{
    background-color: var(--backgrouTotal);
    color: #fff;
  }
}



`