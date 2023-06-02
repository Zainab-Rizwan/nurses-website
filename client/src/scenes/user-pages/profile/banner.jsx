import React from 'react';
import { useTheme } from '@emotion/react';
import { Edit } from '@mui/icons-material';
import { Typography, Avatar, Box, Divider } from '@mui/material';
import Images from 'constants/ImgConstants';
import './index.scss';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';

const Banner = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [bannerPicture, setBannerPicture] = useState(null);
  const [openBannerDialog, setOpenBannerDialog] = useState(false);
  const [openAvatarDialog, setOpenAvatarDialog] = useState(false);

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

  const handleBannerPictureChange = (event) => {
    const file = event.target.files[0];
    setBannerPicture(URL.createObjectURL(file));
  };

  const handleBannerClick = () => {
    setOpenBannerDialog(true);
  };

  const handleCloseBannerDialog = () => {
    setOpenBannerDialog(false);
  }; 
  
  const handleAvatarClick = () => {
    setOpenAvatarDialog(true);
  };

  const handleCloseAvatarDialog = () => {
    setOpenAvatarDialog(false);
  };

  const handleRemovePicture = () => {
    setProfilePicture(null);
  };

  const handleRemoveBannerPicture = () => {
    setBannerPicture(null);
  };
  const theme = useTheme();
  const mainBlue = theme.palette.primary.main;

  return (
    <div>
      <Box
        style={{
          position: 'relative',
          width: '100%',
          height: '250px',
          backgroundImage: `url(${bannerPicture || Images.BANNER })`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>

          <Box >
          <IconButton
            size="medium"
            sx={{
              position: 'absolute',
              top: '1.75rem',
              right: '2rem',
              backgroundColor:"#fff",
              color: mainBlue,
              zIndex: 1,
              boxShadow: theme.shadows[5],
              '&:hover': {backgroundColor: "#fff", color: "#103d49" }}}
            onClick={handleBannerClick}>
            <Edit />
          </IconButton>
          </Box>

          <Avatar
            alt="User Profile Picture"
            src={profilePicture}
            sx={{
              position: 'absolute',
              left: '20%',
              transform: 'translateX(-50%) translateY(35%)',
              top: '50%',
              width: '125px',
              height: '125px',
              border: '8px solid #fff',
              zIndex: 1,
              cursor: 'pointer'}}
          onClick={handleAvatarClick}/>
        </Box>

        <input
          accept="image/*"
          id="profile-picture-input"
          type="file"
          style={{ display: 'none' }}
          onChange={handlePictureChange}
        />

        <Dialog open={openAvatarDialog} onClose={handleCloseAvatarDialog} PaperProps={{ sx: { width: '450px', maxWidth: '90vw' } }}>
        <DialogTitle>
          <IconButton
            onClick={handleCloseAvatarDialog}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar
            alt="User Profile Picture"
            src={profilePicture}
            sx={{
              width: '200px',
              height: '200px',
              border: '2px solid #fff',
              mt:2
            }}
          />
          <Divider sx={{ width: '100%', mt: "2rem", mb: "12px" }} />
          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton component="label" htmlFor="profile-picture-input-dialog" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: "5rem" }}>
              <AddPhotoAlternateIcon />
              <Typography variant="caption">Upload</Typography>
              <input
                accept="image/*"
                id="profile-picture-input-dialog"
                type="file"
                style={{ display: 'none' }}
                onChange={handlePictureChange}
              />
            </IconButton>
            <IconButton onClick={handleRemovePicture} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ml: "5rem" }}>
              <DeleteIcon />
              <Typography variant="caption">Delete</Typography>
            </IconButton>
          </Box>
        </DialogContent>
        </Dialog>

        <Dialog open={openBannerDialog} onClose={handleCloseBannerDialog} PaperProps={{ sx: { width: '600px', maxWidth: '90vw' } }}>
              <DialogTitle>
                <IconButton
                  onClick={handleCloseBannerDialog}
                  sx={{ position: 'absolute', top: 8, right: 8}}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent sx={{mt: 2}}>
                <img src={bannerPicture || Images.BANNER} alt="Banner" style={{ width: '100%', height: '150px'}} />
                <Divider sx={{ width: '100%', mt: "2rem", mb: "12px" }} />
                <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <IconButton
                    component="label"
                    htmlFor="banner-picture-input-dialog"
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      mr: '2rem',
                    }}
                  >
                    <AddPhotoAlternateIcon />
                    <Typography variant="caption">Upload</Typography>
                    <input
                      accept="image/*"
                      id="banner-picture-input-dialog"
                      type="file"
                      style={{ display: 'none' }}
                      onChange={handleBannerPictureChange}
                    />
                  </IconButton>
          
                  <IconButton
                    onClick={handleRemoveBannerPicture}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      ml: '2rem',
                    }}
                  >
                    <DeleteIcon />
                    <Typography variant="caption">Delete</Typography>
                  </IconButton>
                </Box>
              </DialogContent>
        </Dialog>

        

    </div>
  );
};

export default Banner;


