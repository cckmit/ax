export type IconInfo = {
  id: string;
  name: string;
  font_family: string;
  css_prefix_text: string;
  description: string;
  glyphs: IconList[];
};

export type IconList = {
  icon_id: string;
  name: string;
  font_class: string;
  unicode: string;
  unicode_decimal: number;
};
