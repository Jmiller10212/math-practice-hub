// wordsPlace: game lifecycle. Shared algorithms live in shared/engines/.
// Customize this game's behavior here without changing the registry or navigation.
gameHandlers.wordsPlace = {
  newProblem(focus) { newPlaceValueProblem(focus); },
  check() { checkPlaceValue();
  }
};
