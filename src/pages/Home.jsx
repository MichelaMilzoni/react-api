//# pagina principale

//* importo ActorList.jsx
import ActorList from "../components/ActorList";

const Home = () => {
  return (
    <div>
      <h1 className="text-center">Elenco Attori</h1>
      <ActorList />
    </div>
  );
};

export default Home;