export default function convertToSeconds (time:string) {
    if (/[0-9][0-9]:[0-9][0-9]/.test(time)) throw new Error(`Invalid time format: ${time}`)

    const [hours, minutes] = time.split(':')
    const inSeconds = (parseInt(hours) * 3600) + (parseInt(minutes) * 60)

    return inSeconds
}