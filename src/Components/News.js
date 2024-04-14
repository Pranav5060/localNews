import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Grid, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Newsdata from './Newsdata.json';

// Custom styled Card component for the glassmorphism effect
const GlassCard = styled(Card)({
  backdropFilter: 'blur(20px) saturate(180%)',
  background: 'rgba(255, 255, 255, 0.3)',
  boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
  borderRadius: '10px',
  border: '1px solid rgba( 255, 255, 255, 0.18 )',
  padding: '20px',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
});

const News = () => {
  const [news, setNews] = useState([]);
//  const [city, setCity] = useState('');

//  const handleCityChange = (event) => {
//    setCity(event.target.value);
    // Fetch news whenever the city input changes
 //   fetchNews(event.target.value);
//  };
  useEffect(() => {
    // Set the news data from the imported JSON file
    setNews(Newsdata);
  }, []);

//  const fetchNews = async (cityName) => {
//    try {
//      const response = await axios.get(`https://newsapi.org/v2/everything?q=${cityName}&apiKey=a4275603f85e4b549bc4f608cbfeadd2`);
 //     setNews(response.data.articles);
 //   } catch (error) {
   //   console.error('Error fetching news:', error);
 //   }
 // };

  return (
    <div style={{ padding: '20px' }}>
      <center>
      <h1>Local News</h1>
      </center>
      <Grid container spacing={3} justifyContent="center">
        {news.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <GlassCard>
              <CardMedia
                component="img"
                height="200"
                image={article.urlToImage}
                alt={article.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.description}
                </Typography>
              </CardContent>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default News;
