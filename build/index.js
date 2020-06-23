'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".test-component {\n  background-color: #e0e0e0;\n  border: 1px solid #131111;\n  padding: 16px;\n  width: 360px;\n  text-align: center; }\n  .test-component .heading {\n    font-family: \"Avenir Next\", Helvetica, Arial, sans-serif;\n    font-size: 40px;\n    font-weight: bold; }\n  .test-component.test-component-secondary {\n    background-color: #131111;\n    color: #e0e0e0; }\n";
styleInject(css_248z);

var TestComponent = function (_a) {
    var theme = _a.theme;
    return (React.createElement("div", { "data-testid": "test-component", className: "test-component test-component-" + theme },
        React.createElement("h1", { className: "heading" }, "I'm the test component"),
        React.createElement("h2", null, "Made with love by Harvey")));
};

exports.TestComponent = TestComponent;
//# sourceMappingURL=index.js.map
