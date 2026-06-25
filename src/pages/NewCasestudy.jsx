import React from 'react'
import HeroCaseStudy from '../components/case-study/CaseStudyComponent'
import TreatmentStatsComponent from '../components/case-study/TreatmentStatsComponent'
import LokeshJourneyDetailComponent from '../components/case-study/LokeshJourneyDetailComponent'
import TreatmentJourneyProtocol from '../components/case-study/TreatmentJourneyProtocol'
import TransformationProtocols from '../components/case-study/TransformationProtocols'
import MeasuredOutcomesSection from '../components/case-study/MeasuredOutcomesSection'
import VisualEvidenceComponent from '../components/case-study/VisualEvidenceComponent'
import PatientTestimonial from '../components/case-study/PatientTestimonial'
import DoctorProfileComponent from '../components/case-study/DoctorProfileComponent'
import SuccessStoriesComponent from '../components/case-study/SuccessStoriesComponent'
import FooterSection from '../components/case-study/FooterSection'
import ProgressGallery from '../components/case-study/ProgressGallery'

const NewCasestudy = () => {
  return (
    <div>
      <HeroCaseStudy />
      <TreatmentStatsComponent />
      <LokeshJourneyDetailComponent />
      <TreatmentJourneyProtocol />
      <TransformationProtocols />
      <ProgressGallery />
      <MeasuredOutcomesSection />
      <VisualEvidenceComponent />
      <PatientTestimonial />
      <DoctorProfileComponent />
      <SuccessStoriesComponent />
      <FooterSection />
    </div>
  )
}

export default NewCasestudy
