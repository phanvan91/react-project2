import React, { Component } from 'react';
import TaskItem from "./TaskItem";
import {connect} from 'react-redux';
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
       this.props.onFilter(
           name === 'filterName' ? value : this.state.filterName,
           name === 'filterStatus' ? value : this.state.filterStatus,
       )
       this.setState({
           [name] : value
       })
        // console.log(this.state)
    }
    render() {
        // console.log(this.props.todos)
        var tasks = this.props.tasks;
        var {filterName,filterStatus} = this.state;
        var elementTasks =  tasks.map((task,index) =>{
            return <TaskItem key={task.id} index={index} task={task} onDelete={this.props.onDelete} onUpdate={this.props.onUpdate} taskEditing={this.props.taskEditing} />
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
                        <input type="text" className={'form-control'} placeholder={'Tìm Kiếm'} name={'filterName'} onChange={this.onChange} value={filterName}/>
                    </td>
                    <td>
                        <select  className={'form-control'}  name={'filterStatus'} onChange={this.onChange} value={filterStatus}>
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

const mapStateToProps = (state) =>{
    return {
        tasks: state.tasks
    }
}
export default connect(mapStateToProps,null)(TaskList);
