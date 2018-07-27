/**
 *
 * ImagePreviews
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '../../images/ic-close-photo@3x.png';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 0,
  },
  previewimg: {
    // flex: 1,
    width: '100%',
    // width: 86,
    height: 86,
  },
  previewDiv: {
    // flex: 1,
    // width: '100%',
    // width: 86,
    // height: 86,
    // border: {
    //   radius: 4,
    //   solid: 0.5,
    //   color: '#e3e3e3',
    // },
    width: '100%',
    height: 86,
    borderRadius: 4,
    border: 'solid 1px #e3e3e3',
    // position: 'relative',
    // paddingLeft: 8,
  },
  previewWrap: {
    paddingLeft: 8,
    position: 'relative',
  },
  button: {
    // margin: theme.spacing.unit,
    // margin: {
    //   top: 4,
    //   left: 10,
    // },
    position: 'absolute',
    // top: -5,
    // backgroundColor: '#ffffff',

    top: 6,
    right: 6,
    width: 20,
    height: 20,
    // right: 0,
  },
  ic_close_photo: {
    width: 20,
    height: 20,
    objectFit: 'contain',
  },
});

/* eslint-disable react/prefer-stateless-function */
class ImagePreviews extends React.PureComponent {
  constructor(props) {
    super(props);

    this.remove = this.remove.bind(this);
  }
  remove = name => {
    console.log(name);
  };
  // remove(name) {
  //   console.log(name);
  //   // this.props.handleRemove(name);
  // }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.previewWrap}>
        <div className={classes.previewDiv}>
          <div>
            <IconButton className={classes.button} aria-label="Delete">
              <img
                src={RemoveIcon}
                className={classes.ic_close_photo}
                alt="previewImg"
              />
            </IconButton>
            <button onClick={() => this.remove('test')}>TEST</button>
          </div>

          <img
            className={classes.previewimg}
            src={this.props.src}
            alt={this.props.alt}
          />
        </div>
      </div>
    );
  }
}

ImagePreviews.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // handleRemove: PropTypes.func.isRequired,
};

// export default ImagePreviews;
export default withStyles(styles)(ImagePreviews);
