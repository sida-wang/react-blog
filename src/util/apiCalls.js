export async function getPostsAll() {
    const response = await fetch("http://localhost:5000/posts/fetch/all");
    if (response.ok) { 
        return response.json();
    }
    else {
        console.log(response.status, response.statusText); 
    }
}

export async function getPostsbyId(id) {
    const response = await fetch(`http://localhost:5000/posts/fetch/${id}`);
    if (response.ok) { 
        return response.json();
    }
    else {
        console.log(response.status, response.statusText); 
    }
}

export async function deletePostbyId(id) {
      const response = await fetch(`http://localhost:5000/posts/delete/${id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        console.log( 'Successfully deleted message' );
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


//TODO getPostsbyTag
