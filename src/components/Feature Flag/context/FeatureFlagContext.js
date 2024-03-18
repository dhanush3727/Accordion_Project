import { createContext, useEffect, useState } from "react";
import featureFlagsData from "../data";

const FeatureContext = createContext({});

export const FeatureFlag = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [enableFlags, setEnableFlags] = useState({});

  useEffect(() => {
    const fetchFeatureFlags = async () => {
      try {
        setLoading(true);
        const response = await featureFlagsData();
        setEnableFlags(response);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        throw new Error(err);
      }
    };
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureContext.Provider value={{ loading, enableFlags }}>
      {children}
    </FeatureContext.Provider>
  );
};

export default FeatureContext;
