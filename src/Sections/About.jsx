import about from "../assets/about.png";
const About = () => {
  return (
    <div
      className="mt-20 max-w-7xl mx-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="text-center font-semibold text-2xl">
        <h2 className="border-b text-cyan-600 pb-2 border-cyan-600 w-fit mx-auto">
          About Us
        </h2>
      </div>
      <div className="flex flex-wrap-reverse px-3 mt-10">
        <div className="w-full lg:w-1/2 mt-5 md:mt-0">
          <h2 className="font-semibold mb-3 text-2xl">
            Empowering Productivity through Innovative Task Management
          </h2>
          <p className="text-justify">
            "At ABS IT Company, we're dedicated to revolutionizing task
            management. Our system is designed to simplify complexities,
            streamline workflows, and boost productivity. With intuitive
            features and a user-centric approach, we empower teams to
            collaborate seamlessly, prioritize tasks effectively, and achieve
            milestones effortlessly. Discover a smarter way to manage tasks with
            our solution, crafted by experts passionate about simplifying work
            processes and driving efficiency." This brief yet comprehensive
            content encapsulates the essence of your task management system,
            emphasizing its goals, user-centric approach, and the benefits it
            offers to teams. Adjust the language and specifics to align with
            your system's unique selling points and brand identity.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={about} alt="about image" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
