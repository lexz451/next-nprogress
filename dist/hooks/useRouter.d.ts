import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
declare const useRouter: () => {
    push: (href: string, options?: NavigateOptions) => void;
    back: () => void;
    forward(): void;
    refresh(): void;
    replace(href: string, options?: NavigateOptions | undefined): void;
    prefetch(href: string, options?: import("next/dist/shared/lib/app-router-context.shared-runtime").PrefetchOptions | undefined): void;
};
export default useRouter;
