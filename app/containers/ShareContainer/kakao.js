import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => {

}

export class KakaoTalk extends React.Component {
    constructor(props) {
        super(props);
    }

    kakaoLinkSend = () => {        
        const result = window.KakaoSend(this.kakaoLinkReceive);        
    }

    kakaoLinkReceive = () => {
        this.props.handleResponse({});
        this.props.handleDialogClose();
    }

    getLocation(pathname) {
        // const path = window.location.protocol + '//' + (window.location.host || window.location.hostname) + pathname;
        // return path;
        return pathname;
    }

    componentDidMount() {
        if(!document.getElementById('KakaoJSSDK')) {
            const scriptKakaoJS = document.createElement('script');
            scriptKakaoJS.id =  "KakaoJSSDK";
            scriptKakaoJS.src = "//developers.kakao.com/sdk/js/kakao.min.js";
            document.body.appendChild(scriptKakaoJS);
        }

        const { title, href, media, review } = this.props;
        const id = "kakaoLink";
        const message = title;
        const pathname = href;

        /* eslint-disable */
        const jsExtCode = `
            function KaKaoInit() {
                Kakao.cleanup();
                Kakao.init('` + process.env.KAKAOTALK_APPID + `');
                console.log('Kakao button initial');
                console.log(Kakao);
            }

            function KakaoSend(cb) {
                Kakao.Link.sendDefault({
                objectType: 'feed',
                content: {
                    title: '` + message + `',
                    imageUrl: '` + this.props.media + `',
                    link: {
                    mobileWebUrl: '` + this.getLocation(pathname) + `',
                    webUrl: '` + this.getLocation(pathname) + `'
                    }
                },
                success: cb,
                });
            }

            (function checkKakao() {
            if (typeof Kakao === 'undefined') { setTimeout(checkKakao, 500); }
            else { KaKaoInit(); }
            })();
        `;

        /* eslint-disable */
        const jsCode = `
            function _callback() {
                console.log("callback");
            }

            function KaKaoInit() {
            Kakao.cleanup();
            Kakao.init('` + process.env.KAKAOTALK_APPID + `');
            console.log('Kakao button initial');
            console.log(Kakao);
            ` + (this.props.media ? `
                Kakao.Link.createDefaultButton({
                container: '#` + id + `',
                objectType: 'feed',
                content: {
                    title: '` + message + `',
                    imageUrl: '` + this.props.media + `',
                    link: {
                    mobileWebUrl: '` + this.getLocation(pathname) + `',
                    webUrl: '` + this.getLocation(pathname) + `'
                    }
                },
                success: _callback,
                });
            ` : `
                Kakao.Link.createDefaultButton({
                container: '#` + id + `',
                objectType: 'text',
                text: '` + message + `',
                link: {
                    mobileWebUrl: '` + this.getLocation(pathname) + `',
                    webUrl: '` + this.getLocation(pathname) + `'
                },
                success: _callback,
                });
            `) +`
            }
            (function checkKakao() {
            if (typeof Kakao === 'undefined') { setTimeout(checkKakao, 500); }
            else { KaKaoInit(); }
            })();
        `;

        /* eslint-enable */
        if (!document.getElementById('KakaoScript')) {
            const scriptKakaoInit = document.createElement('script');
            scriptKakaoInit.id = 'KakaoScript';
            scriptKakaoInit.setAttribute('type', 'text/javascript');
            scriptKakaoInit.text = jsExtCode;
            document.body.appendChild(scriptKakaoInit);
        }
    }

    componentWillUnmount() {
      if (document.getElementById('KakaoScript')) {
        document.body.removeChild(document.getElementById('KakaoScript'));
      }
      if (document.getElementById('KakaoJSSDK')) {
        document.body.removeChild(document.getElementById('KakaoJSSDK'));
      }
    }

    render() {
        return (
            <div>
                <div>
                    <img id="kakaoLink" src={this.props.icon} onClick={this.kakaoLinkSend}/>
                </div>
            </div>
        );
    }
}

KakaoTalk.propTypes = {
    pathname: PropTypes.string,
    getLocation: PropTypes.func,
    message: PropTypes.string,
    media: PropTypes.string,
    id: PropTypes.string,
}

export default withStyles(styles)(KakaoTalk);
