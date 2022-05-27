export const helloRoute = {
  path: "/hello",
  method: "get",
  handler: (req, res) => {
    res.status(200).json({ msg: "Hello from orginized routes..." });
  },
};
