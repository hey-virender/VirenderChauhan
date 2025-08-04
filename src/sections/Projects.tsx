import universityLibraryImage from "@/assets/images/library.png";
import edugatorImage from "@/assets/images/edugator.png"
import orbifyImage from "@/assets/images/orbify.png";
import prepwiseImage from "@/assets/images/prepwise.png";
import playPasteImage from "@/assets/images/playpaste.png"
import kingsukhImage from "@/assets/images/kingsukh.png"
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
const portfolioProjects = [
     {
    company: "King Sukh Guest House",
    year: "2025",
    title: "Guest house landing page",
    results: [
      {
        title:
          "Improved design of existing website.",
      },
      { title: "Responsive for all screen sizes" },
      {
        title:
          "Modern UI and animations",
      },
    ],
    repoLink: "https://github.com/hey-virender/kingsukh-guest-house",
    link:"https://beautiful-otter-91fe68.netlify.app",
    image: kingsukhImage,
  },
  {
    company: "Social Media Platform",
    year: "2025",
    title: "Social Media Web Application",
    results: [
      {
        title:
          "Users can upload images and interact with them",
      },
      { title: "Story upload functionality with auto expire" },
      {
        title:
          "Follower and Following functinality",
      },
    ],
    repoLink: "https://github.com/hey-virender/social-media-app",
    link:"https://social-media-app-lac-nu.vercel.app",
    image: orbifyImage,
  },
   {
    company: "Edugator",
    year: "2025",
    title: "AI powered tutor",
    results: [
      {
        title:
          "AI powered tutor that make learning easy.",
      },
      { title: "Personalized tutor for each subject." },
      {
        title:
          "Voice Interaction using Vapi and Gemini.",
      },
    ],
    repoLink: "https://github.com/hey-virender/edugator",
    link:"",
    image: edugatorImage,
  },
  {
    company: "Playpaste",
    year: "2025",
    title: "Generate YT playlist with ease of AI",
    results: [
      {
        title:
          "Create playlists by pasting the list of songs.",
      },
      { title: "Ingreted gemini for prompt processing." },
      {
        title:
          "Uses YT api to create playlists.",
      },
    ],
    repoLink: "https://github.com/hey-virender/Playpaste",
    link:"https://playpaste.virenderchauhan.in",
    image: playPasteImage,
  },

  
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
    repoLink: "https://github.com/hey-virender/prepwise",
    link:"https://prepwise-brown.vercel.app",
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
    repoLink: "https://github.com/hey-virender/university-library.git",
    link:null,
    image: universityLibraryImage,
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
                top: `calc(64px + ${index *5}px)`,
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

                  <div className="flex gap-4">
                    <Link target="_blank" href={project.repoLink}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex justify-center items-center gap-2 mt-8 ">
                      <span>Visit Repository</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </Link>
                  {project?.link && <Link target="_blank" href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex justify-center items-center gap-2 mt-8 ">
                      <span>Visit</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </Link>}
                  
                  </div>
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
