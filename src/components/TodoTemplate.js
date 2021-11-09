/* TodoTemplate.js */
import React from 'react'
import '../styles/TodoTemplate.scss';

// childrend => app.js에 선언한 insert, list, 기타 선언한 태그내용들
function TodoTemplate({children}) {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    )
}

export default TodoTemplate;