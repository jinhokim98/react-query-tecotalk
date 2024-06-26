import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '../../utils/request';

interface PostLike {
  isLike: boolean;
}

function usePostLike(nickname: string) {
  const postLike = async (body: PostLike) => {
    const response = await request<PostLike, PostLike, null>({
      uri: '/api/crew/like',
      method: 'post',
      data: body,
    });

    return response.data;
  };

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['post-like'],
    mutationFn: postLike,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-crew-detail', nickname],
      });
    },
  });

  return {
    requestLike: mutate,
  };
}

export default usePostLike;
