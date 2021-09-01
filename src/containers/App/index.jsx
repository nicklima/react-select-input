import SelectDropdown from "../../components/Select";
import { Main } from "./style";
import GlobalStyle from "../../styles/globals";

const App = () => (
  <>
    <GlobalStyle />
    <Main>
      <h2 style={{ color: "white", marginBottom: "20px" }}>Default</h2>
      <SelectDropdown />
      <h2 style={{ color: "white", marginBottom: "20px" }}>Transparent</h2>
      <SelectDropdown
        settings={{ text: "white", arrow: "white", transparent: true }}
      />
      <h2 style={{ color: "white", marginBottom: "20px" }}>Solid Color</h2>
      <SelectDropdown
        settings={{
          height: "200px",
          input: "purple",
          border: "gold",
          text: "gold",
          arrow: "gold",
          scroll: "purple"
        }}
      />
    </Main>
  </>
);

export default App;
