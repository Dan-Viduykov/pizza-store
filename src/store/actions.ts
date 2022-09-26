import { changeFilter, changeSotring } from "./filter/filter.slice"
import { changeQuery } from "./search/search.slice"
import { setPage } from "./pagination/pagination.slice"
import { addPizza, removePizza, deletePizza, clearAllPizzas } from "./basket/basket.slice"

export {
    changeFilter,
    changeSotring,
    changeQuery,
    setPage,
    addPizza,
    removePizza, 
    deletePizza, 
    clearAllPizzas
}