import { useEffect, useState } from "react";

const UseFetch = ({ url }) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setPending(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const result = await response.json();
        setData(result);
        setError(null);
        setPending(false);
      } catch (err) {
        setError(err);
        setPending(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, pending };
};

export default UseFetch;
