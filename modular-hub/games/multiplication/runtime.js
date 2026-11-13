// multiplication: game lifecycle. Shared algorithms live in shared/engines/.
// Customize this game's behavior here without changing the registry or navigation.
gameHandlers.multiplication = {
  newProblem(focus) { newArithmeticProblem(focus); },
  check() { checkArithmetic();
  }
};
