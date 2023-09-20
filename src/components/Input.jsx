import { HiPlusCircle } from "react-icons/hi";
import { MdAccessibilityNew } from "react-icons/md";
import { useState } from "react";
const Input = (props) => {
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    let value = e.target.value;
    setInputText(value);
  }

    function mickey (){
    console.log("hello")
    }
  return (
    <div className="">
      <form
        className="p-5 m-5 md:w-3/6 md:mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <label
          for="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MdAccessibilityNew className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            value={inputText}
            onChange={handleChange}
            type="text"
            className="shadow-2xl block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Do something"
          />
          <button
            onClick={() => {
              props.addNote(inputText, setInputText);
            }}
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-slate-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
          >
            <HiPlusCircle className="text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
