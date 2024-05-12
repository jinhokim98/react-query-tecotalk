import { http, HttpResponse } from 'msw';
import BASE_URL from '../../config';
import crew from '../data/crew.json';
import setResponse from '../response';

const crewHandler = [
  http.get(`${BASE_URL}/api/crew`, async () => {
    const response = setResponse(crew);
    return HttpResponse.json(response);
  }),
  // 멤버 상세
  http.get(`${BASE_URL}/api/crew/:nickname`, async ({ request }) => {
    const queryParams = new URLSearchParams(new URL(request.url).search);

    const nick = queryParams.get('nickname');
    const foundUser = crew.find(member => member.nickname === nick);
    const response = setResponse(foundUser);

    return HttpResponse.json(response);
  }),

  // 수정
  http.patch(`${BASE_URL}/api/crew`, async () => {
    const response = setResponse({ nickname: `유저 수정 성공` });
    return HttpResponse.json(response);
  }),
];

export default crewHandler;
