import './SearchItem.css'
const SearchItem = () => {
    return (
        <div className='searchItem'>
            <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className='siImg' />
            <div className='isDesc'>
                <h1 className='siTitle'>Lorem, ipsum dolor.</h1>
                <span className='siDistance'>Lorem, ipsum dolor.</span>
                <span className='siTaxiOp'>Lorem, ipsum dolor.</span>
                <span className='siSubtitle'>Lorem ipsum dolor sit amet.</span>
                <span className='siFeatured'>Lorem ipsum dolor sit amet consectetur.</span>
                <span className='siCancelOp'>Lorem, ipsum.</span>
                <span className='siCancelOpSubtitle'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, magni.</span>
            </div>
            <div className='isDetails'>
                <div className="siRating">
                    <span>excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTextOp">include taxes and fees</span>
                    <button className='siCheckButton'>see Available</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;