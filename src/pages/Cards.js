import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const cards = [
  {
    title: "Heading",
    img: "https://source.unsplash.com/random",
    text: "This is a media card. You can use this section to describe the content.",
  },
  {
    title: "Heading",
    img: "https://source.unsplash.com/random",
    text: "This is a media card. You can use this section to describe the content.",
  },
  {
    title: "Heading",
    img: "https://source.unsplash.com/random",
    text: "This is a media card. You can use this section to describe the content.",
  },
  {
    title: "Heading",
    img: "https://source.unsplash.com/random",
    text: "This is a media card. You can use this section to describe the content.",
  },
  {
    title: "Heading",
    img: "https://source.unsplash.com/random",
    text: "This is a media card. You can use this section to describe the content.",
  },
  {
    title: "Heading",
    img: "https://source.unsplash.com/random",
    text: "This is a media card. You can use this section to describe the content.",
  },
];

export const Cards = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                sx={{
                  pt: "56.25%",
                }}
                image={card.img}
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography>{card.text}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
