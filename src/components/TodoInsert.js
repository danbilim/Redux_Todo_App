/* TodoInsert.js */
import React, {useState, useCallback} from 'react'
import {MdAdd} from 'react-icons/md'
import '../styles/TodoInsert.scss'

//기존
// function TodoInsert({onInsert}) {
//     const [value, setValue] = useState('');

//     const onChange = useCallback(e => {
//         setValue(e.target.value);
//     }, []);

//     const onSubmit = useCallback(e => {
//         onInsert(value);
//         setValue('');
//         e.preventDefault();
//         //submit이벤트는 브라우저에서 새로고침을 발생시킨다
//     }, [value]);

//     return (
//         <form className="TodoInsert" onSubmit={onSubmit}>
//             <input 
//                 placeholder="할 일을 입력하세요" 
//                 value={value} 
//                 onChange={onChange}
//             />
//             <button type="submit">
//                 <MdAdd />
//             </button>
//         </form>
//     )}

//리덕스 변경
const TodoInsert = ({input, onChangeInput, onInsert}) =>{
    const onChange = e => {
        onChangeInput(e.target.value);
    };

    const onSubmit = e => {
        onInsert(input);
        e.preventDefault();
        onChangeInput('');
    }
    
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
                placeholder="할 일을 입력하세요"  
                //기존
                //value={value}
                //리덕스변경
                value={input}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
};
export default TodoInsert;