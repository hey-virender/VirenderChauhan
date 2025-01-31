import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import GrainImage from "@/assets/images/grain.jpg";
import Card from "@/components/Card";

const testimonials = [
  {
    name: "Future Client",
    position: "Marketing Manager @ TechStartups",
    text: "Virender's work on our full-stack e-commerce platform was instrumental in boosting our online presence. His ability to integrate modern technologies and his attention to detail made the entire project a success. Highly recommended!",
    avatar: memojiAvatar1,  // You can keep your existing avatar here
  },
  {
    name: "Future Client",
    position: "Head of Design @ GreenLeaf",
    text: "Virender's frontend development skills are exceptional. He brought our design to life with React and Next.js, and the user experience is now seamless across devices. He delivered beyond our expectations.",
    avatar: memojiAvatar2,  // You can keep your existing avatar here
  },
  {
    name: "Future Client",
    position: "CEO @ InnovateCo",
    text: "Virender's ability to create seamless user interfaces is impressive. The application he built for us is intuitive, fast, and user-friendly. It's been a pleasure working with him, and we're thrilled with the results.",
    avatar: memojiAvatar3,  // You can keep your existing avatar here
  },
  {
    name: "Future Client",
    position: "Product Manager @ GlobalTech",
    text: "Virender's attention to detail in both front-end and back-end development is remarkable. He transformed our product dashboard into an engaging and efficient tool for our team, and the feedback has been overwhelmingly positive.",
    avatar: memojiAvatar4,  // You can keep your existing avatar here
  },
  {
    name: "Future Client",
    position: "Director of IT @ MegaCorp",
    text: "Virender demonstrated strong technical skills and excellent communication throughout our project. He helped optimize our existing platform and implemented new features with precision. Highly recommend working with him.",
    avatar: memojiAvatar5,  // You can keep your existing avatar here
  },
];


export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="What people say about my work"
          title="I’m excited for the opportunity to work with you and create something amazing together"
          description="Though I am relatively new to professional work, I have been fortunate to collaborate with fantastic individuals and teams. Here's what they've had to say about our collaborations so far."
        />

        <div className="mt-12 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4 ">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs p-6 md:max-w-md md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
