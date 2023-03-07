     // ДЗ 44. Promise

// Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) 
//  Якщо знайдено пост, то вивести на сторінку блок з постом і 
//    зробити кнопку для отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.

////////////////////1 variant /////////////////////////
// const apiUrl = 'https://jsonplaceholder.typicode.com';

// const postContainer = document.getElementById('post-container');
// const postIdInput = document.getElementById('post-id-input');
// const searchBtn = document.getElementById('search-btn');

// function displayPost(post) {
//   const postHtml = `
//     <div>
//       <h2>${post.title}</h2>
//       <p>${post.body}</p>
//       <button id="comments-btn-${post.id}" class="comments-btn">Show comments</button>
//       <div id="comments-container-${post.id}" class="comments-container"></div>
//     </div>
//   `;
//   postContainer.innerHTML = postHtml;

//   const commentsBtn = document.getElementById(`comments-btn-${post.id}`);
//   const commentsContainer = document.getElementById(`comments-container-${post.id}`);

//   commentsBtn.addEventListener('click', () => {
//     fetch(`${apiUrl}/posts/${post.id}/comments`)
//       .then(response => response.json())
//       .then(comments => {
//         const commentsHtml = comments.map(comment => `
//           <div>
//             <h4>${comment.name}</h4>
//             <p>${comment.body}</p>
//             <p><em>${comment.email}</em></p>
//           </div>
//         `).join('');
//         commentsContainer.innerHTML = commentsHtml;
//       })
//       .catch(error => console.error(error));
//   });
// }

// searchBtn.addEventListener('click', () => {
//   const postId = postIdInput.value;
//   if (!postId) {
//     alert('Please enter a post ID');
//     return;
//   }
//   fetch(`${apiUrl}/posts/${postId}`)
//     .then(response => response.json())
//     .then(post => {
//       displayPost(post);
//     })
//     .catch(error => console.error(error));
// });


////////////////////2 variant /////////////////////////

// const API = 'https://jsonplaceholder.typicode.com/posts/';

// const form = document.querySelector('.form');
// const post = document.querySelector('.post');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     const searchValue = document.querySelector('.input').value;

//     if (searchValue) {
//         post.classList.remove('d-none');
//         controller(`${API}${searchValue}`)
//             .then(data => {
//                 const div = document.createElement('div');
//                 const title = document.createElement('h3');
//                 const pBody = document.createElement('p');
//                 const btn = document.createElement('button');

//                 div.classList.add('main-post');

//                 btn.addEventListener('click', () => {
//                     controller(`${API}${searchValue}/comments`)
//                         .then(data => {
//                             data.forEach(el => {
//                                 const div = document.createElement('div');
//                                 const body = document.createElement('p');
//                                 const name = document.createElement('h3');

//                                 div.classList.add('post-comments');

//                                 body.innerText = el.body;
//                                 name.innerText = el.name;
//                                 btn.classList.add('d-none');

//                                 div.append(name);
//                                 div.append(body);

//                                 post.append(div);
//                             });
//                         })
//                         .catch(err => console.log(err));
//                 });

//                 btn.innerHTML = 'Comments';
//                 title.innerText = data.title;
//                 pBody.innerText = data.body;

//                 div.append(title);
//                 div.append(pBody);
//                 div.append(btn);

//                 post.append(div);
//             })
//             .catch(err => {
//                 post.classList.add('d-none');
//                 console.log(err);
//             });
//     }
// });

// function controller(url) {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then(response => {
//                 if (response.ok) {
//                     return response.json();
//                 }
//                 reject('Error');
//             })
//             .then(data => resolve(data))
//             .catch(err => reject(err));
//     });
// }

///////////////////////////////////////////////////////////////////////////////////////////

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