import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from './../actions';

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:null,
            status:false
        }
    }
    componentWillMount  () {
        if(this.props.taskEditing){
            this.setState({
                id:this.props.taskEditing.id,
                name:this.props.taskEditing.name,
                status:this.props.taskEditing.status
            })
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.taskEditing){
            console.log(nextProps)
            this.setState({
                id:nextProps.taskEditing.id,
                name:nextProps.taskEditing.name,
                status:nextProps.taskEditing.status
            })
        }else if(!nextProps.taskEditing){
            this.setState({
                id:null,
                name:''
            })
        }
    }
    closeTaskForm = () =>{
        this.props.onCloseForm();
    }
    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        // this.props.receiveFrom(this.state);
        this.props.onAddTask(this.state);
        this.closeTaskForm();
    }
    render() {
        // console.log(this.props.taskEditing)
        var {id} = this.state;
        return (
            <div>
                <div className={'panel panel-warning'}>
                    <div className="panel-heading">
                        <p className={'pull-left'}>
                            {id?'Cập nhập công việc':'Thêm công việc'}
                        </p>
                        <span className={'pull-right fa fa-times-circle cursor'} onClick={this.closeTaskForm}></span>
                        <div className={'clearfix'}></div>
                    </div>

                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className={'form-group'}>
                                <label htmlFor="name">Tên:</label>
                                <input type="text" className={'form-control'} name={'name'} onChange={this.onChange} value={this.state.name?this.state.name:''} />
                            </div>
                            <div className={'form-group'}>
                                <label htmlFor="status">Trạng thái:</label>
                                <select name="status" id="" className={'form-control'} onChange={this.onChange} value={this.state.status}>
                                    <option value={true}>Kích hoạt</option>
                                    <option value={false}> Ẩn </option>
                                </select>
                            </div>
                            <div className={'text-center'}>
                                <button type={'submit'} className={'btn btn-warning'}>Lưu Lại</button> &ensp;
                                <button type={'reset'} className={'btn btn-danger'}>Hủy bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const  mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return {
        onAddTask : (task) => {
            dispatch(action.addTask(task))
        },
        onCloseForm : () => {
            dispatch(action.closeForm());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
