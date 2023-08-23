import runControllerByPath from "./runControllerByPath";

describe("correctly finds page controllers by path", () => {
  test("run single correspondent function", () => {
    const mockControllerA = jest.fn(() => "mockA");
    const mockControllerB = jest.fn(() => "mockB");
    const mockMap: IControllersList = {
      "/route-a": mockControllerA,
      "/route-b": mockControllerB,
    };
    const mockPath = "/route-a";
    runControllerByPath(mockPath, mockMap);
    expect(mockControllerA.mock.calls.length).toBe(1);
    expect(mockControllerB.mock.calls.length).toBe(0);
  });

  test("run root route controller", () => {
    const mockControllerA = jest.fn(() => "root");
    const mockControllerB = jest.fn(() => "mockB");
    const mockMap: IControllersList = {
      "/": mockControllerA,
      "/route-b": mockControllerB,
    };
    const mockPath = "/";
    runControllerByPath(mockPath, mockMap);
    expect(mockControllerA.mock.calls.length).toBe(1);
    expect(mockControllerB.mock.calls.length).toBe(0);
  });

  test("dont run root controller when it's not necessary", () => {
    const rootController = jest.fn(() => "root");
    const mockControllerA = jest.fn(() => "mockA");
    const mockControllerB = jest.fn(() => "mockB");
    const mockMap: IControllersList = {
      "/": rootController,
      "/route-a": mockControllerA,
      "/route-b": mockControllerB,
    };
    const mockPath = "/route-b";
    runControllerByPath(mockPath, mockMap);
    expect(rootController.mock.calls.length).toBe(0);
    expect(mockControllerA.mock.calls.length).toBe(0);
    expect(mockControllerB.mock.calls.length).toBe(1);
  });

  test("run wildcard route matcher", () => {
    const rootController = jest.fn(() => "root");
    const mockControllerA = jest.fn(() => "mockA");
    const mockControllerB = jest.fn(() => "mockB");
    const batchController = jest.fn(() => "batchController");
    const mockMap: IControllersList = {
      "/": rootController,
      "/sds/*": batchController,
      "/sds/mock-a": mockControllerA,
      "/sds/mock-b": mockControllerB,
    };

    const mockPath = "/sds/mock-a";
    runControllerByPath(mockPath, mockMap);

    expect(rootController.mock.calls.length).toBe(0);
    expect(mockControllerA.mock.calls.length).toBe(1);
    expect(mockControllerB.mock.calls.length).toBe(0);
    expect(batchController.mock.calls.length).toBe(1);
  });

  test("run root wildcard route matcher", () => {
    const rootWildcardController = jest.fn(() => "rootBatch");
    const rootController = jest.fn(() => "root");
    const mockControllerA = jest.fn(() => "mockA");
    const mockControllerB = jest.fn(() => "mockB");
    const batchController = jest.fn(() => "batchController");
    const mockMap: IControllersList = {
      "/*": rootWildcardController,
      "/": rootController,
      "/sds/*": batchController,
      "/sds/mock-a": mockControllerA,
      "/sds/mock-b": mockControllerB,
    };
    const mockPath = "/sds/mock-a";
    runControllerByPath(mockPath, mockMap);

    expect(rootWildcardController.mock.calls.length).toBe(1);
    expect(rootController.mock.calls.length).toBe(0);
    expect(mockControllerA.mock.calls.length).toBe(1);
    expect(mockControllerB.mock.calls.length).toBe(0);
    expect(batchController.mock.calls.length).toBe(1);
  });

  test("run root wildcard route matcher (in root path)", () => {
    const rootWildcardController = jest.fn(() => "rootBatch");
    const rootController = jest.fn(() => "root");
    const mockControllerA = jest.fn(() => "mockA");
    const mockControllerB = jest.fn(() => "mockB");
    const batchController = jest.fn(() => "batchController");
    const mockMap: IControllersList = {
      "/*": rootWildcardController,
      "/": rootController,
      "/sds/*": batchController,
      "/sds/mock-a": mockControllerA,
      "/sds/mock-b": mockControllerB,
    };
    const mockPath = "/";
    runControllerByPath(mockPath, mockMap);

    expect(rootWildcardController.mock.calls.length).toBe(1);
    expect(rootController.mock.calls.length).toBe(1);
    expect(mockControllerA.mock.calls.length).toBe(0);
    expect(mockControllerB.mock.calls.length).toBe(0);
    expect(batchController.mock.calls.length).toBe(0);
  });
});
