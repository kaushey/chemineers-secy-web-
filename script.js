document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');
    const commentReply = document.getElementById('comment-reply');

    // Dark Mode Toggle
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Add comment
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newComment = document.createElement('li');
        newComment.textContent = commentInput.value;
        
        commentsList.appendChild(newComment);
        
        commentInput.value = '';
        
        // Show reply message
        commentReply.classList.remove('hidden');
        
        // Hide the message after 3 seconds
        setTimeout(() => {
            commentReply.classList.add('hidden');
        }, 3000);
    });
});
