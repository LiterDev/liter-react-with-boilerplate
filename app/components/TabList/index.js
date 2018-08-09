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
});

class TabList extends React.Component {
  state = {
    value: 0,
  };

  componentDidMount = () => {
    this.props.tabListHandler(this.state.value);
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

  renderContainer() {
    const { data, tabs } = this.props;
    const { value } = this.state;
    const { classes } = this.props;

    const result = [];
    const tabItem = tabs[value];

    console.log(data);
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
        <List>
          {/* <ListItem key={tabItem.type.concat('header')}>
            <span className={classes.col3}>신규보상</span>
            <span className={classes.col1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="21"
                viewBox="0 0 10 21"
              >
                <g fill="none" fillRule="evenodd">
                  <path fill="#FFF" d="M-155-201h375v667h-375z" />
                  <path
                    fill="#1591FF"
                    fillRule="nonzero"
                    stroke="#1591FF"
                    strokeWidth=".2"
                    d="M7.886 6.502l.114.1v.972l-.034.072-.142.08A3.67 3.67 0 0 0 4.776 9.37l3.108.048.116.106-.059 1.022-.12.096-3.388-.042c-.018.139-.027.26-.027.376l.001.075v.028c.003.104.003.174-.002.233l3.48.05.115.105-.059 1.023-.12.096-3-.067c.596 1.045 1.747 1.71 3.066 1.757l.113.107-.059 1.022-.117.096c-2.01 0-3.798-1.186-4.44-2.918l-1.272-.048L2 12.428l.059-1.022.125-.096.861.048a4.1 4.1 0 0 1-.018-.383c0-.14.01-.25.037-.341l-.953-.043L2 10.485l.059-1.023.121-.096 1.153.033c.704-1.78 2.504-2.948 4.553-2.897z"
                  />
                </g>
              </svg>
              {data.acquire}
            </span>
            <span className={classes.col1}>
              <button
                className={classes.buttonStyles}
                // onClick={this.handleCreateWallet}
              >
                {'보상받기'}
              </button>
            </span>
          </ListItem> */}
          {/* <Divider /> */}
          {/* <ListItem key={tabItem.type.concat(0)}>
            <div className={classes.rewardTopLine}>
              <span className={classes.rewardHeaderDate}>일시</span>
              <span className={classes.rewardHeaderReward}>보상액</span>
              <span className={classes.rewardHeaderTotal}>총액</span>
            </div>
          </ListItem> */}
          {/* <Divider /> */}
          {/* {this.renderRewordRow(tabItem.type, data.rewords)} */}
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

  renderRewordRow(type, data) {
    const { classes } = this.props;
    console.log('####');
    console.log(Object.values(data));
    // return <div>11</div>;
    if (data !== false && data.length > 0) {
      return Object.values(data).map(row => (
        <RewardContainer reword={row} key={type.concat(row.id)} />
      ));
    }
    return (
      <div key={type.concat('-empty')}>111</div>
      // <Card className={classes.card} key={type.concat(1)}>
      //   <CardContent className={classes.emptyCardContents}>
      //     <Typography className={classes.emptyTitle}>
      //       보상받은 내역이 없습니다.
      //     </Typography>
      //     {/* <StyledLink to={`/review/${review.id}`}>
      //         <Typography className={classes.reviewTitle} component="p">
      //           {review.title}
      //         </Typography>
      //       </StyledLink> */}
      //   </CardContent>
      // </Card>
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
