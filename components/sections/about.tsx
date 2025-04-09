import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `I am a dedicated and detail-oriented Computer Science undergraduate at Galgotias University, passionate about solving real-world problems through technology. 
With strong foundations in Java, Python, SQL, and data structures, I’ve worked on multiple hands-on projects involving machine learning, Android development, and IoT. I bring a dynamic and adaptable mindset, coupled with excellent organizational and time-management skills. 
My collaborative spirit has led me to participate in national-level hackathons and internships, enhancing my technical expertise and problem-solving abilities. 
I am always eager to learn emerging technologies and take on new challenges that drive innovation and impact.
`;

export default function About() {
  return (
    <section
      id="about"
      className="bg-black flex flex-col justify-center items-center px-10 md:px-40"
    >
      <h2 className="text-white text-4xl font-bold">About Me</h2>
      <div className="h-[50rem] w-full bg-black bg-grid-small-white/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <TextGenerateEffect words={words} />
      </div>
    </section>
  );
}
