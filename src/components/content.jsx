

function click() {
    const  a  = document.getElementById('click');
    const c = a.value;
    let b = document.createElement('div')
    b.innerHTML = c;
    let d = document.getElementById('appendchild');
    d.appendChild(b) 
    
}

    
const Content = () => {
    return (
        <div >
            <section className="text-center">
            <input type="text" id="click" placeholder="Write something" /> <br />
            <button className="button" onClick={click}>Submit</button>
            </section>
            
                <div id="appendchild">
                
                </div>
            
            <hr />
        </div>
    );
};

export default Content;