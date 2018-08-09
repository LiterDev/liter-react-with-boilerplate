/**
 *
 * ReviewFormTabOffline
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import { compose } from 'redux';
// import { Helmet } from 'react-helmet';
import SearchBarMap from 'components/SearchBarMap';
// import GoogleMapReact from 'google-map-react';
// import { GoogleApiWrapper } from 'google-maps-react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Input from '@material-ui/core/Input';
import TagInput from 'components/TagInput';
import SurveyList from 'components/SurveyList';
import TabLabel from 'components/TabLabel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import LinkIcon from '../../images/ic-link-on@3x.png';
import WriteIcon from '../../images/ic-write@3x.png';
import StartTitle from '../../images/ic-star@3x.png';
import CheckIcon from '../../images/ic-repurchase@3x.png';
import SurveyData from '../../survey.json';

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
  rowdivSec: {
    width: '100%',
    backgroundColor: '#ffffff',
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 20,
    marginTop: 12,
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
  googleMap: {
    width: '100%',
    position: 'relative',
    height: 200,
  },
  tabRoot: {
    // minHeight: 60,
    paddingTop: 10,
    width: '40%',
    fontSize: '1.5rem',
  },
  tabPaper: {
    heght: 20,
    marginTop: 10,
  },
});

/* eslint-disable react/prefer-stateless-function */
class ReviewFormTabOffline extends React.PureComponent {
  constructor(props) {
    super(props);
    // const navermaps = window.naver.maps;
    this.state = {
      loaded: false,
      address: '',
      centerMove: {
        lat: 37.5103487,
        lng: 127.06104640000001,
      },
      value: false,
      // zoom: 17,
    };
  }

  static defaultProps = {
    center: {
      lat: 37.5103487,
      lng: 127.06104640000001,
    },
    zoom: 15,
  };

  centerMoveFunc = (latS, lngS) => {
    this.setState({
      centerMove: {
        lat: latS,
        lng: lngS,
      },
    });
    // this.state.setState({
    //   centerMove: {
    //     lat: latS,
    //     lng: lngS,
    //   },
    // });
  };
  handleChange = (event, value) => {
    this.setState({
      value,
    });
  };
  render() {
    const { classes } = this.props;
    // const { loaded } = this.state;
    // console.log(process.env.NAVER_MAP_CLIENTID);
    // console.log(process.env.API_URL);
    // if (!loaded) {
    //   return <div>Loading</div>;
    // }
    return (
      <div>
        <div className={classes.rowdiv}>
          <Divider className={classes.divider} />
          <div className={classes.inputLabel}>장소</div>
          <div className={classes.inputWrap}>
            <div className={classes.search}>
              <SearchIcon />
            </div>
            <input
              className={classes.input}
              placeholder="방문한 곳을 입력해 주세요"
              name="productName"
            />
          </div>
          <Divider className={classes.divider} />
          <div className={classes.inputLabel}>주소</div>
          <SearchBarMap centerMoveFunc={this.centerMoveFunc} />
          <div className={classes.googleMap}>
            <Map
              google={this.props.google}
              zoom={15}
              initialCenter={{
                lat: this.props.center.lat,
                lng: this.props.center.lng,
              }}
              center={{
                lat: this.state.centerMove.lat,
                lng: this.state.centerMove.lng,
              }}
              className={classes.googleMap}
            >
              <Marker
                onClick={this.onMarkerClick}
                position={{
                  lat: this.state.centerMove.lat,
                  lng: this.state.centerMove.lng,
                }}
              />

              {/* <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow> */}
            </Map>
          </div>
        </div>
        <div className={classes.rowdivSec}>
          <div className={classes.buyWrap}>
            <img src={WriteIcon} alt="write" className={classes.iconWrite} />
            <span className={classes.cateText}>리뷰를 작성하세요.</span>
          </div>
          <Divider className={classes.divider} />
          <Input
            className={classes.inputReview}
            placeholder="사용 및 이용 후기 또는 도움이 되는 정보를 남겨주세요."
            disableUnderline
            multiline
            name="content"
          />
        </div>
        <div className={classes.rowdivSec}>
          <div className={classes.buyWrap}>
            <img src={WriteIcon} alt="write" className={classes.iconWrite} />
            <span className={classes.cateText}>태그</span>
          </div>
          {/* <Divider className={classes.divider} /> */}
          <TagInput />
        </div>
        <div className={classes.rowdivSec}>
          <div className={classes.buyWrap}>
            <img src={StartTitle} alt="write" className={classes.iconWrite} />
            <span className={classes.cateText}>별평점</span>
          </div>
          {this.props.category > 0 ? (
            <SurveyList
              surveyCate={SurveyData.surveyCate[this.props.category]}
              surveyBuyType={SurveyData.surveyBuyType[0]}
            />
          ) : (
            <SurveyList
              surveyCate={SurveyData.surveyCate[99999]}
              surveyBuyType={SurveyData.surveyBuyType[0]}
            />
          )}
          {/* <SurveyList
            surveyCate={SurveyData.surveyCate[this.props.category]}
            surveyBuyType={SurveyData.surveyBuyType[0]}
          /> */}
        </div>
        <div className={classes.rowdivSec}>
          <div className={classes.buyWrap}>
            <img src={CheckIcon} alt="check" className={classes.iconWrite} />
            <span className={classes.cateText}>재구매를 하겠습니까?</span>
          </div>
          <Divider className={classes.divider} />
          <Paper className={classes.tabPaper}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="secondary"
              centered
            >
              <Tab
                label={<TabLabel>예</TabLabel>}
                classes={{
                  root: classes.tabRoot,
                  labelIcon: classes.tabIcon,
                }}
              />
              <Tab
                label={<TabLabel>아니오</TabLabel>}
                classes={{
                  root: classes.tabRoot,
                  labelIcon: classes.tabIcon,
                }}
              />
            </Tabs>
          </Paper>
        </div>
        <input
          name="recommend"
          value={this.state.value === 0 ? 'YES' : 'NO'}
          type="hidden"
        />
        <input type="hidden" name="store" value="OFFLINE" />
      </div>
    );
  }
}

ReviewFormTabOffline.propTypes = {
  category: PropTypes.number.isRequired,
};

// export default ReviewFormTabOffline;
// export default withStyles(styles)(ReviewFormTabOffline);

export default compose(
  GoogleApiWrapper({
    apiKey: 'AIzaSyC8E2pXbUN9C_oDzn8rMH9FXnK76brBSw4',
    language: 'ko',
  }),
  withStyles(styles),
)(ReviewFormTabOffline);
