import { useParams } from "react-router-dom";
import ArticleDetails from "../../Components/Article/Article";
import { useState, useEffect } from "react";
import axios from "axios";

//Page
const ArticlePage = () => {
  const { id } = useParams();
  const [articleData, setarticleData] = useState([]);
  const [networkError, setNetworkError] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleOffline = () => {
      setNetworkError(true);
    };

    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (articleData.length === 0) setIsLoading(true);
        if (!navigator.onLine) {
          setNetworkError(true);
          setError(false);
          setIsLoading(false);
          return;
        }
        const response = await axios.get(
          `http://localhost:4500/article`,{
            data : {id : id}
          }
        );
        if (!response.ok) {
          setError(true);
          setIsLoading(false);
          setError(false);
          setNetworkError(false);
        }
        setarticleData(response.data);
        if (articleData) {
          setIsLoading(false);
          setError(false);
          setNetworkError(false);
        }
      } catch (error) {
        if (error.message === "Network request failed") {
          setNetworkError(true);
          setIsLoading(false);
        } else {
          setError(true);
        }
        window.addEventListener("offline", () => {
          setNetworkError(true);
          setError(false);
          setIsLoading(false);
        });
        console.error("API Error: ", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const errorStyle = {
    display: "flex",
    color: "red",
    padding: "10px",
    borderRadius: "5px",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div>
      {isLoading ? (
        <div style={containerStyle}>
          <h1>Loading ...</h1>
        </div>
      ) : networkError ? (
        <div style={containerStyle}>
          <h1 style={errorStyle}>Newtwork Issue</h1>
        </div>
      ) : error ? (
        <div style={containerStyle}>
          <h1 style={errorStyle}>An Error Occured While Fetching </h1>
        </div>
      ) : (
        <>
          <ArticleDetails
            title={articleData.title}
            author={articleData.author}
            date={articleData.date}
            image={articleData.image}
            desc={articleData.description}
            sub={articleData.subtitle}
            subDesc={articleData.subtitleDescription}
            links={articleData.links}
          />
        </>
      )}
    </div>
  );
};
export default ArticlePage;
