import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Certificats </h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="MongoDB Data Modeling Path" />
        <SkillList src={checkMarkIcon} skill="MongoDB PHP Developer Path" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Supervised Learning Regression and Classification" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="SoloLearn Web Developmen" />
      </div>
    </section>
  );
}

export default Skills;
