import { navItemsTypes } from "../../data/data"
import { motion } from "framer-motion"
import "./nav.scss";


type Props = {
    items: navItemsTypes[]
}


const Nav = ({ items }: Props) => {
  return (
    <motion.div className="container mx-auto nav flex justify-between items-center py-4 px-4">
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
      <motion.ul className="nav__links flex">
        {items.map((item) => (
          <motion.li key={item.title} className={`nav__links__each ${item.title}`}>
            <a href={item.id}>{item.title}</a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default Nav