import React, { PureComponent } from 'react';
import { Actions } from '../store';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListInfo,
  ListsWrapper,
  LoadMore
} from '../style.js';

class List extends PureComponent {
  render () {
    const { List, getMoreLists, page } = this.props;

    return (
      <ListsWrapper className="lists">
        {
          List.map((item, index) => {
            return (
              <Link to={'/detail/' + item.get('id')} key={index}>
                <ListItem>
                  <img className="pic" alt="img" src={item.get('imgUrl')}/>
                  <ListInfo>
                    <h3 className="title">{ item.get('title') }</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            );
          })
        }
        <LoadMore onClick={() => getMoreLists(page)}>
          <span>加载更多</span>
        </LoadMore>
      </ListsWrapper>
    )
  }
};
const mapState = (state) => ({
  List: state.getIn(['home','articList']),
  page: state.getIn(['home', 'articPage'])
});

const mapDispatch = (dispatch) => ({
  getMoreLists (page) {
    const action = Actions.getMoreLists(page);

    dispatch(action);
  }
});

export default connect(mapState, mapDispatch)(List);