/**
 *
 * ImagePreview
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';
// import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
// import HighlightOff from '@material-ui/icons/HighlightOff';

import RemoveIcon from '../../images/ic-close-photo@3x.png';
// import styled from 'styled-components';

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
    zIndex: 10,
    // right: 0,
  },
  ic_close_photo: {
    width: 20,
    height: 20,
    objectFit: 'contain',
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
    zIndex: 5,
  },
});
// imageClick = () => {
//   //console.log('Click!!!!');
// }

function ImagePreview(props) {
  
  const { classes } = props;

  return (
    // <div>
    //   <FormattedMessage {...messages.header} />
    // </div>
    <div className={classes.previewWrap}>
      <div className={classes.previewDiv}>
        <div>
          {/* <Button
            variant="fab"
            mini
            // color="secondary"
            aria-label="Add"
            className={classes.button}
          >
           
            <AddIcon />
          </Button> */}
          <IconButton
            className={classes.button}
            aria-label="Delete"
            onClick={() => props.handleRemove(props.name)}
          >
            <img
              src={RemoveIcon}
              className={classes.ic_close_photo}
              alt="previewImg"
              onClick={() => this.imageClick().bind(this)}

            />
          </IconButton>
        </div>

        <img className={classes.previewimg} src={props.src} alt={props.alt} />

        {/* {props.alt === 'mov' ? (
          <div className={classes.video}>
            <iframe
              width="420"
              height="315"
              src={props.src}
              frameBorder="0"
              allowFullscreen
              title="test"
              className={classes.iframe}
            />
          </div>
        ) : (
          <img className={classes.previewimg} src={props.src} alt={props.alt} />
        )} */}
      </div>
    </div>
  );
}

ImagePreview.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  // key: PropTypes.object.isRequired,
};

// export default ImagePreview;
export default withStyles(styles)(ImagePreview);

