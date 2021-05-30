import MacPro16 from 'assets/icons/macbook-pro-16.svg'
import { ADD_TO_BAG } from 'redux/actions/bagActions'

const initState = {
    items: [
        {
          id:1,
          title:'MacBook Air',
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
          price: 1299,
          img: MacPro16
        }, {
          id:2,
          title:'MacBook Pro 13"',
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
          price: 1699,
          img: MacPro16
        }, {
          id:3,
          title:'MacBook Pro 16"',
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
          price: 2999,
          img: MacPro16
        }, {
          id:4,
          title:'iMac 24"',
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
          price: 1599,
          img :MacPro16
        }, {
          id:5,
          title:'iMac 27"',
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
          price: 2199,
          img: MacPro16
        }, {
          id:6,
          title:'Mac Pro',
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
          price: 7499,
          img: MacPro16
        }, {
          id:7,
          title:'Mac mini',
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
          price: 899.00,
          img: MacPro16
        }
    ],
    addedItems:[],
    total: 0

}
const bagReducer = (state = initState, action)=>{

    return state;

}
export default bagReducer;
