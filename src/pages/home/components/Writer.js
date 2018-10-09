import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import {
  WriterWrapper,
  Writers,
  WriterItem,
  MoreWriter
} from '../style.js'

class Writer extends PureComponent {
  render () {
    let { writers } = this.props;

    return (
      <WriterWrapper>
        <h3 className="title">
          <span className="desc">推荐作者</span>
          <span className="page-change">
            <i className="iconfont change">&#xe6b6;</i>
            换一换
          </span>
        </h3>
        <Writers className="writers">
          {
            writers.map((item) => {
              return (
                <WriterItem key={item.get('id')}>
                  <div className="item-inner avatar">
                    <img alt="" src={item.get('avatar')}/>
                  </div>
                  <div className="item-inner desc">
                    <h3 className="name">{item.get('name')}</h3>
                    <p className="text">{item.get('desc')}</p>
                  </div>
                  <div className="item-inner follow">
                    <span>关注</span>
                  </div>
                </WriterItem>
              )
            })
          }
          <MoreWriter>
            <span>
              查看全部
              <i className="iconfont">&#xe60d;</i>
            </span>
          </MoreWriter>
        </Writers>
      </WriterWrapper>
    )
  }
};

const mapState = (state) => ({
  writers: state.getIn(['home','Writers'])
});

export default connect(mapState, null)(Writer);