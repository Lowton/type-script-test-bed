import { NumberWithLogs } from "./number-with-logs.type"

const square = (x: number): NumberWithLogs => ({
    result: x * x,
    logs: [`Squared ${x} to get ${x * x}.`]
});

const addOne = (x: NumberWithLogs): NumberWithLogs => ({
    result: x.result + 1,
    logs: x.logs.concat([
        `Added 1 to ${x.result} to get ${x.result + 1}.`
    ])
});

console.log('addOne(square(2))', addOne(square(2)));


const wrapWithNumbers = (x: number): NumberWithLogs => ({
    result: x,
    logs: []
});

console.log('addOne(wrapWithNumbers(5))', addOne(wrapWithNumbers(5)));

const squareWithLogs = (x: NumberWithLogs): NumberWithLogs => ({
    result: x.result * x.result,
    logs: x.logs.concat([
        `Squared ${x.result} to get ${x.result * x.result}.`
    ])
});

console.log('squareWithLogs(squareWithLogs(wrapWithNumbers(2)))', squareWithLogs(squareWithLogs(wrapWithNumbers(2))));