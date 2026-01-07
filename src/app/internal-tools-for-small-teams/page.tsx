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
import SpotlightCard from "@/components/SpotlightCard";
import adminIcon from "@/assets/icons/admin.png";
import roleManagmentIcon from "@/assets/icons/roleManagement.png";
import formsIcon from "@/assets/icons/forms.png";
import tablesIcon from "@/assets/icons/tables.png";
import datExportIcon from "@/assets/icons/dataExport.png";

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

const solutions = [
  {
    id: 1,
    title: "Single Login",
    text: "One login for your entire team",
    icon: loginIcon,
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

export default function Page() {
  return (
    <main className="space-y-6 ">
      {/* Hero */}
      <section className="space-y-2 mx-auto mt-14 text-center ">
        <h1 className="text-5xl font-semibold  leading-tight text-center font-serif">
          Still running your team on &nbsp;
          <span className="text-emerald-400">Excel, and WhatsApp</span>
        </h1>

        <p className="font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text max-w-2xl mx-auto text-lg pt-6">
          I build simple internal web tools for small teams to replace Excel,
          WhatsApp, and manual tracking with a single, clear system.
        </p>
        <div className="pt-4 font-semibold text-lg">
          <button className="bg-emerald-400 text-gray-900 px-7 py-3 border-white border-1 rounded-md">
            Get in touch
          </button>
          <button className="ml-5 border border-2 border-emerald-400 text-emerald-400 px-5 py-2 rounded-md">
            Explore my work
          </button>
        </div>
      </section>

      {/* Problem */}
      <section className="pt-56 space-y-4 mx-auto  text-center px-4 flex items-center pb-32">
        <h2 className="text-2xl uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          What usually goes wrong in small teams
        </h2>

        <div className="relative w-full h-[300px] -z-10">
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
                className="bg-gray-900 border-2 border-emerald-300 rounded-xl max-w-lg mx-auto flex flex-col items-center justify-start text-center gap-16 space-y-4 p-2 "
              >
                <h2 className="text-lg uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                  {problem.title}
                </h2>
                <div className="flex flex-col items-center justify-center gap-4 mt-4">
                  <Image
                    src={problem.icon}
                    alt={problem.text}
                    className="size-32 mb-4"
                  />
                  <p className="text-amber-400 font-medium text-lg">
                    {problem.text}
                  </p>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </section>

      {/* Solution */}
      <section className="space-y-4 mx-auto z-20 bg-gray-900 px-4 text-center">
        <h2 className="text-2xl uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          A simple internal tool instead of many disconnected ones
        </h2>

        <p className="pt-8">
          Instead of juggling multiple tools, a small internal web app can
          centralize everything your team actually needs — nothing more, nothing
          less.
        </p>

        <div className="flex gap-2 pt-8">
          {solutions.map((solution) => (
            <SpotlightCard
              key={solution.id}
              className="custom-spotlight-card w-1/4 flex flex-col items-center justify-start text-center gap-4 p-4 hover:scale-110 hover:z-30 hover:border-emerald-400 transition-all duration-300"
              spotlightColor="rgba(52, 211, 153, 0.8)"
            >
              <h2 className=" uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                {solution.title}
              </h2>
              <Image
                src={solution.icon}
                alt={solution.text}
                className="size-32 mb-4 "
              />
              <p className="text-sm tracking-tighter text-sky-400 font-medium">
                {solution.text}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* What I build */}
      <section className="pt-56 space-y-4 mx-auto  text-center px-4 flex items-center justify-between pb-32 ">
        <div>
          <h2 className="text-2xl uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            What I usually build for small teams
          </h2>

          <p className="">
            Depending on how your team works, the internal tool can include:
          </p>
        </div>

        <div className="relative w-full h-[300px] -z-10">
          <CardSwap
            cardDistance={30}
            verticalDistance={40}
            delay={5000}
            width={1000}
            pauseOnHover={false}
          >
            {builds.map((build) => (
              <Card
                key={build.id}
                className="bg-gray-900 border-2 border-emerald-300 rounded-xl max-w-lg mx-auto flex flex-col items-center justify-start text-center gap-16 space-y-4 p-2 "
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
      <section className="space-y-4  z-20 bg-gray-900 px-4">
        <h2 className="text-2xl font-semibold">
          Why not just use Excel or ready-made tools?
        </h2>

        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Excel breaks when multiple people update it</li>
          <li>Notion or Airtable become messy as data grows</li>
          <li>Ready-made tools force workflows you don’t follow</li>
        </ul>

        <p className="text-gray-700">
          A small custom internal tool fits your existing process instead of
          forcing you to adapt to someone else’s software.
        </p>
      </section>

      {/* Process / Trust */}
      <section className="space-y-4 max-w-3xl">
        <h2 className="text-2xl font-semibold">
          How I approach building internal tools
        </h2>

        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>First, understand how you currently work</li>
          <li>Identify where time, data, or clarity is lost</li>
          <li>Build only what’s actually needed</li>
          <li>Avoid unnecessary features and complexity</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="space-y-6 max-w-3xl border-t pt-10">
        <h2 className="text-2xl font-semibold">
          Not sure if you even need a custom tool?
        </h2>

        <p className="text-gray-700">
          Explain how your team currently manages work and data. I’ll tell you
          whether a small internal tool makes sense — or if your current setup
          is already good enough.
        </p>

        <p className="font-medium">
          👉 You can reach me through the contact details on this site.
        </p>
      </section>
    </main>
  );
}
