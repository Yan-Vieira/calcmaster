export default function convertToSeconds (time:string) {
    if (/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/.test(time) === false) {
        console.warn(`Invalid time format: ${time}`)

        return 0
    }

    const [hours, minutes] = time.split(':')
    const inSeconds = (parseInt(hours) * 3600) + (parseInt(minutes) * 60)

    return inSeconds
}