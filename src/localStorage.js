export const loadAnswers = () => {
  try {
    const serializedAnswers = localStorage.getItem("answers");
    if (serializedAnswers === null) {
      return undefined;
    }
    return JSON.parse(serializedAnswers);
  } catch (err) {
    return undefined;
  }
};

export const saveAnswers = (answers) => {
  try {
    const serializedAnswers = JSON.stringify(answers);
    localStorage.setItem("answers", serializedAnswers);
  } catch (err) {
    //TODO: Log
  }
};

export const clearAnswers = () => {
  localStorage.removeItem("answers");
};
