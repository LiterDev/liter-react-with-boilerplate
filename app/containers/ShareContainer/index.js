/**
 *
 * ShareContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import FacebookProvider, { Share } from 'react-facebook';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import ShareIcon from 'images/ic-feed-share.png';

import FBIcon from 'images/share/btn_share_fb_n@2x.png';
import KTIcon from 'images/share/btn_share_kt_n@2x.png';
import URLIcon from 'images/share/btn_share_url_n@2x.png';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectShareContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import KakaoTalk from './kakao';

const styles = theme => ({
  paperRoot: {
    backgroundColor: 'transparent',
  },
  captionWrapper: {
    paddingTop: 8,
  },
  icons: {
    width: '24px',
    height: '24px',
  },
  numCaption: {
    paddingTop: 5,
    fontFamily: 'SFProDisplay',
    fontSize: 16,
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
  },
  shareText: {
    padding: '0 0 0 5px',
    fontSize: '17px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.27',
    letterSpacing: 'normal',
    color: '#7c7c7c',
  },
});

/* eslint-disable react/prefer-stateless-function */
export class ShareContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      snsShareDialogOpen: false,
    }
  }

  handleDialogOpen = () => {
    this.setState({ snsShareDialogOpen: true });
  }

  handleDialogClose = () => {
    this.setState({ snsShareDialogOpen: false });
  }

  render() {
    const { classes, shareCount } = this.props;    

    return (
      <div>
        <div className={classes.captionWrapper}>
          <img
            src={ShareIcon}
            alt="share"
            className={classes.icons}
            onClick={this.handleDialogOpen}
          />
          <span
            className={classNames(
              classes.numCaption,
              classes.shareText
            )}
          >
            {shareCount}
          </span>
        </div>

        {/*------- sns-share:dialog start-------*/}
        <Dialog
          classes={{
            paper: classes.paperRoot
          }}
          open={this.state.snsShareDialogOpen}
          onClose={this.handleDialogClose}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogContent>
            <DialogContentText>
              <div>
                <div>
                  <FacebookProvider
                      appId={process.env.FACEBOOK_APPID}
                      mobileIframe
                      hashtag="#LITER"
                    >
                  <Share
                    href={this.props.shareLocation}>
                    <img src={FBIcon} />
                  </Share>
                  </FacebookProvider>
                </div>
                <div>
                  <KakaoTalk 
                    icon={KTIcon}
                    href={this.props.shareLocation}
                    media={this.props.media.fullPathSmall}
                    title={this.props.title}
                    review={this.props.review}
                    handleResponse={this.props.handleResponse}
                    handleDialogClose={this.handleDialogClose}
                  />
                </div>
                {/* <div>
                  <img src={URLIcon} />
                </div> */}
              </div>
            </DialogContentText>
          </DialogContent>          
        </Dialog>


        {/*------- sns-share:dialog end---------*/}
      </div>
    );
  }
}

ShareContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sharecontainer: makeSelectShareContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'shareContainer', reducer });
const withSaga = injectSaga({ key: 'shareContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(ShareContainer);
