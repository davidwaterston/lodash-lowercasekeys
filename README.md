# Lodash lowerCaseKeys

[![Build Status](https://travis-ci.org/davidwaterston/lodash-lowercasekeys.svg)](https://travis-ci.org/davidwaterston/lodash-lowercasekeys)
[![Known Vulnerabilities](https://snyk.io/test/github/davidwaterston/lodash-lowercasekeys/badge.svg?targetFile=package.json)](https://snyk.io/test/github/davidwaterston/lodash-lowercasekeys?targetFile=package.json)
[![NPM version](http://img.shields.io/npm/v/lodash-lowercasekeys.svg)](https://www.npmjs.com/package/lodash-lowercasekeys/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Extend [Lodash](https://lodash.com/) to take a value and recursively convert all keys to lowercase.
This is intended for cleaning up data (usually from a third party) which has inconsistent or unpleasant key naming.
Renaming of keys is done recursively (i.e. a 'deep' copy is made) and the input value is left unchanged.

### \_.lowerCaseKeys(value)

**Arguments**  
value: The array or object value to have it's keys converted. Required.  
If a simple value (string, number, etc) is provided it will be returned unchanged.

**Returns**  
(object): An array or object with the keys converted to lowercase.

### Example

```
var _ = require('lodash')
require('lodash-lowerCaseKeys')

_.lowerCaseKeys(
    [
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
    ]
)


Returns:


[
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
]
```

### Version History

| Version | Release Date    | Details          |
| :------ | :-------------- | :--------------- |
| 1.0.0   | 4th March, 2018 | Initial release. |
