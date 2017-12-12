import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; 

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: 'muslih',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }

  render(){
    return(
      <div>
        {this.props.clientSecret}
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
