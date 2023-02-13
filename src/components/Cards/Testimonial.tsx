import { FC, ReactElement } from "react";
import { RatingIcon } from "../../packages/design/icons";

interface TestimonialCardProps {
  id: number;
  image: string;
  author: string;
  designation: string;
  rating: number;
  content: string;
}

export const TestimonialCard: FC<TestimonialCardProps> = ({
  author,
  content,
  designation,
  image,
  rating,
  id,
}) => {
  const ratings = (): ReactElement<any, any>[] => {
    const ratingComp: ReactElement<any, any>[] = [];
    for (let count = 0; count < rating; count++) {
      ratingComp.push(<RatingIcon />);
    }

    return ratingComp;
  };
  return (
    <div className="w-full bg-[#292945] p-4 rounded-md flex items-start justify-between relative">
      <div className="w-[60%] space-y-4 text-white">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-[#FFD06A]">
            {ratings().map((rat: ReactElement<any, any>, index: number) => rat)}
          </div>
          <p className="text-[#FEFEFE] text-sm">{content}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg">{author}</h3>
          <h6 className="text-[#9BA5FE] text-sm">{designation}</h6>
        </div>
      </div>
      <div
        className={`w-[60%] absolute bottom-0 ${
          id === 1 ? "-right-16" : "right-0"
        }`}
      >
        <img
          src={image}
          alt=""
          width={id === 2 ? "100%" : "80%"}
          height="100%"
        />
      </div>
    </div>
  );
};
