

const Shimmer = ({ image, cards, lines }) => {

    const cardsArr = [];
    const linesArr = [];

    for (let i = 0; i < cards; i++) {
        cardsArr.push({ card: i });
    }
    for (let i = 0; i < lines; i++) {
        linesArr.push({ line: i });
    }

    // <div className="shimmer__line" key={index}></div>

    return (
        <>
            {
                cardsArr.map((card, index) =>
                    <div className="shimmer__card" key={index}>
                        {
                            image ? <div className="shimmer__img"></div> : null
                        }
                        <div className="shimmer__info">
                            {
                                linesArr.map((line, index) =>
                                    <div className="shimmer__line" key={index}></div>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Shimmer