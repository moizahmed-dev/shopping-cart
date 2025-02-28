import useFakeStore from "./FakeStoreFetcher";
import Card from "./components/card";

const Catalog = () => {
  const { fakeStoreData, loading, error } = useFakeStore();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered!</p>;

  return (
    <div>
      <h1>Catalog</h1>
      {fakeStoreData.map((item) => {
        return (
          <div key={item.id}>
            <Card
              title={item.title}
              price={item.price}
              description={item.description}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Catalog;
