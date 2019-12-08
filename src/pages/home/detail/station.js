import React,{memo}from 'react';

const station = memo((props) => {
    props.history.replace({pathname:"/home/detail",state:{"id":props.location.state.id}})
    return (
        <div>

        </div>
    );
})

export default station;
