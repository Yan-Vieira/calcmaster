export default function convertToTime (seconds:number) {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}