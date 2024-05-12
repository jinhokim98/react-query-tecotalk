# msw

msw는 가짜 서버로, 프론트엔드만 구현되어있을 때 백엔드의 api 호출을 테스트해보고 싶을 때 사용하면 좋은 라이브러리입니다.
msw를 사용하면 위에 설정한 request 함수로 api 호출을 했을 때 msw가 요청을 가로채 미리 정의해놓은 응답을 얻을 수 있어서 api 테스트를 하기 좋습니다.


먼저 터미널에 아래 명령어를 입력해서 msw를 설치합니다.

```bash
$ npm install --save-dev msw
```

설치한 후 아래 명렁어를 통해 msw 초기 설정을 합니다

```bash
$ npx msw init public/ --save
```

이 명령어를 실행하면 public 폴더에 mockServiceWorker.js 파일이 생성됩니다.

## mocks 폴더구조 및 설정

그 후에 몇 가지 설정을 해주면 되는데

mocks
┣ 📂data
┣ 📂handlers
┣ browser.ts
┣ handlers.ts
┗ response.ts


여기 폴더구조에서 browser.ts를 생성하고 아래와 같이 입력해주면 됩니다. 우선은

```ts
import { setupWorker } from 'msw/browser';
import handlers from './handlers';

const worker = setupWorker(...handlers);

export default worker;
```

그리고 index.tsx에가서 아래 코드를 추가해주면 됩니다.

```ts
import worker from './mocks/browser';

if (import.meta.env.DEV) {
  worker.start();
}
```


이렇게 한다고 해서 아직 msw를 사용할 수는 없습니다. 우리가 사용할 api들을 정의하고 이를 등록해주어야 사용할 수 있는데 이를 handler에 등록하면 됩니다.

## 핸들러 등록

mocks/handler/~~ts에 아래와 같이 api를 정의합니다.

```ts
import { http, HttpResponse } from 'msw';
import BASE_URL from '@/config';
import user from '../data/user.json';
import setResponse from '../response';

const userHandler = [
  http.get(`${BASE_URL}/api/user`, async () => {
    const response = setResponse(user);
    return HttpResponse.json(response);
  }),
];

export default userHandler
```

http를 사용해서 우리가 사용하는 get, post, patch, delete, patch 메서드를 정의할 수 있으며, 인자로 url, callback 함수를 넣을 수 있습니다.


url은 BASE URL을 추가한 후에 우리가 사용할 uri를 넣어주고
callback 함수로는 응답을 돌려주는 함수를 넣으면 됩니다. 여기에서 미리 정의해놓은 더미데이터를 불러와 처리하면 됩니다.


### setResponse
예상되는 응답의 형태를 저장해놓은 것으로 이는 백엔드의 응답 형태가 달라지면 달라지게 하면 됩니다.


response.ts

```ts
interface IResponse<R> {
  timestamp: string;
  isSuccess: boolean;
  code: string;
  message: string;
  data: R;
}

const setResponse = <R>(data: R) => {
  const response: IResponse<R> = {
    timestamp: '2023-12-08',
    isSuccess: true,
    code: '200',
    message: '호출 성공',
    data,
  };

  return response;
};

export default setResponse;
```

응답의 결과를 response 변수에 넣어 HttpResponse.json(response)형태로 돌려주면 됩니다.

그리고 마지막 handlers.ts 안에 아래와 같이 넣어주면 되며, 핸들러가 추가될 때, 스프레드 연산자로 추가해주면 됩니다.

```ts
import userHandler from './handlers/user';

const handlers = [...userHandler];

export default handlers;
```

이렇게까지 하고 난 후 request함수로 미리 등록해놓은 uri로 요청을 보내게 되면 우리가 등록해놓은 핸들러가 이를 가로채, 미리 정의해놓은 응답을 돌려주어 api 연결을 한 것처럼 코드를 작성할 수 있습니다.

백엔드가 완성되지 않았을 때 이를 사용해서 구현을 해두면, 백엔드와 api 연결을 할 때 훨씬 수월했던 경험을 갖고 있어서, 이를 주로 설정해놓습니다.
