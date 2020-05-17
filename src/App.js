import React from 'react';

// props
// 親コンポーネントから子コンポーネントへデータを渡す際にpropsを使用する

const App = () => {
  const profiles = [
    { name: "Taro", age: 10},
    { name: "Hanako", age: 5},
    { name: "NoName" }
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

// デフォルトprops
// 個別のデータを渡さない場合のデフォルト値を定めておくことができる
User.defaultProps = {
  age: 1
}

export default App;
