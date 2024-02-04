import { Footer } from "flowbite-react";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";

const CustomFooter = () => {
  return (
    <Footer container className="right-0 bottom-0 left-0 w-max-full flex flex-row">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <h1 className="logo text-[25px] text-blue-500">
              <strong>Job</strong>Search
            </h1>
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Ananta Kusuma Pangkasidhi"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={FaFacebook} />
            <Footer.Icon href="#" icon={FaInstagram} />
            <Footer.Icon href="#" icon={FaTwitter} />
            <Footer.Icon href="#" icon={FaGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;
