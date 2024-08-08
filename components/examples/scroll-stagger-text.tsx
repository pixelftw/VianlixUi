import { PreviewContainer } from "../ui/preview-container";
import { ScrollStaggerText } from "../motion/scroll-stagger-text";

export function ScrollStaggerTextExample() {
  return (
    <PreviewContainer>
      <h4 className="text-center h-40">Scroll To reveal the text</h4>
      <ScrollStaggerText className="text-primary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur magni.
      </ScrollStaggerText>
    </PreviewContainer>
  );
}
