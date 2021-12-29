const createPostHandler = async () => {
    const title = document.querySelector('#post-title').value.trim();
    const body = document.querySelector('#post-body').value.trim();

    if(title && body){
        const response = await fetch('/api/posts/', {
            method:'POST',
            body: JSON.stringify({title, body}),
            headers: {'Content-Type':'application/json'},
        });
        if(response.ok){
            document.location.replace('/dashboard')
        }
        else{
            alert(response.statusText)
        }
    }
};
//need to figure out how to select id for individual post for delete
const deletePostHandler = async () => {
    //research data
};

const updatePostHandler = async () => {
    const title = document.getElementById('post-title').value.trim();
    const body = document.getElementById('post-body').value.trim();

    if(title && body){
        const response = await fetch('/api/posts/:id', {
            method:'PUT',
            body: JSON.stringify({title, body}),
            headers: {'Content-Type':'application/json'}
        });
        if(response.ok){
            document.location.replace('/dashboard');
        }
        else{
            alert(response.statusText)
        }
}
};
document.querySelector('#create-post-button').addEventListener('click', createPostHandler);
document.querySelector('#delete-button').addEventListener('click', deletePostHandler);
document.querySelector('#edit-button').addEventListener('click', updatePostHandler);