// reducer
// アクションが発生した時に、そのアクションに組み込まれているtypeに応じて状態をどう変化させるかを定義するもの
// reducerディレクトリ内のindex.jsでは全reducerを総括するためのファイル
// 全reducerを1つのreducerに結合させる

import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })