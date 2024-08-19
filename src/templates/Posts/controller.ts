import elementController from "@lib/elementController";

elementController(
  "posts-page",
  ({ root }) => {
    console.log("hello", root);
  },
  { rerun: "sameroute" }
);
