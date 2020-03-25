import * as cdk from "@aws-cdk/core";
import { TestStack } from "./test-stack";

const app = new cdk.App();
new TestStack(app, "TestStack");
