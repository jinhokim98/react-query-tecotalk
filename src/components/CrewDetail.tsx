import usePostLike from '../api/post/usePostLike';
import { Crew } from '../types/Crew';
import styles from './CrewDetail.module.css';

interface CrewProps {
  crew: Crew;
}

function CrewDetail({ crew }: CrewProps) {
  const { requestLike } = usePostLike();
  const likeButtonLabel = crew.likeStatus ? '😊' : '😥';

  const body = {
    isLike: crew.likeStatus,
  };

  return (
    <li>
      <div>닉네임 : {crew.nickname}</div>
      <div>이름 : {crew.name}</div>
      <div>분야: {crew.stack}</div>
      <div style={{ display: 'flex' }}>
        <button className={styles.likeButton} onClick={() => requestLike(body)}>
          {likeButtonLabel}
        </button>
        <div>{crew.like}</div>
      </div>
    </li>
  );
}

export default CrewDetail;
