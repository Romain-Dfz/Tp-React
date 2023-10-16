import React, { useState} from 'react';

function AdminPage({ onAddArticle }) {
  const [article, setArticle] = useState({
    title: '',
    description: '',
    price: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleAddArticle = () => {
    // Vérifiez que les champs requis sont remplis
    if (article.title && article.description && article.price > 0) {
      onAddArticle(article);
      setArticle({ title: '', description: '', price: 0 });
    }
  };

  return (
    <div>
      <h1>Page admin</h1>
      <form>
        <div className="form-group">
          <label htmlFor="title">Titre :</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={article.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description :</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={article.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Prix :</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={article.price}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddArticle}
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default AdminPage;
