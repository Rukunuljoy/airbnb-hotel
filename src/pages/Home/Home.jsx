import Featured from '../../Components/featured/Featured';
import FeaturedProperties from '../../Components/featuredProperties/FeaturedProperties';
import Header from '../../Components/header/Header';
import MailList from '../../Components/mailList/MailList';
import Navbar from '../../Components/navbar/Navbar';
import PropertyList from '../../Components/propertyList/PropertyList';
import './Home.css'
const Home = () => {
  return <div>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <Featured/>
      <h1 className="homeTitle">browse by property type  </h1>
        
        <PropertyList/>
    
      <h1 className='homeTitle'>Home guest love</h1>
      <FeaturedProperties/>
      <MailList/>
    </div>
  </div>;
};

export default Home;
