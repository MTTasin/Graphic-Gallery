export default function Card(props) {
  return (
    <div className="card bg-blue-900 w-96 shadow-xl">
      <figure>
        <img
          src={props.img}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{props.title}</h2>
      </div>
    </div>
  );
}
