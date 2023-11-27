import axios from 'axios'
import { useSuspenseQuery } from '@tanstack/react-query'

const axiosInstance = axios.create({ baseURL: 'http://localhost:5173' })
axiosInstance.interceptors.request.use((config) => {
  if (config.url === '/page1' && config.method === 'get') {
    config.adapter = (config) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: 'called by api page1',
            status: 200,
            statusText: 'OK',
            headers: {},
            config: config,
          })
        }, 2000)
      })
    }
  }
  return config
})

const Sample1 = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['page1'],
    queryFn: async () => await axiosInstance.get('/page1'),
  })
  return <div>[PAGE1] {data.data}</div>
}

export default Sample1
