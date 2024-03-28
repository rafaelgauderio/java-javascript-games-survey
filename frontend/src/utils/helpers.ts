import moment from 'moment';


export function formatDate(date: string) {
    const newDate = moment(date).format("DD/MM/YYYY HH:MM");
    return newDate;
}
// formato universal aceito para formatar datas