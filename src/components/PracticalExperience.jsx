import "../styles/FormStyle.css"
export default function PracticalExperience({practical, setPractical}) {
  return (
    <div>
      <div>
        <p className="font-bold text-2xl mb-2">Your last practical experience:</p>
      </div>
      <div className="row-block">
        <div>
          <div>
            <label>Company Name</label>
          </div>
          <div>
            <input
              id="companyName"
              type="text"
              value={practical.companyName}
              onChange={(event) => setPractical({ ...practical, companyName: event.target.value })}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Position</label>
          </div>
          <div>
            <input
              id="position"
              type="text"
              value={practical.position}
              onChange={(event) => setPractical({ ...practical, position: event.target.value })}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Years Of Employment</label>
          </div>
          <div>
            <input
              id="yearsOfEmployment"
              type="number"
              value={practical.yearsOfEmployment}
              onChange={(event) => setPractical({ ...practical, yearsOfEmployment: event.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  )
}