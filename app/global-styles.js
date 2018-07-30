import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #f3f4f6;
    min-height: 100%;
    min-width: 100%;
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
`;
