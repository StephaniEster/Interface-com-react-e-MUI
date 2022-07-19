import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";

import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar
            alt="Remy Sharp"
            src="https://static-cse.canva.com/blob/759723/DrobotDeanCanva.jpg"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Paul Walker"
        subheader="July 19, 2022"
      />
      <CardMedia
        component="img"
        height="700"
        image="https://images.pexels.com/photos/11942783/pexels-photo-11942783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Desde um festival do gelo mongol às casas flutuantes do lago Titicaca,
          desfrute de algumas das vistas mais impressionantes que o nosso
          planeta tem para oferecer.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            color="error"
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
        </IconButton>
        <IconButton aria-label="bookmark">
          <Checkbox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon sx={{ color: "gold" }} />}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
