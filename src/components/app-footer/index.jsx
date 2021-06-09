import React, {memo} from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  width: 100vw;
  min-height: 200px;
  background: #F2F2F2;
  display:flex;
  align-items:center;
  justify-content: center;
  font-size:42px;
  color:#000;
  font-weight:bold;
`

function AppFooter(){
  return(
    <FooterWrapper>
      AppFooter
    </FooterWrapper>
  )
}

export default memo(AppFooter)