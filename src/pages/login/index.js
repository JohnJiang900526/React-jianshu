import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Actions } from './store'

import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style.js';

class Login extends PureComponent {
  render () {
    const { LoginIN, login } = this.props;
    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input innerRef={(input) => { this.account = input }} placeholder="账号"/>
            <Input innerRef={(input) => { this.password = input }} placeholder="密码" type="password" />
            <Button onClick={() => { LoginIN(this.account, this.password) } }>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return (
        <Redirect to="/"></Redirect>
      )
    }
  }
};

const mapState = (state) => ({
  login: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
  LoginIN (account, password) {
    dispatch(Actions.Login(account.value, password.value))
  }
});

export default connect(mapState, mapDispatch)(Login);
