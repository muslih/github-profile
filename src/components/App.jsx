import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; 
import Profile from './github/Profile';
import Search from './github/Search';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: 'muslih',
      userData: [],
      userRepos: [],
      perPage: 15
    }
  }

  // get user data from github
  getUserData(){
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({userData: data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({username: nul});
        alert(err)
      }.bind(this)
    });
  }

  // get user repository from github
  getUserRepos(){
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({userRepos: data});
        
      }.bind(this),
      error: function(xhr, status, err){
        alert(err);
        this.setState({username: nul});
      }.bind(this)
    });
  }

  handleSubmit(username){
    this.setState({username: username}, function(){
      this.getUserData();
      this.getUserRepos();
    })
    
  }

  componentDidMount(){
    this.getUserData();
    this.getUserRepos();
  }

  render(){
    return(
      <div>
        <Search onSubmit = {this.handleSubmit.bind(this)} />
        <Profile {...this.state} />
      </div>
    )
  }
}

App.propTypes = {
  clientId: PropTypes.string,
  clientSecret: PropTypes.string
}

App.defaultProps = {
  clientId: 'a0b258996e94503cd9ea',
  clientSecret: 'c944cce436664ad7bc8809a424126032a21296eb'
}

export default App
