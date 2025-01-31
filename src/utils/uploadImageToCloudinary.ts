/* eslint-disable @typescript-eslint/no-explicit-any */
const uploadImage = async (image: any) => {
  const data = new FormData();
  data.append("file", image);
  data.append(
    "upload_preset",
    import.meta.env.VITE_REACT_APP_CLOUDINARY_UPLOAD_PRESET
  );
  data.append(
    "cloud_name",
    import.meta.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME
  );
  data.append("folder", "Cloudinary-React");

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME
      }/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    const res = await response.json();
    console.log(res);
    return res.public_id;
  } catch (error: any) {
    console.log(error);
  }
};

export default uploadImage;
