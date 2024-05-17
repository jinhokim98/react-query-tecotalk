import styles from './Crews.module.css';
import useGetCrews from '../../api/get/useGetCrews';
import CrewList from '../../components/CrewList/CrewList';

function Crews() {
  const { crews } = useGetCrews();

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>안녕 크루들</h1>
      <ul className={styles.list}>
        {crews !== undefined && crews.map((crew, index) => <CrewList key={index} crew={crew} />)}
      </ul>
    </section>
  );
}

export default Crews;
