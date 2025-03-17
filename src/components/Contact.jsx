import { useState , useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {styles} from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../Higher_Order_Component";
import { slideIn } from "../utils/motion";
const Contact = () => {
  const formRef = useRef();
  const [form , setForm] = useState({name:"" , email: "" , message: "" ,});


  const handleChange = (e)=>{};
  const handleSubmit = (e)=>{};


  // For loading
  const [loading , setLoading] = useState(false);



  return (
    <div className="xl:mt-12 xl:flex-row  flex-col-reverse flex gap-10 overflow-hidden">
      {/* form that will slide from the left */}
      <motion.div
      variants={slideIn("left" , "tween" , 0.2 , 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl">

        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* creating form */}
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8" >
          {/* For Name */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>
          {/* For Email */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>
          {/* For Message */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>

          {/* Button */}
          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl" >{loading ? "Sending..." : "Send"}</button>

        </form>

      </motion.div>

      {/* For Earth */}
      <motion.div
      variants={slideIn("right" , "tween" , 0.2 , 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >

      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact , "contact");