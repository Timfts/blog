import postTopics from "./collections/posts-topics";
import learnings from "./collections/learnings";
import snippetsCategories from "./collections/snippets-categories";
import posts from "./collections/posts";

const decapCMSConfig = {
  config: {
    backend: {
      name: "git-gateway",
      branch: "main",
    },
    publish_mode: "editorial_workflow",
    local_backend: true,
    media_folder: "public/images/uploads",
    public_folder: "/images/uploads",
    i18n: {
      structure: "multiple_folders",
      locales: ["en", "pt"],
    },
    collections: [
      {
        name: "segmentation-data",
        label: "Segmentation Data",
        files: [postTopics, learnings, snippetsCategories],
      },
      posts,
    ],
  },
};

export default decapCMSConfig;
