import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text } from "react-native";

const Api = () => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    const makeApiCall = async () => {
      const result = await axios.get(
        "https://api.ai.ikenley.com/ai/api/status/info"
      );
      setState(result.data);
    };
    makeApiCall();
  }, [setState]);

  return <Text>{state ? JSON.stringify(state) : "Loading..."}</Text>;
};

export default Api;
