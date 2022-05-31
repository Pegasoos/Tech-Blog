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
            alert("Session may have expires.Try logging back in")
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
            alert("Session may have expired. Try logging back in")
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
        alert("Session may have expired. Try logging back in.")
       }
}
};
const createFormAppear = () =>{
    const createPostForm = document.querySelector('#create-post-form');
    document.querySelectorAll('section').forEach(function(section){section.classList.add('hidden')});
    document.querySelector('#new-post-button').classList.add('hidden');
    createPostForm.classList.remove('hidden');
};
function editFormAppear() {
    document.querySelectorAll('section:not(#past-posts)').forEach(function(section){section.classList.add('hidden')});
    document.querySelector('#new-post-button').classList.add('hidden');
    this.children[0].classList.add('hidden');
    this.children[1].classList.add('hidden');
    this.children[2].classList.remove('hidden');
    this.classList.remove('hidden');
};

document.querySelector('#new-post-button').addEventListener('click', createFormAppear);
document.querySelector('#create-post-button').addEventListener('click', createPostHandler);
document.querySelectorAll('.dash-post').forEach(function(button){button.addEventListener('click', editFormAppear)});
document.querySelectorAll('.delete-button').forEach(function(button){button.addEventListener('click', deletePostHandler)});
document.querySelectorAll('.edit-button').forEach(function(button){button.addEventListener('click', updatePostHandler)});