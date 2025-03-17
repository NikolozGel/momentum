import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTaskPage from "./pages/CreateTaskPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Layout from "./components/layout/Layout";
import HomeTaskPage from "./pages/HomeTaskPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="w-[120rem] mx-auto max-w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomeTaskPage />} />
              <Route path="/createTask" element={<CreateTaskPage />} />
              <Route path="/taskDetailsPage" element={<TaskDetailsPage />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
