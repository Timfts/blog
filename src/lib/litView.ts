import { TemplateResult } from "lit";

export default function litView<T>(
  templateBuilder: (args: T) => TemplateResult<1>
) {
  return function (args: T) {
    return function () {
      // simulating lit's render function
      return templateBuilder(args);
    };
  };
}
