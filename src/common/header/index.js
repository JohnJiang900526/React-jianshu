import React , { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Actions } from './store';
import { Actions as LoginActions } from '../../pages/login/store';

import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem
} from './style.js';

class Header extends Component {
  getListArea(show, recommendHover) {
    const { 
      lists,
      page,
      totalPage,
      handleRecommendEnter,
      handleRecommendLeave,
      handleChangePage
    } = this.props;

    const pageLists = [];
    const listsJS = lists.toJS();
    
    if (listsJS.length > 0) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (listsJS[i]) {
          pageLists.push(
            <SearchInfoItem key={ listsJS[i] }>{listsJS[i]}</SearchInfoItem>
          );
        }
      }
    }
    
    if (show || recommendHover) {
      return (
        <SearchInfo
          onMouseEnter={handleRecommendEnter}
          onMouseLeave={handleRecommendLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => { handleChangePage(page, totalPage, this.pingIcon) }}>
              <span>
                <i ref={(ping)=> {this.pingIcon = ping}} className="iconfont ping">&#xe6b6;</i>
                换一换
              </span>
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {
              pageLists
            }
          </div>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  
  render () {
    const { 
      focused,
      lists,
      recommendHover,
      handleInputFocus,
      handleInputBlur,
      login,
      logout
    } = this.props;

    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo></Logo>
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">
          {
            login ? 
            <NavItem onClick={logout} className="left">退出</NavItem> : 
            <Link to="/login">
              <NavItem className="left">登录</NavItem>
            </Link>
          }
          </NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe604;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={300}
              classNames="inputSlide"
            >
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => {handleInputFocus(lists)}}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? "search-icon iconfont focused" : "search-icon iconfont"}>
              &#xe614;
            </i>
            {
              this.getListArea(focused, recommendHover)
            }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writing">
              <i className="iconfont">&#xe603;</i>
              <span>写文章</span>
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    recommendHover: state.getIn(['header', 'recommendHover']),
    lists: state.getIn(['header', 'lists']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(lists) {
      const action = Actions.searchFocusAction();
      dispatch(action);

      (lists.size === 0) && dispatch(Actions.getListAction());
    },
    handleInputBlur() {
      const action = Actions.searchBlurAction();
      dispatch(action);
    },
    handleRecommendEnter() {
      const action = Actions.recommendEnterAction();
      dispatch(action);
    },
    handleRecommendLeave() {
      const action = Actions.recommendLeaveAction();
      dispatch(action);
    },
    handleChangePage(page, totalPage, pingIcon) {
      let originAngle = pingIcon.style.transform.replace(/[^0-9]/ig, '') || '0';
      originAngle = Number(originAngle);

      if (page < totalPage) {
        page++;
      } else {
        page = 1;
      }

      const action = Actions.changePage(page);
      dispatch(action);

      pingIcon.style.transform = `rotate(${originAngle + 360}deg)`;
    },
    logout() {
      dispatch(LoginActions.Logout());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);