import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/sobre" element={<div>Sobre</div>} />
          <Route path="/contato" element={<div>Contato</div>} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
