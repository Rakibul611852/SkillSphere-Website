import CoursesCard from "./CoursesCard"

const TopGeneration =async () => {
    const res = await fetch ('https://skill-sphere-website-green.vercel.app/data.json')
    const skills = await res.json()
    const topSkills = skills.slice(0,4)

  return (
    <div>
          <h1 className="text-3xl font-bold mt-10 text-center">Top Courses Generation</h1>

          <div className=" grid md:grid-cols-4 gap-10 mt-10 ">
            {topSkills.map(skill => <CoursesCard key={skill.id} skill = {skill}/>)}
          </div>
    </div>
  )
}

export default TopGeneration;