/**
 *
 * SearchBarMap
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import {
//   geocodeByAddress,
//   geocodeByPlaceId,
//   getLatLng,
// } from 'react-places-autocomplete';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
// import googleLogo from '../../images/powered_by_google_default.png';

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
  inputLabel: {
    marginTop: 12,
    marginBottom: 12,
    textAlign: 'left',
    color: '#7c7c7c',
  },
});

/* eslint-disable react/prefer-stateless-function */
class SearchBarMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      latitude: false,
      longitude: false,
      isGeocoding: false,
    };
  }

  // handleChange = address => {
  //   this.setState({
  //     address,
  //     latitude: null,
  //     longitude: null,
  //   });
  // };

  handleChange = address => {
    this.setState({ address });
  };

  handleChangeInput = name => value => {
    this.setState({
      [name]: value,
    });
  };

  // handleSelect = address => {
  //   geocodeByAddress(address)
  //     .then(results => getLatLng(results[0]))
  //     .then(latLng => console.log('Success', latLng))
  //     .catch(error => console.error('Error', error));
  // };

  handleSelect = selected => {
    this.setState({ isGeocoding: true, address: selected });
    geocodeByAddress(selected)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        this.setState({
          latitude: lat,
          longitude: lng,
          // isGeocoding: false,
        });
        // console.log('Success', lat);
        // console.log('Success', lng);
        this.props.centerMoveFunc(lat, lng);
      })
      .catch(error => {
        // this.setState({ isGeocoding: false });
        // console.log('error', error); // eslint-disable-line no-console
      });
  };

  handleCloseClick = () => {
    this.setState({
      address: '',
      latitude: null,
      longitude: null,
    });
  };

  handleError = (status, clearSuggestions) => {
    console.log('Error from Google Maps API', status); // eslint-disable-line no-console
    this.setState({ errorMessage: status }, () => {
      clearSuggestions();
    });
  };

  render() {
    const { classes } = this.props;
    // const {
    //   address,
    //   errorMessage,
    //   latitude,
    //   longitude,
    //   isGeocoding,
    // } = this.state;
    // const suggestionsOption = this.state.suggestions;
    // console.log(suggestionsOption);
    return (
      <div className="container">
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <div className={classes.inputWrap}>
                <div className={classes.search}>
                  <SearchIcon />
                </div>
                <input
                  className={classes.input}
                  placeholder="구매처를 입력해 주세요"
                  name="storeAddress"
                  {...getInputProps({
                    //   placeholder: 'Search Places ...',
                    // className: 'location-search-input',
                  })}
                />
              </div>
              {/* <input
                {...getInputProps({
                  //   placeholder: 'Search Places ...',
                    // className: 'location-search-input',
                })}
              /> */}

              <div className="Demo__autocomplete-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'Demo__suggestion-item--active'
                    : 'Demo__suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      {/* <span>{suggestion.description}</span> */}
                      <strong>
                        {suggestion.formattedSuggestion.mainText}
                      </strong>{' '}
                      <small>
                        {suggestion.formattedSuggestion.secondaryText}
                      </small>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <input type="hidden" name="storeLat" value={this.state.latitudet} />
        <input type="hidden" name="storeLng" value={this.state.longitude} />
        {/* <Select
          classes={classes}
          options={suggestionsOption}
          // components={components}
          value={this.state.single}
          onChange={this.handleChangeInput('single')}
          placeholder="Search a country (start with a)"
        /> */}
      </div>
    );
  }
}

SearchBarMap.propTypes = {
  centerMoveFunc: PropTypes.func.isRequired,
};

// export default SearchBarMap;
export default withStyles(styles)(SearchBarMap);
