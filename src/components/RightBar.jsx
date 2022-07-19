import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
    },
  },
}));

const RightBar = () => {
  return (
    <>
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed">
          <Typography variant="h6" fontWeight={100}>
            Amigos Online
          </Typography>
          <AvatarGroup max={5}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Remy Sharp"
                src="https://i.pinimg.com/236x/6a/d7/cf/6ad7cf9a272ad4b90d12df140848c757.jpg"
              />
            </StyledBadge>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Remy Sharp"
                src="https://i.pinimg.com/564x/b5/7c/db/b57cdbc9f87989a2c480195c60475d45.jpg"
              />
            </StyledBadge>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Remy Sharp"
                src="https://i.pinimg.com/564x/94/8a/f9/948af9969e3cc68c9c01f0dd9f733ce2.jpg"
              />
            </StyledBadge>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Remy Sharp"
                src="https://i.pinimg.com/236x/f7/f0/c3/f7f0c3a27feca210f8b53edc33936ad8.jpg"
              />
            </StyledBadge>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Remy Sharp"
                src="https://i.pinimg.com/564x/2a/a9/16/2aa916861e24aa68d8291ec4de91e493.jpg"
              />
            </StyledBadge>
          </AvatarGroup>

          <Typography variant="h6" fontWeight={100}>
            Posts em destaque
          </Typography>

          <ImageList >
            <ImageListItem>
              <img
                alt="icecream"
                src="https://cdn.discordapp.com/attachments/950194004648140833/998929124963930173/pexels-jayson-hinrichsen-12635435.jpg?width=405&height=609"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                alt="city"
                src="https://cdn.discordapp.com/attachments/950194004648140833/998929125182021742/pexels-malik-jones-11969709.jpg?width=406&height=609"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                alt="landscape"
                src="https://cdn.discordapp.com/attachments/950194004648140833/998929125689544815/pexels-tomas-anunziata-3876332.jpg?width=402&height=609"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                alt="coffe"
                src="https://cdn.discordapp.com/attachments/950194004648140833/998929125404323880/pexels-yuliia-tretynychenko-11769686.jpg?width=406&height=609"
              />
            </ImageListItem>
          </ImageList>
        </Box>
      </Box>
    </>
  );
};

export default RightBar;
