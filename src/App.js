import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
     <div>
         <div className={'container'}>
             <div className={'row'}>
                 <div className={'col-md-12'}>
                     <h2 className={'text-center'}>Quản lí công việc</h2>
                     <hr/>
                 </div>
                 <div className={'col-md-4'}>
                    <div className={'panel panel-warning'}>
                        <div className="panel-heading">Thêm công việc</div>
                        <div className="panel-body">
                            <form>
                                <div className={'form-group'}>
                                    <label htmlFor="name">Tên:</label>
                                    <input type="text" className={'form-control'} name={'name'} />
                                </div>
                                <div className={'form-group'}>
                                    <label htmlFor="status">Trạng thái:</label>
                                    <select name="status" id="" className={'form-control'}>
                                        <option value="1">Kích hoạt</option>
                                        <option value="0"> Ẩn </option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                 </div>

                 <div className={'col-md-8'}>
                    <div className={'row'}>
                        <div className={'col-md-12'}>
                            <button type={'button'} className={'btn btn-primary'}>Thêm công việc</button>
                            <br/><br/>
                        </div>

                        <div className={'col-md-6'}>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Recipient's username"
                                       aria-describedby="basic-addon2" />
                                    <span className="input-group-addon cursor" id="basic-addon2">Tìm Kiếm</span>
                            </div>
                        </div>

                        <div className={'col-md-6'}>
                            <button className={'btn btn-primary'}>Sắp xếp</button>
                            <br/><br/>
                        </div>

                        <div className={'col-md-12'}>
                            <table className="table table-hover">
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
                                        <input type="text" className={'form-control'} placeholder={'Tìm Kiếm'}/>
                                    </td>
                                    <td>
                                        <select name="" id="" className={'form-control'}>
                                            <option value="">Tất cả</option>
                                        </select>
                                    </td>
                                    <td>

                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>
                                        <button className={'btn btn-warning'}>Sủa</button> &ensp;
                                        <button className={'btn btn-danger'}>Xóa</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                 </div>

             </div>
         </div>
     </div>
    );
  }
}

export default App;
