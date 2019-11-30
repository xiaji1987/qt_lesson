import React from 'react'
import baseComponent from '../../../lib/baseComponent'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store/index'
class List extends baseComponent {
  state = {  }
  render() {
    const { List, page } = this.props
    // console.log(List)
    return (
      <div>
        {
          List.map((item, index) => {
            return (
              <Link to={'/detail/' + item.get('id')} key={index}>
                <ListItem>
                <img alt='' className='pic' src={item.get('imgUrl')} />
                  <ListInfo>
                    <h3 className="titile">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => {
          this.props.getMoreList(page)
        }}>更多文字</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  List: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList(page) {
      dispatch(actionCreators.getMoreList(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)