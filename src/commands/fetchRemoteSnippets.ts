type ContentObject = {
  id: string,
  content: string,
  createdAt: Date,
  expiresAt: Date,
};

type ApiReturn = Array<ContentObject>;

const fakeApiReturn : ApiReturn = [
  {
    id: '318ef61d-3d1b-44ce-927a-1fea69604710',
    content: `Leif Update 01/05/2020:
    - Investigated logging of email content and open/click tracking (results can be found in this document: https://hubscout.atlassian.net/wiki/spaces/TEC/pages/338493441/Email+Tracking+and+Association+in+Hubspot
    - Reached out to Hubspot Customer support for potential solutions for tracking
    - Came up with a way to gradually move our Hubspot SDK over to v3 (https://github.com/tonystarktech/scout-api/pull/2214)`,
    createdAt: new Date(Date.parse('2020-05-06T00:54:29.911Z')),
    expiresAt: new Date(Date.parse('2020-05-13T00:54:29.911Z')),
  }
];

const execute = (apiKey: string) => {
  console.log('apiKey', apiKey);

  new Promise<ApiReturn>((resolve, reject) => {
    setTimeout(() => {
        resolve(fakeApiReturn);
    }, 1000);

    reject();
  });
};

export {
  execute,
};
