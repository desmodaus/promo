import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { SkillGroup } from "../data/skills";

type SkillsState = {
  groups: SkillGroup[];
  activeGroupId: SkillGroup["id"];
};

const initialState: SkillsState = {
  groups: [],
  activeGroupId: "frontend"
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    setGroups: (state, action: PayloadAction<SkillGroup[]>) => {
      state.groups = action.payload;
      if (!state.groups.find((group) => group.id === state.activeGroupId)) {
        state.activeGroupId = state.groups[0]?.id ?? "frontend";
      }
    },
    setActiveGroup: (state, action: PayloadAction<string>) => {
      const next = state.groups.find((group) => group.id === action.payload);
      if (next) {
        state.activeGroupId = next.id;
      }
    }
  }
});

export const { setGroups, setActiveGroup } = skillsSlice.actions;
export default skillsSlice.reducer;
