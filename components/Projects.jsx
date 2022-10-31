import Image from "next/image";
import Link from "next/link";
import React from "react";
import edudbImg from "../public/assets/projects/edudb.png";
import appImg from "../public/assets/projects/appimg.png";
import weeblogImg from "../public/assets/projects/Weeblog.png";
import appointmentImg from "../public/assets/projects/appointment.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 text-white">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8 bg-white/50 p-10 rounded-xl">
          <ProjectItem
            title="EduDB"
            backgroundImg={edudbImg}
            projectUrl="/edudb"
            tech="HTML, NodeJS"
          />
          <ProjectItem
            title="Personalised Library App"
            backgroundImg={appImg}
            projectUrl="/personalisedapp"
            tech="Java, Firebase"
          />
          <ProjectItem
            title="Weeblog"
            backgroundImg={weeblogImg}
            projectUrl="/weeblog"
            tech="Next JS"
          />
          <ProjectItem
            title="Appointment Booking Site"
            backgroundImg={appointmentImg}
            projectUrl="/appointment"
            tech="HTML ,JavaScript"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
