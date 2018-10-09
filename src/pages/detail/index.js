import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Actions } from './store';

import {
  DetailWrapper,
  Header,
  Comtent
} from './style.js';

class Detail extends Component {
  render () {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{ title }</Header>
        <Comtent dangerouslySetInnerHTML={{__html: content}} />
      </DetailWrapper>
    )
  }

  componentDidMount () {
    let { getDetail, match } = this.props;
    
    getDetail(match.params.id);
  }
};

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
  getDetail (id) {
    dispatch(Actions.getDetail(id));
  }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));
