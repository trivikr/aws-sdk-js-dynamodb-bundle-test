import * as cdk from "@aws-cdk/core";
import { AwsSdkDynamodbBundleTest } from "./aws-sdk-dynamodb-bundle-test-stack";

const app = new cdk.App();
new AwsSdkDynamodbBundleTest(app, "AwsSdkDynamodbBundleTest");
