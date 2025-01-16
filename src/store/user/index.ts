import { defineStore } from "pinia";
import type { UserInfo } from "user";

export const useUserStore = defineStore("userStore", () => {
  const userInfo:UserInfo = {
    id: '',
    name: '',
    avatar: '',
    email: '',
    remark: '',
    phone: '',
    tag: [],
    personalTagline: '',
    markdown: '',
    password: '',
  }
  const getUserInfo = () => {
    
  }
  return {
    userInfo,
    getUserInfo,
  }
})