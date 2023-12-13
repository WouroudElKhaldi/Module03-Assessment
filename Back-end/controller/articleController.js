import db from "../models/index.js";
const { ArticleModel } = db;
import sequelize from "sequelize";

export const addArticle = async (req, res) => {
  const { title, category, body, author } = req.body;
  const image = req.file.path;
  try {
    if (!title || !category || !author | !body) {
      return res.json({
        error: "All fields are required",
      });
    }
    if (!image) {
      return res.json({
        error: "Please Upload an image",
      });
    }
    const newArticle = await ArticleModel.create({
      title : title,
      category : category,
      author: author,
      body : body,
      image: image
    }
    );
    if (newArticle) {
      return res.status(200).json({
        message: `New Article ${title} was added successfully`,
        data: newArticle,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error,
    });
  }
};

// get all articles
export const getAllArticles = async (req, res) => {
  try {
    const articles = await ArticleModel.findAll();
    if (articles) {
      return res.status(200).json({
        data: articles,
      });
    } else {
      return res.status(404).json({
        message: "No articles",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error,
    });
  }
};

// get one article by id
export const getOneArticle = async (req, res) => {
  const id = req.body.id;
  try {
    const article = await ArticleModel.findByPk(id);

    if (article) {
      return res.status(200).json({
        data: article,
      });
    } else {
      return res.status(404).json({
        message: "Article not found",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error,
    });
  }
};

// delete an article
export const deleteArticle = async (req, res) => {
  const id = req.body.id;
  try {
    await ArticleModel.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      message: `Article with id: ${id} was deleted successfully`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error,
    });
  }
};

// update article
export const updateArticle = async (req, res) => {
    const id = req.body.id
  const { title, category, body, author } = req.body;
  const image = req.file?.path;

  try {

    const updatedArticle = await ArticleModel.update({
      title,
      category,
      author,
      body,
      image,
    }, {
        where: {id : id}
    });

    if (updatedArticle){
        return res.status(200).json({
            message : `Article with id: ${id} was updated successfully`,
            data : updatedArticle
        })
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error,
    });
  }
};
