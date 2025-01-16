import { defineStore } from "pinia";
import type { Project } from "user";

export const useProjectStroe = defineStore("projectStore", () => {
  const project:Project[] = []
  const getProject = async () => {
    
  }
  return {
    project,
    getProject,
  }
})