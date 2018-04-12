import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            keyword:''
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]:value
        })
    }
    onSearch = () => {
        this.props.onSearch(this.state.keyword)
    }
    render() {
        // var {keyword} = this.state;
        return (
            <div className={'col-md-6'}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Recipient's username" name={'keyword'} onChange={this.onChange} aria-describedby="basic-addon2" />
                    <span className="input-group-addon cursor" id="basic-addon2" onClick={this.onSearch}>Tìm Kiếm</span>
                </div>
            </div>
        );
    }
}

export default Search;
