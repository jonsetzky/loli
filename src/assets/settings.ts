export const settings = {
  hideRealClient: {
    type: "boolean",
    id: "hide-real-client",
    label: "Hide real client",
    default: false,
  },
  testSetting: {
    type: "boolean",
    id: "test-setting",
    label: "Test setting",
    default: true,
  },
} as const;

export default settings;
