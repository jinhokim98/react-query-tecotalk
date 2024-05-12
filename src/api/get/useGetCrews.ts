import { useSuspenseQuery } from '@tanstack/react-query';
import request from '../../utils/request';
import { Crew } from '../../types/Crew';

function useGetCrews() {
  const getCrews = async () => {
    const response = await request<null, Crew[], null>({
      uri: '/api/crew',
      method: 'get',
    });
    return response.data;
  };

  const { data, isLoading, error } = useSuspenseQuery({
    queryKey: ['get-crew'],
    queryFn: getCrews,
  });

  return {
    crews: data,
    isLoading,
    error,
  };
}

export default useGetCrews;
