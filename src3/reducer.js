//redux duck을 사용 할 것이다.

//Import

// Actions : 어떤 액션이 있는지 명세를 한다. 다 문자열이여. ( 내부적 )

// Action Creators : 위 정의한 액션들을 type으로 반환하는 함수들 -> 이거는 export

// Reducer : 퉤 (현재 상태랑(없으면 기본상태여) , ACTION 이넘을 ) 던진다. ACTION 이넘 switch로 Reducer Function 1개로 퉤 -> export

// Reducer Functions : (내부적)

//------------------------------------------------------------

// Imports

// Actions

const START_TIMER = "START_TIMER";
const PAUSE_TIMER = "PAUSE_TIMER";
const RESUME_TIMER = "RESUME_TIMER";
const STOP_TIMER = "STOP_TIMER";
const ADD_SECOND = "ADD_SECOND";

// Action Creators

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

// Reducer

const TIMER_DURATION = 1500;

const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: TIMER_DURATION
};

function reducer(state = initialState, action) {
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
    default:
      return state;
  }
}

// Reducer Functions

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

// Exports

const actionCreators = {
  startTimer,
  pauseTimer,
  restartTimer,
  addSecond
};
export { actionCreators };

// Default

export default reducer;
