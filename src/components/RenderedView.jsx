export default function RenderedView({general, education, practical}) {
  return (
    <>
      <div className='flex flex-col gap-3 m-5'>
        <div className="flex flex-row gap-2 justify-center text-3xl">
          <p className="text-right">{general.firstName}</p>
          <p className="text-left">{general.lastName}</p>
        </div>
        <div>
          <div className="flex flex-row gap-2 justify-center text-lg">
            <p className="font-bold">email:</p>
            <p>{general.email}</p>
          </div>
          <div className="flex flex-row gap-2 justify-center text-lg">
            <p className="font-bold">phone:</p>
            <p>{general.phone}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-center mt-5">
          <p className="text-xl font-bold">EDUCATION</p>
          <hr className="mb-2 w-2/3 mx-auto" />
          <p className="italic">{new Date(education.graduationDate).toLocaleDateString()}</p>
          <p className="font-bold">{education.schoolName}</p>
          <p>{education.degree}: {education.specialization}</p>
        </div>
        <div className="flex flex-col gap-1 text-center mt-5">
          <p className="text-xl font-bold">PRACTICAL EXPERIENCE</p>
          <hr className="mb-2 w-2/3 mx-auto" />
          <p className="italic">{practical.yearsOfEmployment} years</p>
          <p className="font-bold">{practical.companyName}</p>
          <p>{practical.position}</p>
        </div>
      </div>
    </>
  )
}