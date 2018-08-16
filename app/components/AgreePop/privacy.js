import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import BlueButton from 'components/BlueButton';

// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import FormattedMessage from 'react-intl';
// import messages from './messages';

const styles = {
  dialogTitle: {
    marginTop: '30px',
    textAlign: 'center',
  },
  closeBtn: {
    color: '#000000',
    position: 'absolute',
    right: 5,
    top: 5,
  },
  okBtn: {
    color: '#1591ff',
    fontSize: '16px',
  },
  dialogAction: {
    justifyContent: 'center',
    // backgroundColor: '#000000',
    // color: '#ffffff',
  },
  dialogContent: {
    whiteSpace: 'pre-wrap',
    fontSize: '15px',
  },
};

class Privacy extends React.Component {
  state = {
    // 스크롤 기능 제외 필요할 경우 하단 state : false
    scrollComplate: true,
  };

  handleScrolll = () => {
    this.setState({
      scrollComplate: true,
    });
  };
  render() {
    const { classes, privacyOpen, agreeHandle, closeHandle } = this.props;
    const { scrollComplate } = this.state;
    return (
      <div>
        <Dialog
          open={privacyOpen}
          fullScreen
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            color="inherit"
            onClick={closeHandle}
            aria-label="Close"
            className={classes.closeBtn}
          >
            <CloseIcon />
          </IconButton>
          <DialogTitle className={classes.dialogTitle} id="alert-dialog-title">
            개인 정보 보호 정책
          </DialogTitle>
          <DialogContent
          // 스크롤 기능 제외 필요할 경우 하단 주석 제거
          // onScroll={e => {
          //   if (
          //     e.target.scrollTop /
          //       (e.target.scrollHeight - e.target.clientHeight) >
          //     0.95
          //   ) {
          //     this.handleScrolll();
          //   }
          // console.log(
          //   `heigth:${e.target.clientHeight},
          //  scrollHeight:${e.target.scrollHeight},
          //  top::${e.target.scrollTop},
          //  per::${sRate}`,
          // );
          // }}
          >
            <DialogContentText
              className={classes.dialogContent}
              id="alert-dialog-description"
            >
              총칙<br />
              <br />
              본 개인 정보 보호 정책은 LCBPROJECT PTE. LTD. (이하 “회사”)가
              웹사이트 www.literproject.com의 사용자 정보 수집, 수집된 정보를
              사용, 공유하는 방법에 대한 설명입니다. 혼란의 방지를 위해, 회사의
              웹사이트 또는 모바일 애플리케이션 을 “LITER”로, 웹 사이트 또는
              애플리케이션에서 제공하는 서비스, 베타 서비스, 기타 관련 서비스를
              “서비스”로 통칭합니다. 회사가 개인 정보 보호 정책을 변경하는 경우,
              본 페이지에 개정된 개인 정보 보호 정책을 게시할 것이며,
              회원(회사에 개인정보를 제공하여 회원가입을 한 자로서, 회사의
              정보를 지속적으로 제공받으며, 회사가 제공하는 서비스를 계속적으로
              이용할 수 있는 자로 사용자 이용 약관에서의 정의와 동일)이
              정기적으로 회사의 웹사이트에서 모든 업데이트를 확인할 의무가
              있음에 동의하셔야 합니다. <br />
              본 개인 정보 보호 정책은 서비스 약관과 함께 검토되며, 참조를 통해
              통합된 것으로 간주합니다. 따라서, LITER 서비스를 사용하는 경우,
              회원은 본 개인 정보 보호 정책에 명시된 약관에 동의해야 하며, 본
              개인 정보 보호 정책의 약관은 구속력을 갖습니다. <br />
              회원은 본 개인 정보 보호 정책의 조항에 동의하기를 거부할 수
              있습니다. 다만, 회원이 동의하기를 거부할 경우, 서비스를 이용할 수
              없음을 알려드립니다.<br />
              <br />
              1. 수집되는 데이터의 종류<br />
              1.1. LITER를 방문, 접근 또는 사용 시, 회사는 개인 데이터와 익명
              데이터를 수집합니다 <br />
              1.2. “개인 데이터”는 개인의 이름, 주소, 성별, 생년월일, 결혼여부,
              관심분야, 라이프 스타일, 유저 아이덴티티 등 개인 식별을 위해
              개별적 또는 집합적으로 사용할 수 있는 개인 정보를 의미합니다.{' '}
              <br />
              1.3. “익명 데이터”는 개인 데이터와 연관 또는 연결되지 않은 정보로,
              개별 회원을 식별하는데 사용할 수 없습니다. <br />
              <br />
              2. 자동으로 수집하는 정보<br />
              2.1. LITER 서비스 사용 시, 회사는 회원의 컴퓨터나 모바일 기기
              그리고 회원의 활동에 대한 정보를 수집하고 저장할 수 있습니다. 이
              정보는 다음 항목을 포함하고 있습니다.<br />
              a. 모바일 기기의 고유 ID 번호<br />
              b. LITER 앱이 작동 중일 때 회원의 위치정보<br />
              c. 컴퓨터의 IP 주소<br />
              d. 회원의 컴퓨터나 모바일 기기의 기술적 정보 (기기의 종류, 웹
              브라우저, 또는 운영체제)<br />
              e. 회원의 기기 기본설정 및 환경설정 (시간대, 언어, 개인 정보
              환경설정, 제품 기본설정)<br />
              f. 회사의 웹 사이트 또는 기타 관련 웹 사이트 방문하기 전에
              마지막으로 방문한 웹 페이지의 URL.<br />
              g. 클릭한 버튼, 컨트롤 또는 광고<br />
              h. LITER의 사용 기간과 사용한 서비스 및 기능<br />
              i. LITER에서 온라인/오프라인 여부<br />
              2.2. 회사는 타사 분석 회사가 추적 기술을 사용하여 회사 사용자의
              컴퓨터나 모바일 장치 및 온라인 활동에 대해 익명으로 수집할 수
              있도록 지원합니다. 이 회사들은 LITER, 그리고 LITER와 관련 웹
              사이트들이 어떻게 사용되고 있는지에 대한 이해를 돕기 위해 이
              정보를 분석 합니다. 분석 회사는 아래 단락("모바일 장치 ID")에
              설명된 대로 모바일 장치 ID를 사용할 수 있습니다<br />
              모바일 장치 ID: 사용자를 인식하고, 기본 설정을 저장하고, 응용
              프로그램 사용을 추적할 수 있습니다. 모바일 장치 ID(제조 업체에서
              지정한 고유 식별자)를 저장할 수 있습니다. LITER App을 사용할 때
              쿠키와 달리 모바일 장치 ID는 삭제할 수 없습니다. <br />
              공유하지 않는 내용:타사 분석 회사에 사용자의 이름, 주소, 이메일
              주소 또는 전화 번호를 제공하지 않습니다.<br />
              2.3. 회사는 사용자의 총 수 및 전체 통계와 같은 익명화된 데이터를
              집계한 정보를 공개할 수 있습니다. <br />
              <br />
              3. 회원이 제공하는 정보<br />
              A. 회원가입과 개인 프로필<br />
              3.1. 회원가입 시 필요한 “개인 데이터”로 개인의 이름, 주소, 성별,
              생년월일, 결혼여부, 관심분야, 라이프 스타일, 유저 아이덴티티 등이
              있습니다.<br />
              3.2. 회원의 개인 정보를 자발적으로, 전체 공개된 화면 또는 페이지에
              공개 할 경우, 회원의 정보는 다른 사람들에게 공개되고, 사용되어질
              수 있습니다. 예를 들면, 회원의 이메일 주소 공개 시, 원하지 않는
              이메일을 받을 수 있습니다. 회사는 회원이 자발적으로 공개하는
              정보에 관련하여, 누가 그 정보를 습득하고 사용하는지에 대해 제어할
              수 없습니다. 그래서, 개인 정보의 보호를 위해, 회원이 정보를
              공개함에 있어 신중하시기를 권고 드립니다. <br />
              3.3. 회원은 원하시는 경우 (필수적이지는 않으나), LITER 서비스 또는
              서비스 사용자와의 활발한 교류를 위해 회원에 대한 추가 정보를
              제공하실 수 있습니다. 제공하시는 사진 또는 정보는 공개될 수
              있습니다. <br />
              3.4. 따라서, 회원은 3.1~3.3항에 따라 회사에 제공한 바와 같이
              회사의 개인 데이터의 수집, 사용, 보존, 공유, 공개 및 이전에 대해
              고지 받고, 동의함을 확인합니다. <br />
              3.5. 만약 회원정보의 삭제를 요청하실 경우, 회원의 계정 정보를
              삭제해드리겠습니다. 이메일, help@literproject.com로 요청 바랍니다.<br />
              B. 제 3자 사이트, 모바일 애플리케이션, 그리고 소셜 네트워크 사이트<br />
              3.6. 회사는 제 3자가 제공하는 하이퍼링크를 회사의 웹사이트 및
              모바일 애플리케이션에 포함할 수 있습니다. 이러한 제 3자의 사이트나
              모바일 애플리케이션에는 회사의 사용자 약관이나 개인정보 보호정책의
              효력이 없습니다. 회사는, 회사의 이름이나 로고 또는 앱 디스플레이
              또는 그로부터 파생된 상품 또는 서비스 등과 함께 공동 제작된 경우라
              할지라도, 해당 타사의 웹사이트 또는 모바일 애플리케이션의 개인
              정보 보호 정책이나 데이터 보안에 대해 책임지지 않습니다. 그러므로,
              회원이 해당 타사의 웹사이트나 애플리케이션에 접근 및 이용 전에,
              해당 타사의 개인 정보 보호 정책을 이해 및 숙지하고, 개인 정보를
              제공하는데 있어 주의하기를 권고 드립니다. 회원은 회사가 상기 제
              3자의 어떠한 행위나, 누락, 그리고 해당 제 3자의 웹사이트,
              애플리케이션, 서비스 또는 파생상품의 접근 및 활용 시 발생할 수
              있는 손실이나 손해에 책임을 지지 않음에 동의합니다. <br />
              3.7. 상기 3.1 항에 따라, 회사는 평판이 좋은 소셜 미디어/네트워크
              사이트 (“소셜미디어 사이트”로 총칭)를 사용합니다. 페이스북과
              웨이보 외에도, 트위터, 인스타그램, 핀터레스트, 링크드인과 같은
              소셜 미디어 사이트를 이용하여 소셜 네트워크에 연결할 수 있습니다.
              리뷰의 활성화와, 더 많은 사용자의 유입을 통한 LITER 생태계 확장을
              위해, 회사는 소셜미디어 사이트에 링크를 제공하여 연결할 것입니다.
              소셜 미디어 사이트와 연계되는 LITER 서비스 또는 관련 프로모션을
              통한 회원의 소셜 미디어 사이트의 접근 및 이용 전, 해당 소셜 미디어
              사이트의 이용 약관 및 개인 정보 보호 정책을 검토하십시오. <br />
              <br />
              4. 다른 사용자의 정보<br />
              회사는 회원의 활동(공유, 친구 추천)을 통하여 회원의 주변인에 대한
              공개된 정보를 수집할 수 있습니다. 회사는 이와 관련된 정보를 LITER
              서비스를 이용하는 회원과 회원의 주변인을 팔로잉 하고자 하는 자에
              한해 공유하겠습니다. <br />
              <br />
              5. 개인정보를 포함한 회원의 정보를 이용하는 방법v 5.1 회사는 상기
              정보를 리뷰에 관련된 활동 (리뷰 작성, 리뷰 반응, 리뷰 검색, 활동에
              대한 보상)을 하는 사용자의 편의와 사용자에게 적합한 서비스의
              제공을 위해, 그리고 사용자를 이해, 사용자의 흥미와 관심을 반영한
              리뷰를 제공 등, 사용자를 위한 전반적인 서비스 환경의 개선을 위해
              사용합니다. 이에, 혹 회원께서 서비스 이용 중, 개인 정보의 활용에
              더 이상 동의하지 않으실 경우, 꼭 이메일로 연락하시어, LITER
              담당자에게 알려주셔야 합니다. 담당자가 이메일로 요청을 받은 후,
              회사는 회원에게 서비스 이용에 대한 제한을 공지해드립니다. <br />
              5.2. 회사는 LITER의 앱 또는 웹 서비스 이용 시, 사용자의 위치에
              대한 정보를 수집할 수 있습니다. 이는, 리뷰 작성에 대한 신뢰성과,
              어뷰징에 대한 예방으로 건전한 LITER 서비스 환경을 조성하기 위해
              사용합니다. <br />
              <br />
              6. 제 3자에 의한 개인 정보 이용<br />
              6.1. 회사의 파트너 사를 비롯하여, 회사와 관계를 맺고 있는 제 3자가
              회원의 정보를 수집할 수 있습니다. 이는 LITER 서비스와 연계하여,
              다른 기타 제휴 서비스를 회원을 비롯한 사용자에게 제공하기 위해서,
              제 3자의 개인 정보 활용에 회사와 사용자가 동의하는 것을 이 정책에
              포함합니다. 제 3자의 개인 정보 활용의 이유는 다음 6.2항에 기술되어
              있고, 개인 정보의 범위는 회사와 제 3자의 관계에 따라 다를 수
              있습니다. 회사의 제 3자 서비스 제공업체는 개인 데이터 보호법
              2012(“PDPA”)의 요구 사항과 유사한 기밀성 및 데이터 보호 의무에
              따라 신중하게 선택되어 법적으로 또는 계약의 의무를 지니고
              있으므로, 안심하시기 바랍니다. <br />
              6.2. 회사는 회원의 개인 정보를 다음의 업체에 제공할 수 있습니다.{' '}
              <br />
              1) 회원이 LITER 서비스에 접근 또는 사용하기 위해 필요한 제 3자
              서비스 제공 업체로, 회사와 계약 관계를 가진, 웹 호스트 회사,
              웹사이트 관리 회사, 모바일 애플리케이션 관리자, 데이터베이스
              저장소, 텔레커뮤니케이션 업체, 기타 관련 활동을 도와 주는 업체
              등으로 정의할 수 있습니다. <br />
              2) 회사와 파트너 관계를 맺고 있는 공팔리터를 비롯 기타 얼라이언스
              업체를 포함합니다.<br />
              3) 결제서비스와 관련하여, 전자상거래 결제 처리 업체를 포함합니다.<br />
              4) 상기 5.1항에 해당하는 서비스를 제공하는 제 3자 서비스 업체를
              포함합니다.<br />
              5) 감사, 재무, 법률 등 전문 자문 업체를 포함합니다. <br />
              6) 법원 명령과 같은 법적 요청에 응하여 회원의 개인 데이터를 요구할
              수 있는 법적 권리가 있는 정부 기관, 규제 기관, 또는 법 집행 기관,
              불법 활동을 조사 또는 보고, 회사의 권리를 행사하거나 변호하는 기관
              등을 포함합니다.<br />
              7) 온라인 지불 서비스 공급자, 신용카드 협회, 신용 평가 기관 및
              인앱 구매 또는 온라인 구매 또는 지불을 위해 필요한 서비스를
              제공하는 기타 제 3자를 포함하되 국한 되지는 않습니다. <br />
              8) 회원의 개인 정보 (회원의 신용 카드에 관한 정보가 포함될 수
              있음)를 통한 사기 행위를 최소화하는 목적을 가지는 사기 방지 회사
              및 신용 평가 회사를 포함할 수 있습니다. <br />
              9) 회사가 소속 된 계열사 또는 관련 회사 및 기업 구조 조정, 합병,
              인수, 합작 투자, 파산, 해산, 재편성 또는 기타 유사한 거래 또는
              진행 과정에서 LITER의 일부 또는 전부의 자산(개인 정보를 포함)을
              판매, 양도, 공유 또는 이와 관련하여 참여할 수 있는 제 3자를
              포함합니다.<br />
              10) 위에 제공된 경우를 제외하고, 회사는 제 3자 또는 계열사에
              회원의 개인 정보를 판매, 임대, 라이센스 또는 공개하지 않습니다.
              회사는 회사의 제 3자 서비스 제공 업체 선택에 신중을 기하며, 상기
              제 3자 서비스 제공 업체 및 상기 계열사는 본 계약상의 의무와 유사한
              (계약 또는 관련 법률에 의거한) 데이터 보호 의무에 구속을 받습니다.{' '}
              <br />
              <br />
              7. 개인 정보를 싱가포르 안 밖으로 전송하는 경우<br />
              7.1. 위 2항에서 6항까지 명시된 활동 및 목적에 따라 싱가포르 안
              밖으로 개인데이터를 전송해야 할 수도 있습니다. 회원은 그러한 개인
              정보의 수신자가 PDPA에 명시된 의무와 유사한 관련 법률 또는 계약상
              의무의 적용을 받는다는 이해 하에 개인 정보의 전송에 회원이
              동의하는 것으로 간주합니다. <br />
              <br />
              8. 회원의 동의<br />
              8.1. 회사가 본 개인 정보 보호 정책에 제공한 정보에 기초하여 회원은
              LITER서비스를 사용함으로써 본 건 2항에서 7항까지 제시된 개인
              정보의 수집, 사용, 보존, 공개 및 양도에 대해 동의하는 것으로
              간주합니다. <br />
              8.2. 회원은 본 개인 정보 보호 정책에 의거하여 회원의 개인 데이터를
              사용, 보유, 공개, 또는 이전에 대한 동의를 언제든지 철회 할 수
              있습니다. 철회 시 데이터 담당자에게 이메일을 보내주십시오. 동의
              철회 시, 회사가 계속 서비스를 제공하지 못하거나, 계약상 제공하기로
              한 의무를 이행 할 수 없음(LITER 서비스의 접근 제한을 포함)을
              알려드립니다. 또한, LITER 서비스에서 제공하는 프로모션 및, 회원이
              LITER 서비스와 관련하여 받거나, 받을 수 있는 혜택이 해지 됨에
              동의하는 것으로 간주합니다. 따라서, 회원의 동의 철회는 회원이
              회사와 가질 수 있는 계약의 해지로 이어지고, 회사를 통해서 연계된
              제 3자 기관 또는 업체에서의 구매와 관련 활동에 대한 제약이 발생할
              수 있습니다. 회원의 동의 철회 시, 데이터 담당자가 이에 대한 내용을
              공지하게 됩니다. <br />
              8.3. LITER 서비스에서 제공하는 알림 또는 이메일을 더 이상 받고
              싶지 않을 경우, 웹에서 알림 수신, 이메일 수신을 철회하시기
              바랍니다. 수신 철회 시, LITER 서비스가 제공하는 이벤트 및 새로운
              소식, 혜택 등에 대한 공지에 제한이 있습니다.<br />
              <br />
              9. 개인 정보의 접근 및 수정<br />
              9.1. 회원의 개인 정보의 접근 및 수정 시에는, 회원의 계정에 로그인
              하시어 일정 부분 직접 수정 가능하거나, 담당자에게 서면 또는
              이메일로 요청 바랍니다. <br />
              9.2. 회원의 개인 정보 수정 및 업데이트 요청에 대해 어떠한 행정
              수수료 또는 기타 요금이 부과되지 않습니다. 그러나, 수정 및
              업데이트 시, 기술적 상황에 따라 일정 시간이 소요 될 수 있음을
              이해하고 동의하는 것으로 간주합니다. <br />
              9.3. 본 개인 정보 보호 정책, 서비스 약관, 회사에 등록된 개인 정보
              또는 개인 정보의 사용, 보유, 공개 또는 이전과 관련하여 더 자세한
              정보를 얻고자 하는 경우, 그리고 기타 질문이나 불만 사항이 있는
              경우, 회사의 데이터 보안 담당자에게 이메일을 보내주십시오. <br />
              help@literproject.com<br />
              <br />
              10. 미성년자의 개인 정보 보호 정책<br />
              회사는 18세 미만의 미성년자가 서비스에 등록하는 것을 허용하지
              않으며, 미성년자의 개인 식별 정보를 고의로 수집하지 않습니다.
              그러나, 서비스에 등록하는 모든 사람들이 18세 이상이라고 확신할 수
              없습니다. 따라서 미성년자가 부모 또는 법적 보호자의 동의 없이
              서비스에 회원 가입 및 이용을 위해 개인 정보를 제공하는 경우, 그로
              인해 발생하는 손실 및 손해에 대한 책임은 해당 미성년자의 부모 또는
              법적 보호자에 있습니다. 만약, 회사가 미성년자의 회원 가입 및
              이용에 필요한 정보를 제공한 사실을 알게 되면, 즉시 해당 정보를
              삭제하고, 모든 계정을 해지합니다. <br />
              <br />
              11. 회사는 업데이트 및 기타 의사 소통을 받기를 원하는 채널과
              관련하여 회원의 선택을 존중합니다. 따라서 회원이 선택하신 채널에서
              알림을 받지 않기를 원하시면, 그에 따라 회사는 알림을 송신하지 않을
              것입니다. 하지만, 알림 수신에 동의를 철회하지 않으시면, 알림
              수신을 계속 원하시는 것으로 알고 보내드리게 됩니다. <br />
              <br />
              12. 개인정보 보호를 위한 보안 대책<br />
              12.1. 회사는 기존의 기술 및 블록체인 기술이 제공하는, 모든 데이터
              호스트 및 서버를 방화벽을 비롯한 합리적인 보안 조치로 LITER
              서비스의 사용자 개인 정보를 보호하는데 최선을 다할 것입니다.{' '}
              <br />
              12.2. 회원의 개인 정보는 안전하게 보관되며 무단 접근 및 공개로부터
              보호됩니다. 회사는 암호화, 잠금 및 접근 제한과 같은 보안 수단을
              사용합니다. 블록체인에 기록될 수 있는 최소한의 개인 정보 중 민감한
              부분은 암호화 하여 저장할 것입니다. 또한 회사에서 내부적으로, 개인
              정보에 대한 접근 역시 공인된 직원에게만 알리도록 제한하는 엄격한
              정책을 가지고 있습니다. <br />
              12.3. 회원의 개인정보가, 서비스의 목적과 활동에 필요한 기간보다
              오래 보관되지 않도록 하고, 이 목적과 활동을 위해 최신의 정보를
              수집할 수 있습니다. <br />
              <br />
              13. 준거법 및 관할권<br />
              본 개인 정보 보호정책의 이용 약관은 싱가포르 법률의 적용을
              받습니다. 본 개인정보 보호정책 및/또는 회원의 LITER 서비스 사용과
              관련하여 분쟁이 발생하는 경우, 먼저 회사의 데이터 보안 담당자에게
              연락하여 우호적인 방법으로 분쟁을 해결할 수 있도록 최선의 노력을
              기울여야 합니다. 회사도 최선을 다해 원만하게 분쟁을 해결하기 위해
              노력할 것입니다. 그러나 30일 이내에 우호적인 해결책이 없으면,
              싱가포르 법원의 독점적 관할에 동의하는 것으로 간주합니다. <br />
            </DialogContentText>
          </DialogContent>
          {/* <Divider /> */}
          <DialogActions className={classes.dialogAction}>
            <BlueButton
              btnType="button"
              // onClickFunc={this.handleopenAgreePop}
              complete={scrollComplate}
              btnName="확인"
              onClickFunc={agreeHandle}
              // onClick={this.submitForm}
            />
            {/* <Button
              className={classes.okBtn}
              onClick={agreeHandle}
              color="secondary"
              disabled={scrollComplate ? false : true}
              autoFocus
            > */}
            {/* {<FormattedMessage {...messages.ok} />} */}
            {/* 확인 */}
            {/* </Button> */}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Privacy);
