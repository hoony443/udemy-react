import { db } from "../fConfig";
import { collection, getDocs, query } from "firebase/firestore";

export const GetCafeList = async () => {
  const querySnapshot = await getDocs(collection(db, "cafe_list"));

  const newData = querySnapshot.docs.map((doc) => {
    return doc.data();
  });
  return newData;
};
