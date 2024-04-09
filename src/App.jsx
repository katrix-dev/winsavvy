import { forwardRef, useCallback, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function App() {



  return (
    <div className="flex flex-row w-full h-[100vh] justify-center">
      <div className="flex flex-col w-[65vw] p-5 gap-8">
        <div className="flex flex-row justify-center">
          <h2 className="font-mons font-semibold">WinSavvy BluePrintBuilder</h2>
        </div>
        <FormLink label={"Enter your Product/Service Information Page or URL to Get Started."}/>
        <FormLink label={"Enter Your Business Mission Statement or About Page URL So That We Can Make Our Suggestions More Tailored."}/>
      </div>
    </div>
  );
}


const FormLink = forwardRef((props, ref) => {

  const [links, setLink] = useState([]);
  const [file, setFile] = useState(null);

  const linkElem = useRef(null)
  const fileElem = useRef(null);

  const onUploadFile = () => {
    fileElem.current.click();
    setFile(null);
  }

  const onFileChange = (evt) => {
    let filePath = evt.target.value;
    let allowedExec = /^.*\.pdf$/i;
    document.querySelectorAll("button").forEach((item) => item.disabled = true);

    if (filePath) {
      if (allowedExec.test(filePath)) {
        setFile(() => ([evt.target.value]));
        document.querySelectorAll("button").forEach((item) => item.disabled = false)
      } else {
        toast.error("You need to choose a pdf file to continue.", {
          autoClose: 3000,
          draggable: 'touch',
          onClose: () => document.querySelectorAll("button").forEach((item) => item.disabled = false),
          pauseOnFocusLoss: false,
          pauseOnHover: false,
          closeOnClick: true,
        })
      }
    } else {
      toast.error("No file selected. Please choose a pdf file to continue.", {
        autoClose: 3000,
        draggable: 'touch',
        onClose: () => document.querySelectorAll("button").forEach((item) => item.disabled = false),
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        closeOnClick: true,
      })
    }
  }

  const removeLink = (evt, index) => {

    evt.target.disabled = true;

    links.forEach((_, idx, arr) => {
      if (index === idx) {
        arr[idx] = false;
      }
    })

    let arr = links;

    arr = arr.filter((a) => typeof a !== "boolean");

    setLink(() => ([...arr]));

    evt.target.disabled = false;
  }

  const addLink = (evt) => {
    const button = evt.target;
    const val = linkElem.current.value;
    button.disabled = true;
    if (val.trim() === "") {
      toast.error("You need to add a proper link.", {
        autoClose: 3000,
        draggable: 'touch',
        onClose: () => button.disabled = false,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        closeOnClick: true,
      })
    } else {
      linkElem.current.value = "";
      setLink((prev) => ([...prev, val]))
      button.disabled = false;
    }
  };

  return (
    <div className="flex flex-col gap-5 bg-gray-100 p-6 rounded-lg">
      <div className="flex flex-col w-full gap-3">
          <label
            className="font-semibold ml-[0.6rem] text-[0.85rem]"
            htmlFor="link-1">
            {props?.label}
          </label>
        <div className="flex flex-row gap-1">
          <input
            className="p-2 flex-grow rounded-full disabled:cursor-not-allowed bg-gray-200 pl-4 placeholder:text-black/30 focus:ring-2 ring-0 border-0 outline-none"
            placeholder="Paste your link"
            type="text"
            name="link-1"
            id="link-1"
            ref={linkElem}
            disabled={Array.isArray(file) || links.length >= 4}
          />
          <div className="flex flex-row -ml-24 gap-4">
            <button className="justify-center bg-global-0 disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-global-1 transition-all duration-300 ease-in-out w-[10rem] h-[2.85rem] rounded-full font-mons font-semibold text-global-4 hover:text-global-5" onClick={addLink} disabled={Array.isArray(file) || links.length >= 4}>
              Add More
            </button>
            <button className="justify-center bg-global-0 hover:bg-global-1 transition-all duration-300 ease-in-out w-[10rem] h-[2.85rem] rounded-full font-mons font-semibold text-global-4 hover:text-global-5 disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={links.length > 0} onClick={onUploadFile}>
              Upload File
            </button>
          </div>
          <input
            type="file"
            hidden
            className="hidden"
            accept=".pdf"
            ref={fileElem}
            onChange={onFileChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[2px] ml-6">
        {links.map((item, index) => (
          <div className="flex flex-row p-1 pl-4 relative justify-between mr-5" key={index.toString()}>
            <p className="text-[0.95rem] text-ellipsis text-nowrap overflow-hidden">
              {item}
            </p>
            <button onClick={(evt) => removeLink(evt, index)} className="transition-all duration-300 ease-in-out w-[10rem] rounded-full font-mons font-semibold text-global-2 hover:underline">
              Remove
            </button>
          </div>
        ))}
        {Array.isArray(file) && file.map((item, index) => (
          <div className="flex flex-row p-1 pl-4 relative justify-between mr-5" key={index.toString()}>
            <p className="text-[0.95rem] w-[75%] text-ellipsis text-nowrap overflow-hidden">
              {item.replace(/^.*[\\/]/, '')}
            </p>
            <button onClick={(evt) => setFile(null)} className="transition-all duration-300 ease-in-out w-[10rem] rounded-full font-mons font-semibold text-global-2 hover:underline">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
})
