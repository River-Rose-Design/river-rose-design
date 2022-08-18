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
    const srcS = asset.fileNameS
      ? `/src/assets/${assetCategory}/${asset.fileNameS}`
      : `/src/assets/${assetCategory}/${asset.fileName}_s.jpg`;
    const srcM = asset.fileNameM
      ? `/src/assets/${assetCategory}/${asset.fileNameM}`
      : `/src/assets/${assetCategory}/${asset.fileName}_m.jpg`;
    const srcLG = asset.fileNameLG
      ? `/src/assets/${assetCategory}/${asset.fileNameLG}`
      : `/src/assets/${assetCategory}/${asset.fileName}_lg.jpg`;
    const srcXL = asset.fileNameXL
      ? `/src/assets/${assetCategory}/${asset.fileNameXL}`
      : `/src/assets/${assetCategory}/${asset.fileName}_xl.jpg`;
    // Default to XL, for screen sizes greater than 1792px
    let lightBoxImageSrc = srcXL;
    if (screenWidth <= 896) {
      // Medium, for half our laptop screen (896px) or less
      lightBoxImageSrc = srcM;
    } else if (screenWidth <= 1792) {
      // Full size, for our laptop screen (1792px) or less
      lightBoxImageSrc = srcLG;
    }
    assets.push({
      ...asset,
      srcS,
      srcM,
      srcLG,
      srcXL,
      src: lightBoxImageSrc,
    });
  }
  return assets.sort(
    (a, b) => parseInt(b.qualityRating) - parseInt(a.qualityRating)
  );
}

export function getAssetsOfTag(
  assetCategory: 'gd' | 'fine' | 'photo',
  assetTag: string,
  screenWidth: number
) {
  const assets = [];
  const assetsRaw = assetsJSONData.filter(
    (row) =>
      row.category == assetCategory &&
      !!row.tags &&
      row.tags.indexOf(assetTag) != -1
  );
  for (let i = 0; i < assetsRaw.length; i++) {
    const asset = assetsRaw[i];
    const srcS = asset.fileNameS
      ? `/src/assets/${assetCategory}/${asset.fileNameS}`
      : `/src/assets/${assetCategory}/${asset.fileName}_s.jpg`;
    const srcM = asset.fileNameM
      ? `/src/assets/${assetCategory}/${asset.fileNameM}`
      : `/src/assets/${assetCategory}/${asset.fileName}_m.jpg`;
    const srcLG = asset.fileNameLG
      ? `/src/assets/${assetCategory}/${asset.fileNameLG}`
      : `/src/assets/${assetCategory}/${asset.fileName}_lg.jpg`;
    const srcXL = asset.fileNameXL
      ? `/src/assets/${assetCategory}/${asset.fileNameXL}`
      : `/src/assets/${assetCategory}/${asset.fileName}_xl.jpg`;
    // Default to XL, for screen sizes greater than 1792px
    let lightBoxImageSrc = srcXL;
    if (screenWidth <= 896) {
      // Medium, for half our laptop screen (896px) or less
      lightBoxImageSrc = srcM;
    } else if (screenWidth <= 1792) {
      // Full size, for our laptop screen (1792px) or less
      lightBoxImageSrc = srcLG;
    }
    assets.push({
      ...asset,
      srcS,
      srcM,
      srcLG,
      srcXL,
      src: lightBoxImageSrc,
    });
  }
  return assets.sort(
    (a, b) => parseInt(b.qualityRating) - parseInt(a.qualityRating)
  );
}
