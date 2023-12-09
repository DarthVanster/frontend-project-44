export default () => {
  const MAX_FAIL_COUNT = 0;
  const MIN_SUCCESS_COUNT = 3;
  let userName = null;
  let successCount = 0;
  let failCount = 0;
  const reset = () => {
    successCount = 0;
    failCount = 0;
  };
  const finishWithLoose = () => {
    console.log(`Let's try again, ${userName}!`);
    reset();
  };
  const finishWithWin = () => {
    console.log(`Congratulations, ${userName}!`);
    reset();
  };
  const check = ({ rightAnswer, answer }, cb) => {
    if (answer === rightAnswer.toString()) {
      console.log('Correct!');
      successCount += 1;
    } else {
      console.log(`'${answer}' is wrong asnwer ;(. Correct answer was '${rightAnswer}'.`);
      failCount += 1;
    }
    if (failCount > MAX_FAIL_COUNT) {
      finishWithLoose();
    } else if (successCount >= MIN_SUCCESS_COUNT) {
      finishWithWin();
    } else {
      cb();
    }
  };
  return {
    userName,
    setUserName(name) {
      userName = name;
    },
    check({ rightAnswer, answer }, cb) {
      check({ rightAnswer, answer }, cb);
    },
    reset() {
      reset();
    },
  };
};
