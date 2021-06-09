import React from 'react'
import { Redirect } from 'react-router-dom'
import MyDiscover from "@/pages/discover"
import MyMine from "@/pages/mine"
import MyFriend from "@/pages/friend"

const routes = [
  {
    path:'/',
    exact:true,
    render: ()=>{
      return <Redirect to="/discover"></Redirect>
    }
  },
  {
    path:'/discover',
    component: MyDiscover
  },
  {
    path:'/mine',
    component: MyMine
  },
  {
    path:'/friend',
    component: MyFriend
  },
]

export default routes