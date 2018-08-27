/**
 *
 * UserGrade
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MasterIcon from '../../images/ic-lvmaster.png';
import ColIcon from '../../images/ic-lvcollabo.png';
import levelFiveIcon from '../../images/ic-lv-5.png';
import levelFourIcon from '../../images/ic-lv-4.png';
import levelThreeIcon from '../../images/ic-lv-3.png';
import levelTwoIcon from '../../images/ic-lv-2.png';
import levelOneIcon from '../../images/ic-lv-1.png';
import Divider from '@material-ui/core/Divider';
import PopupHeader from 'components/popups/PopupHeader';
const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardContent: {

    marginLeft: '70px',
    marginRight : '70px',
    border: '1px solid white',
     paddingBottom: '25px',
     marginBottom: '10px',
    backgroundColor: '#ffffff'
  },
  componentHeader:{
    border: '1px solid white',
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: '18px',
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#333333',
    textAlign: 'center'
  },
  componentMiddle:{
      border: '1px solid white',
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: '14px',
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 2,
      letterSpacing: 'normal',
      textAlign: 'center',
      color: '#7c7c7c',
      marginBottom:'20px',
      marginTop:'20px',
      marginLeft:'70px',
      marginRight:'70px',   
  },
  item:{
  
      border: '1px solid white',
      textAlign: 'left',
  },
  componentCaption: {
      border: '1px solid white',
      fontFamily: 'Apple SD Gothic Neo',
      fontSize: 13,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#7c7c7c',
  },
  gradeIcon: {
    float: 'left',
    paddingRight: '30px',
  },
  divider:{
    backgroundColor: '#dddddd',
    marginTop :'5px',
   marginBottom : '30px',


  }
};

/* eslint-disable react/prefer-stateless-function */
class UserGrade extends React.Component {
  render() {
    const { classes } = this.props;
    return(
   
    <div>
        
       <div className={classes.container}>
       
       <PopupHeader headerTitle="마이페이지" />
      
        </div>
      <div>
        <Card className={classes.card}>
        <CardContent>
          <div className={classes.cardHeaderTitle}>
          <Typography className={classes.componentHeader}>
                  회원 등급 안내
            <br />

          </Typography>
          </div>
          <div className={classes.cardHeaderTitle}>
          <Typography className={classes.componentMiddle}>
          보유하고 있는 리터큐브의 총액에 백분율을 적용하여 산정합니다.
          </Typography>
          </div>
         <Divider className={classes.divider}/>
          <div className={classes.cardContent}>
            <img src={MasterIcon} className={classes.gradeIcon}/>
            <Typography className={classes.item}>            
            Lv.리터 마스터
            </Typography>
            <Typography className={classes.componentCaption}>
              {'상위 0.1% 이내'}
            </Typography>
          </div>
          <div className={classes.cardContent}>
          <img src={ColIcon} className={classes.gradeIcon}/>
          <Typography className={classes.item}>            
          Lv.리터 콜라보레이터
          </Typography>
          <Typography className={classes.componentCaption}>
            {'상위 0.1%~1% 사이'}
          </Typography>
          </div>
          <div className={classes.cardContent}>
          <img src={levelFiveIcon} className={classes.gradeIcon}/>
          <Typography className={classes.item}> 
          Lv. 5
          </Typography>
          <Typography className={classes.componentCaption}>
            {'상위 1%~10% 사이'}
          </Typography>
          </div>
          <div className={classes.cardContent}>
          <img src={levelFourIcon} className={classes.gradeIcon}/>
          <Typography className={classes.item}> 
          Lv. 4
          </Typography>
          <Typography className={classes.componentCaption}>
            {'상위 10%~30% 사이'}
          </Typography>
          </div>

           <div className={classes.cardContent}>
           <img src={levelThreeIcon} className={classes.gradeIcon}/>
           <Typography className={classes.item}> 
          Lv. 3
          </Typography>
          <Typography className={classes.componentCaption}>
            {'상위 30%~50% 사이'}
          </Typography>
          </div>

           <div className={classes.cardContent}>
           <img src={levelTwoIcon} className={classes.gradeIcon}/>
           <Typography className={classes.item}> 
          Lv. 2
          </Typography>
          <Typography className={classes.componentCaption}>
            {'상위 50%~80% 사이'}
          </Typography>
          </div>

           <div className={classes.cardContent}>
           <img src={levelOneIcon} className={classes.gradeIcon}/>

           <Typography className={classes.item}> 
          Lv. 1
          </Typography>
          <Typography className={classes.componentCaption}>
            {'상위 80%~100% 사이'}
          </Typography>
          </div>
        </CardContent>
      </Card>
      </div>
  </div>
    );
  }
}

UserGrade.propTypes = {};

export default withStyles(styles)(UserGrade);
