import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    background-color: #ffffff;
    -webkit-overflow-scrolling: touch;
  }

  body {    
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'SF Pro Text', 'SF Pro Icons', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    // background-color: #f3f4f6;
    background-color: #ffffff;
    min-height: 100%;
    min-width: 100%;
  }

  #overlay {
    -webkit-overflow-scrolling: touch;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }



  .mdc-line-ripple {
    display: none !important;
  }
  
  .mdc-text-field__input {
    // border-bottom-color: rgba(0,0,0,0.0) !important;
    border-radius: 3 !important;
  }


  .mdc-text-field--box {
    background-color: #fafafa !important;
  }
  .mdc-text-field--box:not(.mdc-text-field--disabled) {
    background-color: #fafafa !important;
  }
  .mdc-text-field--focused {
    color: '#999999' !important;
  }
  
  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {
    background-color: #fafafa !important;
  }
  .mdc-text-field--box::before, .mdc-text-field--box::after {
    background-color: #fafafa !important;
  }

  .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {
    /* color: rgba(98, 0, 238, 0.87); */
    color: #999999 !important;
  }

  .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
    /* color: rgba(98, 0, 238, 0.87); */
    color: #999999 !important;
  }

  .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
    /* color: rgba(98, 0, 238, 0.87); */
    color: #999999 !important;
  }

  .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-text-field__input::-ms-input-placeholder {
    /* color: rgba(98, 0, 238, 0.87); */
    color: #999999 !important;
  }

  .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
    /* color: rgba(98, 0, 238, 0.87); */
    color: #999999 !important;
  }
  div.mdc-text-field--box {
    height: 44px;
    margin-top: 0px;
  }
  .mdc-text-field--box label.mdc-floating-label {
    bottom: 14px;
  }


.Demo__map-maker-icon {
  color: #FD6C6C;
}

.Demo__github-icon {
  font-size: 24px;
}

.Demo__github-link {
  color: #262626;
  font-size: 20px;
}

.Demo__github-link:hover,
.Demo__github-link:active {
  color: #4078c0;
  text-decoration: none;
}

.Demo__suggestion-icon {
  margin-right: 8px;
}

.Demo__search-bar-container {
  width: 90%;
  max-width: 500px;
  margin: 40px auto 0;
}

.Demo__search-input-container {
  position: relative;
}

.Demo__search-input,
.Demo__search-input:focus,
.Demo__search-input:active {
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
  border: honeydew;
  display: block;
  width: 100%;
  padding: 16px;
  font-size: 16px;
  border-radius: 2px;
  outline: none;
}

.Demo__clear-button,
.Demo__clear-button:active,
.Demo__clear-button:focus {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  outline: none;
  font-weight: 600;
  color: #999;
}

.Demo__autocomplete-container {
  position: absolute;
  // position: fixed;
  border-bottom: honeydew;
  border-left: honeydew;
  border-right: honeydew;
  border-top: 1px solid #e6e6e6;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  border-radius: 0 0 2px 2px;
  width: 90%;
  // padding-right: 16px;
  z-index: 10;
}

.Demo__suggestion-item {
  padding: 10px;
  text-align: left;
  background-color: #fff;
  cursor: pointer;
  // width: 100%;
}

.Demo__suggestion-item--active {
  background-color: #fafafa;
  text-align: left;
  padding: 10px;
}

.Demo__dropdown-footer {
  display: flex;
  justify-content: flex-end;
  padding: 4px;
}

.Demo__dropdown-footer-image {
  display: inline-block;
  width: 150px;
}

.Demo__spinner {
  color: #18bc9c;
  font-size: 30px;
}

.Demo__error-message {
  color: red;
}

.Demo__geocode-result-header {
  font-size: 20px;
  color: #222222;
}

@media (max-width: 480px) {
  .autocomplete-container {
    text-align: left;
  }
}

@media (min-width: 768px) {
  .alert {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    -webkit-animation: fadein .75s;
    -moz-animation: fadein .75s;
    -ms-animation: fadein .75s;
    -o-animation: fadein .75s;
    animation: fadein .75s;
  }

  .btn {
    margin-top: 1.5rem;
  }

  .form-group {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    width: 50%;
  }
}

`;
