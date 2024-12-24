// import React from "react";
// import "./Services.css";
// import { useRef, useEffect, useState } from "react";
// import ServiceCard from "../components/service_card";
// import DigitalMarketing from '../assets/digital_marketing.png'
// import MobileApp from '../assets/mobile-application.png'
// import WebApp from '../assets/web_development.png'
// import SoftwareDev from '../assets/software_development.png'
// import Branding from '../assets/brannding.png'



// function Services() {
//   const scrollContainerRef = useRef(null);
//   const [isHorizontalScrolling, setIsHorizontalScrolling] = useState(false);

//   useEffect(()=>{
//     const scrollController = scrollContainerRef.current;

//     const handleHorizontalScroll = (e) => {
//       if(e.deltaY == 0){
//         setIsHorizontalScrolling(false);
//         return;
//       }

//       if(isHorizontalScrolling){
//         e.preventDefault();
//       }
//     };


//     const handleVerticalScroll = (e) => {
//       const scrollContainer = scrollContainerRef.current;
//       if(e.deltaY != 0){
//         scrollContainer.scrollLeft += e.deltaY;
//         setIsHorizontalScrolling(true);
//       }
//     };
//     scrollController.addEventListener('wheel', handleVerticalScroll, { passive: false });
//     scrollController.addEventListener('wheel', handleHorizontalScroll, { passive: false });

//     return () => {
//       scrollController.removeEventListener('wheel', handleVerticalScroll);
//       scrollController.removeEventListener('wheel', handleHorizontalScroll);
//     };
//   }, [isHorizontalScrolling]);

//   return (
//     <div id="service_screen" className="service_container">
//        <h1 className="service_title">Your Ultimate Business Partner for Success</h1>
//       <div className="cards_lists"
//       ref={scrollContainerRef}
//       >
//       <ServiceCard
//        title={"Mobile App Development"}
//        description={"Innovative and user-friendly mobile applications are key to driving customer satisfaction and fueling business growth. Transform your digital presence with intuitive and feature-rich apps."}
//        devImage={MobileApp} />
//        <ServiceCard
//        title={"Web App Development"}
//        description={"Elevate user experiences with cutting-edge, responsive, and visually captivating web applications tailored to your business needs."}
//        devImage={WebApp} />
//        <ServiceCard
//        title={"Software Development"}
//        description={"From concept to implementation, we deliver custom software solutions that streamline processes and optimize business performance."}
//        devImage={SoftwareDev} />
//        <ServiceCard
//        title={"Digital Marketing"}
//        description={"Our strategic digital marketing services increase brand visibility and customer reach through compelling campaigns and creative content."}
//        devImage={DigitalMarketing} />
//        <ServiceCard
//        title={"Branding"}
//        description={"Build a strong, unique identity for your business with our branding solutions that leave a lasting impression in the digital marketplace."}
//        devImage={Branding} />
//       </div>
     

//       <div className="service_cards">
       

       

        
//       </div>
//     </div>
//   );
// }

// export default Services;


import React, { useRef, useEffect } from "react";
import "./Services.css";
import ServiceCard from "../components/service_card";
import MobileApp from '../assets/mobile-application.png';
import WebApp from '../assets/web_development.png';
import SoftwareDev from '../assets/software_development.png';
import DigitalMarketing from '../assets/digital_marketing.png';
import Branding from '../assets/brannding.png';
import { motion } from "framer-motion";

function Services() {
  const serviceContainerRef = useRef(null);

  useEffect(() => {
    const serviceContainer = serviceContainerRef.current;

    const handleScroll = (e) => {
      if (serviceContainer) {
        const isHorizontal = 
          serviceContainer.scrollWidth > serviceContainer.clientWidth;

        if (isHorizontal && e.deltaY !== 0) {
          serviceContainer.scrollLeft += e.deltaY;
          e.preventDefault(); // Prevent default vertical scrolling behavior.
        }
      }
    };

    serviceContainer.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      serviceContainer.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div id="service_screen" className="service_container">
      <h1 className="service_title">Your Ultimate Business Partner for Success</h1>
      <motion.div
      initial = {{opacity: 0, x: -180}}
       animate={{ y: 10, x: 0 , opacity: 1, direction: 'initial'}} 
       
       transition={{duration: 3,  type: "spring" }} 
      ref={serviceContainerRef} 
      className="cards_lists">
        <ServiceCard
          title={"Mobile App Development"}
          description={"Innovative and user-friendly mobile applications are key to driving customer satisfaction and fueling business growth. Transform your digital presence with intuitive and feature-rich apps."}
          devImage={MobileApp}
        />
        <ServiceCard
          title={"Web App Development"}
          description={"Elevate user experiences with cutting-edge, responsive, and visually captivating web applications tailored to your business needs."}
          devImage={WebApp}
        />
        <ServiceCard
          title={"Software Development"}
          description={"From concept to implementation, we deliver custom software solutions that streamline processes and optimize business performance."}
          devImage={SoftwareDev}
        />
        <ServiceCard
          title={"Digital Marketing"}
          description={"Our strategic digital marketing services increase brand visibility and customer reach through compelling campaigns and creative content."}
          devImage={DigitalMarketing}
        />
        <ServiceCard
          title={"Branding"}
          description={"Build a strong, unique identity for your business with our branding solutions that leave a lasting impression in the digital marketplace."}
          devImage={Branding}
        />
      </motion.div>
    </div>
  );
}

export default Services;
