import { changeLanguageCreator } from "./changeLanguageAction";
import { LANGUAGES, ACTION_TYPES } from "../actionTypes";

describe("changeLanguageCreator", () => {
  test("forms the correct action", () => {
    let actionData = changeLanguageCreator(LANGUAGES.EN);
    expect(actionData).toEqual({
      type: ACTION_TYPES.CHANGE_LANGUAGE,
      lang: LANGUAGES.EN,
    });
  });
});
