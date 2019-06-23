import React from 'react'  
import { Route, Link } from 'react-router-dom'  
  
const Contacts = ({ match }) => <p>{match.params.id}</p>  
  
class Contact extends React.Component {  
  render() {  
    const { url } = this.props.match  
    return (  
      <div>  
        <h1>Welcome to Contact Page</h1>  
        <strong>-- Select contact Name --</strong>  
        <ul>  
          <li>  
            <Link to="/contact/Tissana">Tissana </Link>  
          </li>  
          <li>  
            <Link to="/contact/Sunisa">Sunisa </Link>  
          </li>  
          <li>  
            <Link to="/contact/Phanwadee">Phanwadee </Link>  
          </li>  
          <li>  
            <Link to="/contact/Piyamas">Piyamas </Link>  
          </li>  
        </ul>  
        <Route path="/contact/:id" component={Contacts} />  
      </div>  
    )  
  }  
}  
export default Contact

