import "../styles/FormStyle.css"
export default function GeneralInfo({general, setGeneral}) {
  return (
    <div>
      <div>
        <p className="font-bold text-2xl mb-2">General Information:</p>
      </div>
      <div className="row-block">
        <div>
          <div>
            <label>First Name</label>
          </div>
          <div>
            <input
              id="firstName"
              type="text"
              value={general.firstName}
              onChange={(event) => setGeneral({ ...general, firstName: event.target.value })}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Last Name</label>
          </div>
          <div>
            <input
              id="lastName"
              type="text"
              value={general.lastName}
              onChange={(event) => setGeneral({ ...general, lastName: event.target.value })}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Email</label>
          </div>
          <div>
            <input
              id="email"
              type="email"
              value={general.email}
              onChange={(event) => setGeneral({ ...general, email: event.target.value })}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Phone number</label>
          </div>
          <div>
            <input
              id="phone"
              type="tel"
              pattern="^\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})$"
              value={general.phone}
              onChange={(event) => setGeneral({ ...general, phone: event.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  )
}