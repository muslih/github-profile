import React, {Component} from 'react';

class Search extends Component{
  onSubmit(e){
    e.preventDefault();
    console.log('submitted')
    let username = this.refs.username.value.trim();
    if(!username){
      alert("Please enter username!");
      return;
    }

    this.props.onSubmit(username);
    this.refs.username.value = '';
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Search github Users</label>
          <input type="text" ref="username" className="form-control" />
        </form>
      </div>
    )
  }
}

export default Search