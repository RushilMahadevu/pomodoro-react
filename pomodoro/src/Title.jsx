import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.h1
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 120 }}
      className="title"
    >
      Pomodoro <br/> Timer
    </motion.h1>
  );
};

export default Title;
