import "./footer.scss";
import { motion } from "framer-motion";

type Props = {}

const Footer = ({}: Props) => {
  return (
    <motion.div className="footer">
      <motion.div className="footer__container container mx-auto px-2">
        {/* first */}
        <motion.div className="footer__container__first">
          <motion.div className="nav__logo">
            <a href="#Home">Alifreza</a>
            <motion.span
              className="nav__logo__dot"
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            ></motion.span>
          </motion.div>
        </motion.div>
        {/* second side */}
        <motion.div className="footer__container__second">
          <motion.div className="footer__container__second__left">
            <motion.h3>Information</motion.h3>
            <motion.p>+65 8901376694</motion.p>
            <motion.p>alifreza08@gmail.com</motion.p>
            <motion.p>Changi Bay, Singapura</motion.p>
          </motion.div>
          <motion.div className="footer__container__second__right">
            <motion.h3>Social Media</motion.h3>
            <motion.p>Dribbble</motion.p>
            <motion.p>Behance</motion.p>
            <motion.p>Linkedin</motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="footer__bottom container mx-auto px-2">
        <motion.div></motion.div>
        <motion.p>Copyright ©2023</motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Footer