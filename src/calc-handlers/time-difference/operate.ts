import time from "@lib/time"

export default function operate (values:TimeDifference.Values, params:TimeDifference.Params) {
    const cases = {
        'time': () => {
            const valueA = time.convertToSeconds(values.inputA.time)
            const valueB = time.convertToSeconds(values.inputB.time)

            const resultInSeconds = valueB - valueA

            return time.convertToTime(resultInSeconds)
        },
        'date': () => {
            console.log('lorem ipsum')
        }
    } as {[key in TimeDifference.InputType]: () => string}

    return cases[params.diffBetween]()
}