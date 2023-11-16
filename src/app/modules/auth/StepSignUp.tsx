import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { StepperComponent } from "../../../_metronic/assets/ts/components";
import {
  ICreateAccount,
  createAccountSchemas,
  inits,
} from "../wizards/components/CreateAccountWizardHelper";
import { Formik, FormikValues } from "formik";
import { Form } from "react-bootstrap";
import { Step1 } from "../wizards/components/steps/Step1";
import { Step2 } from "../wizards/components/steps/Step2";
import { Step3 } from "../wizards/components/steps/Step3";
import { Step4 } from "../wizards/components/steps/Step4";
import { Step5 } from "../wizards/components/steps/Step5";
import { KTIcon, toAbsoluteUrl } from "../../../_metronic/helpers";

const StepSignUp = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null);
  const [stepper, setStepper] = useState<StepperComponent | null>(null);
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0]);
  const [initValues] = useState<ICreateAccount>(inits);

  const loadStepper = () => {
    setStepper(
      StepperComponent.createInsance(stepperRef.current as HTMLDivElement),
    );
  };

  const prevStep = () => {
    if (!stepper) {
      return;
    }

    stepper.goPrev();

    setCurrentSchema(createAccountSchemas[stepper.currentStepIndex - 1]);
  };

  const nextStep = () => {
    if (!stepper) {
      return;
    }

    if (stepper.currentStepIndex !== stepper.totalStepsNumber) {
      setCurrentSchema(createAccountSchemas[stepper.currentStepIndex + 1]);
      stepper.goNext();
    } else {
      stepper.goto(1);
    }
  };

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (!stepper) {
      return;
    }

    if (stepper.currentStepIndex !== stepper.totalStepsNumber) {
      stepper.goNext();
    } else {
      stepper.goto(1);
      actions.resetForm();
    }

    setCurrentSchema(createAccountSchemas[stepper.currentStepIndex - 1]);
  };

  useEffect(() => {
    if (!stepperRef.current) {
      return;
    }

    loadStepper();
  }, [stepperRef]);

  return (
    <div
      ref={stepperRef}
      className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
      id="kt_create_account_stepper"
    >
      {/* begin::Aside*/}
      <div
        className={clsx(
          "d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-600px bgi-size-cover bgi-position-center pt-15",
        )}
        style={{
          backgroundImage: `url(${toAbsoluteUrl("media/misc/auth-bg.png")})`,
        }}
      >
        <div className="d-flex flex-column flex-center py-15 w-100">
          {/* begin::Logo */}
          <Link to="/" className="mb-12">
            <img
              alt="Logo"
              src={toAbsoluteUrl("media/logos/custom-1.png")}
              className="h-75px"
            />
          </Link>
          {/* end::Logo */}
          {/* begin::Wrapper*/}
          <div className="card-body px-6 px-lg-10 px-xxl-15 pt-8">
            {/* begin::Nav*/}
            <div className="stepper-nav">
              {/* begin::Step 1*/}
              <div
                className="stepper-item current"
                data-kt-stepper-element="nav"
              >
                {/* begin::Wrapper*/}
                <div className="stepper-wrapper">
                  {/* begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check"></i>
                    <span className="stepper-number">1</span>
                  </div>
                  {/* end::Icon*/}

                  {/* begin::Label*/}
                  <div className="stepper-label">
                    <h3 className="stepper-title">Account Type</h3>

                    <div className="stepper-desc fw-semibold">
                      Setup your account type
                    </div>
                  </div>
                  {/* end::Label*/}
                </div>
                {/* end::Wrapper*/}

                {/* begin::Line*/}
                <div className="stepper-line h-40px"></div>
                {/* end::Line*/}
              </div>
              {/* end::Step 1*/}

              {/* begin::Step 2*/}
              <div className="stepper-item" data-kt-stepper-element="nav">
                {/* begin::Wrapper*/}
                <div className="stepper-wrapper">
                  {/* begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check"></i>
                    <span className="stepper-number">2</span>
                  </div>
                  {/* end::Icon*/}

                  {/* begin::Label*/}
                  <div className="stepper-label">
                    <h3 className="stepper-title">Personal Info</h3>
                    <div className="stepper-desc fw-semibold">
                      Setup your personal info
                    </div>
                  </div>
                  {/* end::Label*/}
                </div>
                {/* end::Wrapper*/}

                {/* begin::Line*/}
                <div className="stepper-line h-40px"></div>
                {/* end::Line*/}
              </div>
              {/* end::Step 2*/}

              {/* begin::Step 3*/}
              <div className="stepper-item" data-kt-stepper-element="nav">
                {/* begin::Wrapper*/}
                <div className="stepper-wrapper">
                  {/* begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check"></i>
                    <span className="stepper-number">3</span>
                  </div>
                  {/* end::Icon*/}

                  {/* begin::Label*/}
                  <div className="stepper-label">
                    <h3 className="stepper-title">Verification</h3>
                    <div className="stepper-desc fw-semibold">
                      Verify your account
                    </div>
                  </div>
                  {/* end::Label*/}
                </div>
                {/* end::Wrapper*/}

                {/* begin::Line*/}
                <div className="stepper-line h-40px"></div>
                {/* end::Line*/}
              </div>
              {/* end::Step 3*/}

              {/* begin::Step 4*/}
              <div className="stepper-item" data-kt-stepper-element="nav">
                {/* begin::Wrapper*/}
                <div className="stepper-wrapper">
                  {/* begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check"></i>
                    <span className="stepper-number">4</span>
                  </div>
                  {/* end::Icon*/}

                  {/* begin::Label*/}
                  <div className="stepper-label">
                    <h3 className="stepper-title">Creator Info</h3>
                    <div className="stepper-desc fw-semibold">
                      Setup creator details
                    </div>
                  </div>
                  {/* end::Label*/}
                </div>
                {/* end::Wrapper*/}

                {/* begin::Line*/}
                <div className="stepper-line h-40px"></div>
                {/* end::Line*/}
              </div>
              {/* end::Step 4*/}

              {/* begin::Step 5*/}
              <div className="stepper-item" data-kt-stepper-element="nav">
                {/* begin::Wrapper*/}
                <div className="stepper-wrapper">
                  {/* begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check"></i>
                    <span className="stepper-number">5</span>
                  </div>
                  {/* end::Icon*/}

                  {/* begin::Label*/}
                  <div className="stepper-label">
                    <h3 className="stepper-title">Completed</h3>
                    <div className="stepper-desc fw-semibold">
                      Your account is created
                    </div>
                  </div>
                  {/* end::Label*/}
                </div>
                {/* end::Wrapper*/}
              </div>
              {/* end::Step 5*/}
            </div>
            {/* end::Nav*/}
          </div>

          <div className="d-flex flex-center flex-wrap px-5">
            {/* begin::Links */}
            <div className="d-flex ">
              <a
                href="#"
                className="px-5 fw-semibold text-success fs-base"
                target="_blank"
              >
                Terms
              </a>

              <a
                href="#"
                className="px-5 fw-semibold text-success fs-base"
                target="_blank"
              >
                Plans
              </a>

              <a
                href="#"
                className="px-5 fw-semibold text-success fs-base"
                target="_blank"
              >
                Contact Us
              </a>
            </div>
            {/* end::Links */}
          </div>
        </div>
        {/* end::Wrapper*/}
      </div>
      {/* begin::Aside*/}

      <div className="d-flex flex-row-fluid flex-center bg-body rounded">
        <Formik
          validationSchema={currentSchema}
          initialValues={initValues}
          onSubmit={submitStep}
        >
          {() => (
            <Form
              className="py-20 w-100 w-xl-700px px-9"
              noValidate
              id="kt_create_account_form"
            >
              <div className="current" data-kt-stepper-element="content">
                <Step1 />
              </div>

              <div data-kt-stepper-element="content">
                <Step2 />
              </div>

              <div data-kt-stepper-element="content">
                <Step3 />
              </div>

              <div data-kt-stepper-element="content">
                <Step4 />
              </div>

              <div data-kt-stepper-element="content">
                <Step5 />
              </div>

              {stepper?.currentStepIndex !== 2 && (
                <div className="d-flex flex-stack pt-10">
                  <div className="mr-2">
                    <button
                      onClick={prevStep}
                      type="button"
                      className="btn btn-lg btn-light-primary me-3"
                      data-kt-stepper-action="previous"
                    >
                      <KTIcon iconName="arrow-left" className="fs-4 me-1" />
                      Back
                    </button>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="btn btn-lg btn-primary"
                    >
                      <span className="indicator-label d-flex align-items-center justify-content-center">
                        {stepper?.currentStepIndex !==
                          (stepper?.totalStepsNumber || 2) - 1 && "Continue"}
                        {stepper?.currentStepIndex ===
                          (stepper?.totalStepsNumber || 2) - 1 && "Submit"}
                        <KTIcon
                          iconName="arrow-right"
                          className="fs-3 ms-2 me-0"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export { StepSignUp };
