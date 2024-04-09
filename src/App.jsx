import { useCallback } from "react";
import InputBox from "./InputBox/InputBox";
export default function App() {

	const [ link, setLink ] = useState([])

	const removeLink = useCallback( (index) => {
		
	}, [])


  return (
    <div className="flex flex-row w-full h-[100vh] justify-center">
      <div className="flex flex-col bg-slate-300 w-[65vw] p-5 gap-8">
        <div className="flex flex-row justify-center">
          <h2 className="font-mons font-semibold">WinSavvy BluePrintBuilder</h2>
        </div>
        <div className="flex flex-row w-full ml-4 items-center gap-4">
          <div className="flex flex-col gap-1 w-[60%]">
            <label
              className="font-semibold ml-[0.8rem] text-[0.85rem]"
              htmlFor="link"
            >
              Enter your Product/Service Information Page or URL to Get Started.
            </label>
            <input
              className="p-2 rounded-full bg-slate-200 pl-4 placeholder:text-gray-400 focus:ring-2 ring-0 border-0 outline-none"
              placeholder="Paste your link"
              type="text"
              name="link"
              id="link"
            />
          </div>
          <div className="flex flex-row gap-4">
            <button className="justify-center mt-6 bg-global-0 hover:bg-global-1 transition-all duration-300 ease-in-out w-[10rem] h-[2.85rem] rounded-full font-mons font-semibold text-global-4 hover:text-global-5 -ml-10">
              Add More
            </button>
            <input
              type="file"
              hidden
              className="hidden"
              accept=".doc,.docx,.pdf"
              id="fileID"
            />
            <button className="justify-center mt-6 bg-global-0 hover:bg-global-1 transition-all duration-300 ease-in-out w-[10rem] h-[2.85rem] rounded-full font-mons font-semibold text-global-4 hover:text-global-5">
              Upload File
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[95%] ml-6">
          {[].map((item, index) => (
            <div className="bg-white flex flex-row p-2 pl-4 relative justify-between" key={index.toString()}>
              <p className="text-[0.95rem] w-[75%] text-ellipsis text-nowrap overflow-hidden">
                {item?.link}
              </p>
              <button onClick={() => removeLink(index)} className="transition-all duration-300 ease-in-out w-[10rem] rounded-full font-mons font-semibold text-global-2 hover:underline -ml-10">
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex flex-row w-[14%]"></div> */}
    </div>
  );
}
