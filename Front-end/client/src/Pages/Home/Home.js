import { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import styles from "./Home.module.css";
import axios from "axios";

//Page
const Home  = () => {
  useEffect(() => {
    const handleOffline = () => {
      setNetworkError(true);
    };

    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const [articleData, setarticleData] = useState([]);
  const [networkError, setNetworkError] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
        const response = await axios.get(`http://localhost:4500/api/article`);
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
    <>
      <div className={styles.Container}>
        <h1 className={styles.H1}>Latest News</h1>

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
            <h1 style={errorStyle}>News Not Found</h1>
          </div>
        ) : (
          <>
            <article className={styles.Newsletter}>
              {articleData.map((key, index) => (
                <Card
                  key={key._id}
                  first={index === 0}
                  title={key.title}
                  image={key.image}
                  author={key.author}
                  date={key.date}
                  id={key._id}
                ></Card>
              ))}
            </article>
          </>
        )}
      </div>
    </>
  );
};
export default Home ;
