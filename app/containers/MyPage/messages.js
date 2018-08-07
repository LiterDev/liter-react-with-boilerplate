/*
 * MyPage Messages
 *
 * This contains all the text for the MyPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.MyPage.header',
    defaultMessage: 'My Page',
  },
  createWallet: {
    id: 'app.containers.MyPage.createWallet',
    defaultMessage: 'Creat Wallet',
  },
  requiredWalletMsg: {
    id: 'app.containers.MyPage.requiredWalletMsg',
    defaultMessage: 'Make Wallet to Email Auth.',
  },
  emailAuthTitle: {
    id: 'app.containers.MyPage.emailAuthTitle',
    defaultMessage: '이메일 인증을 하시겠습니까?',
  },
  emailAuthMsg: {
    id: 'app.containers.MyPage.emailAuthMsg',
    defaultMessage:
      '회원님의 활동에 따른 보상을 회원님의 지갑으로 지급해 드리고 있습니다. 보상을 받으려면 이메일 인증을 통해 지갑을 생성해야 합니다. ',
  },
});
