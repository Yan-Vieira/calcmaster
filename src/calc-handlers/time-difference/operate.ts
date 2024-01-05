import time from "@lib/time"
import {differenceInDays, differenceInMonths, differenceInYears, differenceInWeeks} from 'date-fns'

/**
 * Returns the difference between two times in hh:mm format or the difference between two dates, regarding the params.diffBetween property
 * @param values The values to be used in the desired operation
 * @param params The parameters that define the desired operation
 * @returns A time string in hh:mm format of a date string in dd/mm/yyyy format, regarding the params.diffBetween property
 */
export default function operate (values:TimeDifference.Values, params:TimeDifference.Params) {
    const valueA = {
        time: time.convertToSeconds(values.inputA.time),
        date: new Date(`${values.inputA.date} 00:00:00`)
    }
    const valueB = {
        time: time.convertToSeconds(values.inputB.time),
        date: new Date(`${values.inputB.date} 00:00:00`)
    }

    const results = {
        time: valueB.time - valueA.time,
        dateTime: valueB.date.getTime() - valueA.date.getTime()
    }

    const cases = {
        'time': {
            'full': () => {
                const result = time.convertToTime(results.time)

                return /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/.test(result) ? result : 'Valor inválido'
            },
            'hour': () => {
                const result = Math.floor((results.time / 60) / 60)

                return result > 0 ? `${result} hora${result > 1 ? 's':''}` : '0 horas'
            },
            'minute': () => {
                const result = Math.floor(results.time / 60)
                return result > 0 ? `${result} minuto${result > 1 ? 's':''}` : '0 minutos'
            },
            'second': () => {
                const result = results.time

                return result > 0 ? `${result} segundo${result > 1 ? 's':''}` : '0 segundos'
            },
            'millisecond': () => {
                const result = Math.floor(results.time * 1000)
                
                return result > 0 ? `${result} milissegundo${result > 1 ? 's':''}` : '0 milissegundos'
            }
        },
        'date': {
            'year': () => {
                const diff = differenceInYears(valueB.date, valueA.date)

                return diff > 0 ? `${diff} ano${diff > 1 ? 's' : ''}` : 'Valor inválido'
            },
            'month': () => {
                const diff = differenceInMonths(valueB.date, valueA.date)

                return diff === 1 ? `${diff} mês` : diff <= 0 ? '' : `${diff} meses`
            },
            'week': () => {
                const diff = differenceInWeeks(valueB.date, valueA.date)

                return diff > 0 ? `${diff} semana${diff > 1 ? 's' : ''}` : 'Valor inválido'
            },
            'day': () => {
                //console.log('date difference >> difference in days debug',`passed values: ${valueA.date} , ${valueB.date}`)

                //console.log(`passed result.dateTime: ${results.dateTime}`)

                const diff = differenceInDays(valueB.date, valueA.date)

                //console.log(`diff: ${diff}`)

                return diff > 0 ? `${diff} dia${diff > 1 ? 's' : ''}` : 'Valor inválido'
            },
            'full': () => {

                const totalDays = results.dateTime / 1000 / 86400

                const years = totalDays >= 0 ? Math.floor(totalDays / 365) : 0
                
                const months = totalDays >= 0 ? Math.floor((totalDays - (years * 365)) / 31): 0
                
                const days = totalDays >= 0 ? Math.floor(totalDays - (years * 365) - (months * 31)) : 0

                const yearsString = years > 0 ? `${years} ano${years > 1 ? 's':''}${months !== 0 && days !== 0 ? ',' : months !== 0 || days !== 0 ? ' e' : ''} ` : ''
                
                const monthsString = months > 0 ? `${months} ${months > 1 ? 'meses' : 'mês'}${days !== 0 ? ' e':''} ` : ''

                const daysString = days > 0 ? `${days} dia${days > 1 ? 's' : ''}` : ''

                const resultString = `${yearsString}${monthsString}${daysString}`

                return resultString.length > 0 ? resultString : 'Valor inválido'
            }
        }
    } as {
        [key:string]: {
            [key:string]: () => string
        }
    }

    if (params.diffBetween === 'time') return cases.time[params.timeResultIn]()
    
    if (params.diffBetween === 'date') return cases.date[params.dateResultIn]()

    return 'error'
}