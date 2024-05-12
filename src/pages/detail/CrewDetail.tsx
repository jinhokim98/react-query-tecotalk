import styles from './CrewDetail.module.css';
import useGetCrew from '../../api/get/useGetCrew';
import { useParams } from 'react-router-dom';
import usePostLike from '../../api/post/usePostLike';

function CrewDetail() {
  const { nickname } = useParams();
  const { crew } = useGetCrew(nickname ?? '');

  const { requestLike } = usePostLike(nickname ?? '');
  const likeButtonLabel = crew.likeStatus ? '😊' : '😥';

  const body = {
    isLike: crew.likeStatus,
  };

  return (
    <div>
      <div>닉네임 : {crew.nickname}</div>
      <div>이름 : {crew.name}</div>
      <div>분야: {crew.stack}</div>
      <div style={{ display: 'flex' }}>
        <button className={styles.likeButton} onClick={() => requestLike(body)}>
          {likeButtonLabel}
        </button>
        <div>{crew.like}</div>
      </div>
    </div>
  );
}

export default CrewDetail;
