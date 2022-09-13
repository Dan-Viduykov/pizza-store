import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as AllActions from "@/store/actions"

// TODO переделать так, чтобы работало коректное разделение кода, как объяснял Ulbi_TV

export const useActions = () => {
    const dispatch = useDispatch();

    return {...bindActionCreators(AllActions, dispatch), dispatch}
}