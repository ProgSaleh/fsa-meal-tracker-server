import { db } from "./db";

// this function is just a helper to be used in getPopulatedMeals()
export const getRecipes = async () => {
  return await db.getConnection().collection("recipes").find({}).toArray();
};
