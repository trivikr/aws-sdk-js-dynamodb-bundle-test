import { handler } from "./hello";
// @ts-ignore: types not present for aws-event-mocks
import createEvent from "aws-event-mocks";

describe("hello lambda:", () => {
  const mockEvent = createEvent({ template: "aws:apiGateway" });

  it("returns statusCode 200", async () => {
    const response = await handler(mockEvent);
    expect(response.statusCode).toBe(200);
  });

  it("returns Content-Type 'text/plain' in headers", async () => {
    const response = await handler(mockEvent);
    expect(response.headers["Content-Type"]).toBe("text/plain");
  });

  it("returns event.path in the body", async () => {
    mockEvent.path = `/${Math.random()
      .toString(36)
      .substring(2)}`;
    const response = await handler(mockEvent);
    expect(response.body).toBe(`Hello, CDK! You've hit ${mockEvent.path}\n`);
  });
});
