import CoursesCard from '@/components/CoursesCard'
import React from 'react'

const AllCoursesPage = async () => {
   const res = await fetch ('https://skill-sphere-website-green.vercel.app/data.json')
    const skills = await res.json()
  return (
    <div>
             <h2 className='text-3xl font-bold m-4'>All Courses</h2>

             <div className='grid grid-cols-4 gap-5'>
              {skills.map (skill => <CoursesCard key={skill.id} skill={skill}/>)}
             </div>
    </div>
  )
}

export default AllCoursesPage;