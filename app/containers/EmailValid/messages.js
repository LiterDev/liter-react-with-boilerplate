/*
 * EmailValid Messages
 *
 * This contains all the text for the EmailValid component.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.EmailValid.header',
    defaultMessage: '이메일 인증 성공',
  },
  failheader: {
    id: 'app.containers.EmailValid.failheader',
    defaultMessage: '이메일 인증 실패',
  },
  goHome: {
    id: 'app.containers.EmailValid.goHome',
    defaultMessage: '홈페이지로 가기',
  },
  goMyPage: {
    id: 'app.containers.EmailValid.goMyPage',
    defaultMessage: '마이페이지로 이동',
  },
});
