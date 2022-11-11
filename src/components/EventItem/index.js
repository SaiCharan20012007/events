// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, getActiveId} = props
  const {imageUrl, name, location, registrationStatus} = eventDetails

  const passId = () => {
    console.log(registrationStatus)
    getActiveId(registrationStatus)
  }
  return (
    <>
      <li className="event-item-container">
        <button type="button" onClick={passId} className="btn">
          <img src={imageUrl} alt="event" className="event-image" />
        </button>
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </li>
    </>
  )
}

export default EventItem
