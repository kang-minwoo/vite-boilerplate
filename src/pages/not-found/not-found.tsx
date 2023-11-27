import { useNavigate } from 'react-router-dom'
import { buttonStyle, wrapperStyle } from './not-found.css'

const NotFound = () => {
  const navigate = useNavigate()
  const hasHistory = window.history.state?.idx > 0
  console.log(window.history.state?.idx)

  const handleClickGoBack = () => {
    navigate(-1)
  }

  return (
    <div className={wrapperStyle}>
      <p>페이지를 찾을 수 없습니다.</p>
      {hasHistory && (
        <button className={buttonStyle} onClick={handleClickGoBack}>
          돌아가기
        </button>
      )}
    </div>
  )
}

export default NotFound
