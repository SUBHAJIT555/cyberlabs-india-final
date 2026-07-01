import RequestCallbackHero from "../components/RequestCallbackHero";
import WhatThisCall from "../components/WhatThisCall";
import RequestCallbackForm from "../components/RequestCallbackForm";

const RequestCallback = () => {
    return (
        <>
            
            <div className="relative z-10">
                <RequestCallbackHero />
                <WhatThisCall />
                <div
                    className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 border-t border-dashed border-zinc-200"
                    aria-hidden
                />
                <RequestCallbackForm />
            </div>
        </>
    )
}

export default RequestCallback;