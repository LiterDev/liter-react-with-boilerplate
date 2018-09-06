/**
 *
 * ReviewTopTag
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import axios from 'axios';

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
    zIndex: 100,
    // height: '100%'

    // right: theme.spacing.unit * 2,
  },
  row: {
    width: '100%',
    // display: 'flex',
    justifyContent: 'center',
    marginLeft: 8,
    paddingTop: 14,
    height: '100%',
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
    paddingRight: 0,
    paddingLeft: 0,
    textAlign: 'center',
    color: 'rgb(17, 17, 17)',
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 11,
    // width: '100%',
  },
  text: {
    fontWeight: 'normal',
    marginTop: 8,
    fontSize: 12,
    fontFamily: 'Apple SD Gothic Neo',
    color: 'rgb(153, 153, 153)',
  },
  selText: {
    fontWeight: 'normal',
    marginTop: 8,
    fontSize: 12,
    fontFamily: 'Apple SD Gothic Neo',
    color: 'rgb(17, 17, 17)',
  },
  selAvatar: {
    border: 'solid 2px rgb(55, 161, 255)',
  },
  avartarShow: {
    // display: 'block',
    opacity: 1,
    transition: 'opacity 0.2s ease-in',
  },
  avartarNone: {
    display: 'none',
    opacity: 0,
    transition: 'opacity 0.2s ease-in',
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
  '리빙',
  '푸드',
  '패션',
  '유아/아동',
  '여가',
  '맛집',
  '펫',
  '그외',
];
const selCateName = [
  '뷰티',
  '리빙',
  '푸드',
  '패션',
  '유아/아동',
  '여가',
  '맛집',
  '펫',
  '그외',
];

let lastScrollY = 0;

/* eslint-disable react/prefer-stateless-function */
class ReviewTopTag extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selValue: -9,
      direction: 1,
      reviewFirst: false,
    };
    this.handleTag = this.handleTag.bind(this);
  }

  handleTag = value => {
    // console.log(value);
    this.props.loadValue(value);
    this.setState({
      selValue: value,
    });
  };

  handleScroll = () => {
    const direction = lastScrollY > window.scrollY ? 1 : 2;
    const between = 30;
    const minPos = 72;
    let diff = 0;

    if (
      Math.abs(lastScrollY - window.scrollY) > between &&
      window.scrollY > minPos
    ) {
      lastScrollY = window.scrollY;
      diff = 1;
    } else {
      diff = 0;
    }

    if (diff) this.setState({ direction: diff * direction });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.getLastReviews();
  }

  getLastReviews = () => {
    const requestURL = `${process.env.API_URL}/review/findLastReview`;
    axios({
      method: 'GET',
      url: requestURL,
      headers: {
        Accept: 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(resp => {
        // console.log(this.state.parentId);
        if (Boolean(resp.data)) {
          console.log(resp.data);

          this.setState({ reviewFirst: resp.data });
        }
      })
      .catch(error => {
        // console.log(error);
        if (Boolean(error.response.data.code)) {
        }
        this.setState({ loading: false });
      });
  };
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { classes, categorys } = this.props;
    const { reviewFirst } = this.state;
    // console.log(`categorys ====[ ${categorys}]`);
    const settings = {
      dots: false,
      className: 'center',
      infinite: false,
      // speed: 500,
      slidesToShow: 4.9,
      slidesToScroll: 1,
      swipeToSlide: true,
      // centerPadding: '30px',
    };
    // console.log(reviewFirst);
    // if (Boolean(reviewFirst)) {
    //   console.log(reviewFirst.mediaCollection);
    //   console.log(reviewFirst.mediaCollection[0]);
    // }
    const directionStyle =
      this.state.direction == 1 ? classes.avartarShow : classes.avartarNone;

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
                      : reviewFirst.mediaCollection[0].imageExt === 'gif'
                        ? reviewFirst.mediaCollection[0].fullPath
                        : reviewFirst.mediaCollection[0].fullPathSmall
                  }
                  className={classNames(
                    directionStyle,
                    classes.bigAvatar,
                    this.state.selValue === -9
                      ? classes.selAvatar
                      : classes.avatar,
                  )}
                  onClick={() => this.handleTag(-9)}
                />
              ) : (
                <Avatar
                  alt="Adelle Charles"
                  src={Cola}
                  // src={reviewFirst.mediaCollection[0]}
                  className={classNames(
                    classes.bigAvatar,
                    this.state.selValue === -9
                      ? classes.selAvatar
                      : classes.avatar,
                  )}
                  onClick={() => this.handleTag(-9)}
                />
              )}
              <b>
                <p
                  className={
                    this.state.selValue === -9 ? classes.selText : classes.text
                  }
                >
                  #최신
                </p>
              </b>
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

            {/* <img alt="Adelle Charles" src="https://youtu.be/761ae_KDg_Q" class="jss99"> */}
            {categorys &&
              categorys.map(item => (
                <div className={classes.avawrap} key={item.categoryId}>
                  <Avatar
                    alt="Adelle Charles"
                    src={
                      item.fullPath.includes('https://www.youtube') ||
                      item.fullPath.includes('https://youtu.be')
                        ? `http://img.youtube.com/vi/${item.movieKey}/1.jpg`
                        : item.imageExt === 'gif'
                          ? item.fullPath
                          : item.fullPathSmall
                    }
                    className={classNames(
                      directionStyle,
                      classes.bigAvatar,
                      this.state.selValue === item.categoryId
                        ? classes.selAvatar
                        : classes.avatar,
                    )}
                    onClick={() => this.handleTag(item.categoryId)}
                  />
                  <b>
                    {' '}
                    <p
                      className={
                        this.state.selValue === item.categoryId
                          ? classes.selText
                          : classes.text
                      }
                    >
                      #{cateName[item.categoryId]}
                    </p>
                  </b>
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
