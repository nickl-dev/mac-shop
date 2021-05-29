import React from 'react'
import './ItemBarItem.scss'

const ItemBarItem = (props) => {
  return (
    <li className="item">
      <img src={props.icon} className="item__icon" alt={props.label} />
      <p className="item__label">{props.label}</p>
    </li>  )
}

export default ItemBarItem
