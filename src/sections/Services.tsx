import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const services = [
  {
    title: "SaaS MVP Development",
    description:
      "Full-stack build from idea to working product \u2014 auth, database, and a UI users can actually use.",
    href: "#contact",
    cta: "Get in touch",
  },
  {
    title: "AI Feature Integration",
    description:
      "Add AI where it earns its keep: chatbots, document parsing, structured LLM output, voice interfaces.",
    href: "#contact",
    cta: "Get in touch",
  },
  {
    title: "Internal Tools for Small Teams",
    description:
      "Replace Excel and WhatsApp with one simple system built around how your team actually works.",
    href: "/internal-tools-for-small-teams",
    cta: "See details",
  },
];

export const ServicesSection = () => {
  return (
    <div className="py-16 lg:py-24" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="What I can build for you"
          description="Freelance and contract work I take on right now"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mt-16">
          {services.map((service) => (
            <Card key={service.title} className="p-8 flex flex-col">
              <h3 className="font-serif text-xl md:text-2xl">
                {service.title}
              </h3>
              <p className="text-white/60 mt-3 text-sm md:text-base flex-1">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 font-semibold mt-6 text-sm md:text-base"
              >
                <span>{service.cta}</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

