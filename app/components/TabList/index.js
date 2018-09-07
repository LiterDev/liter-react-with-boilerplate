import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from 'components/Button';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { FormattedMessage, FormattedNumber } from 'react-intl';

import ReviewContainer from './ReviewContainer';
import RewardContainer from './RewardContainer';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  topLine: {
    display: 'flex',
    flexGrow: 1,
    textAlign: 'left',
    paddingTop: '13px',
    paddingLeft: '16px',
    paddingRight: '16px',
  },
  reviewCount: {
    fontSize: '13px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#292d39',
  },
  rewardTopLine: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    fontSize: '12px',
    color: '#111111',
  },
  rewardHeaderDate: {
    width: '20%',
    textAlign: 'center',
    borderRight: '1px solid #aaaaaa',
  },
  rewardHeaderReward: {
    width: '40%',
    textAlign: 'center',
    borderRight: '1px solid #aaaaaa',
  },
  rewardHeaderTotal: {
    width: '40%',
    textAlign: 'center',
  },
  colDivider: {
    borderRight: '1px solid #aaaaaa',
  },
  tabStyle: {
    maxWidth: '500px',
  },
  card: {
    // maxWidth: 400,
    marginTop: 12,
  },
  emptyCardContents: {
    // maxWidth: 400,
    textAlign: 'center',
  },
  emptyTitle: {
    color: '#acacac',
  },
  buttonStyles: {
    textAlign: 'center',
    paddingTop: '4px',
    color: '#ffffff',
    fontSize: '14px',
    margin: theme.spacing.unit,
    backgroundColor: '#1591ff',
    width: '89px',
    height: '32px',
    borderRadius: '3px',
    '&:hover': {
      backgroundColor: '#1591ff',
    },
  },
  row: {
    display: 'flex',
  },
  col1: {
    flex: 1,
  },
  col3: {
    paddingLeft: '10px',
    flex: 3,
  },
  estimatedSnackbar: {
    width: '100%',
    height: '53px',
    backgroundColor: 'rgba(0,0,0,0.85)',
  },
  newRewardSnackbar: {
    width: '100%',
    height: '53px',
    backgroundColor: 'rgba(0,0,0,0.85)',
  },
  estimatedSnackbarContent: {
    width: '100%',
    lineHeight: '53px',
    height: '53px',
    color: '#fff',
    textAlign: 'center',
  },
  newRewardSnackbarContent: {
    marginTop: '-35px',
    width: '100%',
    lineHeight: '53px',
    height: '53px',
    color: '#fff',
    textAlign: 'center',
  },
  newRewardSnackBarCaption: {
    opacity: '0.51',
    fonFamily: 'Apple SD Gothic Neo',
    fontSize: '12px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#ffffff',
  },
  newRewardSnackBarCoin: {
    fonFamily: 'SFProDisplay',
    fontSize: '19.8px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#ffffff',
    position: 'absolute',
    right: 12,
    top: 12,
  },
  newRewardSnackBarBtn: {
    borderRadius: '1.6px',
    width: '107px',
    height: '32px',
    border: 'solid 1px #1591ff',
    margin: '29px 8px 29px 8px',
    fonFamily: 'Apple SD Gothic Neo',
    fontSize: '14px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.14',
    letterSpacing: 'normal',
    color: '#1591ff',
  },
  lcbText: {
    fontWeight: 500,
    fontSize: '12px',
    fontFamily: 'SFProText',
    marginLeft: 5,
  },
  krw: {
    fontSize: 12,
    marginRight: 3,
  },
});

class TabList extends React.Component {
  state = {
    value: 0,
    newReward: false,
    estimatedReward: false,
    bottomHeight: 0,
  };

  componentDidMount = () => {
    this.props.tabListHandler(this.state.value);

    // console.log("]----------- myPage::componentDidMount:data ---------[");
    // console.log(this.props.data);

    // if(Boolean(this.props.data.estimated) && this.props.data.estimated > 0) {
    //   this.setState({ estimatedReward: true });
    // }

    // if(Boolean(this.props.data.acquire) && this.props.data.acquire > 0) {
    //   this.setState({ newReward: true, bottomHeight: 53 });
    // }
  };

  componentWillReceiveProps = nextProps => {
    if (Boolean(nextProps.data.estimated) && nextProps.data.estimated > 0) {
      this.setState({ estimatedReward: true });
    } else {
      this.setState({ estimatedReward: false });
    }
    if (Boolean(nextProps.data.acquire) && nextProps.data.acquire > 0) {
      this.setState({ newReward: true, bottomHeight: 53 });
    } else {
      this.setState({ newReward: false, bottomHeight: 0 });
    }
  };

  handleChange = (event, value) => {
    const { tabListHandler } = this.props;
    tabListHandler(value);
    this.setState({ value });
  };

  renderTab() {
    const { tabs, classes } = this.props;
    return tabs.map(tab => (
      <Tab
        className={classes.tabStyle}
        label={tab.tabLabel}
        key={tab.tabLabel}
      />
    ));
  }

