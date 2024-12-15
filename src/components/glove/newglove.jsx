
// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import ThreeGlobe from "three-globe";
// import countries from "../files/globe-data-min.json";
// import travelHistory from "../files/my-flights.json";
// import openmp4 from'../../assets/open.mp4';
// import bites from'../../assets/bites.mp4';


 
// const Globe = React.memo(() => {
//     const globeRef = useRef(null);
//     const animationRef = useRef(null);
//     const renderer = useRef(new THREE.WebGLRenderer({ antialias: true, alpha: true })); // Enable alpha for transparency
//     const camera = useRef(new THREE.PerspectiveCamera());
//     const scene = useRef(new THREE.Scene());
  
//     const calculateSize = () => {
//       const width = Math.min(window.innerWidth * 0.8, 600); // Up to 80% of viewport width, max 600px
//       const height = width; // Maintain square aspect ratio
//       return { width, height };
//     };
  
//     useEffect(() => {
//       const onWindowResize = () => {
//         const { width, height } = calculateSize();
//         camera.current.aspect = width / height;
//         camera.current.updateProjectionMatrix();
//         renderer.current.setSize(width, height);
//       };
  
//       const animate = () => {
//         // Rotate the globe continuously
//         scene.current.rotation.y -= 0.007;
  
//         renderer.current.render(scene.current, camera.current);
//         animationRef.current = requestAnimationFrame(animate);
//       };
  
//       const init = () => {
//         const { width, height } = calculateSize();
  
//         renderer.current.setPixelRatio(window.devicePixelRatio);
//         renderer.current.setSize(width, height);
//         globeRef.current.appendChild(renderer.current.domElement);
  
//         scene.current.add(new THREE.AmbientLight(0xffffff, 0.5)); // Ambient light
//         const dirLight = new THREE.DirectionalLight(0xffffff, 1); // Directional light
//         dirLight.position.set(5, 3, 4);
//         scene.current.add(dirLight);
  
//         // Set background to transparent
//         scene.current.background = null;
  
//         camera.current.aspect = width / height;
//         camera.current.position.z = 300;
//         camera.current.updateProjectionMatrix();
  
//         window.addEventListener("resize", onWindowResize);
//       };
  
//       const initGlobe = () => {
//         const Globe = new ThreeGlobe({
//           waitForGlobeReady: true,
//           animateIn: true,
//         })
//           .hexPolygonsData(countries.features)
//           .hexPolygonResolution(3)
//           .hexPolygonMargin(0.7)
//           .showAtmosphere(true)
//           .atmosphereColor("#3a228a")
//           .atmosphereAltitude(0.25)
//           .hexPolygonColor((e) =>
//             ["KGZ", "KOR", "THA", "RUS", "UZB", "IDN", "KAZ", "MYS"].includes(
//               e.properties.ISO_A3
//             )
//               ? "rgba(255,255,255, 1)"
//               : "rgba(255,255,255, 0.7)"
//           );
  
//         setTimeout(() => {
//           Globe.arcsData(travelHistory.flights)
//             .arcColor((e) => (e.status ? "#00ff00" : "#ff0000"))
//             .arcAltitude((e) => e.arcAlt)
//             .arcStroke((e) => (e.status ? 0.5 : 0.3))
//             .arcDashLength(0.9)
//             .arcDashGap(4)
//             .arcDashAnimateTime(1000)
//             .arcsTransitionDuration(1000)
//             .arcDashInitialGap((e) => e.order * 1);
//         }, 1000);
  
//         Globe.rotateY(-Math.PI * (5 / 9));
//         Globe.rotateZ(-Math.PI / 6);
  
//         // Change globe color to red
//         const globeMaterial = Globe.globeMaterial();
//         globeMaterial.color = new THREE.Color(0x000033); // Red color
//         globeMaterial.emissive = new THREE.Color(0x000033); // Darker red emissive light
//         globeMaterial.emissiveIntensity = 0.3;
//         globeMaterial.shininess = 0.9;
//         globeMaterial.opacity = 0.8;
//         globeMaterial.transparent = true;
  
//         scene.current.add(Globe);
//       };
  
//       init();
//       initGlobe();
//       animate();
  
//       return () => {
//         cancelAnimationFrame(animationRef.current);
//         window.removeEventListener("resize", onWindowResize);
//       };
//     }, []);
  
//     return (
//           <>
//           <video className="bg-black " src={openmp4}></video>

//       <div
//         ref={globeRef}
//         style={{
//           width: "100%",
//           height: "auto",
//           maxWidth: "600px", // Maximum size for desktop
//           margin: "0 auto",
//           borderRadius: "50%", // Makes the container circular
//           // background: "#2c2f40", // Add your preferred background color
//           overflow: "hidden", // Ensures the globe stays within the circle
//           // boxShadow: "20px 14px 20px rgba(0, 0, 0, 0.2)", // Optional: Adds a shadow effect
//         }}
//       />
//       </>
//     );
//   });
  
