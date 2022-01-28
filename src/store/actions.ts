export enum ActionsType {
  fetchPostsData = "FETCH_POSTS_DATA",
}

export type fetchPostsDataActionType = {
  type: ActionsType.fetchPostsData;
  payload: { a: string; b: string };
};

export const fetchPostsDataAction = (data: { a: string; b: string }) => ({
  type: ActionsType.fetchPostsData,
  payload: data,
});
