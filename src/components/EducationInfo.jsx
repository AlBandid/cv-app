import "../styles/FormStyle.css"
export default function EducationInfo({education, setEducation}) {
  return (
    <div>
      <div>
        <p className="font-bold text-2xl mb-2">Education Information:</p>
      </div>
      <div className="row-block">
        <div>
          <div>
            <label>School Name</label>
          </div>
          <div>
            <input
              id="schoolName"
              type="text"
              value={education.schoolName}
              onChange={(event) => setEducation({ ...education, schoolName: event.target.value })}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Degree</label>
          </div>
          <div>
            <input
              id="degree"
              type="text"
              value={education.degree}
              onChange={(event) => setEducation({ ...education, degree: event.target.value })}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Specialization</label>
          </div>
          <div>
            <input
              id="specialization"
              type="text"
              value={education.specialization}
              onChange={(event) => setEducation({ ...education, specialization: event.target.value })}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Graduation Date</label>
          </div>
          <div>
            <input
              id="graduationDate"
              type="date"
              value={education.graduationDate}
              onChange={(event) => setEducation({ ...education, graduationDate: event.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  )
}