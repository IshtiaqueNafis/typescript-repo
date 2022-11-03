import {Reminder} from "../models/reminder";


import axios from 'axios'
class ReminderService{
    http = axios.create({
        baseURL:'https://jsonplaceholder.typicode.com'
    })

    getReminders = async () => {
        const response = await this.http.get<Reminder[]>('/todos')
        return response.data;
    };

    addReminder = async (title: string) => {
       const response= await this.http.post<Reminder>('/todos', {title})
        return response.data;
    };

    removeReminder = async (id: number) => {
      const response=  await this.http.delete('/todos/' + id);
        return response.data;
    };
}

export default new ReminderService();