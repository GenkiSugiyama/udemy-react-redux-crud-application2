import React from 'react';

function App() {
  return (
    // ↓のhtmlのタグのような部分がJSX（JavaScriptXml）
    // Reactを用いてhtmlを出力するための言語
    // ここの部分はJavaScriptに変換されるが、変換後の素のJSを記述するより
    // JSXを用いたほうがより出力イメージに近い形で記述できるのでJSXが用いられる。
    <h1>Hello, React!!</h1>
  );
}

export default App;
