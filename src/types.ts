export type Presentation = {
  presentationId: number;
  name: string;
  slides: Slide[];
};

export type Slide = {
  slideId: number;
  title: string;
  subtitle: string;
  color: `#${string}`;
};
