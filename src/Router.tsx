import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import PeopleIndex from "./components/pages/people/PeopleIndex";
import PeopleForm from "./components/pages/people/PeopleForm";
import FilmsIndex from "./components/pages/films/FilmsIndex";
import FilmsForm from "./components/pages/films/FilmsForm";

const Router: FunctionComponent = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/people" element={<PeopleIndex />} />
    <Route path="/people/form" element={<PeopleForm />} />
    <Route path="/films" element={<FilmsIndex />} />
    <Route path="/films/form" element={<FilmsForm />} />
  </Routes>
);

export default Router;
