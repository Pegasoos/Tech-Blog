const createPostHandler = async () => {
    const title = document.querySelector('.post-title').value.trim();
    const body = document.querySelector('.post-body').value.trim();

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

const deletePostHandler = async (e) => {
    if(e.target.hasAttribute('data-id')) {
        const id = e.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if(response.ok){
            document.location.replace('/dashboard');
        } else{
            alert('Failed to delete post.')
        }
    }
};

const updatePostHandler = async (e) => {
    const title = document.querySelector('#edit-post-title').value.trim();
    const body = document.querySelector('#edit-post-body').value.trim();
    const id = e.target.getAttribute('data-id');
    if(title && body){
        const response = await fetch(`/api/posts/${id}`, {
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