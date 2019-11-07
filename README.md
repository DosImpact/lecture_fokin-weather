# REACT Native 01

## React Native로 날씨앱 만들기

[강의 사이트](https://academy.nomadcoders.co/courses/216885/lectures/10903204)

- 환경설치  
  VS code + expo 어플리케이션 또는 안드로이드 스튜디오 (시뮬레이터) + node.js + npm

```
node -v
v12.13.0
>npm -v
6.12.1

npm install -g expo-cli

```

- 개발 방식

1. React Native CLI는 모든 Native 파일들을 오픈해서 직접 Xcode랑 안드로이드 스튜디오랑 연결해서  
   네이티브 개발자랑 리액트 개발자랑 같이 작업을 할때 큰회사에서 필요로 할때의 환경이다.
2. Expo CLI는 모든 모든 Native files들을 감추고 모든걸 관리해준다. 하지만 단점은 native files들을 크게 제어할 수 없다는 것이다. expo로 작업하면서 아직까지는 괜찮았다.

Expo 덕분에 window에서도 IOS 개발을 할 수 있다. 반면에 React Native로는 불가능 하다.  

