import prefsHandlers from "./handlers";
import { setPreferenceClass } from "./helpers";

type PreferencesState = {
  theme?: string;
  filter?: string;
  "text-size"?: number;
  pointer?: boolean;
  lang?: Lang;
  "desk-background"?: string;
};

const Settings = () => {
  const preferencesKey = "USR_PREFS";

  function getCurrentPreferences() {
    const currentStateStr = localStorage.getItem(preferencesKey) || "{}";
    const currentPrefs: PreferencesState = JSON.parse(currentStateStr);
    return currentPrefs;
  }

  async function loadPrefsSideEffects() {
    const currentPrefs = getCurrentPreferences();

    for (const [key, value] of Object.entries(currentPrefs)) {
      const prefSideEffect = prefsHandlers[key];
      if (prefSideEffect) prefSideEffect(value);
    }
  }

  async function setPref(setting: string, value: any) {
    const currentPrefs = getCurrentPreferences();
    const newState: PreferencesState = { ...currentPrefs, [setting]: value };
    setPreferenceClass(setting, String(value));
    localStorage.setItem(preferencesKey, JSON.stringify(newState));
    const prefSideEffect = prefsHandlers[setting];
    if (prefSideEffect) prefSideEffect(value);
  }

  return {
    loadPrefsSideEffects,
    setPref,
    getCurrentPreferences,
  };
};

const SettingsService = Settings();

export default SettingsService;
