//const host = "https://blog-api.sida.dev/"
const host = "http://localhost:3001/"

export async function getPostsAll() {
    const response = await fetch(host + "posts/fetch/all");
    if (response.ok) { 
        return response.json();
    }
    else {
        console.log(response.status, response.statusText); 
    }
}

export async function getPostsById(id) {
    const response = await fetch(host + `posts/fetch/${id}`);
    if (response.ok) { 
        return response.json();
    }
    else {
        console.log(response.status, response.statusText); 
    }
}

export async function getPostsByTag(id) {
    const response = await fetch(host + `posts/fetch/bytag/${id}`);
    if (response.ok) { 
        return response.json();
    }
    else {
        console.log(response.status, response.statusText); 
    }
}

export async function deletePostById(token, id) {
      const response = await fetch(host + `posts/delete/${id}`, {
        headers: {"Authorization": `Bearer ${token}`},
        method: "DELETE"
      });
      if (response.ok) {
        console.log( 'Successfully deleted post' );
      }
      else {
        console.log( response.status, response.statusText);
      }
      
  }

export async function createPost(token, body) {
        const response = await fetch(host + "posts/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" , "Authorization": `Bearer ${token}`},
                body: JSON.stringify(body)
            });
        if (response.ok) {
            return response.json();
        }
        else {
            console.log( response.status, response.statusText);
        }
}

export async function updatePost(token, id, body) {
    const response = await fetch(host + `posts/update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" , "Authorization": `Bearer ${token}`},
            body: JSON.stringify(body)
        });
    if (response.ok) {
        return response.json();
    }
    else {
        console.log( response.status, response.statusText);
    }
}



export async function createTag(token, body) {
    const response = await fetch(host + `tags/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" , "Authorization": `Bearer ${token}`},
            body: JSON.stringify(body)
        });
    if (response.ok) {
        return response.json();
    }
    else {
        console.log( response.status, response.statusText);
    }
}


export async function getTagsAll() {
    const response = await fetch(host + `tags/fetch`);
    if (response.ok) {
        return response.json();
    }
    else {
        console.log( response.status, response.statusText);
    }
}

export async function getTagsById(id) {
    const response = await fetch(host + `tags/fetch/${id}`);
    if (response.ok) {
        return response.json();
    }
    else {
        console.log( response.status, response.statusText);
    }
}


export async function getTagsByPostId(id) {
    const response = await fetch(host + `tags/fetch/bypost/${id}`);
    if (response.ok) {
        return response.json();
    }
    else {
        console.log( response.status, response.statusText);
    }
}

export async function updateTag(token, id, body) {
    const response = await fetch(host + `tags/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" , "Authorization": `Bearer ${token}`},
        body: JSON.stringify(body)
    });
    if (response.ok) {
        return response.json();
    }
    else {
        console.log( response.status, response.statusText);
    }
}


export async function deleteTagById(token, id) {
    const response = await fetch(host + `tags/delete/${id}`, {
        headers: {"Authorization": `Bearer ${token}`},
        method: "DELETE"
    });
    if (response.ok) {
      console.log( 'Successfully deleted tag' );
    }
    else {
      console.log( response.status, response.statusText);
    }
    
}


export async function updatePostTags(token, id, body) {
    const response = await fetch(host + `posts/linktags/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify(body)
    });
    if (response.ok) {
        const jsonData = await response.json();
        console.log(`Added: ${jsonData.added}; Deleted: ${jsonData.deleted};`)
    }
    else {
        console.log( response.status, response.statusText);
    }
}


export async function loginUser(body) {
    const response = await fetch(host + `auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    if (response.ok) {
        return response.json();
    }
    else {
        console.log( response.status, response.statusText);
    }
}

export async function checkToken(token) {
    const response = await fetch(host + `auth/check`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
    });
    if (response.ok) {
        return response.json();
    }
    else {
        console.log( response.status, response.statusText);
    }
}