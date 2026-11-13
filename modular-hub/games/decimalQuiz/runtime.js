// decimalQuiz: game lifecycle. Shared algorithms live in shared/engines/.
// Customize this game's behavior here without changing the registry or navigation.
gameHandlers.decimalQuiz = {
  newProblem(focus) { newDecimalQuestion(focus); },
  check() { // Choice buttons check and score their own answers.
  }
};
