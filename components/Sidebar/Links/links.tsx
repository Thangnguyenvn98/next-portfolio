'use client'

import { motion } from "framer-motion"

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

const itemVariants = {
  open: {
    y: 0,
    opacity:1
  },
  closed: {
    y:50,
    opacity:0
  }
}

const Links = () => {
  const sections = [
    {name:"home",section:"Home"},
    {name:"about",section:"About"},
  {name:"project",section:"Projects"},
  {name:"contact",section:"Contact"}]
  return (
    <motion.div variants={variants} className='flex z-50 flex-col text-white absolute w-full h-full items-center justify-center gap-10 '>
      {sections.map ((section) => (
        <motion.a variants={itemVariants}  whileHover={{scale:1.1}} whileTap={{scale:0.95}}   className='cursor-pointer text-4xl' key={section.name} href={`#${section.name}`}>{section.section}</motion.a>
      ))}
    </motion.div>
  )
}

export default Links