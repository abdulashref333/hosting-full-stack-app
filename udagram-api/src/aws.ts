import AWS = require("aws-sdk");
import { config } from "./config/config";

// Configure AWS
// const credentials = new AWS.SharedIniFileCredentials({ profile: "default" });
// AWS.config.credentials = credentials;
AWS.config = new AWS.Config({
  accessKeyId: "AKIA3ZAEOW36KT2MMKGK",
  secretAccessKey: "noI8WVYbmubSH3a9cJkqJ+IZ1GzJc4tYL/6ffjI",
  region: "us-east-1",
  signatureVersion: "v4",
});
export const s3 = new AWS.S3({
  signatureVersion: "v4",
  region: config.aws_region,
  params: { Bucket: config.aws_media_bucket },
});

// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl("getObject", {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}

// Generates an AWS signed URL for uploading objects
export function getPutSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl("putObject", {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}
