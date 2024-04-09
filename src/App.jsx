import InputBox from "./InputBox/InputBox";
export default function App() {
  return (
    <div className="flex flex-row w-full h-[100vh] justify-center">
      {/* <h1 className="text-5xl font-bold mb-4">WinSavvy BluePrintBuilder</h1>
        <p className="text-lg mb-10">Create Your Custom Marketing Plan for Your Product or Service with WinSavvy BluePrintBuilder<br />Just type in a domain or a keyword to get started.</p>
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-row gap-5">
            <input type="text" placeholder="Enter a domain or a keyword" className="border-2 border-global-1 p-2 rounded-lg w-full sm:w-auto" />
            <button className="bg-global-1 text-white p-2 rounded-lg w-full sm:w-auto">Upload Files</button>
          </div>
        </div> */}
      {/* <div className="flex flex-row w-[14%]"></div> */}
      <div className="flex flex-col bg-slate-300 w-[65vw] p-5 gap-8">
        <div className="flex flex-row justify-center">
          <h2 className="font-mons font-semibold">WinSavvy BluePrintBuilder</h2>
        </div>
        <div className="flex flex-row w-full ml-4 items-center gap-4">
          <div className="flex flex-col gap-1 w-[60%]">
            <label className="font-semibold ml-[0.8rem] text-[0.85rem]" htmlFor="link">
              Enter your Product/Service Information Page or URL to Get Started.
            </label>
            <input className="p-2 rounded-full bg-slate-200 pl-4 placeholder:text-gray-400 focus:ring-2 ring-0 border-0 outline-none" placeholder="Paste your link" type="text" name="link" id="link" />
          </div>
          <div className=""></div>
          <button className="justify-center mt-6 bg-global-1 hover:bg-global-0 transition-all duration-300 ease-in-out w-[10rem] h-[3rem] rounded-full font-mons font-semibold text-global-4 hover:text-global-5">Add More</button>
        </div>
      </div>
      {/* <div className="flex flex-row w-[14%]"></div> */}
    </div>
  );
}
