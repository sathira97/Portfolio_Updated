import { FlipWords } from "./FlipsWords";
import { motion } from "motion/react";

const words = ["Secure", "Modern", "Scalable"];

const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clips-text">
      {/* Desktop  */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1 className="text-4xl font-medium" initial={{opacity: 0, x: -50}}
        animate={{opacity: 1, x: 0}}>Hi, I'm Sathira</motion.h1>
        <div className="flex flex-col items-start">
          <motion.p className="text-5xl font-medium text-neutral-300">
            A Developer <br /> dedicated to Programming and Games
          </motion.p>
          <motion.div>
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p className="text-4xl font-medium text-neutral-300">
            Games Development
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-6 md:hidden ">
        <motion.p className="text-4xl font-medium">Hi, I'm Sathira</motion.p>
        <div>
          <p className="text-xl font-black text-neutral-300">Building</p>
          <motion.div>
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p className="text-4xl font-black text-neutral-300">
            Games Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
