import { useRouter as useNextRouter } from "next/navigation";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import nProgress from "nprogress";
import { shouldTriggerProgressStart } from "../utils/shouldTriggerEventStart";

const useRouter = () => {
    const router = useNextRouter();
    
    const push = (
        href: string,
        options?: NavigateOptions
    ) => {
        if (shouldTriggerProgressStart(href)) {            
            nProgress.start();
        }
        router.push(href, options);
    }

    const back = () => {
        nProgress.start();
        return router.back();
    }

    return {
        ...router,
        push,
        back
    }
}

export default useRouter;