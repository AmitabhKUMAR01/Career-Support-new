
import { motion } from "framer-motion";
import { styles } from "../style";
import Lottie from "lottie-react";
import TonyStark from '../assets/lottie/tonystark.json';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto mt-5">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome TO
          </h1>
          <div className="animated-text-container flex justify-center items-center">
            <svg viewBox="0 0 760 100" className="animated-text-svg">
              <symbol id="s-text">
                <text textAnchor="middle" x="50%" y="80%">
                  Career Support
                </text>
              </symbol>

              <g className="g-ants">
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
                <use xlinkHref="#s-text" className="text-copy"></use>
              </g>
            </svg>
          </div>
          <div className="motive">

          <h3>Training & Placement</h3>
        <p>Unlock your potential : <br />Master communication , Elevate English <br /> and build your future with us</p>
          </div>
        
        </div>
      </div>
      <motion.div initial={{ scale: 0.3 }} animate={{ scale: 0.8 }} className="absolute xs:bottom-10 top-[50%] w-full flex justify-center items-center">
        <Lottie animationData={TonyStark} />
      </motion.div>
    </section>
  );
};

export default Hero;
