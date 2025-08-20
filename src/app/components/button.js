import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
export default function Button() {
    return (
        <div>
            <ul className="flex flex-col gap-6">
                 <li className="hover:scale-130 ">
                    <a className="text-3xl text-gray-400 hover:text-white" href="https://www.linkedin.com/in/aryan-kumar-singh-87330b2b9" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                </li>
                 <li className="hover:scale-130 ">
                    <a className="text-3xl text-gray-400 hover:text-white" href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                </li>
                <li className="hover:scale-130 ">
                    <a className="text-3xl text-gray-400 hover:text-white" href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
                        <IoLogoInstagram />
                    </a>
                </li>
                
                 <li className="hover:scale-130 ">
                    <a className="text-3xl text-gray-400 hover:text-white" href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
                       <MdOutlineEmail />
                    </a>
                </li>
                <li className="hover:scale-130 "> 
                    <a className="text-3xl text-gray-400 hover:text-white " href="https://github.com/aryankumarsingh99" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </li>
            </ul>
        </div>
    )
}