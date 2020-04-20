export default {
  s3: {
    REGION: "eu-west-2",
    BUCKET: "vadim-notes-app-uploads"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://npb4hm361a.execute-api.eu-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_rFdRjix0R",
    APP_CLIENT_ID: "2g70qq4ro8dq91ee9u5q6qtgvv",
    IDENTITY_POOL_ID: "eu-west-2:e2b2dc3b-61ec-49cb-a6a9-df46b6d75e95"
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};
