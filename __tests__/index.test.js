const {test1, test2, test3, test4, test5, test6, test7} = require('../lib');

describe('Destructuring', () => {
  describe('Objects', () => {
    const tests = [
      {
        assertion: 'should retrieve the value of key b: test 1',
        assertionFn: 'toBe',
        expected: 'the value of key b',
        fn: test1,
        input: {a: 'the value of key a', b: 'the value of key b'},
      },
      {
        assertion: 'should retrieve the username: test 2',
        assertionFn: 'toBe',
        expected: 'nina@hotmail.com',
        fn: test2,
        input: {
          userDetails: {
            id: '7947babee5f624bd0c64c8c7de4a81dd09a94be8',
            username: 'nina@hotmail.com',
          },
        },
      },
      {
        assertion: 'should rename username to email: test 3',
        assertionFn: 'toBe',
        expected: 'nina@hotmail.com',
        fn: test3,
        input: {
          userDetails: {
            id: '7947babee5f624bd0c64c8c7de4a81dd09a94be8',
            username: 'nina@hotmail.com',
          },
        },
      },
      {
        assertion: 'should retrieve engagement status: test 4',
        assertionFn: 'toBe',
        expected: 'true',
        fn: test4,
        input: {
          userDetails: {
            id: '7947babee5f624bd0c64c8c7de4a81dd09a94be8',
            username: 'nina@hotmail.com',
          },
          relationshipDetails: {
            single: false,
            married: false,
            engaged: true,
          },
        },
      },
      {
        assertion: 'should retrieve wedding plans: test 5',
        assertionFn: 'toEqual',
        expected: {
          ceremonyArea: 'Savanna',
          endTime: new Date('2020-03-01T06:00:00.000Z'),
          photographerDetails: {
            name: 'Studio 3 Images',
          },
          receptionArea: "Ruby's house",
          startTime: new Date('2020-03-01T00:30:00.000Z'),
          venue: 'Phoenix Zoo',
        },
        fn: test5,
        input: {
          userDetails: {
            id: '7947babee5f624bd0c64c8c7de4a81dd09a94be8',
            username: 'nina@hotmail.com',
          },
          relationshipDetails: {
            single: false,
            married: false,
            engaged: true,
            weddingPlans: {
              ceremonyArea: 'Savanna',
              endTime: new Date('2020-03-01T06:00:00.000Z'),
              photographerDetails: {
                name: 'Studio 3 Images',
              },
              receptionArea: "Ruby's house",
              startTime: new Date('2020-03-01T00:30:00.000Z'),
              venue: 'Phoenix Zoo',
            },
          },
        },
      },
      {
        assertion: 'should retrieve photographer details: test 6',
        assertionFn: 'toEqual',
        expected: {
          studio: 'Studio 3 Images',
        },
        fn: test6,
        input: {
          userDetails: {
            id: '7947babee5f624bd0c64c8c7de4a81dd09a94be8',
            username: 'nina@hotmail.com',
          },
          relationshipDetails: {
            single: false,
            married: false,
            engaged: true,
            weddingPlans: {
              ceremonyArea: 'Savanna',
              endTime: new Date('2020-03-01T06:00:00.000Z'),
              photographerDetails: {
                studio: 'Studio 3 Images',
              },
              receptionArea: "Ruby's house",
              startTime: new Date('2020-03-01T00:30:00.000Z'),
              venue: 'Phoenix Zoo',
            },
          },
        },
      },
      {
        assertion: 'should retrieve photographer studio: test 7',
        assertionFn: 'toBe',
        expected: 'Studio 3 Images',
        fn: test7,
        input: {
          userDetails: {
            id: '7947babee5f624bd0c64c8c7de4a81dd09a94be8',
            username: 'nina@hotmail.com',
          },
          relationshipDetails: {
            single: false,
            married: false,
            engaged: true,
            weddingPlans: {
              ceremonyArea: 'Savanna',
              endTime: new Date('2020-03-01T06:00:00.000Z'),
              photographerDetails: {
                studio: 'Studio 3 Images',
              },
              receptionArea: "Ruby's house",
              startTime: new Date('2020-03-01T00:30:00.000Z'),
              venue: 'Phoenix Zoo',
            },
          },
        },
      },
    ];

    // determines which number test to start at
    const testsToRunBegin = 0;
    // determines which number test to stop at, undefined to run all
    const testsToStopAt = undefined;

    tests
      .slice(testsToRunBegin, testsToStopAt)
      .forEach(({assertion, assertionFn, expected, fn, input}) => {
        it(`${assertion}`, () => {
          expect(fn(input))[assertionFn](expected);
        });
      });
  });

  xdescribe('Arrays', () => {
    it('should', () => {});
  });
});
