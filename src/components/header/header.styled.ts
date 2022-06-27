import styled from 'styled-components';

export const Logo = styled.div`
  width: 70vw;
  margin: 0 auto;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;


  img{
    width: 90%;
    height: 80%; 
  }

  

  button{
    border: none;
    width:auto
  }

  .avatar{
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  button{
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span{
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    cursor: pointer
    }
  }

  .close{
    font-size: 1.5rem;
  }
`;
