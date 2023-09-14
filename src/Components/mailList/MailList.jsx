import "./MailList.css";
const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitles">save time,save money</h1>
      <span className="mailDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        dolore!
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
