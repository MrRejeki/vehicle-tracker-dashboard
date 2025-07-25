import { BrowserRouter, Route, Routes } from "react-router-dom"
import VehicleList from "./pages/VehicleList"
import VehicleDetail from "./pages/VehicleDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VehicleList />} />
        <Route path="/vehicles/:id" element={<VehicleDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
