import supertest from 'supertest';

import app from '../../server/runLocalServer';

const request = supertest(app);

describe('Test EndPoid', () => {
  it('test Endpoint is Working ', async (done) => {
    expect((await request.get('/')).status).toBe(200);
    done();
  });
});
