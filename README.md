# Simple "cdk-watch" demonstration project

Learn more about [cdk-watch](https://github.com/teamplanes/cdk-watch). This is a sample CDK project that implements it
for demo purposes.

### Getting started

1. Navigate to the /cdk folder
2. `npm install`
3. `cdk deploy` (a "normal" first time deployment is required, otherwise "cdk-watch" doesn't work)
4. For any subsequent deployments you can use: `npx cdkw "**"` which is a wrapper around `cdk deploy --all`.
5. Visit the API Gateway URL from the output, using the path `/prod/test`.
6. Try modifying test.lambda.ts and refresh `/prod/test` in a second. You should see your modification in the browser
   immediately.
