import ActorList from "../components/ActorList";

const ActressesPage = () => {
  return (
    <div>
      <h1 className="text-center">✨ Attrici</h1>
      <ActorList endpoint="https://lanciweb.github.io/demo/api/actresses/" />
    </div>
  );
};

export default ActressesPage;
