import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda'; // 正しいインポート方法
import { Construct } from 'constructs';

export class CdkLambdaTestStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_18_X, // NODEJS_22_X は現在(2024/06/20)利用できないため修正
      code: lambda.Code.fromAsset('src/'),  // asset メソッドの変更
      handler: 'lambda/hello.handler' // src 配下の lambda ディレクトリの中に hello.ts がある想定に修正
    });
  }
}