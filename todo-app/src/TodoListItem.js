import React from 'react';
import {
    MdCheckBoxOutlineBlack,
    MdCheckBox,
    MdREmoveCircleOutline,
}from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = () => {
    return (
        <div className="TodoListItem">
            <div className="checkbox">
                <MdCheckBoxOutlineBlack />
                <div className="text">할 일</div>
            </div>
            <div className="remove">
                <MdREmoveCircleOutline />
            </div>
        </div>
    )
}

export default TodoListItem;