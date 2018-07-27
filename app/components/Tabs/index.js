import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function ReviewContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      <div>{props.data.imgUrl}</div>
      <div>{props.data.userName}</div>
      <div>{props.data.update}</div>
      <div>{props.data.title}</div>
      <div>{props.data.ingBoolean}</div>
      <div>{props.data.exportsCnt}</div>
      <div>{props.data.starAvg}</div>
    </Typography>
  );
}

function RewardContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      <div>{props.data.date}</div>
      <div>{props.data.coin}</div>
      <div>{props.data.sum}</div>
    </Typography>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
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
    const { tabData } = this.props;
    return tabData.map(tab => <Tab label={tab.tabLabel} />);
  }

  renderContainer() {
    const { tabData } = this.props;
    const { value } = this.state;
    console.log(tabData[value].type);
    if (tabData[value].type === 'REVIEW') {
      return tabData[value].list.map(list => (
        <ReviewContainer type={tabData[value].type} data={list} />
      ));
    } else if (tabData[value].type === 'REWARD') {
      return tabData[value].list.map(list => (
        <RewardContainer type={tabData[value].type} data={list} />
      ));
    }

    return tabData[value].list.map(list => (
      <ReviewContainer type={tabData[value].type} data={list} />
    ));
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
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
  tabData: PropTypes.array,
};

export default withStyles(styles)(SimpleTabs);
