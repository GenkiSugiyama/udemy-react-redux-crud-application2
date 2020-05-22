// Actionについて
// ・JSのオブジェクト
// オブジェクトの内部でtypeというキーとその値をもつオブジェクト
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => {
  return {
    type: INCREMENT // インクリメント側のアクション
  }
}

export const decrement = () => {
  return {
    type: DECREMENT // デクリメントのアクション
  }
}
