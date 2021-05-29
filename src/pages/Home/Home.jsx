import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Redux
import { connect } from 'react-redux'
// import { addToBag } from 'redux/actions/bagActions'

// Stylesheet
import './Home.scss'

// Components
import ItemBar from 'components/ItemBar/ItemBar'

class Home extends Component {

  // handleClick = (id) => {
  //   this.props.addToBag(id)
  // }

  render() {

    // let itemList = this.props.items.map(item=>{
    //   return(
    //     <div className="" style={{width:'200px',margin:'0 auto'}} key={item.id}>
    //       <div className="">
    //         <img src={item.img} alt={item.title}/>
    //         <span className="">{item.title}</span>
    //         <span to="/" className=""></span>
    //       </div>
    //
    //       <div className="card-content">
    //         <p>{item.desc}</p>
    //         <p><b>${item.price}</b></p>
    //       </div>
    //     </div>
    //   )
    // })

    return (

      <div className="home">
        <ItemBar />

        <div className="hero">
          <div className="hero__wrapper">
            <span className="hero__new">New</span>
            <h1 className="hero__heading">iMac</h1>
            <p className="hero__hello">Say Hello.</p>
            <p className="hero__price">From $1599</p>
            <button className="cta">Buy</button>
            <p className="hero__learn-more">
              Learn More >
            </p>
          </div>

          <figure className="mac__image" />
        </div>

        <section className="compare">
          <div className="compare__wrapper">
            <h2 className="compare__heading">Which Mac is right for you?</h2>
          
            <div className="compare__options">
              <span className="compare__option">Notebook</span>
              <span className="compare__option">Desktop</span>
            </div>

          </div>
        </section>
      </div>

    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToBag: (id) => {
//       dispatch(addToBag(id))
//     }
//   }
// }

export default Home
// connect(mapStateToProps, mapDispatchToProps)(Home)
