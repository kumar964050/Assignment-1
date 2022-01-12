import './index.css'

const HistoryItem = props => {
  const {histotyList, deleteHistoryOn} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = histotyList

  const deleteHistory = () => {
    deleteHistoryOn(id)
  }

  return (
    <li className="history-container">
      <div className="time-container">
        <p className="time-el">{timeAccessed}</p>
      </div>
      <div className="img-title-url-container">
        <div className="img-container">
          <img className="img-icon" src={logoUrl} alt="domain logo" />
        </div>
        <div className="name-url-container">
          <p className="name-el">{title}</p>
          <p className="url-el">{domainUrl}</p>
        </div>
        <div className="button-container">
          <button
            testid="delete"
            className="button-el"
            type="button"
            onClick={deleteHistory}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
