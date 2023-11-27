import axios from 'axios'
import { useSuspenseQuery } from '@tanstack/react-query'

const axiosInstance = axios.create({ baseURL: 'http://localhost:5173' })
axiosInstance.interceptors.request.use((config) => {
  if (config.url === '/page3' && config.method === 'get') {
    config.adapter = (config) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: 'called by api page3',
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

const Sample3 = () => {
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ['page3'],
    queryFn: async () => await axiosInstance.get('/page3'),
  })

  return (
    <div>
      [PAGE3] {isLoading && 'loading...'} {data?.data}
    </div>
  )
}

export default Sample3
