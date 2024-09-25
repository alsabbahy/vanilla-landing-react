import ContactUs from "./sections/contactUs";
import Footer from "./components/footer";
import Home from "./sections/home";
import Navbar from "./components/navbar";
import Portofolio from "./sections/portofolio";
import Service from "./sections/service";
import Story from "./sections/story";

function App () {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <Portofolio />
      <Story />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
