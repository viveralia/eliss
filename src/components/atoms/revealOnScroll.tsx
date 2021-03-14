import { AnimationProps, motion } from "framer-motion";
import { FC } from "react";
import { useInView } from "react-intersection-observer";

export interface RevealOnScrollProps {
  variants?: AnimationProps["variants"];
  transition?: AnimationProps["transition"];
}

const DEAFULT_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const DEFAULT_TRANSITION = {
  delay: 0.25,
  duration: 0.5,
};

const RevealOnScroll: FC<RevealOnScrollProps> = ({
  children,
  transition = DEFAULT_TRANSITION,
  variants = DEAFULT_VARIANTS,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      transition={transition}
      initial="hidden"
      animate={inView && "visible"}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
