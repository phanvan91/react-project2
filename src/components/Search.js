import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className={'col-md-6'}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Recipient's username"
                           aria-describedby="basic-addon2" />
                    <span className="input-group-addon cursor" id="basic-addon2">Tìm Kiếm</span>
                </div>
            </div>
        );
    }
}

export default Search;
