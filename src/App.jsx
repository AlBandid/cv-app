import Footer from './components/Footer'
import {useState} from 'react'
import GeneralInfo from "./components/GeneralInfo.jsx";
import EducationInfo from "./components/EducationInfo.jsx";
import PracticalExperience from "./components/PracticalExperience.jsx";
import RenderedView from "./components/RenderedView.jsx";

function App() {
  const [general, setGeneral] = useState({firstName:"", lastName:"", email:"", phone:""})
  const [education, setEducation] = useState({schoolName:"", degree:"", specialization:"", graduationDate:new Date()})
  const [practical, setPractical] = useState({companyName:"", position:"", yearsOfEmployment:0})

  return (
    <div className="mx-10 my-10">
      <div className="min-h-screen">
        <div className='flex flex-col 2xl:flex-row justify-center text-center'>
          <div className='md:basis-1/2'>
            <div>
              <h1>CV application form</h1>
            </div>
            <form className="flex flex-col gap-15 m-5">
              <GeneralInfo general={general} setGeneral={setGeneral}/>
              <EducationInfo  education={education} setEducation={setEducation}/>
              <PracticalExperience practical={practical} setPractical={setPractical}/>
              <button type="reset">Reset Form</button>
            </form>
          </div>
          <div className='md:basis-1/2 border-2 rounded-2xl border-white/20 p-4 max-h-auto'>
            <div>
              <h1>-CV-</h1>
            </div>
            <RenderedView general={general} education={education} practical={practical} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
