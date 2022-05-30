import { deleteIngredient, getIngredients } from "../db";

export const deleteIngredientRoute = {
  path: "/ingredients/:name",
  method: "delete",
  handler: async (req, res) => {
    // extract name value from the params(that is the url)
    const { name } = req.params;

    // go to ingredients collection and delete the ingredient with the passed name.
    await deleteIngredient(name);

    // return the new updated ingredients[] after the deletion.
    const updatedIngredients = await getIngredients();
    res.status(200).json(updatedIngredients);
  },
};
