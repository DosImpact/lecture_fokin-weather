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

- 라이브 로딩과 핫로딩

1. 라이브로딩: 저장하면 자동으로 새로고침이 되고, 실시간으로 변경사항이 적용됨.
2.

```
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}>
        <Text>Gwel</Text>
      </View>
      <View style={styles.blueView}>
        <Text>Gwel</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: "white"
  },
  yellowView: {
    flex: 1,
    backgroundColor: "yellow"
  },
  blueView: {
    flex: 5,
    backgroundColor: "blue"
  }
});

/*
리액트 네이티브는 js코드가 네이티브의 js엔진에서 돌아가서 네이티브에 접근한다.
그 사이에는 브릿지가 있고, 느려질 수 있다는 단점이 있다.

flex direction column 이 기본이다.

view는 div
Text는 span

flex는 사용법이 grid와 합쳐저서 사용한다.
flex1이 부모가 되고 자식의
flex2 flex5 dlfjaus 2:5d의 비율을 가진다.

*/

```

```
import React from "react";
import Loading from "./Loading";
import * as Location from 'expo-location';

export default function App() {
  return <Loading />;
}
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the fucking weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA"
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30
  }
});

```
