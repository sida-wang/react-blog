import { getPostsAll, getPostsById, getTagsAll, getTagsById, getPostsByTag, getTagsByPostId } from "./apiCalls"; 

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

//
export async function EditPostLoader({ params }) {
    let ret = {};
    ret['postData'] = await getPostsById(params.id);
    ret['selectedTags'] = await getTagsByPostId(params.id);
    ret['tags'] = await getTagsAll();
    return ret
}