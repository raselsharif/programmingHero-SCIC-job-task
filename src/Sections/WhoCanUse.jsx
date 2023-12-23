import CanUseCard from "./CanUseCard";

const WhoCanUse = () => {
  return (
    <div
      className="mt-20 max-w-7xl mx-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="text-center font-semibold text-2xl">
        <h2 className="border-b text-cyan-600 pb-2 border-cyan-600 w-fit mx-auto">
          Who Can Use?
        </h2>
      </div>
      <div className="flex  flex-wrap justify-center mt-10 gap-4 px-4">
        <CanUseCard
          heading={"Freelancers: "}
          title={
            "Freelancers and independent professionals can stay organized by managing their client work, projects, and deadlines using task management tools."
          }
        />
        <CanUseCard
          heading={"Students and Educators:  "}
          title={
            "Students can manage their assignments, study schedules, and group projects. Educators can use task management systems to organize lesson plans and grading."
          }
        />{" "}
        <CanUseCard
          heading={"Remote Teams:"}
          title={
            "Teams working remotely or distributed across different locations benefit greatly from task management systems to ensure everyone is on the same page, collaborating effectively."
          }
        />{" "}
        <CanUseCard
          heading={"Event Planners: "}
          title={
            "Professionals organizing events can use task management systems to manage timelines, vendors, and all the necessary tasks leading up to the event."
          }
        />
        <CanUseCard
          heading={"IT and Development Teams:  "}
          title={
            " Developers and IT professionals can use task management systems for project planning, bug tracking, and software development cycles."
          }
        />
      </div>
    </div>
  );
};

export default WhoCanUse;
