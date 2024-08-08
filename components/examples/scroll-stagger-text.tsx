import { PreviewContainer } from "../ui/preview-container";
import { ScrollStaggerText } from "../motion/scroll-stagger-text";
import { StaggerText } from "../motion/stagger-text";

export function ScrollStaggerTextExample() {
  return (
    <PreviewContainer>
      <StaggerText variant="flip" className="text-5xl font-bold">
        This is some visible content. Scroll down to reveal some more text content
      </StaggerText>
      <ScrollStaggerText className="text-primary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur magni.
      </ScrollStaggerText>
    </PreviewContainer>
  );
}
