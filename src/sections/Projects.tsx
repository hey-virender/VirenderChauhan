import universityLibraryImage from "@/assets/images/library.png";
import hireHiveImage from "@/assets/images/hirehive.png";
import orbifyImage from "@/assets/images/orbify.png";
import prepwiseImage from "@/assets/images/prepwise.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
const portfolioProjects = [
  {
    company: "PrepWise",
    year: "2025",
    title: "AI-Powered Interview Preparation",
    results: [
      {
        title:
          "AI-Powered Interviews: Create custom interviews by talking to AI.",
      },
      {
        title:
          "Real-Time Feedback: Get instant AI-driven performance analysis.",
      },
      {
        title: "Community Practice: Attempt interviews made by other users.",
      },
    ],
    link: "https://github.com/hey-virender/prepwise",
    image: prepwiseImage,
  },
  {
    company: "University Library",
    year: "2025",
    title: "Library Management System",
    results: [
      { title: "Developed a system to manage book borrowing and returns" },
      {
        title:
          "Implemented an admin panel for easy book addition and management",
      },
      {
        title:
          "Built with Next.js for seamless server-side rendering and fast performance",
      },
    ],
    link: "https://github.com/hey-virender/university-library.git",
    image: universityLibraryImage,
  },
  {
    company: "HireHive",
    year: "2024",
    title: "Freelancing Platform",
    results: [
      { title: "Created a platform for clients and freelancers to connect" },
      {
        title:
          "Built using the MERN stack for real-time messaging and dynamic content",
      },
      {
        title:
          "Implemented user authentication, job posting, and messaging features",
      },
    ],
    link: "https://github.com/hey-virender/HireHive.git",
    image: hireHiveImage,
  },
  {
    company: "Social Media Platform",
    year: "2024",
    title: "Social Media Web Application",
    results: [
      {
        title:
          "Built a platform where users can upload images and interact via chat",
      },
      { title: "Implemented real-time chat functionality with Socket.io" },
      {
        title:
          "Designed the frontend using Next.js for a dynamic and responsive UI",
      },
    ],
    link: "https://github.com/hey-virender/orbify.git",
    image: orbifyImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24 " id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          title="My projects"
          description="This are some of my projects"
        />

        <div className="flex flex-col mt-10 gap-20 md:mt-20 ">
          {portfolioProjects.map((project, index) => (
            <Card
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:px-20 lg:pt-16 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
              key={project.title}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <Link target="_blank" href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex justify-center items-center gap-2 mt-8 ">
                      <span>Visit Repository</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </Link>
                </div>
                <div className="relative lg:w=auto lg:max-w-none">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none outline outline-2 outline-white/20 rounded-lg"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
