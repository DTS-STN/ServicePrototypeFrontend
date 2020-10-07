import {language} from "./languageReducer";
import {changeLanguageCreator, LANGUAGES} from "../../actions";


describe("languageReducer", () => {
    test("has correct default state", () => {
        const result = language(undefined, {})
        expect(result).toBe("en")
    })
    test("handles changeLanguage action", () => {
        const result = language(undefined, changeLanguageCreator(LANGUAGES.FR))
        expect(result).toBe("fr")
    })
})