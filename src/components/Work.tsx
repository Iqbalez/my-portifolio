import "./styles/Work.css";
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "Solid Starters",
    category: "Low-Code Platform",
    description:
      "A proprietary low-code platform enabling rapid application development with drag-and-drop interfaces and automated workflows.",
    tools: ["Angular", "Next.js", "NestJS", "MongoDB"],
    image: "/images/Solidx.png",
  },
  {
    title: "Radix",
    category: "E-Commerce",
    description:
      "Full-featured e-commerce solution with product management, payments, and a custom CMS for content-driven storefronts.",
    tools: ["Angular", "Next.js", "NestJS", "CMS"],
    image: "/images/radix.png",
  },
  {
    title: "Bond Cancellation",
    category: "Import-Export Automation",
    description:
      "Automated import-export bond cancellation workflows, replacing manual processes with streamlined digital operations.",
    tools: ["Angular", "Next.js", "NestJS", "Workflows"],
    image: "/images/bond.png",
  },
  {
    title: "Sapphire",
    category: "CRM Platform",
    description:
      "Enterprise CRM platform for managing customer relationships, sales pipelines, and business analytics at scale.",
    tools: ["AngularJS", "NestJS", "PostgreSQL"],
    image: "/images/sapphire.png",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <p className="work-label">A selection of</p>
        <h2>
          Recent <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay" />
              </div>
              <div className="project-body">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tools">
                  {project.tools.map((tool, i) => (
                    <span className="project-tool" key={i}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <span className="project-number">0{index + 1}</span>
                <span className="project-link">
                  View Details <MdArrowOutward />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
