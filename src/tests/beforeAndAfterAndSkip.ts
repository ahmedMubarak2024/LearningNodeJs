describe('A spec', function () {
  let foo: number = 0;
  beforeEach(function () {
    foo = 1;
    console.log('beforeEach');
  });
  beforeAll(function () {
    foo = 1;
    console.log('beforeAll');
  });
  afterEach(function () {
    foo = 1;
    console.log('AfterEach');
  });
  afterAll(function () {
    foo = 1;
    console.log('AfterAll');
  });

  it('is just a function, so it can contain any code', function () {
    expect(foo).toEqual(1);
  });

  describe('nested inside a second describe', function () {
    var bar = 1;
    //f foucs or x don't run
    it('can reference both scopes as needed', function () {
      expect(foo).toEqual(bar);
    });
  });
});

fdescribe('A spec', function () {
  let foo = 1;
  it('is just a function, so it can contain any code', () => {
    expect(foo).toEqual(1);
  });
});

describe('A spec', function () {
  let foo = 1;
  it('is just a function, so it can contain any code', () => {
    expect(foo).toEqual(1);
  });
});
