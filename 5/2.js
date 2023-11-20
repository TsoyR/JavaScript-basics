'use strict';

/*
Необходимо из объекта post, вывести значения, к которым приписан комментарий, 
в консоль.
*/

const post = {
  author: 'John', // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: 'Alex',
      text: 'lorem ipsum',
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: 'Jane',
      text: 'lorem ipsum 2', // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

console.log(`author ${post.author}`);
console.log(`dislike - ${post.comments[0].rating.dislikes}`);
for (let i = 1; i < post.comments.length; i++) {
  console.log(`userId - ${post.comments[i].userId}`);
  console.log(`text -${post.comments[i].text}`);
}
