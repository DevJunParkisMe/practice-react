import { Link } from "react-router-dom"

const RouteNav = () => {
  return (
    <div>
       <ul>
        <li><Link to='/' role="button">Home</Link></li>
        <li><Link to='/login' role="button">Login</Link></li>
        <li><Link to='/join' role="button">Join</Link></li>
      </ul>
    </div>
  )
}

export default RouteNav
