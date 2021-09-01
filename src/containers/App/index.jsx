import SelectDropdown from "../../components/Select";
import { Main } from "./style";
import GlobalStyle from "../../styles/globals";

const App = () => (
  <>
    <GlobalStyle />
    <Main>
      <h2 style={{ color: "white", marginBottom: "20px" }}>Default</h2>
      <SelectDropdown data={Array.from({ length: 4 })} />
      <h2 style={{ color: "white", marginBottom: "20px" }}>Transparent</h2>
      <SelectDropdown
        data={Array.from({ length: 8 })}
        settings={{
          textColor: "white",
          arrowColor: "white",
          transparent: true
        }}
      />
      <h2 style={{ color: "white", marginBottom: "20px" }}>Solid Color</h2>
      <SelectDropdown
        data={Array.from({ length: 10 })}
        settings={{
          bgColor: "orange",
          borderColor: "white",
          height: "260px",
          optColor: "black",
          arrowColor: "white",
          inputColor: "orange",
          textColor: "white",
          scrollColor: "black"
        }}
      />
    </Main>
  </>
);

export default App;
