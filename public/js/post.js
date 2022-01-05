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
    const id = e.target.getAttribute('data-id');
    const test = document.querySelectorAll(`[data-id = "${id}"`);
    const title = test[0].value.trim();
    const body = test[1].value.trim();
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
const createForm = () =>{
    const createPostForm = document.querySelector('#create-post-form');
    document.querySelectorAll('section').forEach(function(button){button.classList.add('hidden')});
    document.querySelector('#new-post-button').classList.add('hidden');
    createPostForm.classList.remove('hidden');
};
function editFormAppear() {
    const editForm = this.children[2];
    editForm.classList.remove('hidden');
};

document.querySelectorAll('.dash-post').forEach(function(button){button.addEventListener('click', editFormAppear)});
document.querySelector('#new-post-button').addEventListener('click', createForm);
document.querySelector('#create-post-button').addEventListener('click', createPostHandler);
document.querySelectorAll('.delete-button').forEach(function(button){button.addEventListener('click', deletePostHandler)});
document.querySelectorAll('.edit-button').forEach(function(button){button.addEventListener('click', updatePostHandler)});