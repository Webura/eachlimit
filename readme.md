# eachLimit
Throttled parallell async calls.
Based on [caolan/async](https://caolan.github.io/async/v3/docs.html#eachLimit) but for TypeScript and with added features.

# Example
    import eachLimit from "./eachlimit";
    const list = [1,2,3,4,5,6,7,8,9,10];

    async processMyListFiveAtTime(){
      await eachLimit(list, 5, async item=>{
        await remoteAPICallorWhatever(item);
      });
    }

    processMyListFiveAtTime();

See `test.ts` for more examples

# Features
Typical use case for eachLimit is web-scraping or API-calls. 
or this there is a fourth argument `delay` specified in milliseconds, defaulted to `0`.
This will delay the initial calls to ease the digestion.


# Testing
`npm test`

# License
Copyright (c) 2021 Johnny Tsang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.