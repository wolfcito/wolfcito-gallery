/* eslint-disable no-unused-vars */
export interface ImageProps {
  id: number
  height: string
  width: string
  public_id: string
  format: string
  blurDataUrl?: string
}

export interface SharedModalProps {
  readonly index: number
  readonly images?: ImageProps[]
  readonly currentPhoto?: ImageProps
  readonly changePhotoId: (newVal: number) => void
  readonly closeModal: () => void
  readonly navigation: boolean
  readonly direction?: number
}
