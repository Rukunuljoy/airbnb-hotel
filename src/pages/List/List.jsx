import Header from "../../Components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import './List.css'

const List = () => {
  return <div>
    <Navbar/>
    <Header type="list"/>
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="listTitle">Search</h1>
          <div className="lsItem">
            <label htmlFor="/">Destination</label>
          </div>
        </div>
        <div className="listResult"></div>
      </div>
    </div>
  </div>;
};

export default List;
