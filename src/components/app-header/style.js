import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 70px;
  color: #fff;
  background-color: #242424;
  border-bottom: 5px solid #AD0000;
  .content{
    width:1100px;
    height:100%;
    margin:auto;
    .logo{
      width: 176px;
      height: 100%;
      line-height: 70px;
      text-align:center;
      background: #AD0000;
    }
    .nav-list > div{
      height:100%;
      padding: 0 20px;
      position:relative;
      &:hover{
        background:#000;
      }
      a{
        display:block;
        line-height:70px;
        font-size:14px;
        color:#fff;
        text-decoration: none;
        position:relative;
        &.active::after{
          content:'';
          width: 0;
          height: 0;
          border-bottom: 7px solid #AD0000;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
        }
      }
    }

    .search{
      width: 180px;
      border-radius: 16px;
    }
    .c-center{
      width:90px;
      height:32px;
      line-height:32px;
      text-align:center;
      color:#ccc;
      border: 1px solid #4f4f4f;
      border-radius:20px;
      font-size:12px;
      margin: 0 20px;
    }
    input{
      &::placeholder{
        font-size:12px;
      }
    }
    .white{
      color:#fff;
      font-size:12px;
    }
  }
`