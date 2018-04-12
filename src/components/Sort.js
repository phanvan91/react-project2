import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
            <div className={'col-md-6'}>
                <div className="btn-group">
                    <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                        Sắp xếp <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a href="">Tên A-Z</a></li>
                        <li><a href="">Tên Z-a</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="">Trạng thái kích hoạt</a></li>
                        <li><a href="">Trạng thái ẩn</a></li>
                    </ul>
                </div>
                <br/><br/>
            </div>
        );
    }
}

export default Sort;
