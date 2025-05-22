import HeadingText from "../component/common/HeadingText";
import ProjectSection from "../component/projects/ProjectSection";

function Project() {
  return (
    <section className="project d-flex justify-content-center align-items-center flex-column pt-5">
      <HeadingText text={"PROJECT"} />
      <ProjectSection />
    </section>
  );
}

export default Project;
