import { useEffect, useState } from 'react'

const Sample5 = () => {
  const [hasNetwork, setHasNetwork] = useState(true)
  useEffect(() => {
    window.addEventListener('load', () => {
      setHasNetwork(navigator.onLine)

      window.addEventListener('online', () => {
        setHasNetwork(true)
      })

      window.addEventListener('offline', () => {
        setHasNetwork(false)
      })
    })
  }, [])

  return <div>{hasNetwork ? 'network online' : 'offline'}</div>
}

export default Sample5
