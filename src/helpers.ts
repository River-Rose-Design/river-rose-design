import assetsJSONData from './assets';

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

    let srcS: string;
    if (assetCategory == 'photo') {
      srcS = asset.fileNameS
        ? `/assets/${assetCategory}/${asset.fileNameS}`
        : `/assets/${assetCategory}/${asset.fileName}_s.jpg`;
    } else {
      srcS = asset.fileNameS
        ? `/assets/${assetCategory}/${asset.fileNameS}`
        : `/assets/${assetCategory}/${asset.fileName}_sqt.jpg`;
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
    let srcS: string;
    if (assetCategory == 'photo') {
      srcS = asset.fileNameS
        ? `/assets/${assetCategory}/${asset.fileNameS}`
        : `/assets/${assetCategory}/${asset.fileName}_s.jpg`;
    } else {
      srcS = asset.fileNameS
        ? `/assets/${assetCategory}/${asset.fileNameS}`
        : `/assets/${assetCategory}/${asset.fileName}_sqt.jpg`;
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
