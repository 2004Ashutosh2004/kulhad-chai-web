import "./App.css";
import Textform from "./component/Textform";
import Navbar from "./component/Navbar";
import Vandana from "./component/Vandana";
import Gaurav from "./component/gaurav";
import Restro from "./component/Restro";
import Tabla from "./component/Tabla";
import Contact from "./component/contact";
import Help from "./component/help";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <div className="header-background  ">
        <Navbar />
        <Textform />
      </div>
      {/* <div className="pin"> */}
        <Vandana />
        <Gaurav />
        <Restro />
        <Contact />
        <iframe
          className="Mig"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9614435843646!2d77.60514137463194!3d12.974317914819496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167c4d722c73%3A0x32a49eb101436b6d!2sChurch%20St%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1690871243405!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <Help />
        <Tabla />
        <Footer />
      {/* </div> */}
    </>
  );
}

export default App;
