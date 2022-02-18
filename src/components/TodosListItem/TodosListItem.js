import _ from 'lodash';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './TodosListItem.css';

const TodosListItem = ({ todo, handleClick }) => (
    <li className={classNames('todos-list-item', {
        completed: todo.completed
    })}
    onClick={handleClick(todo.id)}>
        {todo.description}
    </li>
);

TodosListItem.defaultProps = {
    todo: {},
    toggleTodo: _.noop
};

TodosListItem.propTypes = {
    todo: PropTypes.shape({
        completed: PropTypes.bool,
        description: PropTypes.string,
        id: PropTypes.number
    }),
    handleClick: PropTypes.func
};

export default TodosListItem;



// ```
// Simpler way of exporting TodosListItem but we use the
// above method to have more control over properties of 
// TodosListItem. You can try commenting the code above 
// and run this but keep in mind the CSS class names will
// have to be changed as we are using module ClassNames
// in the above code.
// ```
// 
// export default ({ todo, handleClick }) => (
//     <li 
//     className={todo.completed ? 'completed' : ''}
//     onClick={handleClick(todo.id)}
//     >
//         {todo.description}
//     </li>
// );