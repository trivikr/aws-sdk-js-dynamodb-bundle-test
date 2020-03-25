import { APIGatewayEvent } from "aws-lambda";

const handler = async function(event: APIGatewayEvent) {
  console.log("request:", JSON.stringify(event, undefined, 2));
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, CDK! You've hit ${event.path}\n`
  };
};

export { handler };
