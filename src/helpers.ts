import assetsJSONData from './assets/assets';

export function getAssetsOfCategory(
  assetCategory: 'gd' | 'fine' | 'photo',
  screenWidth: number
) {
  const assets = [];
  const assetsRaw = assetsJSONData.filter(
    (row) => row.category == assetCategory
  );
  for (let i = 0; i < assetsRaw.length; i++) {
    const asset = assetsRaw[i];
    const srcThumb = asset.fileNameThumb
      ? `/src/assets/${assetCategory}/${asset.fileNameThumb}.jpg`
      : `/src/assets/${assetCategory}/${asset.fileName}_thumb.jpg`;
    const srcMedium = asset.fileNameM
      ? `/src/assets/${assetCategory}/${asset.fileNameM}.jpg`
      : `/src/assets/${assetCategory}/${asset.fileName}_m.jpg`;
    const srcFullSize = asset.fileNameFS
      ? `/src/assets/${assetCategory}/${asset.fileNameFS}.jpg`
      : `/src/assets/${assetCategory}/${asset.fileName}_fs.jpg`;
    const srcXL = asset.fileNameXL
      ? `/src/assets/${assetCategory}/${asset.fileNameXL}.jpg`
      : `/src/assets/${assetCategory}/${asset.fileName}_xl.jpg`;
    // Default to XL, for screen sizes greater than 1792px
    let lightBoxImageSrc = srcXL;
    if (screenWidth <= 896) {
      // Medium, for half our laptop screen (896px) or less
      lightBoxImageSrc = srcMedium;
    } else if (screenWidth <= 1792) {
      // Full size, for our laptop screen (1792px) or less
      lightBoxImageSrc = srcFullSize;
    }
    assets.push({
      ...asset,
      srcThumb,
      srcMedium,
      srcFullSize,
      srcXL,
      src: lightBoxImageSrc,
    });
  }
  return assets;
}

export function getAssetsOfType(
  assetCategory: 'gd' | 'fine' | 'photo',
  assetType: 'branding' | 'editorial' | 'promotional',
  screenWidth: number
) {
  const assets = [];
  const assetsRaw = assetsJSONData.filter((row) => row.type == assetType);
  for (let i = 0; i < assetsRaw.length; i++) {
    const asset = assetsRaw[i];
    const srcThumb = asset.fileNameThumb
      ? `/src/assets/${assetCategory}/${asset.fileNameThumb}.jpg`
      : `/src/assets/${assetCategory}/${asset.fileName}_thumb.jpg`;
    const srcMedium = asset.fileNameM
      ? `/src/assets/${assetCategory}/${asset.fileNameM}.jpg`
      : `/src/assets/${assetCategory}/${asset.fileName}_m.jpg`;
    const srcFullSize = asset.fileNameFS
      ? `/src/assets/${assetCategory}/${asset.fileNameFS}.jpg`
      : `/src/assets/${assetCategory}/${asset.fileName}_fs.jpg`;
    const srcXL = asset.fileNameXL
      ? `/src/assets/${assetCategory}/${asset.fileNameXL}.jpg`
      : `/src/assets/${assetCategory}/${asset.fileName}_xl.jpg`;
    // Default to XL, for screen sizes greater than 1792px
    let lightBoxImageSrc = srcXL;
    if (screenWidth <= 896) {
      // Medium, for half our laptop screen (896px) or less
      lightBoxImageSrc = srcMedium;
    } else if (screenWidth <= 1792) {
      // Full size, for our laptop screen (1792px) or less
      lightBoxImageSrc = srcFullSize;
    }
    assets.push({
      ...asset,
      srcThumb,
      srcMedium,
      srcFullSize,
      srcXL,
      src: lightBoxImageSrc,
    });
  }
  return assets;
}

export function getAssetsOfTag(
  assetCategory: 'gd' | 'fine' | 'photo',
  assetTag: string,
  screenWidth: number
) {
  const assets = [];
  const assetsRaw = assetsJSONData.filter(
    (row) => row.tags.indexOf(assetTag) != -1
  );
  for (let i = 0; i < assetsRaw.length; i++) {
    const asset = assetsRaw[i];
    const srcThumb = asset.fileNameThumb
      ? `/src/assets/${assetCategory}/${asset.fileNameThumb}.jpg`
      : `/src/assets/${assetCategory}/${asset.fileName}_thumb.jpg`;
    const srcMedium = asset.fileNameM
      ? `/src/assets/${assetCategory}/${asset.fileNameM}.jpg`
      : `/src/assets/${assetCategory}/${asset.fileName}_m.jpg`;
    const srcFullSize = asset.fileNameFS
      ? `/src/assets/${assetCategory}/${asset.fileNameFS}.jpg`
      : `/src/assets/${assetCategory}/${asset.fileName}_fs.jpg`;
    const srcXL = asset.fileNameXL
      ? `/src/assets/${assetCategory}/${asset.fileNameXL}.jpg`
      : `/src/assets/${assetCategory}/${asset.fileName}_xl.jpg`;
    // Default to XL, for screen sizes greater than 1792px
    let lightBoxImageSrc = srcXL;
    if (screenWidth <= 896) {
      // Medium, for half our laptop screen (896px) or less
      lightBoxImageSrc = srcMedium;
    } else if (screenWidth <= 1792) {
      // Full size, for our laptop screen (1792px) or less
      lightBoxImageSrc = srcFullSize;
    }
    assets.push({
      ...asset,
      srcThumb,
      srcMedium,
      srcFullSize,
      srcXL,
      src: lightBoxImageSrc,
    });
  }
  return assets;
}
