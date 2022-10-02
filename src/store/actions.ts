import { subtractPizza, addPizza, deletePizza, deleteAllPizzas }from "./basket/slice"
import { changeFilter, changeSotring } from "./filter/slice"
import { setCurrentPage, setItemsLimit } from "./pagination/slice"
import { setQuery } from "./search/slice"

export {
    subtractPizza,
    addPizza,
    deletePizza,
    deleteAllPizzas,
    changeFilter,
    changeSotring,
    setCurrentPage,
    setItemsLimit,
    setQuery
}