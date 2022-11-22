import { getPostsAll, getPostsById, getTagsAll, getTagsById, getPostsByTag } from "./apiCalls"; 

//Loaders act as wrappers to marry loader inputs to api call inputs

export async function allPostsLoader () {
    return getPostsAll();
}

export async function postsIdLoader ({ params }) {
    return getPostsById(params.id);
}

export async function allTagsLoader () {
    return getTagsAll();
}

export async function tagsIdLoader ({ params }) {
    return getTagsById(params.id);
}

export async function postsByTagLoader ({ params }) {
    return getPostsByTag(params.id);
}