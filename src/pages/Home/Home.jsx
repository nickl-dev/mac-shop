import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
              Learn More
            </p>
          </div>

          <figure className="hero__image" />
        </div>

        <section className="what-makes">
            <h2 className="what-makes__heading">What makes a Mac a Mac?</h2>

          <div className="what-makes__grid">

            <div className="tile tile-1">
              <div className="tile__text">
                <p className="tile__heading">Why Mac</p>
                  <p className="tile__promo">
                  Incredible&nbsp;power.
                  <br />
                  Incredibly&nbsp;simple.
                </p>
              </div>
            </div>

            <div className="tile tile-2">
              <div className="tile__text">
                <p className="tile__heading">macOS Big Sur</p>
                <p className="tile__promo">Doing it all, in all new ways</p>
              </div>
            </div>

            <div className="tile tile-3">
              <div className="tile__text">
                <p className="tile__heading">Continuity</p>
                <p className="tile__promo">
                  All&nbsp;your&nbsp;devices.
                  <br />
                  One&nbsp;seamless&nbsp;experience.
                </p>
              </div>
            </div>

            <div className="tile tile-4">
              <div className="tile__text">
                <p className="tile__heading">iCloud</p>
                <p className="tile__promo">
                  Store&nbsp;it&nbsp;all.&nbsp;Access&nbsp;it&nbsp;anywhere.
                </p>
              </div>
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
