import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends PureComponent {
  render () {
    const { login } = this.props;

    if (login) {
      return (
        <div>写文章待开发</div>
      )
    } else {
      return (
        <Redirect to="/login"></Redirect>
      )
    }
  }
};

const mapState = (state) => ({
  login: state.getIn(['login', 'login'])
});

export default connect(mapState, null)(Write);
