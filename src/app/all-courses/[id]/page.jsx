
const PhotoDetailsPage =async ({params}) => {
  const {id} = await params;
  const res =await fetch ('https://skill-sphere-website-green.vercel.app/data.json')
  const skills = await res.json()

  const skill = skills.find (p => p.id == id)
  return (
    <div>
      <h2>{skill?.title}</h2>
      <p>{skill.level}</p>
    </div>
  )
}

export default PhotoDetailsPage;