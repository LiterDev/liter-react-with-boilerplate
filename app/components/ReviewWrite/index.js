/**
 *
 * ReviewWrite
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import styled from 'styled-components';
import ImagePreviewButtonWithoutSlider from 'components/ImagePreviewButtonWithoutSlider';
import MoviePreviewButton from 'components/MoviePreviewButton';
import ReviewCategory from 'components/ReviewCategory';
import TabLabel from 'components/TabLabel';
import TabContainer from 'components/TabContainer';
import ReviewFormTabOnline from 'components/ReviewFormTabOnline';
import ReviewFormTabOffline from 'components/ReviewFormTabOffline';
import ReviewFormTabEtc from 'components/ReviewFormTabEtc';
import BlueButton from 'components/BlueButton';

import Input from '@material-ui/core/Input';
import Divider from '@material-ui/core/Divider';

import UploadSlider from 'components/UploadSlider';
import FormControl from '@material-ui/core/FormControl';
import blue from '@material-ui/core/colors/blue';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';
// import PhoneIcon from '@material-ui/icons/Phone';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
// const emails = ['username@gmail.com', 'user02@gmail.com'];

import BueatySel from '../../images/ic-beauty-14@3x.png';

import LifeSel from '../../images/ic-life-14@3x.png';

import FoodSel from '../../images/ic-food-17@3x.png';

import FashionSel from '../../images/ic-fashion-17@3x.png';

import BabySel from '../../images/ic-baby-17@3x.png';

import hobbySel from '../../images/ic-hobby-17@3x.png';

import RestorantSel from '../../images/ic-restorant-17@3x.png';

import PetSel from '../../images/ic-pet-17@3x.png';

import EtcSel from '../../images/ic-etc-17@3x.png';

const styles = theme => ({
  rowdiv: {
    width: '100%',
    marginTop: 12,
    backgroundColor: '#ffffff',
    // colors: '#ffffff',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  rowdivSec: {
    width: '100%',
    marginTop: 12,
    backgroundColor: '#ffffff',
    // colors: '#ffffff',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
  container: {
    paddingTop: theme.spacing.unit * 0,
    display: 'flex',
    flexWrap: 'wrap',
  },

  cssLabel: {
    '&$cssFocused': {
      color: blue[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: blue[500],
    },
  },
  inputTop: {
    width: '100%',
    heght: 26,
    // minWidth: '100%',
    // maxWidth: '100%',
  },
  formControl: {
    width: '100%',
  },
  cateWrap: {
    paddingTop: 16,
    textAlign: 'left',
    color: '#1591ff',
    fontSize: 16,
    // display: 'table',
  },
  buyWrap: {
    // paddingTop: 16,
    textAlign: 'left',
    color: '#333333',
    fontSize: 16,
    // display: 'table',
  },
  icon: {
    color: '#1591ff',
    lineHeight: 0,
    fontSize: 14,
    // width:
  },
  buttonCate: {
    backgroundColor: '#ffffff',
  },
  cateText: {
    fontSize: 18,
    height: 20,
    verticalAlign: 'middle',
    // lineHeight: 0,
  },
  iconBtn: {
    width: 24,
    height: 24,
    marginRight: 16,
    // margin: '0 auto',
    // display: 'block',
    // display: 'table-cell',
    verticalAlign: 'middle',
    // lineHeight: 1,
  },
  imageBtn: {
    float: 'left',
  },
  movieBtn: {
    // display: 'block',
    // float: 'right',
  },
  uploadSlider: {
    paddingTop: 10,
  },
  previewimg: {
    flex: 1,
    width: '100%',
  },
  iconShopping: {
    color: '#7c7c7c',
    lineHeight: 0,
    fontSize: 14,
  },
  dvideSec: {
    marginTop: 16,
  },
  tabRoot: {
    minHeight: 60,
    maxWidth: 264,
    // width: 120,
  },
  tabIcon: {
    flaot: 'left',
  },
  tabBar: {
    textAlign: 'left',
    marginTop: 20,
  },
  whereText: {
    color: '#7c7c7c',
    fontSize: 14,
  },
  tabPaper: {
    heght: 20,
  },
  selAvatar: {
    width: 24,
    height: 24,
    backgroundColor: '#1591ff',
    border: 'solid 1px #1591ff',
    float: 'left',
    marginRight: 16,
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },
  imgAvatar: {
    width: 14,
    height: 14,
  },
  selectBtn: {
    float: 'right',
  },
  selectBtnRoot: {
    paddingTop: 0,
    paddingBottom: 10,
  },
  cateModiText: {
    fontSize: 16,
    color: '#999999',
  },
  submitBtnWrap: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
});
const cateList = [
  {
    cateIndex: 0,
    selImg: BueatySel,

    active: 0,
    name: '뷰티',
  },
  {
    cateIndex: 1,
    selImg: LifeSel,

    active: 0,
    name: '라이프',
  },
  {
    cateIndex: 2,
    selImg: FoodSel,

    active: 0,
    name: '푸드',
  },
  {
    cateIndex: 3,
    selImg: FashionSel,

    active: 0,
    name: '패션',
  },
  {
    cateIndex: 4,
    selImg: BabySel,

    active: 0,
    name: '유아',
  },
  {
    cateIndex: 5,
    selImg: hobbySel,

    active: 0,
    name: '취미',
  },
  {
    cateIndex: 6,
    selImg: RestorantSel,

    active: 0,
    name: '맛집',
  },
  {
    cateIndex: 7,
    selImg: PetSel,

    active: 0,
    name: '펫',
  },
  {
    cateIndex: 8,
    selImg: EtcSel,

    active: 0,
    name: '그 외',
  },
];
/* eslint-disable react/prefer-stateless-function */
class ReviewWrite extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      files: new FormData(),
      // filesArray: [],
      imageCount: 0,
      imageComponent: [],
      open: false,
      selectedValue: false,
      value: 0,
      // storeValue: 'ONLINE',
      complete: false,
    };
    this.handleImageAppend = this.handleImageAppend.bind(this);
    this.handleImageRemove = this.handleImageRemove.bind(this);
    this.onSubmitFormInit = this.onSubmitFormInit.bind(this);
  }

  handleImageAppend = fileList => {
    if (fileList) {
      if (fileList.length > 0) {
        const imageComponentTmp = [];
        // const filesArrayTmp = [];
        for (let i = 0; i < fileList.length; i += 1) {
          this.state.files.append(
            `imgnames[${this.state.imageCount}]`,
            fileList[i],
          );

          imageComponentTmp.push({
            id: this.state.imageCount,
            name: `imgnames[${this.state.imageCount}]`,
            src: URL.createObjectURL(fileList[i]),
            alt: fileList[i].name,
            file: fileList[i],
          });

          this.state.imageCount += 1;
        }
        this.setState({
          imageComponent: this.state.imageComponent.concat(imageComponentTmp),
        });
      }
    }

    // this.state.imageCount += 1;

    // console.log(this.state.imageComponent.length);
    // console.log(Array.from(this.state.files.entries()).length);
  };
  handleImageRemove = name => {
    const findRemoveIndex = [];
    if (this.state.imageComponent.length > 0) {
      for (let i = 0; i < this.state.imageComponent.length; i += 1) {
        if (name === this.state.imageComponent[i].name) {
          findRemoveIndex.push(i);
        }
      }
    }
    const copy = [...this.state.imageComponent];
    // console.log(copy);
    if (findRemoveIndex.length > 0) {
      for (let i = 0; i < findRemoveIndex.length; i += 1) {
        // this.state.imageComponent.splice(findRemoveIndex[i], 1);
        copy.splice(findRemoveIndex[i], 1);
      }
    }
    this.setState({
      imageComponent: copy,
    });
    this.state.files.delete(name);
    // console.log(Array.from(this.state.files.entries()).length);
  };
  onSubmitFormInit(event) {
    event.preventDefault();

    // console.log(event.target);
    // console.log(this.state.files);
    const data = new FormData(event.target);

    // const form = event.currentTarget;
    // console.log('tags');
    // console.log(data.get('tags'));
    // console.log(data.get('startRating[]'));

    if (this.state.imageComponent.length > 0) {
      for (let i = 0; i < this.state.imageComponent.length; i += 1) {
        // data.append(`media[${i}]`, this.state.imageComponent[i].file);
        data.append(`media`, this.state.imageComponent[i].file);
      }
    }
    // alert('on');
    // console.log('====on');
    this.props.onSubmitForm(data);
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  // 카테고리팝업 핸들러
  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  handleChange = (event, value) => {
    // let storeVal = 'SHOP';
    // if (value === 1) {
    //   storeVal = 'PRODUCT';
    // } else if (value === 2) {
    //   storeVal = 'ETC';
    // }
    this.setState({
      value,
      // storeValue: storeVal,
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmitFormInit}>
          <div className={classes.rowdiv}>
            <div>
              <FormControl className={classes.formControl}>
                {/* <InputLabel
              FormLabelClasses={{
                root: classes.cssLabel,
                focused: classes.cssFocused,
              }}
              htmlFor="custom-css-input"
            >
              Custom CSS
            </InputLabel> */}
                <Input
                  classes={{
                    underline: classes.cssUnderline,
                  }}
                  id="custom-css-input"
                  className={classes.inputTop}
                  multiline
                  placeholder="제목"
                  name="title"
                />
              </FormControl>
            </div>
            {this.state.selectedValue === false ? (
              <div className={classes.cateWrap}>
                <IconButton
                  color="primary"
                  // className={classes.buttonCate}
                  aria-label="Add to shopping cart"
                  onClick={this.handleClickOpen}
                  // className={classNames(classes.root)}
                  classes={{
                    root: classes.iconBtn,
                    // disabled: 'disabled',
                  }}
                >
                  <Icon className={classes.icon} color="secondary">
                    add_circle
                  </Icon>
                </IconButton>

                <span className={classes.cateText}>
                  카테고리를 선택해주세요.
                </span>
              </div>
            ) : (
              <div className={classes.cateWrap}>
                <Avatar
                  // alt={cateList[this.state.selectedValue].name}
                  // src={cateList[this.state.selectedValue].selImg}
                  className={classes.selAvatar}
                  // onClick={() => this.cateSelect(cate)}
                  // imgProps={{ category: 0 }}
                >
                  <img
                    src={cateList[this.state.selectedValue].selImg}
                    alt={cateList[this.state.selectedValue].name}
                    className={classes.imgAvatar}
                  />
                </Avatar>
                <span className={classes.cateText}>
                  {cateList[this.state.selectedValue].name}
                </span>

                {/* <div className={classes.selectBtn}> */}
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.selectBtn}
                  classes={{
                    root: classes.selectBtnRoot,
                  }}
                  onClick={this.handleClickOpen}
                >
                  <span className={classes.cateModiText}>수정</span>
                  <Icon className={classes.rightIcon}>chevron_right</Icon>
                </Button>
                {/* </div> */}
              </div>
            )}
          </div>
          <div className={classes.rowdivSec}>
            <div className={classes.imageBtn}>
              <ImagePreviewButtonWithoutSlider
                handleImageAppend={this.handleImageAppend}
              />
            </div>
            <div className={classes.movieBtn}>
              <MoviePreviewButton handleImageAppend={this.handleImageAppend} />
            </div>
            <Divider className={classes.propsdivader} />
            <div className={classes.uploadSlider}>
              <UploadSlider
                imageComponent={this.state.imageComponent}
                handleImageRemove={this.handleImageRemove}
              />
            </div>
          </div>
          <div className={classes.rowdiv}>
            <div className={classes.buyWrap}>
              <IconButton
                color="primary"
                aria-label="Add to shopping cart"
                onClick={this.handleClickOpen}
                classes={{
                  root: classes.iconBtn,
                }}
              >
                <Icon className={classes.iconShopping}>shopping_basket</Icon>
              </IconButton>
              <span className={classes.cateText}>구매정보를 입력해주세요.</span>
            </div>
            <Divider className={classes.dvideSec} />
            {/* check_circle */}
            <div className={classes.tabBar}>
              <span className={classes.whereText}>어디서 구매하셨나요?</span>
              <Paper className={classes.tabPaper}>
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="secondary"
                  centered
                >
                  <Tab
                    label={<TabLabel>인터넷구매</TabLabel>}
                    classes={{
                      root: classes.tabRoot,
                      labelIcon: classes.tabIcon,
                    }}
                  />
                  <Tab
                    label={<TabLabel>매장방문</TabLabel>}
                    classes={{
                      root: classes.tabRoot,
                      labelIcon: classes.tabIcon,
                    }}
                  />
                  <Tab
                    label={<TabLabel>기타</TabLabel>}
                    classes={{
                      root: classes.tabRoot,
                      labelIcon: classes.tabIcon,
                    }}
                  />
                </Tabs>
              </Paper>
            </div>
          </div>
          {this.state.value === 0 && (
            <TabContainer>
              <ReviewFormTabOnline />
            </TabContainer>
          )}
          {this.state.value === 1 && (
            <TabContainer>
              <TabContainer>
                <ReviewFormTabOffline />
              </TabContainer>
            </TabContainer>
          )}
          {this.state.value === 2 && (
            <TabContainer>
              <TabContainer>
                <ReviewFormTabEtc />
              </TabContainer>
            </TabContainer>
          )}

          {/* <Button
            variant="contained"
            component="button"
            className={classes.button}
            // onClick={this.onSubmitFormInit}
            type="submit"
          >
            작성 완료
          </Button> */}
          <input
            type="hidden"
            name="category"
            value={this.state.selectedValue}
          />
          <div className={classes.submitBtnWrap}>
            <BlueButton
              btnType="submit"
              // onClickFunc={this.onSubmitFormInit}
              complete={this.state.complete}
              btnName="작성 완료"
            />
          </div>
          {/* <input type="hidden" name="store" value={this.state.storeValue} /> */}
        </form>
        <div>
          <ReviewCategory open={this.state.open} onClose={this.handleClose} />
        </div>
      </div>
    );
  }
}

ReviewWrite.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default withStyles(styles)(ReviewWrite);
