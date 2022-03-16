// 1. http request to picsum on mount
// 2. useReducer gebruiken om loading, data en error states te handlen
// 3. cache mechanism
// 4. displayen in App.js

import { useEffect, useState, useReducer } from "react";
import axios from "axios";

const cache = {};
const initialState = {
  data: "",
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "updateResponse":
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
}

export const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const set = (value) => {
    dispatch({
      type: "updateResponse",
      payload: value,
    });
  };

  useEffect(() => {
    if (!url) return;
    set({ loading: true });
    fetch(url)
      .then((response) => {
        set({ data: response.url, error: null });
      })
      .catch((err) => {
        set({ data: "", error: err });
      })
      .finally(() => {
        set({ loading: false });
      });
  }, [url]);

  return state;
};
