import React,{Component} from 'react'
class NotFound extends Component {
  componentDidMount(){
    document.title = "Amazing Page";
  }
  render() {
    return (
      <div>
        <h1>404 : Not Found :(</h1>
      </div>
    )
  }
}

export default NotFound;
// export default () => (
//   <div className="has-text-centered">
//     <section className="hero is-danger">
//       <div className="container">
//         <h1 className="title">About</h1>
//       </div>
//     </section>
//   </div>
// )