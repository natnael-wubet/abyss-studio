import Dexie from "dexie";

export const db = new Dexie("myDatabase");
db.version(1).stores({
  projects: "++id,title,discription,projectType,projectField,createdAt", // Primary key and indexed props
});
