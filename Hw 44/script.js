     // ДЗ 44. Promise

// Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) 
//  Якщо знайдено пост, то вивести на сторінку блок з постом і 
//    зробити кнопку для отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.

const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const id = input.value;
      if (id > 0 && id < 101) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(post => {

                const postDiv = document.createElement('div');
                postDiv.classList.add('post');
                postDiv.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                `;
            document.body.append(postDiv);

         const btnComments = document.createElement('button');
            btnComments.textContent = 'Comments';
            btnComments.addEventListener('click', () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                    .then(response => response.json())
                    .then(comments => {

                        const commentsDiv = document.createElement('div');
                        commentsDiv.classList.add('comments');
                        comments.forEach(comment => {
                            const commentDiv = document.createElement('div');
                            commentDiv.classList.add('comment');
                            commentDiv.innerHTML = `
                            <h3>${comment.name}</h3>
                            <p>${comment.body}</p>
                            `;
                            commentsDiv.append(commentDiv);
                        });
                        document.body.append(commentsDiv);
                    })
                    .catch(error => console.log(error));
                });
                postDiv.append(btnComments);
            })
            .catch(error => console.log(error));
    } else {
        alert('Enter id from 1 to 100');
    }
});