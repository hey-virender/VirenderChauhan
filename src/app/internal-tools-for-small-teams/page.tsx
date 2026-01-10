import type { Metadata } from "next";
import Image from "next/image";
import excelIcon from "@/assets/icons/excel.png";
import pendingIcon from "@/assets/icons/pending.png";
import delayIcon from "@/assets/icons/delay.png";
import differentIcon from "@/assets/icons/different.png";
import loginIcon from "@/assets/icons/login.png";
import dashboardIcon from "@/assets/icons/dashboard.png";
import rolesIcon from "@/assets/icons/roles.png";
import dataIcon from "@/assets/icons/data.png";
import complexIcon from "@/assets/icons/complex.png";
import CardSwap, { Card } from "@/components/CardSwap";
import Card2 from "@/components/Card";
import SpotlightCard from "@/components/SpotlightCard";
import adminIcon from "@/assets/icons/admin.png";
import roleManagmentIcon from "@/assets/icons/roleManagement.png";
import formsIcon from "@/assets/icons/forms.png";
import tablesIcon from "@/assets/icons/tables.png";
import datExportIcon from "@/assets/icons/dataExport.png";
import SectionHeader from "@/components/SectionHeader";
import errorIcon from "@/assets/icons/error.png";
import messyIcon from "@/assets/icons/messy.png";
import forceIcon from "@/assets/icons/force.png";
import workIcon from "@/assets/icons/work.png";
import timeIcon from "@/assets/icons/time-lost.png";
import neededIcon from "@/assets/icons/needed.png";
import complexityIcon from "@/assets/icons/complexity.png";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Internal Tools for Small Teams | Simple Custom Web Apps",
  description:
    "I build simple internal web tools for small teams to replace Excel, WhatsApp, and manual tracking with a single, clear system.",
};

const problems = [
  {
    id: 1,
    title: "Scattered Data",
    text: "Data scattered across Excel, WhatsApp, and emails",
    icon: excelIcon,
  },
  {
    id: 2,
    title: "Lack of Visibility",
    text: " No single place to see what’s done or pending",
    icon: pendingIcon,
  },
  {
    id: 3,
    title: "Manual Delays",
    text: "Manual updates that lead to mistakes and delays",
    icon: delayIcon,
  },
  {
    id: 4,
    title: "Different Processes",
    text: "Everyone follows a slightly different process",
    icon: differentIcon,
  },
  {
    id: 5,
    title: "Complex Tools",
    text: "Tools that are either too basic or too complex",
    icon: complexIcon,
  },
];

const radius = 20; // rem
const centerY = 13;

const solutions = [
  {
    id: 1,
    title: "Single Login",
    text: "One login for your entire team",
    icon: loginIcon,
    large: true,
  },
  {
    id: 2,
    title: "Central Dashboard",
    text: "A dashboard to see important info at a glance",
    icon: dashboardIcon,
  },
  {
    id: 3,
    title: "Role Management",
    text: "Clear roles and access for team members",
    icon: rolesIcon,
  },
  {
    id: 4,
    title: "Proper Data Storage",
    text: "Data stored properly, not copied everywhere",
    icon: dataIcon,
    large: true,
  },
];

const builds = [
  {
    id: 1,
    title: "Admin Dashboards",
    text: "Simple dashboards for managing team data",
    icon: adminIcon,
  },
  {
    id: 2,
    title: "User & Role Management",
    text: "Manage users and their roles easily",
    icon: roleManagmentIcon,
  },
  {
    id: 3,
    title: "Forms",
    text: "Forms to collect and update data",
    icon: formsIcon,
  },
  {
    id: 4,
    title: "Tables",
    text: "View, filter, and search information",
    icon: tablesIcon,
  },
  {
    id: 5,
    title: "Data Exporting",
    text: "Export data when needed",
    icon: datExportIcon,
  },
];

const whyCustomPoints = [
  {
    id: 1,
    text: "Excel breaks when multiple people update it",
    icon: errorIcon,
  },
  {
    id: 2,
    text: "Notion or Airtable become messy as data grows",
    icon: messyIcon,
  },
  {
    id: 3,
    text: "Ready-made tools force workflows you don’t follow",
    icon: forceIcon,
  },
];

