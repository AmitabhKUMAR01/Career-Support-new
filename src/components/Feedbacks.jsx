
import { motion } from "framer-motion";

import { styles } from "../style";
import StarWrapper from "./hoc/sectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
//peoples import 
import Abhishek from "../assets/People/Abhishek.jpg"
import Yogesh from "../assets/People/yogesh.jpg"
import Sarita from "../assets/People/Sarita.jpg"
import Islam from "../assets/People/islam.jpg"
import Harish from "../assets/People/Harish.jpg"
import Geetika from "../assets/People/Geetika.jpg"
import Chetan from "../assets/People/Chetan.jpg"
import Bhavna from "../assets/People/Bhavna.jpg"
import Ankit from "../assets/People/Ankit.jpg"
import Anjali from "../assets/People/Anjali.jpg"
import anmol from "../assets/People/anmol.jpg"
import you from "../assets/People/you.jpg"
const people = [
  {
    name: "Yogesh Bhardwaj",
    title: "Asst. Manager",
    company: "3i Business Pvt Ltd",
    image: Yogesh,
  },
  {
    name: "Bhavana Mahajan",
    title: "Trainer",
    company: "Housing.com",
    image: Bhavna,
  },
  {
    name: "Mohd. Islam",
    title: "Team Leader",
    company: "I-Energizer (Tata Img)",
    image: Islam,
  },
  {
    name: "Anjali Chaudhary",
    title: "Relationship Manager",
    company: "Magicbricks.com",
    image: Anjali,
  },
  {
    name:"Anmol Maheshwari",
    title:"Er. HR Hiring (Hiring Partner)",
    company:"I-energizer pvt ltd",
    image: anmol
  },
  {
    name: "Chetan Malviye",
    title: "Team Leader",
    company: "ICCS Pvt Ltd",
    image: Chetan,
  },
  {
    name: "Harish",
    title: "Sr. Sales Executive",
    company: "3i Business Pvt Ltd",
    image: Harish,
  },
  {
    name: "Ankit Saxena",
    title: "Relationship Manager",
    company: "PolicyBazaar.com",
    image: Ankit,
  },
  {
    name: "Abhishek Singh",
    title: "Sales Executive",
    company: "Housing.com",
    image: Abhishek,
  },
  {
    name: "Sarita",
    title: "Sales Executive",
    company: "3i Business Pvt Ltd",
    image: Sarita,
  },
  {
    name: "Geetika Badgali",
    title: "Sales Executive (Prime)",
    company: "Teamlease Pvt Ltd",
    image: Geetika,
  },{
    name: "YOU",
    title: "Add in our success story",
    company: "",
    image:you,
  },
];
const PeopleList = () => {
  return (
 
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {people.map((person, index) => (
        <div
          key={index}
          className="bg-gradient-to-b from-[#1d2d50] to-[#133b5c] rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <div className="overflow-hidden rounded-t-lg">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-[20rem] rounded-t-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-white">{person.name}</h3>
            <p className="text-gray-300">{person.title}</p>
            <p className="text-gray-400">{person.company}</p>
          </div>
        </div>
      ))}
    </div>

  );
};
const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`} id="feedback">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
          <h2 className=      "text-white font-black text-[2rem] md:text-[4rem] ">Our Success Stories</h2>
      </div>
      <div className={`-mt-20 `}>

    <PeopleList/>
            </div> 
    </div>
  );
};

export default StarWrapper(Feedbacks, "");
