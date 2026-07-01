import CertificationHero from "../components/CertificationHero"
import OfficialCertificate from "../components/OfficialCertificate"
import GradePerformance from "../components/GradePerformance"
import WhatThisMean from "../components/WhatThisMean"
import AssesmentPhilosophy from "@/components/AssesmentPhilosophy"

const Certification = () => {
    return (
        <>
           
            <div className="relative z-10">
                <CertificationHero />
                <OfficialCertificate />
                <GradePerformance />
                <AssesmentPhilosophy />
                <WhatThisMean />
            </div>
        </>
    )
}

export default Certification