import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img {
    width: 100%;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  display: inline-block;
  line-height: 32px;
  background: #f7f7f7;
  margin: 0 15px 20px 0;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  box-size: border-box;
  border-radius: 5px;
  cursor: pointer;
  img.topic-pic {
    display: inline-block;
    width: 32px;
    height: 32px;
    border: none;
    vertical-align: top;
    outline: none;
  }
  span {
    font-size: 14px;
    padding: 0 10px;
  }
`;

export const TopicItemMore = styled.div`
  display: inline-block;
  line-height: 32px;
  margin: 0 15px 20px 0;
  padding: 0 10px;
  font-size: 14px;
  box-size: border-box;
  border-radius: 5px;
  cursor: pointer;
  span {
    font-size: 14px;
    padding: 0 10px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const ListsWrapper = styled.div`
  margin-bottom: 50px;
`;

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  &:last-child {
    border-bottom: 1px solid transparent;
  }
  .pic {
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 3px;
  }
`;

export const ListInfo = styled.div`
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: 600;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px auto 60px auto;
  border-radius: 20px;
  background-color: #a5a5a5;
  text-align: center;
  font-size: 15px;
  color: #fff;
  cursor: pointer;
`;

export const RecommendWrapper = styled.div`
  margin: 0 0 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 48px;
  margin-bottom: 10px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const DownLoadBlock = styled.div`
  border: 1px solid #eee;
  box-sizing: border-box;
  margin-right:10px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  .hover-block {
    display:none;
    width: 150px;
    height: 150px;
    position: absolute;
    left: 50%;
    bottom: 110%;
    transform: translate(-50%, 0);
    z-index:100;
    background: #fff;
    border:1px solid #ddd;
    box-sizing: border-box;
    img {
      display: block;
      width:90%;
      height:90%;
      vertical-align: middle;
      margin: 7px auto 0px auto;
    }
  }

  &:hover {
    .hover-block {
      display:block;
    }
  }
  .img-pic {
    width:60px;
    height:60px;
    display: inline-block;
    vertical-align: middle;
    margin: 10px 15px 10px 20px;
  }
  .desc-content {
    display: inline-block;
    vertical-align: middle;
    line-height: 20px;
    .desc {
      font-size: 13px;
      color: #999;
    }
    .title {
      font-size: 15px;
      color: #333;
      font-weight: 400px;
    }
  }
`;

export const WriterWrapper = styled.div`
  width: 280px;
  padding-right: 10px;
  box-sizing: border-box;
  .title {
    width:100%;
    font-size: 14px;
    color: #969696;
    .page-change {
      float: right;
      cursor: pointer;
    }
  }
`;

export const Writers = styled.ul`
  margin: 10px 0 0 0;
`;

export const WriterItem = styled.li`
  position: relative;
  width:100%;
  margin-top: 15px;
  overflow: hidden;
  .item-inner {
    box-sizing: border-box;
    float: left;
    &.avatar {
      display: inline-block;
      width: 50px;
      height:50px;
      img {
        display: block;
        box-sizing: border-box;
        width:100%;
        height:100%;
        border-radius: 50%;
        border: 1px solid #ddd;
      }
    }
    &.desc {
      display: inline-block;
      width: calc(100% - 60px);
      padding:0 10px;
      .name {
        font-size: 14px;
        color: #333;
        padding: 10px 0;
      }
      p {
        font-size: 12px;
        color: #969696;
        line-height: 1;
      }
    }
    &.follow {
      position: absolute;
      top: 10px;
      right: 0px;
      z-index: 100;
      color: #42c02e;
      font-size: 13px;
    }
  }
`;

export const MoreWriter = styled.li`
  padding: 7px 7px 7px 12px;
  margin-top:15px;
  font-size: 13px;
  text-align: center;
  color: #787878;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  cursor: pointer;
  background-color: #F7F7F7;
`;

export const BackTop = styled.div`
  position: fixed;
  width: 80px;
  height: 60px;
  right: 40px;
  bottom: 40px;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
  border: 1px solid #ccc;
  z-index: 100;
  cursor: pointer;
  color: #333;
`;
