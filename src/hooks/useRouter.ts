import { useRouter as useNextRouter } from "next/navigation";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { completeProgress, isSameUrlNavigation, startProgress } from "../utils/nprogress";

const useRouter = () => {
    const router = useNextRouter();
    
    const push = (
        href: string,
        options?: NavigateOptions
    ) => {
        startProgress();
        router.push(href, options);
        if (isSameUrlNavigation(href)) {
            completeProgress();
        }
    }

    const back = () => {
        startProgress();
        return router.back();
    }

    return {
        ...router,
        push,
        back
    }
}

export default useRouter;