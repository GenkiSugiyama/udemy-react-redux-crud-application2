import React from 'react';
import PropTypes from 'prop-types';

// prop-types
// プロパティの型チェック

const App = () => {
  const profiles = [
    { name: "Taro", age: 10},
    { name: "Hanako", age: 5},
    { name: "NoName", age: 3}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
      {/* <User name={"Taro"} age={10} /> User コンポーネントに対してname属性「Taro」を渡している */}
      {/* <User name={"Hanako"} age={5} /> */}
    </div>
  )
}

const User = (props) => {
  return <div>Hi!, I am {props.name}, and {props.age} years old! </div>
}

User.propTypes = {
  // 「コンポーネント名.データ型」と記述することでそのpropsに対するデータ型を指定できる
  // ここで指定されているデータ型と異なるデータが入力されているとブラウザのConsoleでWarningが表示される
  // また、必ずデータが必要なpropsに対しては「.isRequired」で入力されているかどうかの確認となる
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
