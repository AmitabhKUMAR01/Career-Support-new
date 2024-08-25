
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import StarWrapper from "./hoc/sectionWrapper";
import { textVariant } from "../utils/motion";
import AE from "../assets/AE.jpg";
import airtale from "../assets/airtale.jpg";
import amazone from "../assets/amazone.jpg";
import axis from "../assets/axis.jpg";
import iner from "../assets/iner.jpg";
import polify from "../assets/policy.jpg";
import techh from "../assets/techh.jpg";
import tata from "../assets/tata.jpg";
import sbi from "../assets/sbi.jpg";
import flipkart from "../assets/flipkart.jpg";
import times from "../assets/times.jpg";
import tele from "../assets/tele.jpg"

const images = [
  { src: AE, alt: "American Express" },
  { src: airtale, alt: "Airtel" },
  { src: amazone, alt: "Amazon" },
  { src: tele, alt: "Teleperformance" },
  { src: axis, alt: "Axis" },
  { src: iner, alt: "Inergizer" },
  { src: polify, alt: "Policy Bazaar" },
  { src: techh, alt: "Tech Mahindra" },
  { src: tata, alt: "Tata" },
  { src: sbi, alt: "SBI" },
  { src: flipkart, alt: "Flipkart" },
  { src: times, alt: "Times" },
];

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Our Tie-Up Placement Cell</p>
        <h2 className={styles.sectionHeadText}>Companies</h2>
      </motion.div>
      <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative bg-darkblue rounded-lg overflow-hidden shadow-lg"
            style={{ aspectRatio: "16/9" }} // Added to maintain a consistent aspect ratio
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-semibold">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default StarWrapper(Experience, "experience");
