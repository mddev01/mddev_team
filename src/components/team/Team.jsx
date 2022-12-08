import React from 'react'
import './Team.css'

function Team() {
  return (
    <div className='box'>
      <div className="baker"><p className='the'> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p><br /><br />
      <h3 className='h3'>Kady Baker</h3><br />
      <p className='product'>Product Manager at Bookmark</p>
      </div>
      <div className="aisha"><p className='the'> “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p><br /><br />
      <h3 className='h3'>Aiysha Reese</h3><br />
      <p className='product'>Founder of Manage</p>
      </div>
      <div className="artur"><p className='the'> “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p><br /><br />
      <h3 className='h3'>Arthur Clarke</h3><br />
      <p className='product'>Co-founder of MyPhysio</p>
      </div>
    </div>
  )
}

export default Team