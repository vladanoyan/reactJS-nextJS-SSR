import React, { Component } from "react"
import dynamic from "next/dynamic"
const OwlCarouselPages = dynamic(import("react-owl-carousel"));
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import cs from "./owl-pages.css"

library.add(faTh);

class OwlcarouselPages extends Component {
  constructor() {
    super()
    this.state = {
      position: ""
    }
  }
  render() {
    const options = {
      loop: true,
      autoplay: true,
      margin: 0,
      slideBy: 1,
      dotsEach: true,
      animateOut: "fadeOutLeft",
      touchDrag: true,
      startPosition: this.props.position - 1,
      responsive: {
        0: {
          items: 1
        }
      }
    }

    return (
      <div className={cs.OwlcarouselPages}>
        <FontAwesomeIcon
          icon="th"
          size='2x'
          className={cs.IconToggle}
          onClick={this.props.toggleClick}
        />
        <OwlCarouselPages className="owl-theme" {...options}>
          {this.props.items.map((item, index) => {
            return (
              <div
                className=""
                style={{ animationDuration: `${item.timer}s` }}
                key={index}
              >
                <div className={`${cs.item} ${cs.imgPages}`}>
                  <img src={item.src} alt={item.name} />
                </div>
              </div>
            )
          })}
        </OwlCarouselPages>
      </div>
    )
  }
}

export default OwlcarouselPages
