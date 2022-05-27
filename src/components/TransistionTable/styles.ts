import styled from "styled-components";


export const Container = styled.div`
margin-top: 3.5rem;
padding: 0rem 4rem;

table{
  width: 100%;
  border-spacing: 0 0.5rem;
  text-align: left;

  th{
  color: var(--text-title);
  font-weight: 400;
  padding: 0.5rem 2rem;
  text-align: left;
  line-height: 1.5rem;
  font-size:0.9rem; 
}

td{
  padding: 0.5rem 2rem;
  background: var(--white);
  border: 0;
  text-align:left;
  color: var(--text-body);



  &:first-child{
    color: var(--black);
  }

  &.deposit{
    color: var(--backgrouTotal);
  }

  &.withdraw {
    color: var(--red);
  }
  }


  
}`;