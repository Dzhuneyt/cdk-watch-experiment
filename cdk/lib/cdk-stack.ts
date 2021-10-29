import * as cdk from '@aws-cdk/core';
import {LambdaIntegration, RestApi} from "@aws-cdk/aws-apigateway";
import {WatchableNodejsFunction} from "cdk-watch";
import * as path from "path";

export class CdkStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const api = new RestApi(this, 'API');

        const handler = new WatchableNodejsFunction(this, 'fn-test', {
            entry: path.resolve(__dirname, 'test.lambda.ts'),
        });
        api.root.addResource('test').addMethod('GET', new LambdaIntegration(handler));
    }
}
