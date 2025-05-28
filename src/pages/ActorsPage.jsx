import ActorList from "../components/ActorList";

const ActorsPage = () => {
  return (
    <div>
      <h1 className="text-center">🎭 Attori</h1>
      <ActorList endpoint="https://lanciweb.github.io/demo/api/actors/" />
    </div>
  );
};

export default ActorsPage;
