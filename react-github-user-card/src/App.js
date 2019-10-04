import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  
constructor(){
  super();
  this.state = {
    user: {}
  }
}

  fetchUser = () => {
    axios.get(`https://api.github.com/users/ali-dervisoglu`)
      .then(result => {
        console.log(result);
        this.setState({
          user: result.data
        })
      })
      .catch(error => {
        console.log('error:', error)
      })
  }

  componentDidMount() {
    this.fetchUser();
  }

  render (){
    return (
      <div>
        {this.state.user.name}
      </div>
    )
  }
}

export default App;
