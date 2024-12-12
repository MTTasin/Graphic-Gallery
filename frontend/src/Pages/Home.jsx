import Card from "../Components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../Components/Loader";

export default function Home() {
  const url = import.meta.env.VITE_API_URL;
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [totalData, setTotalData] = useState(0);
  const [nextButton, setNextButton] = useState(true);
  const [loading, setLoading] = useState(false);

  function getData() {
    setLoading(true);
    axios
      .get(`${url}/gallery/?limit=${limit}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  function willLoadMore() {
    axios
      .get(`${url}/gallery/`)
      .then((res) => {
        setTotalData(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });

    if (limit >= totalData) {
      setNextButton(false);
    } else {
      setNextButton(true);
    }
  }

  useEffect(() => {
    getData();
  }, [limit]);

  useEffect(() => {
    willLoadMore();
  }, [getData]);

  const cards = data.map((item) => {
    return (
      <span
        key={item.id}
        onClick={() => document.getElementById(item.id).showModal()}
      >
        <Card title={item.title} img={item.image} />
      </span>
    );
  });

  const modals = data.map((item) => {
    return (
      <dialog id={item.id} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex flex-row justify-between items-center">
            <div>
              <p className="text-2xl">{item.title}</p>
              <p>Size: {item.size}</p>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn text-lg">Close</button>
              </form>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={item.image} alt="" className="mt-10" />
          </div>
        </div>
      </dialog>
    );
  });

  return (
    <>
      <div className="relative">
        {loading && (
          <div className="flex justify-center items-center h-[80vh] w-[100vw] z-10 fixed">
            <Loader />
          </div>
        )}
        <div className={loading ? "opacity-10 z-0" : ""}>
          <div className="hero flex flex-col justify-center items-start h-[100vh]">
            <h1 className="text-5xl md:text-7xl font-bold text-black ml-10 capitalize">
              A photo <br /> Gallery of <br /> my <br /> Graphics works.
            </h1>
            <p className="text-lg md:text-2xl mt-5 text-black ml-10">
              This are the collection of my graphics works. <br /> Which are
              ready to edit and share.
            </p>
          </div>

          <div className="bg-black">
            <h2 className="text-3xl md:text-5xl pt-10 mb-10 font-bold text-white text-center">
              Here are all the collections
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-20 pb-10">
              {cards}
            </div>

            <div className="flex flex-wrap justify-center items-center gap-20 p-20">
              {nextButton ? (
                <button
                  className="btn btn-neutral w-1/2 text-xl"
                  onClick={() => setLimit(limit + 10)}
                >
                  Show more
                </button>
              ) : null}
            </div>
          </div>

          <div>{modals}</div>
        </div>
      </div>
    </>
  );
}
