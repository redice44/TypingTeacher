import gameUtil from './constants';

const init = {
  results: {},
  gameType: gameUtil.c.PHRASE,
  phrase: '',
  timer: 0,
  game: {
    acc: 0,
    wpm: 0,
    timer: false,
    difficulty: 2
  }
};

export default init;
