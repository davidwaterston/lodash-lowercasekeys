var should = require('should');
var _ = require('lodash');
require('../src/lowerCaseKeys.js');

describe('_.lowerCaseKeys', function() {
    it('Returns an unchanged value when a string is input', function(done) {
        var val = 'This is a STRING';
        var response = _.lowerCaseKeys(val);

        val.should.eql('This is a STRING');
        response.should.eql('This is a STRING');
        done();
    });

    it('Returns an unchanged value when an empty string is input', function(done) {
        var val = '';
        var response = _.lowerCaseKeys(val);

        val.should.eql('');
        response.should.eql('');
        done();
    });

    it('Returns an unchanged value when a number is input', function(done) {
        var val = 12.57;
        var response = _.lowerCaseKeys(val);

        val.should.eql(12.57);
        response.should.eql(12.57);
        done();
    });

    it('Returns an unchanged value when an empty object is input', function(done) {
        var val = {};
        var response = _.lowerCaseKeys(val);

        val.should.eql({});
        response.should.eql({});
        done();
    });

    it('Returns an unchanged value when an empty array is input', function(done) {
        var val = [];
        var response = _.lowerCaseKeys(val);

        val.should.eql([]);
        response.should.eql([]);
        done();
    });

    it('Returns an unchanged value when an object with all lowercase keys is input', function(done) {
        var val = {
            key1: 'This is key 1',
            anotherkey: 'This is another key'
        };
        var response = _.lowerCaseKeys(val);

        val.should.eql({
            key1: 'This is key 1',
            anotherkey: 'This is another key'
        });
        response.should.eql({
            key1: 'This is key 1',
            anotherkey: 'This is another key'
        });
        done();
    });

    it('Returns an unchanged value when a simple array with all lowercase strings is input', function(done) {
        var val = ['value1', 'anothervalue'];
        var response = _.lowerCaseKeys(val);

        val.should.eql(['value1', 'anothervalue']);
        response.should.eql(['value1', 'anothervalue']);
        done();
    });

    it('Returns an unchanged value when an array of simple objects with all lowercase keys is input', function(done) {
        var val = [
            {
                key1: 'This is key 1 of element 1',
                anotherkey: 'This is another key of element 1'
            },
            {
                key1: 'This is key 1 of element 2',
                anotherkey: 'This is another key of element 2'
            }
        ];
        var response = _.lowerCaseKeys(val);

        val.should.eql([
            {
                key1: 'This is key 1 of element 1',
                anotherkey: 'This is another key of element 1'
            },
            {
                key1: 'This is key 1 of element 2',
                anotherkey: 'This is another key of element 2'
            }
        ]);
        response.should.eql([
            {
                key1: 'This is key 1 of element 1',
                anotherkey: 'This is another key of element 1'
            },
            {
                key1: 'This is key 1 of element 2',
                anotherkey: 'This is another key of element 2'
            }
        ]);
        done();
    });

    it('Returns an unchanged value when a simple array with all mixed case strings is input', function(done) {
        var val = ['Value1', 'ANOTHERVALUE'];
        var response = _.lowerCaseKeys(val);
        val.should.eql(['Value1', 'ANOTHERVALUE']);
        response.should.eql(['Value1', 'ANOTHERVALUE']);
        done();
    });

    it('Returns an updated value when a simple object with mixed case keys is input', function(done) {
        var val = {
            KEY1: 12,
            Age: 44,
            FULLNAME: 'John Smith'
        };
        var response = _.lowerCaseKeys(val);
        val.should.eql({
            KEY1: 12,
            Age: 44,
            FULLNAME: 'John Smith'
        });
        response.should.eql({
            key1: 12,
            age: 44,
            fullname: 'John Smith'
        });
        done();
    });

    it('Returns an updated value when mixed case keys are input (object within object)', function(done) {
        var val = {
            KEY1: 12,
            Age: 44,
            FULLNAME: 'John Smith',
            ADDRESS: {
                'Residence Name': 'The Cedars',
                LINE1: '123 3rd Street',
                City: 'New York'
            }
        };
        var response = _.lowerCaseKeys(val);
        val.should.eql({
            KEY1: 12,
            Age: 44,
            FULLNAME: 'John Smith',
            ADDRESS: {
                'Residence Name': 'The Cedars',
                LINE1: '123 3rd Street',
                City: 'New York'
            }
        });
        response.should.eql({
            key1: 12,
            age: 44,
            fullname: 'John Smith',
            address: {
                'residence name': 'The Cedars',
                line1: '123 3rd Street',
                city: 'New York'
            }
        });
        done();
    });

    it('Returns an updated value when mixed case keys are input (object within object within object)', function(done) {
        var val = {
            KEY1: 12,
            Age: 44,
            FULLNAME: 'John Smith',
            ADDRESS: {
                'Residence Name': 'The Cedars',
                LINE1: '123 3rd Street',
                City: 'New York',
                Country: {
                    NAME: 'United States of America',
                    abbrevIATION: 'USA'
                }
            }
        };
        var response = _.lowerCaseKeys(val);
        val.should.eql({
            KEY1: 12,
            Age: 44,
            FULLNAME: 'John Smith',
            ADDRESS: {
                'Residence Name': 'The Cedars',
                LINE1: '123 3rd Street',
                City: 'New York',
                Country: {
                    NAME: 'United States of America',
                    abbrevIATION: 'USA'
                }
            }
        });
        response.should.eql({
            key1: 12,
            age: 44,
            fullname: 'John Smith',
            address: {
                'residence name': 'The Cedars',
                line1: '123 3rd Street',
                city: 'New York',
                country: {
                    name: 'United States of America',
                    abbreviation: 'USA'
                }
            }
        });
        done();
    });

    it('Returns an updated value when an array of objects with mixed case keys is input (array of object within object within array)', function(done) {
        var val = [
            {
                KEY1: 12,
                Age: 44,
                FULLNAME: 'John Smith'
            },
            {
                KEY1: 13,
                AGE: 29,
                FULLNAME: 'Steven Thomson'
            },
            {
                Key1: 14,
                Age: 57,
                FullName: 'David Anderson',
                HISTORY: [
                    {
                        score: 12,
                        timeinSECONDS: 56
                    },
                    {
                        Score: 14,
                        TIMEINSECONDS: 44
                    },
                    {
                        SCORE: 17,
                        timeinSECONDS: 80
                    }
                ]
            }
        ];
        var response = _.lowerCaseKeys(val);
        val.should.eql([
            {
                KEY1: 12,
                Age: 44,
                FULLNAME: 'John Smith'
            },
            {
                KEY1: 13,
                AGE: 29,
                FULLNAME: 'Steven Thomson'
            },
            {
                Key1: 14,
                Age: 57,
                FullName: 'David Anderson',
                HISTORY: [
                    {
                        score: 12,
                        timeinSECONDS: 56
                    },
                    {
                        Score: 14,
                        TIMEINSECONDS: 44
                    },
                    {
                        SCORE: 17,
                        timeinSECONDS: 80
                    }
                ]
            }
        ]);
        response.should.eql([
            {
                key1: 12,
                age: 44,
                fullname: 'John Smith'
            },
            {
                key1: 13,
                age: 29,
                fullname: 'Steven Thomson'
            },
            {
                key1: 14,
                age: 57,
                fullname: 'David Anderson',
                history: [
                    {
                        score: 12,
                        timeinseconds: 56
                    },
                    {
                        score: 14,
                        timeinseconds: 44
                    },
                    {
                        score: 17,
                        timeinseconds: 80
                    }
                ]
            }
        ]);
        done();
    });

    it('Returns an updated value with all keys at multiple levels converted to lowercase', function(done) {
        var val = [
            ['UNCHANGED 1', 'UNCHANGED2', 'THIS WILL BE NOT BE CHANGED'],
            {
                KEY1: 12,
                Age: 44,
                FULLNAME: 'John Smith',
                IsCompetent: false
            },
            {
                KEY1: 13,
                AGE: 29,
                FULLNAME: 'Steven Thomson',
                IsCompetent: true
            },
            {
                Key1: 14,
                Age: 57,
                FullName: 'David Anderson',
                ISCOMPETENT: null,
                HISTORY: [
                    {
                        score: 12,
                        timeinSECONDS: 56
                    },
                    {
                        Score: 14,
                        TIMEINSECONDS: 44
                    },
                    {
                        SCORE: 17,
                        timeinSECONDS: 80,
                        NOTES: {
                            X: 'This is note 1',
                            y: 'This is note 2',
                            caveatS: {}
                        }
                    }
                ]
            }
        ];
        var response = _.lowerCaseKeys(val);
        val.should.eql([
            ['UNCHANGED 1', 'UNCHANGED2', 'THIS WILL BE NOT BE CHANGED'],
            {
                KEY1: 12,
                Age: 44,
                FULLNAME: 'John Smith',
                IsCompetent: false
            },
            {
                KEY1: 13,
                AGE: 29,
                FULLNAME: 'Steven Thomson',
                IsCompetent: true
            },
            {
                Key1: 14,
                Age: 57,
                FullName: 'David Anderson',
                ISCOMPETENT: null,
                HISTORY: [
                    {
                        score: 12,
                        timeinSECONDS: 56
                    },
                    {
                        Score: 14,
                        TIMEINSECONDS: 44
                    },
                    {
                        SCORE: 17,
                        timeinSECONDS: 80,
                        NOTES: {
                            X: 'This is note 1',
                            y: 'This is note 2',
                            caveatS: {}
                        }
                    }
                ]
            }
        ]);
        response.should.eql([
            ['UNCHANGED 1', 'UNCHANGED2', 'THIS WILL BE NOT BE CHANGED'],
            {
                key1: 12,
                age: 44,
                fullname: 'John Smith',
                iscompetent: false
            },
            {
                key1: 13,
                age: 29,
                fullname: 'Steven Thomson',
                iscompetent: true
            },
            {
                key1: 14,
                age: 57,
                fullname: 'David Anderson',
                iscompetent: null,
                history: [
                    {
                        score: 12,
                        timeinseconds: 56
                    },
                    {
                        score: 14,
                        timeinseconds: 44
                    },
                    {
                        score: 17,
                        timeinseconds: 80,
                        notes: {
                            x: 'This is note 1',
                            y: 'This is note 2',
                            caveats: {}
                        }
                    }
                ]
            }
        ]);
        done();
    });
});
