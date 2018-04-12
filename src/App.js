import React, { Component } from 'react';
import './App.css';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import {connect} from 'react-redux';
import * as action from './actions';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskEditing:null,
            filter:{
                name:'',
                status:-1
            },
            keyword:''
        }
    }


    addWork = () => {
        // if(this.state.isDisplayForm && this.state.taskEditing !== null){
        //     this.setState({
        //         isDisplayForm:true,
        //         taskEditing:null
        //     })
        // }else{
        //     this.setState({
        //         isDisplayForm:!this.state.isDisplayForm,
        //         taskEditing:null
        //     })
        // }
        this.props.onToggleForm();

    }
    openTaskForm = () =>{
        this.setState({
            isDisplayForm:true
        })
    }
    onDelete = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if(index !== -1){
            tasks.splice(index,1);
            this.setState({
                tasks:tasks
            })
            localStorage.setItem('tasks',JSON.stringify(tasks));
        }
        this.closeTaskForm();

    }
    onUpdate = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        var taskEditing = tasks[index];
        this.setState({
            taskEditing:taskEditing
        })
        this.openTaskForm();
    }
    findIndex(id){
        var {tasks} = this.state;
        var result = -1;
        tasks.forEach((task,index)=>{
            if(task.id === id){
                result = index;
            }
        })
        return result;
    }
    onFilter = (filterName,filterStatus) => {
        filterStatus = parseInt(filterStatus,10);
        this.setState({
            filter: {
                name:filterName.toLowerCase(),
                status:filterStatus
            }
        })
    }
    onSearch = (keyword) => {
       this.setState({
           keyword:keyword
       })
    }
  render() {
        var {isDisplayForm} = this.props;
        var { taskEditing} = this.state;
        // if(filter){
        //     if(filter.name){
        //         tasks = tasks.filter((task)=>{
        //             return task.name.toLowerCase().indexOf(filter.name) !== -1
        //         })
        //     }
        //     tasks = tasks.filter((task)=>{
        //         if(filter.status === -1){
        //             return task;
        //         }else{
        //             return task.status === (filter.status === 1 ? true : false)
        //         }
        //     })
        // }
        // if(keyword){
        //     tasks = tasks.filter((task)=>{
        //         return task.name.toLowerCase().indexOf(keyword) !== -1;
        //     })
        // }
        var elementTaskForm = isDisplayForm ? <TaskForm taskEditing={taskEditing} /> : null;
      return <div>
          <div className={'container'}>
              <div className={'row'}>
                  <div className={'col-md-12'}>
                      <h2 className={'text-center'}>Quản lí công việc</h2>
                      <hr/>
                  </div>
                  <div className={'col-md-4'}>
                      {elementTaskForm}
                  </div>

                  <div className={isDisplayForm?'col-md-8':'col-md-12'}>
                      <div className={'row'}>
                          <div className={'col-md-12'}>
                              <button type={'button'} className={'btn btn-primary'} onClick={this.addWork}>Thêm công việc</button>
                              &ensp;
                              {/*<button type={'button'} className={'btn btn-danger'} onClick={this.GenerateData}>Generate Data</button>*/}
                              <br/><br/>
                          </div>
                          {/*Search - Sort*/}
                          <Control onSearch={this.onSearch}/>
                          {/*End - Search , Sort*/}
                          <div className={'col-md-12'}>
                              <TaskList onDelete={this.onDelete} onUpdate={this.onUpdate} onFilter={this.onFilter} />
                          </div>

                      </div>
                  </div>

              </div>
          </div>
      </div>;
  }
}
const mapStateToProps = state => {
    return {
        isDisplayForm : state.isDisplayForm
    };
}
const mapDisPatchToProps = (dispatch,props) => {
    return {
        onToggleForm: () => {
            dispatch(action.toggleForm());
        }
    };
}
export default connect(mapStateToProps,mapDisPatchToProps)(App);
