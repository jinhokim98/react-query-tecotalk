import { http, HttpResponse } from 'msw';
import BASE_URL from '../../config';
import crew from '../data/crew.json';
import setResponse from '../response';

interface LikeBody {
  isLike: boolean;
}

const crewHandler = [
  http.get(`${BASE_URL}/api/crew`, async () => {
    const response = setResponse(crew);
    return HttpResponse.json(response);
  }),

  // 수정
  http.post(`${BASE_URL}/api/crew/like`, async ({ request }) => {
    const body = (await request.json()) as LikeBody;
    const response = setResponse({ isLike: !body.isLike });
    return HttpResponse.json(response);
  }),
];

export default crewHandler;
