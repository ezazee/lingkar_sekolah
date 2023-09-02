interface Spasi {
  spasi_2: number;
  spasi_4: number;
  spasi_8: number;
  spasi_10: number;
  spasi_12: number;
  spasi_15: number;
  spasi_16: number;
  spasi_18: number;
  spasi_20: number;
  spasi_24: number;
  spasi_28: number;
  spasi_32: number;
  spasi_36: number;
}

export const SPASI: Spasi = {
  spasi_2: 2,
  spasi_4: 4,
  spasi_8: 8,
  spasi_10: 10,
  spasi_12: 12,
  spasi_15: 15,
  spasi_16: 16,
  spasi_18: 18,
  spasi_20: 20,
  spasi_24: 24,
  spasi_28: 28,
  spasi_32: 32,
  spasi_36: 36,
};

interface Warna {
  Black: string;
  BlackRGB10: string;
  Primary: string;
  Secondary: string;
  Grey: string;
  DarkGrey: string;
  White: string;
  WhiteMate: string;
  WhiteMateDark: string;
  WhiteRGBA75: string;
  WhiteRGBA50: string;
  WhiteRGBA32: string;
  WhiteRGBA15: string;
}

export const WARNA: Warna = {
  Black: '#000000',
  BlackRGB10: 'rgba(0,0,0,0.1)',
  Primary: '#064D3B',
  Secondary: '#23B859',
  Grey: '#333333',
  DarkGrey: '#0b0b0b',
  White: '#FFFFFF',
  WhiteMate: 'rgb(238, 238, 238)',
  WhiteMateDark: 'rgb(221, 221, 221)',
  WhiteRGBA75: 'rgba(255,255,255,0.75)',
  WhiteRGBA50: 'rgba(255,255,255,0.50)',
  WhiteRGBA32: 'rgba(255,255,255,0.32)',
  WhiteRGBA15: 'rgba(255,255,255,0.15)',
};

interface Font {
  poppins_black: string;
  poppins_bold: string;
  poppins_extrabold: string;
  poppins_extralight: string;
  poppins_light: string;
  poppins_medium: string;
  poppins_regular: string;
  poppins_semibold: string;
  poppins_thin: string;
}

export const FONT: Font = {
  poppins_black: 'Poppins-Black',
  poppins_bold: 'Poppins-Bold',
  poppins_extrabold: 'Poppins-ExtraBold',
  poppins_extralight: 'Poppins-ExtraLight',
  poppins_light: 'Poppins-Light',
  poppins_medium: 'Poppins-Medium',
  poppins_regular: 'Poppins-Regular',
  poppins_semibold: 'Poppins-SemiBold',
  poppins_thin: 'Poppins-Thin',
};

interface Size {
  size_8: number;
  size_10: number;
  size_12: number;
  size_14: number;
  size_16: number;
  size_18: number;
  size_20: number;
  size_24: number;
  size_30: number;
}

export const SIZE: Size = {
  size_8: 8,
  size_10: 10,
  size_12: 12,
  size_14: 14,
  size_16: 16,
  size_18: 18,
  size_20: 20,
  size_24: 24,
  size_30: 30,
};

interface Radius {
  radius_4: number;
  radius_8: number;
  radius_10: number;
  radius_15: number;
  radius_20: number;
  radius_25: number;
}

export const RADIUS: Radius = {
  radius_4: 4,
  radius_8: 8,
  radius_10: 10,
  radius_15: 15,
  radius_20: 20,
  radius_25: 25,
};
