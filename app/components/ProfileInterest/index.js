/**
 *
 * ProfileInterest
 *
 */
/* react ref*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import axios from 'axios';
/* material-ui core */
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
/* material-ui icon */
import CloseIcon from '@material-ui/icons/Close';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';
/* containers */
/* components */
import ProfileBotton from 'components/ProfileBotton';
import BlueButton from 'components/BlueButton';
import CategotyDiv from 'components/CategotyDiv';
import BeautyIcon from 'components/CategotyDiv/BeautyIcon';
import LifeIcon from 'components/CategotyDiv/LifeIcon';
import FoodIcon from 'components/CategotyDiv/FoodIcon';
import FashionIcon from 'components/CategotyDiv/FashionIcon';
import BabyIcon from 'components/CategotyDiv/BabyIcon';
import HobbyIcon from 'components/CategotyDiv/HobbyIcon';
import RestorantIcon from 'components/CategotyDiv/RestorantIcon';
import PetIcon from 'components/CategotyDiv/PetIcon';
import EtcIcon from 'components/CategotyDiv/EtcIcon';
// import styled from 'styled-components';
/* material-ui core */
/* material-ui icon */
/* containers */
/* components */
/* image */
/* ref */
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  root: {
    backgroundColor: '#f9f9f9',
    height: '100vh',
    fontFamily: 'Apple SD Gothic Neo',
  },
  appBar: {
    // height: theme.spacing.unit * 8,
    height: 64,
    backgroundColor: '#fffff',
    boxShadow: '0 0.5px 0 0 rgba(17, 17, 17, 0.1)',
  },
  toolbar: {
    textAlign: 'center',
    minHeight: 64,
    // boxShadow: '0 0.5px 0 0 rgba(0, 0, 0, 0.1)',
  },
  title: {
    position: 'relative',
    width: '100%',
    fontSize: 16,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: 'rgb(17, 17, 17)',
    // marginBottom: 37
  },
  close: {
    position: 'absolute',
    right: 20,
    height: 24,
    width: 24,
    zIndex: 10,
    color: '#000000',
  },

  procbarWrap: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 22,
    paddingBottom: 35,
    marginTop: 12,
    position: 'relative',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  barRoot: {
    backgroundColor: '#c8cacf',
    height: 3,
    marginTop: 3,
  },
  bar: {
    backgroundColor: '#1591ff',
  },
  textWrap: {
    position: 'relative',
  },
  procbarText: {
    // position: 'absolute',
    fontSize: 13,
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.13',
    letterSpacing: 'normal',
    color: '#999999',
    width: '70%',
    float: 'left',
    textAlign: 'left',
  },
  procbarPercent: {
    fontSize: 13,
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.13',
    letterSpacing: 'normal',
    color: '#1591ff',
    width: '30%',
    float: 'left',
    textAlign: 'right',
  },
  quicon: {
    marginLeft: 6,
  },
  textTop: {
    marginTop: 20,
    marginBottom: 17,
    fontSize: 18,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: 'rgb(51, 51, 51)',
  },
  textMid: {
    fontSize: 14,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.43,
    letterSpacing: 'normal',
    color: 'rgb(153, 153, 153)',
  },
  buttons: {
    position: 'relative',
    marginTop: 23,
  },
  buttonsSec: {
    position: 'relative',
    marginTop: 13,
  },
  button: {
    width: '95%',
    // marginLeft: 13,
  },
  buttonWrap: {
    // height: '100%',
    width: '50%',
    // float: 'left',
  },
  buttonWrapPet: {
    // height: '100%',
    width: '33%',
    // float: 'left',
  },
  buttonWrapLeft: {
    float: 'left',
    textAlign: 'left',
  },
  buttonWrapRight: {
    textAlign: 'right',
    display: 'inline-block',
  },
  buttonWrapCenter: {
    textAlign: 'center',
    display: 'inline-block',
  },
  checkIcon: {
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'rgb(170, 170, 170)',
  },
  formControl: {
    // width: '100%',
    width: '100vw',
    height: 40,
    borderRadius: 4,
    // border: 'solid 0.5px rgb(153, 153, 153)',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    display: 'table-cell',
    verticalAlign: 'middle',
  },
  formControlWrap: {
    marginTop: 35,
  },
  inputCss: {
    textAlign: 'center',

    color: 'rgb(153, 153, 153)',
  },
  buttonDiv: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    backgroundColor: 'rgb(249, 249, 249)',
  },
  divider: {
    marginTop: 35,
  },
  cateDiv: {
    display: 'inline-block',
  },
});
/* eslint-disable react/prefer-stateless-function */
class ProfileInterest extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cate1: false,
      cate2: false,
      cate3: false,
      cate4: false,
      cate5: false,
      cate6: false,
      cate7: false,
      cate8: false,
      cate9: false,
      complete: false,
      loading: false,
    };

    this.handleClose = this.handleClose.bind(this);
    // this.handleClose = this.handleComplte.bind(this);
  }
  handleClose = () => {
    this.props.handleClose();
  };
  handleCate1Toggle = () => {
    const cateVal = !this.state.cate1;
    this.setState({
      cate1: cateVal,
    });
    this.handleComplte1(cateVal);
  };
  handleCate2Toggle = () => {
    const cateVal = !this.state.cate2;
    this.setState({
      cate2: cateVal,
    });
    this.handleComplte2(cateVal);
  };

  handleCate3Toggle = () => {
    const cateVal = !this.state.cate3;
    this.setState({
      cate3: cateVal,
    });
    this.handleComplte3(cateVal);
  };
  handleCate4Toggle = () => {
    const cateVal = !this.state.cate4;
    this.setState({
      cate4: cateVal,
    });
    this.handleComplte4(cateVal);
  };
  handleCate5Toggle = () => {
    const cateVal = !this.state.cate5;
    this.setState({
      cate5: cateVal,
    });
    this.handleComplte5(cateVal);
  };
  handleCate6Toggle = () => {
    const cateVal = !this.state.cate6;
    this.setState({
      cate6: cateVal,
    });
    this.handleComplte6(cateVal);
  };
  handleCate7Toggle = () => {
    const cateVal = !this.state.cate7;
    this.setState({
      cate7: cateVal,
    });
    this.handleComplte7(cateVal);
  };
  handleCate8Toggle = () => {
    const cateVal = !this.state.cate8;
    this.setState({
      cate8: cateVal,
    });
    this.handleComplte8(cateVal);
  };
  handleCate9Toggle = () => {
    const cateVal = !this.state.cate9;
    this.setState({
      cate9: cateVal,
    });
    this.handleComplte9(cateVal);
  };
  handleComplte1 = cateVal => {
    if (
      // this.state.cate1 == true ||
      this.state.cate2 == true ||
      this.state.cate3 == true ||
      this.state.cate4 == true ||
      this.state.cate5 == true ||
      this.state.cate6 == true ||
      this.state.cate7 == true ||
      this.state.cate8 == true ||
      this.state.cate9 == true ||
      cateVal == true
    ) {
      this.setState({
        complete: true,
      });
    } else {
      this.setState({
        complete: false,
      });
    }
  };
  handleComplte2 = cateVal => {
    if (
      this.state.cate1 == true ||
      // this.state.cate2 == true ||
      this.state.cate3 == true ||
      this.state.cate4 == true ||
      this.state.cate5 == true ||
      this.state.cate6 == true ||
      this.state.cate7 == true ||
      this.state.cate8 == true ||
      this.state.cate9 == true ||
      cateVal == true
    ) {
      this.setState({
        complete: true,
      });
    } else {
      this.setState({
        complete: false,
      });
    }
  };
  handleComplte3 = cateVal => {
    if (
      this.state.cate1 == true ||
      this.state.cate2 == true ||
      // this.state.cate3 == true ||
      this.state.cate4 == true ||
      this.state.cate5 == true ||
      this.state.cate6 == true ||
      this.state.cate7 == true ||
      this.state.cate8 == true ||
      this.state.cate9 == true ||
      cateVal == true
    ) {
      this.setState({
        complete: true,
      });
    } else {
      this.setState({
        complete: false,
      });
    }
  };
  handleComplte4 = cateVal => {
    if (
      this.state.cate1 == true ||
      this.state.cate2 == true ||
      this.state.cate3 == true ||
      // this.state.cate4 == true ||
      this.state.cate5 == true ||
      this.state.cate6 == true ||
      this.state.cate7 == true ||
      this.state.cate8 == true ||
      this.state.cate9 == true ||
      cateVal == true
    ) {
      this.setState({
        complete: true,
      });
    } else {
      this.setState({
        complete: false,
      });
    }
  };
  handleComplte5 = cateVal => {
    if (
      this.state.cate1 == true ||
      this.state.cate2 == true ||
      this.state.cate3 == true ||
      this.state.cate4 == true ||
      // this.state.cate5 == true ||
      this.state.cate6 == true ||
      this.state.cate7 == true ||
      this.state.cate8 == true ||
      this.state.cate9 == true ||
      cateVal == true
    ) {
      this.setState({
        complete: true,
      });
    } else {
      this.setState({
        complete: false,
      });
    }
  };
  handleComplte6 = cateVal => {
    if (
      this.state.cate1 == true ||
      this.state.cate2 == true ||
      this.state.cate3 == true ||
      this.state.cate4 == true ||
      this.state.cate5 == true ||
      // this.state.cate6 == true ||
      this.state.cate7 == true ||
      this.state.cate8 == true ||
      this.state.cate9 == true ||
      cateVal == true
    ) {
      this.setState({
        complete: true,
      });
    } else {
      this.setState({
        complete: false,
      });
    }
  };
  handleComplte7 = cateVal => {
    if (
      this.state.cate1 == true ||
      this.state.cate2 == true ||
      this.state.cate3 == true ||
      this.state.cate4 == true ||
      this.state.cate5 == true ||
      this.state.cate6 == true ||
      // this.state.cate7 == true ||
      this.state.cate8 == true ||
      this.state.cate9 == true ||
      cateVal == true
    ) {
      this.setState({
        complete: true,
      });
    } else {
      this.setState({
        complete: false,
      });
    }
  };
  handleComplte8 = cateVal => {
    if (
      this.state.cate1 == true ||
      this.state.cate2 == true ||
      this.state.cate3 == true ||
      this.state.cate4 == true ||
      this.state.cate5 == true ||
      this.state.cate6 == true ||
      this.state.cate7 == true ||
      // this.state.cate8 == true ||
      this.state.cate9 == true ||
      cateVal == true
    ) {
      this.setState({
        complete: true,
      });
    } else {
      this.setState({
        complete: false,
      });
    }
  };
  handleComplte9 = cateVal => {
    if (
      this.state.cate1 == true ||
      this.state.cate2 == true ||
      this.state.cate3 == true ||
      this.state.cate4 == true ||
      this.state.cate5 == true ||
      this.state.cate6 == true ||
      this.state.cate7 == true ||
      this.state.cate8 == true ||
      // this.state.cate9 == true ||
      cateVal == true
    ) {
      this.setState({
        complete: true,
      });
    } else {
      this.setState({
        complete: false,
      });
    }
  };
  submitForm = () => {
    if (this.state.complete == false) {
      return false;
    }

    const interestCategory = [];
    if (this.state.cate1) {
      interestCategory.push(0);
    }
    if (this.state.cate2) {
      interestCategory.push(1);
    }
    if (this.state.cate3) {
      interestCategory.push(2);
    }
    if (this.state.cate4) {
      interestCategory.push(3);
    }
    if (this.state.cate5) {
      interestCategory.push(4);
    }
    if (this.state.cate6) {
      interestCategory.push(5);
    }
    if (this.state.cate7) {
      interestCategory.push(6);
    }
    if (this.state.cate8) {
      interestCategory.push(7);
    }
    if (this.state.cate9) {
      interestCategory.push(8);
    }

    const self = this;
    if (this.state.loading === false) {
      self.setState({ loading: true });
      const requestURL = `${process.env.API_URL}/user`;
      const accessToken = localStorage.getItem('accessToken');
      const token = `Bearer ${accessToken}`;
      if (accessToken) {
        axios({
          method: 'PUT',
          url: requestURL,
          headers: {
            Accept: 'application/json;charset=UTF-8',
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            Authorization: token,
          },
          data: {
            interestCategory: interestCategory.toString(),
          },
        })
          .then(resp => {
            self.setState({ loading: false });
            this.props.handleClose();
            // }
          })
          .catch(error => {
            self.setState({ loading: false });
          });
      }
    }
  };
  componentDidMount = () => {
    const self = this;
    if (this.state.loading === false) {
      self.setState({ loading: true });
      const requestURL = `${process.env.API_URL}/user/detailInfo`;
      const accessToken = localStorage.getItem('accessToken');
      const token = `Bearer ${accessToken}`;
      if (accessToken) {
        axios({
          method: 'GET',
          url: requestURL,
          headers: {
            Accept: 'application/json;charset=UTF-8',
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            Authorization: token,
          },
        })
          .then(resp => {
            // console.log(resp.data);

            if (Boolean(resp.data.interestCategory)) {
              const childsArry = resp.data.interestCategory.split(',');
              // console.log(childsArry);
              if (childsArry.includes('0')) {
                self.setState({
                  cate1: true,
                });
              }
              if (childsArry.includes('1')) {
                self.setState({
                  cate2: true,
                });
              }
              if (childsArry.includes('2')) {
                self.setState({
                  cate3: true,
                });
              }
              if (childsArry.includes('3')) {
                self.setState({
                  cate4: true,
                });
              }
              if (childsArry.includes('4')) {
                self.setState({
                  cate5: true,
                });
              }
              if (childsArry.includes('5')) {
                self.setState({
                  cate6: true,
                });
              }
              if (childsArry.includes('6')) {
                self.setState({
                  cate7: true,
                });
              }
              if (childsArry.includes('7')) {
                self.setState({
                  cate8: true,
                });
              }
              if (childsArry.includes('8')) {
                self.setState({
                  cate9: true,
                });
              }
            }

            self.setState({
              loading: false,
            });
            // this.props.handleClose();
            // }
          })
          .catch(error => {
            self.setState({ loading: false });
          });
      }
    }
  };
  render() {
    const { classes, handleClose } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="relative">
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="title"
              color="inherit"
              className={classes.title}
            >
              관심분야
            </Typography>
            <IconButton
              color="inherit"
              onClick={handleClose}
              aria-label="Close"
              className={classes.close}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.procbarWrap}>
          <div className={classes.textTop}>관심분야</div>
          <div className={classes.textMid}>
            동일한 관심분야를 가진 사람들의 다양한 경험을
          </div>
          <div
            className={classes.textMid}
            style={{
              marginBottom: 46,
            }}
          >
            추천받을 수 있습니다. (중복선택 가능)
          </div>

          <div className={classes.buttons}>
            <div
              className={classNames(
                classes.buttonWrapPet,
                classes.buttonWrapLeft,
              )}
            >
              <CategotyDiv
                handleToggle={this.handleCate1Toggle}
                active={this.state.cate1}
                iconText="뷰티"
                iconImg={<BeautyIcon active={this.state.cate1} />}
              />
            </div>
            <div
              className={classNames(
                classes.buttonWrapPet,
                classes.buttonWrapCenter,
              )}
            >
              <CategotyDiv
                handleToggle={this.handleCate2Toggle}
                active={this.state.cate2}
                iconText="라이프"
                iconImg={<LifeIcon active={this.state.cate2} />}
              />
            </div>
            <div
              className={classNames(
                classes.buttonWrapPet,
                classes.buttonWrapRight,
              )}
            >
              <CategotyDiv
                handleToggle={this.handleCate3Toggle}
                active={this.state.cate3}
                iconText="푸드"
                iconImg={<FoodIcon active={this.state.cate3} />}
              />
            </div>
          </div>
          <div className={classes.buttons}>
            <div
              className={classNames(
                classes.buttonWrapPet,
                classes.buttonWrapLeft,
              )}
            >
              <CategotyDiv
                handleToggle={this.handleCate4Toggle}
                active={this.state.cate4}
                iconText="패션"
                iconImg={<FashionIcon active={this.state.cate4} />}
              />
            </div>
            <div
              className={classNames(
                classes.buttonWrapPet,
                classes.buttonWrapCenter,
              )}
            >
              <CategotyDiv
                handleToggle={this.handleCate5Toggle}
                active={this.state.cate5}
                iconText="유아"
                iconImg={<BabyIcon active={this.state.cate5} />}
              />
            </div>
            <div
              className={classNames(
                classes.buttonWrapPet,
                classes.buttonWrapRight,
              )}
            >
              <CategotyDiv
                handleToggle={this.handleCate6Toggle}
                active={this.state.cate6}
                iconText="취미"
                iconImg={<HobbyIcon active={this.state.cate6} />}
              />
            </div>
          </div>
          <div className={classes.buttons}>
            <div
              className={classNames(
                classes.buttonWrapPet,
                classes.buttonWrapLeft,
              )}
            >
              <CategotyDiv
                handleToggle={this.handleCate7Toggle}
                active={this.state.cate7}
                iconText="맛집"
                iconImg={<RestorantIcon active={this.state.cate7} />}
              />
            </div>
            <div
              className={classNames(
                classes.buttonWrapPet,
                classes.buttonWrapCenter,
              )}
            >
              <CategotyDiv
                handleToggle={this.handleCate8Toggle}
                active={this.state.cate8}
                iconText="펫"
                iconImg={<PetIcon active={this.state.cate8} />}
              />
            </div>
            <div
              className={classNames(
                classes.buttonWrapPet,
                classes.buttonWrapRight,
              )}
            >
              <CategotyDiv
                handleToggle={this.handleCate9Toggle}
                active={this.state.cate9}
                iconText="그 외"
                iconImg={<EtcIcon active={this.state.cate9} />}
              />
            </div>
          </div>
        </div>

        <div className={classes.buttonDiv}>
          <BlueButton
            btnName={'완료'}
            onClickFunc={this.submitForm}
            complete={this.state.complete}
            btnType="button"
          />
        </div>
      </div>
    );
  }
}

ProfileInterest.propTypes = {};

// export default ProfileInterest;
export default withStyles(styles)(ProfileInterest);
