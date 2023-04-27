export type Presentation = {
  presentationId: number;
  name: string;
  slides: Slide[];
};

export type Slide = {
  slideId: number;
  title: string;
  subtitle: string;
  color: string;
  presentationId: number;
};

export type State = {
  currentPresentation: number;
  currentSlide: number;
  data: Presentation[];
};

export type Action = {
  type: string;
  payload?: any;
};
