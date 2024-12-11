import Card from "../Components/Card";


export default function Birthday() {
    return (
        <>
        <div className="bg-black mt-10">
        <h2 className="text-3xl md:text-5xl pt-10 mb-10 font-bold text-white text-center">
          Here are all the Birthday collections
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
    )
}