  handleClose = type => {
    switch (type) {
      case 'estimated':
        this.setState({ estimatedReward: false });
        break;
      case 'acquire':
        this.setState({ newReward: false });
        break;
    }
  };

  handleRewardClaim = () => {
    // console.log("]---***--reward claim---****---[");
    this.setState({ newReward: false });
    this.props.handleRewardClaim();
  };

  renderContainer() {
    const { data, tabs } = this.props;
    const { value, newReward, estimatedReward } = this.state;
    const { classes } = this.props;

    const result = [];
    const tabItem = tabs[value];

    // console.log("]----------- myPage::renderContainer:data ---------[");
    // console.log(data);

    if (tabItem.type === 'REVIEW') {
      result.push(
        <div key={tabItem.type.concat('0')}>
          <div className={classes.topLine}>
            <span className={classes.reviewCount}>
              리뷰 {Object.keys(data.reviews).length}
            </span>
          </div>
          {this.renderReviewdRow(tabItem.type, data.reviews)}
        </div>,
      );
    } else if (tabItem.type === 'REWARD') {
      result.push(
        <List key={tabItem.type.concat('list')}>
          <ListItem key={tabItem.type.concat(0)}>
            <div className={classes.rewardTopLine}>
              <span className={classes.rewardHeaderDate}>일시</span>
              <span className={classes.rewardHeaderReward}>보상액</span>
              <span className={classes.rewardHeaderTotal}>총액</span>
            </div>
          </ListItem>
          <Snackbar
            className={classes.estimatedSnackbar}
            style={{ bottom: this.state.bottomHeight }}
            open={this.state.estimatedReward}
            onClose={() => this.handleClose('estimated')}
            onClick={() => this.handleClose('estimated')}
          >
            <div className={classes.estimatedSnackbarContent}>
              <span className={classes.newRewardSnackBarCaption}>
                예상 보상 내역 (추후 변동될 수 있습니다.)
              </span>
              <span className={classes.newRewardSnackBarCoin}>
                <span className={classes.krw}>₩</span>
                <FormattedNumber value={data.estimated} />
                {/* <span className={classes.lcbText}>LCB</span> */}
              </span>
            </div>
          </Snackbar>
          <Snackbar
            className={classes.newRewardSnackbar}
            open={this.state.newReward}
            onClose={() => this.handleClose('acquire')}
            onClick={() => this.handleClose('acquire')}
          >
            <div className={classes.newRewardSnackbarContent}>
              <span className={classes.newRewardSnackBarCaption}>
                지금 받을 수 있는 신규보상
              </span>
              <span className={classes.newRewardSnackBarCoin}>
                <span className={classes.krw}>₩</span>
                <FormattedNumber value={data.acquire} />
                {/* <span className={classes.lcbText}>LCB</span> */}
              </span>
              <button
                className={classes.newRewardSnackBarBtn}
                onClick={() => this.handleRewardClaim()}
              >
                보상받기
              </button>
            </div>
          </Snackbar>

          {this.renderRewardRow(tabItem.type, data.rewards)}
        </List>,
      );
    }

    return result;
  }

  renderReviewdRow(type, data) {
    const { classes } = this.props;

    if (data !== false && data.length > 0) {
      const reviewArray = Object.values(data);
      return reviewArray.map(row => (
        <ReviewContainer review={row} data={row} key={type.concat(row.id)} />
      ));
    }
    /* TODO:: EmptyContainer 작성 */
    return (
      <Card className={classes.card} key={type.concat(1)}>
        <CardContent className={classes.emptyCardContents}>
          <Typography className={classes.emptyTitle}>
            작성된 리뷰가 없습니다.
          </Typography>
          {/* <StyledLink to={`/review/${review.id}`}>
              <Typography className={classes.reviewTitle} component="p">
                {review.title}
              </Typography>
            </StyledLink> */}
        </CardContent>
      </Card>
    );
  }

  renderRewardRow(type, data) {
    const { classes } = this.props;
    // console.log('####');
    // console.log(Boolean(data));
    //console.log(Object.values(data));
    // return <div>11</div>;

    if (Boolean(data) !== false && data.length > 0) {
      return Object.values(data).map(row => (
        <RewardContainer reward={row} key={type.concat(row.id)} />
      ));
    }

    return (
      // <div key={type.concat('-empty')}>111</div>
      <Card className={classes.card} key={type.concat(1)}>
        <CardContent className={classes.emptyCardContents}>
          <Typography className={classes.emptyTitle}>
            보상받은 내역이 없습니다.
          </Typography>
          {/* <StyledLink to={`/review/${review.id}`}>
              <Typography className={classes.reviewTitle} component="p">
                {review.title}
              </Typography>
            </StyledLink> */}
        </CardContent>
      </Card>
    );
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} fullWidth>
            {this.renderTab()}
          </Tabs>
        </AppBar>
        {this.renderContainer()}
      </div>
    );
  }
}

TabList.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object,
  tabs: PropTypes.array,
};

export default withStyles(styles)(TabList);
