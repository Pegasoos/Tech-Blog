const createPostHandler = () => {//consider prevent default, test first
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
//need to figure out how to select id for individual post
const deletePostHandler = () => {
    //research data
};

const updatePostHandler = () => {
    const title = document.getElementById('post-title').value.trim();
    const body = document.getElementById('post-body').value.trim();

    if(title && body){
        const response = await fetch('/api/posts/:id', {
            method:'PUT',
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
document.getElementById('create-post-button').addEventListener('click', createPostHandler);
document.getElementById('delete-button').addEventListener('click', deletePostHandler);
document.getElementById('edit-button').addEventListener('click', updatePostHandler);