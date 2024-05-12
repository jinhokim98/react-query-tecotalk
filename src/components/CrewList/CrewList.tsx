import { Link } from 'react-router-dom';
import { Crew } from '../../types/Crew';
import styles from './CrewList.module.css';

interface CrewProps {
  crew: Crew;
}

function CrewList({ crew }: CrewProps) {
  return (
    <Link to={crew.nickname} style={{ textDecoration: 'none', width: '500px' }}>
      <li className={styles.list}>
        <div>닉네임 : {crew.nickname}</div>
        <div>이름 : {crew.name}</div>
        <div>분야: {crew.stack}</div>
      </li>
    </Link>
  );
}

export default CrewList;
