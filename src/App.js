import Counter from "./components/count";
import CountReducer from "./components/countReducer";
import TextMemo from "./components/textMemo";
import ThemeSwitcher from "./components/themeReducer";
import Timer from "./components/timer";
import ToggleTimer from "./components/toggleTimer";

function App() {
  return (
    <div className="App">
      {/* <h1>component lifecycle 이해</h1> */}
      {/* <Counter /> */}
      {/* <Timer /> */}
      {/* <TextMemo /> */}
      {/* <ToggleTimer /> */}
      {/* <CountReducer /> */}
      <ThemeSwitcher />
    </div>
  );
}

export default App;
