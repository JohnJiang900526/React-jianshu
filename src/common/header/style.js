import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic}) no-repeat;
  background-size: contain;
`;

export const Nav = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  display: inline-block;
  font-size: 17px;
  &.left {
    float: left;
    &: hover {
      background: #F5F5F5;
    }
  }
  &.right {
    float: right;
    color: #969696;
    font-size: 15px;
    .iconfont {
      font-size: 20px;
    }
  }
  &.active {
    color: #ea6f5a;
    &: hover {
      background: transparent;
    }
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  line-height: 56px;
  position: relative;
  .iconfont.search-icon {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translate(0, -50%);
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    &.focused {
      background: #bbb;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  box-sizing: border-box;
  border-radius: 19px;
  background: #EEE;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  font-size: 14px;
  color: #6;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 260px;
  }
  &.inputSlide-enter {
    width: 160px;
    transition: all 0.3s ease-out;
  }
  &.inputSlide-enter-active {
    width: 260px;
  }
  &.inputSlide-exit {
    transition: all 0.3s ease-out;
  }
  &.inputSlide-exit-active {
    width: 160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  left: 20px;
  width: 260px;
  padding: 0 20px;
  border: 1px solid #ddd;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  box-sizing: border-box;
  background-color: #fff;
  z-index: 100;
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`;

export const SearchInfoTitle = styled.div`
  margin: 20px 0 15px 0;
  line-height: 20px;
  font-size: 14px;
  color: #333;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 14px;
  cursor: pointer;
  .iconfont.ping {
    display: inline-block;
    margin-right: 10px;
    font-size: 14px;
    transition: all 0.5s ease;
    transform: rotate(0deg);
    transform-rigin: center center;
  }
`;

export const SearchInfoItem = styled.a`
  display: block;
  float:left;
  font-size: 12px;
  padding: 0 5px;
  margin: 0 10px 10px 0;
  line-height: 20px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 20px;
  top: 0;
  height:56px;
`;

export const Button = styled.div`
  float: right;
  line-height: 35px;
  border-radius: 19px;
  margin: 9px 0 0 20px;
  padding: 0 20px;
  border: 1px solid #ec6149;
  cursor: pointer;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`;