const getMuxThumbnail = (playbackId: string) =>
  `https://image.mux.com/${playbackId}/thumbnail.jpg?time=0`

export const MUX_PLAYBACK_IDS = {
  desktop: 'LwxMUah00zjUpk8dkpFTcKPGNPdwTzdO4S2Tk8HtEtUA',
  mobile: '17329Yo00l56JCrEN1rOCQ6J200cDdcTSW9yy94gcYCr00',
} as const

export const MUX_THUMBNAILS = {
  desktop: getMuxThumbnail(MUX_PLAYBACK_IDS.desktop),
  mobile: getMuxThumbnail(MUX_PLAYBACK_IDS.mobile),
} as const
