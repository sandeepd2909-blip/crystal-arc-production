import "react";

/**
 * <model-viewer> is a web component, so TypeScript needs to be told it exists.
 *
 * This previously used the global `declare namespace JSX`, which React 19 no
 * longer reads — JSX types now live under React.JSX, so the declaration was
 * silently ignored and every usage needed a @ts-expect-error.
 */
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          "auto-rotate"?: boolean | string;
          "auto-rotate-delay"?: number | string;
          "rotation-per-second"?: string;
          "camera-controls"?: boolean | string;
          "camera-orbit"?: string;
          "disable-zoom"?: boolean | string;
          "shadow-intensity"?: string;
          "shadow-softness"?: string;
          "tone-mapping"?: string;
          "min-field-of-view"?: string;
          "max-field-of-view"?: string;
          "field-of-view"?: string;
          exposure?: string;
          "environment-image"?: string;
          "skybox-image"?: string;
          poster?: string;
          loading?: "auto" | "lazy" | "eager";
          reveal?: "auto" | "interaction" | "manual";
          ar?: boolean | string;
          "ar-modes"?: string;
        },
        HTMLElement
      >;
    }
  }
}
