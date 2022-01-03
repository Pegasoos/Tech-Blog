const commentHandler = async (e) =>{
    const body = document.querySelector('#comment-body').value.trim();
    const post_id = e.target.getAttribute('data-id');
    console.log(e.target.getAttribute('data-id'));
    if(body){
        const response = await fetch('/api/comments/', {
            method:'POST',
            body: JSON.stringify({body, post_id}),
            headers: { 'Content-Type':'application/json'},
        });
        if(response.ok){
            document.location.replace(`/post/${post_id}`)
        }
        else{
            alert(response.statusText)
        }
    }
};
document.querySelector('#comment-button').addEventListener('click', commentHandler);