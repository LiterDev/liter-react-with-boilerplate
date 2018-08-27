/**
 *
 * UploadSlider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ImagePreview from 'components/ImagePreview';
import Slider from 'react-slick';
import Grid from '@material-ui/core/Grid';
// import LinearProgress from '@material-ui/core/LinearProgress';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const styles = theme => ({
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
    backgroundColor: '#ffffff',
    margin: '0px 0px 12px',
  },
  input: {
    margin: theme.spacing.unit,
    color: '#333333',
    '&:before': {
      borderBottomColor: '#e3e3e3',
    },
    '&:after': {
      borderBottomColor: '#1591ff',
    },
  },
  inputfile: { display: 'none' },
  cssFocused: {},
  cssUnderline: {
    '&:before': {
      borderBottomColor: '#e3e3e3',
    },
    '&:after': {
      borderBottomColor: '#e3e3e3',
    },
  },
  button: {
    margin: theme.spacing.unit,
    color: '#99999',
    width: 165,
    height: 40,
    backgroundColor: '#f4f4f4',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  previewimg: {
    width: '100%',
    border: {
      radius: 4,
      solid: 0.5,
      color: '#e3e3e3',
    },
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  buttonText: {
    width: 60,
    height: 18,
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#999999',
  },
  slider: {
    paddingTop: 10,
  },
});
/* eslint-disable react/prefer-stateless-function */
class UploadSlider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(name) {
    this.props.handleImageRemove(name);
  }

  render() {
    const { classes } = this.props;
    // console.log(imageComponent);
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
    };
    // const settings = {
    //   dots: false,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   afterChange: () =>
    //     this.setState(state => ({ updateCount: state.updateCount + 1 })),
    //   beforeChange: (current, next) => this.setState({ slideIndex: next }),
    // };
    return (
      <div>
        <Grid item xs={12}>
          {this.props.imageComponent && (
            <Slider {...settings}>
              {/* <Slider ref={slider => (this.slider = slider)} {...settings}> */}
              {this.props.imageComponent.map(movie => (
                <div key={movie.toString()}>
                  <ImagePreview
                    src={movie.src}
                    alt={movie.alt}
                    name={movie.name}
                    className={classes.previewimg}
                    handleRemove={this.handleRemove}
                  />
                </div>
              ))}
            </Slider>
          )}
        </Grid>
        {/* <LinearProgress variant="determinate" value={this.state.completed} />
        <input
          onChange={e => this.slider.slickGoTo(e.target.value)}
          value={this.state.slideIndex}
          type="range"
          min={0}
          max={3}
        />
        <p>Total updates: {this.state.updateCount} </p> */}
      </div>
    );
  }
}

UploadSlider.propTypes = {
  imageComponent: PropTypes.array.isRequired,
  handleImageRemove: PropTypes.func.isRequired,
};

// export default UploadSlider;
export default withStyles(styles)(UploadSlider);
