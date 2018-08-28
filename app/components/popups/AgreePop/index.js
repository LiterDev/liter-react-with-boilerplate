/**
 *
 * AgreePop
 *
 */
/* default */
import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
/* material-core */
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Check from '@material-ui/icons/Check';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography';
/* material-icon */
import CheckCircle from '@material-ui/icons/CheckCircle';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import CloseIcon from '@material-ui/icons/Close';
/* containers */
/* components */
import BlueButton from 'components/BlueButton';
/* image */
import OkCheckSelIcon from 'images/ic-okcheck-sel.png';
import OkCheckNonIcon from 'images/ic-okcheck-non.png';
/* ref */
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Privacy from './privacy';
import Service from './service';

const styles = {
  dialogTitle: {
    marginTop: '30px',
    textAlign: 'center',
  },
  titleFont: {
    fontSize: '22px',
    fontWeight: '600px',
    color: '#333333',
  },
  dialogContent: {
    marginTop: '20px',
  },
  dialogContentBottom: {
    marginTop: '50px',
  },
  closeBtn: {
    color: '#000000',
    position: 'absolute',
    right: 5,
    top: 5,
  },
  okBtn: {
    color: '#1591ff',
    fontSize: '16px',
  },
  dialogAction: {
    justifyContent: 'center',
  },
  card: {
    marginTop: '10px',
    // border: '1px solid #aaaaaa',
  },
  subTitle: {
    paddingLeft: '10px',
  },
  agreeSubTitle: {
    color: '#1591ff',
    fontWeight: 'bold',
  },
  disagreeSubTitle: {
    color: '#000000',
    fontWeight: 'bold',
  },
  moreSub: {
    position: 'absolute',
    right: '40px',
    lineHeight: '0',
  },
  moreBtn: {
    height: '10px',
    width: '60px',
    fontSize: '12px',
    color: '#999999',
  },
};

/* eslint-disable react/prefer-stateless-function */
class AgreePop extends React.Component {
  state = {
    serviceOpen: false,
    serviceAgree: false,
    privacyOpen: false,
    privacyAgree: false,
  };

  handleClose = () => {
    this.setState({
      serviceAgree: false,
      privacyAgree: false,
    });
    this.props.onClose(false);
  };

  handleServiceClose = () => {
    this.setState({
      serviceOpen: false,
    });
  };

  handlePrivacyClose = () => {
    this.setState({
      privacyOpen: false,
    });
  };

  handleDetail = type => {
    console.log(`handleDetail===${type}`);
    if (type === 'SERVICE') {
      console.log('SERVICE');
      this.setState({
        serviceOpen: true,
      });
    } else if (type === 'PRIVACY') {
      console.log('PRIVACY');
      this.setState({
        privacyOpen: true,
      });
    }
  };

  handleServiceAgree = () => {
    this.setState({
      serviceAgree: true,
      serviceOpen: false,
    });
  };

  handlePrivacyAgree = () => {
    this.setState({
      privacyAgree: true,
      privacyOpen: false,
    });
  };

  handleAgreeCheck = () => {
    const { handleAgree } = this.props;
    const { serviceAgree, privacyAgree } = this.state;
    if (!serviceAgree) {
      return false;
    }
    if (!privacyAgree) {
      return false;
    }
    handleAgree();
    return true;
  };

  render() {
    const { classes, open } = this.props;
    const { serviceOpen, privacyOpen, serviceAgree, privacyAgree } = this.state;
    return (
      <div>
        <Dialog
          open={open}
          fullScreen
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            color="inherit"
            onClick={this.handleClose}
            aria-label="Close"
            className={classes.closeBtn}
          >
            <CloseIcon />
          </IconButton>
          <DialogTitle className={classes.dialogTitle} id="alert-dialog-title">
            <Typography className={classes.titleFont}>
              {<FormattedMessage {...messages.agreeTitle} />}
            </Typography>
          </DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <Card className={classes.card}>
              <CardContent
                className={
                  serviceAgree
                    ? classes.agreeSubTitle
                    : classes.disagreeSubTitle
                }
              >
                <div>
                  <span>
                    <img
                      src={serviceAgree ? OkCheckSelIcon : OkCheckNonIcon}
                      alt="service agree"
                    />
                  </span>
                  <span className={classes.subTitle}>서비스 이용약관 동의</span>
                </div>
                <div>
                  <span className={classes.moreSub}>
                    <IconButton
                      color="inherit"
                      onClick={() => {
                        this.handleDetail('SERVICE');
                      }}
                      aria-label="service"
                      className={classes.moreBtn}
                    >
                      자세히 보기
                    </IconButton>
                  </span>
                </div>
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="body2">
                  서비스 이용에 관련된 회사와 회원의 권리, 의무 등을 규정하고
                  있습니다.
                </Typography>
              </CardContent>
            </Card>
            <Divider />
            <Card className={classes.card}>
              <CardContent
                className={
                  privacyAgree
                    ? classes.agreeSubTitle
                    : classes.disagreeSubTitle
                }
              >
                <div>
                  <span>
                    <img
                      src={privacyAgree ? OkCheckSelIcon : OkCheckNonIcon}
                      alt="privacy agree"
                    />
                  </span>
                  <span className={classes.subTitle}>
                    개인정보 수집 및 이용 동의
                  </span>
                </div>
                <div>
                  <span className={classes.moreSub}>
                    <IconButton
                      color="inherit"
                      onClick={() => {
                        this.handleDetail('SERVICE');
                      }}
                      aria-label="service"
                      className={classes.moreBtn}
                    >
                      자세히 보기
                    </IconButton>
                  </span>
                </div>
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="body2">
                  서비스 이용에 관련된 회사와 회원의 권리, 의무 등을 규정하고
                  있습니다.
                </Typography>
              </CardContent>
            </Card>
            <Divider />
            <div className={classes.dialogContentBottom}>
              <BlueButton
                btnType="button"
                // onClickFunc={this.handleopenAgreePop}
                complete={serviceAgree * privacyAgree ? true : false}
                btnName="모두 확인 후 동의합니다."
                onClickFunc={this.handleAgreeCheck}
                // onClick={this.submitForm}
              />
            </div>
          </DialogContent>
          <Divider />
          {/* <DialogActions className={classes.dialogAction}> */}
          {/* <Button onClick={handleClose} color="primary">
              Disagree
            </Button> */}
          {/* <BlueButton
            btnType="button"
            // onClickFunc={this.handleopenAgreePop}
            complete={serviceAgree * privacyAgree ? true : false}
            btnName="모두 확인 후 동의합니다."
            onClickFunc={this.handleAgreeCheck}
            // onClick={this.submitForm}
          /> */}
          {/* </DialogActions> */}
        </Dialog>
        <Service
          serviceOpen={serviceOpen}
          key="SERVICE_DETAIL"
          agreeHandle={this.handleServiceAgree}
          closeHandle={this.handleServiceClose}
        />
        <Privacy
          privacyOpen={privacyOpen}
          key="PRIVACY_DETAIL"
          agreeHandle={this.handlePrivacyAgree}
          closeHandle={this.handlePrivacyClose}
        />,
      </div>
    );
  }
}

AgreePop.propTypes = {};

export default withStyles(styles)(AgreePop);
