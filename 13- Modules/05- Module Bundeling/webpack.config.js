import path from 'path';

// This file is created to perform the Fifth task of the 13th module

export default {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(process.cwd() ,'dist'),
    },
    mode: 'development',
};

console.log(path.resolve(process.cwd() ,'dist'))