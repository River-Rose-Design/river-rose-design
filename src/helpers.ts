import assetsJSONData from './assets/assets';

export function getAssetsOfCategory(
  assetCategory: 'gd' | 'fine' | 'photo',
  screenWidth: number,
  useSquare = true
) {
  const assets = [];
  const assetsRaw = assetsJSONData.filter(
    (row) => row.active != 'FALSE' && row.category == assetCategory
  );
  for (let i = 0; i < assetsRaw.length; i++) {
    const asset = assetsRaw[i];

    let srcS: string;
    if (useSquare) {
      srcS = asset.fileNameS
        ? `/assets/${assetCategory}/${asset.fileNameS}`
        : `/assets/${assetCategory}/${asset.fileName}_sqt.jpg`;
    } else {
      srcS = asset.fileNameS
        ? `/assets/${assetCategory}/${asset.fileNameS}`
        : `/assets/${assetCategory}/${asset.fileName}_s.jpg`;
    }
    const srcM = asset.fileNameM
      ? `/assets/${assetCategory}/${asset.fileNameM}`
      : `/assets/${assetCategory}/${asset.fileName}_m.jpg`;
    const srcLG = asset.fileNameLG
      ? `/assets/${assetCategory}/${asset.fileNameLG}`
      : `/assets/${assetCategory}/${asset.fileName}_lg.jpg`;
    const srcXL = asset.fileNameXL
      ? `/assets/${assetCategory}/${asset.fileNameXL}`
      : `/assets/${assetCategory}/${asset.fileName}_xl.jpg`;
    // Default to XL, for screen sizes greater than 1792px
    let lightBoxImageSrc = srcXL;
    if (screenWidth <= 896) {
      // Medium, for half our laptop screen (896px) or less
      lightBoxImageSrc = srcM;
    } else if (screenWidth <= 1792) {
      // Full size, for our laptop screen (1792px) or less
      lightBoxImageSrc = srcLG;
    }
    const quality = asset.qualityRating ? parseInt(asset.qualityRating) : 0;
    const showThumbnailInGallery = quality >= 7;
    assets.push({
      ...asset,
      srcS,
      srcM,
      srcLG,
      srcXL,
      src: lightBoxImageSrc,
      showThumbnailInGallery,
    });
  }
  return assets.sort(
    (a, b) => parseInt(b.qualityRating) - parseInt(a.qualityRating)
  );
}

export function getAssetsOfTag(
  assetCategory: 'gd' | 'fine' | 'photo',
  assetTag: string,
  screenWidth: number,
  useSquare = true
) {
  const assets = [];
  const assetsRaw = assetsJSONData.filter(
    (row) =>
      row.active != 'FALSE' &&
      row.category == assetCategory &&
      !!row.tags &&
      row.tags.indexOf(assetTag) != -1
  );
  for (let i = 0; i < assetsRaw.length; i++) {
    const asset = assetsRaw[i];
    let srcS: string;
    if (useSquare) {
      srcS = asset.fileNameS
        ? `/assets/${assetCategory}/${asset.fileNameS}`
        : `/assets/${assetCategory}/${asset.fileName}_sqt.jpg`;
    } else {
      srcS = asset.fileNameS
        ? `/assets/${assetCategory}/${asset.fileNameS}`
        : `/assets/${assetCategory}/${asset.fileName}_s.jpg`;
    }
    const srcM = asset.fileNameM
      ? `/assets/${assetCategory}/${asset.fileNameM}`
      : `/assets/${assetCategory}/${asset.fileName}_m.jpg`;
    const srcLG = asset.fileNameLG
      ? `/assets/${assetCategory}/${asset.fileNameLG}`
      : `/assets/${assetCategory}/${asset.fileName}_lg.jpg`;
    const srcXL = asset.fileNameXL
      ? `/assets/${assetCategory}/${asset.fileNameXL}`
      : `/assets/${assetCategory}/${asset.fileName}_xl.jpg`;
    // Default to XL, for screen sizes greater than 1792px
    let lightBoxImageSrc = srcXL;
    if (screenWidth <= 896) {
      // Medium, for half our laptop screen (896px) or less
      lightBoxImageSrc = srcM;
    } else if (screenWidth <= 1792) {
      // Full size, for our laptop screen (1792px) or less
      lightBoxImageSrc = srcLG;
    }
    const quality = asset.qualityRating ? parseInt(asset.qualityRating) : 0;
    const showThumbnailInGallery = quality >= 7;
    assets.push({
      ...asset,
      srcS,
      srcM,
      srcLG,
      srcXL,
      src: lightBoxImageSrc,
      showThumbnailInGallery,
    });
  }
  return assets.sort(
    (a, b) => parseInt(b.qualityRating) - parseInt(a.qualityRating)
  );
}
