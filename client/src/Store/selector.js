import { createSelector } from "@reduxjs/toolkit";

const selectLoginDomain = (state) => state["Auth"];

export const makeSelectAuthToken = () =>
  createSelector(selectLoginDomain, (globalState) => globalState.token);
