import { useSuspenseQuery } from '@tanstack/react-query';
import request from '../../utils/request';
import { Crew } from '../../types/Crew';

function useGetCrew(nickname: string) {
  const getCrews = async () => {
    const response = await request<null, Crew, null>({
      uri: `/api/crew/${nickname}`,
      method: 'get',
    });
    return response.data;
  };

  const { data, isLoading, error } = useSuspenseQuery({
    queryKey: ['get-crew-detail', nickname],
    queryFn: getCrews,
  });

  return {
    crew: data,
    isLoading,
    error,
  };
}

export default useGetCrew;
