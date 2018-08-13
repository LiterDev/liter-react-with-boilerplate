/**
 *
 * ReviewTopTag
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Slider from 'react-slick';

import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Cola from '../../images/Coca-Cola-Logo 2.png';
import request from 'utils/request';

const styles = theme => ({
  root: {
    // flexGrow: 1,
    position: 'fixed',
    top: theme.spacing.unit * 8,
    backgroundColor: '#ffffff',
    minHeight: '113',
    width: '100%',
    zIndex: 1100,
    // right: theme.spacing.unit * 2,
  },
  row: {
    width: '100%',
    // display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    // margin: 10,
  },
  bigAvatar: {
    width: 56,
    height: 56,
    // marginRight: 10,
    // width: '100%',
    // border: {
    //   radius: 50%,
    //   solid: 0.5,
    //   color: '#e3e3e3',
    // },
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    // width: '50%;
    '&:after': {
      left: -4,
      content: '',
      width: 70,
      height: 70,
      background: 'linear-gradient(225deg,#cc08ff,#21d4fd)',
      TOP: -4,
      borderRdius: '50%',
      zIndex: 2,
      position: 'absolue',
      '-webkit-animation': 'rotation 4s infinite linear',
      animation: 'rotation 4s infinite linear',
    },
  },
  previewimg: {
    width: '100%',
    border: {
      radius: 4,
      solid: 0.5,
      color: '#e3e3e3',
    },
  },
  avawrap: {
    paddingRight: 12,
    paddingLeft: 12,
    textAlign: 'center',
    color: 'rgb(17, 17, 17)',
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 12,
    // width: '100%',
  },
  text: {
    marginTop: 8,
  },
  // display: block;
  // border: solid 1px rgba(0,0,0,.05);
  // border-radius: 50%;
  // width: 60px;
  // height: 60px;
  // -o-object-fit: cover;
  // object-fit: cover;
  // position: relative;
  // z-index: 5;
  //   .category-container ul li.active div:after {
  //     LEFT: -4PX;
  //     content: '';
  //     width: 70PX;
  //     height: 70PX;
  //     background: linear-gradient(225deg,#cc08ff,#21d4fd);
  //     TOP: -4PX;
  //     BORDER-RADIUS: 50%;
  //     Z-INDEX: 2;
  //     POSITION: ABSOLUTE;
  //     -webkit-animation: rotation 4s infinite linear;
  //     animation: rotation 4s infinite linear;
  // }
});
const cateName = [
  '뷰티',
  '라이프',
  '푸드',
  '패션',
  '유아',
  '취미',
  '맛집',
  '펫',
  '그외',
];

/* eslint-disable react/prefer-stateless-function */
class ReviewTopTag extends React.PureComponent {

  componentDidMount() {

  }

  handleTag = value => {
    // console.log(value);
    this.props.loadValue(value);
  };
  render() {
    const { classes, categorys, reviewFirst } = this.props;
    // console.log(`categorys ====[ ${categorys}]`);
    const settings = {
      dots: false,
      className: 'center',
      infinite: false,
      // speed: 500,
      slidesToShow: 4.5,
      slidesToScroll: 1,
      swipeToSlide: true,
    };
    // console.log(reviewFirst);
    if (Boolean(reviewFirst)) {
      console.log(reviewFirst.mediaCollection);
      console.log(reviewFirst.mediaCollection[0]);
    }

    return (
      <div className={classes.root}>
        <div className={classes.row}>
          <Slider {...settings}>
            <div className={classes.avawrap}>
              {Boolean(reviewFirst) ? (
                <Avatar
                  alt="Adelle Charles"
                  src={
                    reviewFirst.mediaCollection[0].mediaType === 'YOUTUBE'
                      ? `http://img.youtube.com/vi/${
                          reviewFirst.mediaCollection[0].movieKey
                        }/1.jpg`
                      : reviewFirst.mediaCollection[0].fullPath
                  }
                  className={classNames(classes.avatar, classes.bigAvatar)}
                  onClick={() => this.handleTag(-9)}
                />
              ) : (
                <Avatar
                  alt="Adelle Charles"
                  src={Cola}
                  // src={reviewFirst.mediaCollection[0]}
                  className={classNames(classes.avatar, classes.bigAvatar)}
                  onClick={() => this.handleTag(-9)}
                />
              )}
              <p className={classes.text}>#최신</p>
            </div>
            {/* <div className={classes.avawrap}>
              <Avatar
                alt="Adelle Charles"
                src={Cola}
                className={classNames(classes.avatar, classes.bigAvatar)}
                onClick={() => this.handleTag(-1)}
              />
              <p className={classes.text}>#인기</p>
            </div> */}

            {categorys &&
              categorys.map(item => (
                <div className={classes.avawrap} key={item.categoryId}>
                  <Avatar
                    alt="Adelle Charles"
                    src={
                      item.mediaType === 'YOUTUBE'
                        ? `http://img.youtube.com/vi/${item.movieKey}/1.jpg`
                        : item.fullPath
                    }
                    className={classNames(classes.avatar, classes.bigAvatar)}
                    onClick={() => this.handleTag(item.categoryId)}
                  />
                  <p className={classes.text}>#{cateName[item.categoryId]}</p>
                </div>
              ))}

            {/* <div className={classes.avawrap}>
              <Avatar
                alt="Adelle Charles"
                src={Cola}
                className={classNames(classes.avatar, classes.bigAvatar)}
                onClick={() => this.handleTag(2)}
              />
              <p className={classes.text}>#최신</p>
            </div>
            <div className={classes.avawrap}>
              <Avatar
                alt="Adelle Charles"
                src={Cola}
                className={classNames(classes.avatar, classes.bigAvatar)}
                onClick={() => this.handleTag(3)}
              />
              <p className={classes.text}>#최신</p>
            </div>
            <div className={classes.avawrap}>
              <Avatar
                alt="Adelle Charles"
                src={Cola}
                className={classNames(classes.avatar, classes.bigAvatar)}
                onClick={() => this.handleTag(4)}
              />
              <p className={classes.text}>#최신</p>
            </div>
            <div className={classes.avawrap}>
              <Avatar
                alt="Adelle Charles"
                src={Cola}
                className={classNames(classes.avatar, classes.bigAvatar)}
                onClick={() => this.handleTag(5)}
              />
              <p className={classes.text}>#최신</p>
            </div> */}
          </Slider>
        </div>
      </div>
    );
  }
}

ReviewTopTag.propTypes = {
  loadValue: PropTypes.func.isRequired,
  categorys: PropTypes.object,
  reviewFirst: PropTypes.object,
};

// export default ReviewTopTag;
export default withStyles(styles)(ReviewTopTag);
