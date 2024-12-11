import Card from "../Components/Card";

export default function Home() {
  return (
    <>
      <div className="hero flex flex-col justify-center items-start h-[100vh]">
        <h1 className="text-5xl md:text-7xl font-bold text-black ml-10">
          A photo <br /> Gallery of <br /> my <br /> Graphics works.
        </h1>
        <p className="text-lg md:text-2xl mt-5 text-black ml-10">
          This are the collection of my graphics works. <br /> Which are ready
          to edit and share.
        </p>
      </div>

      <div className="bg-black">
        <h2 className="text-3xl md:text-5xl pt-10 mb-10 font-bold text-white text-center">
          Here are all the collections
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-20 pb-10">
          <span
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            <Card />
          </span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-20 p-20"><button className="btn btn-neutral w-1/2 text-xl">Show more</button></div>
      </div>

      <div>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <div className="flex flex-row justify-between items-center">
              <div>
                <p className="text-2xl">Nikah Nama 20</p>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn text-lg">Close</button>
                </form>
              </div>
            </div>
            <div className="flex justify-center items-center">
            <img src="/nikah.jpg" alt="" className="mt-10" />
            </div>
          </div>
        </dialog>
      </div>



      
    </>
  );
}
