// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {activeStatus} = props

  const initialView = () => (
    <div className="initial-view-container">
      <p className="initial-view-title">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const yetToRegisterView = () => (
    <div className="register-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="image1"
      />
      <p className="yet-to-register-des">
        A live Performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  const registeredView = () => (
    <div className="registered-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="registered-title">
        You have already registered for the event
      </h1>
    </div>
  )

  const registrationsClosedView = () => (
    <div className="closed-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-img"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon.</p>
    </div>
  )

  switch (activeStatus) {
    case 'INITIAL':
      return initialView()

    case 'YET_TO_REGISTER':
      return yetToRegisterView()

    case 'REGISTERED':
      return registeredView()

    case 'REGISTRATIONS_CLOSED':
      return registrationsClosedView()

    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
