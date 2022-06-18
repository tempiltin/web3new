import React from 'react'
import SecHeadingCenter from '../SecHeading/SecHeadingCenter'
import Mentor from './Mentor'

const Mentors = () => {
  return (
    <div className='gamfi-team-section gamfi_Our_mentor_section pt-115 pb-85 md-pt-75 md-pb-42'>
        <div className="container">
            <SecHeadingCenter centerSubTitle="ADVISORS" titleH2="OUR MENTORS"/>
        </div>
        <div className="row">
            <Mentor />
        </div>
    </div>
  )
}

export default Mentors