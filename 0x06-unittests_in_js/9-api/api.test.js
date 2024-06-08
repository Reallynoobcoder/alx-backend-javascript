const { expect, assert } = require('chai');
const request = require('request');

describe('Index page', () => {
  it('check response body', (done) => {
    request.get('http://localhost:7865/', (error, res, body) => {
      expect(body).equal('Welcome to the payment system');
    });
    done();
  });
  it('check response status code invalid endpoint', (done) => {
    request.get('http://localhost:7865/DFG', (error, res, body) => {
      expect(res.statusCode).equal(404);
    });
    done();
  });
  it('check response status code', (done) => {
    request.get('http://localhost:7865/', (error, res, body) => {
      expect(res.statusCode).equal(200);
    });
    done();
  });
  it('check response Error', (done) => {
    request.get('http://localhost:7865/', (error, res, body) => {
      assert.isNull(error);
    });
    done();
  });
});

describe('cart page', () => {
  it('check status code and body', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(response.statusCode).equal(200);
      expect(body).equal('Payment methods for cart 123');
      done();
    });
  });
  it('should respond with 404 Not Found when id is not number', (done) => {
    request.get('http://localhost:7865/cart/abc', (error, response, body) => {
      expect(response.statusCode).equal(404);
      done();
    });
  });

  it('should respond with 404 not found when no id is provided', (done) => {
    request.get('http://localhost:7865/cart/', (error, response, body) => {
      expect(response.statusCode).equal(404);
      done();
    });
  });
});
