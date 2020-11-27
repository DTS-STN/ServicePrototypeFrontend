import { ACTION_TYPES } from "../actionTypes";

export function deselectBenefitActionCreator(id) {
  return {
    type: ACTION_TYPES.DESELECT_BENEFIT,
    id,
  };
}
