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
    // paddingTop: 10,
  },
  previewDiv: {
    width: '100%',
    height: 86,
    borderRadius: 4,
    border: 'solid 1px #e3e3e3',
    // position: 'relative',
    // paddingLeft: 8,
    // paddingTop: 10,
  },
  previewWrap: {
    paddingLeft: 8,
    position: 'relative',
    paddingTop: 10,
  },
  button: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 20,
    height: 20,
    margin: 0,
    // right: 0,
  },
  ic_close_photo: {
    width: 20,
    height: 20,
    objectFit: 'contain',
  },
  iconBtn: {
    margin: 0,
  },
  video: {
    overflow: 'hidden',
    paddingBottom: '56.25%',
    position: 'relative',
    height: 0,
  },
  iframe: {
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});

/* eslint-disable react/prefer-stateless-function */
class ImagePreviews extends React.PureComponent {
  constructor(props) {
    super(props);

    this.remove = this.remove.bind(this);
  }
  // remove = name => {
  //   console.log(name);
  // };
  remove(name) {
    // console.log(name);
    this.props.handleRemove(name);
  }
  render() {
    const { classes } = this.props;
    const imageClick = () => {
    }
    return (
      <div className={classes.previewWrap}>
        <div className={classes.previewDiv}>
          <div>
            <IconButton className={classes.button} aria-label="Delete">
              <img
                src={RemoveIcon}
                className={classes.ic_close_photo}
                alt="previewImg"
               // onClick={() => imageClick()}
              />
            </IconButton>
            <button onClick={() => this.remove('test')}>TEST</button>
          </div>
          {this.props.alt === 'mov' ? (
            <img
              className={classes.previewimg}
              src={this.props.src}
              alt={this.props.alt}
              onClick={() => imageClick()}
            />
          ) : (
            <div className={classes.video}>
              <iframe
                width="420"
                height="315"
                src={this.props.src}
                frameBorder="0"
                allowFullscreen
                title="test"
                className={classes.iframe}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

ImagePreviews.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

// export default ImagePreviews;
export default withStyles(styles)(ImagePreviews);
