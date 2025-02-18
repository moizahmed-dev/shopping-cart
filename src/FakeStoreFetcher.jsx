import { useState, useEffect } from "react";

const useFakeStore = () => {
  const [fakeStoreData, setFakeStoreData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setFakeStoreData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { fakeStoreData, error, loading };
};

const FakeStore = () => {
  const { fakeStoreData, error, loading } = useFakeStore();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered!</p>;

  return (
    <div>
      <h1>Merchandise</h1>
      {fakeStoreData.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </div>
  );
};

export default FakeStore;
