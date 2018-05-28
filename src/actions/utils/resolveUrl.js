import {SEARCH_FIELDS} from "../../components/search/consts";
import {SORT_FIELDS} from "../../components/description/consts";

export const resolveUrl = (searchValue, searchField, sortField) => {
    let params = 'limit=100&sortOrder=asc';
    params = params + `&sortBy=${sortField || SORT_FIELDS.release.name}`;
    if (searchValue) {
        params = params + `&search=${searchValue}&searchBy=${searchField || SEARCH_FIELDS.title.name}`
    }
    return params;
};