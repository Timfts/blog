import featuresExecutors from "./features";

type PreferencesState = {
  theme?: string;
  filter?: string;
  "text-size"?: number;
  pointer?: boolean;
  lang?: Lang;
};

const Settings = () => {
  const preferencesKey = "USR_PREFS";

  function getCurrentPreferences() {
    const currentStateStr = localStorage.getItem(preferencesKey) || "{}";
    const currentPrefs: PreferencesState = JSON.parse(currentStateStr);
    return currentPrefs;
  }

  function saveNewPreferences(newPrefs: PreferencesState) {
    localStorage.setItem(preferencesKey, JSON.stringify(newPrefs));
  }

  async function loadSavedPrefs() {
    const currentPrefs = getCurrentPreferences();

    for (const [key, value] of Object.entries(currentPrefs)) {
      const executor = featuresExecutors[key];
      await executor(value);
    }
  }

  async function setPref(setting: string, value: any) {
    const executor = featuresExecutors[setting];
    if (!executor) return;
    const currentPrefs = getCurrentPreferences();
    const newState: PreferencesState = { ...currentPrefs, [setting]: value };
    saveNewPreferences(newState);
    await executor(value);
  }

  return {
    loadSavedPrefs,
    setPref,
    getCurrentPreferences,
  };
};

const SettingsService = Settings();

export default SettingsService;
