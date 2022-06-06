
const Header = () => {
    const headerImg = [{
        "id": 1,
        "img": "./assets/header-1.webp"
    },
    {
        "id": 2,
        "img": "./assets/header-2.jpg"
    },
    {
        "id": 3,
        "img": "./assets/header-3.webp"
    },]
    return <section className="header" >
        {headerImg.map((item) => {
            return <img key={item.id} src={item.img} alt="Header Img" />
        })}
    </section>
}

export default Header;