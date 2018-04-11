import React, { Component } from 'react';
import TaskItem from "./TaskItem";

class TaskList extends Component {

    constructor(props){
        super(props);
        this.state = {
            filterName :'',
            filterStatus : -1
        }
    }
    onChange =(event) =>{
        var target = event.target;
       var name = target.name;
       var value = target.value;
       this.props.onFileter(
           name === 'filterName' ? value: "",
           name === 'filterStatus' ? value : null
       )
       this.setState({
           [name] : value
       })
        console.log(this.state)
    }
    render() {
        // console.log(this.state.filterStatus)
        var tasks = this.props.tasks;
        var elementTasks =  tasks.map((task,index) =>{
            return <TaskItem key={task.id} index={index} task={task} onUpdateStatus={this.props.onUpdateStatus} onDelete={this.props.onDelete} onUpdate={this.props.onUpdate} taskEditing={this.props.taskEditing} />
            // console.log(this.props.taskEditing);
        });
        return (
            <table className="table table-hover table-bordered">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Tên</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row"></th>
                    <td>
                        <input type="text" className={'form-control'} placeholder={'Tìm Kiếm'} name={'filterName'} onChange={this.onChange} value={this.state.filterName}/>
                    </td>
                    <td>
                        <select  className={'form-control'} onChange={this.onChange} name={'filterStatus'} value={this.state.filterStatus}>
                            <option value={-1}>Tất cả</option>
                            <option value={1}>Kích Hoạt</option>
                            <option value={0}>Ẩn</option>
                        </select>
                    </td>
                    <td>

                    </td>
                </tr>
                {elementTasks}
                </tbody>
            </table>
        );
    }
}

export default TaskList;
