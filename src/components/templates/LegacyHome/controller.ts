import elementController from "@lib/elementController";
import { navigate } from 'astro:transitions/client';

elementController(
  "home-page",
  ({ query }) => {
    const btn = query("#mybtn");

    btn.addEventListener("click", () => {
      navigate("/projects");
    });
  },
  { rerun: "changeroute" }
);
