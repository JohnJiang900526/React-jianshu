import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { 
  TopicWrapper,
  TopicItem,
  TopicItemMore
} from '../style.js';

class Topic extends PureComponent {
  render () {
    let { topicList } = this.props;
    
    return (
      <TopicWrapper>
        {
          topicList.map((item) => {
            return (
              <TopicItem key={item.get("id")}>
                <img className="topic-pic" alt={ item.get('title') } src={item.get('imgUrl')}/>
                <span>{ item.get('title') }</span>
              </TopicItem>
            )
          })
        }
        <TopicItemMore>更多热门专题> </TopicItemMore>
      </TopicWrapper>
    )
  }
};
const mapState = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);
