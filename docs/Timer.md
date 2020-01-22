# 6. Installing Redux and React Redux

- yarn add redux react-redux

# 7. Intro to Redux

- 리덕스란?
- 컴포넌트는 local state를 갖고, 앱은 global state를 갖기 떄문이다. 문제는 많은 컴포넌트로 만들어진 앱은 local state를 관리하기 어렵다는것.
- 예를들어)모든 컴포넌트는 로그인 유무를 알 필요가 있는데, 포스트의 하트 여부는 모든 컴포넌트가 알 필요가 없지.

- Redux가 필요없는 경우: 그냥 단순히 블로그 포스트와 댓글을 뿌려주는경우
- Redux가 필요한 경우. : 대댓을 달 경우.(내가 누구인지 ? + 어떤 댓글에 대댓인지)
- 만약 억지로 Redux없이 개발한경우 : 과도한 props 낭비, flying prop라고 사용할지도 모르는 정보를 오버해서 넘겨 주어야 겠지. | 컴포넌트 자식간의 소통이 어렵다. 그 길을 부모가 다 텨줘야함.
- 리덕스는 global state container 라고 생각하면 됨.

- 기억할것: store 는 오브젝트 모든 state가 저장됨 | 데이터 변경은 dispatch 액션(액션은 오브젝트) | 리듀서가 액션을 받고 해결.
- 간단한 앱에서는 Redux가 복잡할 수 있지만, 인스타클론에서는 필요성을 알거다.

# 8. Designing the State Shape

- 세는 중인지 ? | 얼마까지 세는지 | 지나온 시간

# 10. Creating the tomato reducer

- reducer.js 만듦

# 11. Connecting the Components to State

- Timer/index.js state 불러와서, Timer컴포넌트에 리덕스 props 추가함.

# 12. Connecting the Components to Actions

# 13. Practicing setInterval

# 14. Adding seconds to the counter

# 15. Turning seconds into minutes
