/**
 *
 * ReviewCategory
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';

import blue from '@material-ui/core/colors/blue';
import BlueButton from 'components/BlueButton';

import Bueaty from '../../images/ic-beauty-non@3x.png';
import BueatySel from '../../images/ic-beauty-sel@3x.png';

import Life from '../../images/ic-life-non@3x.png';
import LifeSel from '../../images/ic-life-sel@3x.png';

import Food from '../../images/ic-food-non@3x.png';
import FoodSel from '../../images/ic-food-sel@3x.png';

import Fashion from '../../images/ic-fashion-non@3x.png';
import FashionSel from '../../images/ic-fashion-sel@3x.png';

import Baby from '../../images/ic-baby-non@3x.png';
import BabySel from '../../images/ic-baby-sel@3x.png';

import Hobby from '../../images/ic-hobby-non@3x.png';
import hobbySel from '../../images/ic-hobby-sel@3x.png';

import Restorant from '../../images/ic-restorant-non@3x.png';
import RestorantSel from '../../images/ic-restorant-sel@3x.png';

import Pet from '../../images/ic-pet-non@3x.png';
import PetSel from '../../images/ic-pet-sel@3x.png';

import Etc from '../../images/ic-etc-non@3x.png';
import EtcSel from '../../images/ic-etc-sel@3x.png';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
// const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  root: {
    // backgroundColor: '#ffffff',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },
  appBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.79)',
  },
  popBpdy: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    height: '100vh',
    textAlign: 'center',
    // flexGrow: 1,
    width: '100%',
    marginTop: 86,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  paper: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeBtn: {
    color: '#ffffff',
    position: 'absolute',
    right: 20,
    top: 19,
  },
  flex: {
    with: '100%',
    fontFamily: 'AppleSDGothicNeo',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#ffffff',
    display: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 35,
  },
  toolbar: {
    textAlign: 'center',
    // position: 'relative',
    with: '100%',
  },
  bigAvatar: {
    width: 85,
    height: 85,
    backgroundColor: '#f1f1f1',
    border: 'solid 1px #e7e7e7',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  selAvatar: {
    width: 85,
    height: 85,
    backgroundColor: '#1591ff',
    border: 'solid 1px #1591ff',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cateWrap: {
    width: '33.3%',
    float: 'left',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 28,
  },
  cateName: {
    color: '#ffffff',
    marginTop: 12,
  },
  btnWrap: {
    paddingLeft: 16,
    paddingRight: 16,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

/* eslint-disable react/prefer-stateless-function */
class ReviewCategory extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cateList: [
        {
          cateIndex: 0,
          selImg: BueatySel,
          nonImg: Bueaty,
          active: 0,
          name: '뷰티',
        },
        {
          cateIndex: 1,
          selImg: LifeSel,
          nonImg: Life,
          active: 0,
          name: '라이프',
        },
        {
          cateIndex: 2,
          selImg: FoodSel,
          nonImg: Food,
          active: 0,
          name: '푸드',
        },
        {
          cateIndex: 3,
          selImg: FashionSel,
          nonImg: Fashion,
          active: 0,
          name: '패션',
        },
        {
          cateIndex: 4,
          selImg: BabySel,
          nonImg: Baby,
          active: 0,
          name: '유아',
        },
        {
          cateIndex: 5,
          selImg: hobbySel,
          nonImg: Hobby,
          active: 0,
          name: '취미',
        },
        {
          cateIndex: 6,
          selImg: RestorantSel,
          nonImg: Restorant,
          active: 0,
          name: '맛집',
        },
        {
          cateIndex: 7,
          selImg: PetSel,
          nonImg: Pet,
          active: 0,
          name: '펫',
        },
        {
          cateIndex: 8,
          selImg: EtcSel,
          nonImg: Etc,
          active: 0,
          name: '그 외',
        },
      ],
      selectedCate: false,
      complete: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleListItemClick = this.handleListItemClick.bind(this);
    this.cateSelect = this.cateSelect.bind(this);
  }
  handleClose = () => {
    this.props.onClose(false);
  };

  handleListItemClick = value => {
    // console.log(value);
    this.props.onClose(value);
  };
  cateSelect = value => {
    // console.log(value);
    // console.log(value.cateIndex);
    // const attribute = e.target.attributes.getNamedItem('category').value;
    // console.log(attribute);
    // console.log(e.target[0].class);
    const getCateIndex = value.cateIndex;
    const cateListTmp = [...this.state.cateList];
    let activeCnt = 0;
    for (let i = 0; i < cateListTmp.length; i += 1) {
      if (cateListTmp[i].cateIndex === getCateIndex) {
        if (cateListTmp[i].active === 0) {
          cateListTmp[i].active = 1;
        } else {
          cateListTmp[i].active = 0;
        }
      } else {
        cateListTmp[i].active = 0;
      }
      if (cateListTmp[i].active === 1) {
        activeCnt += 1;
      }
    }

    this.setState({
      cateList: cateListTmp,
      selectedCate: getCateIndex,
    });

    if (activeCnt > 0) {
      this.setState({
        complete: true,
      });
    } else {
      this.setState({
        complete: false,
      });
    }
  };
  cateComplete = () => {
    // console.log('===========');
    this.props.onClose(this.state.selectedCate);
    // this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog
        fullScreen
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
        className={classes.root}
        TransitionComponent={Transition}
        // paper={classes.paper}
        classes={{
          paper: classes.paper,
        }}
      >
        {/* <AppBar className={classes.appBar}> */}
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            onClick={this.handleClose}
            aria-label="Close"
            className={classes.closeBtn}
          >
            <CloseIcon />
          </IconButton>
          <div className={classes.flex}>카테고리를 선택해 주세요.</div>
          {/* <Button color="inherit" onClick={this.handleClose}>
            save
          </Button> */}
        </Toolbar>

        {/* </AppBar> */}
        <div className={classes.popBpdy}>
          {this.state.cateList &&
            this.state.cateList.map(cate => (
              <div key={cate.cateIndex} className={classes.cateWrap}>
                {cate.active === 0 ? (
                  <Avatar
                    alt="Adelle Charles"
                    src={cate.nonImg}
                    className={classNames(classes.bigAvatar)}
                    onClick={() => this.cateSelect(cate)}
                    imgProps={{ category: 0 }}
                  />
                ) : (
                  <Avatar
                    alt="Adelle Charles"
                    src={cate.selImg}
                    className={classNames(classes.selAvatar, classes.bigAvatar)}
                    onClick={() => this.cateSelect(cate)}
                    imgProps={{ category: 0 }}
                  />
                )}
                <div className={classes.cateName}>{cate.name}</div>
              </div>
            ))}
          <div className={classes.btnWrap}>
            <BlueButton
              btnType="button"
              onClickFunc={this.cateComplete}
              complete={this.state.complete}
              btnName="선택 완료"
            />
          </div>
        </div>
      </Dialog>
    );
  }
}

ReviewCategory.propTypes = {};

export default withStyles(styles)(ReviewCategory);
