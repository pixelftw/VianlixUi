import { ScrollStaggerText } from "../motion/text/scroll-stagger-text";
import { PreviewContainer } from "../ui/preview-container";

export function ScrollStaggerTextExample() {
  return (
    <PreviewContainer>
      <h4 className="text-center h-40">Scroll To reveal the text</h4>
      <ScrollStaggerText className="text-primary">
        This Text will be revealed when in center of the view port
      </ScrollStaggerText>
    </PreviewContainer>
  );
}
