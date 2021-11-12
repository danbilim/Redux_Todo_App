/* TodoTemplate.js */
import React from 'react'
import '../styles/TodoTemplate.scss';

import {connect} from 'react-redux';
import {changeInput, insert, toggle, remove} from '../modules/todos';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

//기존...
// childrend => app.js에 선언한 insert, list, 기타 선언한 태그내용들
//function TodoTemplate({children}) {
    // return (
    //     <div className="TodoTemplate">
    //         <div className="app-title">일정 관리</div>
    //         <div className="content">{children}</div>
    //     </div>
    // )
//}

//export default TodoTemplate;


//리덕스 변경
const TodoTemplate = ({input, todos, changeInput, insert, toggle, remove}) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">
                <TodoInsert input={input} onInsert={insert} onChangeInput={changeInput} />
                <TodoList todos={todos} onRemove={remove} onToggle={toggle} />
            </div>
        </div>
    )
};

//connect() 함수로 연결된 컴포넌트에 변경된 스토어의 데이터를 전파하여 동기화함.
export default connect(
    ({todos}) => ({
        input : todos.input,
        todos : todos.todos,
    }), 
    {changeInput, insert, toggle, remove},
)(TodoTemplate);

//export default connect(
//     state => ({
//         input : state.todos.input,
//         todos : state.todos.todos,
//     }),
//     dispatch => ({
//         changeInput : () => dispatch(changeInput()),
//디스패치 = 가게로 따지면 종업원 역할.
//액션을 디스패치 하기 위해 액션생성함수를 불러와서 액션객체를 만들고 디스패치 한다.
//이때 각 액션 생성 함수를 호출하고 디스패치로 감싸야 한다.
//         insert: () => dispatch(insert()),
//         toggle: () => dispatch(toggle()),
//         remove: () => dispatch(remove()),
//     }),
// )(TodoTemplate);
