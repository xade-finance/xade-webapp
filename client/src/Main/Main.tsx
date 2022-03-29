import { React, Titlebar, Navbar, Investments, useMediaQuery } from './../module-manager'


function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1100px)' })
  console.log(isTabletOrMobile)
  return (
     <section>
       <Navbar />
       {isTabletOrMobile && <Titlebar />}
       <Investments />
     </section>
  );
}

export default App;