import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import StarWrapper from "./hoc/sectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ index, title, icon }) => {
  const navigate = useNavigate()
  function goToUPI(){
    navigate('/upi')
  }
  return (
    <Tilt className="xs:w-[250px] w-full" >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    onClick={goToUPI}
      >
        <motion.div options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly flex-col items-center "
        >
        <img src={icon} alt={title} className="w-16 object-contain "/>
        <h3 className="text-white  text-[20px] font-bold text-center">{title}</h3>

        </motion.div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Introduction</p>
        <h2 className={`${styles.sectionSubText} text-[#e43a9f]`}>Welcome to CS -
Skill India Program</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      We are India's No. 1 training and
placement institute, which is
providing you the best Skills and
knowledge as per industry need and
providing you the best training for
job along with guaranteed
placement in a reputed company.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default StarWrapper(About,"about") ;
