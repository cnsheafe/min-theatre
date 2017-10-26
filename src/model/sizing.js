/**
 * 
 * @param {string} newSize - Can be "small", "medium", "large"
 */
export function changeThumbnailSize(context, newSize) {
  let sizeEnum;
  switch (newSize) {
    case "small":
      sizeEnum = 0;
      break;
    case "medium":
      sizeEnum = 1;
      break;
    case "large":
      sizeEnum = 2;
      break;
    default:
      sizeEnum = -1;
      break;
  }
  context.commit("updateThumbnailSize", sizeEnum)
}

export function updateThumbnailSize(state, size) {
  state.thumbnailSize = size;
}