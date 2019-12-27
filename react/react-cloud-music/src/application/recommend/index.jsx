import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Scroll from '../../components/scroll/index'
import Slider from './Slider'
import * as actionTypes from './store/actionCreateors'
function Recommend(props) {
  /**
   * <Scroll>
   *  <abc />
   * </Scroll>
   */
  // const [val, setVal] = useState(0)
  const { bannerList, recommendList } = props
  if (!bannerList.size) {
    props.getBannerDataDispatch()
  }
  if (!recommendList.size) {
    props.getRecommendListDataDispatch()
  }
  // didMount didUpdate return: unMount
  useEffect(() => {
    // console.log('mount / update')
    // action mapDispatch
    return () => {

    }
  }, [])
  /**
   * 第二个参数空数组 useEffect 会对比前后再次数组里面的值一样不一样，不一样才会执行,这样只会在didMount中执行
   * 区分开didMount 和didUpdate
   * */

  // bannerList 是immutable对象
  const bannerListJS = bannerList ? bannerList.toJS() : []
  return (
    <Scroll>
      <div>
        <Slider bannerList={bannerListJS}></Slider>
      {/* {
        new Array(100).fill(1)
        .map((el, index) => {
          return (
            <li key={index}>
              {el}
            </li>
          )
        })
      } */}
      {/* <button onClick={() => {
        setVal(Math.random())
      }}>update val</button> */}
      </div>
    </Scroll>
  )
}

const mapStateToProps = (state) => ({
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList']),
  // songsCount: state.getIn(['player', 'playList']).size,
  enterLoading: state.getIn(['recommend', 'enterLoading'])
});

// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList());
    },
  }
};

// React.memo() 浅比较，再接收mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend))
// export default Recommend
