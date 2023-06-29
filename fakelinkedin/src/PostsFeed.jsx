
function PostsFeed() {
  
const postsFeedFromFakeApi = [
    {
      id: 1,
      title: "Vous ne devinerez jamais ce qui s'est passé",
      description: "Blablabla bla bla bla bla bla bla bla bla",
      image: "https://picsum.photos/200/300",
      isPublished: true,
      publishedAt: "2021-09-01T12:00:00.000Z",
      author: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
      },
    },
    {
      id: 2,
      title: "Vous ne devinerez jamais ce qui s'est passé 2",
      description: "Blablabla bla bla bla bla bla bla bla bla",
      image: "https://picsum.photos/200/300",
      isPublished: false,
      publishedAt: "2021-09-01T12:00:00.000Z",
      author: {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
      },
    },
    {
      id: 3,
      title: "Vous ne devinerez jamais ce qui s'est passé 3",
      description: "Blablabla bla bla bla bla bla bla bla bla",
      image: "https://picsum.photos/200/300",
      isPublished: true,
      publishedAt: "2021-09-01T12:00:00.000Z",
      author: {
        id: 3,
        firstName: "Jean",
        lastName: "Bon",
      },
    },
    {
      id: 4,
      title: "Vous ne devinerez jamais ce qui s'est passé 4",
      description: "Blablabla bla bla bla bla bla bla bla bla",
      image: "https://picsum.photos/200/300",
      isPublished: true,
      publishedAt: "2021-09-01T12:00:00.000Z",
      author: {
        id: 4,
        firstName: "Json",
        lastName: "Statham",
      },
    },
  ];

  return (
    <div className="posts-container">
      <h2>Derniers articles</h2>
      {postsFeedFromFakeApi.map(element => {
        const date = new Date(element.publishedAt)
      
      return (
        element.isPublished && (
        <article className="post-card">
          <div className="img-post-container"><img src={element.image} alt={element.title} /></div>
          <h3>{element.title}</h3>
          <p className="post-description">{element.description}</p>
          <p>{date.toDateString()} by {element.author.firstName} {element.author.lastName}</p>
        </article>
      ))})}
    </div>
  )
}

export default PostsFeed