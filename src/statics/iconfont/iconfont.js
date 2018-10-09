import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1538273117626'); /* IE9*/
    src: url('./iconfont.eot?t=1538273117626#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1538273117626') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1538273117626#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-aa:before { content: "\e60d"; }

  .icon-maobi:before { content: "\e690"; }

  .icon-aa1:before { content: "\e604"; }

  .icon-pinlun:before { content: "\e64c"; }

  .icon-icon01:before { content: "\e603"; }

  .icon-fangdajing:before { content: "\e614"; }

  .icon-Aa:before { content: "\e636"; }

  .icon-jinqian:before { content: "\e6a5"; }

  .icon-shuaxin:before { content: "\e6b6"; }

  .icon-xin:before { content: "\e660"; }
`;

