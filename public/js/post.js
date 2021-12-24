const createPostHandler = () =>{
    const title = document.getElementById('post-title').value.trim();
    const body = document.getElementById('post-body').value.trim();

    if(title && body){
        const response = await fetch('/api/posts', {
            method:'POST',
            body: JSON.stringify({title, body}),
            headers: {'Content-Type':'application/json'}
        });
        if(response.ok){
            console.log('Post Added!')
        }
        else{
            alert(response.statusText)
        }
    }
};