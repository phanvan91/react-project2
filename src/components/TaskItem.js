import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from "./../actions";
class TaskItem extends Component {
    onUpdateStatus (id) {
        this.props.onUpdateSatus(id);
    }
    onDelete = (id) => {
        this.props.onDelete(id);
    }
    onUpdate(id){
        this.props.onUpdate(id);
    }
    render() {
        var {task,index} = this.props;
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{task.name}</td>
                <td className={'text-center'}>
                    <label onClick={()=>this.onUpdateStatus(task.id)} className={task.status?'label label-success cursor':'label label-danger cursor'}>{task.status?'Kích Hoạt':'Ẩn'}</label>
                </td>
                <td>
                    <button type={'button'} onClick={()=>this.onUpdate(task.id)} className={'btn btn-warning'}>Sủa</button> &ensp;
                    <button type={'button'} onClick={()=>this.onDelete(task.id)} className={'btn btn-danger'}>Xóa</button>
                </td>
            </tr>
        );
    }
}
const mapStateToProps = state => {
    return {

    };
}
const mapDisPatchToProps = (dispatch,props) => {
    return {
        onUpdateSatus: (id) => {
            dispatch(action.updateStatus(id))
        }
    };
}

export default connect(mapStateToProps,mapDisPatchToProps)(TaskItem);
