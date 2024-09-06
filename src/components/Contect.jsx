import './comstyle.css';
function Contect(props) {
    return (
        <div ref={props.contect} className='container'>
            <div>
            <h3 style={{fontWeight:"500" , fontSize:"24px"}}>ช่องทางการติดต่อ</h3>
            </div>
            {/* ============================ */}
            <section className='box-contect'>
            <a href="mailto:Beanzaza123@gmail.com">Email: Beanzaza123@gmail.com</a>
            <a href="tel:+660621251512">Tel: 062-125-1512</a>
            <a href="https://www.instagram.com/_180.98k/" target="_blank" rel="noopener noreferrer">IG: _180.98k</a>
            <a href="https://line.me/ti/p/F6ya3kWWYs" target="_blank" rel="noopener noreferrer">Line: beannnn1</a>
            </section>
            {/* ============================ */}
        </div>

    )
} 

export default Contect;