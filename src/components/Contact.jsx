import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import "../index.css";

const SocialMediaLinks = () => {
  const socialMedia = [
    {
      name: "Instagram",
      username: "@shashi__s",
      icon: <FaInstagram size={32} />,
      link: "https://www.instagram.com/shashi___s?igsh=MWk3YmkybDduMXRtbQ%3D%3D&utm_source=qr",
    },
    {
      name: "Twitter",
      username: "@shashi__s",
      icon: <FaTwitter size={32} />,
      link: "https://www.threads.net/@shashi___s?igshid=NTc4MTIwNjQ2YQ==",
    },
    {
      name: "LinkedIn",
      username: "udutha shashidhar",
      icon: <FaLinkedin size={32} />,
      link: "https://www.linkedin.com/in/udutha-shashidhar-93672b208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      name: "GitHub",
      username: "@udutha shashidhar",
      icon: <FaGithub size={32} />,
      link: "https://github.com/uduthashashidhar",
    },
  ];

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <div className="mt-12 flex flex-col gap-6">
          {socialMedia.map((platform) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 bg-tertiary py-3 px-6 rounded-xl text-white font-bold shadow-md shadow-primary hover:bg-secondary transition-colors"
            >
              {platform.icon}
              <div className="flex flex-col">
                <span>{platform.name}</span>
                <span className="text-sm text-secondary">{platform.username}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(SocialMediaLinks, "contact");
