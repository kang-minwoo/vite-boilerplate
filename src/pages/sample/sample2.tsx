import axios from 'axios'
import { useSuspenseQuery } from '@tanstack/react-query'

const axiosInstance = axios.create({ baseURL: 'http://localhost:5173' })
axiosInstance.interceptors.request.use((config) => {
  if (config.url === '/page2' && config.method === 'get') {
    config.adapter = (config) => {
      return new Promise((_, reject) => {
        setTimeout(() => {
          reject({
            data: 'called by api page2',
            status: 400,
            statusText: 'ERROR',
            headers: {},
            config: config,
          })
        }, 2000)
      })
    }
  }
  return config
})

const Sample2 = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['page2'],
    queryFn: async () => await axios.get('/page2'),
  })
  return <div>[PAGE2] {data.data}</div>
}

export default Sample2