export default function Page() {
  return (
    <main className="space-y-6 ">
      <header className="mx-4 mt-5 flex items-center justify-between rounded-xl border border-white/15 bg-gray-900/80 px-4 py-2 backdrop-blur">
        <div>
          <Link
            className="flex items-center gap-4  hover:scale-105 duration-700 ease-in-out transition-all"
            href="/"
          >
            <Image
              className="rounded-full border border-white/20"
              src="/logo.svg"
              alt="Logo"
              width={56}
              height={56}
            />
            <span className="text-xl uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
              Virender Chauhan
            </span>
          </Link>
        </div>

        <nav className="flex gap-3">
          <Link href="/">
            <button className="rounded-lg px-5 py-2 text-base font-medium text-white transition hover:bg-white/10">
              Home
            </button>
          </Link>

          <Link href="/">
            <button className="rounded-lg border border-emerald-400/40 px-5 py-2 text-base font-medium text-emerald-400 transition hover:bg-emerald-400/10">
              Contact Me
            </button>
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="space-y-2 mx-auto pt-20 text-center ">
        <h1 className="text-5xl font-semibold  leading-tight text-center font-serif">
          Still running your team on &nbsp;
          <span className="text-emerald-400">Excel, and WhatsApp</span>
        </h1>

        <p className="font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text max-w-2xl mx-auto text-lg pt-6">
          I build simple internal web tools for small teams to replace Excel,
          WhatsApp, and manual tracking with a single, clear system.
        </p>
        <div className="pt-4 font-semibold text-lg flex flex-wrap gap-4 mx-auto justify-center">
          {/* PRIMARY CTA */}
          <Link href="/">
            <button
              className="
      rounded-md
      bg-emerald-400
      px-7 py-3
      text-gray-900
      transition
      duration-300
      ease-out
      hover:-translate-y-0.5
      hover:bg-emerald-300
      hover:shadow-lg
      hover:shadow-emerald-400/30
      active:translate-y-0
    "
            >
              Get in touch
            </button>
          </Link>
          {/* SECONDARY CTA */}
          <Link href="/#contact">
            <button
              className="
      rounded-md
      border
      border-emerald-400
      px-5 py-2
      text-emerald-400
      transition
      duration-300
      ease-out
      hover:border-emerald-300
      hover:text-emerald-300
      hover:bg-transparent
      hover:underline
      hover:underline-offset-4
      active:translate-y-0
    "
            >
              Explore my work
            </button>
          </Link>
        </div>
      </section>

      {/* Problem */}
      <section className="pt-20 space-y-4 mx-auto  text-center px-4  pb-32">
        <SectionHeader
          title="The problems small teams usually face"
          eyebrow="Common Issues"
          description="Small teams often juggle multiple disconnected tools, leading to confusion, delays, and errors."
        />

        <div className="relative w-full h-[600px] -z-10">
          <CardSwap
            cardDistance={30}
            verticalDistance={40}
            delay={5000}
            width={1000}
            pauseOnHover={false}
          >
            {problems.map((problem) => (
              <Card
                key={problem.id}
                className="bg-gray-900 border-2 border-emerald-300 rounded-xl w-full mx-auto flex flex-col items-center justify-start text-center gap-16 space-y-4 p-2 "
              >
                <h2 className="text-lg uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                  {problem.title}
                </h2>
                <div className="flex flex-col items-center justify-center gap-4 mt-4">
                  <Image
                    src={problem.icon}
                    alt={problem.text}
                    className="size-40 mb-4"
                  />
                  <p className="text-amber-400 font-medium text-2xl">
                    {problem.text}
                  </p>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </section>

      {/* Solution */}
      <section className="space-y-4 mx-auto pt-20 z-20 bg-gray-900 px-4 text-center ">
        <SectionHeader
          title="A simple internal tool instead of many disconnected ones"
          eyebrow="The Solution"
          description="A small custom internal web app can centralize everything your team actually needs — nothing more, nothing less."
        />

        <div className="grid lg:grid-cols-5 self-start min-w-1/2 content-center gap-8 pt-16 mx-24">
          {solutions.map((solution) => (
            <Card2
              key={solution.id}
              className={`custom-spotlight-card w-full flex flex-col items-center justify-start text-center gap-4 p-4 hover:scale-105 hover:z-30 hover:border-emerald-400 transition-all duration-300 align-center  ${
                solution.large ? "col-span-3" : "col-span-2 "
              }`}
            >
              <h2 className="text-xl uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                {solution.title}
              </h2>
              <Image
                src={solution.icon}
                alt={solution.text}
                className="size-32 mb-4 "
              />
              {/* <p className="text-xl tracking-tighter text-sky-400 font-medium">
                {solution.text}
              </p> */}
            </Card2>
          ))}
        </div>
      </section>

      {/* What I build */}
      <section className="pt-20 space-y-4 mx-auto relative text-center px-4 flex flex-col gap-2 items-center  pb-32 min-h-screen">
        <SectionHeader
          title="What I usually build for small teams"
          eyebrow="Typical Builds"
          description="Depending on how your team works, the internal tool can include:"
        />

        <div className="relative w-full h-[600px] -z-10">
          <CardSwap
            cardDistance={30}
            verticalDistance={40}
            delay={3000}
            width={1000}
            pauseOnHover={false}
          >
            {builds.map((build) => (
              <Card
                key={build.id}
                className="bg-gray-900 border-2 border-emerald-300 rounded-xl w-full mx-auto flex flex-col items-center justify-start text-center gap-16 space-y-4 p-2 "
              >
                <h2 className="text-lg uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                  {build.title}
                </h2>
                <div className="flex flex-col items-center justify-center gap-4 mt-4">
                  <Image
                    src={build.icon}
                    alt={build.text}
                    className="size-48 mb-4"
                  />
                  <p className="text-indigo-400 font-semibold text-xl">
                    {build.text}
                  </p>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </section>

      {/* Why custom */}
      <section className="space-y-4 pt-20 z-20 bg-gray-900 px-4">
        <SectionHeader
          title="Why choose a custom internal tool?"
          eyebrow="Custom Tools"
          description="A small custom internal tool fits your existing process instead of
          forcing you to adapt to someone else’s software."
        />

        <div className="flex justify-center gap-7 pt-12">
          {whyCustomPoints.map((point) => (
            <SpotlightCard
              key={point.id}
              className="h-64 flex flex-col items-center gap-12"
            >
              <Image
                src={point.icon}
                height={100}
                width={100}
                className="size-32"
                alt={point.text}
              />
              <p className="text-amber-400 font-semibold">{point.text}</p>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Process / Trust */}
      <section className="pt-20 space-y-4 mx-auto z-20 px-4 ">
        <SectionHeader
          title="My Process"
          eyebrow="How I Work"
          description="I focus on building only what your team actually need."
        />
        <div className="grid max-w-7xl mx-auto px-6 lg:px-12 lg:grid-cols-3 gap-8 pt-16 pb-32">
          <Card2 className="h-[300px] col-span-1 flex flex-col items-center justify-center gap-8 p-8 text-center transition-all hover:scale-[1.02]">
            <Image
              src={workIcon}
              height={1000}
              width={1000}
              className="size-40"
              alt="Understand current workflow"
            />
            <p className="text-lg font-medium text-blue-400">
              First, understand how you currently work
            </p>
          </Card2>

          <Card2 className="h-[300px] col-span-1 lg:col-span-2 flex flex-col lg:flex-row items-center justify-center gap-8 p-8 transition-all hover:scale-[1.02]">
            <Image
              src={timeIcon}
              height={1000}
              width={1000}
              className="size-40"
              alt="Identify inefficiencies"
            />
            <p className="text-lg font-medium text-blue-400 text-center lg:text-left max-w-md">
              Identify where time, data, or clarity is lost
            </p>
          </Card2>

          <Card2 className="h-[300px] col-span-1 lg:col-span-2 flex flex-col-reverse lg:flex-row items-center justify-center gap-8 p-8 transition-all hover:scale-[1.02]">
            <Image
              src={neededIcon}
              height={1000}
              width={1000}
              className="size-40"
              alt="Build only what is needed"
            />
            <p className="text-lg font-medium text-blue-400 text-center lg:text-left max-w-md">
              Build only what’s actually needed
            </p>
          </Card2>

          <Card2 className="h-[300px] col-span-1 flex flex-col items-center justify-center gap-8 p-8 text-center transition-all hover:scale-[1.02]">
            <Image
              src={complexityIcon}
              height={1000}
              width={1000}
              className="size-40 hover:scale-105 transition-transform"
              alt="Avoid unnecessary complexity"
            />
            <p className="text-lg font-medium text-blue-400">
              Avoid unnecessary features and complexity
            </p>
          </Card2>
        </div>
      </section>

      {/* CTA */}
      <section className="space-y-6  pt-20 pb-32 px-4 mx-auto z-20 bg-gray-900 text-center ">
        <SectionHeader
          title="Not sure if you need a custom internal tool?"
          eyebrow="Need Help?"
          description="Describe how your team currently manages work and data, and I’ll let you know if a small internal tool makes sense — or if your current setup is already good enough."
        />

        <div className="pt-4 flex justify-center">
          <Link href="/#contact" className="mx-auto">
            <button className="bg-emerald-400 text-gray-900 px-10 py-5 font-semibold border-white border-1 rounded-md hover:scale-105 transition-all duration-400 hover:bg-transparent hover:text-emerald-400 hover:border-emerald-400 hover:border-2">
              Get in touch
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
