import styles from './SkillsStyles.module.css';
import FormationList from '../../common/FormationList';

function Formation() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Formation</h1>
      <div className={styles.FormationList}>
        <FormationList skill="Master en Big Data & IoT (En cours)"/>
        <FormationList descript="École Nationale Supérieure d'Arts et Métiers, Casablanca" />
      </div>
      <hr />
      <div className={styles.FormationList}>
      <FormationList skill="Licence en Éducation, spécialité Informatique (2020 - 2023)"/>
      <FormationList descript="École Normale Supérieure, Marrakech" />
      </div>
      <hr />
      <div className={styles.FormationList}>
      <FormationList skill="baccalauréat science physique (2018 - 2019)"/>
      <FormationList descript="lycée mohamed v, goulmima" />
      </div>
    </section>
  );
}

export default Formation;
