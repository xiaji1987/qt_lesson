import React from 'react';
import baseComponent from '../../../lib/baseComponent'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style';

// Map fromJS({})
// List FromJS({})
class Topic extends baseComponent {
  state = {  }
  render() {
    const { list } = this.props
    return (
      <TopicWrapper color="red">
        {
          list.map((item, index) => {
            return (
              <TopicItem key={index}>
                <img className="topic-pic" src={item.get('imgUrl')} alt=""/>
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    list: state.getIn(['home', 'topicList'])
  }
}
 
export default connect(mapStateToProps)(Topic)