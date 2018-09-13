/**
 *
 * ProfileLife
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
    marginTop: 35,
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
});
/* eslint-disable react/prefer-stateless-function */
class ProfileLife extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      singleLife: false,
      notSingleLife: false,
      pet1: false,
      pet2: false,
      pet3: false,
      skin1: false,
      skin2: false,
      skin3: false,
      skin4: false,
      complete: false,
      loading: false,
    };

    this.handleClose = this.handleClose.bind(this);
  }
  handleClose = () => {
    this.props.handleClose();
  };
  handleSingleLifeToggle = () => {
    const singleValue = !this.state.singleLife;
    this.setState({
      singleLife: singleValue,
      notSingleLife: false,
    });
    this.handleComplete(singleValue);
  };
  handleNotSingleLifeToggle = () => {
    const singleValue = !this.state.notSingleLife;
    this.setState({
      singleLife: false,
      notSingleLife: singleValue,
    });
    this.handleComplete(singleValue);
  };
  handlePet1Toggle = () => {
    this.setState({
      pet1: !this.state.pet1,
    });
    this.handleCompleteWithPet();
  };
  handlePet2Toggle = () => {
    this.setState({
      pet2: !this.state.pet2,
    });
    this.handleCompleteWithPet();
  };
  handlePet3Toggle = () => {
    this.setState({
      pet3: !this.state.pet3,
    });
    this.handleCompleteWithPet();
  };

  handleSkin1Toggle = () => {
    const skinValue = !this.state.skin1;
    this.setState({
      skin1: skinValue,
      skin2: false,
      skin3: false,
      skin4: false,
    });
    this.handleCompleteWithSkin(skinValue);
  };

  handleSkin2Toggle = () => {
    const skinValue = !this.state.skin2;
    this.setState({
      skin1: false,
      skin2: skinValue,
      skin3: false,
      skin4: false,
    });
    this.handleCompleteWithSkin(skinValue);
  };
  handleSkin3Toggle = () => {
    const skinValue = !this.state.skin3;
    this.setState({
      skin1: false,
      skin2: false,
      skin3: skinValue,
      skin4: false,
    });
    this.handleCompleteWithSkin(skinValue);
  };
  handleSkin4Toggle = () => {
    const skinValue = !this.state.skin4;
    this.setState({
      skin1: false,
      skin2: false,
      skin3: false,
      skin4: skinValue,
    });
    this.handleCompleteWithSkin(skinValue);
  };

  handleCompleteWithPet = () => {
    let single = false;
    let skin = false;
    if (this.state.singleLife == true || this.state.notSingleLife == true) {
      single = true;
    }

    if (
      this.state.skin1 == true ||
      this.state.skin2 == true ||
      this.state.skin3 == true ||
      this.state.skin4 == true
    ) {
      skin = true;
    }

    if (single == true && skin == true) {
      this.setState({
        complete: true,
      });
    } else {
      this.setState({
        complete: false,
      });
    }
  };

  handleCompleteWithSkin = skinValue => {
    let single = false;
    let skin = false;
    if (this.state.singleLife == true || this.state.notSingleLife == true) {
      single = true;
    }

    if (skinValue == true) {
      skin = true;
    }

    if (single == true && skin == true) {
      this.setState({
        complete: true,
      });
    } else {
      this.setState({
        complete: false,
      });
    }
  };
  handleComplete = singleValue => {
    let single = false;
    let skin = false;
    if (singleValue == true) {
      single = true;
    }
    if (
      this.state.skin1 == true ||
      this.state.skin2 == true ||
      this.state.skin3 == true ||
      this.state.skin4 == true
    ) {
      skin = true;
    }

    if (single == true && skin == true) {
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

    let single = -1;
    if (this.state.singleLife == true) {
      single = 0;
    }
    if (this.state.notSingleLife == true) {
      single = 1;
    }
    const pets = [];
    let hasPet = false;
    if (this.state.pet1) {
      pets.push(1);
    }
    if (this.state.pet2) {
      pets.push(2);
    }
    if (this.state.pet3) {
      pets.push(3);
    }
    if (pets.length > 0) {
      hasPet = true;
    }
    let skinType = -1;
    if (this.state.skin1 == true) {
      skinType = 0;
    }
    if (this.state.skin2 == true) {
      skinType = 1;
    }
    if (this.state.skin3 == true) {
      skinType = 2;
    }
    if (this.state.skin4 == true) {
      skinType = 3;
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
            singleLife: single,
            pets: pets.toString(),
            hasPets: hasPet,
            skinType: skinType,
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
            console.log(resp.data);
            if (resp.data.singleLife === 0) {
              self.setState({
                singleLife: true,
              });
            }
            if (resp.data.singleLife === 1) {
              self.setState({
                notSingleLife: true,
              });
            }
            if (Boolean(resp.data.pets) && resp.data.pets !== 'NONE') {
              const childsArry = resp.data.hasChilds.split(',');
              // console.log(childsArry);
              if (childsArry.includes('1')) {
                self.setState({
                  pet1: true,
                });
              }
              if (childsArry.includes('2')) {
                self.setState({
                  pet2: true,
                });
              }
              if (childsArry.includes('3')) {
                self.setState({
                  pet3: true,
                });
              }
            }
            if (resp.data.skinType === 0) {
              self.setState({
                skin1: true,
              });
            }
            if (resp.data.skinType === 1) {
              self.setState({
                skin2: true,
              });
            }
            if (resp.data.skinType === 2) {
              self.setState({
                skin3: true,
              });
            }
            if (resp.data.skinType === 3) {
              self.setState({
                skin4: true,
              });
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
              라이프 스타일
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
          <div className={classes.textTop}>라이프 스타일</div>
          <div className={classes.textMid}>
            제각각 다른 독특한 라이프 스타일.
          </div>
          <div className={classes.textMid}>
            하지만, 나와 같은 스타일의 사람들은 어떤 제픔으로
          </div>
          <div className={classes.textMid}>
            어떤 재미있는 경험을 느꼈을까요?
          </div>

          <Divider className={classes.divider} />
          <div className={classes.textTop}>1인 가구 여부</div>
          <div
            className={classes.textMid}
            style={{
              paddingLeft: 32,
              paddingRight: 32,
            }}
          >
            1인 가구에 특화된 상품, 서비스에 대해 공유받으실 수 있습니다.
          </div>

          <div className={classes.buttons}>
            <div
              className={classNames(classes.buttonWrap, classes.buttonWrapLeft)}
            >
              <ProfileBotton
                handleToggle={this.handleSingleLifeToggle}
                active={this.state.singleLife}
                buttonText="아니오"
              />
            </div>
            <div
              className={classNames(
                classes.buttonWrap,
                classes.buttonWrapRight,
              )}
            >
              <ProfileBotton
                handleToggle={this.handleNotSingleLifeToggle}
                active={this.state.notSingleLife}
                buttonText="예"
              />
            </div>
          </div>
        </div>
        <div className={classes.procbarWrap}>
          <div className={classes.textTop}>반려동물 여부</div>
          <div className={classes.textMid}>반려동물을 키우시나요?</div>
          <div className={classes.textMid}>
            귀여운 냥냥이와 댕댕이를 위한 경험을 만나보세요
          </div>
          <div className={classes.buttons}>
            <div
              className={classNames(
                classes.buttonWrapPet,
                classes.buttonWrapLeft,
              )}
            >
              <ProfileBotton
                handleToggle={this.handlePet1Toggle}
                active={this.state.pet1}
                buttonText="개"
              />
            </div>
            <div
              className={classNames(
                classes.buttonWrapPet,
                classes.buttonWrapCenter,
              )}
            >
              <ProfileBotton
                handleToggle={this.handlePet2Toggle}
                active={this.state.pet2}
                buttonText="고양이"
              />
            </div>
            <div
              className={classNames(
                classes.buttonWrapPet,
                classes.buttonWrapRight,
              )}
            >
              <ProfileBotton
                handleToggle={this.handlePet3Toggle}
                active={this.state.pet3}
                buttonText="기타"
              />
            </div>
            <div
              style={{
                clear: 'both',
              }}
            />
          </div>
        </div>

        <div className={classes.procbarWrap}>
          <div className={classes.textTop}>피부 타입</div>
          <div className={classes.textMid}>피부 타입을 선택해주세요</div>

          <div className={classes.buttons}>
            <div
              className={classNames(classes.buttonWrap, classes.buttonWrapLeft)}
            >
              <ProfileBotton
                handleToggle={this.handleSkin1Toggle}
                active={this.state.skin1}
                buttonText="건성"
              />
            </div>
            <div
              className={classNames(
                classes.buttonWrap,
                classes.buttonWrapRight,
              )}
            >
              <ProfileBotton
                handleToggle={this.handleSkin2Toggle}
                active={this.state.skin2}
                buttonText="지성"
              />
            </div>
          </div>
          <div className={classes.buttonsSec}>
            <div
              className={classNames(classes.buttonWrap, classes.buttonWrapLeft)}
            >
              <ProfileBotton
                handleToggle={this.handleSkin3Toggle}
                active={this.state.skin3}
                buttonText="민감성"
              />
            </div>
            <div
              className={classNames(
                classes.buttonWrap,
                classes.buttonWrapRight,
              )}
            >
              <ProfileBotton
                handleToggle={this.handleSkin4Toggle}
                active={this.state.skin4}
                buttonText="복합성"
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

ProfileLife.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

// export default ProfileLife;
export default withStyles(styles)(ProfileLife);
