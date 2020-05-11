import React from 'react';

function App() {
  return (
    // return内は一つのタグで囲わないといけない
    // そうすると不必要なhtmlタグが出力されてしまう
    // それを避けるためにreturn内を<React.Fragment></React.Fragment>で囲うと
    // 不要なhtmlタグが出力されなくなる
    // htmlのfor、classはJSX内ではそれぞれhtmlFor、classNameとする
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input id="bar" type="text" onClick={() => {console.log("Hello!")}} />
    </React.Fragment>
    
  );
}

export default App;
