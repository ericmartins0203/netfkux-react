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

  span{
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    cursor: pointer
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
`;

export const SideBar = styled.div`
  width: 20vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;

  span{
    font-size: 1rem;
    color: #fff;
  }
`;
