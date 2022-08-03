import React from "react";
import footerImg from '../images/OpenLogoFooter.png'

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="w-full bg-black text-white flex flex-col px-10 md:px-24 pt-12">
      <div className="flex flex-col-reverse md:flex-row w-full">
        <div className="flex-1 flex flex-col">
          <h1 className="font-medium pb-4 border-b text-2xl md:text-4xl">
            More About our Partners
          </h1>
          <ul className="list-disc list-inside text-lg md:text-xl mt-5 space-y-2 md:space-y-3">
            <li>
              <a href="https://github.com/" target="blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://community.apache.org/" target="blank">
                Apache
              </a>{" "}
              Local Community
            </li>
            <li>
              <a href="https://collabnix.com/" target="blank">
                Collab
              </a>
              nix
            </li>
            <li>
              <a href="https://www.docker.com/" target="blank">
                Docker
              </a>
            </li>
            <li>
              <a href="https://www.webiny.com/" target="blank">
                Webiny
              </a>
            </li>
            <li>
              <a href="https://www.opstree.com/" target= "blank">
                Opstree
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-center mb-4 md:mb-0">
          <img src={footerImg} alt="Footer Logo" className="w-[30rem] object-contain"/>
        </div>
      </div>
      <div className="w-full border-t mt-4 flex items-center justify-center text-xl font-light py-4">
        &copy; Chitkara University, {year}
      </div>
    </div>
  );
}

export default Footer;
