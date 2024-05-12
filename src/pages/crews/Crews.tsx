import styles from './Crews.module.css';
import useGetCrews from '../../api/get/useGetCrews';
import CrewDetail from '../../components/CrewDetail';

function Crews() {
  const { crews, isLoading, error } = useGetCrews();

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>안녕 육칠이들</h1>
      <ul className={styles.list}>
        {crews !== undefined && crews.map((crew, index) => <CrewDetail key={index} crew={crew} />)}
      </ul>
    </section>
  );
}

export default Crews;
