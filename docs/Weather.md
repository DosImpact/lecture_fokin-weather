# 0.1 Requirements

- 환경설치하기
  VS code + expo 어플리케이션( for 모바일시뮬 )| 안드로이드 스튜디오 (for PC 시뮬레이터) + node.js + npm  
  [https://facebook.github.io/react-native/docs/getting-started](https://facebook.github.io/react-native/docs/getting-started)

```js
node -v
npm -v
npm install -g expo-cli
(expo init projectName)
```

```
expo install expo-linear-gradient
expo install expo-location
```

# 0.2 Expo vs RN CLI

- expo CLI 는 create-react-app 같은것이다. | 많은 설정들을 자동으로 만들어주기 떄문에 개발의 속도가 빠르다. | expo를 통해 바로 테스트도 가능 | 비해 적은 네이티브 접근 | IOS 빌드도 가능!
- React Native CLI 는 Xcode, 안드로이드 스튭에서 작업을 하며, 더 많은 네이티브 접근이 가능 | 큰회사의 큰 프로젝트 | 많은 버그 ... | IOS 는 맥이 있어야 빌드 가능

[https://docs.expo.io/versions/latest/workflow/expo-cli/](https://docs.expo.io/versions/latest/workflow/expo-cli/)

# 0.3 Creating the Project

- project 만들기

```js
expo init AwesomeProject
```

- +버전맞추기

```
  npm install (dependenci들을 설치한다.
  "expo": "^35.0.0",
  "react-native": "https://github.com/expo/react-native/archive/sdk-35.0.0.tar.gz",
  "sdkVersion": "35.0.0"
  버전들이 안맞으면 오류가 나오므로 버전들을 맞추거나, 기존 프로젝트의 package.json을 이용하도록!!)

```

# 0.5 How does React Native Work?

- 리액트 네이티브는 js코드가 네이티브의 js엔진에서 돌아가서 네이티브에 접근한다.
  그 사이에는 브릿지가 있고, 처리량이 많으면 느려질 수 있다는 단점이 있다.

- StyleSheet API를 통해, react native js에서 CSS을 짤 수 있다. CSS 엔진위에서 | 엄밀히 js 이므로 background-color는 backgroundColor처럼 써야된다.
- HTML도 react js 컴포넌트가 대체하는것 처럼 : div는 View 컴포넌트가 대체하고, span태그 는 Text 컴포넌트가 대체한다.

# 1.0 Layouts with Flexbox in React Native

- 웹과 다른 CSS 규칙이 적용된다. | CSS는 기본적으로 상속이 안됨 색상,배경색 | View = div태그 | Text = span 태그다.
- styles를 하나하나 적용시켜야 된다. | flex는 기본값이 row가 아닌 컬럼 | flex의 값으로 비율을 나타낼수있음.
- string문자열은 반드시, Text컴포넌트 에만 들어가야 한다.

```js
import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!!!</Text>
      <View style={styles.yellowView} />
      <View style={styles.blueView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  yellowView: {
    flex: 1,
    backgroundColor: "#77A1D3"
  },
  blueView: {
    flex: 2,
    backgroundColor: "#79CBCA"
  }
});
```

# 1.1 Loading Screen

```js
App.js;
import React from "react";
import Loading from "./Loading";

export default function App() {
  // function 컴포넌트
  return <Loading />; // 컴포넌트 삽입
}
```

```js
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the fucking weather</Text>
    </View>
  );
}
// 많은 부분이 CSS와 다르다.
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

# 1.2 Getting the Location

- expo 로케이션 설치하기
  [https://docs.expo.io/versions/latest/sdk/location/](https://docs.expo.io/versions/latest/sdk/location/)
  expo install expo-location
- 클래스 컴포넌트로 대체

```js
import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  getLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading />;
  }
}
```

- console.log를 통해 잘 출력되는것을 확인함.

```js
Object {
  "coords": Object {
    "accuracy": 30.93600082397461,
    "altitude": 0,
    "heading": 0,
    "latitude": 37.3347716,
    "longitude": 127.0898951,
    "speed": 0,
  },
  "mocked": false,
  "timestamp": 1577091213293,
}
```

# 1.3 Asking for Permissions

- 위치정보 가져와 출력 및 애러 핸들링

```js
import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getLocation = async () => {
    try {
      //위치정보 수집 허락 | 거절시 애러 발생 , 처리 해주기 try catch | 비동기함수
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync(); //  비동기 함수 | 현재 위치 받아오기.
      this.setState({ isLoading: false }); // 로딩 끝!
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
```

# 1.4 Getting the Weather

- axios 설치하기
- 날씨 얻어오기

```js
import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "5478ba6582be8963c227dd6cb6136cb2";
export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
    );
    console.log(data);
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
```

# 2.0 Displaying Temperature

- API 에서 온도 출력하기

```js
import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather"; //컴포넌트 임포트

const API_KEY = "5478ba6582be8963c227dd6cb6136cb2";
export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric` //단위 metric으로 설정
    );
    console.log(data);
    this.setState({ isLoading: false, temp: data.main.temp });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />; // 로딩끝나면 컴포넌트 반환
  }
}
```

```js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function Weather({ temp }) {
  //온도만 받아서 출력해주는 컴포넌트
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
    </View>
  );
}
//프롭타입 서드파티
Weather.propTypes = {
  temp: PropTypes.number.isRequired
};
//스타일 시트 작성했음.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
```

# 2.1 Getting the Condition Names

- API 에서 날씨 정보 컨디션 출력하기

```js
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    console.log(temp, weather);
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
  };
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
```

```js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function Weather({ temp, condition }) {
  return (
    <View style={styles.container}>
      <Text>
        {temp} & {condition}
      </Text>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
```

# 2.2 Icons and Styling

- 아이콘 추가하기
  [https://docs.expo.io/versions/latest/guides/icons/](https://docs.expo.io/versions/latest/guides/icons/)
  여기 리스트에서 아이콘들을 찾아 볼 수 있다. [https://expo.github.io/vector-icons/](https://expo.github.io/vector-icons/)

```js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons size={96} name="weather-lightning-rainy" />
        <Text style={styles.temp}>{temp}ºC</Text>
      </View>
      <View style={styles.halfContainer} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
```

# 2.3 Background Gradient

- 설치하기 Linear Gradient => expo install expo-linear-gradient
  [https://docs.expo.io/versions/latest/sdk/linear-gradient/](https://docs.expo.io/versions/latest/sdk/linear-gradient/)

- 상태바 색깔은 API컴포넌트를 통해 바꿀 수 있다.

```js
import { View, Text, StyleSheet, StatusBar } from "react-native";
<StatusBar barStyle="light-content" />;
```

# 2.4 Titles and Subtitles

- 최종 완성.

```js
import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "5478ba6582be8963c227dd6cb6136cb2";
export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    console.log(temp, weather);
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      //console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    console.log(isLoading, temp, condition);
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
```

```js
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
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

```js
import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain, but gay 🏳️‍🌈"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Raining like a MF",
    subtitle: "For more info look outside"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Cold as balls",
    subtitle: "Do you want to build a snowman? Fuck no."
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"]
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "Sunny as fuck",
    subtitle: "Go get your ass burnt"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "I know, fucking boring"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist!",
    subtitle: "It's like you have no glasses on."
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Dusty",
    subtitle: "Thanks a lot China 🖕🏻"
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside."
  }
};

export default function Weather({ temp, condition }) {
  //console.log(condition);
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ])
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left"
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
    textAlign: "left"
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 40,
    justifyContent: "center",
    flex: 1
  }
});
```

# 2.5 Conclusions

- 라이브 로딩과 핫로딩

1. 라이브로딩: 저장하면 자동으로 새로고침이 되고, 실시간으로 변경사항이 적용됨.
2. 핫로딩

```js
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


flex direction column 이 기본이다.

view는 div
Text는 span

flex는 사용법이 grid와 합쳐저서 사용한다.
flex1이 부모가 되고 자식의
flex2 flex5 dlfjaus 2:5d의 비율을 가진다.

*/
```

```js
import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";

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
