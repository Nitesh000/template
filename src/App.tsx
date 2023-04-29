import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Base from "./pages/Base";
import Contact from "./pages/Contact";
import Charts from "./pages/Charts";
import Navbar from "./components/Navbar";
import Person from "./components/Person";

function App() {
  return (
    <Fragment>
      {/* Nav bar */}
      {/* contact page */}
      {/* charts and maps page */}

      <Routes>
        <Route path="/" Component={Base} />
        <Route path="/" Component={Navbar}>
          <Route path="contact" Component={Contact} />
        </Route>
        <Route path="/" Component={Navbar}>
          <Route path="charts" Component={Charts} />
        </Route>
        <Route path="/" Component={Navbar}>
          <Route path="contact/:personId" Component={Person} />
          <Route path="contact/create" Component={Person} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
