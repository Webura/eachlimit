function eachLimit<T, K>(array: Array<T>, limit: number, run: (item: T, i: number) => Promise<K>, delay = 0): Promise<K[]> {
  array = array.concat([]);
  const length = array.length;
  const results: K[] = new Array(length);
  return new Promise(resolveAll => {
    let runningJobs = 0;
    let nextItem = 0;
    function next() {
      if (nextItem < length && runningJobs < limit) {
        runningJobs++;
        const currentIndex = nextItem;
        run(array[nextItem], nextItem).then(result => {
          results[currentIndex] = result;
          runningJobs--;
          if (nextItem == length && runningJobs == 0)
            resolveAll(results);
          else
            next();
        });
        nextItem++;
      }
    }
    if (length == 0) {
      resolveAll(results);
    } else {
      for (let i = 0; i < limit && i < length; i++) {
        setTimeout(next, i * delay);
      }
    }
  });
}

export default eachLimit;