//   export default Globe;
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import ThreeGlobe from "three-globe";
import countries from "../files/globe-data-min.json";
import travelHistory from "../files/my-flights.json";
import openmp4 from "../../assets/open.mp4";
import bites from "../../assets/bites.mp4";

const Globe = React.memo(() => {
  const globeRef = useRef(null);
  const animationRef = useRef(null);
  const renderer = useRef(new THREE.WebGLRenderer({ antialias: true, alpha: true })); // Enable alpha for transparency
  const camera = useRef(new THREE.PerspectiveCamera());
  const scene = useRef(new THREE.Scene());

  const calculateSize = () => {
    const width = Math.min(window.innerWidth * 0.8, 600); // Up to 80% of viewport width, max 600px
    const height = width; // Maintain square aspect ratio
    return { width, height };
  };

  useEffect(() => {
    const onWindowResize = () => {
      const { width, height } = calculateSize();
      camera.current.aspect = width / height;
      camera.current.updateProjectionMatrix();
      renderer.current.setSize(width, height);
    };

    const animate = () => {
      // Rotate the globe continuously
      scene.current.rotation.y -= 0.007;

      renderer.current.render(scene.current, camera.current);
      animationRef.current = requestAnimationFrame(animate);
    };

    const init = () => {
      const { width, height } = calculateSize();

      renderer.current.setPixelRatio(window.devicePixelRatio);
      renderer.current.setSize(width, height);
      globeRef.current.appendChild(renderer.current.domElement);

      scene.current.add(new THREE.AmbientLight(0xffffff, 0.5)); // Ambient light
      const dirLight = new THREE.DirectionalLight(0xffffff, 1); // Directional light
      dirLight.position.set(5, 3, 4);
      scene.current.add(dirLight);

      // Set background to transparent
      scene.current.background = null;

      camera.current.aspect = width / height;
      camera.current.position.z = 300;
      camera.current.updateProjectionMatrix();

      window.addEventListener("resize", onWindowResize);
    };

    const initGlobe = () => {
      const Globe = new ThreeGlobe({
        waitForGlobeReady: true,
        animateIn: true,
      })
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(true)
        .atmosphereColor("#3a228a")
        .atmosphereAltitude(0.25)
        .hexPolygonColor((e) =>
          ["KGZ", "KOR", "THA", "RUS", "UZB", "IDN", "KAZ", "MYS"].includes(
            e.properties.ISO_A3
          )
            ? "rgba(255,255,255, 1)"
            : "rgba(255,255,255, 0.7)"
        );

      setTimeout(() => {
        Globe.arcsData(travelHistory.flights)
          .arcColor((e) => (e.status ? "#00ff00" : "#ff0000"))
          .arcAltitude((e) => e.arcAlt)
          .arcStroke((e) => (e.status ? 0.5 : 0.3))
          .arcDashLength(0.9)
          .arcDashGap(4)
          .arcDashAnimateTime(1000)
          .arcsTransitionDuration(1000)
          .arcDashInitialGap((e) => e.order * 1);
      }, 1000);

      Globe.rotateY(-Math.PI * (5 / 9));
      Globe.rotateZ(-Math.PI / 6);

      const globeMaterial = Globe.globeMaterial();
      globeMaterial.color = new THREE.Color(0x000033);
      globeMaterial.emissive = new THREE.Color(0x000033);
      globeMaterial.emissiveIntensity = 0.3;
      globeMaterial.shininess = 0.9;
      globeMaterial.opacity = 0.8;
      globeMaterial.transparent = true;

      scene.current.add(Globe);
    };

    init();
    initGlobe();
    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    // <div className="flex justify-center items-center w-full max-w-7xl mx-auto p-4 gap-6">
    //   {/* Left Video */}
    //   <video
    //     className="bg-black rounded-lg  w-72 h-40 object-cover"
    //     src={openmp4}
    //     autoPlay
    //     loop
    //     controls
    //   ></video>

    //   {/* Globe */}
    //   <div
    //     ref={globeRef}
    //     className="rounded-full overflow-hidden shadow-lg"
    //     style={{ width: "600px", height: "300px" }}
    //   ></div>

    //   {/* Right Video */}
    //   <video
    //     className="bg-black rounded-lg  w-72 h-40 object-cover"
    //     src={bites}
    //     autoPlay
    //     loop
       
    //   ></video>
    // </div>
    <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-7xl mx-auto p-4 gap-6">
  {/* Left Video */}
  <video
  className="rounded-lg w-full max-w-xs md:w-72 h-auto md:h-40 object-cover"
  src={openmp4}
  autoPlay
  muted
  loop
></video>

  {/* Globe */}
  <div
    ref={globeRef}
    className="rounded-full overflow-hidden shadow-sm  flex justify-center"
    style={{
      width: "590px",
      maxWidth: "600px", // Limit width for smaller devices
      height: "300px",
    }}
  ></div>

  {/* Right Video */}
  <video
    className=" rounded-lg w-full max-w-xs md:w-72 h-auto md:h-40 object-cover"
    src={bites}
    autoPlay
  muted
  loop
  ></video>
</div>
  );
});

export default Globe;
