import "./Projects.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Projects from "./Data/projects";
export default function ProjectPage() {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <>
      <div className="projectContainer" id="projects">
        <div className="projectElement">
          <div className="projectHead">
            <span>Projects</span>
            <p>
              A showcase of the projects i have worked on, highlighting my
              skills and experience in various technology
            </p>
          </div>
          <div className="projectMain">
            {Projects.map((project) => {
              const isHovered = hoveredCardId === project.id;
              return (
                <div
                  className="project"
                  onMouseEnter={() => setHoveredCardId(project.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  key={project.id}
                >
                  <Card
                    sx={{ maxWidth: 345 }}
                    className="projectCard"
                  >
                    <div className={`cardContentWrapper ${isHovered ? "blurred" : ""}`}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={project.image}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {project.name}
                      </Typography>
                      <Typography className="projectDes">
                        {project.description}
                      </Typography>
                    </CardContent>
                    <CardActions className="projectSkills">
                      <ul>
                        {project.skills.map((skill , index) => {
                          return <li key={index}>{skill}</li>;
                        })}
                      </ul>
                    </CardActions>
                    </div>
                    {isHovered && (
                      <div className="overlay">
                        <a href={project.link} target="_blank" rel="noreferrer">
                          <button className="visitBtn">Visit <span><FontAwesomeIcon icon={faUpRightFromSquare} /></span></button>
                        </a>
                      </div>
                    )}
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
