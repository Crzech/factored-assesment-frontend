import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import PeopleIndex from "./components/pages/people/PeopleIndex";
import PeopleForm from "./components/pages/people/PeopleForm";
import FilmsIndex from "./components/pages/films/FilmsIndex";
import FilmsForm from "./components/pages/films/FilmsForm";
import PlanetsIndex from "./components/pages/planets/PlanetsIndex";
import PlanetsForm from "./components/pages/planets/PlanetsForm";
import SignUpPage from "./components/pages/SignUpPage";

const Router: FunctionComponent = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/sign-up" element={<SignUpPage />} />
    <Route path="/people" element={<PeopleIndex />} />
    <Route path="/people/form" element={<PeopleForm />} />
    <Route path="/films" element={<FilmsIndex />} />
    <Route path="/films/form" element={<FilmsForm />} />
    <Route path="/planets" element={<PlanetsIndex />} />
    <Route path="/planets/form" element={<PlanetsForm />} />
  </Routes>
);

export default Router;
