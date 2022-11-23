import { getPostsAll, getPostsById, getTagsAll, getTagsById, getPostsByTag, getTagsByPostId } from "./apiCalls"; 
import { AuthContext } from "../App";
import { useContext } from "react";
import { redirect } from "react-router-dom";
import { getSuggestedQuery } from "@testing-library/react";

//Loaders act as wrappers to marry loader inputs to api call inputs

export async function allPostsLoader () {
    let ret = {};
    ret['posts'] = await getPostsAll();
    ret['filters'] = await getTagsAll();
    return ret
}

export async function PostsLayoutLoader ({ params }) {
    let ret = {};
    ret['posts'] = await getPostsById(params.id);
    ret['filters'] = await getTagsByPostId(params.id);
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

export async function NewPostsLoader() {
    let ret = {};
    ret['tags'] = await getTagsAll();
    return ret
}
