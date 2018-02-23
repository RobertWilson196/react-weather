export const isEmptyObject = (obj) => Object.keys(obj).length === 0;

export const convertTimestamp = (seconds) => {
    const d = new Date(seconds*1000); // s -> ms
    //format : mm/dd/YYYY HH:MM
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const hours = d.getHours();
    const minutes = d.getMinutes();

    return `${hours}:${minutes} ${month}/${day}/${year}`
}