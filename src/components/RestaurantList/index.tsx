import Loader from "../Loader"
import Restaurant from "../Restaurant"

import * as S from "./styles"

const RestaurantList = ({ restaurants, isLoading }: RestaurantsProps) => {

    if (isLoading) {
        return <Loader />
    }

    return (
        <S.Container>
            <div className="container">
                <S.List>
                    {restaurants.map((rest) => (
                        <Restaurant restaurant={rest} />

                    ))}
                </S.List>
            </div>
        </S.Container>
    )
}

export default RestaurantList