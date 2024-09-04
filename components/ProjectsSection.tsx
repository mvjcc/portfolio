import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare, BsApple, BsGooglePlay } from "react-icons/bs"

const projects = [
  {
    name: "Greenergy - After Sales",
    description: "Greenergy - After Sales is a web application used to monitor manpower schedules and project concerns, generate solar performance report and net metering report, and to create quotations",
    image: "/after-sales.png",
    github: "",
    link: "http://143.198.83.244/",
    playStore: "",
    appStore: "",
  },
  {
    name: "Stockroom",
    description: "Stock room is a mobile application to keep track of inventory and transfers from one station to another or between branches",
    image: "/after-sales.png",
    github: "",
    link: "",
    playStore: "",
    appStore: "",
  },
  {
    name: "Bigbys TodoApp",
    description: "TodoApp is an android application to track and complete daily tasks",
    image: "/after-sales.png",
    github: "",
    link: "",
    playStore: "",
    appStore: "",
  },
  {
    name: "BluEnergy TodoApp",
    description: "TodoApp is an android application to track and complete daily tasks",
    image: "/after-sales.png",
    github: "",
    link: "",
    playStore: "",
    appStore: "",
  },
  {
    name: "jiffi.io",
    description: "jiffi.io is a work management tool to manage projects and tasks created for ",
    descriptionLink: "https://jiffiwebhelp.com/",
    descriptionLinkText: "jiffiwebhelp",
    image: "/jiffi-admin-portal.png",
    github: "",
    link: "https://jiffi.io/",
    playStore: "",
    appStore: "",
  },
  {
    name: "JiffiWebHelp",
    description: "JiffiWebHelp is a customer portal for ",
    descriptionLink: "https://jiffi.io/",
    descriptionLinkText: "jiffi.io",
    image: "/jiffi-customer-portal.png",
    github: "",
    link: "https://customerportal.jiffiwebhelp.com/",
    playStore: "",
    appStore: "",
  },
  {
    name: "Loop Web Design",
    description: "Loop Web Design is a customer portal for ",
    descriptionLink: "https://jiffi.io/",
    descriptionLinkText: "jiffi.io",
    image: "/loopweb-customer-portal.png",
    github: "",
    link: "https://customerportal.loopwebdesign.com.au/",
    playStore: "",
    appStore: "",
  },
  {
    name: "Privaposts",
    description: "Privaposts is a premium subscription-based social media platform",
    image: "/privaposts.png",
    github: "",
    link: "https://privaposts.com/",
    playStore: "",
    appStore: "",
  },
  {
    name: "Pro Trainer Live",
    description: "Pro Trainer Live is a fitness app for trainers to manage their students",
    image: "/protrainer.png",
    github: "",
    link: "",
    playStore: "https://play.google.com/store/apps/details?id=com.protrainerapp&hl=en",
    appStore: "https://apps.apple.com/pl/app/pro-trainer-live/id1522239684?platform=iphone",
  },
  {
    name: "Milestones Page",
    description: "Milestones Page is a web application to showcase a your creative or professional achievements",
    image: "/milestones-page.png",
    github: "",
    link: "https://milestonespage.com",
    playStore: "",
    appStore: "",
  },
  {
    name: "ConversionCow",
    description: "ConversionCow is a tool to create a website plugin that displays social proofs & call-to-actions to help you build trust faster and get leads quicker",
    image: "/conversion-cow.png",
    github: "",
    link: "https://www.conversioncow.com/",
    playStore: "",
    appStore: "",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link ?? ""}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                      {project.descriptionLink &&
                        <a
                          className="font-bold text-teal-500"
                          href={`${project.descriptionLink}`}
                        >{project.descriptionLinkText}</a>
                      }
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.github &&
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      }
                      {project.link &&
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      }
                      {project.playStore &&
                        <Link href={project.playStore} target="_blank">
                          <BsGooglePlay
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      }
                      {project.appStore &&
                        <Link href={project.appStore} target="_blank">
                          <BsApple
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      }
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
