import React, { Component } from 'react';
import './App.css';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm:false,
            taskEditing:null
        }
    }
    componentWillMount(){
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks:tasks
            });
        }
    }
    // GenerateData = () =>{
    //     var randomstring = require("randomstring");
    //     var tasks = [
    //         {id: randomstring.generate(),name:'Học Lập Trình',status:true},
    //         {id:  randomstring.generate(),name:'Đi bơi',status:true},
    //         {id:  randomstring.generate(),name:'Ngủ',status:false},
    //     ]
    //
    //     this.setState({
    //         tasks:tasks
    //     })
    //     localStorage.setItem('tasks',JSON.stringify(tasks));
    //     console.log(this.state.tasks);
    // }
    addWork = () => {
        if(this.state.isDisplayForm && this.state.taskEditing !== null){
            this.setState({
                isDisplayForm:true,
                taskEditing:null
            })
        }else{
            this.setState({
                isDisplayForm:!this.state.isDisplayForm,
                taskEditing:null
            })
        }

    }
    closeTaskForm = () =>{
        this.setState({
            isDisplayForm:false
        })
    }
    openTaskForm = () =>{
        this.setState({
            isDisplayForm:true
        })
    }
    receiveFrom = (taskform) => {
        // console.log(taskform);
        var {tasks} = this.state;
        if(taskform.id === null){
            var randomstring = require("randomstring");
            var task = {id:randomstring.generate(),name:taskform.name,status:taskform.status === 'true' ? true:false};
            tasks.push(task);
        }else{
            var index = this.findIndex(taskform.id);
            tasks[index] = taskform
        }

        this.setState({
            tasks:tasks,
            taskEditing:null
        })
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }

    onUpdateStatus = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
       if(index !== -1){
           tasks[index].status = !tasks[index].status;
           this.setState({
               tasks:tasks
           })
       }
       localStorage.setItem('tasks',JSON.stringify(tasks))
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
    onFileter(filterName,filterStatus){
        console.log(filterName,'-',filterStatus)
    }
  render() {
        var {tasks,isDisplayForm, taskEditing} = this.state;
        var elementTaskForm = isDisplayForm ? <TaskForm closeTaskForm={this.closeTaskForm} receiveFrom={this.receiveFrom}  taskEditing={taskEditing} /> : null;
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
                          <Control/>
                          {/*End - Search , Sort*/}
                          <div className={'col-md-12'}>
                              <TaskList tasks={tasks} onUpdateStatus={this.onUpdateStatus} onDelete={this.onDelete} onUpdate={this.onUpdate} onFileter={this.onFileter} />
                          </div>

                      </div>
                  </div>

              </div>
          </div>
      </div>;
  }
}

export default App;
