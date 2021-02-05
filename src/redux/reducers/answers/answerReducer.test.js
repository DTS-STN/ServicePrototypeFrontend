import { answers } from "./answersReducer";
import {
  setAnswerActionCreator,
  removeAnswerActionCreator,
} from "../../actions";

describe("answersReducer", () => {
  it("sets answer", () => {
    const result = answers(
      undefined,
      setAnswerActionCreator("someKey", "someValue")
    );
    expect(result).toEqual({
      someKey: "someValue",
    });
  });

  it("removes answer", () => {
    const result = answers(
      {
        someKey: "someValue",
      },
      removeAnswerActionCreator("someKey")
    );

    expect(result).toEqual({});
  });
});
