import { SITE_URL } from "../constants";
import postTopics from "./collections/posts-topics";
import learnings from "./collections/learnings";
import projects from "./collections/projects";
import posts from "./collections/posts";
import socialLinks from "./collections/social-links";

const decapCMSConfig = {
  config: {
    site_url: SITE_URL,
    display_url: SITE_URL,
    backend: {
      name: "git-gateway",
      branch: "main",
      commit_messages: {
        create: "chore: :memo: Create {{collection}} “{{slug}}”",
        update: "chore: :memo: Update {{collection}} “{{slug}}”",
        delete: "chore: :memo: Delete {{collection}} “{{slug}}”",
        uploadMedia: "chore: :memo: Upload “{{path}}”",
        deleteMedia: "chore: :memo: Delete “{{path}}”",
      },
    },
    publish_mode: "editorial_workflow",
    local_backend: true,
    media_folder: "public/images/uploads",
    public_folder: "/images/uploads",
    i18n: {
      structure: "multiple_folders",
      locales: ["en", "pt-br"],
    },
    collections: [
      {
        name: "segmentation-data",
        label: "Segmentation Data",
        files: [postTopics, learnings],
      },
      {
        name: "personal-info",
        label: "Personal Info",
        files: [socialLinks],
      },
      posts,
      projects,
    ],
  },
};

export default decapCMSConfig;
