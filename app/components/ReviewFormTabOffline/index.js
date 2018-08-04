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
import { compose } from 'redux';
// import { Helmet } from 'react-helmet';
import SearchBarMap from 'components/SearchBarMap';
// import GoogleMapReact from 'google-map-react';
// import { GoogleApiWrapper } from 'google-maps-react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

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
  googleMap: {
    width: '100%',
    position: 'relative',
    height: 400,
  },
});

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
  render() {
    const { classes } = this.props;
    const { loaded } = this.state;
    // console.log(process.env.NAVER_MAP_CLIENTID);
    // console.log(process.env.API_URL);
    // if (!loaded) {
    //   return <div>Loading</div>;
    // }
    return (
      <div>
        {/* <FormattedMessage {...messages.header} /> */}
        {/* <div className={classes.rowdiv}>서비스 준비중 입니다.</div> */}
        {/* <Helmet>
          <script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC8E2pXbUN9C_oDzn8rMH9FXnK76brBSw4&libraries=places&callback=initAutocomplete"
            async
            defer
          />
        </Helmet> */}
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
          <div className={classes.inputLabel}>구매처</div>
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
          {/* <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyC8E2pXbUN9C_oDzn8rMH9FXnK76brBSw4',
              }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              center={this.state.centerMove}
            >
              
            </GoogleMapReact>
          </div> */}
        </div>
      </div>
    );
  }
}

ReviewFormTabOffline.propTypes = {};

// export default ReviewFormTabOffline;
// export default withStyles(styles)(ReviewFormTabOffline);

export default compose(
  GoogleApiWrapper({
    apiKey: 'AIzaSyC8E2pXbUN9C_oDzn8rMH9FXnK76brBSw4',
    language: 'ko',
  }),
  withStyles(styles),
)(ReviewFormTabOffline);
