"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrustedCards from "./TrustedCards";

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  var settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    rtl: true,
  };
  return (
    <div className="mt-20 px-[6%] 5xl:px-[25%]">
           <div className="block lg:hidden">
        <Slider className="grid grid-cols-1 " {...settings}>
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        
        </Slider>
      </div>
      <div className="hidden lg:block">
        <Slider className="flex gap-x-6 mt-20 " {...settings}>
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        </Slider>
      </div>
      <div className="hidden lg:block">
        <Slider className="flex gap-x-6 mt-10 " {...settings1}>
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;





// import React, { Component } from "react";
// import Slider from "react-slick";
// import TrustedCards from "./TrustedCards";

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: false,
//       infinite: true,
//       speed: 600,
//       slidesToShow: 4,
//       slidesToScroll: 1
      
//     };
//     return (
//       <div className="mt-3">
//         <Slider {...settings}>
//           <div>
//             <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
//           </div>
//           <div>
//             <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
//           </div>
//           <div>
//             <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
//           </div>
//           <div>
//             <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
//           </div>
//           <div>
//             <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
//           </div>
//           <div>
//             <TrustedCards text="I have learnt a lot on how to manage team members since I joined Buildhubb." name="Ayomide Lekan" />
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }


// // import React, { Component } from "react";
// // import Slider from "react-slick";

// // export default class MultipleItems extends Component {
// //   render() {
// //     const settings = {
// //       dots: true,
// //       infinite: true,
// //       speed: 500,
// //       slidesToShow: 3,
// //       slidesToScroll: 3
// //     };
// //     return (
// //       <div className="w-full h-[200px]">
// //         <h2> Multiple items </h2>
// //         <Slider {...settings}>
// //           <div>
// //             <h3>1</h3>
// //           </div>
// //           <div>
// //             <h3>2</h3>
// //           </div>
// //           <div>
// //             <h3>3</h3>
// //           </div>
// //           <div>
// //             <h3>4</h3>
// //           </div>
// //           <div>
// //             <h3>5</h3>
// //           </div>
// //           <div>
// //             <h3>6</h3>
// //           </div>
// //           <div>
// //             <h3>7</h3>
// //           </div>
// //           <div>
// //             <h3>8</h3>
// //           </div>
// //           <div>
// //             <h3>9</h3>
// //           </div>
// //         </Slider>
// //       </div>
// //     );
// //   }
// // }