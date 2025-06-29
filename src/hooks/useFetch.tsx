import { useEffect, useReducer } from "react";
import axios from "axios";

type StateType = {
  loading: boolean;
  data: string[];
  error: string;
};

type ActionType =
  | { type: "FETCH_SUCCESS"; payload: any[] } // payload must be array for success
  | { type: "FETCH_FAIL"; payload: string }; // payload must be string for fail

const initState: StateType = {
  loading: true,
  data: [],
  error: "",
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, data: action.payload, error: "" };
    case "FETCH_FAIL":
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default function useFetch() {
  const [state, dispatch] = useReducer(reducer, initState);

  const options = {
    method: "GET",
    url: "https://www.arbeitnow.com/api/job-board-api",
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data.data,
        });
      } catch (error) {
        dispatch({
          type: "FETCH_FAIL",
          payload: error instanceof Error ? error.message : "Unknown error",
        });
      }
    };
    fetchData();
  }, []);

  return state;
}
