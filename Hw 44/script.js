// ДЗ 44. Promise

// Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) 
//  Якщо знайдено пост, то вивести на сторінку блок з постом і 
//    зробити кнопку для отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.

const apiUrl = 'https://jsonplaceholder.typicode.com';

const postContainer = document.getElementById('post-container');
const postIdInput = document.getElementById('post-id-input');
const searchBtn = document.getElementById('search-btn');

function displayPost(post) {
  const postHtml = `
    <div>
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <button id="comments-btn-${post.id}" class="comments-btn">Show comments</button>
      <div id="comments-container-${post.id}" class="comments-container"></div>
    </div>
  `;
  postContainer.innerHTML = postHtml;

  const commentsBtn = document.getElementById(`comments-btn-${post.id}`);
  const commentsContainer = document.getElementById(`comments-container-${post.id}`);

  commentsBtn.addEventListener('click', () => {
    fetch(`${apiUrl}/posts/${post.id}/comments`)
      .then(response => response.json())
      .then(comments => {
        const commentsHtml = comments.map(comment => `
          <div>
            <h4>${comment.name}</h4>
            <p>${comment.body}</p>
            <p><em>${comment.email}</em></p>
          </div>
        `).join('');
        commentsContainer.innerHTML = commentsHtml;
      })
      .catch(error => console.error(error));
  });
}

searchBtn.addEventListener('click', () => {
  const postId = postIdInput.value;
  if (!postId) {
    alert('Please enter a post ID');
    return;
  }
  fetch(`${apiUrl}/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
      displayPost(post);
    })
    .catch(error => console.error(error));
});
