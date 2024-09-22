import { SITE_URL } from "../constants";
import postTopics from "./collections/posts-topics";
import learnings from "./collections/learnings";
import projectsCMSConfig from "./collections/projects/cms";
import postsCMSConfig from "./collections/posts/cms";
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
      postsCMSConfig,
      projectsCMSConfig,
    ],
  },
};

export default decapCMSConfig;
