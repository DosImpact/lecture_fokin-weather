import { connect } from "react-redux";
import Timer from "./TimerPresenter";

function mapStateToProps(state) {
  const { isPlaying, timerDuration, elapsedTime } = state;
  return { isPlaying, timerDuration, elapsedTime };
}

export default connect(mapStateToProps)(Timer);
