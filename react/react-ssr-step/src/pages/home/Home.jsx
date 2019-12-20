import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCommentList } from '../../store/action/homeAction'

class Home extends Component {
  constructor() {
    super()
  }
  // 组件已经挂载
  // 服务端 没有组件的全部的生命周期
  componentDidMount() {
    this.props.getCommentList();
  }
  render() {
    const { commentList } = this.props
    console.log(commentList)
    return ( 
      <div>
        {
          commentList.map((item, index) => {
            return (
              <li key={index}>{item.content}</li>
            )
          })
        }
        
      </div>
     );
  }
}
/**
 * 服务端返回的首页 需要带有数据
 * 数据需要: dispatch -> 触发
 * 客户端: mapDispatchToProps  -> 交给组件
 * 服务端: 把这个 dispatch 放在 loadData 静态属性
 * vue: {
 *  data: {},
 *  async Data() {}
 * }
 */
Home.loadData = function(store) {
  // 所有的 loadData 都是 Promise, Promise.all[所有的Promise]
  // getCommentList 是一个 action
  // dispatch ???
  return store.dispatch(getCommentList())
}

const mapStateToProps = (state) => {
  return {
    commentList: state.home.commentList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCommentList: () => {
      dispatch(getCommentList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
