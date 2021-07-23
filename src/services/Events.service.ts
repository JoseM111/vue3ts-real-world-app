/* Events.service.ts */
import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { IEventAPI } from "@/types/Event.type"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

const apiClient: AxiosInstance = axios.create({
	baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
})
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export default {
	//..........
	getAllEvents: function ():  Promise<AxiosResponse<IEventAPI>> {
		return apiClient.get('/events')
	},
	
	getEventById: function (id: string):  Promise<AxiosResponse<IEventAPI>> {
		return apiClient.get('/events/' + id)
	}
}
