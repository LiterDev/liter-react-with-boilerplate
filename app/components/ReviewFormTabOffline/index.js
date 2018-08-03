/**
 *
 * ReviewFormTabOffline
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';

import { Map as NaverMap, loadNavermapsScript, Marker } from 'react-naver-maps';
import Loadable from 'react-loadable';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0,
  },
  rowdiv: {
    width: '100%',
    backgroundColor: '#ffffff',
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    // paddingTop: 10,
    textAlign: 'center',
  },
  inputWrap: {
    backgroundColor: '#f4f4f4',
    // marginTop: 20,
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    // marginRight: theme.spacing.unit * 2,
    // marginLeft: theme.spacing.unit,
    borderRadius: 2,
    // background: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      // background: fade(theme.palette.common.white, 0.25),
    },
    '& $input': {
      // transition: theme.transitions.create('width'),
      // width: 200,
      '&:focus': {
        // width: 250,
      },
    },
    minHeight: 40,
    marginBottom: 16,
  },
  search: {
    width: theme.spacing.unit * 6,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2979ff',
  },
  input: {
    font: 'inherit',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${
      theme.spacing.unit
    }px ${theme.spacing.unit * 6}px`,
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    margin: 0, // Reset for Safari
    color: 'inherit',
    width: '100%',
    '&:focus': {
      outline: 0,
    },
    height: 40,
  },
  divider: {
    width: '100%',
  },
  inputLabel: {
    marginTop: 12,
    marginBottom: 12,
    textAlign: 'left',
    color: '#7c7c7c',
  },
  linkIcon: {
    width: 22,
    height: 22,
    objectFit: 'contain',
  },
  buyWrap: {
    // paddingTop: 16,
    textAlign: 'left',
    color: '#333333',
    fontSize: 16,
    marginBottom: 19,
    // display: 'table',
  },
  iconShopping: {
    color: '#7c7c7c',
    lineHeight: 0,
    fontSize: 14,
  },
  iconWrite: {
    width: 24,
    height: 24,
    marginRight: 14,
  },
  cateText: {
    verticalAlign: 'middle',
    fontSize: 17,
  },
  inputReview: {
    minWidth: '100%',
    maxWidth: '100%',
    paddingTop: 20,
  },
});

const CLIENT_ID = process.env.NAVER_MAP_CLIENTID;
/* eslint-disable react/prefer-stateless-function */
class ReviewFormTabOffline extends React.PureComponent {
  constructor(props) {
    super(props);
    // const navermaps = window.naver.maps;
    this.state = {
      loaded: false,
      zoom: 12,
      center: false,
    };
  }

  componentDidMount() {
    loadNavermapsScript({
      clientId: CLIENT_ID, // required
      submodules: ['geocoder'], // default: []
    }).then(navermaps => {
      // return navermaps === window.naver.maps; // true
      this.navermaps = navermaps;
      this.setState({
        loaded: true,
        zoom: 12,
        center: new navermaps.LatLng(37.3595704, 127.105399),
      });

      if (navermaps === window.naver.maps) {
        // console.log('aaaa');
      }
      navermaps.Service.geocode({ address: '강남구' }, function(
        status,
        response,
      ) {
        // if (status === navermaps.Service.Status.ERROR) {
        //   return alert('Something wrong!');
        // }
        const result = response.result; // 검색 결과의 컨테이너
        const items = result.items; // 검색 결과의 배열
        console.log(items);
        // 성공시의 response 처리
      });
    });
  }
  render() {
    const { classes } = this.props;
    const { loaded } = this.state;
    // console.log(process.env.NAVER_MAP_CLIENTID);
    // console.log(process.env.API_URL);
    if (!loaded) {
      return <div>Loading</div>;
    }
    return (
      <div>
        {/* <FormattedMessage {...messages.header} /> */}
        {/* <div className={classes.rowdiv}>서비스 준비중 입니다.</div> */}
        <div className={classes.rowdiv}>
          <Divider className={classes.divider} />
          <div className={classes.inputLabel}>매장 이름</div>
          <div className={classes.inputWrap}>
            <div className={classes.search}>
              <SearchIcon />
            </div>
            <input
              className={classes.input}
              placeholder="상품명을 입력해 주세요"
              name="productName"
            />
          </div>
          <Divider className={classes.divider} />
          <div className={classes.inputLabel}>구매 정보 (매장 위치)</div>
          <div className={classes.inputWrap}>
            <div className={classes.search}>
              {/* <img src={LinkIcon} alt="link" className={classes.linkIcon} /> */}
              <SearchIcon />
            </div>
            <input
              className={classes.input}
              placeholder="구매처를 입력해 주세요"
              name="buyLink"
            />
          </div>
          <NaverMap
            style={{ width: '100%', height: '400px' }}
            zoom={this.state.zoom}
            onZoomChanged={zoom => {
              this.setState({ zoom });
            }}
            center={this.state.center}
            onCenterChanged={center => {
              this.setState({ center });
            }}
          />
          <Marker />
        </div>
      </div>
    );
  }
}

ReviewFormTabOffline.propTypes = {};

// export default ReviewFormTabOffline;
export default withStyles(styles)(ReviewFormTabOffline);
