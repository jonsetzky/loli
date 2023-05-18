export const settings = {
  hideRealClient: {
    type: "boolean",
    label: "Hide real client",
    default: false,
  },
  testSetting: {
    type: "boolean",
    label: "Test setting",
    default: true,
  },
  autoRestartClient: {
    type: "boolean",
    label: "Automatically restart client",
    default: true,
  },
  allowDoubleRole: {
    type: "boolean",
    label: "Allow double role position in lobby",
    default: false,
  },
} as const;

export default settings;
