import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'
import Routing from '../../routes'
class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar-menu" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/00.png'})`}} >
          <div className="navbar-end" style= {{fontSize:16,fontWeight:'bold'}}>
            <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
            <NavLink to="/posts" activeClassName="is-active" className="navbar-item">Posts</NavLink>
            <NavLink to="/about" activeClassName="is-active" className="navbar-item">About</NavLink>
            <NavLink to="/projects" activeClassName="is-active" className="navbar-item">เทสภาษาไทย</NavLink>
          </div>
        </div>
        <Routing />
        <div>
        </div>
      </div>  
    )
  } 
}
export default App