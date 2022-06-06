const Browse = () => {
    const imgs = [
        { "id": 1, "img": "./assets/action.png", "name": "Action" },
        { "id": 2, "img": "./assets/strategy.png", "name": "Strategy" },
        { "id": 3, "img": "./assets/racing.png", "name": "Racing" },
        { "id": 4, "img": "./assets/adventure.png", "name": "Adventure" },
        { "id": 5, "img": "./assets/horror.png", "name": "Horror" },
    ]
    return <section className="browseSection">
        <div className="browseContainer">
            <h2>Browse by Game Genre</h2>
            <p>
                Are you an RPG fan or strategy game lover?
                Or maybe you spend hours playing FPS shooters? In this section,
                you will find the best video games categorized into different genres
            </p>
            <div>
                {imgs.map((item) => {
                    return <div key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <span>{item.name}</span>
                    </div>
                })}
            </div>
        </div>
    </section>
}
export default Browse;