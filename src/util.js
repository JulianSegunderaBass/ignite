// Media Resize

export const smallImage = (imagePath, size) => {
    // Checking if an image matches either a main or screenshot URL, and
    // replaces the URL to resize it
    if(imagePath) {
        const image = imagePath.match(/media\/screenshots/) 
            ? imagePath.replace("media/screenshots", `media/resize/${size}/-/screenshots`)
            : imagePath.replace('/media/games/', `/media/resize/${size}/-/games/`);
        return image;
    }
    return imagePath;
}