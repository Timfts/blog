import type { Root } from "mdast";
import type { Parent } from "unist";
import { visit } from "unist-util-visit";
import MSN_EMOTICONS from "../../src/constants/msn-emoticons";

type TextSegment = {
  type: "text" | "emoticon";
  content: string;
};

type Node = {
  type: "text" | "html";
  value: string;
};

/**
 * Processes text nodes and replaces msn[shortcut] patterns with emoticon images
 */
export default function remarkMsnEmoticons() {
  return function transformer(tree: Root) {
    visit(tree, "text", function (node: Node, index: number, parent: Parent) {
      // Early return if no msn[] pattern is found
      if (!node.value.includes("msn[")) return;

      // Convert text into nodes
      const segments = splitTextIntoSegments(node.value);
      const nodes = segments.map(segmentToNode);

      // Replace the original node with our processed nodes
      if (nodes.length > 0 && parent && typeof index === "number") {
        parent.children.splice(index, 1, ...nodes);
      }
    });
  };
}

/**
 * Split text into segments, separating emoticons from regular text
 */
function splitTextIntoSegments(text: string): TextSegment[] {
  const pattern = /msn\[\s*([^\]]+)\s*\]/;
  const parts = text.split(pattern);
  return parts
    .map((part, index): TextSegment => {
      if (index % 2 === 1) {
        return { type: "emoticon", content: part.trim() };
      }
      return { type: "text", content: part };
    })
    .filter((segment) => segment.content);
}

/**
 * Convert a text segment into a MDAST node
 */
function segmentToNode(segment: TextSegment): Node {
  if (segment.type === "emoticon") {
    const emoticon = MSN_EMOTICONS.find((e) => e.shortcuts.includes(segment.content));
    if (!emoticon) {
      return { type: "text", value: `msn[${segment.content}]` };
    }
    return {
      type: "html",
      value: `<img src="/images/emoticons/${emoticon.name}.gif" loading="lazy" alt="${emoticon.desc}" title="${segment.content}" class="msn-emoticon" />`,
    };
  }
  return { type: "text", value: segment.content };
}
