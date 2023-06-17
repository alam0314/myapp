import projectData from './data';
import "./project.css"

const Project = () => {

  
  return (
    <>
      {
         <div className="container1">
          <h1 class="heading"> <span>Projects</span></h1>
         
              <div class="projects-grid">
           
              {
                projectData.map((el, index) => {
                  return (
                    <>
                   
                           <a  href={el.demo}  target="_blank" rel="noreferrer" class="project project-tile">
                             <img class="project-image" src={el.imgsrc} alt="project"/>
                             <p class="project-title">{el.projectName} <i>(Click me for live demo)</i></p>
                           </a>
                   
                    </>
                  )
                })
              }

              </div>
                   
        </div>
      }


    </>
  )
}

export default Project