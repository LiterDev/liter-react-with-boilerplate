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

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

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
    // lineHeight: 0,
    // fontSize: 14,
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
    width: '100%',
    // float: 'left',
    // width: '40%',
  },
  movieBtn: {
    // width: '40%',
    // float: 'left',
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
    // lineHeight: 0,
    // fontSize: 14,
  },
  dvideSec: {
    marginTop: 16,
  },
  tabRoot: {
    minHeight: 60,
    // maxWidth: 264,
    // width: '33%',
    fontSize: '1.5rem',
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
  snackBar: {
    width: '100%',
    height: '96px',
    backgroundColor: '#fff6f6',
    boxShadow: `0 -1px 7px 0 rgba(0, 0, 0, 0.1)`, 
  },
  snackBarContent: {
    width: '284px',
    height: '96px',
    backgroundColor: '#fff6f6',
    color: '#000000',
  },
  snackBarCover: {
    display: 'flex',
    margin: 'auto',
  },
  snackBarTitle: {
    paddingRight: '10px',
    fontFamily: 'AppleSDGothicNeo',
    fontSize: '16px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    textAlign: 'center',
    color: '#ff5e4d',
  },
  snackBarCaption: {
    fontFamily: 'AppleSDGothicNeo',
    fontSize: '16px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    textAlign: 'center',
    color: '#574949',
  }
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

      //
      validationAlert: false,
      validationContent: false,
    };
    this.handleImageAppend = this.handleImageAppend.bind(this);
    this.handleImageRemove = this.handleImageRemove.bind(this);
    this.onSubmitFormInit = this.onSubmitFormInit.bind(this);
  }

  handleImageAppend = (fileList, type) => {
    // console.log(type);
    if (type === 'mov') {
      // console.log(type);
      let srcStr = '';
      let movKey = '';
      let movType = '';
      const nt = fileList.length;
      if (fileList.includes('youtube') || fileList.includes('youtu.be')) {
        movType = 'YOUTUBE';
        if (fileList.includes('embed')) {
          // TODO
        } else if (fileList.includes('watch')) {
          const n = fileList.lastIndexOf('v');

          movKey = fileList.substring(n + 2, nt);
        } else {
          //
          const n = fileList.lastIndexOf('/');
          movKey = fileList.substring(n + 1, nt);
        }
        srcStr = `http://img.youtube.com/vi/${movKey}/1.jpg`;
      } else if (fileList.includes('vimeo')) {
        console.log(type);
      }
      // console.log(srcStr);
      const imageComponentTmp = [];
      imageComponentTmp.push({
        id: this.state.imageCount,
        name: `imgnames[${this.state.imageCount}]`,
        src: srcStr,
        alt: 'mov',
        mediaType: 'mov',
        file: `${movType}|${movKey}|${fileList}`,
        movieLink: fileList,
      });
      this.state.imageCount += 1;
      this.setState({
        imageComponent: this.state.imageComponent.concat(imageComponentTmp),
      });
    } else {
      if (fileList && type !== 'mov') {
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
              mediaType: 'image',
              file: fileList[i],
            });

            this.state.imageCount += 1;
          }
          this.setState({
            imageComponent: this.state.imageComponent.concat(imageComponentTmp),
          });
        }
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

    /**
      Form Validation Check
      1. Title
      2. Category check
      3. Media Check - Image 3 more | Movie 1 more
      4. Purchase Category a.인터넷구매, b.매장방문, c.기타
      5.  a > 1.상품명, 2.구매처
          b > 1.장소, 2.주소
          c > 1.상품이름, 2.구매정보
      6. 리뷰 Content
      7. Tags
      8. 평점
    */
    const movItem = this.state.imageComponent.filter(media => media.mediaType == 'mov');
    const imageItem = this.state.imageComponent.filter(media => media.mediaType == 'image');

    // Validation 1.Title
    if(!data.get('title')) {
      this.setState({validationContent: '제목이 없습니다.'});
      this.handleAlertOpen();
      return false;
    }
    // Validation 2.Category
    if(data.get('category') == 'false') {
      this.setState({validationContent: '카테고리가 선택되지 않았습니다'});
      this.handleAlertOpen();
      return false;
    }
    // Validation 3.Media Check
    if(movItem.length < 1 && imageItem.length < 3) {
      this.setState({validationContent: '사진은 3개 이상 또는 동영상 1개가 반드시 추가되어야 합니다.'});
      this.handleAlertOpen();
      return false;
    }
    // Validation 4~6.Purchase Category && Review Content
    switch(this.state.value) {
      case 0:
        // TabOnline
        console.log("TabOnline");
        if(data.get('productName') === false) {
          this.setState({validationContent: '상품명을 입력해 주세요.'});
          this.handleAlertOpen();
        }
        if(data.get('buyLink') === false) {
          this.setState({validationContent: '구매처를 입력해 주세요'});
          this.handleAlertOpen();
        }
        if(data.get('content').trim().length <= 0) {
          this.setState({validationContent: '리뷰를 작성해 주세요'});
          this.handleAlertOpen();
        }
      break;
      case 1:
        // TabOffline
        console.log("TabOffline");
        if(data.get('productName') === false) {
          this.setState({validationContent: '상품명을 입력해 주세요.'});
          this.handleAlertOpen();
        }
        console.log(data.get('storeLat'));
        if(data.get('storeLat') == 'false' || data.get('storeLng') == 'false') {
          this.setState({validationContent: '방문한 곳의 주소를 입력해주세요'});
          this.handleAlertOpen();
        }
        if(data.get('content').trim().length <= 0) {
          this.setState({validationContent: '리뷰를 작성해 주세요'});
          this.handleAlertOpen();
        }
      break;
      case 2:
        // TabEtc
        console.log("TabEtc");
        if(data.get('productName') === false) {
          this.setState({validationContent: '상품명을 입력해 주세요.'});
          this.handleAlertOpen();
        }
        if(data.get('ectInfo') === false) {
          this.setState({validationContent: '구매 정보를 입력해주세요'});
          this.handleAlertOpen();
        }
        if(data.get('content').trim().length <= 0) {
          this.setState({validationContent: '리뷰를 작성해 주세요'});
          this.handleAlertOpen();
        }
      break;
    }
    // Validation 7 tags check
    if(data.get('tags').length <= 0) {
      this.setState({validationContent: '최소 1개이상의 태그를 넣어주세요.'});
      this.handleAlertOpen();
    }
    // Validation 8 평점 Check
    let tSurveyId;
    switch(this.state.value) {
      case 0:
        //Survey id: 1, 2, 3, 4, 5, 6
        tSurveyId = [1,2,3,4,5,6];
      break;
      case 1:
        //Survey id: 7, 8, 9, 10, 11, 12, 13
        tSurveyId = [7,8,9,10,11,12,13];
      break;
      case 2:
        //Survey id: 1, 2, 3, 4, 5, 6
        tSurveyId = [1,2,3,4,5,6];
      break;
    }

    tSurveyId.map(idx => {
      if(data.get(`startRating[${idx}].rating`) == 0) {
        console.log(data.get(`startRating[${idx}].rateTitle`));
        const valContent = data.get(`startRating[${idx}].rateTitle`);
        this.setState({validationContent: valContent});
        this.handleAlertOpen();
        return false;
      }
    });

    if (this.state.imageComponent.length > 0) {
      for (let i = 0; i < this.state.imageComponent.length; i += 1) {
        // data.append(`media[${i}]`, this.state.imageComponent[i].file);
        // formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
        data.append(`media`, this.state.imageComponent[i].file);
      }
    }
    // alert('on');
    // console.log('====on');
    // this.props.onSubmitForm(data);
  }

  handleAlertOpen = () => {
    this.setState({'validationAlert': true });
  }

  handleAlertClose = () => {
    this.setState({'validationAlert': false });
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
              <MoviePreviewButton handleImageAppend={this.handleImageAppend} />
            </div>
            {/* <div className={classes.movieBtn}>
              
            </div> */}
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

      {/* ]------- Alert Dialog : start --------- [ */}
      <Snackbar
        className={classes.snackBar}
        open={this.state.validationAlert}
        onClose={this.handleAlertClose}
      >
      <SnackbarContent
        className={classes.snackBarContent}
        message={
           <span className={classes.snackBarCover}>
            <div className={classes.snackBarTitle}>작성오류</div>
            <div className={classes.snackBarCaption}>
              {this.state.validationContent}
            </div>
          </span>
        }
      />
      </Snackbar>
      {/* ]------- Alert Dialog : end --------- [ */}
      </div>
    );
  }
}

ReviewWrite.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default withStyles(styles)(ReviewWrite);
