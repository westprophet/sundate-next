//Делим массив на части с остатком

export default function sliceIntoChunks<T>(arr: T[], chunkSize: number): T[][] {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(sliceIntoChunks(arr, 3));
