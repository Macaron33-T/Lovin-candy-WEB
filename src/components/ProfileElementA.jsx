import { Link } from "react-router-dom";
import "./ProfileElement.css";

export default function ProfileElementA() {
  return (
    <div className="element-a">
      <p>Order</p>
      <ul>
        <li>
          <Link className="hover:"to="/myorder">My Order</Link>
        </li>
        <li>
          <Link to="/favitems">Favourite items</Link>
        </li>
      </ul>
      <p>Account</p>
      <ul>
        <li>
          <Link to="/personalinformation">Personal Information</Link>
        </li>
        <li>
          <Link to="/address">Address</Link>
        </li>
        <li>
          <Link to="/payment">Payment</Link>
        </li>
      </ul>
    </div>
  )
}