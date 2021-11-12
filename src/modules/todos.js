import { combineReducers } from "redux";

//상태값이 변경되는 action을 정의
//상태에 변화가 필요하다면 액션을 일으켜야한다.
//액션은 객체로 표현되면 type필드를 반드시 가지고 있어야 한다.
//액션타입은 대문자로 정의, 액션타입 = 모듈이름/액션이름

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋값을 변경함
const INSERT = 'todos/INSERT'; //새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; //todo를 체크/체크해제함
const REMOVE = 'todos/REMOVE'; //todo를 제거함

//액션 생성 함수는 액션 객체를 만들어주느 함수이다. 화살표 함수로도 표현이 간으하다.
export const changeInput = input =>({
    type : CHANGE_INPUT,
    input
});

let id = 4; //insert 가 호출 될 떄마다 1씩 더해집니다.

export const insert = value => ({
    type : INSERT,
    todo : {
        id : id++, 
        text : value, 
        checked : false, 
    }
});

export const toggle = id => ({
    type : TOGGLE,
    id
});

export const remove = id => ({
    type : REMOVE,
    id
})

const initialState = {
    input : '',
    todos : [
        {
            id: 1,
            text : '리액트의 기초 알아보기',
            checked : true,
        },
        {
            id: 2,
            text : '컴포넌트 스타일링 해 보기',
            checked : true,
        },
        {
            id: 3,
            text : '일정 관리 앱 만들어 보기',
            checked : false,
        },
    ],
};

//reducer 생성
//리듀서는 state값을 변경.
//앞서 정의한 상태값으로 초기화하고 액션에 의해 상태값을 변화시키는 내용이 작성
//리듀서는 현재 상태와 액션 객체를 받아, 새로운 상태를 리턴하는 함수
function todos(state = initialState, action) {
    switch(action.type) {
        case CHANGE_INPUT : 
            return {
                ...state,
                input : action.input
            };
        case INSERT : 
            return {
                ...state,
                todos : state.todos.concat(action.todo)
            };
        case TOGGLE : 
            return {
                ...state,
                todos : state.todos.map(todo =>
                    todo.id ===action.id ? {...todo, checked: !todo.checked
                    } : todo)
            };
        case REMOVE : 
            return {
                ...state,
                todos : state.todos.filter(todo => todo.id !== action.id)
            };
        default :
            return state;
    }
}

//combineReducers({리듀서,리듀서})는 리듀서가 여러개일 경우 하나로 합칠때 사용
const todosReducer = combineReducers({todos});
export default todosReducer;