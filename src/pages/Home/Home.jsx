import Featured from '../../Components/featured/Featured';
import Header from '../../Components/header/Header';
import Navbar from '../../Components/navbar/Navbar';
import PropertyList from '../../Components/propertyList/PropertyList';
import './Home.css'
const Home = () => {
  return <div>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <Featured/>
      <h1 className="homeTitle">
        browse by property type
        <PropertyList/>
      </h1>
    </div>
  </div>;
};

export default Home;
