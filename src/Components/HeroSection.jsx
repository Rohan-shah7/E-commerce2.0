// import React, { useEffect, useState } from "react";
// import hero2 from "../assets/hero2.jpeg";


// const images = [
//   { url: hero2, caption: "Big Summer Sale" },
//   { url: hero2, caption: "Latest Fashion Trends" },
//   { url: hero3, caption: "Home & Electronics Deals" }
// ];

// const HeroSection = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-[60vh] overflow-hidden">
//       {images.map((img, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === current ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           <img
//             src={img.url}
//             alt={img.caption}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//             <h2 className="text-white text-2xl sm:text-4xl font-bold shadow-lg">
//               {img.caption}
//             </h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HeroSection;
