import { CHANGE_LANGUAGE } from "./actionTypes";
import { LANGUAGES, changeLanguageCreator } from "./changeLanguageAction";

describe("changeLanguageCreator", () => {
  test("forms the correct action", () => {
    let actionData = changeLanguageCreator(LANGUAGES.EN);
    expect(actionData).toEqual({
      type: CHANGE_LANGUAGE,
      lang: LANGUAGES.EN,
    });
  });
});
