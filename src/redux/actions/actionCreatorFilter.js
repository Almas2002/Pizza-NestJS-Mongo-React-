export const setSortBy =(name)=>({
    type:'SET_SORT_BY',
    payload:name,
});
export const setCategory= canIndex=>({
    type:'SET_CATEGORY',
    payload: canIndex
});
