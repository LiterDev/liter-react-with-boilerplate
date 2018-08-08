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
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
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

    console.log(data.myPages.length);
    if (data.myPages) {
      if (tabItem.type === 'REVIEW') {
        result.push(
          <div key={tabItem.type.concat('0')}>
            <div className={classes.topLine}>
              <span className={classes.reviewCount}>
                리뷰 {Object.keys(data.myPages).length}
              </span>
            </div>
            {this.renderReviewdRow(tabItem.type, data.myPages)}
          </div>,
        );
      } else if (tabItem.type === 'REWARD') {
        result.push(
          <List>
            <ListItem>
              <div
                className={classes.rewardTopLine}
                key={tabItem.type.concat(0)}
              >
                <span className={classes.rewardHeaderDate}>일시</span>
                <span className={classes.rewardHeaderReward}>보상액</span>
                <span className={classes.rewardHeaderTotal}>총액</span>
              </div>
            </ListItem>
            <Divider />
            {this.renderRewordRow(tabItem.type, data.myPages)}
          </List>,
        );
      }
    } else {
      result.push(<div>조회된 내용이 없습니다.</div>);
    }

    return result;
  }

  renderReviewdRow(type, data) {
    if (data !== false) {
      const reviewArray = Object.values(data);
      return reviewArray.map(row => (
        <ReviewContainer review={row} data={row} key={type.concat(row.id)} />
      ));
    }

    return (
      <div>
        <Typography>페이지를 찾을 수 없습니다.</Typography>
      </div>
    );
  }

  renderRewordRow(type, data) {
    console.log('####');
    console.log(Object.values(data));
    // return <div>11</div>;
    return Object.values(data).map(row => (
      <RewardContainer reword={row} key={type.concat(row.index)} />
    ));
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

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array,
  tabs: PropTypes.array,
};

export default withStyles(styles)(SimpleTabs);
