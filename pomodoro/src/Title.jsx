import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.h1
      initial={{ y: 25}}
      animate={{ y: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 150 }}
      className="title"
    >
      Pomodoro <br/> Timer
    </motion.h1>
  );
};

export default Title;
