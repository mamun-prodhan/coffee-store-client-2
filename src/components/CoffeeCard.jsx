import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const handleDelete = (_id) => {
    console.log("handle delete", _id);
    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = coffees.filter((cof) => cof._id !== _id);
          setCoffees(remaining);
          console.log("coffee is seated");
          console.log(remaining.length);
        }
      });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{chef}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
          <p>{category}</p>
          <p>{details}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn ">View</button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-600"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
