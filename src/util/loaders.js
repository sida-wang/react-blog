import { getPostsAll, getPostsById, getTagsAll, getTagsById, getPostsByTag, getTagsByPostId } from "./apiCalls"; 

//Loaders act as wrappers to marry loader inputs to api call inputs

export async function allPostsLoader () {
    let ret = {};
    ret['posts'] = await getPostsAll();
    return ret
}

export async function PostsLayoutLoader ({ params }) {
    let ret = {};
    ret['posts'] = await getPostsById(params.id);
    return ret
}

export async function allTagsLoader () {
    return getTagsAll();
}

export async function EditTagLoader ({ params }) {
    let ret = {};
    ret['tag'] = await getTagsById(params.id);
    return ret
}

export async function TagsLayoutLoader ({ params }) {
    let ret = {};
    ret['postsData'] = await getPostsByTag(params.id);
    ret['tag'] = await getTagsById(params.id);
    return ret
}

export async function EditPostLoader({ params }) {
    let ret = {};
    ret['postData'] = await getPostsById(params.id);
    ret['selectedTags'] = await getTagsByPostId(params.id);
    ret['tags'] = await getTagsAll();
    return ret
}