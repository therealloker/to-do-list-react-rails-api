import React from 'react';

const taskForm = (props) => (
    <form onSubmit={props.onSubmit} >
    <label>
        Task:
        </label>
    <input type="text" value={props.value} onChange={props.onChange} />
    <input type="submit" value="Submit" disabled={!props.value}/>
    </form>
);

export default taskForm;