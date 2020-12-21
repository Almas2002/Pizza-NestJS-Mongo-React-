import React from'react'
import {Categories, PizzaBlock, SortPoPup} from "../Components";

export const Home = ({data})=>{
    return(
        <div className="container">
            <div className="content__top">
                <Categories items ={['Мясные','Вегетарианские','Гриль','Острые','Закрытые']} onClick ={(name)=>console.log(name)} />
                <SortPoPup/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {data.map((pizza)=><PizzaBlock name={pizza.name} imageUrl ={pizza.imageUrl} price={pizza.price} sizes={pizza.sizes} types ={pizza.types} />)}
            </div>
        </div>
    )
};