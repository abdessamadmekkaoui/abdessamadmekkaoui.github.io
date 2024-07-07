import styles from './MapStyles.module.css';

function Map() {
  return (
    <section id="mapbox" className={styles.container}>
      <h1 className="sectionTitle">Location</h1>
      <figure>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.768036778897!2d-7.568727188859878!3d33.55940267323534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda6332908d1d61b%3A0x569d5bec37f7f81a!2sENSAM%20CASABLANCA!5e0!3m2!1sfr!2sma!4v1717820117006!5m2!1sfr!2sma"
          width="100%" height="400" loading="lazy"></iframe>
      </figure>
    </section>
  );
}

export default Map;
