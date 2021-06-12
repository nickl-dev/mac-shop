import React from 'react'
import { Link } from 'react-router-dom'
import './ItemBarItem.scss'

const ItemBarItem = (props) => {
  return (
    <Link to="/shop">
      <li className="item">
        <img src={props.icon} className="item__icon" alt={props.label} />
        <p className="item__label">{props.label}</p>
      </li>
    </Link>
    )
}

export default ItemBarItem
