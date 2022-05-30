import { db } from "./db";

// this function is just a helper to be used in getPopulatedMeals()
export const getMeals = async () => {
  return await db.getConnection().collection("meals").find({}).toArray();
};
