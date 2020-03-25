import * as cdk from "@aws-cdk/core";
import * as dynamodb from "@aws-cdk/aws-dynamodb";
import * as apigw from "@aws-cdk/aws-apigateway";
import { ApiConstruct } from "./api-construct";

export class BundleTestStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const table = new dynamodb.Table(this, "Notes", {
      partitionKey: { name: "noteId", type: dynamodb.AttributeType.STRING }
    });

    const listNotes = new ApiConstruct(this, "listNotes", {
      name: "listNotes",
      table
    });

    new apigw.LambdaRestApi(this, "BundleTestStackEndpoint", {
      handler: listNotes.handler
    });
  }
}
