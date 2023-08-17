import { Link, useLoaderData, Form, useNavigate} from "react-router-dom";
import { baseUrl } from "../base_url";

function Index(props) {
  // GET THE DATA FROM OUR LOADER
  const people = useLoaderData();
  const navigate = useNavigate() // get function to send people to other pages

  return (
    <div>
      <button onClick={async () => {
        await fetch(`${baseUrl}/logout`) // make a request to the server to logout
        localStorage.removeItem('loggedIn') // remove the token from local storage
        navigate("/") // send the user back to the home page
      }}>Logout</button>
        <h2>Create a Person</h2>
        <Form action="/create" method="post">
            <input type="text" name="name" placeholder="person's name"/>
            <input type="text" name="title" placeholder="person's title"/>
            <input type="text" name="image" placeholder="person's image"/>
            <input type="submit" value="Create Person"/>
        </Form>
      {people.map((person, index) => {
        return (
          <div key={person._id} className="person">
            <Link to={`/${person._id}`}>
              <h1>{person.name}</h1>
            </Link>
            <img src={person.image} alt={person.name} />
            <h3>{person.title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
