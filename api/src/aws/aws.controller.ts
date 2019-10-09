import S3, { PutObjectRequest } from 'aws-sdk/clients/s3';
import { ManagedUpload } from 'aws-sdk/lib/s3/managed_upload';
import SendData = ManagedUpload.SendData;
import ReadableStream = NodeJS.ReadableStream;

export default class S3Controller {
  private readonly folder = 'uploads/';
  private readonly bucket = process.env.AWS_BUCKET;
  private static instance: S3Controller;
  private s3: S3;

  private constructor() {
    this.s3 = new S3(
      {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
      },
    );
  }

  static getInstance(): S3Controller {
    if (!S3Controller.instance) {
      S3Controller.instance = new S3Controller();
    }
    return S3Controller.instance;
  }

  public async uploadFile(file: ReadableStream, filename: string): Promise<SendData> {
    const params: PutObjectRequest = {
      Bucket: this.bucket,
      Key: this.folder + filename,
      Body: file,
      ACL: 'public-read',
    };

    return this.s3.upload(params).promise();
  }
}
