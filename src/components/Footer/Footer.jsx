import Image from "next/image";
import React from "react";
import footerLogo from "@/assets/footerLogo.png";
import Fb from "@/assets/fb.png";
import dribble from "@/assets/dribble.png";
import google from "@/assets/google+.png";
import twitter from "@/assets/twitter.png";
import { menuItems } from "../Navbar/menuItems";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full md:h-[350px] bg-Skyblue py-20">
      <div className="wrapper px-4 sm:px-6 flex flex-col md:flex-row justify-between gap-8">
        {/* footer logo area     */}
        <div className="max-w-[400px]">
          <div className="flex items-center gap-x-4 mb-5">
            <Image src={footerLogo} alt="footerloto icon" />
            <h1 className="text-4xl font-bold text-white">
              Kids <br className="hidden md:block" /> Education{" "}
            </h1>
          </div>
          <p className="text-xl text-white">Pizza ipsum dolor meat lovers buffalo. Deep dolor roll melted bacon Bianca pan bacon pineapple Aussie. Mayo rib sauce Hawaiian meatball.</p>
        </div>
        {/* footer link area  */}
        <div>
            <h1 className="text-2xl font-bold text-white mb-8">About School </h1>
            <div className="text-white">
                {
                    menuItems.map((link)=>(
                        <ul key={link.id}>
                            <li className="mb-5">
                                <Link  href={link.path}  className="text-xl font-medium">{link.name}</Link>
                            </li>
                        </ul>
                    ))
                }
            </div>
        </div>
        {/* footer social icon area  */}
        <div>
            <h1 className="text-2xl font-bold text-white mb-8">Keep In Touch</h1>
            <div className="flex gap-x-2.5">
                <Image src={Fb} alt="facebook icon" />
                <Image src={dribble} alt="dribble icon" />
                <Image src={twitter} alt="twitter icon" />
                <Image src={google} alt="google icon" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
