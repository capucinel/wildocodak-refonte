export const createImage = (img) => {
return `
<div class="col-xs-6 col-sm-4 col-md-2 product-gallery">
  <a href="#${img.id}">
    <img src="${img.url}" class ="image-gallery" />
  </a>
</div>
  <a href="#_" class="lightbox" id="${img.id}">
    <img src="${img.url}">
  </a>
`
}