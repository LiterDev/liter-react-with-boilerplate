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
    name: '리빙',
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
    name: '유아/아동',
  },
  {
    cateIndex: 5,
    selImg: hobbySel,

    active: 0,
    name: '여가',
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

function resizeImage(settings) {
  var file = settings.file;
  var maxSize = settings.maxSize;
  var reader = new FileReader();
  var image = new Image();
  var canvas = document.createElement('canvas');
  var dataURItoBlob = function(dataURI) {
    var bytes =
      dataURI.split(',')[0].indexOf('base64') >= 0
        ? atob(dataURI.split(',')[1])
        : unescape(dataURI.split(',')[1]);
    var mime = dataURI
      .split(',')[0]
      .split(':')[1]
      .split(';')[0];
    var max = bytes.length;
    var ia = new Uint8Array(max);
    for (var i = 0; i < max; i++) ia[i] = bytes.charCodeAt(i);
    return new Blob([ia], { type: mime });
  };
  function resize() {
    var width = image.width;
    var height = image.height;
    if (width > height) {
      if (width > maxSize) {
        height *= maxSize / width;
        width = maxSize;
      }
    } else {
      if (height > maxSize) {
        width *= maxSize / height;
        height = maxSize;
      }
    }
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(image, 0, 0, width, height);
    var dataUrl = canvas.toDataURL('image/jpeg');
    return dataURItoBlob(dataUrl);
  }
  return new Promise(function(ok, no) {
    if (!file.type.match(/image.*/)) {
      no(new Error('Not an image'));
      return;
    }
    reader.onload = function(readerEvent) {
      image.onload = function() {
        return ok(resize());
      };
      image.src = readerEvent.target.result;
    };
    reader.readAsDataURL(file);
  });
}
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
    const movItem = this.state.imageComponent.filter(
      media => media.mediaType === 'mov',
    );
    const imageItem = this.state.imageComponent.filter(
      media => media.mediaType === 'image',
    );

    // Validation 1.Title
    if (!data.get('title').trim()) {
      this.setState({ validationContent: '제목이 없습니다.' });
      this.handleAlertOpen();
      return false;
    }
    if (data.get('title').length > 49) {
      this.setState({ validationContent: '제목은 50자이내로 입력해주세요' });
      this.handleAlertOpen();
      return false;
    }
    // Validation 2.Category
    if (data.get('category') === 'false') {
      this.setState({ validationContent: '카테고리가 선택되지 않았습니다' });
      this.handleAlertOpen();
      return false;
    }
    // Validation 3.Media Check
    if (movItem.length < 1 && imageItem.length < 3) {
      this.setState({
        validationContent:
          '사진은 3개 이상 또는 동영상 1개가 반드시 추가되어야 합니다.',
      });
      this.handleAlertOpen();
      return false;
    }
    // Validation 4~6.Purchase Category && Review Content
    switch (this.state.value) {
      case 0:
        // TabOnline
        console.log('TabOnline');
        if (!Boolean(data.get('productName').trim())) {
          this.setState({ validationContent: '상품명을 입력해 주세요.' });
          this.handleAlertOpen();
          return false;
        }
        if (!Boolean(data.get('buyLink').trim())) {
          this.setState({ validationContent: '구매처를 입력해 주세요' });
          this.handleAlertOpen();
          return false;
        }
        if (!Boolean(data.get('content').trim())) {
          this.setState({ validationContent: '리뷰를 작성해 주세요' });
          this.handleAlertOpen();
          return false;
        }
        break;
      case 1:
        // TabOffline
        console.log('TabOffline');
        if (!Boolean(data.get('productName').trim())) {
          this.setState({ validationContent: '상품명을 입력해 주세요.' });
          this.handleAlertOpen();
          return false;
        }
        console.log(data.get('storeLat'));
        if (!Boolean(data.get('storeLat')) || !Boolean(data.get('storeLng'))) {
          this.setState({
            validationContent: '방문한 곳의 주소를 입력해주세요',
          });
          this.handleAlertOpen();
          return false;
        }
        if (!Boolean(data.get('content').trim())) {
          this.setState({ validationContent: '리뷰를 작성해 주세요' });
          this.handleAlertOpen();
          return false;
        }
        break;
      case 2:
        // TabEtc
        console.log('TabEtc');
        if (!Boolean(data.get('productName').trim())) {
          this.setState({ validationContent: '상품명을 입력해 주세요.' });
          this.handleAlertOpen();
          return false;
        }
        if (!Boolean(data.get('buyLink').trim())) {
          this.setState({ validationContent: '구매 정보를 입력해주세요' });
          this.handleAlertOpen();
          return false;
        }
        if (!Boolean(data.get('content').trim())) {
          this.setState({ validationContent: '리뷰를 작성해 주세요' });
          this.handleAlertOpen();
          return false;
        }
        break;
      default:
        console.log('default');
    }

    if (data.get('content').trim().length < 50) {
      this.setState({ validationContent: '리뷰를 50자이상 작성해 주세요' });
      this.handleAlertOpen();
      return false;
    }
    // Validation 7 tags check
    if (data.get('tags').length <= 0) {
      this.setState({ validationContent: '최소 1개이상의 태그를 넣어주세요.' });
      this.handleAlertOpen();
      return false;
    }

    let tSurveyIdByCate;
    switch (this.state.selectedValue) {
      case 0:
        tSurveyIdByCate = [1, 2, 3];
        break;
      case 1:
        tSurveyIdByCate = [11, 12, 13];
        break;
      case 2:
        tSurveyIdByCate = [21, 22, 23];
        break;
      case 3:
        tSurveyIdByCate = [31, 32, 33];
        break;
      case 4:
        tSurveyIdByCate = [41, 42, 43];
        break;
      case 5:
        tSurveyIdByCate = [51, 52, 53];
        break;
      case 6:
        tSurveyIdByCate = [61, 62, 63];
        break;
      case 7:
        tSurveyIdByCate = [71, 72, 73];
        break;
      default:
        tSurveyIdByCate = [];
    }

    let nullCountCate = 0;
    let valContentCate = null;
    // console.log(tSurveyIdByCate);
    // console.log(this.state.selectedValue);
    for (let i = 0; i < tSurveyIdByCate.length; i += 1) {
      console.log(data.get(`startRating[${tSurveyIdByCate[i]}].rating`));
      if (data.get(`startRating[${tSurveyIdByCate[i]}].rating`) < 1) {
        nullCountCate += 1;
        // console.log(data.get(`startRating[${tSurveyIdByCate[i]}].rating`));
        valContentCate = data.get(
          `startRating[${tSurveyIdByCate[i]}].rateTitle`,
        );
        break;
      }
    }

    console.log(nullCountCate);
    if (nullCountCate > 0) {
      this.setState({
        validationContent: `${valContentCate} 평점을 입력해주세요`,
      });
      this.handleAlertOpen();
      return false;
    }

    // Validation 8 평점 Check
    let tSurveyId;
    switch (this.state.value) {
      case 0:
        // Survey id: 1, 2, 3, 4, 5, 6
        tSurveyId = [91, 92, 93];
        break;
      case 1:
        // Survey id: 7, 8, 9, 10, 11, 12, 13
        tSurveyId = [81, 82, 83];

        break;
      case 2:
        // Survey id: 7, 8, 9, 10, 11, 12, 13
        tSurveyId = [101, 102, 103];
        break;
      default:
        tSurveyId = [];
    }

    let nullCount = 0;
    let valContent = null;
    for (let i = 0; i < tSurveyId.length; i += 1) {
      console.log(data.get(`startRating[${tSurveyId[i]}].rating`));
      if (data.get(`startRating[${tSurveyId[i]}].rating`) < 1) {
        nullCount += 1;
        // console.log(data.get(`startRating[${tSurveyId[i]}].rating`));
        valContent = data.get(`startRating[${tSurveyId[i]}].rateTitle`);
        // this.setState({ validationContent: valContent });
        // this.handleAlertOpen();
        break;
      }
    }

    if (nullCount > 0) {
      this.setState({ validationContent: `${valContent} 평점을 입력해주세요` });
      this.handleAlertOpen();
      return false;
    }

    if (this.state.imageComponent.length > 0) {
      for (let i = 0; i < this.state.imageComponent.length; i += 1) {
        // data.append(`media[${i}]`, this.state.imageComponent[i].file);
        // formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)

        data.append(`media`, this.state.imageComponent[i].file);
      }
    }
    // alert('on');
    // console.log('====on');
    this.props.onSubmitForm(data);
  }

  handleAlertOpen = () => {
    this.setState({ validationAlert: true });
  };

  handleAlertClose = () => {
    this.setState({ validationAlert: false });
  };

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
    const { classes, reviews, surveys } = this.props;
    if (reviews) {
      console.log(reviews);
      let store = 0;
      if (reviews.store === 'ONLINE') {
        store = 0;
      } else if (reviews.store === 'OFFLINE') {
        store = 1;
      } else {
        store = 2;
      }
      const mediaCollection = reviews.mediaCollection;
      if (mediaCollection) {
        // if (){
        // }
      }
      this.setState({
        value: store,
        selectedValue: reviews.categoryId,
      });

      // this.handleClose(reviews.)
    }
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
                  value={reviews.title}
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
              <ReviewFormTabOnline category={this.state.selectedValue} />
            </TabContainer>
          )}
          {this.state.value === 1 && (
            <TabContainer>
              <TabContainer>
                <ReviewFormTabOffline category={this.state.selectedValue} />
              </TabContainer>
            </TabContainer>
          )}
          {this.state.value === 2 && (
            <TabContainer>
              <TabContainer>
                <ReviewFormTabEtc category={this.state.selectedValue} />
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
  reviews: PropTypes.any,
  surveys: PropTypes.any,
};

export default withStyles(styles)(ReviewWrite);
