import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import todosReducer from './modules/todos';

//Store생성
//하나의 프로젝트는 하나의 스토어만 가질 수 있다.
//하나의 스토어에서는 하나의 리듀서만 사용
//크롬 웹스토어에서 Redux DevTools 설치 -> F12 -> Redux -> state
const store = createStore(todosReducer, devToolsEnhancer());

ReactDOM.render(
  // <App />,
  // document.getElementById('root')

  //provider 사용
  //Provider 스토어 데이터 공급자 : App 컴포넌트에서 스토어를 사용할수 있다. props로 store를 전달.
  <Provider store={store}>
    <App />
  </Provider>,document.getElementById('root')
);