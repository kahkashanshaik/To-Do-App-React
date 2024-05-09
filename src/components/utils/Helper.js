export function formatDate(date)
{
    const sepcificDate = new Date(date);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[sepcificDate.getMonth()]}  ${sepcificDate.getDate()}, ${sepcificDate.getFullYear()}`;
}