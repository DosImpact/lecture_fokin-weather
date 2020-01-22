# REACT Native 01

[./docs/Weather.md](./docs/Weather.md)

## React Native로 날씨앱 만들기

[./docs/Timer.md](./docs/Timer.md)

## React Native로 타이머 앱 만들기

---

# 날씨앱 만들기. 요약

- 환경 설치

```
node -v
npm -v
npm install -g expo-cli
expo install expo-linear-gradient
expo install expo-location
```

- 기본 : Text,View컴포넌트 + 스타일시트 적용 + 상태바 숨기기, 테마 설정 +
- JSX : PropTypes 사용하기.
- 엑스포 기능 : expo-location 사용하기, expo-linear-gradient 사용하기, @expo/vector-icons 아이콘 기능
- JS : Axios 날씨 API 사용.

- 스타일 컴포넌트

```js
    flex: 1,
    alignItems: "center",
    justifyContent: "center"


    paddingHorizontal: 30,
    paddingVertical: 100,
    marginBottom: 10,

    backgroundColor: "#FDF6AA"


    color: "#2c2c2c",
    fontWeight: "600",
    fontSize: 24,
    textAlign: "left"
```

- LinearGradient

```js
<LinearGradient
  colors={weatherOptions[condition].gradient}
  style={styles.container}
></LinearGradient>
```

---

## React Native로 타이머 앱 만들기

---

# 타이머 앱 만들기. 요약

- 컴포넌트에 디자인 패턴 적용함 : 파일 이름 자체가 컴포넌트처럼 작동하고, 사실 그 안에는 Container 와 Presenter가 있다.
- {TouchableOpacity} from "react-native"; 누르는 순간 반투명으로 변해서 사용자의 입력에 시각적인 피드백을 준다.
