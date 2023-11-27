import { loadingStyle, loadingTextStyle } from './loading.css'

type LoadingProps = {
  message?: string
}

const Loading = ({ message = 'Loading...' }: LoadingProps) => {
  return (
    <div className={loadingStyle}>
      <span className={loadingTextStyle}>{message}</span>
    </div>
  )
}

export default Loading
