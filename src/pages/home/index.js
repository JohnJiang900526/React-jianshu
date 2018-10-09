import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Actions } from './store';
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style.js';

class Home extends PureComponent {
  constructor (props) {
    super(props);

    this.handleScrollTop = this.handleScrollTop.bind(this);
    this.bindEvents = this.bindEvents.bind(this);
  }

  handleScrollTop () {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(this.handleScrollTop);
      window.scrollTo (0, currentScroll - (currentScroll / 5));
    }
  }

  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollShow)
  }

  componentDidMount () {
    let { changeHomeData } = this.props;

    changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollShow)
  }

  render () {
    const { articList, showScroll } = this.props;

    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" alt="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4448/d9a0fd8f0622d2323161b68d2123c7f28837d28f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {
          (showScroll && articList.size > 0) ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }
};

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll']),
  articList: state.getIn(['home', 'articList'])
});

const mapDispatch = (dispatch) => ({
  changeHomeData () {
    dispatch(Actions.getHomeInfo());
  },
  changeScrollShow () {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 200) {
      dispatch(Actions.toggleTopShow(true));
    } else {
      dispatch(Actions.toggleTopShow(false));
    }
  }
});

export default connect(mapState, mapDispatch)(Home);
