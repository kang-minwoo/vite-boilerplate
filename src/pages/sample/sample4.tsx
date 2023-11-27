import axios from 'axios'
import { useSuspenseQuery } from '@tanstack/react-query'

const axiosInstance = axios.create({ baseURL: 'http://localhost:5173' })
axiosInstance.interceptors.request.use((config) => {
  if (config.url === '/page4' && config.method === 'get') {
    config.adapter = (config) => {
      return new Promise((_, reject) => {
        setTimeout(() => {
          reject({
            data: 'called by api page4',
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

const Sample4 = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['page4'],
    queryFn: async () => await axiosInstance.get('/page4'),
  })
  return <div>[PAGE4] {data.data}</div>
}

export default Sample4
