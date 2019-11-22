import React, { Component } from 'react'
import { Pagination } from 'antd';
import axios from './axios';
import { Spin } from 'antd'
import { Link } from 'react-router-dom'
 
const perSize = 40
const tabMap = {
  'all': '全部',
  'ask': '问答',
  'job': '招聘',
  'share': '分享',
  'good': '精华'
}
class Home extends Component {
  state = {
    current: 1,
    tab: 'all',
    limit: perSize,
    list: [],
    isLoding: false
  }
  handleRequestList = () => {
    this.setState({
      isLoding: true
    })
    const { tab, limit, current } = this.state
    axios.get(`/topics?tab=${tab}&limit=${limit}&page=${current}`).then(res => {
      this.setState({
        list: res.data,
        isLoding: false
      })
    })
  }
  componentDidMount () {
    this.handleRequestList()
  }
  handleChangeTab = (key) => {
    // onClick
    return (e) => {
      // setState 异步执行
      // 事务
      // react setState借鉴了这个概念
      // Promise.all()
      this.setState({
        tab: key
      },() => {
        this.handleRequestList()
      })
    }
  }
  onChange = page => {
    this.setState({
      current: page,
    },() => {
      this.handleRequestList()
    })
  }
  render () {
    const { tab, list, isLoding} = this.state
    return (
      <div>
        Home
        <ul>
          {
            Object.keys(tabMap).map((key, index) => {
              return (
                <li onClick={this.handleChangeTab(key)} key={index} style={{color: tab === key ? 'red' : ''}}>{tabMap[key]}</li>
              )
            })
          }
        </ul>
        <Spin spinning={isLoding}>
        {
          list.data && list.data.map((dis, index) => {
            return (
              <Link to={`/topic/${dis.id}`} key={index}>
                <li>
                  <img src={dis.author.avatar_url} alt=""/>
                  <span>{dis.loginname}</span>
                  <h2>{dis.title}</h2>
                </li>
              </Link>
            )
          })
        }
        </Spin>
        <Pagination current={this.state.current} onChange={this.onChange} total={50} />
      </div>
    )
  }
}

export default Home
