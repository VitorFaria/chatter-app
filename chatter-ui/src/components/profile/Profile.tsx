import { Avatar, Button, Stack, Typography } from "@mui/material";
import { UploadFile } from "@mui/icons-material";
import { useGetMe } from "../../hooks/useGetMe";
import { API_URL } from "../../constants/urls";
import { snackVar } from "../../constants/snack";

const Profile = () => {
  const me = useGetMe();

  const handleUploadFile = async (event: any) => {
    try {
      const formData = new FormData();
      formData.append("file", event.target.files[0]);
      const res = await fetch(`${API_URL}/users/image`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to upload image");
      }
      snackVar({ message: "Image uploaded successfully", type: "success" });
    } catch (error) {
      snackVar({ message: "Error while uploading image", type: "error" });
    }
  }

  return (
    <Stack 
      spacing={6}
      sx={{
        marginTop: "2.5rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1">{me.data?.me.username}</Typography>
      <Avatar sx={{ width: 256, height: 256 }}/>
      <Button 
        component="label" 
        variant="contained" 
        size="large" 
        startIcon={<UploadFile/>}
      >
        Upload image
        <input type="file" hidden onChange={handleUploadFile} />
      </Button>
    </Stack>
  );
}

export default Profile;