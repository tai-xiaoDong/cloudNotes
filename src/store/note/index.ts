import { defineStore } from "pinia";
import { getLibTree } from "@/api/module/note";

type LibTree = {
  title: string;
  key: string;
  children?: Array<LibTree>;
};

export const useNoteStore = defineStore("noteStrore", () => {
  const markdownId = '';
  const noteTree: LibTree[] = [
    {
      title: "文件夹1",
      key: "Dir-0",
      children: [
        {
          title: "markdown1",
          key: "0",
        },
        {
          title: "markdown2",
          key: "1",
        },
        {
          title: "markdown3",
          key: "2",
        },
      ],
    },
    {
      title: "文件夹2",
      key: "Dir-1",
      children: [
        {
          title: "markdown4",
          key: "4",
        },
      ],
    },
  ];
  const allLib = []
  const favorite = [] // 收藏夹
  const getNoteTree = async () => {
    let res = await getLibTree();
    console.log(res.data);
  };
  return {
    noteTree,
    markdownId,
    getNoteTree,
  };
});
