import logo from "./logo.svg";
import "./App.css";
import { useFetch } from "./useFetch";
import { useToggle } from "./useToggle";
import { useUrlPicker } from "./useUrlPicker";

function App() {
  const { selectedUrl, picker } = useUrlPicker();
  const { data, loading, error } = useFetch(selectedUrl);
  const { isToggled, toggle } = useToggle();

  // console.log({ data, loading, error });
  return (
    <div className="App">
      <input type="checkbox" onChange={toggle} />
      <header className="App-header">
        {picker}
        {(() => {
          if (!selectedUrl) return <p>Select somethang 💩</p>
          if (isToggled) return <p>Nieten te zien whé</p>;
          if (error) return <p>Nieje</p>;
          if (loading) return <p>Loadej 😼</p>;
          return <img src={data} className="App-logo" alt="logo" />;
        })()}
      </header>
    </div>
  );
}

export default App;
