import { styles } from "@/app/styles/style";
import React, { FC, useState } from "react";

type Props = {
  courseInfo: any;
  setCourseInfo: (courseInfo: any) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseInformation: FC<Props> = ({
  courseInfo,
  setCourseInfo,
  active,
  setActive,
}) => {
  const [dragging, setDragging] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setActive(active + 1);
  };
  return (
    <div className="w-[80%] m-auto mt-24">
      <form onSubmit={handleSubmit} className={`${styles.label}`}>
        <div>
          <label htmlFor="">Course Name</label>
          <input
            type="name"
            name=""
            id="name"
            required
            value={courseInfo.name}
            onChange={(e: any) =>
              setCourseInfo({ ...courseInfo, name: e.target.value })
            }
            placeholder="MERN stack LMS Platform with next js"
            className={`${styles.input}`}
          />
        </div>
        <br />
        <div className="mb-5">
          <label htmlFor="">Course Description</label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={8}
            placeholder="Write something amazing..."
            className={`${styles.input} !h-min py-2`}
            value={courseInfo.description}
            onChange={(e: any) =>
              setCourseInfo({ ...courseInfo, description: e.target.value })
            }
          ></textarea>
        </div>
        <br />
        <div className="w-full flex justify-between">
          <div className="w-[45%]">
            <label htmlFor="">Course Price</label>
            <input
              type="number"
              name=""
              id="price"
              required
              value={courseInfo.price}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, price: e.target.value })
              }
              placeholder="29"
              className={`${styles.input}`}
            />
          </div>
          <div className="w-[45%]">
            <label htmlFor="">Estimated Price (optional)</label>
            <input
              type="number"
              name=""
              id="price"
              required
              value={courseInfo.estimatedPrice}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, estimatedPrice: e.target.value })
              }
              placeholder="29"
              className={`${styles.input}`}
            />
          </div>
        </div>
        <br />
        <div>
          <label htmlFor="email" className={`${styles.label}`}>
            Course Tags
          </label>
          <input
            type="text"
            name=""
            id="tags"
            required
            value={courseInfo.tags}
            onChange={(e: any) =>
              setCourseInfo({ ...courseInfo, tags: e.target.value })
            }
            placeholder="MERN,NEXT 13"
            className={`${styles.input}`}
          />
        </div>
        <br />
        <div className="w-full flex justify-between">
          <div className="w-[45%]">
            <label htmlFor="">Course Label</label>
            <input
              type="text"
              name=""
              id="lavel"
              required
              value={courseInfo.level}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, level: e.target.value })
              }
              placeholder="Biginner/Expert"
              className={`${styles.input}`}
            />
          </div>
          <div className="w-[45%]">
            <label htmlFor="">Demo Url</label>
            <input
              type="text"
              name=""
              id="demoUrl"
              required
              value={courseInfo.demoUrl}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, demoUrl: e.target.value })
              }
              placeholder="eer74fd"
              className={`${styles.input}`}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CourseInformation;
