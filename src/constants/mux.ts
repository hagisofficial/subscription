const getMuxThumbnail = (playbackId: string) =>
  `https://image.mux.com/${playbackId}/thumbnail.jpg?time=0`

export const MUX_PLAYBACK_IDS = {
  desktop: '015xBMupacr6R144pXV00tbVIMFh7ywUHiSXK007kFWh800',
  mobile: '3reOyUwJg52BPcNf69KNQzMvegXBpUtcGngKMKn5DHE',
} as const

export const MUX_THUMBNAILS = {
  desktop: getMuxThumbnail(MUX_PLAYBACK_IDS.desktop),
  mobile: getMuxThumbnail(MUX_PLAYBACK_IDS.mobile),
} as const
