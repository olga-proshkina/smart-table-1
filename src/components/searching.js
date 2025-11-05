import {rules, createComparison} from "../lib/compare.js";

export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    let comparator = createComparison([rules.skipEmptyTargetValues()], 
         [rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)]);


    return (data, state, action) => {
            const searchValue = state.search;
            // console.log(state.search);
                if (!searchValue) return data;
        
            return data.filter(item => comparator(item, state));
            }
//         // @todo: #5.2 — применить компаратор
}