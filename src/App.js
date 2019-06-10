import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'
import Routing from './routes'
class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
            <NavLink to="/posts" activeClassName="is-active" className="navbar-item">Posts</NavLink>
            <NavLink to="/projects" activeClassName="is-active" className="navbar-item">Projects</NavLink>
            <NavLink to="/about" activeClassName="is-active" className="navbar-item">About</NavLink>
          </div>
        </div>
        <Routing />
      </div>  
    )
  } 
}
export default App