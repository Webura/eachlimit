import eachLimit from ".";

async function waitAndPrint(ms: number, text: any) {
  return new Promise(resolve => {
    setTimeout(function () {
      console.log(text);
      resolve(undefined);
    }, ms);
  });
}

async function test() {
  let result = await eachLimit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, async item => {
    await waitAndPrint(1000, item)
    return 'Item:' + item;
  });
  console.log(result);
}
test();