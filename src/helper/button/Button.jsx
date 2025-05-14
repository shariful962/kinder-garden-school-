import Link from "next/link";
import React from "react";
import { TiArrowLeft } from "react-icons/ti";


const Button = () => {
  return (
    <div>
      <Link href="/about">
        <button className="w-max mb-4 px-5 py-3 rounded-xl bg-Orange text-white text-xl font-semibold cursor-pointer flex items-center justify-center">
          <TiArrowLeft size={24}/> Back to All Teachers
        </button>
      </Link>
    </div>
  );
};

export default Button;


// import Link from "next/link";
// import React from "react";

// const Button = ({ href = "#", children = "Click Me", className = "", onClick }) => {
//   return (
//     <div className={className}>
//       <Link href={href}>
//         <button
//           onClick={onClick}
//           className={className}
          
//         >
//           {children}
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default Button;

