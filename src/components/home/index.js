import React,{Component} from 'react'
import { connect } from 'react-redux'
import { increment } from '../../actions/actions'

// class Home extends Component {
//   render(){
//     return (
//       <div>

//       </div>
//     )
//   }
// }

const HomeComponent = ({ message, counter, dispatch  }) => (
  <div className="has-text-centered">
    <section className="hero is-danger">
      <div className="container">
        <h1 className="title">Home</h1>
      </div>
    </section>
    <div className="container">
      <div className="columns column is-12">
        <h1>Counter : {counter}</h1>
      </div>

      <div className="buttons">
        <button className="button is-primary" onClick={() => dispatch(increment(1))} >+1</button>
        <button className="button is-link" onClick={() => dispatch(increment(2))}>+2</button>
        <button className="button is-info" onClick={() => dispatch(increment(3))}>+3</button>
      </div>

      <div className="buttons">
        <button className="button is-primary" onClick={() => dispatch(increment(-1))}>-1</button>
        <button className="button is-link" onClick={() => dispatch(increment(-2))}>-2</button>
        <button className="button is-info" onClick={() => dispatch(increment(-3))}>-3</button>
      </div>
    </div>
  </div>
  
)

const mapStateToProps = function(state) {
  return {
    message: 'This is message from mapStateToProps',
    counter: state.counters || 0 
    
  }
}

const Home = connect(mapStateToProps)(HomeComponent)
export default Home