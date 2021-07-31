import eachLimit from "./index";

eachLimit.setOptions({ delay: 1000 });

async function waitAndPrint(ms: number, text: any) {
  return new Promise(resolve => {
    setTimeout(function () {
      console.log(text);
      resolve(undefined);
    }, ms);
  });
}

async function test() {
  let result = await eachLimit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, async item => {
    await waitAndPrint(3000, item)
    return 'Item:' + item;
  });
  console.log(result);
}
test();