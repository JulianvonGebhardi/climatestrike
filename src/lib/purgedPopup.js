// eslint-disable-next-line no-unused-vars
const cssStyle = `
/*! Theme created with the Shuffle Editor (https://shuffle.dev) */
/* Bulma Utilities */
.button {
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
  .button:focus, .button:active {
    outline: none; }

.button {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }

 .content:not(:last-child), .title:not(:last-child), .message:not(:last-child) {
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

 .loader {
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
dt,
h2 {
  margin: 0;
  padding: 0; }


h2 {
  font-size: 100%;
  font-weight: normal; }

button {
  margin: 0; }

html {
  box-sizing: border-box; }

*, *::before, *::after {
  box-sizing: inherit; }

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


section {
  display: block; }

body,
button {
  font-family: "DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; }

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

span {
  font-style: inherit;
  font-weight: inherit; }

@keyframes spinAround {
  from {
    transform: rotate(0deg); }
  to {
    transform: rotate(359deg); } }

/* Bulma Elements */

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
  .button .icon, .button .icon.is-medium {
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
  .button:active {
    border-color: #2d23b1;
    color: #2d23b1; }
  .button.is-medium {
    font-size: 1rem; }

@media screen and (max-width: 768px) {
  .button.is-responsive {
    font-size: 0.65625rem; }
  .button.is-responsive.is-medium {
    font-size: 0.75rem; } }

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .button.is-responsive {
    font-size: 0.75rem; }
  .button.is-responsive.is-medium {
    font-size: 0.75rem; } }

.container {
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto; }
  @media screen and (min-width: 1024px) {
    .container {
      max-width: 960px; } }
  @media screen and (min-width: 1216px) {
    .container:not(.is-max-desktop) {
      max-width: 1152px; } }
  @media screen and (min-width: 1408px) {
    .container:not(.is-max-desktop):not(.is-max-widescreen) {
      max-width: 1344px; } }

.content p:not(:last-child) {
  margin-bottom: 1em; }


.content h2 {
  color: #15181c;
  font-weight: 600;
  line-height: 1.125; }

.content h2 {
  font-size: 1.75em;
  margin-bottom: 0.5714em; }
  .content h2:not(:first-child) {
    margin-top: 1.1428em; }

.content.is-medium {
  font-size: 1rem; }

.icon {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem; }
  .icon.is-medium {
    height: 2rem;
    width: 2rem; }

@keyframes moveIndeterminate {
  from {
    background-position: 200% 0; }
  to {
    background-position: -200% 0; } }

.title {
  word-break: break-word; }
  
  .title span {
    font-weight: inherit; }

.title {
  color: #15181c;
  font-family: "DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1; }

/* Bulma Form */

.help {
  display: block;
  font-size: 0.75rem;
  margin-top: 0.25rem; }

/* Bulma Components */

.message {
  background-color: #f1f5fb;
  border-radius: 0.25rem;
  font-size: 0.75rem; }
  .message a:not(.button):not(.tag):not(.dropdown-item) {
    color: currentColor;
    text-decoration: underline; }
  .message.is-medium {
    font-size: 1rem; }

/* Bulma Grid */
.column {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem; }
  @media screen and (min-width: 769px), print {
    .column.is-offset-1 {
      margin-left: 8.33333%; }
    .column.is-10, .column.is-10-tablet {
      flex: none;
      width: 83.33333%; } }
  @media screen and (min-width: 1024px) {
    .column.is-7-desktop {
      flex: none;
      width: 58.33333%; } }

/* Bulma Helpers */

.is-align-items-center {
  align-items: center !important; }

.is-relative {
  position: relative !important; }

.mx-auto {
  margin-left: auto !important;
  margin-right: auto !important; }

.mt-6 {
  margin-top: 1.5rem !important; }

.mb-6 {
  margin-bottom: 1.5rem !important; }

.px-0 {
  padding-left: 0px !important;
  padding-right: 0px !important; }

.px-2 {
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important; }

.px-5 {
  padding-left: 1.25rem !important;
  padding-right: 1.25rem !important; }

.px-6 {
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important; }

.py-6 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important; }

.is-size-5 {
  font-size: 1rem !important; }

.is-size-6 {
  font-size: 0.875rem !important; }

@media screen and (min-width: 769px), print {
  .is-size-2-tablet {
    font-size: 3rem !important; }
  .is-size-5-tablet {
    font-size: 1rem !important; } }

@media screen and (min-width: 1024px) {
  .is-size-4-desktop {
    font-size: 1.25rem !important; } }

.has-text-centered {
  text-align: center !important; }

.has-text-weight-medium {
  font-weight: 500 !important; }

.has-text-weight-semibold {
  font-weight: 600 !important; }

.is-inline-flex {
  display: inline-flex !important; }

/* Bulma Layout */

.section {
  padding: 2rem 1.5rem; }
  @media screen and (min-width: 1024px) {
    .section {
      padding: 2rem 3rem; }
      .section.is-medium {
        padding: 9rem 4.5rem; } }

.is-relative {
  position: relative; }

.button {
  font-weight: 500; }

.-mr-3 {
  margin-right: -0.75rem !important; }

@media screen and (max-width: 768px) {
  .mr-6-mobile {
    margin-right: 1.5rem !important; }
  .ml-6-mobile {
    margin-left: 1.5rem !important; }
  .px-4-mobile {
    padding-left: 1rem !important;
    padding-right: 1rem !important; } }

@media screen and (min-width: 769px), print {
  .mb-6-tablet {
    margin-bottom: 1.5rem !important; }
  .mb-12-tablet {
    margin-bottom: 3rem !important; }
  .px-6-tablet {
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important; } }

button {
  z-index: 1500 !important; }
`
export default cssStyle;
