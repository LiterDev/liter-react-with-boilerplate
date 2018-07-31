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
// import Typography from '@material-ui/core/Typography';
// import PhoneIcon from '@material-ui/icons/Phone';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
// const emails = ['username@gmail.com', 'user02@gmail.com'];

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
});
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
      // selectedValue: false,
      value: 0,
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
    // if (event !== undefined && event.preventDefault) event.preventDefault();
    // console.log('submit');

    // console.log(event.target);
    // console.log(this.state.files);
    const data = new FormData(event.target);
    // console.log(data);
    // console.log(data.get('title'));
    // data.append('mutifile', this.state.files);
    // console.log(data.get('mutifile'));
    // console.log(data.get('mutifile'));

    if (this.state.imageComponent.length > 0) {
      for (let i = 0; i < this.state.imageComponent.length; i += 1) {
        data.append(`files[${i}]`, this.state.imageComponent[i].file);
      }
    }
    this.props.onSubmitForm(data);
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  // 카테고리팝업 핸들러
  // handleClose = value => {
  //   this.setState({ selectedValue: value, open: false });
  // };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
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
                placeholder="제목"
              />
            </FormControl>
          </div>
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

            <span className={classes.cateText}>카테고리를 선택해주세요.</span>
            {/* <Button
              variant="contained"
              size="small"
              className={classes.buttonCate}
            >
              <Icon
                className={classNames(classes.leftIcon, classes.iconSmall)}
                color="secondary"
              >
                add_circle
              </Icon>
              카테고리를 선택해주세요.
            </Button> */}
          </div>
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
                  // icon={<Icon>check_circle</Icon>}
                  classes={{
                    root: classes.tabRoot,
                    labelIcon: classes.tabIcon,
                  }}
                />
                <Tab
                  label={<TabLabel>매장방문</TabLabel>}
                  // icon={<Icon>check_circle</Icon>}
                  classes={{
                    root: classes.tabRoot,
                    labelIcon: classes.tabIcon,
                  }}
                />
                <Tab
                  label={<TabLabel>기타</TabLabel>}
                  // icon={<Icon>check_circle</Icon>}
                  classes={{
                    root: classes.tabRoot,
                    labelIcon: classes.tabIcon,
                  }}
                />
              </Tabs>
            </Paper>
          </div>
          {this.state.value === 0 && <TabContainer>Item One</TabContainer>}
          {this.state.value === 1 && <TabContainer>Item Two</TabContainer>}
          {this.state.value === 2 && <TabContainer>Item Three</TabContainer>}
        </div>
        <div>
          <ReviewCategory open={this.state.open} onClose={this.handleClose} />
        </div>
      </div>
    );
  }
}

// function TabContainer(props) {
//   return (
//     <Typography component="div" style={{ padding: 8 * 3 }}>
//       {props.children}
//     </Typography>
//   );
// }

// function TabLabel(props) {
//   return (
//     <div>
//       <Icon>check_circle</Icon>
//       <span>{props.children}</span>
//     </div>
//   );
// }

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
// };

ReviewWrite.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default withStyles(styles)(ReviewWrite);
