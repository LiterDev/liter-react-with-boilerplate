export const showAlert = data => {
  msg.show(data, {
    type: 'error',
    time: 6000,
  });
};

export const showSuccess = data => {
  msg.show(data, {
    type: 'success',
    time: 4000,
  });
};

export const showInfo = data => {
  msg.show(data, {
    type: 'info',
    time: 6000,
  });
};

export const showSMessage = (message, data) => {
  msg.show(message, {
    type: data,
    time: 6000,
  });
};

const messageExchnager = MsgCode => {
  let userLanguage = (navigator.language || navigator.userLanguage).substring(
    0,
    2,
  );
  if (language.indexOf(userLanguage) != -1) {
    if (code.indexOf(MsgCode) != -1) {
      return message[MsgCode][userLanguage];
    } else {
      return message['1000'][userLanguage];
    }
  } else {
    if (code.indexOf(MsgCode) != -1) {
      return message[MsgCode]['en'];
    } else {
      return message['1000']['en'];
    }
  }
};

const language = ['en', 'ko', 'ja', 'zh', 'ar', 'de'];

const code = [1000, 2000, 3000, 4000, 5000];

const message = {
  1000: {
    en: '1111',
    ko: '서버와 연결이 끊어졌습니다.',
    ja: 'bbbb',
    zh: 'eeee',
    ar: 'cccc',
    de: 'dddd',
  },
  2000: {
    en: '1111',
    ko: '성공적으로 확인이메일이 발송되었습니다.',
    ja: 'bbbb',
    zh: 'eeee',
    ar: 'cccc',
    de: 'dddd',
  },
  3000: {
    en: '1111',
    ko: '입력한 이메일에 문제가 있습니다 다시확인해주세요.',
    ja: 'bbbb',
    zh: 'eeee',
    ar: 'cccc',
    de: 'dddd',
  },
  4000: {
    en: '1111',
    ko: '입력한 이메일이 이미 다른아이디에서 사용중입니다.',
    ja: 'bbbb',
    zh: 'eeee',
    ar: 'cccc',
    de: 'dddd',
  },
};
