import { React, Titlebar, Navbar, Investments, useMediaQuery, Trade, Route, Routes, BrowserRouter, Login, Link } from './../module-manager'


function Main() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1100px)' })
  console.log(isTabletOrMobile)
  return (
     <section>
       <Navbar />
       {isTabletOrMobile && <Titlebar />}
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="investments" element={<Investments />} />
      <Route path="trade/:id" element={<Trade />} />
    </Routes>
  </BrowserRouter>
       
     </section>
  );
}

export default Main;