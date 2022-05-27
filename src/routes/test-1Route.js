export const testOneRoute = {
  path: "/test-1",
  method: "get",
  handler: (req, res) => {
    res.status(200).json("from test ONE");
  },
};
