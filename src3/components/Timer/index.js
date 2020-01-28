import { connect } from "react-redux"; //나의 컴포넌트를 스토어에 연결하는것을 도와준다.
import { bindActionCreators } from "redux";
import Timer from "./TimerPresenter"; //타이머 프리젠터
import { actionCreators } from "../../reducer";
function mapStateToProps(state) {
  //Provider 컴포넌트의 store에서 state를 복사 -> 컨테이너의 props에 넣는다.
  const { isPlaying, timerDuration, elapsedTime } = state;
  return { isPlaying, timerDuration, elapsedTime };
}
function mapDispatchToProps(dispatch) {
  //디스패치는 액션을 리듀서로 보내는 함수다. | 디스패치와 액션을 바인드
  return {
    startTimer: bindActionCreators(actionCreators.startTimer, dispatch),
    restartTimer: bindActionCreators(actionCreators.restartTimer, dispatch),
    addSecond: bindActionCreators(actionCreators.addSecond, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Timer); //컴포넌트 연결
