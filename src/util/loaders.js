import { getPostsAll, getPostsbyId } from "./apiCalls"; 

export async function allPostsLoader () {
    return getPostsAll();
}

export async function postsIdLoader ({ params }) {
    return getPostsbyId(params.id);
}