import { useState } from "react";

export const useUrlPicker = () => {
  const [url, setUrl] = useState("");
  return {
    selectedUrl: url,
    picker: (
      <>
        <button onClick={() => setUrl("https://picsum.photos/200/300")}>😼</button>
        <button onClick={() => setUrl("https://picsum.photos/id/238/200/300")}>🙀</button>
        <button onClick={() => setUrl("https://picsum.photos/id/239/200/300")}>😽</button>
      </>
    ),
  };
};
