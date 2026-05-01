import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { FcRating } from "react-icons/fc";

const CoursesCard = ({skill}) => {
  return (
    <Card className=" bg-gray-100 hover:bg-gray-300 border">
        <div className="">
            <div className="relative w-full aspect-square">
                <Image
                src={skill.image}
                fill
                alt={skill.title}
                className="rounded-lg text-center mx-auto object-cover overflow-hidden"
                />
                <Chip className="absolute right-2 top-2 bg-green-200 ">{skill.category}</Chip>
            </div>

            <div className="">
                <h2 className="mt-2  font-semibold">
                {skill.title}</h2>
            </div>

              <div className="flex mx-auto justify-between mt-5 font-semibold">
                <div>
                    <h2>{skill.instructor}</h2>
                </div>
                   
                 <Separator orientation="vertical"/>

                <div className="flex items-center gap-2 ">
                    <p><FcRating /></p>
                    <h2>{skill.rating}</h2>
                </div>

              </div>

              <Button variant="outline" className={'w-full mt-5'}>View</Button>

            {/* <div className="flex mx-auto items-center gap-2 mt-3">
                <p className="font-semibold"><MdOutlineTimer /> </p>
                <h2 className=" font-semibold">
               {skill.duration}</h2>
            </div> */}

        </div>
    </Card>
  )
}

export default CoursesCard;