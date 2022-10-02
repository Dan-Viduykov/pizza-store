import { subtractPizza, addPizza, deletePizza, deleteAllPizzas }from "./basket/slice"
import { changeFilter, changeSotring } from "./filter/slice"
import { setCurrentPage, setItemsLimit, setItemsCount, setPageCount } from "./pagination/slice"
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
    setItemsCount,
    setPageCount,
    setQuery
}