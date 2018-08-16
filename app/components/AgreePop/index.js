/**
 *
 * AgreePop
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import Button from '@material-ui/core/Button';
import BlueButton from 'components/BlueButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
// import Check from '@material-ui/icons/Check';
import CheckCircle from '@material-ui/icons/CheckCircle';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Privacy from './privacy';
import Service from './service';

const styles = {
  dialogTitle: {
    marginTop: '30px',
    textAlign: 'center',
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
    border: '1px solid #aaaaaa',
  },
  subTitle: {
    paddingLeft: '10px',
  },
  agreeSubTitle: {
    color: '#1591ff',
  },
  disagreeSubTitle: {
    color: '#000000',
  },
  moreSub: {
    position: 'absolute',
    right: '40px',
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
            {<FormattedMessage {...messages.agreeTitle} />}
          </DialogTitle>
          <DialogContent>
            <Card className={classes.card}>
              <CardContent
                className={
                  serviceAgree
                    ? classes.agreeSubTitle
                    : classes.disagreeSubTitle
                }
              >
                <span>
                  {serviceAgree ? <CheckCircle /> : <CheckCircleOutline />}
                </span>
                <span className={classes.subTitle}>서비스 이용약관 동의</span>
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
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="body2">
                  서비스 이용에 관련된 회사와 회원의 권리, 의무 등을 규정하고
                  있습니다.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent
                className={
                  privacyAgree
                    ? classes.agreeSubTitle
                    : classes.disagreeSubTitle
                }
              >
                <span>
                  {privacyAgree ? <CheckCircle /> : <CheckCircleOutline />}
                </span>
                <span className={classes.subTitle}>
                  개인정보 수집 및 이용 동의
                </span>
                <span className={classes.moreSub}>
                  <IconButton
                    color="inherit"
                    onClick={() => {
                      this.handleDetail('PRIVACY');
                    }}
                    aria-label="service"
                    className={classes.moreBtn}
                  >
                    자세히 보기
                  </IconButton>
                </span>
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="body2">
                  서비스 이용에 관련된 회사와 회원의 권리, 의무 등을 규정하고
                  있습니다.
                </Typography>
              </CardContent>
            </Card>
          </DialogContent>
          <Divider />
          <DialogActions className={classes.dialogAction}>
            {/* <Button onClick={handleClose} color="primary">
              Disagree
            </Button> */}
            <BlueButton
              btnType="button"
              // onClickFunc={this.handleopenAgreePop}
              complete={serviceAgree * privacyAgree ? true : false}
              btnName="확인"
              onClickFunc={this.handleAgreeCheck}
              // onClick={this.submitForm}
            />
            {/* <Button
              className={classes.okBtn}
              onClick={this.handleAgreeCheck}
              color="secondary"
              disabled={serviceAgree * privacyAgree ? false : true}
              autoFocus
            > */}
            {/* {<FormattedMessage {...messages.ok} />} */}
            {/* 확인
            </Button> */}
          </DialogActions>
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
