import React, {memo} from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { headerLinks } from '@/common/local-data'
import { HeaderWrapper } from './style'
function AppHeader(){

  const navItem = v => {
    if(v.link.includes('http')) return <a href={v.link}>{v.title}</a>
    return <NavLink exact to={v.link}>{v.title}</NavLink>
  }

  return(
    <HeaderWrapper>
      <div className="content flex sb ac">
        <div className="c-left flex">
          <NavLink to="/">
            <div className="logo">logo</div>
          </NavLink>
          <div className="nav-list flex">
            {
              headerLinks.map(v=> <div className="flex ac" key={v.title}>{navItem(v)}</div> )
            }
          </div>
        </div>
        <div className="c-right flex ac">
          <Input className="search" placeholder="音乐/视频/电台" prefix={<SearchOutlined />}></Input>
          <div className="c-center">创作者中心</div>
          <NavLink to="/" className="white">登录</NavLink>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)