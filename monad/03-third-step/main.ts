import { NumberWithLogs } from "./number-with-logs.type";

const wrapWithNumbers = (x: number): NumberWithLogs => ({
    result: x,
    logs: []
});

const square = (x: number): NumberWithLogs => ({
        result: x * x ,
        logs: [ `Squared ${x} to get ${x * x}.` ]
    });


const addOne = (x: number): NumberWithLogs => ({
    result: x + 1,
    logs: [ `Added 1 to ${x} to get ${x + 1}.` ]
});

const runWithLogs = (input: NumberWithLogs, transform: (_: number) => NumberWithLogs): NumberWithLogs => {
    const newNumberWithLogs = transform(input.result);

    return {
        result: newNumberWithLogs.result,
        logs: input.logs.concat(newNumberWithLogs.logs)
    }
}

console.log('runWithLogs(wrapWithNumbers(5), addOne)', runWithLogs(wrapWithNumbers(5), addOne));
console.log('runWithLogs(wrapWithNumbers(5), square)', runWithLogs(wrapWithNumbers(5), square));

const a = wrapWithNumbers(10);
const b = runWithLogs(a, addOne);
const c = runWithLogs(b, square);
console.log(c);

const double = (x: number): NumberWithLogs => ({
    result: x * 2,
    logs: [`Doubled ${x} to get ${2 * x}.`]
});

const d = runWithLogs(c, double);

console.log(d);
