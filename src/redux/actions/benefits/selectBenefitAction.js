import { ACTION_TYPES } from "../actionTypes";

export function selectBenefitActionCreator(id) {
  return {
    type: ACTION_TYPES.SELECT_BENEFIT,
    id,
  };
}
