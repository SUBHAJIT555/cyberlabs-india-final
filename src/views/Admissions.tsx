import AdmissionHero from "@/components/AdmissionHero"
import GeneralAdmission from "@/components/GeneralAdmission"
import ProgramAlignmentTable from "@/components/ProgramAlignmentTable"
// import CallToAction from "@/components/CallToAction"
// import WhatDefences from "@/components/WhatDefences"


const Admissions = () => {
    return (
        <>
            
            <div className="relative z-10">
                <AdmissionHero />
                <ProgramAlignmentTable />
                <GeneralAdmission />
            </div>
        </>
    )
}

export default Admissions