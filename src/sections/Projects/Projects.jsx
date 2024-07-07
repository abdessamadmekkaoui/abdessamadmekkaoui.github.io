import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/1.jpg';
import freshBurger from '../../assets/4.jpg';
import hipsster from '../../assets/3.jpg';
import fitLift from '../../assets/2.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Influencio"
          p="Influencer Search Application"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="EventGo"
          p="Event Search and Reservations"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="EnsKech"
          p="School management System"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="ChronoVente"
          p="Rare Watch Auctions"
        />
      </div>
    </section>
  );
}

export default Projects;
