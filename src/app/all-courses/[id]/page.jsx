import { FcRating } from "react-icons/fc";
import { IoMdClock } from "react-icons/io";

const PhotoDetailsPage =async ({params}) => {
  const {id} = await params;
  const res =await fetch ('https://skill-sphere-website-green.vercel.app/data.json')
  const skills = await res.json()

  const skill = skills.find (p => p.id == id)
  return (
      <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 mt-10">
      
      {/* Image */}
      <img
        src={skill.image}
        alt={skill.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-gray-800">
          {skill.title}
        </h2>

        <p className="text-sm text-gray-500">
          Instructor: {skill.instructor}
        </p>

        <p className="text-gray-600 text-sm">
          {skill.description}
        </p>

        {/* Info */}
        <div className="flex justify-between text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <span>
              <IoMdClock />
            </span>
             <span>
                 {skill.duration}
             </span>
          </span>

          <span className="flex items-center gap-2">
            <span>
              <FcRating />
            </span>
             <span>
                 {skill.rating}
             </span>
          </span>
        </div>

        {/* Level + Category */}
        <div className="flex justify-between mt-2">
          <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
            {skill.level}
          </span>

          <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
            {skill.category}
          </span>
        </div>

        {/* Button */}
        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
};


export default PhotoDetailsPage;