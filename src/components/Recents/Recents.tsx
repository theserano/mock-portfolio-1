import { motion } from "framer-motion"
import LineHeader from "../Utility/lineHeader/LineHeader"

type Props = {}

const Recent = ({}: Props) => {
  return (
    <motion.div className="recent">

        <motion.div className="recent__top">
            <motion.div className="recent__top__left">
                <motion.h5><LineHeader text="Recent works" /></motion.h5>
                <motion.h1>Some of my favorite projects</motion.h1>
            </motion.div>
            <motion.div className="recent__top__right">
                <motion.button>View all projects</motion.button>
            </motion.div>
        </motion.div>

    </motion.div>
  )
}

export default Recent