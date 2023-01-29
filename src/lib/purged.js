// eslint-disable-next-line no-unused-vars
const cssStyle = `
/*! Theme created with the Shuffle Editor (https://shuffle.dev) */
/* Bulma Utilities */
.button, .input, .textarea, .select select {
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: none;
  display: inline-flex;
  font-size: 0.75rem;
  height: 3.3em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  position: relative;
  vertical-align: top; }
  .button:focus, .input:focus, .textarea:focus, .select select:focus, .button:active, .input:active, .textarea:active, .select select:active, .is-active.button, .is-active.input, .is-active.textarea, .select select.is-active {
    outline: none; }
  .button[disabled], .input[disabled], .textarea[disabled], .select select[disabled] {
    cursor: not-allowed; }

.button {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.select:not(.is-multiple):not(.is-loading)::after {
  border: 3px solid transparent;
  border-radius: 2px;
  border-right: 0;
  border-top: 0;
  content: " ";
  display: block;
  height: 0.625em;
  margin-top: -0.4375em;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: rotate(-45deg);
  transform-origin: center;
  width: 0.625em; }

.box:not(:last-child), .content:not(:last-child), .title:not(:last-child), .block:not(:last-child), .message:not(:last-child) {
  margin-bottom: 1.5rem; }

.delete {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: rgba(10, 10, 10, 0.2);
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  pointer-events: auto;
  display: inline-block;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 0;
  height: 20px;
  max-height: 20px;
  max-width: 20px;
  min-height: 20px;
  min-width: 20px;
  outline: none;
  position: relative;
  vertical-align: top;
  width: 20px; }
  .delete::before, .delete::after {
    background-color: white;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform-origin: center center; }
  .delete::before {
    height: 2px;
    width: 50%; }
  .delete::after {
    height: 50%;
    width: 2px; }
  .delete:hover, .delete:focus {
    background-color: rgba(10, 10, 10, 0.3); }
  .delete:active {
    background-color: rgba(10, 10, 10, 0.4); }
  .is-medium.delete {
    height: 24px;
    max-height: 24px;
    max-width: 24px;
    min-height: 24px;
    min-width: 24px;
    width: 24px; }
  .is-large.delete {
    height: 32px;
    max-height: 32px;
    max-width: 32px;
    min-height: 32px;
    min-width: 32px;
    width: 32px; }

.button.is-loading::after, .loader, .select.is-loading::after, .control.is-loading::after {
  animation: spinAround 500ms infinite linear;
  border: 2px solid #a4afbb;
  border-radius: 9999px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  position: relative;
  width: 1em; }

/* Bulma Base */
/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
html,
body,
p,
li,
dt,
legend,
textarea,
pre,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0; }

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal; }

button,
input,
select,
textarea {
  margin: 0; }

html {
  box-sizing: border-box; }

*, *::before, *::after {
  box-sizing: inherit; }

img,
video {
  height: auto;
  max-width: 100%; }

html {
  background-color: #f1f5fb;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  min-width: 300px;
  overflow-x: hidden;
  overflow-y: scroll;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%; }


header,
section {
  display: block; }

body,
button,
input,
select,
textarea {
  font-family: "DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; }

code,
pre {
  -moz-osx-font-smoothing: auto;
  -webkit-font-smoothing: auto;
  font-family: monospace; }

body {
  color: #15181c;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5; }

a {
  color: #382cdd;
  cursor: pointer;
  text-decoration: none; }
  a:hover {
    color: #2d23b1; }

code {
  background-color: #f1f5fb;
  color: #c72a18;
  font-size: 0.875em;
  font-weight: normal;
  padding: 0.25em 0.5em 0.25em; }

hr {
  background-color: #f1f5fb;
  border: none;
  display: block;
  height: 2px;
  margin: 1.5rem 0; }

img {
  height: auto;
  max-width: 100%; }

input[type="checkbox"] {
  vertical-align: baseline; }

span {
  font-style: inherit;
  font-weight: inherit; }

pre {
  -webkit-overflow-scrolling: touch;
  background-color: #f1f5fb;
  color: #15181c;
  font-size: 0.875em;
  overflow-x: auto;
  padding: 1.25rem 1.5rem;
  white-space: pre;
  word-wrap: normal; }
  pre code {
    background-color: transparent;
    color: currentColor;
    font-size: 1em;
    padding: 0; }

@keyframes spinAround {
  from {
    transform: rotate(0deg); }
  to {
    transform: rotate(359deg); } }

/* Bulma Elements */
.box {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0px 4px 8px -4px #15181c14;
  color: #15181c;
  display: block;
  padding: 1.25rem; }

a.box:hover, a.box:focus {
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px #382cdd; }

a.box:active {
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #382cdd; }

.button {
  background-color: white;
  border-color: #c2c9d2;
  border-width: 1px;
  color: #15181c;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.9em - 1px);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: calc(0.9em - 1px);
  text-align: center;
  white-space: nowrap; }
  .button .icon, .button .icon.is-medium, .button .icon.is-large {
    height: 1.5em;
    width: 1.5em; }
  .button .icon:first-child:not(:last-child) {
    margin-left: calc(-0.375rem - 1px);
    margin-right: 0.1875rem; }
  .button .icon:last-child:not(:first-child) {
    margin-left: 0.1875rem;
    margin-right: calc(-0.375rem - 1px); }
  .button .icon:first-child:last-child {
    margin-left: calc(-0.375rem - 1px);
    margin-right: calc(-0.375rem - 1px); }
  .button:hover {
    border-color: #2d23b1;
    color: #2d23b1; }
  .button:focus {
    border-color: #2d23b1;
    color: #2d23b1; }
    .button:focus:not(:active) {
      box-shadow: 0 0 0 0.125em rgba(56, 44, 221, 0.25); }
  .button:active, .button.is-active {
    border-color: #2d23b1;
    color: #2d23b1; }
  .button.is-text {
    background-color: transparent;
    border-color: transparent;
    color: #15181c;
    text-decoration: underline; }
    .button.is-text:hover, .button.is-text:focus {
      background-color: #f1f5fb;
      color: #15181c; }
    .button.is-text:active, .button.is-text.is-active {
      background-color: #dde7f5;
      color: #15181c; }
    .button.is-text[disabled] {
      background-color: transparent;
      border-color: transparent;
      box-shadow: none; }
  .button.is-white {
    background-color: white;
    border-color: transparent;
    color: #0a0a0a; }
    .button.is-white:hover {
      background-color: #f9f9f9;
      border-color: transparent;
      color: #0a0a0a; }
    .button.is-white:focus {
      border-color: transparent;
      color: #0a0a0a; }
      .button.is-white:focus:not(:active) {
        box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25); }
    .button.is-white:active, .button.is-white.is-active {
      background-color: #f2f2f2;
      border-color: transparent;
      color: #0a0a0a; }
    .button.is-white[disabled] {
      background-color: white;
      border-color: white;
      box-shadow: none; }
    .button.is-white.is-loading::after {
      border-color: transparent transparent #0a0a0a #0a0a0a !important; }
  .button.is-black {
    background-color: #0a0a0a;
    border-color: transparent;
    color: white; }
    .button.is-black:hover {
      background-color: #040404;
      border-color: transparent;
      color: white; }
    .button.is-black:focus {
      border-color: transparent;
      color: white; }
      .button.is-black:focus:not(:active) {
        box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25); }
    .button.is-black:active, .button.is-black.is-active {
      background-color: black;
      border-color: transparent;
      color: white; }
    .button.is-black[disabled] {
      background-color: #0a0a0a;
      border-color: #0a0a0a;
      box-shadow: none; }
    .button.is-black.is-loading::after {
      border-color: transparent transparent white white !important; }
  .button.is-light {
    background-color: #e1e4e8;
    border-color: transparent;
    color: rgba(0, 0, 0, 0.7); }
    .button.is-light:hover {
      background-color: #dadee2;
      border-color: transparent;
      color: rgba(0, 0, 0, 0.7); }
    .button.is-light:focus {
      border-color: transparent;
      color: rgba(0, 0, 0, 0.7); }
      .button.is-light:focus:not(:active) {
        box-shadow: 0 0 0 0.125em rgba(225, 228, 232, 0.25); }
    .button.is-light:active, .button.is-light.is-active {
      background-color: #d3d7dd;
      border-color: transparent;
      color: rgba(0, 0, 0, 0.7); }
    .button.is-light[disabled] {
      background-color: #e1e4e8;
      border-color: #e1e4e8;
      box-shadow: none; }
    .button.is-light.is-loading::after {
      border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }
  .button.is-primary {
    background-color: #7ebb55;
    border-color: transparent;
    color: #fff; }
    .button.is-primary:hover {
      background-color: #77b74c;
      border-color: transparent;
      color: #fff; }
    .button.is-primary:focus {
      border-color: transparent;
      color: #fff; }
      .button.is-primary:focus:not(:active) {
        box-shadow: 0 0 0 0.125em rgba(126, 187, 85, 0.25); }
    .button.is-primary:active, .button.is-primary.is-active {
      background-color: #71b046;
      border-color: transparent;
      color: #fff; }
    .button.is-primary[disabled] {
      background-color: #7ebb55;
      border-color: #7ebb55;
      box-shadow: none; }
    .button.is-primary.is-loading::after {
      border-color: transparent transparent #fff #fff !important; }
    .button.is-primary.is-light {
      background-color: #f4f9f0;
      color: #4b752f; }
      .button.is-primary.is-light:hover {
        background-color: #edf6e7;
        border-color: transparent;
        color: #4b752f; }
      .button.is-primary.is-light:active, .button.is-primary.is-light.is-active {
        background-color: #e6f2de;
        border-color: transparent;
        color: #4b752f; }
  .button.is-info {
    background-color: #3894c2;
    border-color: transparent;
    color: #fff; }
    .button.is-info:hover {
      background-color: #358cb8;
      border-color: transparent;
      color: #fff; }
    .button.is-info:focus {
      border-color: transparent;
      color: #fff; }
      .button.is-info:focus:not(:active) {
        box-shadow: 0 0 0 0.125em rgba(56, 148, 194, 0.25); }
    .button.is-info:active, .button.is-info.is-active {
      background-color: #3285ae;
      border-color: transparent;
      color: #fff; }
    .button.is-info[disabled] {
      background-color: #3894c2;
      border-color: #3894c2;
      box-shadow: none; }
    .button.is-info.is-loading::after {
      border-color: transparent transparent #fff #fff !important; }
    .button.is-info.is-light {
      background-color: #eff7fa;
      color: #2e799e; }
      .button.is-info.is-light:hover {
        background-color: #e5f1f8;
        border-color: transparent;
        color: #2e799e; }
      .button.is-info.is-light:active, .button.is-info.is-light.is-active {
        background-color: #dbecf5;
        border-color: transparent;
        color: #2e799e; }
  .button.is-warning {
    background-color: #f78a3c;
    border-color: transparent;
    color: #fff; }
    .button.is-warning:hover {
      background-color: #f68330;
      border-color: transparent;
      color: #fff; }
    .button.is-warning:focus {
      border-color: transparent;
      color: #fff; }
      .button.is-warning:focus:not(:active) {
        box-shadow: 0 0 0 0.125em rgba(247, 138, 60, 0.25); }
    .button.is-warning:active, .button.is-warning.is-active {
      background-color: #f67b24;
      border-color: transparent;
      color: #fff; }
    .button.is-warning[disabled] {
      background-color: #f78a3c;
      border-color: #f78a3c;
      box-shadow: none; }
    .button.is-warning.is-loading::after {
      border-color: transparent transparent #fff #fff !important; }
    .button.is-warning.is-light {
      background-color: #fef3eb;
      color: #a74907; }
      .button.is-warning.is-light:hover {
        background-color: #feecdf;
        border-color: transparent;
        color: #a74907; }
      .button.is-warning.is-light:active, .button.is-warning.is-light.is-active {
        background-color: #fde5d3;
        border-color: transparent;
        color: #a74907; }
  .button.is-medium {
    font-size: 1rem; }
  .button.is-large {
    font-size: 1.25rem; }
  .button[disabled] {
    background-color: white;
    border-color: #c2c9d2;
    box-shadow: none;
    opacity: 0.5; }
  .button.is-fullwidth {
    display: flex;
    width: 100%; }
  .button.is-loading {
    color: transparent !important;
    pointer-events: none; }
    .button.is-loading::after {
      position: absolute;
      left: calc(50% - (1em * 0.5));
      top: calc(50% - (1em * 0.5));
      position: absolute !important; }

@media screen and (max-width: 768px) {
  .button.is-responsive {
    font-size: 0.65625rem; }
  .button.is-responsive.is-medium {
    font-size: 0.75rem; }
  .button.is-responsive.is-large {
    font-size: 0.75rem; } }

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .button.is-responsive {
    font-size: 0.75rem; }
  .button.is-responsive.is-medium {
    font-size: 0.75rem; }
  .button.is-responsive.is-large {
    font-size: 1rem; } }

.container {
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto; }
  .container.is-fluid {
    max-width: none !important;
    padding-left: 32px;
    padding-right: 32px;
    width: 100%; }
  @media screen and (min-width: 1024px) {
    .container {
      max-width: 960px; } }
  @media screen and (max-width: 1215px) {
    .container.is-widescreen:not(.is-max-desktop) {
      max-width: 1152px; } }
  @media screen and (min-width: 1216px) {
    .container:not(.is-max-desktop) {
      max-width: 1152px; } }
  @media screen and (min-width: 1408px) {
    .container:not(.is-max-desktop):not(.is-max-widescreen) {
      max-width: 1344px; } }

.content li + li {
  margin-top: 0.25em; }

.content p:not(:last-child),
.content pre:not(:last-child) {
  margin-bottom: 1em; }

.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
  color: #15181c;
  font-weight: 600;
  line-height: 1.125; }

.content h1 {
  font-size: 2em;
  margin-bottom: 0.5em; }
  .content h1:not(:first-child) {
    margin-top: 1em; }

.content h2 {
  font-size: 1.75em;
  margin-bottom: 0.5714em; }
  .content h2:not(:first-child) {
    margin-top: 1.1428em; }

.content h3 {
  font-size: 1.5em;
  margin-bottom: 0.6666em; }
  .content h3:not(:first-child) {
    margin-top: 1.3333em; }

.content h4 {
  font-size: 1.25em;
  margin-bottom: 0.8em; }

.content h5 {
  font-size: 1.125em;
  margin-bottom: 0.8888em; }

.content h6 {
  font-size: 1em;
  margin-bottom: 1em; }

.content pre {
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  padding: 1.25em 1.5em;
  white-space: pre;
  word-wrap: normal; }

.content.is-medium {
  font-size: 1rem; }

.content.is-large {
  font-size: 1.25rem; }

.icon {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem; }
  .icon.is-medium {
    height: 2rem;
    width: 2rem; }
  .icon.is-large {
    height: 3rem;
    width: 3rem; }

.image {
  display: block;
  position: relative; }
  .image img {
    display: block;
    height: auto;
    width: 100%; }
  .image.is-fullwidth {
    width: 100%; }

@keyframes moveIndeterminate {
  from {
    background-position: 200% 0; }
  to {
    background-position: -200% 0; } }

.tag:not(body) {
  align-items: center;
  background-color: #f1f5fb;
  border-radius: 9999px;
  color: #fff;
  display: inline-flex;
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap; }
  .tag:not(body) .delete {
    margin-left: 0.25rem;
    margin-right: -0.375rem; }
  .tag:not(body).is-white {
    background-color: white;
    color: #0a0a0a; }
  .tag:not(body).is-black {
    background-color: #0a0a0a;
    color: white; }
  .tag:not(body).is-light {
    background-color: #e1e4e8;
    color: rgba(0, 0, 0, 0.7); }
  .tag:not(body).is-primary {
    background-color: #7ebb55;
    color: #fff; }
    .tag:not(body).is-primary.is-light {
      background-color: #f4f9f0;
      color: #4b752f; }
  .tag:not(body).is-info {
    background-color: #3894c2;
    color: #fff; }
    .tag:not(body).is-info.is-light {
      background-color: #eff7fa;
      color: #2e799e; }
  .tag:not(body).is-warning {
    background-color: #f78a3c;
    color: #fff; }
    .tag:not(body).is-warning.is-light {
      background-color: #fef3eb;
      color: #a74907; }
  .tag:not(body).is-medium {
    font-size: 0.75rem; }
  .tag:not(body).is-large {
    font-size: 1rem; }
  .tag:not(body) .icon:first-child:not(:last-child) {
    margin-left: -0.375em;
    margin-right: 0.1875em; }
  .tag:not(body) .icon:last-child:not(:first-child) {
    margin-left: 0.1875em;
    margin-right: -0.375em; }
  .tag:not(body) .icon:first-child:last-child {
    margin-left: -0.375em;
    margin-right: -0.375em; }

a.tag:hover {
  text-decoration: underline; }

.title {
  word-break: break-word; }
  .title em,
  .title span {
    font-weight: inherit; }
  .title .tag {
    vertical-align: middle; }

.title {
  color: #15181c;
  font-family: "DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1; }
  .title.is-1 {
    font-size: 3.3rem; }
  .title.is-2 {
    font-size: 3rem; }
  .title.is-3 {
    font-size: 2.5rem; }
  .title.is-4 {
    font-size: 1.25rem; }
  .title.is-5 {
    font-size: 1rem; }
  .title.is-6 {
    font-size: 0.875rem; }
  .title.is-7 {
    font-size: 0.75rem; }

.number {
  align-items: center;
  background-color: #f1f5fb;
  border-radius: 9999px;
  display: inline-flex;
  font-size: 1rem;
  height: 2em;
  justify-content: center;
  margin-right: 1.5rem;
  min-width: 2.5em;
  padding: 0.25rem 0.5rem;
  text-align: center;
  vertical-align: top; }

/* Bulma Form */
.input, .textarea, .select select {
  background-color: white;
  border-color: #c2c9d2;
  border-radius: 0.25rem;
  color: #15181c; }
  .input::-moz-placeholder, .textarea::-moz-placeholder, .select select::-moz-placeholder {
    color: rgba(21, 24, 28, 0.3); }
  .input::-webkit-input-placeholder, .textarea::-webkit-input-placeholder, .select select::-webkit-input-placeholder {
    color: rgba(21, 24, 28, 0.3); }
  .input:-moz-placeholder, .textarea:-moz-placeholder, .select select:-moz-placeholder {
    color: rgba(21, 24, 28, 0.3); }
  .input:-ms-input-placeholder, .textarea:-ms-input-placeholder, .select select:-ms-input-placeholder {
    color: rgba(21, 24, 28, 0.3); }
  .input:hover, .textarea:hover, .select select:hover {
    border-color: #e1e4e8; }
  .input:focus, .textarea:focus, .select select:focus, .input:active, .textarea:active, .select select:active, .is-active.input, .is-active.textarea, .select select.is-active {
    border-color: #382cdd;
    box-shadow: 0 0 0 0.125em rgba(56, 44, 221, 0.25); }
  .input[disabled], .textarea[disabled], .select select[disabled] {
    background-color: #f1f5fb;
    border-color: #f1f5fb;
    box-shadow: none;
    color: #7a7a7a; }
    .input[disabled]::-moz-placeholder, .textarea[disabled]::-moz-placeholder, .select select[disabled]::-moz-placeholder {
      color: rgba(122, 122, 122, 0.3); }
    .input[disabled]::-webkit-input-placeholder, .textarea[disabled]::-webkit-input-placeholder, .select select[disabled]::-webkit-input-placeholder {
      color: rgba(122, 122, 122, 0.3); }
    .input[disabled]:-moz-placeholder, .textarea[disabled]:-moz-placeholder, .select select[disabled]:-moz-placeholder {
      color: rgba(122, 122, 122, 0.3); }
    .input[disabled]:-ms-input-placeholder, .textarea[disabled]:-ms-input-placeholder, .select select[disabled]:-ms-input-placeholder {
      color: rgba(122, 122, 122, 0.3); }

.input, .textarea {
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
  max-width: 100%;
  width: 100%; }
  .is-white.input, .is-white.textarea {
    border-color: white; }
    .is-white.input:focus, .is-white.textarea:focus, .is-white.input:active, .is-white.textarea:active, .is-white.is-active.input, .is-white.is-active.textarea {
      box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25); }
  .is-black.input, .is-black.textarea {
    border-color: #0a0a0a; }
    .is-black.input:focus, .is-black.textarea:focus, .is-black.input:active, .is-black.textarea:active, .is-black.is-active.input, .is-black.is-active.textarea {
      box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25); }
  .is-light.input, .is-light.textarea {
    border-color: #e1e4e8; }
    .is-light.input:focus, .is-light.textarea:focus, .is-light.input:active, .is-light.textarea:active, .is-light.is-active.input, .is-light.is-active.textarea {
      box-shadow: 0 0 0 0.125em rgba(225, 228, 232, 0.25); }
  .is-primary.input, .is-primary.textarea {
    border-color: #7ebb55; }
    .is-primary.input:focus, .is-primary.textarea:focus, .is-primary.input:active, .is-primary.textarea:active, .is-primary.is-active.input, .is-primary.is-active.textarea {
      box-shadow: 0 0 0 0.125em rgba(126, 187, 85, 0.25); }
  .is-info.input, .is-info.textarea {
    border-color: #3894c2; }
    .is-info.input:focus, .is-info.textarea:focus, .is-info.input:active, .is-info.textarea:active, .is-info.is-active.input, .is-info.is-active.textarea {
      box-shadow: 0 0 0 0.125em rgba(56, 148, 194, 0.25); }
  .is-warning.input, .is-warning.textarea {
    border-color: #f78a3c; }
    .is-warning.input:focus, .is-warning.textarea:focus, .is-warning.input:active, .is-warning.textarea:active, .is-warning.is-active.input, .is-warning.is-active.textarea {
      box-shadow: 0 0 0 0.125em rgba(247, 138, 60, 0.25); }
  .is-medium.input, .is-medium.textarea {
    font-size: 1rem; }
  .is-large.input, .is-large.textarea {
    font-size: 1.25rem; }
  .is-fullwidth.input, .is-fullwidth.textarea {
    display: block;
    width: 100%; }
  .is-inline.input, .is-inline.textarea {
    display: inline;
    width: auto; }

.textarea {
  display: block;
  max-width: 100%;
  min-width: 100%;
  padding: calc(0.75em - 1px);
  resize: vertical; }
  .textarea:not([rows]) {
    max-height: 40em;
    min-height: 8em; }
  .textarea[rows] {
    height: initial; }

.checkbox {
  cursor: pointer;
  display: inline-block;
  line-height: 1.25;
  position: relative; }
  .checkbox input {
    cursor: pointer; }
  .checkbox:hover {
    color: #15181c; }
  .checkbox[disabled],
  .checkbox input[disabled] {
    color: #7a7a7a;
    cursor: not-allowed; }

.select {
  display: inline-block;
  max-width: 100%;
  position: relative;
  vertical-align: top; }
  .select:not(.is-multiple) {
    height: 3.3em; }
  .select:not(.is-multiple):not(.is-loading)::after {
    border-color: #382cdd;
    right: 1.125em;
    z-index: 4; }
  .select select {
    cursor: pointer;
    display: block;
    font-size: 1em;
    max-width: 100%;
    outline: none; }
    .select select::-ms-expand {
      display: none; }
    .select select[disabled]:hover {
      border-color: #f1f5fb; }
    .select select:not([multiple]) {
      padding-right: 2.5em; }
    .select select[multiple] {
      height: auto;
      padding: 0; }
      .select select[multiple] option {
        padding: 0.5em 1em; }
  .select:not(.is-multiple):not(.is-loading):hover::after {
    border-color: #15181c; }
  .select.is-white:not(:hover)::after {
    border-color: white; }
  .select.is-white select {
    border-color: white; }
    .select.is-white select:hover {
      border-color: #f2f2f2; }
    .select.is-white select:focus, .select.is-white select:active, .select.is-white select.is-active {
      box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25); }
  .select.is-black:not(:hover)::after {
    border-color: #0a0a0a; }
  .select.is-black select {
    border-color: #0a0a0a; }
    .select.is-black select:hover {
      border-color: black; }
    .select.is-black select:focus, .select.is-black select:active, .select.is-black select.is-active {
      box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25); }
  .select.is-light:not(:hover)::after {
    border-color: #e1e4e8; }
  .select.is-light select {
    border-color: #e1e4e8; }
    .select.is-light select:hover {
      border-color: #d3d7dd; }
    .select.is-light select:focus, .select.is-light select:active, .select.is-light select.is-active {
      box-shadow: 0 0 0 0.125em rgba(225, 228, 232, 0.25); }
  .select.is-primary:not(:hover)::after {
    border-color: #7ebb55; }
  .select.is-primary select {
    border-color: #7ebb55; }
    .select.is-primary select:hover {
      border-color: #71b046; }
    .select.is-primary select:focus, .select.is-primary select:active, .select.is-primary select.is-active {
      box-shadow: 0 0 0 0.125em rgba(126, 187, 85, 0.25); }
  .select.is-info:not(:hover)::after {
    border-color: #3894c2; }
  .select.is-info select {
    border-color: #3894c2; }
    .select.is-info select:hover {
      border-color: #3285ae; }
    .select.is-info select:focus, .select.is-info select:active, .select.is-info select.is-active {
      box-shadow: 0 0 0 0.125em rgba(56, 148, 194, 0.25); }
  .select.is-warning:not(:hover)::after {
    border-color: #f78a3c; }
  .select.is-warning select {
    border-color: #f78a3c; }
    .select.is-warning select:hover {
      border-color: #f67b24; }
    .select.is-warning select:focus, .select.is-warning select:active, .select.is-warning select.is-active {
      box-shadow: 0 0 0 0.125em rgba(247, 138, 60, 0.25); }
  .select.is-medium {
    font-size: 1rem; }
  .select.is-large {
    font-size: 1.25rem; }
  .select.is-fullwidth {
    width: 100%; }
    .select.is-fullwidth select {
      width: 100%; }
  .select.is-loading::after {
    margin-top: 0;
    position: absolute;
    right: 0.625em;
    top: 0.625em;
    transform: none; }
  .select.is-loading.is-medium:after {
    font-size: 1rem; }
  .select.is-loading.is-large:after {
    font-size: 1.25rem; }

.label {
  color: #15181c;
  display: block;
  font-size: 0.75rem;
  font-weight: 700; }
  .label:not(:last-child) {
    margin-bottom: 0.5em; }
  .label.is-medium {
    font-size: 1rem; }
  .label.is-large {
    font-size: 1.25rem; }

.help {
  display: block;
  font-size: 0.75rem;
  margin-top: 0.25rem; }
  .help.is-white {
    color: white; }
  .help.is-black {
    color: #0a0a0a; }
  .help.is-light {
    color: #e1e4e8; }
  .help.is-primary {
    color: #7ebb55; }
  .help.is-info {
    color: #3894c2; }
  .help.is-warning {
    color: #f78a3c; }

.field:not(:last-child) {
  margin-bottom: 0.75rem; }

.control {
  box-sizing: border-box;
  clear: both;
  font-size: 0.75rem;
  position: relative;
  text-align: inherit; }
  .control.is-loading::after {
    position: absolute !important;
    right: 0.625em;
    top: 0.625em;
    z-index: 4; }
  .control.is-loading.is-medium:after {
    font-size: 1rem; }
  .control.is-loading.is-large:after {
    font-size: 1.25rem; }

/* Bulma Components */

.dropdown-item {
  color: #15181c;
  display: block;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 0.375rem 1rem;
  position: relative; }

a.dropdown-item,
button.dropdown-item {
  padding-right: 3rem;
  text-align: inherit;
  white-space: nowrap;
  width: 100%; }
  a.dropdown-item:hover,
  button.dropdown-item:hover {
    background-color: #f1f5fb;
    color: #0a0a0a; }
  a.dropdown-item.is-active,
  button.dropdown-item.is-active {
    background-color: #382cdd;
    color: #fff; }

.media {
  align-items: flex-start;
  display: flex;
  text-align: inherit; }
  .media .content:not(:last-child) {
    margin-bottom: 0.75rem; }
  .media .media {
    border-top: 1px solid rgba(194, 201, 210, 0.5);
    display: flex;
    padding-top: 0.75rem; }
    .media .media .content:not(:last-child),
    .media .media .control:not(:last-child) {
      margin-bottom: 0.5rem; }
    .media .media .media {
      padding-top: 0.5rem; }
      .media .media .media + .media {
        margin-top: 0.5rem; }
  .media + .media {
    border-top: 1px solid rgba(194, 201, 210, 0.5);
    margin-top: 1rem;
    padding-top: 1rem; }
  .media.is-large + .media {
    margin-top: 1.5rem;
    padding-top: 1.5rem; }

.menu {
  font-size: 0.75rem; }
  .menu.is-medium {
    font-size: 1rem; }
  .menu.is-large {
    font-size: 1.25rem; }

.message {
  background-color: #f1f5fb;
  border-radius: 0.25rem;
  font-size: 0.75rem; }
  .message a:not(.button):not(.tag):not(.dropdown-item) {
    color: currentColor;
    text-decoration: underline; }
  .message.is-medium {
    font-size: 1rem; }
  .message.is-large {
    font-size: 1.25rem; }
  .message.is-white {
    background-color: white; }
  .message.is-black {
    background-color: #fafafa; }
  .message.is-light {
    background-color: #f9fafb; }
  .message.is-primary {
    background-color: #f4f9f0; }
  .message.is-info {
    background-color: #eff7fa; }
  .message.is-warning {
    background-color: #fef3eb; }

/* Bulma Grid */
.column {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem; }
  .columns.is-mobile > .column.is-0 {
    flex: none;
    width: 0%; }
  .columns.is-mobile > .column.is-offset-0 {
    margin-left: 0%; }
  .columns.is-mobile > .column.is-1 {
    flex: none;
    width: 8.33333%; }
  .columns.is-mobile > .column.is-offset-1 {
    margin-left: 8.33333%; }
  .columns.is-mobile > .column.is-2 {
    flex: none;
    width: 16.66667%; }
  .columns.is-mobile > .column.is-offset-2 {
    margin-left: 16.66667%; }
  .columns.is-mobile > .column.is-3 {
    flex: none;
    width: 25%; }
  .columns.is-mobile > .column.is-offset-3 {
    margin-left: 25%; }
  .columns.is-mobile > .column.is-4 {
    flex: none;
    width: 33.33333%; }
  .columns.is-mobile > .column.is-offset-4 {
    margin-left: 33.33333%; }
  .columns.is-mobile > .column.is-5 {
    flex: none;
    width: 41.66667%; }
  .columns.is-mobile > .column.is-offset-5 {
    margin-left: 41.66667%; }
  .columns.is-mobile > .column.is-6 {
    flex: none;
    width: 50%; }
  .columns.is-mobile > .column.is-offset-6 {
    margin-left: 50%; }
  .columns.is-mobile > .column.is-7 {
    flex: none;
    width: 58.33333%; }
  .columns.is-mobile > .column.is-offset-7 {
    margin-left: 58.33333%; }
  .columns.is-mobile > .column.is-8 {
    flex: none;
    width: 66.66667%; }
  .columns.is-mobile > .column.is-offset-8 {
    margin-left: 66.66667%; }
  .columns.is-mobile > .column.is-9 {
    flex: none;
    width: 75%; }
  .columns.is-mobile > .column.is-offset-9 {
    margin-left: 75%; }
  .columns.is-mobile > .column.is-10 {
    flex: none;
    width: 83.33333%; }
  .columns.is-mobile > .column.is-offset-10 {
    margin-left: 83.33333%; }
  .columns.is-mobile > .column.is-11 {
    flex: none;
    width: 91.66667%; }
  .columns.is-mobile > .column.is-offset-11 {
    margin-left: 91.66667%; }
  .columns.is-mobile > .column.is-12 {
    flex: none;
    width: 100%; }
  .columns.is-mobile > .column.is-offset-12 {
    margin-left: 100%; }
  @media screen and (max-width: 768px) {
    .column.is-0-mobile {
      flex: none;
      width: 0%; }
    .column.is-offset-0-mobile {
      margin-left: 0%; }
    .column.is-1-mobile {
      flex: none;
      width: 8.33333%; }
    .column.is-offset-1-mobile {
      margin-left: 8.33333%; }
    .column.is-2-mobile {
      flex: none;
      width: 16.66667%; }
    .column.is-offset-2-mobile {
      margin-left: 16.66667%; }
    .column.is-3-mobile {
      flex: none;
      width: 25%; }
    .column.is-offset-3-mobile {
      margin-left: 25%; }
    .column.is-4-mobile {
      flex: none;
      width: 33.33333%; }
    .column.is-offset-4-mobile {
      margin-left: 33.33333%; }
    .column.is-5-mobile {
      flex: none;
      width: 41.66667%; }
    .column.is-offset-5-mobile {
      margin-left: 41.66667%; }
    .column.is-6-mobile {
      flex: none;
      width: 50%; }
    .column.is-offset-6-mobile {
      margin-left: 50%; }
    .column.is-7-mobile {
      flex: none;
      width: 58.33333%; }
    .column.is-offset-7-mobile {
      margin-left: 58.33333%; }
    .column.is-8-mobile {
      flex: none;
      width: 66.66667%; }
    .column.is-offset-8-mobile {
      margin-left: 66.66667%; }
    .column.is-9-mobile {
      flex: none;
      width: 75%; }
    .column.is-offset-9-mobile {
      margin-left: 75%; }
    .column.is-10-mobile {
      flex: none;
      width: 83.33333%; }
    .column.is-offset-10-mobile {
      margin-left: 83.33333%; }
    .column.is-11-mobile {
      flex: none;
      width: 91.66667%; }
    .column.is-offset-11-mobile {
      margin-left: 91.66667%; }
    .column.is-12-mobile {
      flex: none;
      width: 100%; }
    .column.is-offset-12-mobile {
      margin-left: 100%; } }
  @media screen and (min-width: 769px), print {
    .column.is-0, .column.is-0-tablet {
      flex: none;
      width: 0%; }
    .column.is-offset-0, .column.is-offset-0-tablet {
      margin-left: 0%; }
    .column.is-1, .column.is-1-tablet {
      flex: none;
      width: 8.33333%; }
    .column.is-offset-1, .column.is-offset-1-tablet {
      margin-left: 8.33333%; }
    .column.is-2, .column.is-2-tablet {
      flex: none;
      width: 16.66667%; }
    .column.is-offset-2, .column.is-offset-2-tablet {
      margin-left: 16.66667%; }
    .column.is-3, .column.is-3-tablet {
      flex: none;
      width: 25%; }
    .column.is-offset-3, .column.is-offset-3-tablet {
      margin-left: 25%; }
    .column.is-4, .column.is-4-tablet {
      flex: none;
      width: 33.33333%; }
    .column.is-offset-4, .column.is-offset-4-tablet {
      margin-left: 33.33333%; }
    .column.is-5, .column.is-5-tablet {
      flex: none;
      width: 41.66667%; }
    .column.is-offset-5, .column.is-offset-5-tablet {
      margin-left: 41.66667%; }
    .column.is-6, .column.is-6-tablet {
      flex: none;
      width: 50%; }
    .column.is-offset-6, .column.is-offset-6-tablet {
      margin-left: 50%; }
    .column.is-7, .column.is-7-tablet {
      flex: none;
      width: 58.33333%; }
    .column.is-offset-7, .column.is-offset-7-tablet {
      margin-left: 58.33333%; }
    .column.is-8, .column.is-8-tablet {
      flex: none;
      width: 66.66667%; }
    .column.is-offset-8, .column.is-offset-8-tablet {
      margin-left: 66.66667%; }
    .column.is-9, .column.is-9-tablet {
      flex: none;
      width: 75%; }
    .column.is-offset-9, .column.is-offset-9-tablet {
      margin-left: 75%; }
    .column.is-10, .column.is-10-tablet {
      flex: none;
      width: 83.33333%; }
    .column.is-offset-10, .column.is-offset-10-tablet {
      margin-left: 83.33333%; }
    .column.is-11, .column.is-11-tablet {
      flex: none;
      width: 91.66667%; }
    .column.is-offset-11, .column.is-offset-11-tablet {
      margin-left: 91.66667%; }
    .column.is-12, .column.is-12-tablet {
      flex: none;
      width: 100%; }
    .column.is-offset-12, .column.is-offset-12-tablet {
      margin-left: 100%; } }
  @media screen and (min-width: 1024px) {
    .column.is-0-desktop {
      flex: none;
      width: 0%; }
    .column.is-offset-0-desktop {
      margin-left: 0%; }
    .column.is-1-desktop {
      flex: none;
      width: 8.33333%; }
    .column.is-offset-1-desktop {
      margin-left: 8.33333%; }
    .column.is-2-desktop {
      flex: none;
      width: 16.66667%; }
    .column.is-offset-2-desktop {
      margin-left: 16.66667%; }
    .column.is-3-desktop {
      flex: none;
      width: 25%; }
    .column.is-offset-3-desktop {
      margin-left: 25%; }
    .column.is-4-desktop {
      flex: none;
      width: 33.33333%; }
    .column.is-offset-4-desktop {
      margin-left: 33.33333%; }
    .column.is-5-desktop {
      flex: none;
      width: 41.66667%; }
    .column.is-offset-5-desktop {
      margin-left: 41.66667%; }
    .column.is-6-desktop {
      flex: none;
      width: 50%; }
    .column.is-offset-6-desktop {
      margin-left: 50%; }
    .column.is-7-desktop {
      flex: none;
      width: 58.33333%; }
    .column.is-offset-7-desktop {
      margin-left: 58.33333%; }
    .column.is-8-desktop {
      flex: none;
      width: 66.66667%; }
    .column.is-offset-8-desktop {
      margin-left: 66.66667%; }
    .column.is-9-desktop {
      flex: none;
      width: 75%; }
    .column.is-offset-9-desktop {
      margin-left: 75%; }
    .column.is-10-desktop {
      flex: none;
      width: 83.33333%; }
    .column.is-offset-10-desktop {
      margin-left: 83.33333%; }
    .column.is-11-desktop {
      flex: none;
      width: 91.66667%; }
    .column.is-offset-11-desktop {
      margin-left: 91.66667%; }
    .column.is-12-desktop {
      flex: none;
      width: 100%; }
    .column.is-offset-12-desktop {
      margin-left: 100%; } }
  @media screen and (min-width: 1216px) {
    .column.is-0-widescreen {
      flex: none;
      width: 0%; }
    .column.is-offset-0-widescreen {
      margin-left: 0%; }
    .column.is-1-widescreen {
      flex: none;
      width: 8.33333%; }
    .column.is-offset-1-widescreen {
      margin-left: 8.33333%; }
    .column.is-2-widescreen {
      flex: none;
      width: 16.66667%; }
    .column.is-offset-2-widescreen {
      margin-left: 16.66667%; }
    .column.is-3-widescreen {
      flex: none;
      width: 25%; }
    .column.is-offset-3-widescreen {
      margin-left: 25%; }
    .column.is-4-widescreen {
      flex: none;
      width: 33.33333%; }
    .column.is-offset-4-widescreen {
      margin-left: 33.33333%; }
    .column.is-5-widescreen {
      flex: none;
      width: 41.66667%; }
    .column.is-offset-5-widescreen {
      margin-left: 41.66667%; }
    .column.is-6-widescreen {
      flex: none;
      width: 50%; }
    .column.is-offset-6-widescreen {
      margin-left: 50%; }
    .column.is-7-widescreen {
      flex: none;
      width: 58.33333%; }
    .column.is-offset-7-widescreen {
      margin-left: 58.33333%; }
    .column.is-8-widescreen {
      flex: none;
      width: 66.66667%; }
    .column.is-offset-8-widescreen {
      margin-left: 66.66667%; }
    .column.is-9-widescreen {
      flex: none;
      width: 75%; }
    .column.is-offset-9-widescreen {
      margin-left: 75%; }
    .column.is-10-widescreen {
      flex: none;
      width: 83.33333%; }
    .column.is-offset-10-widescreen {
      margin-left: 83.33333%; }
    .column.is-11-widescreen {
      flex: none;
      width: 91.66667%; }
    .column.is-offset-11-widescreen {
      margin-left: 91.66667%; }
    .column.is-12-widescreen {
      flex: none;
      width: 100%; }
    .column.is-offset-12-widescreen {
      margin-left: 100%; } }

.columns {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem; }
  .columns:last-child {
    margin-bottom: -0.75rem; }
  .columns:not(:last-child) {
    margin-bottom: calc(1.5rem - 0.75rem); }
  .columns.is-centered {
    justify-content: center; }
  .columns.is-mobile {
    display: flex; }
  .columns.is-multiline {
    flex-wrap: wrap; }
  @media screen and (min-width: 769px), print {
    .columns:not(.is-desktop) {
      display: flex; } }
  @media screen and (min-width: 1024px) {
    .columns.is-desktop {
      display: flex; } }

/* Bulma Helpers */
.has-text-white {
  color: white !important; }

a.has-text-white:hover, a.has-text-white:focus {
  color: #e6e6e6 !important; }

.has-background-white {
  background-color: white !important; }

.has-text-black {
  color: #0a0a0a !important; }

a.has-text-black:hover, a.has-text-black:focus {
  color: black !important; }

.has-background-black {
  background-color: #0a0a0a !important; }

.has-text-light {
  color: #e1e4e8 !important; }

a.has-text-light:hover, a.has-text-light:focus {
  color: #c4cad2 !important; }

.has-background-light {
  background-color: #e1e4e8 !important; }

.has-text-primary {
  color: #7ebb55 !important; }

a.has-text-primary:hover, a.has-text-primary:focus {
  color: #659e3f !important; }

.has-background-primary {
  background-color: #7ebb55 !important; }

.has-text-info {
  color: #3894c2 !important; }

a.has-text-info:hover, a.has-text-info:focus {
  color: #2d769a !important; }

.has-background-info {
  background-color: #3894c2 !important; }

.has-text-info-light {
  color: #eff7fa !important; }

a.has-text-info-light:hover, a.has-text-info-light:focus {
  color: #c8e2ef !important; }

.has-background-info-light {
  background-color: #eff7fa !important; }

.has-text-warning {
  color: #f78a3c !important; }

a.has-text-warning:hover, a.has-text-warning:focus {
  color: #f56d0b !important; }

.has-background-warning {
  background-color: #f78a3c !important; }

.has-text-warning-light {
  color: #fef3eb !important; }

a.has-text-warning-light:hover, a.has-text-warning-light:focus {
  color: #fcd6ba !important; }

.has-background-warning-light {
  background-color: #fef3eb !important; }

.has-text-danger {
  color: #c72a18 !important; }

a.has-text-danger:hover, a.has-text-danger:focus {
  color: #992013 !important; }

.is-flex-wrap-wrap {
  flex-wrap: wrap !important; }

.is-align-content-center {
  align-content: center !important; }

.is-align-items-center {
  align-items: center !important; }

.is-clickable {
  cursor: pointer !important;
  pointer-events: all !important; }

.is-relative {
  position: relative !important; }

.m-auto {
  margin: auto !important; }

.mt-auto {
  margin-top: auto !important; }

.mr-auto {
  margin-right: auto !important; }

.mb-auto {
  margin-bottom: auto !important; }

.ml-auto {
  margin-left: auto !important; }

.mx-auto {
  margin-left: auto !important;
  margin-right: auto !important; }

.m-0 {
  margin: 0px !important; }

.mt-0 {
  margin-top: 0px !important; }

.mr-0 {
  margin-right: 0px !important; }

.mb-0 {
  margin-bottom: 0px !important; }

.ml-0 {
  margin-left: 0px !important; }

.mx-0 {
  margin-left: 0px !important;
  margin-right: 0px !important; }

.my-0 {
  margin-top: 0px !important;
  margin-bottom: 0px !important; }

.m-1 {
  margin: 0.25rem !important; }

.mt-1 {
  margin-top: 0.25rem !important; }

.mr-1 {
  margin-right: 0.25rem !important; }

.mb-1 {
  margin-bottom: 0.25rem !important; }

.ml-1 {
  margin-left: 0.25rem !important; }

.mx-1 {
  margin-left: 0.25rem !important;
  margin-right: 0.25rem !important; }

.m-2 {
  margin: 0.5rem !important; }

.mt-2 {
  margin-top: 0.5rem !important; }

.mr-2 {
  margin-right: 0.5rem !important; }

.mb-2 {
  margin-bottom: 0.5rem !important; }

.ml-2 {
  margin-left: 0.5rem !important; }

.mx-2 {
  margin-left: 0.5rem !important;
  margin-right: 0.5rem !important; }

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important; }

.m-3 {
  margin: 0.75rem !important; }

.mt-3 {
  margin-top: 0.75rem !important; }

.mr-3 {
  margin-right: 0.75rem !important; }

.mb-3 {
  margin-bottom: 0.75rem !important; }

.ml-3 {
  margin-left: 0.75rem !important; }

.mx-3 {
  margin-left: 0.75rem !important;
  margin-right: 0.75rem !important; }

.m-4 {
  margin: 1rem !important; }

.mt-4 {
  margin-top: 1rem !important; }

.mr-4 {
  margin-right: 1rem !important; }

.mb-4 {
  margin-bottom: 1rem !important; }

.ml-4 {
  margin-left: 1rem !important; }

.mx-4 {
  margin-left: 1rem !important;
  margin-right: 1rem !important; }

.m-5 {
  margin: 1.25rem !important; }

.mt-5 {
  margin-top: 1.25rem !important; }

.mr-5 {
  margin-right: 1.25rem !important; }

.mb-5 {
  margin-bottom: 1.25rem !important; }

.ml-5 {
  margin-left: 1.25rem !important; }

.mx-5 {
  margin-left: 1.25rem !important;
  margin-right: 1.25rem !important; }

.m-6 {
  margin: 1.5rem !important; }

.mt-6 {
  margin-top: 1.5rem !important; }

.mr-6 {
  margin-right: 1.5rem !important; }

.mb-6 {
  margin-bottom: 1.5rem !important; }

.ml-6 {
  margin-left: 1.5rem !important; }

.mx-6 {
  margin-left: 1.5rem !important;
  margin-right: 1.5rem !important; }

.my-6 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important; }

.m-7 {
  margin: 1.75rem !important; }

.mt-7 {
  margin-top: 1.75rem !important; }

.mr-7 {
  margin-right: 1.75rem !important; }

.mb-7 {
  margin-bottom: 1.75rem !important; }

.ml-7 {
  margin-left: 1.75rem !important; }

.mx-7 {
  margin-left: 1.75rem !important;
  margin-right: 1.75rem !important; }

.m-8 {
  margin: 2rem !important; }

.mt-8 {
  margin-top: 2rem !important; }

.mr-8 {
  margin-right: 2rem !important; }

.mb-8 {
  margin-bottom: 2rem !important; }

.ml-8 {
  margin-left: 2rem !important; }

.mx-8 {
  margin-left: 2rem !important;
  margin-right: 2rem !important; }

.m-9 {
  margin: 2.25rem !important; }

.mt-9 {
  margin-top: 2.25rem !important; }

.mr-9 {
  margin-right: 2.25rem !important; }

.mb-9 {
  margin-bottom: 2.25rem !important; }

.ml-9 {
  margin-left: 2.25rem !important; }

.mx-9 {
  margin-left: 2.25rem !important;
  margin-right: 2.25rem !important; }

.m-10 {
  margin: 2.5rem !important; }

.mt-10 {
  margin-top: 2.5rem !important; }

.mr-10 {
  margin-right: 2.5rem !important; }

.mb-10 {
  margin-bottom: 2.5rem !important; }

.ml-10 {
  margin-left: 2.5rem !important; }

.mx-10 {
  margin-left: 2.5rem !important;
  margin-right: 2.5rem !important; }

.m-11 {
  margin: 2.75rem !important; }

.mt-11 {
  margin-top: 2.75rem !important; }

.mr-11 {
  margin-right: 2.75rem !important; }

.mb-11 {
  margin-bottom: 2.75rem !important; }

.ml-11 {
  margin-left: 2.75rem !important; }

.mx-11 {
  margin-left: 2.75rem !important;
  margin-right: 2.75rem !important; }

.m-12 {
  margin: 3rem !important; }

.mt-12 {
  margin-top: 3rem !important; }

.mr-12 {
  margin-right: 3rem !important; }

.mb-12 {
  margin-bottom: 3rem !important; }

.ml-12 {
  margin-left: 3rem !important; }

.mx-12 {
  margin-left: 3rem !important;
  margin-right: 3rem !important; }

.m-14 {
  margin: 3.5rem !important; }

.mt-14 {
  margin-top: 3.5rem !important; }

.mr-14 {
  margin-right: 3.5rem !important; }

.mb-14 {
  margin-bottom: 3.5rem !important; }

.ml-14 {
  margin-left: 3.5rem !important; }

.mx-14 {
  margin-left: 3.5rem !important;
  margin-right: 3.5rem !important; }

.m-16 {
  margin: 4rem !important; }

.mt-16 {
  margin-top: 4rem !important; }

.mr-16 {
  margin-right: 4rem !important; }

.mb-16 {
  margin-bottom: 4rem !important; }

.ml-16 {
  margin-left: 4rem !important; }

.mx-16 {
  margin-left: 4rem !important;
  margin-right: 4rem !important; }

.m-20 {
  margin: 5rem !important; }

.mt-20 {
  margin-top: 5rem !important; }

.mr-20 {
  margin-right: 5rem !important; }

.mb-20 {
  margin-bottom: 5rem !important; }

.ml-20 {
  margin-left: 5rem !important; }

.mx-20 {
  margin-left: 5rem !important;
  margin-right: 5rem !important; }

.m-24 {
  margin: 6rem !important; }

.mt-24 {
  margin-top: 6rem !important; }

.mr-24 {
  margin-right: 6rem !important; }

.mb-24 {
  margin-bottom: 6rem !important; }

.ml-24 {
  margin-left: 6rem !important; }

.mx-24 {
  margin-left: 6rem !important;
  margin-right: 6rem !important; }

.m-28 {
  margin: 7rem !important; }

.mt-28 {
  margin-top: 7rem !important; }

.mr-28 {
  margin-right: 7rem !important; }

.mb-28 {
  margin-bottom: 7rem !important; }

.ml-28 {
  margin-left: 7rem !important; }

.mx-28 {
  margin-left: 7rem !important;
  margin-right: 7rem !important; }

.m-32 {
  margin: 8rem !important; }

.mt-32 {
  margin-top: 8rem !important; }

.mr-32 {
  margin-right: 8rem !important; }

.mb-32 {
  margin-bottom: 8rem !important; }

.ml-32 {
  margin-left: 8rem !important; }

.mx-32 {
  margin-left: 8rem !important;
  margin-right: 8rem !important; }

.p-auto {
  padding: auto !important; }

.px-auto {
  padding-left: auto !important;
  padding-right: auto !important; }

.py-auto {
  padding-top: auto !important;
  padding-bottom: auto !important; }

.p-0 {
  padding: 0px !important; }

.px-0 {
  padding-left: 0px !important;
  padding-right: 0px !important; }

.py-0 {
  padding-top: 0px !important;
  padding-bottom: 0px !important; }

.p-1 {
  padding: 0.25rem !important; }

.px-1 {
  padding-left: 0.25rem !important;
  padding-right: 0.25rem !important; }

.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important; }

.p-2 {
  padding: 0.5rem !important; }

.px-2 {
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important; }

.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important; }

.p-3 {
  padding: 0.75rem !important; }

.px-3 {
  padding-left: 0.75rem !important;
  padding-right: 0.75rem !important; }

.py-3 {
  padding-top: 0.75rem !important;
  padding-bottom: 0.75rem !important; }

.p-4 {
  padding: 1rem !important; }

.pb-4 {
  padding-bottom: 1rem !important; }

.px-4 {
  padding-left: 1rem !important;
  padding-right: 1rem !important; }

.py-4 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important; }

.p-5 {
  padding: 1.25rem !important; }

.px-5 {
  padding-left: 1.25rem !important;
  padding-right: 1.25rem !important; }

.py-5 {
  padding-top: 1.25rem !important;
  padding-bottom: 1.25rem !important; }

.p-6 {
  padding: 1.5rem !important; }

.px-6 {
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important; }

.py-6 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important; }

.p-7 {
  padding: 1.75rem !important; }

.px-7 {
  padding-left: 1.75rem !important;
  padding-right: 1.75rem !important; }

.py-7 {
  padding-top: 1.75rem !important;
  padding-bottom: 1.75rem !important; }

.p-8 {
  padding: 2rem !important; }

.px-8 {
  padding-left: 2rem !important;
  padding-right: 2rem !important; }

.py-8 {
  padding-top: 2rem !important;
  padding-bottom: 2rem !important; }

.p-9 {
  padding: 2.25rem !important; }

.px-9 {
  padding-left: 2.25rem !important;
  padding-right: 2.25rem !important; }

.py-9 {
  padding-top: 2.25rem !important;
  padding-bottom: 2.25rem !important; }

.p-10 {
  padding: 2.5rem !important; }

.px-10 {
  padding-left: 2.5rem !important;
  padding-right: 2.5rem !important; }

.py-10 {
  padding-top: 2.5rem !important;
  padding-bottom: 2.5rem !important; }

.p-11 {
  padding: 2.75rem !important; }

.px-11 {
  padding-left: 2.75rem !important;
  padding-right: 2.75rem !important; }

.py-11 {
  padding-top: 2.75rem !important;
  padding-bottom: 2.75rem !important; }

.p-12 {
  padding: 3rem !important; }

.px-12 {
  padding-left: 3rem !important;
  padding-right: 3rem !important; }

.py-12 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important; }

.p-14 {
  padding: 3.5rem !important; }

.px-14 {
  padding-left: 3.5rem !important;
  padding-right: 3.5rem !important; }

.py-14 {
  padding-top: 3.5rem !important;
  padding-bottom: 3.5rem !important; }

.p-16 {
  padding: 4rem !important; }

.px-16 {
  padding-left: 4rem !important;
  padding-right: 4rem !important; }

.py-16 {
  padding-top: 4rem !important;
  padding-bottom: 4rem !important; }

.p-20 {
  padding: 5rem !important; }

.px-20 {
  padding-left: 5rem !important;
  padding-right: 5rem !important; }

.py-20 {
  padding-top: 5rem !important;
  padding-bottom: 5rem !important; }

.p-24 {
  padding: 6rem !important; }

.px-24 {
  padding-left: 6rem !important;
  padding-right: 6rem !important; }

.py-24 {
  padding-top: 6rem !important;
  padding-bottom: 6rem !important; }

.p-28 {
  padding: 7rem !important; }

.px-28 {
  padding-left: 7rem !important;
  padding-right: 7rem !important; }

.py-28 {
  padding-top: 7rem !important;
  padding-bottom: 7rem !important; }

.p-32 {
  padding: 8rem !important; }

.px-32 {
  padding-left: 8rem !important;
  padding-right: 8rem !important; }

.py-32 {
  padding-top: 8rem !important;
  padding-bottom: 8rem !important; }

.is-size-1 {
  font-size: 3.3rem !important; }

.is-size-2 {
  font-size: 3rem !important; }

.is-size-3 {
  font-size: 2.5rem !important; }

.is-size-4 {
  font-size: 1.25rem !important; }

.is-size-5 {
  font-size: 1rem !important; }

.is-size-6 {
  font-size: 0.875rem !important; }

.is-size-7 {
  font-size: 0.75rem !important; }

@media screen and (max-width: 768px) {
  .is-size-1-mobile {
    font-size: 3.3rem !important; }
  .is-size-2-mobile {
    font-size: 3rem !important; }
  .is-size-3-mobile {
    font-size: 2.5rem !important; }
  .is-size-4-mobile {
    font-size: 1.25rem !important; }
  .is-size-5-mobile {
    font-size: 1rem !important; }
  .is-size-6-mobile {
    font-size: 0.875rem !important; }
  .is-size-7-mobile {
    font-size: 0.75rem !important; } }

@media screen and (min-width: 769px), print {
  .is-size-1-tablet {
    font-size: 3.3rem !important; }
  .is-size-2-tablet {
    font-size: 3rem !important; }
  .is-size-3-tablet {
    font-size: 2.5rem !important; }
  .is-size-4-tablet {
    font-size: 1.25rem !important; }
  .is-size-5-tablet {
    font-size: 1rem !important; }
  .is-size-6-tablet {
    font-size: 0.875rem !important; }
  .is-size-7-tablet {
    font-size: 0.75rem !important; } }

@media screen and (min-width: 1024px) {
  .is-size-1-desktop {
    font-size: 3.3rem !important; }
  .is-size-2-desktop {
    font-size: 3rem !important; }
  .is-size-3-desktop {
    font-size: 2.5rem !important; }
  .is-size-4-desktop {
    font-size: 1.25rem !important; }
  .is-size-5-desktop {
    font-size: 1rem !important; }
  .is-size-6-desktop {
    font-size: 0.875rem !important; }
  .is-size-7-desktop {
    font-size: 0.75rem !important; } }

@media screen and (min-width: 1216px) {
  .is-size-1-widescreen {
    font-size: 3.3rem !important; }
  .is-size-2-widescreen {
    font-size: 3rem !important; }
  .is-size-3-widescreen {
    font-size: 2.5rem !important; }
  .is-size-4-widescreen {
    font-size: 1.25rem !important; }
  .is-size-5-widescreen {
    font-size: 1rem !important; }
  .is-size-6-widescreen {
    font-size: 0.875rem !important; }
  .is-size-7-widescreen {
    font-size: 0.75rem !important; } }

.has-text-centered {
  text-align: center !important; }

.has-text-left {
  text-align: left !important; }

.has-text-right {
  text-align: right !important; }

@media screen and (max-width: 768px) {
  .has-text-centered-mobile {
    text-align: center !important; } }

@media screen and (min-width: 769px), print {
  .has-text-centered-tablet {
    text-align: center !important; } }

@media screen and (min-width: 1024px) {
  .has-text-centered-desktop {
    text-align: center !important; } }

@media screen and (min-width: 1216px) {
  .has-text-centered-widescreen {
    text-align: center !important; } }

@media screen and (max-width: 768px) {
  .has-text-left-mobile {
    text-align: left !important; } }

@media screen and (min-width: 769px), print {
  .has-text-left-tablet {
    text-align: left !important; } }

@media screen and (min-width: 1024px) {
  .has-text-left-desktop {
    text-align: left !important; } }

@media screen and (min-width: 1216px) {
  .has-text-left-widescreen {
    text-align: left !important; } }

@media screen and (max-width: 768px) {
  .has-text-right-mobile {
    text-align: right !important; } }

@media screen and (min-width: 769px), print {
  .has-text-right-tablet {
    text-align: right !important; } }

@media screen and (min-width: 1024px) {
  .has-text-right-desktop {
    text-align: right !important; } }

@media screen and (min-width: 1216px) {
  .has-text-right-widescreen {
    text-align: right !important; } }

.is-uppercase {
  text-transform: uppercase !important; }

.is-underlined {
  text-decoration: underline !important; }

.has-text-weight-light {
  font-weight: 300 !important; }

.has-text-weight-medium {
  font-weight: 500 !important; }

.has-text-weight-semibold {
  font-weight: 600 !important; }

.has-text-weight-bold {
  font-weight: 700 !important; }

.is-flex {
  display: flex !important; }

@media screen and (max-width: 768px) {
  .is-flex-mobile {
    display: flex !important; } }

@media screen and (min-width: 769px), print {
  .is-flex-tablet {
    display: flex !important; } }

@media screen and (min-width: 1024px) {
  .is-flex-desktop {
    display: flex !important; } }

@media screen and (min-width: 1216px) {
  .is-flex-widescreen {
    display: flex !important; } }

.is-inline {
  display: inline !important; }

@media screen and (max-width: 768px) {
  .is-inline-mobile {
    display: inline !important; } }

@media screen and (min-width: 769px), print {
  .is-inline-tablet {
    display: inline !important; } }

@media screen and (min-width: 1024px) {
  .is-inline-desktop {
    display: inline !important; } }

@media screen and (min-width: 1216px) {
  .is-inline-widescreen {
    display: inline !important; } }

.is-inline-flex {
  display: inline-flex !important; }

@media screen and (max-width: 768px) {
  .is-inline-flex-mobile {
    display: inline-flex !important; } }

@media screen and (min-width: 769px), print {
  .is-inline-flex-tablet {
    display: inline-flex !important; } }

@media screen and (min-width: 1024px) {
  .is-inline-flex-desktop {
    display: inline-flex !important; } }

@media screen and (min-width: 1216px) {
  .is-inline-flex-widescreen {
    display: inline-flex !important; } }

.is-hidden {
  display: none !important; }

@media screen and (max-width: 768px) {
  .is-hidden-mobile {
    display: none !important; } }

@media screen and (min-width: 769px), print {
  .is-hidden-tablet {
    display: none !important; } }

@media screen and (min-width: 1024px) {
  .is-hidden-desktop {
    display: none !important; } }

@media screen and (min-width: 1216px) {
  .is-hidden-widescreen {
    display: none !important; } }

/* Bulma Layout */

.section {
  padding: 2rem 1.5rem; }
  @media screen and (min-width: 1024px) {
    .section {
      padding: 2rem 3rem; }
      .section.is-medium {
        padding: 9rem 4.5rem; }
      .section.is-large {
        padding: 18rem 6rem; } }

.is-absolute {
  position: absolute; }

.is-relative {
  position: relative; }

.is-top-0 {
  top: 0; }

.is-right-0 {
  right: 0; }

.is-bottom-0 {
  bottom: 0; }

.is-left-0 {
  left: 0; }

.box {
  border-width: 0;
  border-color: #c2c9d2;
  border-style: solid; }

.button {
  font-weight: 500; }

.-m-1 {
  margin: -0.25rem !important; }

.-mt-1 {
  margin-top: -0.25rem !important; }

.-mr-1 {
  margin-right: -0.25rem !important; }

.-mb-1 {
  margin-bottom: -0.25rem !important; }

.-ml-1 {
  margin-left: -0.25rem !important; }

.-mx-1 {
  margin-left: -0.25rem !important;
  margin-right: -0.25rem !important; }

.-m-2 {
  margin: -0.5rem !important; }

.-mt-2 {
  margin-top: -0.5rem !important; }

.-mr-2 {
  margin-right: -0.5rem !important; }

.-mb-2 {
  margin-bottom: -0.5rem !important; }

.-ml-2 {
  margin-left: -0.5rem !important; }

.-mx-2 {
  margin-left: -0.5rem !important;
  margin-right: -0.5rem !important; }

.-m-3 {
  margin: -0.75rem !important; }

.-mt-3 {
  margin-top: -0.75rem !important; }

.-mr-3 {
  margin-right: -0.75rem !important; }

.-mb-3 {
  margin-bottom: -0.75rem !important; }

.-ml-3 {
  margin-left: -0.75rem !important; }

.-mx-3 {
  margin-left: -0.75rem !important;
  margin-right: -0.75rem !important; }

.-m-4 {
  margin: -1rem !important; }

.-mt-4 {
  margin-top: -1rem !important; }

.-mr-4 {
  margin-right: -1rem !important; }

.-mb-4 {
  margin-bottom: -1rem !important; }

.-ml-4 {
  margin-left: -1rem !important; }

.-mx-4 {
  margin-left: -1rem !important;
  margin-right: -1rem !important; }

.-m-5 {
  margin: -1.25rem !important; }

.-mt-5 {
  margin-top: -1.25rem !important; }

.-mr-5 {
  margin-right: -1.25rem !important; }

.-mb-5 {
  margin-bottom: -1.25rem !important; }

.-ml-5 {
  margin-left: -1.25rem !important; }

.-mx-5 {
  margin-left: -1.25rem !important;
  margin-right: -1.25rem !important; }

.-m-6 {
  margin: -1.5rem !important; }

.-mt-6 {
  margin-top: -1.5rem !important; }

.-mr-6 {
  margin-right: -1.5rem !important; }

.-mb-6 {
  margin-bottom: -1.5rem !important; }

.-ml-6 {
  margin-left: -1.5rem !important; }

.-mx-6 {
  margin-left: -1.5rem !important;
  margin-right: -1.5rem !important; }

.-m-7 {
  margin: -1.75rem !important; }

.-mt-7 {
  margin-top: -1.75rem !important; }

.-mr-7 {
  margin-right: -1.75rem !important; }

.-mb-7 {
  margin-bottom: -1.75rem !important; }

.-ml-7 {
  margin-left: -1.75rem !important; }

.-mx-7 {
  margin-left: -1.75rem !important;
  margin-right: -1.75rem !important; }

.-m-8 {
  margin: -2rem !important; }

.-mt-8 {
  margin-top: -2rem !important; }

.-mr-8 {
  margin-right: -2rem !important; }

.-mb-8 {
  margin-bottom: -2rem !important; }

.-ml-8 {
  margin-left: -2rem !important; }

.-mx-8 {
  margin-left: -2rem !important;
  margin-right: -2rem !important; }

.-m-9 {
  margin: -2.25rem !important; }

.-mt-9 {
  margin-top: -2.25rem !important; }

.-mr-9 {
  margin-right: -2.25rem !important; }

.-mb-9 {
  margin-bottom: -2.25rem !important; }

.-ml-9 {
  margin-left: -2.25rem !important; }

.-mx-9 {
  margin-left: -2.25rem !important;
  margin-right: -2.25rem !important; }

.-m-10 {
  margin: -2.5rem !important; }

.-mt-10 {
  margin-top: -2.5rem !important; }

.-mr-10 {
  margin-right: -2.5rem !important; }

.-mb-10 {
  margin-bottom: -2.5rem !important; }

.-ml-10 {
  margin-left: -2.5rem !important; }

.-mx-10 {
  margin-left: -2.5rem !important;
  margin-right: -2.5rem !important; }

.-m-11 {
  margin: -2.75rem !important; }

.-mt-11 {
  margin-top: -2.75rem !important; }

.-mr-11 {
  margin-right: -2.75rem !important; }

.-mb-11 {
  margin-bottom: -2.75rem !important; }

.-ml-11 {
  margin-left: -2.75rem !important; }

.-mx-11 {
  margin-left: -2.75rem !important;
  margin-right: -2.75rem !important; }

.-m-12 {
  margin: -3rem !important; }

.-mt-12 {
  margin-top: -3rem !important; }

.-mr-12 {
  margin-right: -3rem !important; }

.-mb-12 {
  margin-bottom: -3rem !important; }

.-ml-12 {
  margin-left: -3rem !important; }

.-mx-12 {
  margin-left: -3rem !important;
  margin-right: -3rem !important; }

.-m-14 {
  margin: -3.5rem !important; }

.-mt-14 {
  margin-top: -3.5rem !important; }

.-mr-14 {
  margin-right: -3.5rem !important; }

.-mb-14 {
  margin-bottom: -3.5rem !important; }

.-ml-14 {
  margin-left: -3.5rem !important; }

.-mx-14 {
  margin-left: -3.5rem !important;
  margin-right: -3.5rem !important; }

.-m-16 {
  margin: -4rem !important; }

.-mt-16 {
  margin-top: -4rem !important; }

.-mr-16 {
  margin-right: -4rem !important; }

.-mb-16 {
  margin-bottom: -4rem !important; }

.-ml-16 {
  margin-left: -4rem !important; }

.-mx-16 {
  margin-left: -4rem !important;
  margin-right: -4rem !important; }

.-m-20 {
  margin: -5rem !important; }

.-mt-20 {
  margin-top: -5rem !important; }

.-mr-20 {
  margin-right: -5rem !important; }

.-mb-20 {
  margin-bottom: -5rem !important; }

.-ml-20 {
  margin-left: -5rem !important; }

.-mx-20 {
  margin-left: -5rem !important;
  margin-right: -5rem !important; }

.-m-24 {
  margin: -6rem !important; }

.-mt-24 {
  margin-top: -6rem !important; }

.-mr-24 {
  margin-right: -6rem !important; }

.-mb-24 {
  margin-bottom: -6rem !important; }

.-ml-24 {
  margin-left: -6rem !important; }

.-mx-24 {
  margin-left: -6rem !important;
  margin-right: -6rem !important; }

.-m-28 {
  margin: -7rem !important; }

.-mt-28 {
  margin-top: -7rem !important; }

.-mr-28 {
  margin-right: -7rem !important; }

.-mb-28 {
  margin-bottom: -7rem !important; }

.-ml-28 {
  margin-left: -7rem !important; }

.-mx-28 {
  margin-left: -7rem !important;
  margin-right: -7rem !important; }

.-m-32 {
  margin: -8rem !important; }

.-mt-32 {
  margin-top: -8rem !important; }

.-mr-32 {
  margin-right: -8rem !important; }

.-mb-32 {
  margin-bottom: -8rem !important; }

.-ml-32 {
  margin-left: -8rem !important; }

.-mx-32 {
  margin-left: -8rem !important;
  margin-right: -8rem !important; }

@media screen and (max-width: 768px) {
  .mt-auto-mobile {
    margin-top: auto !important; }
  .mr-auto-mobile {
    margin-right: auto !important; }
  .mb-auto-mobile {
    margin-bottom: auto !important; }
  .ml-auto-mobile {
    margin-left: auto !important; }
  .mx-auto-mobile {
    margin-left: auto !important;
    margin-right: auto !important; }
  .mt-0-mobile {
    margin-top: 0px !important; }
  .mr-0-mobile {
    margin-right: 0px !important; }
  .mb-0-mobile {
    margin-bottom: 0px !important; }
  .ml-0-mobile {
    margin-left: 0px !important; }
  .mx-0-mobile {
    margin-left: 0px !important;
    margin-right: 0px !important; }
  .mt-1-mobile {
    margin-top: 0.25rem !important; }
  .-mt-1-mobile {
    margin-top: -0.25rem !important; }
  .mr-1-mobile {
    margin-right: 0.25rem !important; }
  .-mr-1-mobile {
    margin-right: -0.25rem !important; }
  .mb-1-mobile {
    margin-bottom: 0.25rem !important; }
  .-mb-1-mobile {
    margin-bottom: -0.25rem !important; }
  .ml-1-mobile {
    margin-left: 0.25rem !important; }
  .-ml-1-mobile {
    margin-left: -0.25rem !important; }
  .mx-1-mobile {
    margin-left: 0.25rem !important;
    margin-right: 0.25rem !important; }
  .-mx-1-mobile {
    margin-left: -0.25rem !important;
    margin-right: -0.25rem !important; }
  .mt-2-mobile {
    margin-top: 0.5rem !important; }
  .-mt-2-mobile {
    margin-top: -0.5rem !important; }
  .mr-2-mobile {
    margin-right: 0.5rem !important; }
  .-mr-2-mobile {
    margin-right: -0.5rem !important; }
  .mb-2-mobile {
    margin-bottom: 0.5rem !important; }
  .-mb-2-mobile {
    margin-bottom: -0.5rem !important; }
  .ml-2-mobile {
    margin-left: 0.5rem !important; }
  .-ml-2-mobile {
    margin-left: -0.5rem !important; }
  .mx-2-mobile {
    margin-left: 0.5rem !important;
    margin-right: 0.5rem !important; }
  .-mx-2-mobile {
    margin-left: -0.5rem !important;
    margin-right: -0.5rem !important; }
  .mt-3-mobile {
    margin-top: 0.75rem !important; }
  .-mt-3-mobile {
    margin-top: -0.75rem !important; }
  .mr-3-mobile {
    margin-right: 0.75rem !important; }
  .-mr-3-mobile {
    margin-right: -0.75rem !important; }
  .mb-3-mobile {
    margin-bottom: 0.75rem !important; }
  .-mb-3-mobile {
    margin-bottom: -0.75rem !important; }
  .ml-3-mobile {
    margin-left: 0.75rem !important; }
  .-ml-3-mobile {
    margin-left: -0.75rem !important; }
  .mx-3-mobile {
    margin-left: 0.75rem !important;
    margin-right: 0.75rem !important; }
  .-mx-3-mobile {
    margin-left: -0.75rem !important;
    margin-right: -0.75rem !important; }
  .mt-4-mobile {
    margin-top: 1rem !important; }
  .-mt-4-mobile {
    margin-top: -1rem !important; }
  .mr-4-mobile {
    margin-right: 1rem !important; }
  .-mr-4-mobile {
    margin-right: -1rem !important; }
  .mb-4-mobile {
    margin-bottom: 1rem !important; }
  .-mb-4-mobile {
    margin-bottom: -1rem !important; }
  .ml-4-mobile {
    margin-left: 1rem !important; }
  .-ml-4-mobile {
    margin-left: -1rem !important; }
  .mx-4-mobile {
    margin-left: 1rem !important;
    margin-right: 1rem !important; }
  .-mx-4-mobile {
    margin-left: -1rem !important;
    margin-right: -1rem !important; }
  .mt-5-mobile {
    margin-top: 1.25rem !important; }
  .-mt-5-mobile {
    margin-top: -1.25rem !important; }
  .mr-5-mobile {
    margin-right: 1.25rem !important; }
  .-mr-5-mobile {
    margin-right: -1.25rem !important; }
  .mb-5-mobile {
    margin-bottom: 1.25rem !important; }
  .-mb-5-mobile {
    margin-bottom: -1.25rem !important; }
  .ml-5-mobile {
    margin-left: 1.25rem !important; }
  .-ml-5-mobile {
    margin-left: -1.25rem !important; }
  .mx-5-mobile {
    margin-left: 1.25rem !important;
    margin-right: 1.25rem !important; }
  .-mx-5-mobile {
    margin-left: -1.25rem !important;
    margin-right: -1.25rem !important; }
  .mt-6-mobile {
    margin-top: 1.5rem !important; }
  .-mt-6-mobile {
    margin-top: -1.5rem !important; }
  .mr-6-mobile {
    margin-right: 1.5rem !important; }
  .-mr-6-mobile {
    margin-right: -1.5rem !important; }
  .mb-6-mobile {
    margin-bottom: 1.5rem !important; }
  .-mb-6-mobile {
    margin-bottom: -1.5rem !important; }
  .ml-6-mobile {
    margin-left: 1.5rem !important; }
  .-ml-6-mobile {
    margin-left: -1.5rem !important; }
  .mx-6-mobile {
    margin-left: 1.5rem !important;
    margin-right: 1.5rem !important; }
  .-mx-6-mobile {
    margin-left: -1.5rem !important;
    margin-right: -1.5rem !important; }
  .mt-7-mobile {
    margin-top: 1.75rem !important; }
  .-mt-7-mobile {
    margin-top: -1.75rem !important; }
  .mr-7-mobile {
    margin-right: 1.75rem !important; }
  .-mr-7-mobile {
    margin-right: -1.75rem !important; }
  .mb-7-mobile {
    margin-bottom: 1.75rem !important; }
  .-mb-7-mobile {
    margin-bottom: -1.75rem !important; }
  .ml-7-mobile {
    margin-left: 1.75rem !important; }
  .-ml-7-mobile {
    margin-left: -1.75rem !important; }
  .mx-7-mobile {
    margin-left: 1.75rem !important;
    margin-right: 1.75rem !important; }
  .-mx-7-mobile {
    margin-left: -1.75rem !important;
    margin-right: -1.75rem !important; }
  .mt-8-mobile {
    margin-top: 2rem !important; }
  .-mt-8-mobile {
    margin-top: -2rem !important; }
  .mr-8-mobile {
    margin-right: 2rem !important; }
  .-mr-8-mobile {
    margin-right: -2rem !important; }
  .mb-8-mobile {
    margin-bottom: 2rem !important; }
  .-mb-8-mobile {
    margin-bottom: -2rem !important; }
  .ml-8-mobile {
    margin-left: 2rem !important; }
  .-ml-8-mobile {
    margin-left: -2rem !important; }
  .mx-8-mobile {
    margin-left: 2rem !important;
    margin-right: 2rem !important; }
  .-mx-8-mobile {
    margin-left: -2rem !important;
    margin-right: -2rem !important; }
  .mt-9-mobile {
    margin-top: 2.25rem !important; }
  .-mt-9-mobile {
    margin-top: -2.25rem !important; }
  .mr-9-mobile {
    margin-right: 2.25rem !important; }
  .-mr-9-mobile {
    margin-right: -2.25rem !important; }
  .mb-9-mobile {
    margin-bottom: 2.25rem !important; }
  .-mb-9-mobile {
    margin-bottom: -2.25rem !important; }
  .ml-9-mobile {
    margin-left: 2.25rem !important; }
  .-ml-9-mobile {
    margin-left: -2.25rem !important; }
  .mx-9-mobile {
    margin-left: 2.25rem !important;
    margin-right: 2.25rem !important; }
  .-mx-9-mobile {
    margin-left: -2.25rem !important;
    margin-right: -2.25rem !important; }
  .mt-10-mobile {
    margin-top: 2.5rem !important; }
  .-mt-10-mobile {
    margin-top: -2.5rem !important; }
  .mr-10-mobile {
    margin-right: 2.5rem !important; }
  .-mr-10-mobile {
    margin-right: -2.5rem !important; }
  .mb-10-mobile {
    margin-bottom: 2.5rem !important; }
  .-mb-10-mobile {
    margin-bottom: -2.5rem !important; }
  .ml-10-mobile {
    margin-left: 2.5rem !important; }
  .-ml-10-mobile {
    margin-left: -2.5rem !important; }
  .mx-10-mobile {
    margin-left: 2.5rem !important;
    margin-right: 2.5rem !important; }
  .-mx-10-mobile {
    margin-left: -2.5rem !important;
    margin-right: -2.5rem !important; }
  .mt-11-mobile {
    margin-top: 2.75rem !important; }
  .-mt-11-mobile {
    margin-top: -2.75rem !important; }
  .mr-11-mobile {
    margin-right: 2.75rem !important; }
  .-mr-11-mobile {
    margin-right: -2.75rem !important; }
  .mb-11-mobile {
    margin-bottom: 2.75rem !important; }
  .-mb-11-mobile {
    margin-bottom: -2.75rem !important; }
  .ml-11-mobile {
    margin-left: 2.75rem !important; }
  .-ml-11-mobile {
    margin-left: -2.75rem !important; }
  .mx-11-mobile {
    margin-left: 2.75rem !important;
    margin-right: 2.75rem !important; }
  .-mx-11-mobile {
    margin-left: -2.75rem !important;
    margin-right: -2.75rem !important; }
  .mt-12-mobile {
    margin-top: 3rem !important; }
  .-mt-12-mobile {
    margin-top: -3rem !important; }
  .mr-12-mobile {
    margin-right: 3rem !important; }
  .-mr-12-mobile {
    margin-right: -3rem !important; }
  .mb-12-mobile {
    margin-bottom: 3rem !important; }
  .-mb-12-mobile {
    margin-bottom: -3rem !important; }
  .ml-12-mobile {
    margin-left: 3rem !important; }
  .-ml-12-mobile {
    margin-left: -3rem !important; }
  .mx-12-mobile {
    margin-left: 3rem !important;
    margin-right: 3rem !important; }
  .-mx-12-mobile {
    margin-left: -3rem !important;
    margin-right: -3rem !important; }
  .mt-14-mobile {
    margin-top: 3.5rem !important; }
  .-mt-14-mobile {
    margin-top: -3.5rem !important; }
  .mr-14-mobile {
    margin-right: 3.5rem !important; }
  .-mr-14-mobile {
    margin-right: -3.5rem !important; }
  .mb-14-mobile {
    margin-bottom: 3.5rem !important; }
  .-mb-14-mobile {
    margin-bottom: -3.5rem !important; }
  .ml-14-mobile {
    margin-left: 3.5rem !important; }
  .-ml-14-mobile {
    margin-left: -3.5rem !important; }
  .mx-14-mobile {
    margin-left: 3.5rem !important;
    margin-right: 3.5rem !important; }
  .-mx-14-mobile {
    margin-left: -3.5rem !important;
    margin-right: -3.5rem !important; }
  .mt-16-mobile {
    margin-top: 4rem !important; }
  .-mt-16-mobile {
    margin-top: -4rem !important; }
  .mr-16-mobile {
    margin-right: 4rem !important; }
  .-mr-16-mobile {
    margin-right: -4rem !important; }
  .mb-16-mobile {
    margin-bottom: 4rem !important; }
  .-mb-16-mobile {
    margin-bottom: -4rem !important; }
  .ml-16-mobile {
    margin-left: 4rem !important; }
  .-ml-16-mobile {
    margin-left: -4rem !important; }
  .mx-16-mobile {
    margin-left: 4rem !important;
    margin-right: 4rem !important; }
  .-mx-16-mobile {
    margin-left: -4rem !important;
    margin-right: -4rem !important; }
  .mt-20-mobile {
    margin-top: 5rem !important; }
  .-mt-20-mobile {
    margin-top: -5rem !important; }
  .mr-20-mobile {
    margin-right: 5rem !important; }
  .-mr-20-mobile {
    margin-right: -5rem !important; }
  .mb-20-mobile {
    margin-bottom: 5rem !important; }
  .-mb-20-mobile {
    margin-bottom: -5rem !important; }
  .ml-20-mobile {
    margin-left: 5rem !important; }
  .-ml-20-mobile {
    margin-left: -5rem !important; }
  .mx-20-mobile {
    margin-left: 5rem !important;
    margin-right: 5rem !important; }
  .-mx-20-mobile {
    margin-left: -5rem !important;
    margin-right: -5rem !important; }
  .mt-24-mobile {
    margin-top: 6rem !important; }
  .-mt-24-mobile {
    margin-top: -6rem !important; }
  .mr-24-mobile {
    margin-right: 6rem !important; }
  .-mr-24-mobile {
    margin-right: -6rem !important; }
  .mb-24-mobile {
    margin-bottom: 6rem !important; }
  .-mb-24-mobile {
    margin-bottom: -6rem !important; }
  .ml-24-mobile {
    margin-left: 6rem !important; }
  .-ml-24-mobile {
    margin-left: -6rem !important; }
  .mx-24-mobile {
    margin-left: 6rem !important;
    margin-right: 6rem !important; }
  .-mx-24-mobile {
    margin-left: -6rem !important;
    margin-right: -6rem !important; }
  .mt-28-mobile {
    margin-top: 7rem !important; }
  .-mt-28-mobile {
    margin-top: -7rem !important; }
  .mr-28-mobile {
    margin-right: 7rem !important; }
  .-mr-28-mobile {
    margin-right: -7rem !important; }
  .mb-28-mobile {
    margin-bottom: 7rem !important; }
  .-mb-28-mobile {
    margin-bottom: -7rem !important; }
  .ml-28-mobile {
    margin-left: 7rem !important; }
  .-ml-28-mobile {
    margin-left: -7rem !important; }
  .mx-28-mobile {
    margin-left: 7rem !important;
    margin-right: 7rem !important; }
  .-mx-28-mobile {
    margin-left: -7rem !important;
    margin-right: -7rem !important; }
  .mt-32-mobile {
    margin-top: 8rem !important; }
  .-mt-32-mobile {
    margin-top: -8rem !important; }
  .mr-32-mobile {
    margin-right: 8rem !important; }
  .-mr-32-mobile {
    margin-right: -8rem !important; }
  .mb-32-mobile {
    margin-bottom: 8rem !important; }
  .-mb-32-mobile {
    margin-bottom: -8rem !important; }
  .ml-32-mobile {
    margin-left: 8rem !important; }
  .-ml-32-mobile {
    margin-left: -8rem !important; }
  .mx-32-mobile {
    margin-left: 8rem !important;
    margin-right: 8rem !important; }
  .-mx-32-mobile {
    margin-left: -8rem !important;
    margin-right: -8rem !important; }
  .p-auto-mobile {
    padding: auto !important; }
  .px-auto-mobile {
    padding-left: auto !important;
    padding-right: auto !important; }
  .py-auto-mobile {
    padding-top: auto !important;
    padding-bottom: auto !important; }
  .p-0-mobile {
    padding: 0px !important; }
  .px-0-mobile {
    padding-left: 0px !important;
    padding-right: 0px !important; }
  .py-0-mobile {
    padding-top: 0px !important;
    padding-bottom: 0px !important; }
  .p-1-mobile {
    padding: 0.25rem !important; }
  .px-1-mobile {
    padding-left: 0.25rem !important;
    padding-right: 0.25rem !important; }
  .py-1-mobile {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important; }
  .p-2-mobile {
    padding: 0.5rem !important; }
  .px-2-mobile {
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important; }
  .py-2-mobile {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important; }
  .p-3-mobile {
    padding: 0.75rem !important; }
  .px-3-mobile {
    padding-left: 0.75rem !important;
    padding-right: 0.75rem !important; }
  .py-3-mobile {
    padding-top: 0.75rem !important;
    padding-bottom: 0.75rem !important; }
  .p-4-mobile {
    padding: 1rem !important; }
  .px-4-mobile {
    padding-left: 1rem !important;
    padding-right: 1rem !important; }
  .py-4-mobile {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important; }
  .p-5-mobile {
    padding: 1.25rem !important; }
  .px-5-mobile {
    padding-left: 1.25rem !important;
    padding-right: 1.25rem !important; }
  .py-5-mobile {
    padding-top: 1.25rem !important;
    padding-bottom: 1.25rem !important; }
  .p-6-mobile {
    padding: 1.5rem !important; }
  .px-6-mobile {
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important; }
  .py-6-mobile {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important; }
  .p-7-mobile {
    padding: 1.75rem !important; }
  .px-7-mobile {
    padding-left: 1.75rem !important;
    padding-right: 1.75rem !important; }
  .py-7-mobile {
    padding-top: 1.75rem !important;
    padding-bottom: 1.75rem !important; }
  .p-8-mobile {
    padding: 2rem !important; }
  .px-8-mobile {
    padding-left: 2rem !important;
    padding-right: 2rem !important; }
  .py-8-mobile {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important; }
  .p-9-mobile {
    padding: 2.25rem !important; }
  .px-9-mobile {
    padding-left: 2.25rem !important;
    padding-right: 2.25rem !important; }
  .py-9-mobile {
    padding-top: 2.25rem !important;
    padding-bottom: 2.25rem !important; }
  .p-10-mobile {
    padding: 2.5rem !important; }
  .px-10-mobile {
    padding-left: 2.5rem !important;
    padding-right: 2.5rem !important; }
  .py-10-mobile {
    padding-top: 2.5rem !important;
    padding-bottom: 2.5rem !important; }
  .p-11-mobile {
    padding: 2.75rem !important; }
  .px-11-mobile {
    padding-left: 2.75rem !important;
    padding-right: 2.75rem !important; }
  .py-11-mobile {
    padding-top: 2.75rem !important;
    padding-bottom: 2.75rem !important; }
  .p-12-mobile {
    padding: 3rem !important; }
  .px-12-mobile {
    padding-left: 3rem !important;
    padding-right: 3rem !important; }
  .py-12-mobile {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important; }
  .p-14-mobile {
    padding: 3.5rem !important; }
  .px-14-mobile {
    padding-left: 3.5rem !important;
    padding-right: 3.5rem !important; }
  .py-14-mobile {
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important; }
  .p-16-mobile {
    padding: 4rem !important; }
  .px-16-mobile {
    padding-left: 4rem !important;
    padding-right: 4rem !important; }
  .py-16-mobile {
    padding-top: 4rem !important;
    padding-bottom: 4rem !important; }
  .p-20-mobile {
    padding: 5rem !important; }
  .px-20-mobile {
    padding-left: 5rem !important;
    padding-right: 5rem !important; }
  .py-20-mobile {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important; }
  .p-24-mobile {
    padding: 6rem !important; }
  .px-24-mobile {
    padding-left: 6rem !important;
    padding-right: 6rem !important; }
  .py-24-mobile {
    padding-top: 6rem !important;
    padding-bottom: 6rem !important; }
  .p-28-mobile {
    padding: 7rem !important; }
  .px-28-mobile {
    padding-left: 7rem !important;
    padding-right: 7rem !important; }
  .py-28-mobile {
    padding-top: 7rem !important;
    padding-bottom: 7rem !important; }
  .p-32-mobile {
    padding: 8rem !important; }
  .px-32-mobile {
    padding-left: 8rem !important;
    padding-right: 8rem !important; }
  .py-32-mobile {
    padding-top: 8rem !important;
    padding-bottom: 8rem !important; } }

@media screen and (min-width: 769px), print {
  .m-auto-tablet {
    margin: auto !important; }
  .mt-auto-tablet {
    margin-top: auto !important; }
  .mr-auto-tablet {
    margin-right: auto !important; }
  .mb-auto-tablet {
    margin-bottom: auto !important; }
  .ml-auto-tablet {
    margin-left: auto !important; }
  .mx-auto-tablet {
    margin-left: auto !important;
    margin-right: auto !important; }
  .m-0-tablet {
    margin: 0px !important; }
  .mt-0-tablet {
    margin-top: 0px !important; }
  .mr-0-tablet {
    margin-right: 0px !important; }
  .mb-0-tablet {
    margin-bottom: 0px !important; }
  .ml-0-tablet {
    margin-left: 0px !important; }
  .mx-0-tablet {
    margin-left: 0px !important;
    margin-right: 0px !important; }
  .m-1-tablet {
    margin: 0.25rem !important; }
  .-m-1-tablet {
    margin: -0.25rem !important; }
  .mt-1-tablet {
    margin-top: 0.25rem !important; }
  .-mt-1-tablet {
    margin-top: -0.25rem !important; }
  .mr-1-tablet {
    margin-right: 0.25rem !important; }
  .-mr-1-tablet {
    margin-right: -0.25rem !important; }
  .mb-1-tablet {
    margin-bottom: 0.25rem !important; }
  .-mb-1-tablet {
    margin-bottom: -0.25rem !important; }
  .ml-1-tablet {
    margin-left: 0.25rem !important; }
  .-ml-1-tablet {
    margin-left: -0.25rem !important; }
  .mx-1-tablet {
    margin-left: 0.25rem !important;
    margin-right: 0.25rem !important; }
  .-mx-1-tablet {
    margin-left: -0.25rem !important;
    margin-right: -0.25rem !important; }
  .m-2-tablet {
    margin: 0.5rem !important; }
  .-m-2-tablet {
    margin: -0.5rem !important; }
  .mt-2-tablet {
    margin-top: 0.5rem !important; }
  .-mt-2-tablet {
    margin-top: -0.5rem !important; }
  .mr-2-tablet {
    margin-right: 0.5rem !important; }
  .-mr-2-tablet {
    margin-right: -0.5rem !important; }
  .mb-2-tablet {
    margin-bottom: 0.5rem !important; }
  .-mb-2-tablet {
    margin-bottom: -0.5rem !important; }
  .ml-2-tablet {
    margin-left: 0.5rem !important; }
  .-ml-2-tablet {
    margin-left: -0.5rem !important; }
  .mx-2-tablet {
    margin-left: 0.5rem !important;
    margin-right: 0.5rem !important; }
  .-mx-2-tablet {
    margin-left: -0.5rem !important;
    margin-right: -0.5rem !important; }
  .m-3-tablet {
    margin: 0.75rem !important; }
  .-m-3-tablet {
    margin: -0.75rem !important; }
  .mt-3-tablet {
    margin-top: 0.75rem !important; }
  .-mt-3-tablet {
    margin-top: -0.75rem !important; }
  .mr-3-tablet {
    margin-right: 0.75rem !important; }
  .-mr-3-tablet {
    margin-right: -0.75rem !important; }
  .mb-3-tablet {
    margin-bottom: 0.75rem !important; }
  .-mb-3-tablet {
    margin-bottom: -0.75rem !important; }
  .ml-3-tablet {
    margin-left: 0.75rem !important; }
  .-ml-3-tablet {
    margin-left: -0.75rem !important; }
  .mx-3-tablet {
    margin-left: 0.75rem !important;
    margin-right: 0.75rem !important; }
  .-mx-3-tablet {
    margin-left: -0.75rem !important;
    margin-right: -0.75rem !important; }
  .m-4-tablet {
    margin: 1rem !important; }
  .-m-4-tablet {
    margin: -1rem !important; }
  .mt-4-tablet {
    margin-top: 1rem !important; }
  .-mt-4-tablet {
    margin-top: -1rem !important; }
  .mr-4-tablet {
    margin-right: 1rem !important; }
  .-mr-4-tablet {
    margin-right: -1rem !important; }
  .mb-4-tablet {
    margin-bottom: 1rem !important; }
  .-mb-4-tablet {
    margin-bottom: -1rem !important; }
  .ml-4-tablet {
    margin-left: 1rem !important; }
  .-ml-4-tablet {
    margin-left: -1rem !important; }
  .mx-4-tablet {
    margin-left: 1rem !important;
    margin-right: 1rem !important; }
  .-mx-4-tablet {
    margin-left: -1rem !important;
    margin-right: -1rem !important; }
  .m-5-tablet {
    margin: 1.25rem !important; }
  .-m-5-tablet {
    margin: -1.25rem !important; }
  .mt-5-tablet {
    margin-top: 1.25rem !important; }
  .-mt-5-tablet {
    margin-top: -1.25rem !important; }
  .mr-5-tablet {
    margin-right: 1.25rem !important; }
  .-mr-5-tablet {
    margin-right: -1.25rem !important; }
  .mb-5-tablet {
    margin-bottom: 1.25rem !important; }
  .-mb-5-tablet {
    margin-bottom: -1.25rem !important; }
  .ml-5-tablet {
    margin-left: 1.25rem !important; }
  .-ml-5-tablet {
    margin-left: -1.25rem !important; }
  .mx-5-tablet {
    margin-left: 1.25rem !important;
    margin-right: 1.25rem !important; }
  .-mx-5-tablet {
    margin-left: -1.25rem !important;
    margin-right: -1.25rem !important; }
  .m-6-tablet {
    margin: 1.5rem !important; }
  .-m-6-tablet {
    margin: -1.5rem !important; }
  .mt-6-tablet {
    margin-top: 1.5rem !important; }
  .-mt-6-tablet {
    margin-top: -1.5rem !important; }
  .mr-6-tablet {
    margin-right: 1.5rem !important; }
  .-mr-6-tablet {
    margin-right: -1.5rem !important; }
  .mb-6-tablet {
    margin-bottom: 1.5rem !important; }
  .-mb-6-tablet {
    margin-bottom: -1.5rem !important; }
  .ml-6-tablet {
    margin-left: 1.5rem !important; }
  .-ml-6-tablet {
    margin-left: -1.5rem !important; }
  .mx-6-tablet {
    margin-left: 1.5rem !important;
    margin-right: 1.5rem !important; }
  .-mx-6-tablet {
    margin-left: -1.5rem !important;
    margin-right: -1.5rem !important; }
  .m-7-tablet {
    margin: 1.75rem !important; }
  .-m-7-tablet {
    margin: -1.75rem !important; }
  .mt-7-tablet {
    margin-top: 1.75rem !important; }
  .-mt-7-tablet {
    margin-top: -1.75rem !important; }
  .mr-7-tablet {
    margin-right: 1.75rem !important; }
  .-mr-7-tablet {
    margin-right: -1.75rem !important; }
  .mb-7-tablet {
    margin-bottom: 1.75rem !important; }
  .-mb-7-tablet {
    margin-bottom: -1.75rem !important; }
  .ml-7-tablet {
    margin-left: 1.75rem !important; }
  .-ml-7-tablet {
    margin-left: -1.75rem !important; }
  .mx-7-tablet {
    margin-left: 1.75rem !important;
    margin-right: 1.75rem !important; }
  .-mx-7-tablet {
    margin-left: -1.75rem !important;
    margin-right: -1.75rem !important; }
  .m-8-tablet {
    margin: 2rem !important; }
  .-m-8-tablet {
    margin: -2rem !important; }
  .mt-8-tablet {
    margin-top: 2rem !important; }
  .-mt-8-tablet {
    margin-top: -2rem !important; }
  .mr-8-tablet {
    margin-right: 2rem !important; }
  .-mr-8-tablet {
    margin-right: -2rem !important; }
  .mb-8-tablet {
    margin-bottom: 2rem !important; }
  .-mb-8-tablet {
    margin-bottom: -2rem !important; }
  .ml-8-tablet {
    margin-left: 2rem !important; }
  .-ml-8-tablet {
    margin-left: -2rem !important; }
  .mx-8-tablet {
    margin-left: 2rem !important;
    margin-right: 2rem !important; }
  .-mx-8-tablet {
    margin-left: -2rem !important;
    margin-right: -2rem !important; }
  .m-9-tablet {
    margin: 2.25rem !important; }
  .-m-9-tablet {
    margin: -2.25rem !important; }
  .mt-9-tablet {
    margin-top: 2.25rem !important; }
  .-mt-9-tablet {
    margin-top: -2.25rem !important; }
  .mr-9-tablet {
    margin-right: 2.25rem !important; }
  .-mr-9-tablet {
    margin-right: -2.25rem !important; }
  .mb-9-tablet {
    margin-bottom: 2.25rem !important; }
  .-mb-9-tablet {
    margin-bottom: -2.25rem !important; }
  .ml-9-tablet {
    margin-left: 2.25rem !important; }
  .-ml-9-tablet {
    margin-left: -2.25rem !important; }
  .mx-9-tablet {
    margin-left: 2.25rem !important;
    margin-right: 2.25rem !important; }
  .-mx-9-tablet {
    margin-left: -2.25rem !important;
    margin-right: -2.25rem !important; }
  .m-10-tablet {
    margin: 2.5rem !important; }
  .-m-10-tablet {
    margin: -2.5rem !important; }
  .mt-10-tablet {
    margin-top: 2.5rem !important; }
  .-mt-10-tablet {
    margin-top: -2.5rem !important; }
  .mr-10-tablet {
    margin-right: 2.5rem !important; }
  .-mr-10-tablet {
    margin-right: -2.5rem !important; }
  .mb-10-tablet {
    margin-bottom: 2.5rem !important; }
  .-mb-10-tablet {
    margin-bottom: -2.5rem !important; }
  .ml-10-tablet {
    margin-left: 2.5rem !important; }
  .-ml-10-tablet {
    margin-left: -2.5rem !important; }
  .mx-10-tablet {
    margin-left: 2.5rem !important;
    margin-right: 2.5rem !important; }
  .-mx-10-tablet {
    margin-left: -2.5rem !important;
    margin-right: -2.5rem !important; }
  .m-11-tablet {
    margin: 2.75rem !important; }
  .-m-11-tablet {
    margin: -2.75rem !important; }
  .mt-11-tablet {
    margin-top: 2.75rem !important; }
  .-mt-11-tablet {
    margin-top: -2.75rem !important; }
  .mr-11-tablet {
    margin-right: 2.75rem !important; }
  .-mr-11-tablet {
    margin-right: -2.75rem !important; }
  .mb-11-tablet {
    margin-bottom: 2.75rem !important; }
  .-mb-11-tablet {
    margin-bottom: -2.75rem !important; }
  .ml-11-tablet {
    margin-left: 2.75rem !important; }
  .-ml-11-tablet {
    margin-left: -2.75rem !important; }
  .mx-11-tablet {
    margin-left: 2.75rem !important;
    margin-right: 2.75rem !important; }
  .-mx-11-tablet {
    margin-left: -2.75rem !important;
    margin-right: -2.75rem !important; }
  .m-12-tablet {
    margin: 3rem !important; }
  .-m-12-tablet {
    margin: -3rem !important; }
  .mt-12-tablet {
    margin-top: 3rem !important; }
  .-mt-12-tablet {
    margin-top: -3rem !important; }
  .mr-12-tablet {
    margin-right: 3rem !important; }
  .-mr-12-tablet {
    margin-right: -3rem !important; }
  .mb-12-tablet {
    margin-bottom: 3rem !important; }
  .-mb-12-tablet {
    margin-bottom: -3rem !important; }
  .ml-12-tablet {
    margin-left: 3rem !important; }
  .-ml-12-tablet {
    margin-left: -3rem !important; }
  .mx-12-tablet {
    margin-left: 3rem !important;
    margin-right: 3rem !important; }
  .-mx-12-tablet {
    margin-left: -3rem !important;
    margin-right: -3rem !important; }
  .m-14-tablet {
    margin: 3.5rem !important; }
  .-m-14-tablet {
    margin: -3.5rem !important; }
  .mt-14-tablet {
    margin-top: 3.5rem !important; }
  .-mt-14-tablet {
    margin-top: -3.5rem !important; }
  .mr-14-tablet {
    margin-right: 3.5rem !important; }
  .-mr-14-tablet {
    margin-right: -3.5rem !important; }
  .mb-14-tablet {
    margin-bottom: 3.5rem !important; }
  .-mb-14-tablet {
    margin-bottom: -3.5rem !important; }
  .ml-14-tablet {
    margin-left: 3.5rem !important; }
  .-ml-14-tablet {
    margin-left: -3.5rem !important; }
  .mx-14-tablet {
    margin-left: 3.5rem !important;
    margin-right: 3.5rem !important; }
  .-mx-14-tablet {
    margin-left: -3.5rem !important;
    margin-right: -3.5rem !important; }
  .m-16-tablet {
    margin: 4rem !important; }
  .-m-16-tablet {
    margin: -4rem !important; }
  .mt-16-tablet {
    margin-top: 4rem !important; }
  .-mt-16-tablet {
    margin-top: -4rem !important; }
  .mr-16-tablet {
    margin-right: 4rem !important; }
  .-mr-16-tablet {
    margin-right: -4rem !important; }
  .mb-16-tablet {
    margin-bottom: 4rem !important; }
  .-mb-16-tablet {
    margin-bottom: -4rem !important; }
  .ml-16-tablet {
    margin-left: 4rem !important; }
  .-ml-16-tablet {
    margin-left: -4rem !important; }
  .mx-16-tablet {
    margin-left: 4rem !important;
    margin-right: 4rem !important; }
  .-mx-16-tablet {
    margin-left: -4rem !important;
    margin-right: -4rem !important; }
  .m-20-tablet {
    margin: 5rem !important; }
  .-m-20-tablet {
    margin: -5rem !important; }
  .mt-20-tablet {
    margin-top: 5rem !important; }
  .-mt-20-tablet {
    margin-top: -5rem !important; }
  .mr-20-tablet {
    margin-right: 5rem !important; }
  .-mr-20-tablet {
    margin-right: -5rem !important; }
  .mb-20-tablet {
    margin-bottom: 5rem !important; }
  .-mb-20-tablet {
    margin-bottom: -5rem !important; }
  .ml-20-tablet {
    margin-left: 5rem !important; }
  .-ml-20-tablet {
    margin-left: -5rem !important; }
  .mx-20-tablet {
    margin-left: 5rem !important;
    margin-right: 5rem !important; }
  .-mx-20-tablet {
    margin-left: -5rem !important;
    margin-right: -5rem !important; }
  .m-24-tablet {
    margin: 6rem !important; }
  .-m-24-tablet {
    margin: -6rem !important; }
  .mt-24-tablet {
    margin-top: 6rem !important; }
  .-mt-24-tablet {
    margin-top: -6rem !important; }
  .mr-24-tablet {
    margin-right: 6rem !important; }
  .-mr-24-tablet {
    margin-right: -6rem !important; }
  .mb-24-tablet {
    margin-bottom: 6rem !important; }
  .-mb-24-tablet {
    margin-bottom: -6rem !important; }
  .ml-24-tablet {
    margin-left: 6rem !important; }
  .-ml-24-tablet {
    margin-left: -6rem !important; }
  .mx-24-tablet {
    margin-left: 6rem !important;
    margin-right: 6rem !important; }
  .-mx-24-tablet {
    margin-left: -6rem !important;
    margin-right: -6rem !important; }
  .m-28-tablet {
    margin: 7rem !important; }
  .-m-28-tablet {
    margin: -7rem !important; }
  .mt-28-tablet {
    margin-top: 7rem !important; }
  .-mt-28-tablet {
    margin-top: -7rem !important; }
  .mr-28-tablet {
    margin-right: 7rem !important; }
  .-mr-28-tablet {
    margin-right: -7rem !important; }
  .mb-28-tablet {
    margin-bottom: 7rem !important; }
  .-mb-28-tablet {
    margin-bottom: -7rem !important; }
  .ml-28-tablet {
    margin-left: 7rem !important; }
  .-ml-28-tablet {
    margin-left: -7rem !important; }
  .mx-28-tablet {
    margin-left: 7rem !important;
    margin-right: 7rem !important; }
  .-mx-28-tablet {
    margin-left: -7rem !important;
    margin-right: -7rem !important; }
  .m-32-tablet {
    margin: 8rem !important; }
  .-m-32-tablet {
    margin: -8rem !important; }
  .mt-32-tablet {
    margin-top: 8rem !important; }
  .-mt-32-tablet {
    margin-top: -8rem !important; }
  .mr-32-tablet {
    margin-right: 8rem !important; }
  .-mr-32-tablet {
    margin-right: -8rem !important; }
  .mb-32-tablet {
    margin-bottom: 8rem !important; }
  .-mb-32-tablet {
    margin-bottom: -8rem !important; }
  .ml-32-tablet {
    margin-left: 8rem !important; }
  .-ml-32-tablet {
    margin-left: -8rem !important; }
  .mx-32-tablet {
    margin-left: 8rem !important;
    margin-right: 8rem !important; }
  .-mx-32-tablet {
    margin-left: -8rem !important;
    margin-right: -8rem !important; }
  .p-auto-tablet {
    padding: auto !important; }
  .px-auto-tablet {
    padding-left: auto !important;
    padding-right: auto !important; }
  .py-auto-tablet {
    padding-top: auto !important;
    padding-bottom: auto !important; }
  .p-0-tablet {
    padding: 0px !important; }
  .px-0-tablet {
    padding-left: 0px !important;
    padding-right: 0px !important; }
  .py-0-tablet {
    padding-top: 0px !important;
    padding-bottom: 0px !important; }
  .p-1-tablet {
    padding: 0.25rem !important; }
  .px-1-tablet {
    padding-left: 0.25rem !important;
    padding-right: 0.25rem !important; }
  .py-1-tablet {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important; }
  .p-2-tablet {
    padding: 0.5rem !important; }
  .px-2-tablet {
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important; }
  .py-2-tablet {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important; }
  .p-3-tablet {
    padding: 0.75rem !important; }
  .px-3-tablet {
    padding-left: 0.75rem !important;
    padding-right: 0.75rem !important; }
  .py-3-tablet {
    padding-top: 0.75rem !important;
    padding-bottom: 0.75rem !important; }
  .p-4-tablet {
    padding: 1rem !important; }
  .px-4-tablet {
    padding-left: 1rem !important;
    padding-right: 1rem !important; }
  .py-4-tablet {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important; }
  .p-5-tablet {
    padding: 1.25rem !important; }
  .px-5-tablet {
    padding-left: 1.25rem !important;
    padding-right: 1.25rem !important; }
  .py-5-tablet {
    padding-top: 1.25rem !important;
    padding-bottom: 1.25rem !important; }
  .p-6-tablet {
    padding: 1.5rem !important; }
  .px-6-tablet {
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important; }
  .py-6-tablet {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important; }
  .p-7-tablet {
    padding: 1.75rem !important; }
  .px-7-tablet {
    padding-left: 1.75rem !important;
    padding-right: 1.75rem !important; }
  .py-7-tablet {
    padding-top: 1.75rem !important;
    padding-bottom: 1.75rem !important; }
  .p-8-tablet {
    padding: 2rem !important; }
  .px-8-tablet {
    padding-left: 2rem !important;
    padding-right: 2rem !important; }
  .py-8-tablet {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important; }
  .p-9-tablet {
    padding: 2.25rem !important; }
  .px-9-tablet {
    padding-left: 2.25rem !important;
    padding-right: 2.25rem !important; }
  .py-9-tablet {
    padding-top: 2.25rem !important;
    padding-bottom: 2.25rem !important; }
  .p-10-tablet {
    padding: 2.5rem !important; }
  .px-10-tablet {
    padding-left: 2.5rem !important;
    padding-right: 2.5rem !important; }
  .py-10-tablet {
    padding-top: 2.5rem !important;
    padding-bottom: 2.5rem !important; }
  .p-11-tablet {
    padding: 2.75rem !important; }
  .px-11-tablet {
    padding-left: 2.75rem !important;
    padding-right: 2.75rem !important; }
  .py-11-tablet {
    padding-top: 2.75rem !important;
    padding-bottom: 2.75rem !important; }
  .p-12-tablet {
    padding: 3rem !important; }
  .px-12-tablet {
    padding-left: 3rem !important;
    padding-right: 3rem !important; }
  .py-12-tablet {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important; }
  .p-14-tablet {
    padding: 3.5rem !important; }
  .px-14-tablet {
    padding-left: 3.5rem !important;
    padding-right: 3.5rem !important; }
  .py-14-tablet {
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important; }
  .p-16-tablet {
    padding: 4rem !important; }
  .px-16-tablet {
    padding-left: 4rem !important;
    padding-right: 4rem !important; }
  .py-16-tablet {
    padding-top: 4rem !important;
    padding-bottom: 4rem !important; }
  .p-20-tablet {
    padding: 5rem !important; }
  .px-20-tablet {
    padding-left: 5rem !important;
    padding-right: 5rem !important; }
  .py-20-tablet {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important; }
  .p-24-tablet {
    padding: 6rem !important; }
  .px-24-tablet {
    padding-left: 6rem !important;
    padding-right: 6rem !important; }
  .py-24-tablet {
    padding-top: 6rem !important;
    padding-bottom: 6rem !important; }
  .p-28-tablet {
    padding: 7rem !important; }
  .px-28-tablet {
    padding-left: 7rem !important;
    padding-right: 7rem !important; }
  .py-28-tablet {
    padding-top: 7rem !important;
    padding-bottom: 7rem !important; }
  .p-32-tablet {
    padding: 8rem !important; }
  .px-32-tablet {
    padding-left: 8rem !important;
    padding-right: 8rem !important; }
  .py-32-tablet {
    padding-top: 8rem !important;
    padding-bottom: 8rem !important; } }

@media screen and (min-width: 1024px) {
  .mt-auto-desktop {
    margin-top: auto !important; }
  .mr-auto-desktop {
    margin-right: auto !important; }
  .mb-auto-desktop {
    margin-bottom: auto !important; }
  .ml-auto-desktop {
    margin-left: auto !important; }
  .mx-auto-desktop {
    margin-left: auto !important;
    margin-right: auto !important; }
  .mt-0-desktop {
    margin-top: 0px !important; }
  .mr-0-desktop {
    margin-right: 0px !important; }
  .mb-0-desktop {
    margin-bottom: 0px !important; }
  .ml-0-desktop {
    margin-left: 0px !important; }
  .mx-0-desktop {
    margin-left: 0px !important;
    margin-right: 0px !important; }
  .mt-1-desktop {
    margin-top: 0.25rem !important; }
  .-mt-1-desktop {
    margin-top: -0.25rem !important; }
  .mr-1-desktop {
    margin-right: 0.25rem !important; }
  .-mr-1-desktop {
    margin-right: -0.25rem !important; }
  .mb-1-desktop {
    margin-bottom: 0.25rem !important; }
  .-mb-1-desktop {
    margin-bottom: -0.25rem !important; }
  .ml-1-desktop {
    margin-left: 0.25rem !important; }
  .-ml-1-desktop {
    margin-left: -0.25rem !important; }
  .mx-1-desktop {
    margin-left: 0.25rem !important;
    margin-right: 0.25rem !important; }
  .-mx-1-desktop {
    margin-left: -0.25rem !important;
    margin-right: -0.25rem !important; }
  .mt-2-desktop {
    margin-top: 0.5rem !important; }
  .-mt-2-desktop {
    margin-top: -0.5rem !important; }
  .mr-2-desktop {
    margin-right: 0.5rem !important; }
  .-mr-2-desktop {
    margin-right: -0.5rem !important; }
  .mb-2-desktop {
    margin-bottom: 0.5rem !important; }
  .-mb-2-desktop {
    margin-bottom: -0.5rem !important; }
  .ml-2-desktop {
    margin-left: 0.5rem !important; }
  .-ml-2-desktop {
    margin-left: -0.5rem !important; }
  .mx-2-desktop {
    margin-left: 0.5rem !important;
    margin-right: 0.5rem !important; }
  .-mx-2-desktop {
    margin-left: -0.5rem !important;
    margin-right: -0.5rem !important; }
  .mt-3-desktop {
    margin-top: 0.75rem !important; }
  .-mt-3-desktop {
    margin-top: -0.75rem !important; }
  .mr-3-desktop {
    margin-right: 0.75rem !important; }
  .-mr-3-desktop {
    margin-right: -0.75rem !important; }
  .mb-3-desktop {
    margin-bottom: 0.75rem !important; }
  .-mb-3-desktop {
    margin-bottom: -0.75rem !important; }
  .ml-3-desktop {
    margin-left: 0.75rem !important; }
  .-ml-3-desktop {
    margin-left: -0.75rem !important; }
  .mx-3-desktop {
    margin-left: 0.75rem !important;
    margin-right: 0.75rem !important; }
  .-mx-3-desktop {
    margin-left: -0.75rem !important;
    margin-right: -0.75rem !important; }
  .mt-4-desktop {
    margin-top: 1rem !important; }
  .-mt-4-desktop {
    margin-top: -1rem !important; }
  .mr-4-desktop {
    margin-right: 1rem !important; }
  .-mr-4-desktop {
    margin-right: -1rem !important; }
  .mb-4-desktop {
    margin-bottom: 1rem !important; }
  .-mb-4-desktop {
    margin-bottom: -1rem !important; }
  .ml-4-desktop {
    margin-left: 1rem !important; }
  .-ml-4-desktop {
    margin-left: -1rem !important; }
  .mx-4-desktop {
    margin-left: 1rem !important;
    margin-right: 1rem !important; }
  .-mx-4-desktop {
    margin-left: -1rem !important;
    margin-right: -1rem !important; }
  .mt-5-desktop {
    margin-top: 1.25rem !important; }
  .-mt-5-desktop {
    margin-top: -1.25rem !important; }
  .mr-5-desktop {
    margin-right: 1.25rem !important; }
  .-mr-5-desktop {
    margin-right: -1.25rem !important; }
  .mb-5-desktop {
    margin-bottom: 1.25rem !important; }
  .-mb-5-desktop {
    margin-bottom: -1.25rem !important; }
  .ml-5-desktop {
    margin-left: 1.25rem !important; }
  .-ml-5-desktop {
    margin-left: -1.25rem !important; }
  .mx-5-desktop {
    margin-left: 1.25rem !important;
    margin-right: 1.25rem !important; }
  .-mx-5-desktop {
    margin-left: -1.25rem !important;
    margin-right: -1.25rem !important; }
  .mt-6-desktop {
    margin-top: 1.5rem !important; }
  .-mt-6-desktop {
    margin-top: -1.5rem !important; }
  .mr-6-desktop {
    margin-right: 1.5rem !important; }
  .-mr-6-desktop {
    margin-right: -1.5rem !important; }
  .mb-6-desktop {
    margin-bottom: 1.5rem !important; }
  .-mb-6-desktop {
    margin-bottom: -1.5rem !important; }
  .ml-6-desktop {
    margin-left: 1.5rem !important; }
  .-ml-6-desktop {
    margin-left: -1.5rem !important; }
  .mx-6-desktop {
    margin-left: 1.5rem !important;
    margin-right: 1.5rem !important; }
  .-mx-6-desktop {
    margin-left: -1.5rem !important;
    margin-right: -1.5rem !important; }
  .mt-7-desktop {
    margin-top: 1.75rem !important; }
  .-mt-7-desktop {
    margin-top: -1.75rem !important; }
  .mr-7-desktop {
    margin-right: 1.75rem !important; }
  .-mr-7-desktop {
    margin-right: -1.75rem !important; }
  .mb-7-desktop {
    margin-bottom: 1.75rem !important; }
  .-mb-7-desktop {
    margin-bottom: -1.75rem !important; }
  .ml-7-desktop {
    margin-left: 1.75rem !important; }
  .-ml-7-desktop {
    margin-left: -1.75rem !important; }
  .mx-7-desktop {
    margin-left: 1.75rem !important;
    margin-right: 1.75rem !important; }
  .-mx-7-desktop {
    margin-left: -1.75rem !important;
    margin-right: -1.75rem !important; }
  .mt-8-desktop {
    margin-top: 2rem !important; }
  .-mt-8-desktop {
    margin-top: -2rem !important; }
  .mr-8-desktop {
    margin-right: 2rem !important; }
  .-mr-8-desktop {
    margin-right: -2rem !important; }
  .mb-8-desktop {
    margin-bottom: 2rem !important; }
  .-mb-8-desktop {
    margin-bottom: -2rem !important; }
  .ml-8-desktop {
    margin-left: 2rem !important; }
  .-ml-8-desktop {
    margin-left: -2rem !important; }
  .mx-8-desktop {
    margin-left: 2rem !important;
    margin-right: 2rem !important; }
  .-mx-8-desktop {
    margin-left: -2rem !important;
    margin-right: -2rem !important; }
  .mt-9-desktop {
    margin-top: 2.25rem !important; }
  .-mt-9-desktop {
    margin-top: -2.25rem !important; }
  .mr-9-desktop {
    margin-right: 2.25rem !important; }
  .-mr-9-desktop {
    margin-right: -2.25rem !important; }
  .mb-9-desktop {
    margin-bottom: 2.25rem !important; }
  .-mb-9-desktop {
    margin-bottom: -2.25rem !important; }
  .ml-9-desktop {
    margin-left: 2.25rem !important; }
  .-ml-9-desktop {
    margin-left: -2.25rem !important; }
  .mx-9-desktop {
    margin-left: 2.25rem !important;
    margin-right: 2.25rem !important; }
  .-mx-9-desktop {
    margin-left: -2.25rem !important;
    margin-right: -2.25rem !important; }
  .mt-10-desktop {
    margin-top: 2.5rem !important; }
  .-mt-10-desktop {
    margin-top: -2.5rem !important; }
  .mr-10-desktop {
    margin-right: 2.5rem !important; }
  .-mr-10-desktop {
    margin-right: -2.5rem !important; }
  .mb-10-desktop {
    margin-bottom: 2.5rem !important; }
  .-mb-10-desktop {
    margin-bottom: -2.5rem !important; }
  .ml-10-desktop {
    margin-left: 2.5rem !important; }
  .-ml-10-desktop {
    margin-left: -2.5rem !important; }
  .mx-10-desktop {
    margin-left: 2.5rem !important;
    margin-right: 2.5rem !important; }
  .-mx-10-desktop {
    margin-left: -2.5rem !important;
    margin-right: -2.5rem !important; }
  .mt-11-desktop {
    margin-top: 2.75rem !important; }
  .-mt-11-desktop {
    margin-top: -2.75rem !important; }
  .mr-11-desktop {
    margin-right: 2.75rem !important; }
  .-mr-11-desktop {
    margin-right: -2.75rem !important; }
  .mb-11-desktop {
    margin-bottom: 2.75rem !important; }
  .-mb-11-desktop {
    margin-bottom: -2.75rem !important; }
  .ml-11-desktop {
    margin-left: 2.75rem !important; }
  .-ml-11-desktop {
    margin-left: -2.75rem !important; }
  .mx-11-desktop {
    margin-left: 2.75rem !important;
    margin-right: 2.75rem !important; }
  .-mx-11-desktop {
    margin-left: -2.75rem !important;
    margin-right: -2.75rem !important; }
  .mt-12-desktop {
    margin-top: 3rem !important; }
  .-mt-12-desktop {
    margin-top: -3rem !important; }
  .mr-12-desktop {
    margin-right: 3rem !important; }
  .-mr-12-desktop {
    margin-right: -3rem !important; }
  .mb-12-desktop {
    margin-bottom: 3rem !important; }
  .-mb-12-desktop {
    margin-bottom: -3rem !important; }
  .ml-12-desktop {
    margin-left: 3rem !important; }
  .-ml-12-desktop {
    margin-left: -3rem !important; }
  .mx-12-desktop {
    margin-left: 3rem !important;
    margin-right: 3rem !important; }
  .-mx-12-desktop {
    margin-left: -3rem !important;
    margin-right: -3rem !important; }
  .mt-14-desktop {
    margin-top: 3.5rem !important; }
  .-mt-14-desktop {
    margin-top: -3.5rem !important; }
  .mr-14-desktop {
    margin-right: 3.5rem !important; }
  .-mr-14-desktop {
    margin-right: -3.5rem !important; }
  .mb-14-desktop {
    margin-bottom: 3.5rem !important; }
  .-mb-14-desktop {
    margin-bottom: -3.5rem !important; }
  .ml-14-desktop {
    margin-left: 3.5rem !important; }
  .-ml-14-desktop {
    margin-left: -3.5rem !important; }
  .mx-14-desktop {
    margin-left: 3.5rem !important;
    margin-right: 3.5rem !important; }
  .-mx-14-desktop {
    margin-left: -3.5rem !important;
    margin-right: -3.5rem !important; }
  .mt-16-desktop {
    margin-top: 4rem !important; }
  .-mt-16-desktop {
    margin-top: -4rem !important; }
  .mr-16-desktop {
    margin-right: 4rem !important; }
  .-mr-16-desktop {
    margin-right: -4rem !important; }
  .mb-16-desktop {
    margin-bottom: 4rem !important; }
  .-mb-16-desktop {
    margin-bottom: -4rem !important; }
  .ml-16-desktop {
    margin-left: 4rem !important; }
  .-ml-16-desktop {
    margin-left: -4rem !important; }
  .mx-16-desktop {
    margin-left: 4rem !important;
    margin-right: 4rem !important; }
  .-mx-16-desktop {
    margin-left: -4rem !important;
    margin-right: -4rem !important; }
  .mt-20-desktop {
    margin-top: 5rem !important; }
  .-mt-20-desktop {
    margin-top: -5rem !important; }
  .mr-20-desktop {
    margin-right: 5rem !important; }
  .-mr-20-desktop {
    margin-right: -5rem !important; }
  .mb-20-desktop {
    margin-bottom: 5rem !important; }
  .-mb-20-desktop {
    margin-bottom: -5rem !important; }
  .ml-20-desktop {
    margin-left: 5rem !important; }
  .-ml-20-desktop {
    margin-left: -5rem !important; }
  .mx-20-desktop {
    margin-left: 5rem !important;
    margin-right: 5rem !important; }
  .-mx-20-desktop {
    margin-left: -5rem !important;
    margin-right: -5rem !important; }
  .mt-24-desktop {
    margin-top: 6rem !important; }
  .-mt-24-desktop {
    margin-top: -6rem !important; }
  .mr-24-desktop {
    margin-right: 6rem !important; }
  .-mr-24-desktop {
    margin-right: -6rem !important; }
  .mb-24-desktop {
    margin-bottom: 6rem !important; }
  .-mb-24-desktop {
    margin-bottom: -6rem !important; }
  .ml-24-desktop {
    margin-left: 6rem !important; }
  .-ml-24-desktop {
    margin-left: -6rem !important; }
  .mx-24-desktop {
    margin-left: 6rem !important;
    margin-right: 6rem !important; }
  .-mx-24-desktop {
    margin-left: -6rem !important;
    margin-right: -6rem !important; }
  .mt-28-desktop {
    margin-top: 7rem !important; }
  .-mt-28-desktop {
    margin-top: -7rem !important; }
  .mr-28-desktop {
    margin-right: 7rem !important; }
  .-mr-28-desktop {
    margin-right: -7rem !important; }
  .mb-28-desktop {
    margin-bottom: 7rem !important; }
  .-mb-28-desktop {
    margin-bottom: -7rem !important; }
  .ml-28-desktop {
    margin-left: 7rem !important; }
  .-ml-28-desktop {
    margin-left: -7rem !important; }
  .mx-28-desktop {
    margin-left: 7rem !important;
    margin-right: 7rem !important; }
  .-mx-28-desktop {
    margin-left: -7rem !important;
    margin-right: -7rem !important; }
  .mt-32-desktop {
    margin-top: 8rem !important; }
  .-mt-32-desktop {
    margin-top: -8rem !important; }
  .mr-32-desktop {
    margin-right: 8rem !important; }
  .-mr-32-desktop {
    margin-right: -8rem !important; }
  .mb-32-desktop {
    margin-bottom: 8rem !important; }
  .-mb-32-desktop {
    margin-bottom: -8rem !important; }
  .ml-32-desktop {
    margin-left: 8rem !important; }
  .-ml-32-desktop {
    margin-left: -8rem !important; }
  .mx-32-desktop {
    margin-left: 8rem !important;
    margin-right: 8rem !important; }
  .-mx-32-desktop {
    margin-left: -8rem !important;
    margin-right: -8rem !important; }
  .p-auto-desktop {
    padding: auto !important; }
  .px-auto-desktop {
    padding-left: auto !important;
    padding-right: auto !important; }
  .py-auto-desktop {
    padding-top: auto !important;
    padding-bottom: auto !important; }
  .p-0-desktop {
    padding: 0px !important; }
  .px-0-desktop {
    padding-left: 0px !important;
    padding-right: 0px !important; }
  .py-0-desktop {
    padding-top: 0px !important;
    padding-bottom: 0px !important; }
  .p-1-desktop {
    padding: 0.25rem !important; }
  .px-1-desktop {
    padding-left: 0.25rem !important;
    padding-right: 0.25rem !important; }
  .py-1-desktop {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important; }
  .p-2-desktop {
    padding: 0.5rem !important; }
  .px-2-desktop {
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important; }
  .py-2-desktop {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important; }
  .p-3-desktop {
    padding: 0.75rem !important; }
  .px-3-desktop {
    padding-left: 0.75rem !important;
    padding-right: 0.75rem !important; }
  .py-3-desktop {
    padding-top: 0.75rem !important;
    padding-bottom: 0.75rem !important; }
  .p-4-desktop {
    padding: 1rem !important; }
  .px-4-desktop {
    padding-left: 1rem !important;
    padding-right: 1rem !important; }
  .py-4-desktop {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important; }
  .p-5-desktop {
    padding: 1.25rem !important; }
  .px-5-desktop {
    padding-left: 1.25rem !important;
    padding-right: 1.25rem !important; }
  .py-5-desktop {
    padding-top: 1.25rem !important;
    padding-bottom: 1.25rem !important; }
  .p-6-desktop {
    padding: 1.5rem !important; }
  .px-6-desktop {
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important; }
  .py-6-desktop {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important; }
  .p-7-desktop {
    padding: 1.75rem !important; }
  .px-7-desktop {
    padding-left: 1.75rem !important;
    padding-right: 1.75rem !important; }
  .py-7-desktop {
    padding-top: 1.75rem !important;
    padding-bottom: 1.75rem !important; }
  .p-8-desktop {
    padding: 2rem !important; }
  .px-8-desktop {
    padding-left: 2rem !important;
    padding-right: 2rem !important; }
  .py-8-desktop {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important; }
  .p-9-desktop {
    padding: 2.25rem !important; }
  .px-9-desktop {
    padding-left: 2.25rem !important;
    padding-right: 2.25rem !important; }
  .py-9-desktop {
    padding-top: 2.25rem !important;
    padding-bottom: 2.25rem !important; }
  .p-10-desktop {
    padding: 2.5rem !important; }
  .px-10-desktop {
    padding-left: 2.5rem !important;
    padding-right: 2.5rem !important; }
  .py-10-desktop {
    padding-top: 2.5rem !important;
    padding-bottom: 2.5rem !important; }
  .p-11-desktop {
    padding: 2.75rem !important; }
  .px-11-desktop {
    padding-left: 2.75rem !important;
    padding-right: 2.75rem !important; }
  .py-11-desktop {
    padding-top: 2.75rem !important;
    padding-bottom: 2.75rem !important; }
  .p-12-desktop {
    padding: 3rem !important; }
  .px-12-desktop {
    padding-left: 3rem !important;
    padding-right: 3rem !important; }
  .py-12-desktop {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important; }
  .p-14-desktop {
    padding: 3.5rem !important; }
  .px-14-desktop {
    padding-left: 3.5rem !important;
    padding-right: 3.5rem !important; }
  .py-14-desktop {
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important; }
  .p-16-desktop {
    padding: 4rem !important; }
  .px-16-desktop {
    padding-left: 4rem !important;
    padding-right: 4rem !important; }
  .py-16-desktop {
    padding-top: 4rem !important;
    padding-bottom: 4rem !important; }
  .p-20-desktop {
    padding: 5rem !important; }
  .px-20-desktop {
    padding-left: 5rem !important;
    padding-right: 5rem !important; }
  .py-20-desktop {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important; }
  .p-24-desktop {
    padding: 6rem !important; }
  .px-24-desktop {
    padding-left: 6rem !important;
    padding-right: 6rem !important; }
  .py-24-desktop {
    padding-top: 6rem !important;
    padding-bottom: 6rem !important; }
  .p-28-desktop {
    padding: 7rem !important; }
  .px-28-desktop {
    padding-left: 7rem !important;
    padding-right: 7rem !important; }
  .py-28-desktop {
    padding-top: 7rem !important;
    padding-bottom: 7rem !important; }
  .p-32-desktop {
    padding: 8rem !important; }
  .px-32-desktop {
    padding-left: 8rem !important;
    padding-right: 8rem !important; }
  .py-32-desktop {
    padding-top: 8rem !important;
    padding-bottom: 8rem !important; } }

@media screen and (min-width: 1216px) {
  .mt-auto-widescreen {
    margin-top: auto !important; }
  .mr-auto-widescreen {
    margin-right: auto !important; }
  .mb-auto-widescreen {
    margin-bottom: auto !important; }
  .ml-auto-widescreen {
    margin-left: auto !important; }
  .mx-auto-widescreen {
    margin-left: auto !important;
    margin-right: auto !important; }
  .mt-0-widescreen {
    margin-top: 0px !important; }
  .mr-0-widescreen {
    margin-right: 0px !important; }
  .mb-0-widescreen {
    margin-bottom: 0px !important; }
  .ml-0-widescreen {
    margin-left: 0px !important; }
  .mx-0-widescreen {
    margin-left: 0px !important;
    margin-right: 0px !important; }
  .mt-1-widescreen {
    margin-top: 0.25rem !important; }
  .-mt-1-widescreen {
    margin-top: -0.25rem !important; }
  .mr-1-widescreen {
    margin-right: 0.25rem !important; }
  .-mr-1-widescreen {
    margin-right: -0.25rem !important; }
  .mb-1-widescreen {
    margin-bottom: 0.25rem !important; }
  .-mb-1-widescreen {
    margin-bottom: -0.25rem !important; }
  .ml-1-widescreen {
    margin-left: 0.25rem !important; }
  .-ml-1-widescreen {
    margin-left: -0.25rem !important; }
  .mx-1-widescreen {
    margin-left: 0.25rem !important;
    margin-right: 0.25rem !important; }
  .-mx-1-widescreen {
    margin-left: -0.25rem !important;
    margin-right: -0.25rem !important; }
  .mt-2-widescreen {
    margin-top: 0.5rem !important; }
  .-mt-2-widescreen {
    margin-top: -0.5rem !important; }
  .mr-2-widescreen {
    margin-right: 0.5rem !important; }
  .-mr-2-widescreen {
    margin-right: -0.5rem !important; }
  .mb-2-widescreen {
    margin-bottom: 0.5rem !important; }
  .-mb-2-widescreen {
    margin-bottom: -0.5rem !important; }
  .ml-2-widescreen {
    margin-left: 0.5rem !important; }
  .-ml-2-widescreen {
    margin-left: -0.5rem !important; }
  .mx-2-widescreen {
    margin-left: 0.5rem !important;
    margin-right: 0.5rem !important; }
  .-mx-2-widescreen {
    margin-left: -0.5rem !important;
    margin-right: -0.5rem !important; }
  .mt-3-widescreen {
    margin-top: 0.75rem !important; }
  .-mt-3-widescreen {
    margin-top: -0.75rem !important; }
  .mr-3-widescreen {
    margin-right: 0.75rem !important; }
  .-mr-3-widescreen {
    margin-right: -0.75rem !important; }
  .mb-3-widescreen {
    margin-bottom: 0.75rem !important; }
  .-mb-3-widescreen {
    margin-bottom: -0.75rem !important; }
  .ml-3-widescreen {
    margin-left: 0.75rem !important; }
  .-ml-3-widescreen {
    margin-left: -0.75rem !important; }
  .mx-3-widescreen {
    margin-left: 0.75rem !important;
    margin-right: 0.75rem !important; }
  .-mx-3-widescreen {
    margin-left: -0.75rem !important;
    margin-right: -0.75rem !important; }
  .mt-4-widescreen {
    margin-top: 1rem !important; }
  .-mt-4-widescreen {
    margin-top: -1rem !important; }
  .mr-4-widescreen {
    margin-right: 1rem !important; }
  .-mr-4-widescreen {
    margin-right: -1rem !important; }
  .mb-4-widescreen {
    margin-bottom: 1rem !important; }
  .-mb-4-widescreen {
    margin-bottom: -1rem !important; }
  .ml-4-widescreen {
    margin-left: 1rem !important; }
  .-ml-4-widescreen {
    margin-left: -1rem !important; }
  .mx-4-widescreen {
    margin-left: 1rem !important;
    margin-right: 1rem !important; }
  .-mx-4-widescreen {
    margin-left: -1rem !important;
    margin-right: -1rem !important; }
  .mt-5-widescreen {
    margin-top: 1.25rem !important; }
  .-mt-5-widescreen {
    margin-top: -1.25rem !important; }
  .mr-5-widescreen {
    margin-right: 1.25rem !important; }
  .-mr-5-widescreen {
    margin-right: -1.25rem !important; }
  .mb-5-widescreen {
    margin-bottom: 1.25rem !important; }
  .-mb-5-widescreen {
    margin-bottom: -1.25rem !important; }
  .ml-5-widescreen {
    margin-left: 1.25rem !important; }
  .-ml-5-widescreen {
    margin-left: -1.25rem !important; }
  .mx-5-widescreen {
    margin-left: 1.25rem !important;
    margin-right: 1.25rem !important; }
  .-mx-5-widescreen {
    margin-left: -1.25rem !important;
    margin-right: -1.25rem !important; }
  .mt-6-widescreen {
    margin-top: 1.5rem !important; }
  .-mt-6-widescreen {
    margin-top: -1.5rem !important; }
  .mr-6-widescreen {
    margin-right: 1.5rem !important; }
  .-mr-6-widescreen {
    margin-right: -1.5rem !important; }
  .mb-6-widescreen {
    margin-bottom: 1.5rem !important; }
  .-mb-6-widescreen {
    margin-bottom: -1.5rem !important; }
  .ml-6-widescreen {
    margin-left: 1.5rem !important; }
  .-ml-6-widescreen {
    margin-left: -1.5rem !important; }
  .mx-6-widescreen {
    margin-left: 1.5rem !important;
    margin-right: 1.5rem !important; }
  .-mx-6-widescreen {
    margin-left: -1.5rem !important;
    margin-right: -1.5rem !important; }
  .mt-7-widescreen {
    margin-top: 1.75rem !important; }
  .-mt-7-widescreen {
    margin-top: -1.75rem !important; }
  .mr-7-widescreen {
    margin-right: 1.75rem !important; }
  .-mr-7-widescreen {
    margin-right: -1.75rem !important; }
  .mb-7-widescreen {
    margin-bottom: 1.75rem !important; }
  .-mb-7-widescreen {
    margin-bottom: -1.75rem !important; }
  .ml-7-widescreen {
    margin-left: 1.75rem !important; }
  .-ml-7-widescreen {
    margin-left: -1.75rem !important; }
  .mx-7-widescreen {
    margin-left: 1.75rem !important;
    margin-right: 1.75rem !important; }
  .-mx-7-widescreen {
    margin-left: -1.75rem !important;
    margin-right: -1.75rem !important; }
  .mt-8-widescreen {
    margin-top: 2rem !important; }
  .-mt-8-widescreen {
    margin-top: -2rem !important; }
  .mr-8-widescreen {
    margin-right: 2rem !important; }
  .-mr-8-widescreen {
    margin-right: -2rem !important; }
  .mb-8-widescreen {
    margin-bottom: 2rem !important; }
  .-mb-8-widescreen {
    margin-bottom: -2rem !important; }
  .ml-8-widescreen {
    margin-left: 2rem !important; }
  .-ml-8-widescreen {
    margin-left: -2rem !important; }
  .mx-8-widescreen {
    margin-left: 2rem !important;
    margin-right: 2rem !important; }
  .-mx-8-widescreen {
    margin-left: -2rem !important;
    margin-right: -2rem !important; }
  .mt-9-widescreen {
    margin-top: 2.25rem !important; }
  .-mt-9-widescreen {
    margin-top: -2.25rem !important; }
  .mr-9-widescreen {
    margin-right: 2.25rem !important; }
  .-mr-9-widescreen {
    margin-right: -2.25rem !important; }
  .mb-9-widescreen {
    margin-bottom: 2.25rem !important; }
  .-mb-9-widescreen {
    margin-bottom: -2.25rem !important; }
  .ml-9-widescreen {
    margin-left: 2.25rem !important; }
  .-ml-9-widescreen {
    margin-left: -2.25rem !important; }
  .mx-9-widescreen {
    margin-left: 2.25rem !important;
    margin-right: 2.25rem !important; }
  .-mx-9-widescreen {
    margin-left: -2.25rem !important;
    margin-right: -2.25rem !important; }
  .mt-10-widescreen {
    margin-top: 2.5rem !important; }
  .-mt-10-widescreen {
    margin-top: -2.5rem !important; }
  .mr-10-widescreen {
    margin-right: 2.5rem !important; }
  .-mr-10-widescreen {
    margin-right: -2.5rem !important; }
  .mb-10-widescreen {
    margin-bottom: 2.5rem !important; }
  .-mb-10-widescreen {
    margin-bottom: -2.5rem !important; }
  .ml-10-widescreen {
    margin-left: 2.5rem !important; }
  .-ml-10-widescreen {
    margin-left: -2.5rem !important; }
  .mx-10-widescreen {
    margin-left: 2.5rem !important;
    margin-right: 2.5rem !important; }
  .-mx-10-widescreen {
    margin-left: -2.5rem !important;
    margin-right: -2.5rem !important; }
  .mt-11-widescreen {
    margin-top: 2.75rem !important; }
  .-mt-11-widescreen {
    margin-top: -2.75rem !important; }
  .mr-11-widescreen {
    margin-right: 2.75rem !important; }
  .-mr-11-widescreen {
    margin-right: -2.75rem !important; }
  .mb-11-widescreen {
    margin-bottom: 2.75rem !important; }
  .-mb-11-widescreen {
    margin-bottom: -2.75rem !important; }
  .ml-11-widescreen {
    margin-left: 2.75rem !important; }
  .-ml-11-widescreen {
    margin-left: -2.75rem !important; }
  .mx-11-widescreen {
    margin-left: 2.75rem !important;
    margin-right: 2.75rem !important; }
  .-mx-11-widescreen {
    margin-left: -2.75rem !important;
    margin-right: -2.75rem !important; }
  .mt-12-widescreen {
    margin-top: 3rem !important; }
  .-mt-12-widescreen {
    margin-top: -3rem !important; }
  .mr-12-widescreen {
    margin-right: 3rem !important; }
  .-mr-12-widescreen {
    margin-right: -3rem !important; }
  .mb-12-widescreen {
    margin-bottom: 3rem !important; }
  .-mb-12-widescreen {
    margin-bottom: -3rem !important; }
  .ml-12-widescreen {
    margin-left: 3rem !important; }
  .-ml-12-widescreen {
    margin-left: -3rem !important; }
  .mx-12-widescreen {
    margin-left: 3rem !important;
    margin-right: 3rem !important; }
  .-mx-12-widescreen {
    margin-left: -3rem !important;
    margin-right: -3rem !important; }
  .mt-14-widescreen {
    margin-top: 3.5rem !important; }
  .-mt-14-widescreen {
    margin-top: -3.5rem !important; }
  .mr-14-widescreen {
    margin-right: 3.5rem !important; }
  .-mr-14-widescreen {
    margin-right: -3.5rem !important; }
  .mb-14-widescreen {
    margin-bottom: 3.5rem !important; }
  .-mb-14-widescreen {
    margin-bottom: -3.5rem !important; }
  .ml-14-widescreen {
    margin-left: 3.5rem !important; }
  .-ml-14-widescreen {
    margin-left: -3.5rem !important; }
  .mx-14-widescreen {
    margin-left: 3.5rem !important;
    margin-right: 3.5rem !important; }
  .-mx-14-widescreen {
    margin-left: -3.5rem !important;
    margin-right: -3.5rem !important; }
  .mt-16-widescreen {
    margin-top: 4rem !important; }
  .-mt-16-widescreen {
    margin-top: -4rem !important; }
  .mr-16-widescreen {
    margin-right: 4rem !important; }
  .-mr-16-widescreen {
    margin-right: -4rem !important; }
  .mb-16-widescreen {
    margin-bottom: 4rem !important; }
  .-mb-16-widescreen {
    margin-bottom: -4rem !important; }
  .ml-16-widescreen {
    margin-left: 4rem !important; }
  .-ml-16-widescreen {
    margin-left: -4rem !important; }
  .mx-16-widescreen {
    margin-left: 4rem !important;
    margin-right: 4rem !important; }
  .-mx-16-widescreen {
    margin-left: -4rem !important;
    margin-right: -4rem !important; }
  .mt-20-widescreen {
    margin-top: 5rem !important; }
  .-mt-20-widescreen {
    margin-top: -5rem !important; }
  .mr-20-widescreen {
    margin-right: 5rem !important; }
  .-mr-20-widescreen {
    margin-right: -5rem !important; }
  .mb-20-widescreen {
    margin-bottom: 5rem !important; }
  .-mb-20-widescreen {
    margin-bottom: -5rem !important; }
  .ml-20-widescreen {
    margin-left: 5rem !important; }
  .-ml-20-widescreen {
    margin-left: -5rem !important; }
  .mx-20-widescreen {
    margin-left: 5rem !important;
    margin-right: 5rem !important; }
  .-mx-20-widescreen {
    margin-left: -5rem !important;
    margin-right: -5rem !important; }
  .mt-24-widescreen {
    margin-top: 6rem !important; }
  .-mt-24-widescreen {
    margin-top: -6rem !important; }
  .mr-24-widescreen {
    margin-right: 6rem !important; }
  .-mr-24-widescreen {
    margin-right: -6rem !important; }
  .mb-24-widescreen {
    margin-bottom: 6rem !important; }
  .-mb-24-widescreen {
    margin-bottom: -6rem !important; }
  .ml-24-widescreen {
    margin-left: 6rem !important; }
  .-ml-24-widescreen {
    margin-left: -6rem !important; }
  .mx-24-widescreen {
    margin-left: 6rem !important;
    margin-right: 6rem !important; }
  .-mx-24-widescreen {
    margin-left: -6rem !important;
    margin-right: -6rem !important; }
  .mt-28-widescreen {
    margin-top: 7rem !important; }
  .-mt-28-widescreen {
    margin-top: -7rem !important; }
  .mr-28-widescreen {
    margin-right: 7rem !important; }
  .-mr-28-widescreen {
    margin-right: -7rem !important; }
  .mb-28-widescreen {
    margin-bottom: 7rem !important; }
  .-mb-28-widescreen {
    margin-bottom: -7rem !important; }
  .ml-28-widescreen {
    margin-left: 7rem !important; }
  .-ml-28-widescreen {
    margin-left: -7rem !important; }
  .mx-28-widescreen {
    margin-left: 7rem !important;
    margin-right: 7rem !important; }
  .-mx-28-widescreen {
    margin-left: -7rem !important;
    margin-right: -7rem !important; }
  .mt-32-widescreen {
    margin-top: 8rem !important; }
  .-mt-32-widescreen {
    margin-top: -8rem !important; }
  .mr-32-widescreen {
    margin-right: 8rem !important; }
  .-mr-32-widescreen {
    margin-right: -8rem !important; }
  .mb-32-widescreen {
    margin-bottom: 8rem !important; }
  .-mb-32-widescreen {
    margin-bottom: -8rem !important; }
  .ml-32-widescreen {
    margin-left: 8rem !important; }
  .-ml-32-widescreen {
    margin-left: -8rem !important; }
  .mx-32-widescreen {
    margin-left: 8rem !important;
    margin-right: 8rem !important; }
  .-mx-32-widescreen {
    margin-left: -8rem !important;
    margin-right: -8rem !important; }
  .p-auto-widescreen {
    padding: auto !important; }
  .px-auto-widescreen {
    padding-left: auto !important;
    padding-right: auto !important; }
  .py-auto-widescreen {
    padding-top: auto !important;
    padding-bottom: auto !important; }
  .p-0-widescreen {
    padding: 0px !important; }
  .px-0-widescreen {
    padding-left: 0px !important;
    padding-right: 0px !important; }
  .py-0-widescreen {
    padding-top: 0px !important;
    padding-bottom: 0px !important; }
  .p-1-widescreen {
    padding: 0.25rem !important; }
  .px-1-widescreen {
    padding-left: 0.25rem !important;
    padding-right: 0.25rem !important; }
  .py-1-widescreen {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important; }
  .p-2-widescreen {
    padding: 0.5rem !important; }
  .px-2-widescreen {
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important; }
  .py-2-widescreen {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important; }
  .p-3-widescreen {
    padding: 0.75rem !important; }
  .px-3-widescreen {
    padding-left: 0.75rem !important;
    padding-right: 0.75rem !important; }
  .py-3-widescreen {
    padding-top: 0.75rem !important;
    padding-bottom: 0.75rem !important; }
  .p-4-widescreen {
    padding: 1rem !important; }
  .px-4-widescreen {
    padding-left: 1rem !important;
    padding-right: 1rem !important; }
  .py-4-widescreen {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important; }
  .p-5-widescreen {
    padding: 1.25rem !important; }
  .px-5-widescreen {
    padding-left: 1.25rem !important;
    padding-right: 1.25rem !important; }
  .py-5-widescreen {
    padding-top: 1.25rem !important;
    padding-bottom: 1.25rem !important; }
  .p-6-widescreen {
    padding: 1.5rem !important; }
  .px-6-widescreen {
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important; }
  .py-6-widescreen {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important; }
  .p-7-widescreen {
    padding: 1.75rem !important; }
  .px-7-widescreen {
    padding-left: 1.75rem !important;
    padding-right: 1.75rem !important; }
  .py-7-widescreen {
    padding-top: 1.75rem !important;
    padding-bottom: 1.75rem !important; }
  .p-8-widescreen {
    padding: 2rem !important; }
  .px-8-widescreen {
    padding-left: 2rem !important;
    padding-right: 2rem !important; }
  .py-8-widescreen {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important; }
  .p-9-widescreen {
    padding: 2.25rem !important; }
  .px-9-widescreen {
    padding-left: 2.25rem !important;
    padding-right: 2.25rem !important; }
  .py-9-widescreen {
    padding-top: 2.25rem !important;
    padding-bottom: 2.25rem !important; }
  .p-10-widescreen {
    padding: 2.5rem !important; }
  .px-10-widescreen {
    padding-left: 2.5rem !important;
    padding-right: 2.5rem !important; }
  .py-10-widescreen {
    padding-top: 2.5rem !important;
    padding-bottom: 2.5rem !important; }
  .p-11-widescreen {
    padding: 2.75rem !important; }
  .px-11-widescreen {
    padding-left: 2.75rem !important;
    padding-right: 2.75rem !important; }
  .py-11-widescreen {
    padding-top: 2.75rem !important;
    padding-bottom: 2.75rem !important; }
  .p-12-widescreen {
    padding: 3rem !important; }
  .px-12-widescreen {
    padding-left: 3rem !important;
    padding-right: 3rem !important; }
  .py-12-widescreen {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important; }
  .p-14-widescreen {
    padding: 3.5rem !important; }
  .px-14-widescreen {
    padding-left: 3.5rem !important;
    padding-right: 3.5rem !important; }
  .py-14-widescreen {
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important; }
  .p-16-widescreen {
    padding: 4rem !important; }
  .px-16-widescreen {
    padding-left: 4rem !important;
    padding-right: 4rem !important; }
  .py-16-widescreen {
    padding-top: 4rem !important;
    padding-bottom: 4rem !important; }
  .p-20-widescreen {
    padding: 5rem !important; }
  .px-20-widescreen {
    padding-left: 5rem !important;
    padding-right: 5rem !important; }
  .py-20-widescreen {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important; }
  .p-24-widescreen {
    padding: 6rem !important; }
  .px-24-widescreen {
    padding-left: 6rem !important;
    padding-right: 6rem !important; }
  .py-24-widescreen {
    padding-top: 6rem !important;
    padding-bottom: 6rem !important; }
  .p-28-widescreen {
    padding: 7rem !important; }
  .px-28-widescreen {
    padding-left: 7rem !important;
    padding-right: 7rem !important; }
  .py-28-widescreen {
    padding-top: 7rem !important;
    padding-bottom: 7rem !important; }
  .p-32-widescreen {
    padding: 8rem !important; }
  .px-32-widescreen {
    padding-left: 8rem !important;
    padding-right: 8rem !important; }
  .py-32-widescreen {
    padding-top: 8rem !important;
    padding-bottom: 8rem !important; } }

.has-mw-0 {
  max-width: 0rem; }

.has-mw-none {
  max-width: none; }

.has-mw-md {
  max-width: 28rem; }

.has-mw-xl {
  max-width: 36rem; }

.has-mw-2xl {
  max-width: 42rem; }

.has-mw-3xl {
  max-width: 48rem; }

.has-mw-4xl {
  max-width: 56rem; }

.has-mw-5xl {
  max-width: 64rem; }

.has-mw-6xl {
  max-width: 72rem; }

.has-mw-7xl {
  max-width: 80rem; }

@media screen and (max-width: 768px) {
  .has-mw-0-mobile {
    max-width: 0rem; }
  .has-mw-xl-mobile {
    max-width: 36rem; }
  .has-mw-2xl-mobile {
    max-width: 42rem; }
  .has-mw-3xl-mobile {
    max-width: 48rem; }
  .has-mw-4xl-mobile {
    max-width: 56rem; }
  .has-mw-5xl-mobile {
    max-width: 64rem; }
  .has-mw-6xl-mobile {
    max-width: 72rem; }
  .has-mw-7xl-mobile {
    max-width: 80rem; } }

@media screen and (min-width: 769px), print {
  .has-mw-0-tablet {
    max-width: 0rem; }
  .has-mw-none-tablet {
    max-width: none; }
  .has-mw-md-tablet {
    max-width: 28rem; }
  .has-mw-xl-tablet {
    max-width: 36rem; }
  .has-mw-2xl-tablet {
    max-width: 42rem; }
  .has-mw-3xl-tablet {
    max-width: 48rem; }
  .has-mw-4xl-tablet {
    max-width: 56rem; }
  .has-mw-5xl-tablet {
    max-width: 64rem; }
  .has-mw-6xl-tablet {
    max-width: 72rem; }
  .has-mw-7xl-tablet {
    max-width: 80rem; } }

@media screen and (min-width: 1024px) {
  .has-mw-0-desktop {
    max-width: 0rem; }
  .has-mw-xl-desktop {
    max-width: 36rem; }
  .has-mw-2xl-desktop {
    max-width: 42rem; }
  .has-mw-3xl-desktop {
    max-width: 48rem; }
  .has-mw-4xl-desktop {
    max-width: 56rem; }
  .has-mw-5xl-desktop {
    max-width: 64rem; }
  .has-mw-6xl-desktop {
    max-width: 72rem; }
  .has-mw-7xl-desktop {
    max-width: 80rem; } }

@media screen and (min-width: 1216px) {
  .has-mw-0-widescreen {
    max-width: 0rem; }
  .has-mw-xl-widescreen {
    max-width: 36rem; }
  .has-mw-2xl-widescreen {
    max-width: 42rem; }
  .has-mw-3xl-widescreen {
    max-width: 48rem; }
  .has-mw-4xl-widescreen {
    max-width: 56rem; }
  .has-mw-5xl-widescreen {
    max-width: 64rem; }
  .has-mw-6xl-widescreen {
    max-width: 72rem; }
  .has-mw-7xl-widescreen {
    max-width: 80rem; } }
`
export default cssStyle;
const cssStyle = `
