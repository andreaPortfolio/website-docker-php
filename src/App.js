import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import debounce from 'lodash.debounce';
import axios from 'axios';
import { BoxList } from './BoxList';
import { Post } from './Post';




class App extends Component {


  componentDidMount(){

      axios.get('http://localhost:8080/api/images.php').then((response)=>{
         console.log(response.data)
      });
      window.addEventListener('scroll', debounce(() =>{
          let supportPageOffset = window.pageXOffset !== undefined;
          let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
          let scroll = {
              x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
              y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
          };
          let element = document.getElementById('expandable-container');
          let intViewportWidth = window.innerWidth;
          console.log(scroll.y )
          if(scroll.y > 450){ // 3000px (arbitrary - put whatever point you need there.)
              // target element to change attribute
              element.classList.add("expandable");//change the attribute.
              console.log(element.offsetWidth + (scroll.y -450) +50 +'px')
              //let expand = element.offsetWidth + (scroll.y -450) +50;
              //console.log(expand,intViewportWidth )

                //  element.style.minWidth = '100%'



          }
          else{
              element.classList.remove("expandable");
          }

      }, 300));//ms
  }


  render() {

    console.log(window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop);
    return (
      <div id='main'>
          <div className="head">
              <div className="header_container">
            <div className="text_header_1">Asdrubale</div>
              <div className="text_header_2">lorem ipsum dolor</div>
              </div>
          </div>
          <div className="page">
            <div className="background-image"/>

            <div id='expandable-container'className="container">

            <div style={{ display: 'flex', justifyContent: 'space-around', minWidth: '1152px'}}>
                <Post/>
                <BoxList/>
            </div>

            </div>
          </div>
      </div>

    );
  }
}

export default App;
