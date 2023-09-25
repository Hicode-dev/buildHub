"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import TrustedCards from "./TrustedCards";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 4,
      slidesToScroll: 1
      
    };
    return (
      <div className="mt-3">
        <Slider {...settings}>
          <div>
            <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
          </div>
          <div>
            <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
          </div>
          <div>
            <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
          </div>
          <div>
            <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
          </div>
          <div>
            <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
          </div>
          <div>
            <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
          </div>
        </Slider>
      </div>
    );
  }
}


// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class MultipleItems extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 3
//     };
//     return (
//       <div className="w-full h-[200px]">
//         <h2> Multiple items </h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//           <div>
//             <h3>9</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }