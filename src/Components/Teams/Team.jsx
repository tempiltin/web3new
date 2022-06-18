import React from 'react'
import Mentors from '../Mentors/Mentors'
import SecHeadingCenter from '../SecHeading/SecHeadingCenter'
import TeamMembers from './TeamMembers'

const Team = () => {
  return (
    <div className='indexZed gamfi-team-section pt-115 pb-85 md-pt-75 md-pb-42'>
        <div className="container">
            <SecHeadingCenter centerSubTitle="TEAM MEMBERS" titleH2="Meet The Crew"  />
             <div className="row">
                <TeamMembers />
             </div>
             <Mentors />
        </div>
    </div>
  )
}

export default Team