export async function getPostsAll() {
    const response = await fetch("http://localhost:5000/posts/fetch/all");
    if (response.ok) { 
        return response.json();
    }
    else {
        console.log(response.status, response.statusText); 
    }
}

export async function getPostsById(id) {
    const response = await fetch(`http://localhost:5000/posts/fetch/${id}`);
    if (response.ok) { 
        return response.json();
    }
    else {
        console.log(response.status, response.statusText); 
    }
}

export async function getPostsByTag(id) {
    const response = await fetch(`http://localhost:5000/posts/fetch/bytag/${id}`);
    if (response.ok) { 
        return response.json();
    }
    else {
        console.log(response.status, response.statusText); 
    }
}

export async function deletePostById(id) {
      const response = await fetch(`http://localhost:5000/posts/delete/${id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        console.log( 'Successfully deleted post' );
      }
      else {
        console.log( response.status, response.statusText);
      }
      
  }

export async function createPost(body) {
        const response = await fetch("http://localhost:5000/posts/create", {
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

export async function updatePost(id, body) {
    const response = await fetch(`http://localhost:5000/posts/update/${id}`, {
            method: "PUT",
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



export async function createTag(body) {
    const response = await fetch(`http://localhost:5000/tags/create`, {
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


export async function getTagsAll() {
    const response = await fetch(`http://localhost:5000/tags/fetch`);
    if (response.ok) {
        return response.json();
    }
    else {
        console.log( response.status, response.statusText);
    }
}

export async function getTagsById(id) {
    const response = await fetch(`http://localhost:5000/tags/fetch/${id}`);
    if (response.ok) {
        return response.json();
    }
    else {
        console.log( response.status, response.statusText);
    }
}

export async function updateTag(id, body) {
    const response = await fetch(`http://localhost:5000/tags/update/${id}`, {
        method: "PUT",
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


export async function deleteTagById(id) {
    const response = await fetch(`http://localhost:5000/tags/delete/${id}`, {
      method: "DELETE"
    });
    if (response.ok) {
      console.log( 'Successfully deleted tag' );
    }
    else {
      console.log( response.status, response.statusText);
    }
    
}
//TODO getPostsbyTag