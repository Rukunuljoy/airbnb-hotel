import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="featuredTitles">
          <h1>dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div className="featuredTitles">
          <h1>reno</h1>
          <h2>134 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.pexels.com/photos/1697076/pexels-photo-1697076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div className="featuredTitles">
          <h1>austin</h1>
          <h2>143 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.pexels.com/photos/2227787/pexels-photo-2227787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div className="featuredTitles">
          <h1>dublin</h1>
          <h2>176 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
