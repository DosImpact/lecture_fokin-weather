//redux duck 방식을 사용 할 것이다. - 원래 만들던 방법이랑 다를것이다.

//Import

// Actions : 어떤 액션이 있는지 명세를 한다. 다 문자열이여. ( 내부적 )

// Action Creators : 위 정의한 액션들을 type으로 반환하는 함수들 -> 이거는 export

// Reducer : 퉤 (현재 상태랑(없으면 기본상태여) , ACTION 이넘을 ) 던진다. ACTION 이넘 switch로 Reducer Function 1개로 퉤 -> export default

// Reducer Functions : (내부적)

//------------------------------------------------------------

// Imports

// Actions - 문자열로 어떤행동인지 정의한다.

const START_TIMER = "START_TIMER";
const PAUSE_TIMER = "PAUSE_TIMER";
const RESUME_TIMER = "RESUME_TIMER";
const STOP_TIMER = "STOP_TIMER";
const ADD_SECOND = "ADD_SECOND";
const RESTART_TIMER = "RESTART_TIMER";

// Action Creators - 방금 위에서 만든 문자열들을 리턴하는 함수들을 만든다.| 이 함수들은 obj하나로 만들어서 export할거임 | return type이라는 이름으로 문자열을 리턴한다.

function startTimer() {
  return {
    type: START_TIMER
  };
}

function pauseTimer() {
  return {
    type: PAUSE_TIMER
  };
}

function restartTimer() {
  return {
    type: RESTART_TIMER
  };
}

function addSecond() {
  return {
    type: ADD_SECOND
  };
}
const actionCreators = {
  startTimer,
  pauseTimer,
  restartTimer,
  addSecond
};
export { actionCreators };

// Reducer - 변수state,action을 받는다.

//---------------------------------------------------------------------------------------------------------------------------
/**
 *
 */
const TIMER_DURATION = 3;

const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: TIMER_DURATION
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state, action);
    case PAUSE_TIMER:
      return applyPauseTimer(state, action);
    case RESUME_TIMER:
      return applyResumeTimer(state, action);
    case STOP_TIMER:
      return applyStopTimer(state, action);
    case ADD_SECOND:
      return applyAddSecond(state, action);
    case RESTART_TIMER:
      return applyRestartTimer(state, action);
    default:
      return state;
  }
}

// Reducer Functions
function applyRestartTimer(state, action) {
  return {
    ...state,
    isPlaying: false
  };
}

function applyStartTimer(state, action) {
  return {
    ...state,
    isPlaying: true,
    elapsedTime: 0
  };
}

function applyPauseTimer(state, action) {
  return {
    ...state,
    isPlaying: false
  };
}

function applyResumeTimer(state, action) {
  return {
    ...state,
    isPlaying: true
  };
}

function applyStopTimer(state, action) {
  return {
    ...state,
    isPlaying: false,
    elapsedTime: 0
  };
}

function applyAddSecond(state, action) {
  const { elapsedTime } = state;
  if (elapsedTime < TIMER_DURATION) {
    return {
      ...state,
      elapsedTime: elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isPlaying: false
    };
  }
}
