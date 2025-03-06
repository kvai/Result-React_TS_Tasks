const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/posts/1/comments';

interface IComment {
    id: number;
    email: string;
}

const getData = (url: string): Promise<IComment[]> => {
    return fetch(url).then((res) => res.json() as Promise<IComment[]>);
};

getData(COMMENTS_URL)
  .then((data) => data.map(({ id, email }) => console.log({ id, email })))
  .catch((error) => console.error('Ошибка:', error));

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */