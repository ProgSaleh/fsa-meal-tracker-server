export const testTwoRoute = {
  path: "/test-2",
  method: "get",
  handler: (req, res) => {
    res.status(200).json("Hello from test TWO");
  },
};
