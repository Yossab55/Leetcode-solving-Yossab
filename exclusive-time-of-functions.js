//In the name of Cross
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  const result = new Array(n).fill(0);
  let counter = 0;
  return goRecursive(0);

  function goRecursive(timeConsumed) {
    if (logs.length == 0) return result;
    if (counter == logs.length) return result;
    const [id, status, time] = logs[counter].split(":");
    counter++;
    if (status == "start") {
      // go recursive and wait until the reaches end status
      const [endTime, lastTimeConsumed] = goRecursive(0);
      result[id] += endTime - time + 1 - lastTimeConsumed;
      timeConsumed += endTime - time + 1;
      debugger;
      return goRecursive(timeConsumed);
    }

    return [time, timeConsumed];
  }
};

console.log(exclusiveTime(2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"]));

console.log(
  exclusiveTime(1, [
    "0:start:0",
    "0:start:2",
    "0:end:5",
    "0:start:6",
    "0:end:6",
    "0:end:7",
  ]),
);
console.log(
  exclusiveTime(2, [
    "0:start:0",
    "0:start:2",
    "0:end:5",
    "1:start:6", // The problem that this came ofter the globalTimeConsume
    "1:end:6",
    "0:end:7",
  ]),
);

console.log(
  exclusiveTime(8, [
    "0:start:0",
    "1:start:5",
    "2:start:6",
    "3:start:9",
    "4:start:11",
    "5:start:12",
    "6:start:14",
    "7:start:15",
    "1:start:24",
    "1:end:29",
    "7:end:34",
    "6:end:37",
    "5:end:39",
    "4:end:40",
    "3:end:45",
    "0:start:49",
    "0:end:54",
    "5:start:55",
    "5:end:59",
    "4:start:63",
    "4:end:66",
    "2:start:69",
    "2:end:70",
    "2:start:74",
    "6:start:78",
    "0:start:79",
    "0:end:80",
    "6:end:85",
    "1:start:89",
    "1:end:93",
    "2:end:96",
    "2:end:100",
    "1:end:102",
    "2:start:105",
    "2:end:109",
    "0:end:114",
  ]),
);
