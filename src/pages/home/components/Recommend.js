import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import {
  RecommendWrapper,
  RecommendItem,
  DownLoadBlock
} from '../style.js'
class Recommend extends PureComponent {
  render () {
    let { RecommendList } = this.props;

    return (
      <RecommendWrapper>
        {
          RecommendList.map((item) => {
            return (
              <RecommendItem key={item.get("id")} imgUrl={item.get('imgUrl')}></RecommendItem>
            )
          })
        }
        <DownLoadBlock>
          <img className="img-pic" alt="" src={'http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'}/>
          <div className="desc-content">
            <h3 className="title">
              <span>下载简书手机App</span>
              <i className="iconfont link">&#xe60d;</i>
            </h3>
            <p className="desc">随时随地发现和创作内容</p>
          </div>
          <div className="hover-block">
            <img className="hover-img-pic" alt="" src={'http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'}/>
          </div>
        </DownLoadBlock>
      </RecommendWrapper>
    )
  }
};

const mapState = (state) => ({
  RecommendList: state.getIn(['home', 'recommendList'])
});

export default connect(mapState, null)(Recommend);
