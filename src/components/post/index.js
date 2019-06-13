import React,{Component} from 'react'
class test extends Component {
  componentDidMount(){
    document.title = "test";
  }
  render() {
    return (
      <div>
        <h1>404 : Not Found :(</h1>
      </div>
    )
  }
}

export default test;