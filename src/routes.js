import {Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Welcome from "./components/Welcome/Welcome";
import NotFound from "./components/NotFound/NotFound";
import Tutorial from "./components/Tutorial/Tutorial";

export default function RoutesManager() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/tutorial" element={<Tutorial />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}