import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { smallProjects } from "../constants";
import { github, liveserver } from "../assets";
import { SectionWrapper } from "../Higher_Order_Component";
import { textVariant } from "../utils/motion";

const SmallProjectCard = ({ smallProject }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#FFF" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={smallProject.date}
    iconStyle={{ background: smallProject.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={smallProject.icon}
          alt={smallProject.subtitle}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{smallProject.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {smallProject.subtitle}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {smallProject.points.map((point, index) => (
        <li
          key={`small_project-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>

    <div className="flex justify-between mx-6 my-4">
    <div
        onClick={() => window.open(smallProject.github, "_blank")}
        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
      >
        <img src={github} alt="github" className="rounded-full w-1/2 h-1/2 object-contain" />
      </div>

      <div
        onClick={() => window.open(smallProject.livesite, "_blank")}
        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
      >
        <img src={liveserver} alt="live" className="rounded-full w-1/2 h-1/2 object-contain" />
      </div>
    </div>
  </VerticalTimelineElement>
);

const SmallProject = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Development Journey.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {smallProjects.map((smallProject, index) => (
            <SmallProjectCard key={index} smallProject={smallProject} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(SmallProject, "work");
