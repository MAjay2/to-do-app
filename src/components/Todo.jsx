import { CiCircleRemove } from "react-icons/ci";
import { useState } from "react";

const Todo = (props) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <div className="">
      <div className="flex justify-between border p-5 m-5 rounded-full shadow-xl md:w-3/6 md:mx-auto">
        <div className="flex items-center">
          <CiCircleRemove
            onClick={() => {
              props.del(props.id);
            }}
            className="text-red-500 mr-5 text-xl cursor-pointer hover:text-pink-800"
          />
          <p
            className="text-zinc-500"
            style={{ textDecoration: isDone ? "line-through" : null }}
          >
            {props.todo}
          </p>
        </div>

        <input
          onClick={() => {
            setIsDone((prev) => !prev);
          }}
          type="checkbox"
          className="rounded-full w-10"
        />
      </div>
    </div>
  );
};

export default Todo;
